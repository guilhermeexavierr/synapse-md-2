/**
 * SYNAPSE MD — Frontend Controller (Versão Dia 2)
 * Grupo: Lanna Maria Ribas Luz, Laura Meira Porto, Mariane Gomes Bandeira, Thaís Silva Nolasco
 * Suporta operação híbrida: Servidor Node (http://localhost:3000) OU modo direto (file:// / Live Server)
 */

function createDefaultLocalMemory() {
  const today = new Date().toISOString().slice(0, 10);
  return {
    studiedTopics: [
      {
        topic: 'Fisiopatologia 01 & 02 — Disfunção do EEI na DRGE e H. pylori no Câncer Gástrico',
        specialty: 'Gastroenterologia & Patologia',
        mastery: 82,
        sessionsCount: 3,
        lastStudiedAt: today
      },
      {
        topic: '1. Sistema Nervoso Central — Organização Anatômica e Funcional',
        specialty: 'Morfofisiologia (APG 2º Período)',
        mastery: 76,
        sessionsCount: 2,
        lastStudiedAt: today
      },
      {
        topic: 'SOI III Caso 01 — Hipertensão Arterial e Emergência Hipertensiva (Lesão de Órgãos-Alvo)',
        specialty: 'Cardiologia & Emergências (SOI III)',
        mastery: 78,
        sessionsCount: 2,
        lastStudiedAt: today
      },
      {
        topic: 'Fisiologia 01 — Sistema de Condução Elétrica do Coração e Sincronia Atrioventricular',
        specialty: 'Fisiologia Cardiovascular',
        mastery: 74,
        sessionsCount: 2,
        lastStudiedAt: today
      }
    ],
    difficulties: [
      {
        id: 'diff-1',
        topic: 'SOI III Caso 02 — Dor Torácica: Síndrome Coronariana Aguda, Choque e Diagnóstico Diferencial',
        subtopic: 'Contraindicação de Nitratos e Betabloqueadores na Hipotensão / Infarto de VD',
        note: 'Reforçar por que a venodilatação por nitratos precipita choque cardiogênico no paciente hipotenso.',
        priority: 'Alta'
      }
    ],
    suggestedReviews: [
      {
        id: 'rev-1',
        topic: 'SOI III Caso 02 — Dor Torácica: Síndrome Coronariana Aguda, Choque e Diagnóstico Diferencial',
        subtopic: 'Manejo da SCA com Hipotensão e Reperfusão',
        reason: 'Ponto de atenção registrado — Revisão ativa recomendada',
        urgency: 'Prioritária'
      },
      {
        id: 'rev-2',
        topic: '6. Sistema Geniturinário — Anatomia e Fisiologia Renal (Formação da Urina)',
        subtopic: 'Filtração Glomerular, Reabsorção no TCP e Ação do ADH/Aldosterona',
        reason: 'Revisão estruturada do roteiro de APG do 2º Período',
        urgency: 'Sugerida'
      }
    ],
    activities: [
      {
        id: 'act-1',
        type: 'APG',
        title: 'Estudo Direcionado APG: DRGE (Esfíncter Esofágico Inferior) e H. pylori',
        detail: 'Integração entre Guyton, Moore, Robbins e Diretriz FBG concluída',
        timestamp: today
      },
      {
        id: 'act-2',
        type: 'CASO',
        title: 'Caso Clínico SOI III: Emergência Hipertensiva e Lesão de Órgãos-Alvo',
        detail: 'Diferenciação entre urgência e emergência hipertensiva e meta de redução de 20-25% na 1ª hora',
        timestamp: today
      }
    ]
  };
}

function createDefaultLocalMaterials() {
  return [
    {
      id: 'mat-demo-1',
      title: 'Caderno 01 — 15 Perguntas APG & HAM (2º Período: Guyton, Moore, Netter, Tortora, Snell e Bates)',
      type: 'PDF Acadêmico',
      uploadedAt: '2026-10-27',
      excerpt:
        'Roteiro oficial do grupo (Lanna Maria Ribas Luz, Laura Meira Porto, Mariane Gomes Bandeira, Thaís Silva Nolasco): 8 perguntas de APG (SNC, SNP, Potencial de Ação e Sinapses, Visão, Audição e Equilíbrio, Fisiologia Renal, Reprodutor Feminino e Masculino), 5 perguntas de HAM (Exame Neurológico Motor e Reflexos, 12 Pares de Nervos Cranianos, Exame Ginecológico, Cateterismo Vesical de Demora e Suporte Básico de Vida/DEA) e 2 Casos Clínicos Simulados.'
    },
    {
      id: 'mat-demo-2',
      title: 'Caderno 02 — 10 Questões de Raciocínio Clínico (SOI III — Casos Clínicos Integrados)',
      type: 'PDF Acadêmico',
      uploadedAt: '2026-10-27',
      excerpt:
        'Casos clínicos integrados SOI III: 1) Emergência Hipertensiva e Lesão de Órgãos-Alvo; 2) Dor Torácica e Síndrome Coronariana Aguda com Hipotensão; 3) Dispneia Aguda (IC, Asma, DPOC, TEP); 4) TVP e Embolia Pulmonar (Tríade de Virchow); 5) Endocardite Infecciosa vs Febre Reumática; 6) Leucemia Aguda e Pancitopenia; 7) Dengue com Sinais de Alarme vs Malária; 8) Neoplasia Pulmonar vs Tuberculose; 9) Melanoma (ABCDE), Hanseníase e Celulite/Erisipela; 10) Doença de Chagas e Saúde Indígena.'
    },
    {
      id: 'mat-demo-3',
      title: 'Caderno 03 — 20 Questões de Fisiologia e Fisiopatologia Médica',
      type: 'PDF Acadêmico',
      uploadedAt: '2026-10-27',
      excerpt:
        '20 questões estruturadas: Disfunção do EEI na DRGE, H. pylori e Câncer Gástrico, Alergia IgE vs Intolerância Alimentar, Doença de Crohn vs Retocolite Ulcerativa, Giardia duodenalis, Mecanismos da Diarreia, Sinais de Obstrução Intestinal, Cirrose e Hipertensão Portal, Síndrome Nefrítica vs Nefrótica, Receptores Hormonais no Câncer de Mama, Condução Elétrica Cardíaca, Troca Gasosa Alveolar, Sistema Linfático, Termorregulação Cutânea, Insulina e Glucagon, Eritropoiese e EPO, Mecânica Ventilatória, Linfócitos B e T, Hemostasia e Glicólise/ATP.'
    }
  ];
}

const state = {
  token: localStorage.getItem('synapse_token') || null,
  theme: localStorage.getItem('synapse_theme') || 'dark',
  authMode: 'login',
  user: null,
  memory: createDefaultLocalMemory(),
  materials: createDefaultLocalMaterials(),
  catalog: [],
  currentApgTopic: 'Fisiopatologia 01 & 02 — Disfunção do EEI na DRGE e H. pylori no Câncer Gástrico',
  currentCatalogFilter: 'ALL',
  currentReviewQuestion: null,
  selectedOptionIndex: null,
  chatHistory: []
};

/* ============================================================================
 * TEMA CLARO / TEMA ESCURO
 * ============================================================================ */

function applySavedTheme() {
  const theme = state.theme === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);

  const isLight = theme === 'light';
  const nextIcon = isLight ? '🌙' : '☀️';
  const nextLabel = isLight ? 'Tema Escuro' : 'Tema Claro';

  const authIcon = document.getElementById('auth-theme-icon');
  const authLabel = document.getElementById('auth-theme-label');
  const appIcon = document.getElementById('app-theme-icon');
  const appLabel = document.getElementById('app-theme-label');

  if (authIcon) authIcon.textContent = nextIcon;
  if (authLabel) authLabel.textContent = nextLabel;
  if (appIcon) appIcon.textContent = nextIcon;
  if (appLabel) appLabel.textContent = nextLabel;
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('synapse_theme', state.theme);
  applySavedTheme();
}

/* ============================================================================
 * API HELPER COM FALLBACK AUTOMÁTICO LOCAL (FUNCIONA COM OU SEM SERVIDOR)
 * ============================================================================ */

async function apiFetch(endpoint, options = {}) {
  // Se estiver aberto via file://, usa direto o motor local no navegador
  if (window.location.protocol === 'file:') {
    return handleOfflineRequest(endpoint, options);
  }

  try {
    const headers = {
      ...(options.headers || {})
    };

    if (state.token) {
      headers['Authorization'] = `Bearer ${state.token}`;
    }

    if (options.body && !(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }

    const res = await fetch(endpoint, {
      ...options,
      headers
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      // Se o endpoint não existir ou der falha de conexão, usa o motor local embarcado
      if (res.status === 404 || res.status >= 500) {
        return handleOfflineRequest(endpoint, options);
      }
      throw new Error(data.error || `Erro na comunicação (${res.status})`);
    }
    return data;
  } catch (err) {
    // Se o servidor Node não estiver rodando (ex: Live Server ou abertura direta), usa o motor local
    if (window.SynapseEngine) {
      return handleOfflineRequest(endpoint, options);
    }
    throw err;
  }
}

async function handleOfflineRequest(endpoint, options = {}) {
  const engine = window.SynapseEngine || {};
  const knowledge = engine.CURATED_MEDICAL_KNOWLEDGE || [];
  let body = {};
  if (typeof options.body === 'string') {
    try {
      body = JSON.parse(options.body);
    } catch (_) {}
  }

  if (endpoint === '/api/auth/login' || endpoint === '/api/auth/register' || endpoint === '/api/auth/demo') {
    const email = (body.email || 'estudante@synapsemd.edu.br').trim();
    const name = body.name || 'Lanna Maria Ribas Luz (Grupo Synapse MD)';
    const period = body.period || 'Medicina — APG / HAM / SOI III';
    const user = { id: 'usr-local', name, email, period };
    return { token: 'local-synapse-token', user };
  }

  if (endpoint === '/api/profile' || endpoint === '/api/auth/me') {
    return {
      user: state.user || {
        id: 'usr-local',
        name: 'Lanna Maria Ribas Luz (Grupo Synapse MD)',
        email: 'estudante@synapsemd.edu.br',
        period: 'Medicina — APG / HAM / SOI III'
      },
      memory: state.memory,
      materials: state.materials
    };
  }

  if (endpoint === '/api/catalog') {
    const mapped = knowledge.map((item) => ({
      id: item.id,
      category: item.category,
      track: item.category,
      title: item.title,
      topic: item.title,
      specialty: item.specialty,
      evidenceLevel: item.evidenceConfidence?.level || 'Alto'
    }));
    return { catalog: mapped, topics: mapped };
  }

  if (endpoint === '/api/apg/study' && engine.generateApgStudy) {
    return await engine.generateApgStudy({
      topic: body.topic || state.currentApgTopic,
      objectives: body.objectives || []
    });
  }

  if (endpoint === '/api/chat' && engine.generateMentorChatResponse) {
    return await engine.generateMentorChatResponse({
      message: body.message || '',
      apgTopic: body.apgTopic || state.currentApgTopic,
      useOwnMaterials: true,
      materials: state.materials.map((m) => ({
        title: m.title,
        fileName: m.fileName || 'roteiro.pdf',
        extractedText: m.excerpt || m.extractedText || '',
        createdAt: new Date().toISOString()
      }))
    });
  }

  if (endpoint === '/api/reviews/generate' && engine.generateActiveReviewQuestion) {
    return engine.generateActiveReviewQuestion({
      topic: body.topic || state.currentApgTopic,
      difficulties: state.memory.difficulties
    });
  }

  if (endpoint === '/api/reviews/submit') {
    return {
      feedback: body.isCorrect ? 'Raciocínio clínico correto!' : 'Lacuna registrada para revisão.',
      memoryUpdated: true,
      memory: state.memory
    };
  }

  if (endpoint === '/api/memory') {
    return state.memory;
  }

  if (endpoint === '/api/materials') {
    if (options.method === 'POST') {
      const newMat = {
        id: 'mat-' + Date.now(),
        title: body.title || 'Novo Material',
        type: body.type || 'Resumo / APG',
        uploadedAt: new Date().toISOString().slice(0, 10),
        excerpt: body.content || body.textContent || ''
      };
      state.materials.unshift(newMat);
    }
    return { materials: state.materials };
  }

  return {};
}

/* ============================================================================
 * AUTENTICAÇÃO E SESSÃO
 * ============================================================================ */

function switchAuthTab(mode) {
  state.authMode = mode;
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  const regFields = document.getElementById('register-fields');
  const submitBtn = document.getElementById('auth-submit-btn');
  const errEl = document.getElementById('auth-error');

  if (errEl) errEl.classList.add('hidden');

  if (mode === 'register') {
    tabLogin.classList.remove('active');
    tabRegister.classList.add('active');
    regFields.classList.remove('hidden');
    submitBtn.textContent = 'Criar Conta Acadêmica';
  } else {
    tabRegister.classList.remove('active');
    tabLogin.classList.add('active');
    regFields.classList.remove('hidden');
    regFields.classList.add('hidden');
    submitBtn.textContent = 'Entrar na Synapse MD';
  }
}

async function handleAuthSubmit(event) {
  if (event && event.preventDefault) event.preventDefault();
  const errEl = document.getElementById('auth-error');
  if (errEl) errEl.classList.add('hidden');

  const email = (document.getElementById('auth-email')?.value || 'estudante@synapsemd.edu.br').trim();
  const password = document.getElementById('auth-password')?.value || 'Synapse2026!';
  const name = (document.getElementById('auth-name')?.value || '').trim();
  const period = document.getElementById('auth-period')?.value || '2º Período — Medicina (APG & HAM)';

  try {
    const endpoint = state.authMode === 'register' ? '/api/auth/register' : '/api/auth/login';
    const payload = state.authMode === 'register'
      ? { name: name || 'Lanna Maria Ribas Luz (Grupo Synapse MD)', email, password, period }
      : { email, password };

    const data = await apiFetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    state.token = data.token || 'synapse-session-token';
    state.user = data.user || {
      name: name || 'Lanna Maria Ribas Luz (Grupo Synapse MD)',
      email,
      period
    };
    localStorage.setItem('synapse_token', state.token);
    await bootstrapWorkspace();
  } catch (err) {
    // Fallback garantido: se qualquer erro ocorrer no login, entra direto no modo de demonstração acadêmica
    console.warn('Usando acesso direto de contingência:', err.message);
    state.token = 'synapse-demo-fallback-token';
    state.user = {
      name: name || 'Lanna Maria Ribas Luz (Grupo Synapse MD)',
      email: email || 'estudante@synapsemd.edu.br',
      period: period || 'Medicina — APG / HAM / SOI III'
    };
    localStorage.setItem('synapse_token', state.token);
    await bootstrapWorkspace();
  }
}

async function loginWithDemoAccount() {
  const emailInput = document.getElementById('auth-email');
  const passInput = document.getElementById('auth-password');
  if (emailInput) emailInput.value = 'estudante@synapsemd.edu.br';
  if (passInput) passInput.value = 'Synapse2026!';
  switchAuthTab('login');
  await handleAuthSubmit({ preventDefault: () => {} });
}

function logoutStudent() {
  state.token = null;
  state.user = null;
  localStorage.removeItem('synapse_token');
  document.getElementById('app-shell').classList.add('hidden');
  document.getElementById('auth-screen').classList.remove('hidden');
}

/* ============================================================================
 * INICIALIZAÇÃO DA PLATAFORMA
 * ============================================================================ */

async function bootstrapWorkspace() {
  // Abre imediatamente a interface principal
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app-shell').classList.remove('hidden');

  try {
    const [profileData, catalogData, memoryData, materialsData] = await Promise.all([
      apiFetch('/api/auth/me').catch(() => ({})),
      apiFetch('/api/catalog').catch(() => ({})),
      apiFetch('/api/memory').catch(() => null),
      apiFetch('/api/materials').catch(() => null)
    ]);

    if (profileData && profileData.user) {
      state.user = profileData.user;
    } else if (!state.user) {
      state.user = {
        name: 'Lanna Maria Ribas Luz (Grupo Synapse MD)',
        email: 'estudante@synapsemd.edu.br',
        period: 'Medicina — APG / HAM / SOI III'
      };
    }

    if (memoryData && memoryData.studiedTopics) {
      state.memory = memoryData;
    } else if (profileData && profileData.memory) {
      state.memory = profileData.memory;
    }

    const rawMaterials = (materialsData && materialsData.materials) || (profileData && profileData.materials);
    if (Array.isArray(rawMaterials) && rawMaterials.length > 0) {
      state.materials = rawMaterials.map((m) => ({
        id: m.id,
        title: m.title,
        type: m.type || (m.mimeType === 'application/pdf' ? 'PDF Acadêmico' : 'Roteiro do Grupo'),
        uploadedAt: m.uploadedAt || (m.createdAt ? m.createdAt.slice(0, 10) : '2026-10-27'),
        excerpt: m.excerpt || m.extractedText || ''
      }));
    }

    const rawCatalog = (catalogData && (catalogData.catalog || catalogData.topics)) || [];
    if (rawCatalog.length > 0) {
      state.catalog = rawCatalog.map((it) => ({
        id: it.id,
        track: it.track || it.category || 'Módulo Acadêmico',
        topic: it.topic || it.title
      }));
    } else if (window.SynapseEngine && window.SynapseEngine.CURATED_MEDICAL_KNOWLEDGE) {
      state.catalog = window.SynapseEngine.CURATED_MEDICAL_KNOWLEDGE.map((it) => ({
        id: it.id,
        track: it.category,
        topic: it.title
      }));
    }
  } catch (err) {
    console.warn('Inicializando com dados locais embarcados:', err.message);
  }

  renderUserSidebar();
  populateReviewTopicSelect();
  renderInitialMentorMessage();
  renderCatalogCards();
  await loadApgTopic(state.currentApgTopic);
  await loadNewReviewQuestion(state.currentApgTopic);
  renderAcademicMemory();
  renderMaterialsList();
}

function renderUserSidebar() {
  if (!state.user) return;
  const initials = (state.user.name || 'LM')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join('');

  const avatarEl = document.getElementById('user-avatar');
  const nameEl = document.getElementById('user-name-display');
  const periodEl = document.getElementById('user-period-display');

  if (avatarEl) avatarEl.textContent = initials || 'LM';
  if (nameEl) nameEl.textContent = state.user.name;
  if (periodEl) periodEl.textContent = state.user.period || 'Medicina — APG & SOI III';

  updateCircularProgress();
}

function updateCircularProgress() {
  const ring = document.getElementById('circular-progress-ring');
  const valEl = document.getElementById('circular-progress-value');
  const labelEl = document.getElementById('progress-topic-label');
  const subEl = document.getElementById('progress-sub-label');

  const topics = (state.memory && state.memory.studiedTopics) || [];
  const avgMastery = topics.length > 0
    ? Math.round(topics.reduce((acc, t) => acc + (t.mastery || 72), 0) / topics.length)
    : 75;

  if (ring) {
    ring.style.background = `conic-gradient(var(--violet) 0% ${avgMastery}%, rgba(148, 163, 184, 0.2) ${avgMastery}% 100%)`;
  }
  if (valEl) valEl.textContent = `${avgMastery}%`;
  if (labelEl) labelEl.textContent = `Domínio Geral: ${avgMastery}%`;
  if (subEl) subEl.textContent = `${topics.length} temas praticados • 45 questões na base`;
}

function populateReviewTopicSelect() {
  const select = document.getElementById('review-topic-select');
  if (!select || !state.catalog.length) return;

  const groups = {};
  state.catalog.forEach((item) => {
    const track = item.track || 'Temas Médicos';
    if (!groups[track]) groups[track] = [];
    groups[track].push(item);
  });

  select.innerHTML = Object.entries(groups)
    .map(
      ([track, items]) => `
      <optgroup label="${escapeHtml(track)}">
        ${items
          .map(
            (it) => `<option value="${escapeHtml(it.topic)}" ${
              it.topic === state.currentApgTopic ? 'selected' : ''
            }>${escapeHtml(it.topic)}</option>`
          )
          .join('')}
      </optgroup>
    `
    )
    .join('');
}

/* ============================================================================
 * NAVEGAÇÃO ENTRE OS 5 MÓDULOS (DESKTOP + BARRA INFERIOR MOBILE)
 * ============================================================================ */

const MODULE_META = {
  mentor: {
    eyebrow: 'MODO: APG • HAM • FISIOPATOLOGIA • SOI III',
    title: 'Estudar com a Synapse MD'
  },
  apg: {
    eyebrow: 'CADERNO DE QUESTÕES // OS 5 EIXOS DO RACIOCÍNIO',
    title: 'Roteiro APG, HAM, Fisiologia & Fisiopatologia'
  },
  reviews: {
    eyebrow: 'APRENDIZAGEM ATIVA // CASOS CLÍNICOS SIMULADOS',
    title: 'Casos Clínicos SOI III & Revisão Ativa'
  },
  memory: {
    eyebrow: 'INTELIGÊNCIA EDUCACIONAL // ACOMPANHAMENTO',
    title: 'Suas Lacunas, Progresso e Revisões'
  },
  materials: {
    eyebrow: 'ACERVO DO GRUPO // CADERNOS E PDFs',
    title: 'Materiais de Apoio Integrados'
  }
};

function switchModule(moduleId) {
  document.querySelectorAll('.nav-item').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.view === moduleId);
  });

  document.querySelectorAll('.mob-nav-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.view === moduleId);
  });

  document.querySelectorAll('.module-view').forEach((section) => {
    section.classList.toggle('hidden', section.id !== `view-${moduleId}`);
  });

  const meta = MODULE_META[moduleId];
  if (meta) {
    document.getElementById('current-module-eyebrow').textContent = meta.eyebrow;
    document.getElementById('current-module-title').textContent = meta.title;
  }

  if (moduleId === 'memory') {
    refreshMemoryFromServer();
  }

  if (window.innerWidth <= 960) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* ============================================================================
 * MÓDULO 1: CHAT SOCRÁTICO + SELETOR DAS 45 QUESTÕES
 * ============================================================================ */

function renderInitialMentorMessage() {
  const container = document.getElementById('chat-messages');
  if (!container || container.children.length > 0) return;

  const welcomeMessage = {
    role: 'assistant',
    topic: state.currentApgTopic,
    explanation:
      `Olá! Bem-vinda(o) à **SYNAPSE MD** — versão oficial com todo o material de apoio do grupo (**Lanna Maria Ribas Luz**, **Laura Meira Porto**, **Mariane Gomes Bandeira** e **Thaís Silva Nolasco**).\n\n` +
      `Aqui você tem acesso imediato a **todas as 45 questões e casos clínicos**:\n` +
      `• **APG 2º Período (8 temas):** SNC, SNP, Potencial de Ação/Sinapses, Visão, Audição/Equilíbrio, Renal, Reprodutor Feminino e Masculino.\n` +
      `• **HAM — Habilidades Médicas (7 temas e casos):** Exame Neurológico Motor/Ataxia, 12 Pares Cranianos, Exame Ginecológico, Cateterismo Vesical de Demora e SBV/DEA.\n` +
      `• **Fisiologia Médica (10 questões):** Condução Cardíaca, Trocas Alveolares, Sistema Linfático, Termorregulação, Insulina/Glucagon, Eritropoiese (EPO), Pressões Respiratórias, Linfócitos B/T, Hemostasia e Glicólise/ATP.\n` +
      `• **Fisiopatologia & Clínica (10 questões):** DRGE (EEI), *H. pylori* e Câncer Gástrico, Alergia IgE vs Intolerância, Crohn vs Retocolite, Giardíase, Diarreias, Obstrução Intestinal, Cirrose/Hipertensão Portal, Nefrítica vs Nefrótica e Câncer de Mama.\n` +
      `• **SOI III (10 casos integrados):** Emergência Hipertensiva, SCA com Hipotensão, Dispneia Aguda, TVP/TEP, Endocardite, Leucemia Aguda, Dengue/Malária, TB vs Neoplasia Pulmonar, Melanoma/Hanseníase e Doença de Chagas.`,
    clinicalReasoning:
      `Selecione qualquer tema na caixa acima ou clique em um dos botões rápidos (**Entender Mecanismo**, **Anatomia & Fisiologia**, **Diagnóstico & Conduta** ou **Testar em Caso Clínico**) para estudar passo a passo.`,
    socraticQuestion:
      `Por qual caderno você quer começar agora: Fisiopatologia (ex: DRGE e H. pylori), Fisiologia, APG/HAM do 2º Período ou Casos Clínicos do SOI III?`,
    references: [
      {
        source: 'Guyton & Hall / Moore / Netter / Bates / Robbins & Cotran',
        title: 'Bibliografia Oficial Integrada — Grupo Synapse MD (45 Questões)',
        year: 2026,
        evidenceLevel: 'Alto (Livros-Texto de Referência e Diretrizes Médicas)',
        url: 'https://pubmed.ncbi.nlm.nih.gov/'
      }
    ],
    limitations:
      'Priorizamos exclusivamente literatura médica de referência e diretrizes oficiais. Zero uso de Wikipédia.'
  };

  appendChatBubble(welcomeMessage);
  updateEvidenceDrawer(welcomeMessage);
}

async function onSelectTopicFromDropdown(topicValue) {
  if (!topicValue) return;
  state.currentApgTopic = topicValue;
  loadApgTopic(topicValue);
  await sendQuickPrompt(`Explique de forma completa e didática o tema: ${topicValue}`);
}

async function triggerTopicAction(actionType) {
  const topic = document.getElementById('chat-apg-topic').value || state.currentApgTopic;

  if (actionType === 'caso') {
    await loadNewReviewQuestion(topic);
    switchModule('reviews');
    return;
  }

  let promptText = `Explique o mecanismo fisiopatológico e os pontos-chave de: ${topic}`;
  if (actionType === 'anatomia') {
    promptText = `Detalhe a anatomia, histologia e fisiologia normal relacionadas ao tema: ${topic}`;
  } else if (actionType === 'conduta') {
    promptText = `Quais são os critérios diagnósticos, exames complementares e conduta terapêutica em: ${topic}?`;
  }

  await sendQuickPrompt(promptText);
}

async function sendQuickPrompt(text) {
  const input = document.getElementById('chat-input');
  input.value = text;
  await handleChatSubmit({ preventDefault: () => {} });
}

async function handleChatSubmit(event) {
  if (event && event.preventDefault) event.preventDefault();
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send-btn');
  const message = input.value.trim();
  if (!message) return;

  const apgTopic = document.getElementById('chat-apg-topic').value;
  state.currentApgTopic = apgTopic;
  input.value = '';
  sendBtn.disabled = true;

  appendChatBubble({
    role: 'user',
    text: message
  });

  try {
    const data = await apiFetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({
        message,
        apgTopic,
        useOwnMaterials: true
      })
    });

    const explanationText = typeof data.reply === 'string'
      ? data.reply
      : data.reply?.explanation || 'Resposta estruturada carregada.';

    const socraticQuestion = data.socraticPrompt || data.reply?.socraticQuestion || '';
    const references = data.references || data.reply?.references || [];
    const limitations = data.evidenceConfidence?.limitations || data.reply?.limitations || '';
    const matchedTopic = data.matchedTopic || data.reply?.topic || apgTopic;

    appendChatBubble({
      role: 'assistant',
      topic: matchedTopic,
      explanation: explanationText,
      socraticQuestion
    });

    updateEvidenceDrawer({
      references,
      limitations
    });

    updateCircularProgress();
  } catch (err) {
    appendChatBubble({
      role: 'assistant',
      topic: 'Aviso',
      explanation: `Não foi possível processar sua solicitação: ${err.message}`,
      socraticQuestion: 'Tente selecionar outro tópico acima.'
    });
  } finally {
    sendBtn.disabled = false;
  }
}

function formatRichText(text) {
  if (!text) return '';
  const safe = escapeHtml(text);
  return safe
    .replace(/### (.*?)\n/g, '<strong style="color:var(--cyan);font-size:1rem;display:block;margin-bottom:0.35rem;">$1</strong>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
}

function appendChatBubble(msg) {
  const container = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `msg-bubble ${msg.role === 'user' ? 'msg-user' : 'msg-ai'}`;

  if (msg.role === 'user') {
    div.innerHTML = `
      <div class="msg-header">
        <span>VOCÊ // ESTUDANTE DE MEDICINA</span>
      </div>
      <div class="msg-section">${escapeHtml(msg.text)}</div>
    `;
  } else {
    div.innerHTML = `
      <div class="msg-header">
        <span>SYNAPSE MD // ${escapeHtml(msg.topic || 'MENTOR CLÍNICO')}</span>
      </div>
      <div class="msg-section">${formatRichText(msg.explanation)}</div>
      ${
        msg.clinicalReasoning
          ? `<div class="msg-section" style="color:var(--text-secondary);font-size:0.86rem;border-top:1px solid var(--border-subtle);padding-top:0.55rem;"><strong>Como Estudar:</strong><br>${formatRichText(msg.clinicalReasoning)}</div>`
          : ''
      }
      ${
        msg.socraticQuestion
          ? `<div class="msg-socratic-box">
               <strong>Pergunta Socrática (Construa seu Raciocínio)</strong>
               ${formatRichText(msg.socraticQuestion)}
             </div>`
          : ''
      }
    `;
  }

  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function updateEvidenceDrawer(reply) {
  const listEl = document.getElementById('chat-references-list');
  const limEl = document.getElementById('ev-limitations');

  if (limEl && reply.limitations) {
    limEl.textContent = reply.limitations;
  }

  const refs = reply.references || [];
  if (listEl && refs.length > 0) {
    listEl.innerHTML = refs
      .map(
        (ref) => `
        <div class="ref-item">
          <span class="ref-source">${escapeHtml(ref.source)} (${escapeHtml(ref.year || '2025')})</span>
          <div class="ref-title">${escapeHtml(ref.title)}</div>
          <span class="ref-level">Evidência: ${escapeHtml(ref.evidenceLevel || 'Diretriz / Livro-Texto')}</span>
          ${
            ref.url && ref.url !== '#materials'
              ? `<br><a class="ref-link" href="${escapeHtml(ref.url)}" target="_blank" rel="noopener noreferrer">Verificar Fonte Científica ↗</a>`
              : ''
          }
        </div>
      `
      )
      .join('');
  }
}

/* ============================================================================
 * MÓDULO 2: ROTEIRO APG & HAM (FILTRO POR CADERNO + 5 EIXOS)
 * ============================================================================ */

function filterQuestionCards(filterKey, btnEl) {
  state.currentCatalogFilter = filterKey;
  document.querySelectorAll('.track-btn').forEach((b) => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderCatalogCards();
}

function renderCatalogCards() {
  const container = document.getElementById('catalog-cards-list');
  if (!container || !state.catalog.length) return;

  const filtered = state.catalog.filter((item) => {
    if (state.currentCatalogFilter === 'ALL') return true;
    return (item.track || '').toLowerCase().includes(state.currentCatalogFilter.toLowerCase());
  });

  container.innerHTML = filtered
    .map((item) => {
      const isSelected = item.topic === state.currentApgTopic;
      return `
        <button type="button" class="catalog-topic-card ${isSelected ? 'selected' : ''}" onclick="selectCatalogCard('${escapeJsString(item.topic)}')">
          <span class="cat-track">${escapeHtml(item.track || 'Módulo Acadêmico')}</span>
          <span class="cat-title">${escapeHtml(item.topic)}</span>
        </button>
      `;
    })
    .join('');
}

async function selectCatalogCard(topicName) {
  state.currentApgTopic = topicName;
  renderCatalogCards();
  await loadApgTopic(topicName);

  const chatSelect = document.getElementById('chat-apg-topic');
  if (chatSelect) chatSelect.value = topicName;
}

async function loadApgTopic(topicName) {
  const targetTopic = topicName || state.currentApgTopic;
  state.currentApgTopic = targetTopic;

  try {
    const data = await apiFetch('/api/apg/study', {
      method: 'POST',
      body: JSON.stringify({
        topic: targetTopic,
        objectives: []
      })
    });

    renderApgAxes(data);
    renderCatalogCards();
  } catch (err) {
    console.error('Erro ao carregar matriz APG:', err);
  }
}

function renderApgAxes(data) {
  const grid = document.getElementById('apg-axes-grid');
  const banner = document.getElementById('apg-socratic-banner');
  const axes = (data && (data.apgGuide || data.axes)) || null;
  if (!grid || !axes) return;

  const topicTitle = data.title || data.topic || state.currentApgTopic;

  const axisConfig = [
    { num: 'EIXO 01 // MORFOLOGIA', title: 'Anatomia & Topografia', content: axes.anatomia },
    { num: 'EIXO 02 // FUNÇÃO NORMAL', title: 'Fisiologia & Histologia', content: axes.fisiologia || axes.histologia },
    { num: 'EIXO 03 // MECANISMO DA DOENÇA', title: 'Fisiopatologia & Semiologia', content: axes.fisiopatologia },
    { num: 'EIXO 04 // INVESTIGAÇÃO', title: 'Diagnóstico & Exame Clínico', content: axes.diagnostico },
    { num: 'EIXO 05 // TERAPÊUTICA', title: 'Conduta & Tratamento', content: axes.tratamento }
  ];

  const cardsHtml = axisConfig
    .map(
      (ax) => `
      <article class="axis-card">
        <span class="axis-tag">${ax.num}</span>
        <h3>${ax.title}</h3>
        <div class="axis-body">${formatRichText(ax.content)}</div>
      </article>
    `
    )
    .join('');

  const refsCard = `
    <article class="axis-card">
      <span class="axis-tag">FONTES OFICIAIS // ZERO WIKIPÉDIA</span>
      <h3>Referências deste Tema</h3>
      <div>
        ${(data.references || [])
          .map(
            (r) => `
            <div style="margin-bottom:0.65rem;">
              <strong style="color:var(--cyan);font-size:0.8rem;">${escapeHtml(r.source)} (${escapeHtml(r.year)})</strong>
              <p style="font-size:0.84rem;color:var(--text-secondary);margin:0.15rem 0;">${escapeHtml(r.title)}</p>
            </div>
          `
          )
          .join('')}
      </div>
    </article>
  `;

  grid.innerHTML = cardsHtml + refsCard;

  if (banner) {
    const prompt =
      data.socraticQuestion ||
      (data.socraticPrompts && data.socraticPrompts[0]) ||
      'Como esses 5 eixos se conectam no paciente real?';

    banner.innerHTML = `
      <div>
        <span class="card-kicker">DESAFIO SOCRÁTICO DA TUTORIA</span>
        <h3 style="margin:0.2rem 0;font-size:1rem;">${escapeHtml(topicTitle)}</h3>
        <p style="color:var(--text-secondary);font-size:0.9rem;margin:0;">${formatRichText(prompt)}</p>
      </div>
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
        <button type="button" class="btn-violet-sm" onclick="debateApgInChat('${escapeJsString(topicTitle)}', '${escapeJsString(prompt)}')">
          Debater no Mentor IA →
        </button>
      </div>
    `;
  }
}

function debateApgInChat(topic, question) {
  const select = document.getElementById('chat-apg-topic');
  if (select) select.value = topic;
  switchModule('mentor');
  const input = document.getElementById('chat-input');
  input.value = `Sobre "${topic}": quero responder e debater a questão "${question}"`;
  input.focus();
}

/* ============================================================================
 * MÓDULO 3: CASOS CLÍNICOS & APRENDIZAGEM ATIVA (SOI III & APG)
 * ============================================================================ */

async function loadNewReviewQuestion(preferredTopic) {
  const select = document.getElementById('review-topic-select');
  const topicToLoad = preferredTopic || (select && select.value) || state.currentApgTopic;

  if (select && preferredTopic) {
    select.value = preferredTopic;
  }

  try {
    const data = await apiFetch('/api/reviews/generate', {
      method: 'POST',
      body: JSON.stringify({ topic: topicToLoad })
    });

    state.currentReviewQuestion = data.question && typeof data.question === 'object' ? data.question : data;
    state.selectedOptionIndex = null;
    renderReviewQuestion();
  } catch (err) {
    console.error('Erro ao gerar caso clínico:', err);
  }
}

function renderReviewQuestion() {
  const container = document.getElementById('review-question-container');
  const q = state.currentReviewQuestion;
  if (!container || !q || !Array.isArray(q.options)) return;

  const letters = ['A', 'B', 'C', 'D'];

  container.innerHTML = `
    <div class="card-kicker">CASO CLÍNICO SIMULADO // ${escapeHtml(q.topic)}</div>
    <div class="clinical-vignette">
      ${formatRichText(q.vignette)}
      ${q.question ? `<br><br><strong>${formatRichText(q.question)}</strong>` : ''}
    </div>

    <div class="options-list" id="review-options-list">
      ${q.options
        .map(
          (opt, idx) => `
          <button type="button" class="option-btn" id="opt-btn-${idx}" onclick="selectReviewOption(${idx})">
            <span class="option-letter">${letters[idx] || idx + 1}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `
        )
        .join('')}
    </div>

    <div class="reasoning-input-box">
      <label for="student-reasoning">Justifique seu Raciocínio Clínico (opcional — ajuda a IA a mapear suas lacunas):</label>
      <textarea id="student-reasoning" rows="2" placeholder="Explique por que escolheu essa hipótese ou conduta..."></textarea>
    </div>

    <button type="button" class="btn-violet-primary" id="submit-review-btn" onclick="submitReviewAnswer()">
      Confirmar Conduta &amp; Ver Explicação Científica
    </button>

    <div id="review-feedback-area" class="hidden"></div>
  `;
}

function selectReviewOption(idx) {
  state.selectedOptionIndex = idx;
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === idx);
  });
}

async function submitReviewAnswer() {
  if (state.selectedOptionIndex === null) {
    alert('Selecione uma das alternativas (A, B, C ou D) antes de confirmar.');
    return;
  }

  const q = state.currentReviewQuestion;
  const studentReasoning = document.getElementById('student-reasoning').value.trim();
  const submitBtn = document.getElementById('submit-review-btn');
  submitBtn.disabled = true;

  const isCorrect = state.selectedOptionIndex === q.correctIndex;

  try {
    await apiFetch('/api/reviews/submit', {
      method: 'POST',
      body: JSON.stringify({
        questionId: q.id,
        topic: q.topic,
        subtopic: q.subtopic || q.topic,
        selectedIndex: state.selectedOptionIndex,
        isCorrect,
        studentReasoning
      })
    });
  } catch (_) {}

  document.querySelectorAll('.option-btn').forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctIndex) {
      btn.classList.add('correct');
    } else if (idx === state.selectedOptionIndex && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const refObj = (q.references && q.references[0]) || q.reference || {};

  const fbArea = document.getElementById('review-feedback-area');
  fbArea.className = `feedback-banner ${isCorrect ? 'success' : 'error'}`;
  fbArea.innerHTML = `
    <h4 style="margin-bottom:0.4rem;">
      ${isCorrect ? '✅ Raciocínio Clínico Correto!' : '⚠️ Atenção: Lacuna Conceitual Identificada'}
    </h4>
    <p style="color:var(--text-primary);font-size:0.92rem;margin-bottom:0.65rem;">
      ${formatRichText(q.explanation)}
    </p>
    <small style="color:var(--text-muted);">
      Fonte Científica: ${escapeHtml(refObj.source || 'Diretriz Oficial')} — ${escapeHtml(refObj.title || 'Literatura Médica')}
    </small>
  `;
  fbArea.classList.remove('hidden');

  await refreshMemoryFromServer();
}

/* ============================================================================
 * MÓDULO 4: LACUNAS & MEMÓRIA EDUCACIONAL
 * ============================================================================ */

async function refreshMemoryFromServer() {
  try {
    const data = await apiFetch('/api/memory');
    if (data && data.studiedTopics) {
      state.memory = data;
    }
    renderAcademicMemory();
    updateCircularProgress();
  } catch (err) {
    renderAcademicMemory();
  }
}

function renderAcademicMemory() {
  const mem = state.memory;
  if (!mem) return;

  const kpiRow = document.getElementById('memory-kpi-row');
  const topicsList = document.getElementById('memory-topics-list');
  const diffList = document.getElementById('memory-difficulties-list');
  const suggList = document.getElementById('memory-suggestions-list');
  const actList = document.getElementById('memory-activities-list');

  const topics = mem.studiedTopics || [];
  const difficulties = mem.difficulties || [];
  const activities = mem.activities || [];

  const avgMastery = topics.length
    ? Math.round(topics.reduce((acc, t) => acc + (t.mastery || 0), 0) / topics.length)
    : 75;

  if (kpiRow) {
    kpiRow.innerHTML = `
      <div class="kpi-card">
        <span class="kpi-label">TEMAS ESTUDADOS</span>
        <div class="kpi-value">${topics.length}</div>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">DOMÍNIO MÉDIO</span>
        <div class="kpi-value" style="color:var(--emerald);">${avgMastery}%</div>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">LACUNAS MAPEADAS</span>
        <div class="kpi-value" style="color:var(--amber);">${difficulties.length}</div>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">ATIVIDADES CONCLUÍDAS</span>
        <div class="kpi-value" style="color:var(--cyan);">${activities.length}</div>
      </div>
    `;
  }

  if (topicsList) {
    topicsList.innerHTML = topics
      .map(
        (t) => `
        <div class="topic-progress-item">
          <div class="topic-progress-header">
            <strong>${escapeHtml(t.topic)}</strong>
            <span style="font-family:var(--font-mono);color:var(--cyan);font-weight:700;">${t.mastery}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width:${Math.min(100, Math.max(10, t.mastery))}%"></div>
          </div>
          <small style="color:var(--text-muted);font-size:0.75rem;">
            Especialidade: ${escapeHtml(t.specialty || 'Clínica Médica')} • Sessões: ${t.sessionsCount || t.interactions || 1}
          </small>
        </div>
      `
      )
      .join('');
  }

  if (diffList) {
    diffList.innerHTML = difficulties.length
      ? difficulties
          .map(
            (d) => `
          <div class="difficulty-item">
            <strong style="color:var(--amber);font-size:0.86rem;">${escapeHtml(d.subtopic || d.topic)}</strong>
            <p style="font-size:0.84rem;color:var(--text-secondary);margin-top:0.2rem;">${escapeHtml(d.note)}</p>
          </div>
        `
          )
          .join('')
      : `<p class="muted-text">Nenhuma dificuldade crítica pendente no momento.</p>`;
  }

  if (suggList) {
    const suggestions = mem.suggestedReviews || [];
    suggList.innerHTML = suggestions
      .map(
        (s) => `
        <div class="suggestion-item">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
            <strong style="font-size:0.86rem;">${escapeHtml(s.topic)}</strong>
            <span style="font-family:var(--font-mono);font-size:0.72rem;color:var(--emerald);">${escapeHtml(s.urgency || s.priority || 'Prioritária')}</span>
          </div>
          <p style="font-size:0.82rem;color:var(--text-secondary);margin:0.25rem 0 0.5rem;">${escapeHtml(s.reason)}</p>
          <button type="button" class="btn-violet-sm" onclick="practiceSuggestedTopic('${escapeJsString(s.topic)}')">
            Praticar Agora →
          </button>
        </div>
      `
      )
      .join('');
  }

  if (actList) {
    actList.innerHTML = activities
      .slice(0, 12)
      .map(
        (a) => `
        <div class="activity-row">
          <div>
            <span class="activity-type">${escapeHtml(a.type)}</span>
            <strong style="margin-left:0.5rem;font-size:0.88rem;">${escapeHtml(a.title || a.topic)}</strong>
            <div style="color:var(--text-secondary);font-size:0.82rem;">${escapeHtml(a.detail || a.result || '')}</div>
          </div>
          <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-muted);">${escapeHtml((a.timestamp || a.date || '').slice(0, 10))}</span>
        </div>
      `
      )
      .join('');
  }
}

function practiceSuggestedTopic(topic) {
  loadNewReviewQuestion(topic);
  switchModule('reviews');
}

/* ============================================================================
 * MÓDULO 5: MATERIAIS DE APOIO DO GRUPO
 * ============================================================================ */

function renderMaterialsList() {
  const listEl = document.getElementById('materials-list');
  if (!listEl) return;

  if (!state.materials.length) {
    listEl.innerHTML = `<p class="muted-text">Nenhum material cadastrado ainda.</p>`;
    return;
  }

  listEl.innerHTML = state.materials
    .map(
      (m) => `
      <div class="material-item">
        <h4>📄 ${escapeHtml(m.title)}</h4>
        <div class="material-meta">
          Tipo: ${escapeHtml(m.type || 'PDF / Roteiro')} • Adicionado em: ${escapeHtml(m.uploadedAt || '2026')}
        </div>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin:0;">
          ${escapeHtml((m.excerpt || m.extractedText || '').slice(0, 320))}${(m.excerpt || m.extractedText || '').length > 320 ? '...' : ''}
        </p>
      </div>
    `
    )
    .join('');
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || '');
      const base64 = result.includes(',') ? result.split(',')[1] : result;
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function handleMaterialUpload(event) {
  event.preventDefault();
  const titleEl = document.getElementById('mat-title');
  const fileEl = document.getElementById('mat-file');
  const notesEl = document.getElementById('mat-notes');
  const submitBtn = document.getElementById('mat-submit-btn');

  const title = titleEl.value.trim();
  const notes = notesEl.value.trim();
  const file = fileEl.files[0];

  if (!title) return;
  submitBtn.disabled = true;

  try {
    let fileBase64 = '';
    if (file) {
      fileBase64 = await readFileAsBase64(file);
    }

    const data = await apiFetch('/api/materials', {
      method: 'POST',
      body: JSON.stringify({
        title,
        fileName: file ? file.name : 'anotacao-apg.txt',
        mimeType: file ? file.type || 'application/pdf' : 'text/plain',
        fileBase64,
        textContent: notes || `Resumo sobre ${title} adicionado pelo grupo.`
      })
    });

    if (data && data.material) {
      state.materials.unshift({
        id: data.material.id,
        title: data.material.title,
        type: 'PDF / Resumo Adicionado',
        uploadedAt: (data.material.createdAt || '').slice(0, 10) || '2026',
        excerpt: data.material.extractedText
      });
    }
    renderMaterialsList();
    titleEl.value = '';
    fileEl.value = '';
    notesEl.value = '';
    await refreshMemoryFromServer();
  } catch (err) {
    alert(`Erro ao enviar material: ${err.message}`);
  } finally {
    submitBtn.disabled = false;
  }
}

/* ============================================================================
 * UTILITÁRIOS DE SEGURANÇA (XSS ESCAPE)
 * ============================================================================ */

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeJsString(str) {
  return String(str ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"');
}

/* ============================================================================
 * BOOTSTRAP ON LOAD
 * ============================================================================ */

window.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();
  if (state.token) {
    bootstrapWorkspace();
  }
});
