const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const {
  GROUP_MEMBERS,
  CURATED_MEDICAL_KNOWLEDGE,
  searchPubMedArticles,
  generateApgStudy,
  generateMentorChatResponse,
  generateActiveReviewQuestion,
  extractTextFromPdfBuffer
} = require('./synapse-engine.js');

const PUBLIC_DIR = path.resolve(__dirname);
const DATA_DIR = path.join(__dirname, 'data');
const TOKEN_SECRET = process.env.SYNAPSE_JWT_SECRET || 'synapse-md-academic-hmac-secret-2026-v1';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff'
};

const RESTRICTED_FILES = new Set([
  'server.js',
  'package.json',
  'package-lock.json',
  'start.bat',
  '.env',
  '.gitignore'
]);

function getDbFilePath() {
  if (process.env.SYNAPSE_DB_PATH) {
    return path.resolve(process.env.SYNAPSE_DB_PATH);
  }
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  return path.join(DATA_DIR, 'synapse-db.json');
}

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const derived = crypto.scryptSync(String(password), salt, 64).toString('hex');
  return `${salt}:${derived}`;
}

function verifyPassword(password, storedHash) {
  if (!storedHash || !storedHash.includes(':')) return false;
  const [salt, keyHex] = storedHash.split(':');
  const derivedBuf = crypto.scryptSync(String(password), salt, 64);
  const keyBuf = Buffer.from(keyHex, 'hex');
  if (derivedBuf.length !== keyBuf.length) return false;
  return crypto.timingSafeEqual(derivedBuf, keyBuf);
}

function signToken(payload) {
  const data = {
    ...payload,
    exp: Date.now() + 1000 * 60 * 60 * 24 * 7
  };
  const base64Payload = Buffer.from(JSON.stringify(data)).toString('base64url');
  const signature = crypto
    .createHmac('sha256', TOKEN_SECRET)
    .update(base64Payload)
    .digest('base64url');
  return `${base64Payload}.${signature}`;
}

function verifyToken(token) {
  if (!token || typeof token !== 'string' || !token.includes('.')) return null;
  const [base64Payload, signature] = token.split('.');
  const expectedSig = crypto
    .createHmac('sha256', TOKEN_SECRET)
    .update(base64Payload)
    .digest('base64url');

  const sigBuf = Buffer.from(signature);
  const expBuf = Buffer.from(expectedSig);
  if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(base64Payload, 'base64url').toString('utf-8'));
    if (!payload.exp || Date.now() > payload.exp) return null;
    return payload;
  } catch (_) {
    return null;
  }
}

function createInitialMemory(seedDemoData = false) {
  if (!seedDemoData) {
    return {
      studiedTopics: [],
      difficulties: [],
      suggestedReviews: [],
      activities: [],
      chatHistory: []
    };
  }
  const now = new Date().toISOString();
  return {
    studiedTopics: [
      {
        topic: 'Fisiopatologia 01 & 02 — Disfunção do EEI na DRGE e H. pylori no Câncer Gástrico',
        specialty: 'Gastroenterologia & Patologia (APG)',
        mastery: 72,
        sessionsCount: 3,
        lastStudiedAt: now
      },
      {
        topic: '1. Sistema Nervoso Central — Organização Anatômica e Funcional',
        specialty: 'Neuroanatomia & Neurofisiologia (2º Período)',
        mastery: 80,
        sessionsCount: 2,
        lastStudiedAt: now
      },
      {
        topic: 'SOI III Caso 01 — Hipertensão Arterial e Emergência Hipertensiva (Lesão de Órgãos-Alvo)',
        specialty: 'SOI III — Casos Clínicos Integrados',
        mastery: 68,
        sessionsCount: 2,
        lastStudiedAt: now
      }
    ],
    difficulties: [
      {
        id: 'diff-demo-1',
        topic: 'SOI III — Caso 02: Dor Torácica e Síndrome Coronariana Aguda',
        subtopic: 'Contraindicação de Nitratos e Betabloqueadores na Hipotensão / Infarto de VD',
        note: 'Reforçar por que a venodilatação por nitratos precipita choque cardiogênico no paciente hipotenso.',
        identifiedAt: now,
        priority: 'Alta'
      }
    ],
    suggestedReviews: [
      {
        id: 'rev-demo-1',
        topic: 'SOI III — Caso 02: Dor Torácica e Síndrome Coronariana Aguda',
        subtopic: 'Manejo da SCA com Hipotensão e Reperfusão',
        reason: 'Ponto de atenção registrado — Revisão ativa recomendada',
        urgency: 'Prioritária'
      },
      {
        id: 'rev-demo-2',
        topic: '6. Sistema Geniturinário — Anatomia e Fisiologia Renal (Formação da Urina)',
        subtopic: 'Filtração Glomerular, Reabsorção no TCP e Ação do ADH/Aldosterona',
        reason: 'Revisão estruturada do roteiro de APG do 2º Período',
        urgency: 'Sugerida'
      }
    ],
    activities: [
      {
        id: 'act-demo-1',
        type: 'APG',
        title: 'Estudo Direcionado APG: DRGE (Esfíncter Esofágico Inferior) e H. pylori',
        detail: 'Integração entre Guyton, Moore, Robbins e Diretriz FBG concluída',
        timestamp: now
      },
      {
        id: 'act-demo-2',
        type: 'CASO',
        title: 'Caso Clínico SOI III: Emergência Hipertensiva e Lesão de Órgãos-Alvo',
        detail: 'Diferenciação entre urgência e emergência hipertensiva e meta de redução de 20-25% na 1ª hora',
        timestamp: now
      }
    ],
    chatHistory: []
  };
}

let memoryDbInstance = null;

function loadDb() {
  if (process.env.SYNAPSE_DB_PATH) {
    const dbPath = path.resolve(process.env.SYNAPSE_DB_PATH);
    if (fs.existsSync(dbPath)) {
      try {
        return JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
      } catch (_) {}
    }
  } else if (memoryDbInstance) {
    return memoryDbInstance;
  }

  const demoUserId = 'usr-demo-synapse';
  const initialDb = {
    users: [
      {
        id: demoUserId,
        name: 'Estudante',
        email: 'estudante@synapsemd.edu.br',
        period: 'Medicina — APG / HAM / SOI III',
        passwordHash: hashPassword('Synapse2026!'),
        createdAt: new Date().toISOString()
      }
    ],
    memories: {
      [demoUserId]: createInitialMemory(true)
    },
    materials: {
      [demoUserId]: [
        {
          id: 'mat-demo-1',
          userId: demoUserId,
          title: 'Caderno 01 — 15 Perguntas APG & HAM (2º Período: Guyton, Moore, Netter, Tortora, Snell e Bates)',
          fileName: 'roteiro-apg-ham-2periodo.pdf',
          mimeType: 'application/pdf',
          extractedText: 'Roteiro acadêmico de estudos: 8 perguntas de APG (SNC, SNP, Potencial de Ação e Sinapses, Visão, Audição e Equilíbrio, Fisiologia Renal, Reprodutor Feminino e Masculino), 5 perguntas de HAM (Exame Neurológico Motor e Reflexos, 12 Pares de Nervos Cranianos, Exame Ginecológico, Cateterismo Vesical de Demora e Suporte Básico de Vida/DEA) e 2 Casos Clínicos Simulados.',
          createdAt: new Date().toISOString()
        },
        {
          id: 'mat-demo-2',
          userId: demoUserId,
          title: 'Caderno 02 — 10 Questões de Raciocínio Clínico (SOI III — Casos Clínicos Integrados)',
          fileName: 'soi-iii-10-casos-clinicos.pdf',
          mimeType: 'application/pdf',
          extractedText: 'Casos clínicos integrados SOI III: 1) Emergência Hipertensiva e Lesão de Órgãos-Alvo; 2) Dor Torácica e Síndrome Coronariana Aguda com Hipotensão; 3) Dispneia Aguda (IC, Asma, DPOC, TEP); 4) TVP e Embolia Pulmonar (Tríade de Virchow); 5) Endocardite Infecciosa vs Febre Reumática; 6) Leucemia Aguda e Pancitopenia; 7) Dengue com Sinais de Alarme vs Malária; 8) Neoplasia Pulmonar vs Tuberculose; 9) Melanoma (ABCDE), Hanseníase e Celulite/Erisipela; 10) Doença de Chagas e Saúde Indígena.',
          createdAt: new Date().toISOString()
        },
        {
          id: 'mat-demo-3',
          userId: demoUserId,
          title: 'Caderno 03 — 20 Questões de Fisiologia e Fisiopatologia Médica',
          fileName: 'fisiologia-e-fisiopatologia-20-questoes.pdf',
          mimeType: 'application/pdf',
          extractedText: '20 questões estruturadas: Disfunção do EEI na DRGE, H. pylori e Câncer Gástrico, Alergia IgE vs Intolerância Alimentar, Doença de Crohn vs Retocolite Ulcerativa, Giardia duodenalis, Mecanismos da Diarreia, Sinais de Obstrução Intestinal, Cirrose e Hipertensão Portal, Síndrome Nefrítica vs Nefrótica, Receptores Hormonais no Câncer de Mama, Condução Elétrica Cardíaca, Troca Gasosa Alveolar, Sistema Linfático, Termorregulação Cutânea, Insulina e Glucagon, Eritropoiese e EPO, Mecânica Ventilatória, Linfócitos B e T, Hemostasia e Glicólise/ATP.',
          createdAt: new Date().toISOString()
        }
      ]
    }
  };
  saveDb(initialDb);
  return initialDb;
}

function saveDb(db) {
  memoryDbInstance = db;
  if (process.env.SYNAPSE_DB_PATH) {
    const dbPath = path.resolve(process.env.SYNAPSE_DB_PATH);
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');
  }
}

function readJsonBody(req, maxBytes = 12 * 1024 * 1024) {
  return new Promise((resolve, reject) => {
    let total = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      total += chunk.length;
      if (total > maxBytes) {
        reject(new Error('PAYLOAD_TOO_LARGE'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      if (chunks.length === 0) return resolve({});
      try {
        const str = Buffer.concat(chunks).toString('utf-8');
        resolve(JSON.parse(str));
      } catch (_) {
        reject(new Error('INVALID_JSON'));
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(JSON.stringify(payload));
}

function getAuthenticatedUser(req, db) {
  const authHeader = req.headers['authorization'] || '';
  if (!authHeader.startsWith('Bearer ')) return null;
  const token = authHeader.slice(7).trim();
  const payload = verifyToken(token);
  if (!payload || !payload.userId) return null;
  const user = db.users.find((u) => u.id === payload.userId);
  return user || null;
}

function ensureUserMemory(db, userId) {
  if (!db.memories[userId]) {
    db.memories[userId] = createInitialMemory(false);
  }
  if (!db.materials[userId]) {
    db.materials[userId] = [];
  }
  return db.memories[userId];
}

function recordTopicStudied(memory, topicTitle, specialty = 'Clínica Médica', deltaMastery = 10) {
  const now = new Date().toISOString();
  const existing = memory.studiedTopics.find(
    (t) => t.topic.toLowerCase() === topicTitle.toLowerCase()
  );
  if (existing) {
    existing.sessionsCount += 1;
    existing.mastery = Math.min(100, Math.max(15, existing.mastery + deltaMastery));
    existing.lastStudiedAt = now;
  } else {
    memory.studiedTopics.unshift({
      topic: topicTitle,
      specialty,
      mastery: Math.min(100, Math.max(30, 62 + deltaMastery)),
      sessionsCount: 1,
      lastStudiedAt: now
    });
  }
}

function createSynapseServer() {
  const server = http.createServer(async (req, res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self';"
    );

    let reqPath;
    let urlObj;
    try {
      urlObj = new URL(req.url, 'http://localhost');
      reqPath = decodeURI(urlObj.pathname);
    } catch (_) {
      return sendJson(res, 400, { error: 'Requisição malformada' });
    }

    if (reqPath.startsWith('/api/')) {
      const db = loadDb();

      // 1. POST /api/auth/register
      if (req.method === 'POST' && reqPath === '/api/auth/register') {
        try {
          const body = await readJsonBody(req);
          const name = String(body.name || '').trim();
          const email = String(body.email || '').trim().toLowerCase();
          const password = String(body.password || '');
          const period = String(body.period || '2º Período — Medicina').trim();

          if (!name || !email || !email.includes('@') || password.length < 6) {
            return sendJson(res, 400, {
              error: 'Informe nome, e-mail válido e senha com no mínimo 6 caracteres.'
            });
          }

          if (db.users.some((u) => u.email === email)) {
            return sendJson(res, 409, { error: 'Este e-mail já está cadastrado na plataforma.' });
          }

          const newUser = {
            id: `usr-${crypto.randomUUID()}`,
            name,
            email,
            period,
            passwordHash: hashPassword(password),
            createdAt: new Date().toISOString()
          };

          db.users.push(newUser);
          ensureUserMemory(db, newUser.id);
          saveDb(db);

          const token = signToken({ userId: newUser.id, email: newUser.email });
          return sendJson(res, 201, {
            token,
            user: {
              id: newUser.id,
              name: newUser.name,
              email: newUser.email,
              period: newUser.period
            }
          });
        } catch (_) {
          return sendJson(res, 400, { error: 'Dados de cadastro inválidos.' });
        }
      }

      // 2. POST /api/auth/login
      if (req.method === 'POST' && reqPath === '/api/auth/login') {
        try {
          const body = await readJsonBody(req);
          const email = String(body.email || '').trim().toLowerCase();
          const password = String(body.password || '');

          let user = db.users.find((u) => u.email === email);

          // Se for a conta demo padrão, aceita qualquer variação de senha
          if (user && email === 'estudante@synapsemd.edu.br') {
            ensureUserMemory(db, user.id);
            const token = signToken({ userId: user.id, email: user.email });
            return sendJson(res, 200, {
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
                period: user.period
              }
            });
          }

          // Se o estudante digitou seu próprio e-mail direto na aba de Login, cria a conta automaticamente para facilitar o acesso
          if (!user && email.includes('@') && password.length >= 3) {
            const guessedName = email.split('@')[0].replace(/[._-]/g, ' ');
            user = {
              id: `usr-${crypto.randomUUID()}`,
              name: guessedName.charAt(0).toUpperCase() + guessedName.slice(1),
              email,
              period: '2º Período — Medicina (APG & SOI III)',
              passwordHash: hashPassword(password),
              createdAt: new Date().toISOString()
            };
            db.users.push(user);
            db.memories[user.id] = createInitialMemory(true);
            db.materials[user.id] = [...(db.materials['usr-demo-synapse'] || [])];
            saveDb(db);
          } else if (!user || !verifyPassword(password, user.passwordHash)) {
            return sendJson(res, 401, { error: 'E-mail ou senha incorretos.' });
          }

          ensureUserMemory(db, user.id);
          const token = signToken({ userId: user.id, email: user.email });
          return sendJson(res, 200, {
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              period: user.period
            }
          });
        } catch (_) {
          return sendJson(res, 400, { error: 'Requisição de login inválida.' });
        }
      }

      // 3. POST /api/auth/demo
      if (req.method === 'POST' && reqPath === '/api/auth/demo') {
        const demoUser = db.users.find((u) => u.email === 'estudante@synapsemd.edu.br') || db.users[0];
        ensureUserMemory(db, demoUser.id);
        const token = signToken({ userId: demoUser.id, email: demoUser.email });
        return sendJson(res, 200, {
          token,
          user: {
            id: demoUser.id,
            name: demoUser.name,
            email: demoUser.email,
            period: demoUser.period
          }
        });
      }

      // Autenticação obrigatória para rotas protegidas
      const user = getAuthenticatedUser(req, db);
      if (!user) {
        return sendJson(res, 401, { error: 'Não autorizado. Faça login na plataforma Synapse MD.' });
      }
      const memory = ensureUserMemory(db, user.id);
      const userMaterials = db.materials[user.id] || [];

      // 4. GET /api/auth/me & GET /api/profile
      if (req.method === 'GET' && (reqPath === '/api/auth/me' || reqPath === '/api/profile')) {
        return sendJson(res, 200, {
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            period: user.period
          },
          memory,
          materials: userMaterials.map((m) => ({
            id: m.id,
            title: m.title,
            type: m.mimeType === 'application/pdf' ? 'PDF Acadêmico' : 'Roteiro / Resumo',
            fileName: m.fileName,
            mimeType: m.mimeType,
            excerpt: m.extractedText,
            extractedText: m.extractedText,
            uploadedAt: (m.createdAt || '').slice(0, 10),
            createdAt: m.createdAt
          })),
          groupMembers: GROUP_MEMBERS
        });
      }

      // 5. GET /api/catalog
      if (req.method === 'GET' && reqPath === '/api/catalog') {
        const mappedCatalog = CURATED_MEDICAL_KNOWLEDGE.map((item) => ({
          id: item.id,
          category: item.category,
          track: item.category,
          title: item.title,
          topic: item.title,
          specialty: item.specialty,
          evidenceLevel: item.evidenceConfidence.level
        }));
        return sendJson(res, 200, {
          groupMembers: GROUP_MEMBERS,
          topics: mappedCatalog,
          catalog: mappedCatalog
        });
      }

      // 6. POST /api/apg/study
      if (req.method === 'POST' && reqPath === '/api/apg/study') {
        try {
          const body = await readJsonBody(req);
          const topic = String(body.topic || '').trim();
          const objectives = Array.isArray(body.objectives)
            ? body.objectives.map((o) => String(o).trim()).filter(Boolean)
            : [];

          if (!topic) {
            return sendJson(res, 400, { error: 'Informe o tema ou problema da sua APG.' });
          }

          const studyResult = await generateApgStudy({
            topic,
            objectives
          });

          recordTopicStudied(memory, studyResult.title, studyResult.specialty, 10);
          memory.activities.unshift({
            id: `act-${crypto.randomUUID()}`,
            type: 'APG',
            title: `Estudo Direcionado: ${studyResult.title}`,
            detail: objectives.length > 0
              ? `Objetivos: ${objectives.join(' • ')}`
              : 'Mapeamento em 5 eixos (Anatomia, Fisiologia, Fisiopatologia, Diagnóstico e Conduta)',
            timestamp: new Date().toISOString()
          });

          saveDb(db);
          return sendJson(res, 200, studyResult);
        } catch (_) {
          return sendJson(res, 500, { error: 'Erro ao estruturar roteiro de APG.' });
        }
      }

      // 7. POST /api/chat
      if (req.method === 'POST' && reqPath === '/api/chat') {
        try {
          const body = await readJsonBody(req);
          const message = String(body.message || '').trim();
          const mode = String(body.mode || 'socratic');
          const apgTopic = String(body.apgTopic || '').trim();
          const useOwnMaterials = Boolean(body.useOwnMaterials);

          if (!message) {
            return sendJson(res, 400, { error: 'Digite uma pergunta ou raciocínio clínico.' });
          }

          const chatResult = await generateMentorChatResponse({
            message,
            mode,
            apgTopic,
            useOwnMaterials,
            materials: userMaterials
          });

          recordTopicStudied(memory, chatResult.matchedTopic, 'Mentor Socrático', 6);
          memory.activities.unshift({
            id: `act-${crypto.randomUUID()}`,
            type: 'MENTORIA',
            title: `Mentor Socrático: ${chatResult.matchedTopic}`,
            detail: `Pergunta: "${message.slice(0, 90)}${message.length > 90 ? '...' : ''}"`,
            timestamp: new Date().toISOString()
          });

          memory.chatHistory.push({
            id: `msg-${crypto.randomUUID()}`,
            role: 'user',
            text: message,
            timestamp: new Date().toISOString()
          });
          memory.chatHistory.push({
            id: `msg-${crypto.randomUUID()}`,
            role: 'assistant',
            text: chatResult.reply,
            socraticPrompt: chatResult.socraticPrompt,
            references: chatResult.references,
            evidenceConfidence: chatResult.evidenceConfidence,
            usedOwnMaterials: chatResult.usedOwnMaterials,
            timestamp: new Date().toISOString()
          });

          saveDb(db);
          return sendJson(res, 200, chatResult);
        } catch (_) {
          return sendJson(res, 500, { error: 'Erro ao processar resposta do mentor acadêmico.' });
        }
      }

      // 8. POST /api/reviews/generate
      if (req.method === 'POST' && reqPath === '/api/reviews/generate') {
        try {
          const body = await readJsonBody(req);
          const topic = String(body.topic || '').trim();
          const question = generateActiveReviewQuestion({
            topic,
            difficulties: memory.difficulties
          });
          return sendJson(res, 200, question);
        } catch (_) {
          return sendJson(res, 500, { error: 'Erro ao elaborar questão de revisão ativa.' });
        }
      }

      // 9. POST /api/reviews/submit
      if (req.method === 'POST' && reqPath === '/api/reviews/submit') {
        try {
          const body = await readJsonBody(req);
          const topic = String(body.topic || 'Clínica Médica').trim();
          const subtopic = String(body.subtopic || topic).trim();
          const isCorrect = Boolean(body.isCorrect);
          const studentReasoning = String(body.studentReasoning || '').trim();

          const now = new Date().toISOString();

          if (!isCorrect) {
            const existingDiff = memory.difficulties.find(
              (d) => d.subtopic.toLowerCase() === subtopic.toLowerCase()
            );
            if (!existingDiff) {
              memory.difficulties.unshift({
                id: `diff-${crypto.randomUUID()}`,
                topic,
                subtopic,
                note: studentReasoning
                  ? `Dúvida registrada: "${studentReasoning}"`
                  : `Erro em questão clínica sobre ${subtopic}. Recomendado revisar mecanismo fisiopatológico.`,
                identifiedAt: now,
                priority: 'Alta'
              });
            }

            const existingRev = memory.suggestedReviews.find(
              (r) => r.subtopic.toLowerCase() === subtopic.toLowerCase()
            );
            if (!existingRev) {
              memory.suggestedReviews.unshift({
                id: `rev-${crypto.randomUUID()}`,
                topic,
                subtopic,
                reason: 'Lacuna detectada durante simulação clínica — Revisão prioritária',
                urgency: 'Prioritária'
              });
            }
            recordTopicStudied(memory, topic, 'Casos Clínicos', -4);
          } else {
            recordTopicStudied(memory, topic, 'Casos Clínicos', 12);
            memory.difficulties = memory.difficulties.filter(
              (d) => d.subtopic.toLowerCase() !== subtopic.toLowerCase()
            );
          }

          memory.activities.unshift({
            id: `act-${crypto.randomUUID()}`,
            type: 'REVISAO',
            title: `Caso Clínico (${isCorrect ? 'Domínio Confirmado' : 'Lacuna Identificada'}): ${subtopic}`,
            detail: studentReasoning
              ? `Raciocínio: "${studentReasoning.slice(0, 100)}"`
              : `Questão comentada sobre ${topic}`,
            timestamp: now
          });

          saveDb(db);

          const feedback = isCorrect
            ? `Excelente raciocínio clínico! Você consolidou o domínio em "${subtopic}".`
            : `Identificamos uma lacuna em "${subtopic}". Registramos na sua Memória Educacional para revisão direcionada.`;

          return sendJson(res, 200, {
            feedback,
            memoryUpdated: true,
            memory
          });
        } catch (_) {
          return sendJson(res, 500, { error: 'Erro ao registrar revisão na memória acadêmica.' });
        }
      }

      // 10. GET /api/memory
      if (req.method === 'GET' && reqPath === '/api/memory') {
        return sendJson(res, 200, {
          studiedTopics: memory.studiedTopics,
          difficulties: memory.difficulties,
          suggestedReviews: memory.suggestedReviews,
          activities: memory.activities.slice(0, 20),
          chatHistory: memory.chatHistory.slice(-20)
        });
      }

      // 11. GET / POST / DELETE /api/materials
      if (req.method === 'GET' && reqPath === '/api/materials') {
        const sanitizedList = userMaterials.map((m) => ({
          id: m.id,
          title: m.title,
          fileName: m.fileName,
          mimeType: m.mimeType,
          extractedText: m.extractedText,
          createdAt: m.createdAt
        }));
        return sendJson(res, 200, { materials: sanitizedList });
      }

      if (req.method === 'POST' && reqPath === '/api/materials') {
        try {
          const body = await readJsonBody(req);
          const title = String(body.title || '').trim();
          const fileName = String(body.fileName || 'documento.pdf').trim();
          const mimeType = String(body.mimeType || 'application/pdf').trim();
          const fileBase64 = String(body.fileBase64 || '').trim();
          const textNote = String(body.textContent || '').trim();

          if (!title) {
            return sendJson(res, 400, { error: 'Informe um título para o material de estudo.' });
          }

          let extractedText = textNote;

          if (fileBase64) {
            const fileBuffer = Buffer.from(fileBase64, 'base64');
            const magicHeader = fileBuffer.subarray(0, 5).toString('ascii');
            if (mimeType === 'application/pdf' && magicHeader !== '%PDF-') {
              return sendJson(res, 400, {
                error: 'Arquivo inválido: a assinatura binária não corresponde a um documento PDF autêntico (%PDF-).'
              });
            }
            extractedText = extractTextFromPdfBuffer(fileBuffer, title);
          }

          if (!extractedText) {
            return sendJson(res, 400, { error: 'Forneça um arquivo PDF válido ou conteúdo textual.' });
          }

          const newMaterial = {
            id: `mat-${crypto.randomUUID()}`,
            userId: user.id,
            title,
            fileName,
            mimeType,
            extractedText: extractedText.slice(0, 8000),
            createdAt: new Date().toISOString()
          };

          db.materials[user.id].unshift(newMaterial);
          memory.activities.unshift({
            id: `act-${crypto.randomUUID()}`,
            type: 'MATERIAL',
            title: `Material Adicionado: ${title}`,
            detail: `Arquivo ${fileName} indexado na Biblioteca Pessoal`,
            timestamp: new Date().toISOString()
          });
          saveDb(db);

          return sendJson(res, 201, {
            material: {
              id: newMaterial.id,
              title: newMaterial.title,
              fileName: newMaterial.fileName,
              mimeType: newMaterial.mimeType,
              extractedText: newMaterial.extractedText,
              createdAt: newMaterial.createdAt
            }
          });
        } catch (err) {
          if (err.message === 'PAYLOAD_TOO_LARGE') {
            return sendJson(res, 413, { error: 'Arquivo excede o limite máximo de 12MB.' });
          }
          return sendJson(res, 400, { error: 'Erro ao processar envio do material.' });
        }
      }

      if (req.method === 'DELETE' && reqPath.startsWith('/api/materials/')) {
        const matId = reqPath.replace('/api/materials/', '').trim();
        const idx = db.materials[user.id].findIndex((m) => m.id === matId && m.userId === user.id);
        if (idx === -1) {
          return sendJson(res, 404, { error: 'Material não encontrado ou acesso negado.' });
        }
        db.materials[user.id].splice(idx, 1);
        saveDb(db);
        return sendJson(res, 200, { deleted: true });
      }

      // 12. GET /api/pubmed/search?q=...
      if (req.method === 'GET' && reqPath === '/api/pubmed/search') {
        const query = urlObj.searchParams.get('q') || '';
        const articles = await searchPubMedArticles(query, 4);
        return sendJson(res, 200, { articles });
      }

      return sendJson(res, 404, { error: 'Endpoint da API não encontrado.' });
    }

    // Servidor de Arquivos Estáticos
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Método não permitido');
    }

    if (reqPath === '/' || reqPath === '') {
      reqPath = '/index.html';
    }

    const cleanPath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.resolve(PUBLIC_DIR, '.' + cleanPath);

    if (!filePath.startsWith(PUBLIC_DIR + path.sep) && filePath !== PUBLIC_DIR) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Acesso Negado');
    }

    const baseFileName = path.basename(filePath).toLowerCase();
    if (baseFileName.startsWith('.') || RESTRICTED_FILES.has(baseFileName)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Acesso Negado a arquivo restrito');
    }

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('Arquivo não encontrado');
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext];
      if (!contentType) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('Tipo de arquivo não permitido');
      }

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });

      if (req.method === 'HEAD') {
        return res.end();
      }

      const stream = fs.createReadStream(filePath);
      stream.on('error', () => {
        if (!res.headersSent) {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        }
        res.end('Erro interno ao ler arquivo');
      });
      stream.pipe(res);
    });
  });

  return server;
}

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  const srv = createSynapseServer();
  srv.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`✦ SYNAPSE MD — Plataforma Acadêmica Iniciada!`);
    console.log(`✦ Acesse pelo navegador em: http://localhost:${PORT}`);
    console.log(`======================================================\n`);
  });
}

module.exports = { createSynapseServer };
