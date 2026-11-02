/**
 * ============================================================================
 * SYNAPSE MD — Motor de Inteligência Científica, Clínica e Educacional
 * Base Acadêmica Completa (45 Tópicos e Casos Clínicos do Material de Apoio):
 * - APG Morfofisiologia (Guyton, Moore, Netter, Tortora, Snell)
 * - HAM Habilidades Médicas e Semiologia (Bates, AHA/BLS, ANVISA)
 * - Fisiopatologia e Clínica Médica (Robbins, Harrison, Diretrizes)
 * - SOI III Raciocínio Clínico e Casos Integrados
 * ============================================================================
 */

const GROUP_MEMBERS = [
  'Lanna Maria Ribas Luz',
  'Laura Meira Porto',
  'Mariane Gomes Bandeira',
  'Thaís Silva Nolasco'
];

// Catálogo Completo Organizado por Trilha Acadêmica (45 Tópicos do Material de Apoio)
const CURATED_MEDICAL_KNOWLEDGE = [
  // ==========================================================================
  // TRILHA 1: APG — MORFOFISIOLOGIA INTEGRADA (8 TEMAS)
  // ==========================================================================
  {
    id: 'snc-organizacao',
    category: 'APG — Morfofisiologia',
    keywords: ['sistema nervoso central', 'snc', 'encéfalo', 'medula espinal', 'córtex', 'tronco encefálico', 'cerebelo', 'diencéfalo', ' substância cinzenta', 'substância branca'],
    title: '1. Sistema Nervoso Central — Organização Anatômica e Funcional',
    specialty: 'Neuroanatomia & Neurofisiologia (APG)',
    evidenceConfidence: {
      level: 'Consenso Anatômico e Fisiológico Consolidado',
      summary: 'Fundamentado nos tratados clássicos de Neuroanatomia (Snell, Machado, Moore) e Fisiologia Médica (Guyton & Hall).',
      limitations: 'O mapeamento funcional cortical apresenta neuroplasticidade individual; áreas clássicas de Brodmann operam em redes conectômicas integradas e não de forma isolada.'
    },
    apgGuide: {
      anatomia: 'O SNC localiza-se no esqueleto axial (cavidade craniana e canal vertebral), protegido pelas meninges (dura-máter, aracnoide-máter e pia-máter) e pelo líquor (LCE). Divide-se em Encéfalo — composto por Telencéfalo (hemisférios cerebrais, córtex e núcleos da base), Diencéfalo (tálamo, hipotálamo, epitálamo e subtálamo), Tronco Encefálico (mesencéfalo, ponte e bulbo) e Cerebelo — e Medula Espinal (segmentos cervicais, torácicos, lombares, sacrais e coccígeos, terminando no cone medular ao nível de L1-L2 no adulto).',
      histologia: 'Organiza-se em Substância Cinzenta (corpos celulares de neurônios, dendritos, sinapses e glia: astrócitos protoplasmáticos, micróglia), localizada na superfície cortical e nos núcleos profundos/H medular; e Substância Branca (feixes de axônios mielinizados por oligodendrócitos), formando tratos ascendentes (sensitivos), descendentes (motores) e comissuras (como o corpo caloso).',
      fisiologia: 'Controle Motor: córtex motor primário (giro pré-central, área 4) envia o trato corticoespinal (piramidal), modulado pelos núcleos da base (iniciação/seleção do movimento) e cerebelo (coordenação, equilíbrio e correção de erro motor). Controle Sensitivo: receptores periféricos ascendem pela medula (colunas dorsais-lemnisco medial para tato epicrítico/propriocepção; trato espinotalâmico para dor/temperatura), relé no tálamo (núcleo VPL/VPM) até o giro pós-central (córtex somatossensorial). Controle Autonômico: o hipotálamo e os núcleos do tronco encefálico (ex: núcleo do trato solitário e bulbo ventrolateral) integram reflexos viscerais simpáticos (T1-L2) e parassimpáticos (craniossacral).',
      diagnostico: 'Aplicação Clínica Básica: Lesões acima da decussação das pirâmides (bulbo caudal) causam hemiparesia contralateral com sinais de 1º neurônio motor (hipertonia elástica/espasticidade, hiperreflexia e sinal de Babinski). Lesões medulares produzem nível sensitivo e alterações esfincterianas.',
      tratamento: 'Abordagem Semiológica: Na avaliação semiológica, correlacionar sempre a topografia anatômica (córtex vs cápsula interna vs tronco vs medula) com o déficit motor, sensitivo ou autonômico observado no exame físico.'
    },
    socraticQuestion: 'Por que na medula espinal a substância branca fica por fora e a cinzenta por dentro (formando o "H" medular), enquanto no córtex cerebral essa disposição se inverte? Como a decussação das pirâmides no bulbo explica o lado paralisado após um AVC no hemisfério esquerdo?',
    references: [
      { title: 'Neuroanatomia Clínica, 8ª Edição — Cap. Organização do Sistema Nervoso', source: 'Snell, R. S. (Wolters Kluwer)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Anatomia Orientada para a Clínica, 8ª Edição', source: 'Moore, K. L.; Dalley, A. F.', year: '2019', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Tratado de Fisiologia Médica, 14ª Edição —Unidade IX: O Sistema Nervoso', source: 'Guyton & Hall (Elsevier)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-snc-1',
        topic: 'Sistema Nervoso Central',
        subtopic: 'Organização Anatômica e Vias Motoras/Sensitivas',
        vignette: 'Durante uma sessão de APG, o grupo analisa o trajeto de um estímulo tátil fino (epicrítico) originado na mão direita e o comando motor voluntário para movimentar os dedos dessa mesma mão.',
        question: 'Quais são, respectivamente, a estrutura diencefálica que atua como estação de retransmissão obrigatória da sensibilidade tátil antes de chegar ao giro pós-central e o local onde o trato corticoespinal lateral cruza para o lado oposto?',
        options: [
          'Hipotálamo anterior e corpo caloso.',
          'Tálamo (núcleo ventral posterolateral) e decussação das pirâmides no bulbo (medula oblonga).',
          'Epitálamo (glândula pineal) e pedúnculos cerebelares médios na ponte.',
          'Núcleo caudado e cone medular ao nível de L1-L2.'
        ],
        correctIndex: 1,
        explanation: 'Toda a sensibilidade somática consciente passa pelo Tálamo (núcleo VPL para o corpo e VPM para a face) antes de projetar-se ao córtex somatossensorial primário (giro pós-central). Já o comando motor voluntário desce pelo trato corticoespinal e cruza a linha média na decussação das pirâmides, na porção caudal do bulbo.'
      }
    ]
  },
  {
    id: 'snp-organizacao',
    category: 'APG — Morfofisiologia',
    keywords: ['sistema nervoso periférico', 'snp', 'nervos cranianos', 'nervos espinais', 'vias aferentes', 'vias eferentes', 'gânglios', 'schwann'],
    title: '2. Sistema Nervoso Periférico — Nervos Cranianos, Espinais e Vias',
    specialty: 'Neuroanatomia & Fisiologia (APG)',
    evidenceConfidence: {
      level: 'Consenso Morfofuncional Consolidado',
      summary: 'Baseado em Moore (Anatomia Orientada para a Clínica), Netter e Guyton & Hall.',
      limitations: 'Variações anatômicas na formação dos plexos nervosos (braquial e lombossacral) ocorrem em até 10-15% da população.'
    },
    apgGuide: {
      anatomia: 'O SNP compreende todas as estruturas neurais fora da membrana pial do SNC: 12 pares de Nervos Cranianos (I ao XII, que emergem do encéfalo/tronco encefálico e atravessam forames da base do crânio) e 31 pares de Nervos Espinais (8 cervicais, 12 torácicos, 5 lombares, 5 sacrais e 1 coccígeo), além dos gânglios sensitivos (da raiz dorsal) e autonômicos.',
      histologia: 'Os axônios periféricos são mielinizados pelas Células de Schwann (neurolemócitos) e organizados por três bainhas conjuntivas: Endoneuro (envolve cada fibra nervosa individual), Perineuro (envolve cada fascículo e forma a barreira hematoneural) e Epineuro (tecido conjuntivo denso externo que reveste todo o nervo).',
      fisiologia: 'Diferença fundamental: os 31 pares de nervos espinais são SEMPRE mistos, formados pela união da raiz dorsal (aferente/sensitiva, com corpo celular no gânglio espinal — neurônio pseudounipolar) e da raiz ventral (eferente/motora somática e visceral, vinda do corno anterior/lateral da medula). Já os 12 nervos cranianos podem ser puramente sensitivos (I, II, VIII), puramente motores (III, IV, VI, XI, XII) ou mistos (V, VII, IX, X, sendo III, VII, IX e X portadores de fibras parassimpáticas). Vias Aferentes levam estímulos exteroceptivos, proprioceptivos e interoceptivos ao SNC; Vias Eferentes conduzem ordens do SNC aos músculos esqueléticos (somático) ou músculo liso, cardíaco e glândulas (autonômico simpático e parassimpático).',
      diagnostico: 'Aplicação Clínica: Lesão da raiz dorsal causa perda sensitiva no dermátomo correspondente sem paralisia muscular; lesão da raiz ventral ou corno anterior causa paralisia flácida, arreflexia e atrofia no miótomo.',
      tratamento: 'Correlação Prática: Conhecer o mapa de dermátomos e miótomos permite localizar compressões radiculares (ex: hérnia de disco L4-L5 ou L5-S1) apenas com o exame físico.'
    },
    socraticQuestion: 'Se um paciente sofre uma lesão traumática exclusiva na raiz dorsal de um nervo espinal torácico, o que acontece com a sensibilidade daquele dermátomo e por que a força muscular permanece preservada?',
    references: [
      { title: 'Anatomia Orientada para a Clínica, 8ª Edição — Cap. 1: Sistema Nervoso', source: 'Moore, K. L.; Dalley, A. F.', year: '2019', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Atlas de Anatomia Humana, 7ª Edição', source: 'Netter, F. H. (Elsevier)', year: '2019', evidenceLevel: 'Atlas Anatômico Clássico', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-snp-1',
        topic: 'Sistema Nervoso Periférico',
        subtopic: 'Nervos Cranianos vs Espinais e Raízes Medulares',
        vignette: 'Em relação à organização anatômica e funcional dos 12 pares de nervos cranianos e 31 pares de nervos espinais (Lei de Bell-Magendie):',
        question: 'Qual alternativa descreve corretamente a composição funcional das raízes de um nervo espinal e dos nervos cranianos parassimpáticos?',
        options: [
          'A raiz dorsal do nervo espinal é eferente motora e a raiz ventral é aferente sensitiva; todos os 12 nervos cranianos possuem fibras simpáticas.',
          'A raiz dorsal conduz fibras aferentes (sensitivas) com corpos celulares no gânglio espinal, enquanto a raiz ventral conduz fibras eferentes (motoras); os nervos cranianos III, VII, IX e X transportam fibras eferentes parassimpáticas.',
          'Tanto os nervos espinais quanto todos os 12 pares cranianos são exclusivamente mistos.',
          'As células de Schwann mielinizam o trato corticoespinal dentro da medula espinal, enquanto os oligodendrócitos mielinizam o nervo ciático.'
        ],
        correctIndex: 1,
        explanation: 'Pela Lei de Bell-Magendie, as raízes posteriores (dorsais) dos nervos espinais contêm fibras aferentes (sensitivas) cujos corpos neuronais pseudounipolares residem no gânglio da raiz dorsal, enquanto as raízes anteriores (ventrais) contêm fibras eferentes (motoras). O fluxo parassimpático craniano segue pelos pares III (oculomotor), VII (facial), IX (glossofaríngeo) e X (vago).'
      }
    ]
  },
  {
    id: 'neurofisiologia-potencial',
    category: 'APG — Morfofisiologia',
    keywords: ['potencial de ação', 'sinapse', 'despolarização', 'repolarização', 'bomba de sódio', 'neurotransmissor', 'cálcio', 'condução saltatória', 'nodos de ranvier'],
    title: '3. Neurofisiologia — Potencial de Ação e Transmissão Sináptica',
    specialty: 'Fisiologia Celular & Neurofisiologia (APG)',
    evidenceConfidence: {
      level: 'Alta Evidência Experimental (Guyton & Hall / Tortora)',
      summary: 'Modelos eletrofisiológicos clássicos de Hodgkin-Huxley e fisiologia da transmissão sináptica química e elétrica.',
      limitations: 'A velocidade de condução varia conforme o diâmetro axonal e mielinização (fibras Aα conduzem a 80-120 m/s; fibras C amielínicas conduzem dor lenta a 0,5-2 m/s).'
    },
    apgGuide: {
      anatomia: 'O neurônio divide-se funcionalmente em zona receptora (dendritos e soma), zona de gatilho (cone de implantação axonal, rico em canais de Na+ dependentes de voltagem), zona de condução (axônio, revestido por bainha de mielina interrompida nos Nodos de Ranvier) e terminal pré-sináptico (botões sinápticos).',
      histologia: 'Na sinapse elétrica, as membranas pré e pós-sinápticas são unidas por junções comunicantes (gap junctions formadas por conexinas). Na sinapse química, há uma fenda sináptica de 20-40 nm, vesículas sinápticas ancoradas por proteínas SNARE no botão terminal e receptores ionotrópicos ou metabotrópicos na densidade pós-sináptica.',
      fisiologia: '1) Potencial de Repouso (~ -70 a -90 mV): mantido pelos canais de vazamento de K+ (difusão de K+ para fora a favor do gradiente) e pela bomba Na+/K+-ATPase (3 Na+ saem, 2 K+ entram). 2) Despolarização: estímulo atinge o limiar (~ -55 mV) -> abertura rápida de canais de Na+ dependentes de voltagem -> influxo maciço de Na+ inverte a polaridade (+30 mV, princípio do "tudo ou nada"). 3) Repolarização e Hiperpolarização: inativação dos canais de Na+ e abertura lenta dos canais de K+ dependentes de voltagem (efluxo de K+). 4) Propagação: condução contínua em fibras amielínicas e Condução Saltatória entre os Nodos de Ranvier nas fibras mielinizadas (economiza ATP e multiplica a velocidade). 5) Sinapse Química: potencial de ação chega ao terminal -> abre canais de Ca²⁺ dependentes de voltagem -> influxo de Ca²⁺ promove exocitose das vesículas -> neurotransmissor (ex: glutamato excitatório gera PEPS via influxo de Na+/Ca²⁺; GABA/glicina inibitórios geram PIPS via influxo de Cl-).',
      diagnostico: 'Correlação Clínica: Anestésicos locais (Lidocaína, Bupivacaína) bloqueiam especificamente os canais de Na+ dependentes de voltagem no axônio, impedindo a geração e propagação do potencial de ação da dor.',
      tratamento: 'Aplicação Farmacológica: Benzodiazepínicos potencializam receptores GABA-A (canais de Cl-), hiperpolarizando o neurônio pós-sináptico e elevando o limiar de disparo.'
    },
    socraticQuestion: 'O que aconteceria com a liberação de neurotransmissores em uma sinapse química se bloqueássemos seletivamente os canais de Cálcio (Ca²⁺) dependentes de voltagem do botão pré-sináptico, mesmo que o potencial de ação chegasse normalmente ao final do axônio?',
    references: [
      { title: 'Tratado de Fisiologia Médica, 14ª Edição — Cap. 5 e 46: Potenciais de Membrana e Sinapses', source: 'Guyton & Hall (Elsevier)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Princípios de Anatomia e Fisiologia, 16ª Edição', source: 'Tortora, G. J.; Derrickson, B.', year: '2023', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-neuro-1',
        topic: 'Neurofisiologia',
        subtopic: 'Potencial de Ação e Transmissão Sináptica',
        vignette: 'Durante um experimento de neurofisiologia, um estudante analisa os eventos iônicos responsáveis pela fase ascendente (despolarização) do potencial de ação neuronal e pelo acoplamento entre a chegada do impulso elétrico no botão terminal e a exocitose das vesículas de neurotransmissor.',
        question: 'Quais são, respectivamente, o íon cujo influxo causa a fase de despolarização rápida do potencial de ação e o íon cujo influxo no terminal pré-sináptico desencadeia a fusão das vesículas sinápticas?',
        options: [
          'Efluxo de Potássio (K+) e influxo de Cloreto (Cl-).',
          'Influxo de Sódio (Na+) e influxo de Cálcio (Ca²⁺).',
          'Influxo de Cálcio (Ca²⁺) e efluxo de Magnésio (Mg²⁺).',
          'Influxo de Cloreto (Cl-) e influxo de Potássio (K+).'
        ],
        correctIndex: 1,
        explanation: 'Ao atingir o limiar de excitabilidade, a abertura dos canais de Sódio (Na+) dependentes de voltagem promove rápido influxo de Na+, despolarizando a membrana. Quando a onda despolarizante atinge o terminal axonal pré-sináptico, ela abre canais de Cálcio (Ca²⁺) dependentes de voltagem; a entrada de Ca²⁺ ativa o complexo SNARE/sinaptotagmina, promovendo a exocitose do neurotransmissor na fenda sináptica.'
      }
    ]
  },
  {
    id: 'visao-sensorial',
    category: 'APG — Morfofisiologia',
    keywords: ['visão', 'olho', 'retina', 'cones', 'bastonetes', 'fototransdução', 'rodopsina', 'quiasma óptico', 'córtex visual', 'córnea', 'cristalino'],
    title: '4. Sistema Sensorial — Visão e Fototransdução Retiniana',
    specialty: 'Morfofisiologia Sensorial (APG)',
    evidenceConfidence: {
      level: 'Consenso Morfofisiológico (Guyton / Moore / Snell)',
      summary: 'Anatomia das túnicas oculares, óptica da refração e cascata bioquímica da fototransdução nos fotorreceptores.',
      limitations: 'O processamento visual consciente envolve vias paralelas complexas (via dorsal "onde/movimento" parietal e via ventral "o quê/forma e cor" temporal).'
    },
    apgGuide: {
      anatomia: 'O bulbo ocular possui 3 túnicas: 1) Fibrosa externa: esclera (opaca posterior) e córnea (transparente anterior, principal lente refrativa do olho); 2) Vascular média (úvea): coroide (nutrição), corpo ciliar (músculo ciliar para acomodação do cristalino e produção do humor aquoso) e íris (controla o diâmetro da pupila: esfíncter pupilar parassimpático via NC III faz miose; dilatador da pupila simpático faz midríase); 3) Interna (nervosa): Retina, contendo a mácula lútea e a fóvea central (máxima acuidade visual, exclusiva de cones) e o disco óptico (ponto cego, saída do nervo óptico).',
      histologia: 'A retina neural possui 10 camadas, destacando-se a cadeia de 3 neurônios: Fotorreceptores (Bastonetes para visão escotópica/noturna com rodopsina; Cones L, M, S para visão fotópica/cores com fotopsinas) -> Células Bipolares -> Células Ganglionares (cujos axônios formam o Nervo Óptico — NC II).',
      fisiologia: 'Fototransdução: No escuro, os fotorreceptores têm alto nível de GMPc intracelular, mantendo canais de Na+/Ca²⁺ abertos ("corrente do escuro", fotorreceptor despolarizado liberando glutamato continuamente). Quando a luz incide, ocorre fotoisomerização do 11-cis-retinal em todo-trans-retinal na rodopsina -> ativa a proteína G Transducina -> ativa a GMPc-fosfodiesterase (PDE) -> degrada GMPc -> fecha canais de Na+ -> HIPERPOLARIZAÇÃO do fotorreceptor -> reduz liberação de glutamato. Via Visual Central: Retina -> Nervo Óptico (NC II) -> Quiasma Óptico (fibras da retina nasal cruzam; fibras temporais seguem ipsilaterais) -> Trato Óptico -> Corpo Geniculado Lateral do Tálamo -> Radiações Ópticas (alça de Meyer e parietal) -> Córtex Visual Primário (área 17, lábios do sulco calcarino no lobo occipital).',
      diagnostico: 'Correlação Clínica: Lesão do nervo óptico direito causa cegueira monocular direita; compressão do quiasma óptico (ex: adenoma hipofisário) lesa as fibras nasais cruzadas, causando hemianopsia bitemporal (perda da visão periférica lateral de ambos os olhos).',
      tratamento: 'Avaliação Básica: Testar acuidade visual (Snellen), campimetria por confrontação e reflexo fotomotor direto e consensual (aferência pelo NC II e eferência pelo NC III).'
    },
    socraticQuestion: 'Diferente da maioria dos neurônios do corpo que se despolarizam quando estimulados, o que acontece com o potencial de membrana dos cones e bastonetes quando a luz atinge a retina, e qual é o papel do GMP cíclico nesse fenômeno?',
    references: [
      { title: 'Tratado de Fisiologia Médica, 14ª Edição — Cap. 50 e 51: O Olho, óptica da visão e função nervosa da retina', source: 'Guyton & Hall (Elsevier)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Anatomia Orientada para a Clínica, 8ª Edição — Cap. 8: Cabeça e Órbita', source: 'Moore, K. L.', year: '2019', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-visao-1',
        topic: 'Sistema Sensorial — Visão',
        subtopic: 'Fototransdução e Via Óptica',
        vignette: 'Um estudante de medicina analisa como um feixe luminoso focado sobre a fóvea central é convertido em sinal neural e conduzido até o lobo occipital.',
        question: 'Qual evento bioquímico e eletrofisiológico ocorre nos fotorreceptores da retina imediatamente após a absorção de um fóton de luz pela rodopsina?',
        options: [
          'Aumento do AMPc intracelular, abertura dos canais de Na+ e despolarização rápida do fotorreceptor.',
          'Ativação da transducina e da fosfodiesterase (PDE), hidrólise do GMPc, fechamento dos canais de Na+ e hiperpolarização do fotorreceptor.',
          'Abertura direta dos canais de K+ pela luz na córnea, gerando potencial de ação nos bastonetes.',
          'Cruzamento de todas as fibras temporais e nasais no quiasma óptico rumo ao núcleo geniculado medial.'
        ],
        correctIndex: 1,
        explanation: 'A luz isomeriza o retinal (derivado da vitamina A), ativando a rodopsina, que estimula a proteína G transducina e a enzima GMPc-fosfodiesterase. A queda na concentração de GMPc fecha os canais catiônicos de Na+, interrompendo a "corrente do escuro" e provocando a hiperpolarização da membrana do fotorreceptor.'
      }
    ]
  },
  {
    id: 'audicao-equilibrio',
    category: 'APG — Morfofisiologia',
    keywords: ['audição', 'equilíbrio', 'orelha', 'cóclea', 'órgão de corti', 'vestibular', 'canais semicirculares', 'utrículo', 'sáculo', 'endolinfa', 'perilinfa'],
    title: '5. Sistema Sensorial — Audição e Equilíbrio (Orelha e Labirinto)',
    specialty: 'Morfofisiologia Sensorial (APG)',
    evidenceConfidence: {
      level: 'Consenso Morfofisiológico (Guyton / Moore / Tortora)',
      summary: 'Anatomia da orelha externa, média e interna e mecanotransdução nas células ciliadas cocleares e vestibulares.',
      limitations: 'A percepção central de vertigem integra simultaneamente aferências vestibulares, visuais e proprioceptivas no tronco encefálico e cerebelo.'
    },
    apgGuide: {
      anatomia: '1) Orelha Externa: pavilhão auricular e meato acústico externo até a membrana timpânica. 2) Orelha Média (cavidade timpânica no osso temporal): cadeia ossicular (martelo, bigorna e estribo — cuja base se encaixa na janela oval), músculos tensor do tímpano (NC V3) e estapédio (NC VII, atenua sons intensos) e tuba auditiva (comunica com a nasofaringe para equalizar pressão). 3) Orelha Interna (Labirinto): Labirinto Ósseo (preenchido por perilinfa, rica em Na+) contendo o Labirinto Membranáceo (preenchido por endolinfa, rica em K+): Cóclea (audição), Vestíbulo (utrículo e sáculo) e 3 Canais Semicirculares (anterior, posterior e lateral).',
      histologia: 'Órgão Espiral de Corti (repousa sobre a membrana basilar na rampa média/ducto coclear): contém células ciliadas internas (principais transdutoras auditivas) e externas (amplificador coclear), cujos estereocílios tocam a membrana tectória. No aparelho vestibular: máculas do utrículo e sáculo possuem membrana otolítica com cristais de carbonato de cálcio (otólitos/estatocônios); ampolas dos canais semicirculares possuem cristas ampulares recobertas pela cúpula gelatinosa.',
      fisiologia: 'Audição: Ondas sonoras vibram o tímpano -> ossículos amplificam a força mecânica em ~22x até a janela oval -> ondas de pressão na perilinfa (rampa vestibular e timpânica) deslocam a membrana basilar (base da cóclea = rígida/estreita = sons agudos de alta frequência; ápice/helicotrema = flexível/larga = sons graves de baixa frequência) -> inclinação dos estereocílios em direção ao mais longo abre canais mecânicos de K+ -> influxo de K+ da endolinfa despolariza a célula ciliada -> libera glutamato para o nervo coclear (NC VIII) -> núcleos cocleares -> colículo inferior -> corpo geniculado medial do tálamo -> córtex auditivo primário (giro temporal superior). Equilíbrio: Utrículo e Sáculo detectam aceleração linear e posição da cabeça em relação à gravidade; os 3 Canais Semicirculares detectam aceleração angular (rotação da cabeça).',
      diagnostico: 'Correlação Clínica: Os testes de Rinne e Weber com diapasão permitem diferenciar perda auditiva condutiva (orelha externa/média) de perda neurossensorial (cóclea/nervo VIII).',
      tratamento: 'Integração Clínica: Na Vertigem Posicional Paroxística Benigna (VPPB), otólitos desprendidos do utrículo migram para os canais semicirculares (geralmente o posterior), sendo tratados com manobras de reposicionamento (Epley).'
    },
    socraticQuestion: 'Nas células ciliadas da cóclea e do vestíbulo, a despolarização ocorre pela entrada de Potássio (K+) e não de Sódio (Na+). Como isso é possível se o interior da célula já é rico em K+? Qual é a composição especial da endolinfa?',
    references: [
      { title: 'Tratado de Fisiologia Médica, 14ª Edição — Cap. 53 e 56: O Sentido da Audição e Funções Vestibulares', source: 'Guyton & Hall (Elsevier)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Anatomia Orientada para a Clínica, 8ª Edição — Orelha', source: 'Moore, K. L.', year: '2019', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-audicao-1',
        topic: 'Sistema Sensorial — Audição e Equilíbrio',
        subtopic: 'Tonotopia Coclear e Aparelho Vestibular',
        vignette: 'Um estudante revisa os mecanismos fisiológicos pelos quais a orelha interna distingue sons agudos de sons graves e detecta diferentes tipos de movimentos cefálicos.',
        question: 'Quais estruturas da orelha interna são responsáveis, respectivamente, pela codificação de sons agudos (alta frequência), pela detecção de aceleração linear/gravidade e pela detecção de aceleração angular (rotação)?',
        options: [
          'Ápice da membrana basilar (helicotrema); canais semicirculares; órgão de Corti.',
          'Base da membrana basilar (próxima à janela oval); máculas do utrículo e do sáculo (com otólitos); cristas ampulares dos canais semicirculares.',
          'Membrana timpânica; tuba auditiva; estribo.',
          'Rampa timpânica; nervo facial (NC VII); corpo geniculado lateral.'
        ],
        correctIndex: 1,
        explanation: 'Pela organização tonotópica da membrana basilar coclear, a base (próxima à janela oval) contém fibras curtas e rígidas que ressoam com frequências altas (sons agudos), enquanto o ápice responde a sons graves. No labirinto vestibular, as máculas do utrículo e sáculo (contendo otólitos) detectam aceleração linear e gravidade, e as cristas ampulares dos canais semicirculares detectam rotação (aceleração angular).'
      }
    ]
  },
  {
    id: 'anatomia-fisiologia-renal',
    category: 'APG — Morfofisiologia',
    keywords: ['rim', 'rins', 'néfron', 'filtração glomerular', 'reabsorção', 'secreção tubular', 'alça de henle', 'aldosterona', 'adh', 'urina', 'sistema geniturinário'],
    title: '6. Sistema Geniturinário — Anatomia e Fisiologia Renal (Formação da Urina)',
    specialty: 'Morfofisiologia Renal (APG)',
    evidenceConfidence: {
      level: 'Alta Evidência Fisiológica (Guyton & Hall / Moore)',
      summary: 'Anatomia renal retroperitoneal, histologia da barreira de filtração glomerular e transporte tubular por segmento do néfron.',
      limitations: 'A estimativa da TFG na prática clínica utiliza fórmulas baseadas na creatinina/cistatina C (CKD-EPI), pois a depuração da inulina é restrita a pesquisa.'
    },
    apgGuide: {
      anatomia: 'Os rins são órgãos retroperitoneais (entre T12 e L3), envolvidos pela cápsula fibrosa, gordura perirrenal e fáscia renal (de Gerota). Macroscopicamente dividem-se em Córtex Renal externo e Medula Renal interna (contendo as pirâmides renais de Malpighi, cujos ápices — papilas renais — drenam para os cálices menores -> cálices maiores -> pelve renal -> ureter). A unidade funcional é o Néfron (~1 milhão por rim), subdividido em néfrons corticais (80%) e justamedulares (20%, com longas alças de Henle essenciais para concentrar a urina).',
      histologia: 'Corpúsculo Renal (de Malpighi): Glomérulo (tufo capilar fenestrado entre a arteríola aferente e a arteríola eferente) + Cápsula de Bowman. Barreira de Filtração Glomerular (3 camadas): 1) Endotélio capilar fenestrado (carga negativa); 2) Membrana basal glomerular (colágeno tipo IV e proteoglicanos heparan-sulfato, bloqueia proteínas por tamanho e carga negativa); 3) Podócitos (epitélio visceral com pedicelos e fendas de filtração). Aparelho Justaglomerular: Mácula densa (no túbulo contorcido distal, sente carga de NaCl) + Células justaglomerulares (na arteríola aferente, secretam renina).',
      fisiologia: 'A excreção urinária resulta de: Excreção = Filtração − Reabsorção + Secreção. 1) Filtração Glomerular (TFG normal ~125 mL/min ou 180 L/dia): determinada pelas forças de Starling glomerulares (Pressão hidrostática glomerular ~60 mmHg favorece filtração; Pressão oncótica glomerular ~32 mmHg e pressão na cápsula de Bowman ~18 mmHg se opõem -> Pressão Efetiva de Filtração = +10 mmHg). 2) Túbulo Contorcido Proximal (TCP): reabsorve ~65% do Na+ e água, 100% da glicose (via cotransportador SGLT2/SGLT1) e aminoácidos, 85% do bicarbonato e secreta H+, ácidos e bases orgânicas. 3) Alça de Henle: ramo descendente fino é permeável à água; ramo ascendente espesso é impermeável à água e possui o cotransportador Na+-K+-2Cl- (NKCC2, cria o gradiente hiperosmótico medular por contracorrente). 4) Túbulo Contorcido Distal (TCD): cotransportador Na+-Cl- (NCC) e reabsorção de Ca²⁺ regulada pelo PTH. 5) Ducto Coletor: células principais reabsorvem Na+ e secretam K+ sob ação da Aldosterona (canais ENaC), e reabsorvem água via inserção de Aquaporinas-2 (AQP-2) estimulada pelo ADH (vasopressina).',
      diagnostico: 'Correlação Clínica: Quando a glicemia ultrapassa o limiar renal (~180-200 mg/dL), os transportadores SGLT no túbulo proximal saturam (transporte máximo), surgindo glicosúria e diurese osmótica.',
      tratamento: 'Correlação Farmacológica: Furosemida inibe o NKCC2 na alça de Henle; Hidroclorotiazida inibe o NCC no TCD; Espironolactona antagoniza a aldosterona no ducto coletor.'
    },
    socraticQuestion: 'No glomérulo renal, a arteríola aferente se ramifica em capilares que drenam para uma segunda arteríola (a arteríola eferente), e não diretamente para uma vênula. O que acontece com a Pressão Hidrostática Glomerular e com a Taxa de Filtração Glomerular (TFG) quando a Angiotensina II contrai preferencialmente a arteríola eferente?',
    references: [
      { title: 'Tratado de Fisiologia Médica, 14ª Edição — Unidade V: Os Líquidos Corporais e os Rins (Cap. 26 a 29)', source: 'Guyton & Hall (Elsevier)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Anatomia Orientada para a Clínica, 8ª Edição — Cap. 5: Abdome (Rins e Ureteres)', source: 'Moore, K. L.', year: '2019', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-renal-1',
        topic: 'Sistema Geniturinário — Fisiologia Renal',
        subtopic: 'Filtração Glomerular e Transporte Tubular',
        vignette: 'Um estudante de medicina analisa o funcionamento dos diferentes segmentos do néfron durante um estado de privação hídrica prolongada (desidratação).',
        question: 'Qual segmento tubular é responsável pela reabsorção de 100% da glicose filtrada em condições fisiológicas e qual hormônio promove a inserção de canais de água (Aquaporina-2) na membrana luminal do ducto coletor para concentrar a urina?',
        options: [
          'Ramo ascendente espesso da alça de Henle e Peptídeo Natriurético Atrial (PNA).',
          'Túbulo contorcido proximal (via SGLT2/SGLT1) e Hormônio Antidiurético (ADH / Vasopressina).',
          'Túbulo contorcido distal e Renina.',
          'Cápsula de Bowman e Eritropoietina.'
        ],
        correctIndex: 1,
        explanation: 'O túbulo contorcido proximal reabsorve toda a glicose filtrada através dos cotransportadores sódio-glicose (SGLT2 no segmento S1/S2 — 90% — e SGLT1 no segmento S3 — 10%). Já no ducto coletor, o ADH (vasopressina, secretado pela neuro-hipófise em resposta à hiperosmolaridade plasmática) liga-se aos receptores V2 e promove a translocação de vesículas com Aquaporina-2 para a membrana apical, permitindo a reabsorção de água livre.'
      }
    ]
  },
  {
    id: 'reprodutor-feminino',
    category: 'APG — Morfofisiologia',
    keywords: ['reprodutor feminino', 'ciclo menstrual', 'ciclo ovariano', 'ovulação', 'lh', 'fsh', 'estrogênio', 'progesterona', 'endométrio', 'útero', 'ovário', 'corpo lúteo'],
    title: '7. Sistema Reprodutor Feminino — Anatomia, Histologia e Ciclo Menstrual',
    specialty: 'Morfofisiologia Endócrino-Ginecológica (APG)',
    evidenceConfidence: {
      level: 'Consenso Morfofisiológico Consolidado (Guyton / Moore / Junqueira)',
      summary: 'Anatomia pélvica feminina, histologia ovariana/uterina e regulação neuroendócrina pelo eixo Hipotálamo-Hipófise-Ovário (HHO).',
      limitations: 'A duração da fase folicular apresenta variabilidade fisiológica entre mulheres (ciclos normais de 24 a 38 dias pela FIGO), enquanto a fase lútea é mais constante (~14 dias).'
    },
    apgGuide: {
      anatomia: 'Órgãos Genitais Internos: Ovários (gônadas intraperitoneais suspensas pelo ligamento suspensor do ovário — por onde passam os vasos ováricos — e ligamento próprio do ovário), Tubas Uterinas (infundíbulo com fímbrias, ampola — local habitual da fecundação —, istmo e parte uterina), Útero (fundo, corpo, istmo e colo/cérvice; sustentado pelo diafragma pélvico e ligamentos cardinais, uterossacros e redondos, em posição habitual de anteversoflexão) e Vagina. Órgãos Externos (Vulva): monte do púbis, lábios maiores e menores, clitóris, bulbo do vestíbulo e glândulas vestibulares maiores (de Bartholin).',
      histologia: 'Ovário: epitélio germinativo cúbico simples, túnica albugínea, córtex (folículos primordiais, primários, secundários/antrais e maduros de Graaf; células da Teca Interna e da Granulosa) e medula vascular. Parede Uterina: Perimétrio (serosa/adventícia), Miométrio (músculo liso em 3 camadas) e Endométrio — dividido em Camada Basal (permanente, regenera o epitélio) e Camada Funcional (descama na menstruação, irrigada pelas artérias espiraladas). O colo uterino apresenta a JEC (Junção Escamocolunar: transição entre o epitélio colunar simples da endocérvice e o estratificado pavimentoso não queratinizado da ectocérvice).',
      fisiologia: 'Eixo Hipotálamo-Hipófise-Ovário (HHO): O GnRH hipotalâmico (secretado em pulsos) estimula a adeno-hipófise a liberar FSH e LH. 1) Fase Folicular / Proliferativa (Dias 1 a 14): O FSH recruta os folículos ovarianos. Pela Teoria das Duas Células / Duas Gonadotrofinas, o LH estimula as células da Teca a produzir androstenediona, que difunde para as células da Granulosa onde a enzima Aromatase (estimulada pelo FSH) a converte em Estradiol (Estrogênio). O estradiol regenera e prolifera a camada funcional do endométrio. 2) Ovulação (~Dia 14): Níveis elevados e sustentados de estradiol por > 48h invertem o feedback negativo para FEEDBACK POSITIVO na hipófise, gerando o Pico de LH, que desencadeia a retomada da meiose I do oócito, síntese de prostaglandinas e ruptura folicular (ovulação 32-36h após início do pico de LH). 3) Fase Lútea / Secretora (Dias 15 a 28): O folículo roto transforma-se em Corpo Lúteo (luteinização pelo LH), secretando grandes quantidades de Progesterona (e estrogênio). A progesterona torna o endométrio secretor, tortuoso e rico em glicogênio (janela de implantação) e espessa o muco cervical. Se não houver fecundação (e β-hCG para salvar o corpo lúteo), o corpo lúteo regride para corpus albicans (~14 dias após ovulação) -> queda abrupta de progesterona e estrogênio -> vasoespasmo das artérias espiraladas -> isquemia e descamação da camada funcional (Menstruação).',
      diagnostico: 'Aplicação Clínica: A Junção Escamocolunar (JEC) e a zona de transformação do colo uterino são o local de coleta do exame citopatológico (Papanicolaou) por concentrarem a grande maioria das lesões precursoras induzidas pelo HPV.',
      tratamento: 'Correlação Fisiológica: Anticoncepcionais hormonais combinados suprimem os pulsos de GnRH, FSH e o pico de LH (impedindo a ovulação por feedback negativo), além de atrofiarem o endométrio e espessarem o muco cervical.'
    },
    socraticQuestion: 'Durante quase todo o ciclo menstrual, o estrogênio exerce feedback negativo sobre o eixo hipotálamo-hipófise. O que muda na metade do ciclo (por volta do 12º ao 14º dia) para que o estradiol passe a exercer feedback POSITIVO, disparando o pico de LH responsável pela ovulação?',
    references: [
      { title: 'Tratado de Fisiologia Médica, 14ª Edição — Cap. 82: Fisiologia Feminina Antes da Gravidez e os Hormônios Femininos', source: 'Guyton & Hall (Elsevier)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Anatomia Orientada para a Clínica, 8ª Edição — Cap. 6: Pelve e Períneo', source: 'Moore, K. L.', year: '2019', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-fem-1',
        topic: 'Sistema Reprodutor Feminino',
        subtopic: 'Regulação Hormonal do Ciclo Ovariano e Menstrual',
        vignette: 'Uma estudante analisa os gráficos hormonais (FSH, LH, Estradiol e Progesterona) e as alterações histológicas endometriais ao longo de um ciclo menstrual regular de 28 dias.',
        question: 'Qual é o evento hormonal responsável diretamente por desencadear a ovulação no meio do ciclo e qual estrutura ovariana produz a progesterona necessária para manter o endométrio na fase secretora?',
        options: [
          'Queda abrupta do estradiol; folículo primordial sob estímulo da prolactina.',
          'Pico de LH (induzido pelo feedback positivo do estradiol elevado e sustentado); Corpo Lúteo.',
          'Pico isolado de progesterona no 5º dia do ciclo; células da teca externa.',
          'Inibição do GnRH pela inibina B; corpus albicans.'
        ],
        correctIndex: 1,
        explanation: 'Quando o folículo dominante produz concentrações altas e sustentadas de estradiol por 48 horas no final da fase folicular, o feedback na adeno-hipófise inverte-se para positivo, gerando o pico de LH indispensável para a ruptura folicular (ovulação). Após a ovulação, as células foliculares remanescentes sofrem luteinização formando o Corpo Lúteo, principal fonte de progesterona na fase lútea/secretora.'
      }
    ]
  },
  {
    id: 'reprodutor-masculino',
    category: 'APG — Morfofisiologia',
    keywords: ['reprodutor masculino', 'espermatogênese', 'testosterona', 'sertoli', 'leydig', 'testículo', 'epidídimo', 'ducto deferente', 'próstata', 'vesícula seminal'],
    title: '8. Sistema Reprodutor Masculino — Anatomia, Espermatogênese e Testosterona',
    specialty: 'Morfofisiologia Endócrino-Urológica (APG)',
    evidenceConfidence: {
      level: 'Consenso Morfofisiológico Consolidado (Guyton / Moore / Tortora)',
      summary: 'Anatomia da via espermática, controle térmico testicular e regulação endócrina pelas células de Leydig e Sertoli.',
      limitations: 'O ciclo completo da espermatogênese humana dura cerca de 64 a 74 dias; por isso, fatores agressivos (febre alta, medicações) repercutem no espermograma semanas depois.'
    },
    apgGuide: {
      anatomia: 'Testículos (alojados no escroto, mantendo temperatura ~2°C abaixo da corporal graças ao plexo venoso pampiniforme — troca de calor em contracorrente — e aos músculos dartos e cremaster). Via Espermática: Túbulos seminíferos contorcidos -> túbulos retos -> rede testicular (rete testis) -> dúctulos eferentes -> Epidídimo (cabeça, corpo e cauda — maturação e motilidade dos espermatozoides) -> Ducto Deferente (atravessa o funículo espermático e o canal inguinal) -> une-se ao ducto da Glândula Seminal (vesícula seminal) formando o Ducto Ejaculatório -> abre-se na Uretra Prostática -> Uretra Membranácea -> Uretra Esponjosa (peniana). Glândulas Acessórias: Vesículas Seminais (produzem ~60-70% do volume do sêmen, rico em frutose e prostaglandinas), Próstata (~20-30%, fluido alcalino rico em citrato, zinco e PSA que liquefaz o coágulo seminal) e Glândulas Bulbouretrais de Cowper (muco lubrificante pré-ejaculatório).',
      histologia: 'Parênquima Testicular: 1) Túbulos Seminíferos: revestidos pelo epitélio seminífero contendo as células da linhagem germinativa (espermatogônias -> espermatócitos primários e secundários -> espermátides -> espermatozoides) e as Células de Sertoli (sustentação, nutrição, fagocitose de corpos residuais e formação da Barreira Hematotesticular por junções de oclusão/tight junctions, que protege os gametas haploides do sistema imune). 2) Interstício Testicular: contém as Células Intersticiais de Leydig (produtoras de testosterona).',
      fisiologia: 'Eixo Hipotálamo-Hipófise-Testículo: O GnRH pulsátil estimula a adeno-hipófise a secretar LH e FSH. 1) O LH liga-se às Células de Leydig no interstício, estimulando a conversão de colesterol em Testosterona (necessária para características sexuais secundárias, libido, anabolismo muscular/ósseo e espermatogênese). Nos tecidos periféricos (próstata, folículo piloso), a enzima 5α-redutase converte a testosterona em Di-hidrotestosterona (DHT), mais potente. 2) O FSH liga-se às Células de Sertoli nos túbulos seminíferos, estimulando a síntese de ABP (Proteína Ligadora de Androgênio — que mantém altíssima concentração intratubular de testosterona essencial para a espermatogênese) e de Inibina B (que realiza feedback negativo seletivo sobre o FSH). Função Erétil e Ejaculação: A ereção é Parassimpática (nervos esplâncnicos pélvicos S2-S4 liberam Óxido Nítrico [NO] -> aumenta GMPc -> relaxa músculo liso das artérias helicinas e corpos cavernosos); a emissão é Simpática (L1-L2) e a expulsão ejaculatória é Somática (nervo pudendo).',
      diagnostico: 'Aplicação Clínica: O uso abusivo de testosterona exógena (esteroides anabolizantes) inibe o LH e o FSH hipofisários por feedback negativo; sem LH endógeno, as células de Leydig param de produzir testosterona intratesticular, levando à atrofia testicular e azoospermia/infertilidade.',
      tratamento: 'Correlação Farmacológica: Inibidores da fosfodiesterase-5 (Sildenafila, Tadalafila) inibem a degradação do GMPc nos corpos cavernosos, potencializando a vasodilatação mediada pelo óxido nítrico.'
    },
    socraticQuestion: 'Por que um homem jovem que faz uso de altas doses de testosterona exógena (anabolizantes) apresenta níveis sanguíneos altíssimos de testosterona, mas desenvolve atrofia testicular e queda drástica na produção de espermatozoides (oligo/azoospermia)?',
    references: [
      { title: 'Tratado de Fisiologia Médica, 14ª Edição — Cap. 81: Funções Reprodutivas e Hormonais Masculinas', source: 'Guyton & Hall (Elsevier)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Anatomia Orientada para a Clínica, 8ª Edição — Pelve e Períneo Masculino', source: 'Moore, K. L.', year: '2019', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-masc-1',
        topic: 'Sistema Reprodutor Masculino',
        subtopic: 'Células de Sertoli, Leydig e Regulação Hormonal',
        vignette: 'Um grupo de APG estuda a histofisiologia dos túbulos seminíferos e do tecido intersticial dos testículos, bem como o papel de cada célula na espermatogênese.',
        question: 'Quais são, respectivamente, a célula testicular que responde ao LH produzindo testosterona e a célula que responde ao FSH formando a barreira hematotesticular e secretando a proteína ligadora de androgênio (ABP) e inibina B?',
        options: [
          'Espermatogônia tipo A e célula mioide peritubular.',
          'Célula intersticial de Leydig e célula sustentacular de Sertoli.',
          'Célula de Sertoli e célula principal do epidídimo.',
          'Célula da granulosa e célula de Cowper.'
        ],
        correctIndex: 1,
        explanation: 'As células intersticiais de Leydig localizam-se no tecido conjuntivo entre os túbulos seminíferos e possuem receptores para o LH, sintetizando testosterona. Já as células de Sertoli situam-se dentro dos túbulos seminíferos, formam a barreira hematotesticular por junções oclusivas e respondem ao FSH produzindo ABP (que concentra testosterona na luz tubular) e inibina B.'
      }
    ]
  },

  // ==========================================================================
  // TRILHA 2: HAM — HABILIDADES MÉDICAS E SEMIOLOGIA (5 TEMAS + 2 CASOS PRÁTICOS)
  // ==========================================================================
  {
    id: 'ham-exame-neurologico',
    category: 'HAM — Habilidades Médicas & Semiologia',
    keywords: ['exame neurológico', 'força muscular', 'mrc', 'tônus', 'reflexos', 'babinski', 'coordenação', ' índex-nariz', 'romberg', 'marcha', 'cerebelo', 'ataxia'],
    title: '9 & 14. HAM — Exame Neurológico (Motricidade, Reflexos, Coordenação e Caso de Ataxia)',
    specialty: 'Semiologia Neurológica (Bates / HAM)',
    evidenceConfidence: {
      level: 'Padrão-Ouro Semiológico (Bates — Propedêutica Médica)',
      summary: 'Técnica sistematizada de avaliação motora, reflexos osteotendíneos, provas cerebelares e sinal de Romberg.',
      limitations: 'O exame deve ser sempre comparativo (lado direito vs esquerdo) e interpretado junto à história clínica.'
    },
    apgGuide: {
      anatomia: 'A motricidade voluntária e o equilíbrio dependem da integração entre: 1º Neurônio Motor (córtex motor -> trato corticoespinal), 2º Neurônio Motor (corno anterior da medula -> nervo periférico -> placa motora), Cerebelo (vermis para equilíbrio axial/tronco; hemisférios cerebelares para coordenação apendicular IPSILATERAL), Sistema Vestibular (labirinto e núcleos vestibulares) e Propriocepção Consciente (fascículos grácil e cuneiforme na coluna dorsal da medula).',
      fisiologia: 'O reflexo miotático (osteotendíneo) é monossináptico: a percussão do tendão estira o fuso neuromuscular -> fibra aferente Ia entra pela raiz dorsal -> sinapse direta com o motoneurônio alfa no corno anterior -> contração muscular, sendo modulado inibitoriamente pelo trato corticoespinal descendente.',
      fisiopatologia: 'Sindrome do 1º Neurônio Motor (Piramidal): hipertonia elástica (sinal do canivete), hiperreflexia (3+/4+ ou 4+/4+ com clônus) e sinal de Babinski (extensão do hálux ao estímulo plantar lateral). Síndrome do 2º Neurônio Motor: hipotonia/flacidez, arreflexia/hiporreflexia, fasciculações e atrofia muscular precoce. Caso Clínico 14 (Ataxia Cerebelar vs Sensitiva): Na lesão cerebelar, o paciente apresenta marcha ebriosa (base alargada), dismetria (prova índex-nariz e calcanhar-joelho alteradas MESMO de olhos abertos) e disdiadococinesia. Na ataxia sensitiva (proprioceptiva), o paciente compensa com a visão; ao fechar os olhos, cai (Sinal de Romberg POSITIVO).',
      diagnostico: 'Técnica Semiológica (Bates): 1) Força Muscular (Escala MRC 0 a 5): 0 = sem contração; 1 = abalo visível sem movimento; 2 = movimento no plano horizontal sem vencer gravidade; 3 = vence a gravidade mas não vence resistência; 4 = vence alguma resistência; 5 = força normal. Manobras deficitárias de Mingazzini e Barré. 2) Tônus: mobilização passiva (espasticidade vs rigidez em roda denteada vs hipotonia). 3) Reflexos Profundos (0 a 4+, normal = 2+): Bicipital (C5-C6), Estilorradial (C6), Tricipital (C7), Patelar (L2-L4) e Aquileu (S1). 4) Coordenação e Equilíbrio: Índex-nariz, calcanhar-joelho, movimentos alternados rápidos (eudiadococinesia) e Teste de Romberg.',
      tratamento: 'Conduta no Treinamento Prático (HAM): Higienizar as mãos, explicar cada etapa ao paciente, expor simetricamente os segmentos avaliados, testar força e reflexos sempre comparando um dimídio com o outro.'
    },
    socraticQuestion: 'No Caso Clínico 14 da apostila: como o Teste de Romberg (comparar o equilíbrio em pé de olhos abertos vs olhos fechados) permite diferenciar rapidamente uma ataxia por lesão do Cerebelo de uma ataxia por perda da Propriocepção (coluna dorsal)?',
    references: [
      { title: 'Bates — Propedêutica Médica, 13ª Edição — Cap. 24: Sistema Nervoso', source: 'Bickley, L. S. (Guanabara Koogan)', year: '2022', evidenceLevel: 'Referência Oficial de Semiologia (HAM)', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Neuroanatomia Clínica, 8ª Edição — Cerebelo e Tratos Medulares', source: 'Snell, R. S.', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-ham-neuro-1',
        topic: 'HAM — Exame Neurológico e Caso Clínico 14',
        subtopic: 'Avaliação Motora, Reflexos e Equilíbrio (Cerebelo vs Propriocepção)',
        vignette: 'Caso Clínico Simulado (Questão 14): Paciente de 52 anos comparece ao ambulatório queixando-se de instabilidade para caminhar. Ao exame físico, você solicita que ele toque a ponta do próprio nariz com o dedo indicador direito (prova índex-nariz): ele erra o alvo (dismetria) e apresenta tremor intencional tanto de olhos abertos quanto fechados, além de incapacidade de realizar movimentos rápidos alternados de pronação/supinação na mão direita (disdiadococinesia). A força muscular é grau 5/5 e os reflexos patelares (L2-L4) e aquileus (S1) são 2+/4+.',
        question: 'Qual estrutura anatômica está comprometida neste paciente e de que lado encontra-se a lesão?',
        options: [
          'Córtex motor primário esquerdo (giro pré-central), pois as vias piramidais cruzam no bulbo.',
          'Hemisfério cerebelar direito (ipsilateral aos sinais de dismetria e disdiadococinesia), que coordena a execução motora apendicular.',
          'Fascículo grácil esquerdo da medula espinal, caracterizando sinal de Romberg clássico.',
          'Corno anterior da medula lombar em L4, caracterizando lesão de 2º neurônio motor.'
        ],
        correctIndex: 1,
        explanation: 'A presença de dismetria (erro de medida na prova índex-nariz que não depende da visão), tremor intencional e disdiadococinesia com força muscular preservada (MRC 5/5) é clássica de síndrome cerebelar apendicular. Diferente do córtex cerebral (que controla o lado oposto), cada hemisfério cerebelar controla a coordenação motora do MESMO lado do corpo (ipsilateral), devido ao duplo cruzamento das vias cerebelares.'
      }
    ]
  },
  {
    id: 'ham-nervos-cranianos',
    category: 'HAM — Habilidades Médicas & Semiologia',
    keywords: ['nervos cranianos', '12 pares', 'olfatório', 'óptico', 'oculomotor', 'troclear', 'trigêmeo', 'abducente', 'facial', 'vestibulococlear', 'glossofaríngeo', 'vago', 'acessório', 'hipoglosso'],
    title: '10. HAM — Exame Semiológico dos 12 Pares de Nervos Cranianos',
    specialty: 'Semiologia Neurológica (Bates / HAM)',
    evidenceConfidence: {
      level: 'Padrão-Ouro Semiológico (Bates — Propedêutica Médica)',
      summary: 'Sistematização prática do exame dos pares cranianos I a XII, funções aferentes/eferentes e achados normais.',
      limitations: 'O par I (Olfatório) raramente é testado na triagem rápida, exceto se houver queixa de hiposmia/anosmia, TCE de base de crânio ou suspeita de doença neurodegenerativa.'
    },
    apgGuide: {
      anatomia: 'Os 12 pares emergem em sequência rostrocaudal: Telencéfalo (I - Olfatório), Diencéfalo (II - Óptico), Mesencéfalo (III - Oculomotor, IV - Troclear), Ponte (V - Trigêmeo, VI - Abducente, VII - Facial, VIII - Vestibulococlear) e Bulbo (IX - Glossofaríngeo, X - Vago, XI - Acessório, XII - Hipoglosso).',
      fisiologia: 'Integram os sentidos especiais (olfato, visão, gustação, audição e equilíbrio), a sensibilidade da face (NC V), a motricidade ocular extrínseca (III, IV, VI), a mímica facial (VII), a deglutição e fonação (IX, X), a musculatura cervical (XI) e a motricidade da língua (XII).',
      fisiopatologia: 'Exemplos clássicos de alteração semiológica: Na Paralisia Facial Periférica (lesão do nervo VII, ex: Paralisia de Bell), toda a hemiface ipsilateral (andar superior/testa e inferior/boca) fica paralisada (sinal de Bell ao tentar fechar o olho). Na Paralisia Facial Central (AVC supranuclear), a testa é poupada (pois o núcleo motor superior do VII recebe inervação cortical bilateral), comprometendo apenas o quadrante inferior contralateral da face.',
      diagnostico: 'Roteiro Prático de Exame dos 12 Pares (Bates): • NC I (Olfatório): identificar odores não irritantes (café, cravo) com olhos fechados, uma narina por vez. • NC II (Óptico): acuidade visual (Snellen), campos visuais por confrontação, fundoscopia e aferência do reflexo fotomotor. • NC III, IV e VI (Oculomotor, Troclear e Abducente): seguir o dedo no "H" das 6 posições cardinais do olhar (VI = reto lateral; IV = oblíquo superior; III = demais músculos, elevador da pálpebra e miose pupilar). • NC V (Trigêmeo): sensibilidade tátil/dolorosa nos 3 ramos (V1 oftálmico, V2 maxilar, V3 mandibular), palpação dos músculos masseter e temporal ao cerrar os dentes e reflexo corneopalpebral (aferência V1, eferência VII). • NC VII (Facial): franzir a testa, fechar os olhos com força, sorrir, inflar as bochechas; gustação nos 2/3 anteriores da língua. • NC VIII (Vestibulococlear): teste do sussurro, Rinne e Weber (diapasão 512 Hz). • NC IX e X (Glossofaríngeo e Vago): dizer "Ahhh" observando elevação simétrica do véu palatino e úvula centrada (na lesão unilateral do X, a úvula desvia para o lado SÃO), reflexo nauseoso e qualidade da voz. • NC XI (Acessório): elevar os ombros contra resistência (trapézio) e girar a cabeça contra a mão do examinador (esternocleidomastoideo). • NC XII (Hipoglosso): protruir a língua (na lesão unilateral do XII, a língua desvia para o lado LESADO).',
      tratamento: 'Dica de Prova Prática (OSCE / HAM): Sempre testar os reflexos consensuais e lembrar da regra dos desvios: o Vago (X) puxa a úvula para o lado BOM; o Hipoglosso (XII) empurra a língua para o lado LESADO.'
    },
    socraticQuestion: 'Como você diferencia à beira do leito uma Paralisia Facial Periférica (lesão do próprio nervo facial — VII par) de uma Paralisia Facial Central (como em um AVC no córtex motor)? Qual movimento simples você pede para o paciente fazer com a testa e os olhos?',
    references: [
      { title: 'Bates — Propedêutica Médica, 13ª Edição — Avaliação dos Nervos Cranianos', source: 'Bickley, L. S.', year: '2022', evidenceLevel: 'Referência Oficial de Semiologia (HAM)', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Anatomia Orientada para a Clínica, 8ª Edição — Cap. 10: Resumo dos Nervos Cranianos', source: 'Moore, K. L.', year: '2019', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-ham-nc-1',
        topic: 'HAM — Exame dos Nervos Cranianos',
        subtopic: 'Motricidade Ocular, Palato e Língua',
        vignette: 'Durante a estação prática de HAM sobre exame dos 12 pares de nervos cranianos, o professor pede que você avalie a abdução do olho (olhar para a lateral), a elevação do palato mole ao dizer "Ahhh" e a protrusão da língua na linha média.',
        question: 'Quais são, respectivamente, os pares cranianos motores avaliados em cada uma dessas três manobras?',
        options: [
          'NC III (Oculomotor), NC VII (Facial) e NC V (Trigêmeo).',
          'NC VI (Abducente — músculo reto lateral), NC IX/X (Glossofaríngeo e Vago) e NC XII (Hipoglosso).',
          'NC IV (Troclear), NC XI (Acessório) e NC IX (Glossofaríngeo).',
          'NC II (Óptico), NC VIII (Vestibulococlear) e NC XII (Hipoglosso).'
        ],
        correctIndex: 1,
        explanation: 'O músculo reto lateral (que abduz o bulbo ocular) é inervado exclusivamente pelo VI par (Abducente). A elevação simétrica do véu palatino e da úvula depende do IX e principalmente do X par (Vago). Já a motricidade intrínseca e extrínseca da língua é função do XII par (Hipoglosso).'
      }
    ]
  },
  {
    id: 'ham-exame-ginecologico',
    category: 'HAM — Habilidades Médicas & Semiologia',
    keywords: ['exame ginecológico', 'geniturinário feminino', 'especular', 'espéculo', 'collins', 'toque bimanual', 'papanicolaou', 'jec', 'inspeção', 'consentimento'],
    title: '11. HAM — Exame Geniturinário Feminino (Inspeção, Especular e Toque Bimanual)',
    specialty: 'Semiologia Ginecológica (HAM / FEBRASGO / Bates)',
    evidenceConfidence: {
      level: 'Protocolo Oficial de Semiologia e Ética Médica (FEBRASGO / MS / Bates)',
      summary: 'Sequência técnica humanizada desde o consentimento e preparação até a inspeção estática/dinâmica, exame especular e toque vaginoabdominal bimanual.',
      limitations: 'O exame especular e o toque bimanual via vaginal não são realizados em pacientes virgens (hímen íntegro), salvo indicação clínica excepcional sob consentimento específico.'
    },
    apgGuide: {
      anatomia: 'Referências anatômicas essenciais no exame: Monte do púbis, lábios maiores e menores, clitóris, meato uretral externo, introito vaginal, glândulas de Skene (parauretrais) e de Bartholin (posterolaterais no introito, às 4h e 8h), paredes vaginais, fórnices vaginais (anterior, posterior e laterais), colo uterino (ectocérvice, orifício externo do colo e endocérvice/JEC), corpo uterino e regiões anexiais (ovários e tubas).',
      fisiologia: 'Em mulheres no menacme (idade fértil), o epitélio vaginal é estratificado pavimentoso rico em glicogênio (estimulado pelo estrogênio), metabolizado pelos lactobacilos de Döderlein mantendo pH vaginal ácido fisiológico (3,8 a 4,5) e conteúdo vaginal claro/branco flocular inodoro.',
      fisiopatologia: 'Achados normais vs alertas: Colo uterino normal é róseo, liso, móvel e indolor à mobilização. Dor intensa à mobilização do colo uterino ("Sinal do Candelabro" ou Chandelier sign) sugere Doença Inflamatória Pélvica (DIP); abaulamento doloroso do fórnice posterior (fundo de saco de Douglas) pode indicar coleção/sangue.',
      diagnostico: 'Etapas Sistemáticas do Exame Ginecológico (HAM): 1) Ética, Consentimento e Preparo: explicar todo o procedimento antes de iniciar, obter consentimento verbal explícito, garantir ambiente privativo, presença de auxiliar na sala, solicitar que a paciente esvazie a bexiga antes e posicionar em litotomia (ginecológica) cobrindo com lençol. 2) Inspeção da Genitália Externa: estática (pilosidade, trofismo labial, clitóris, meato uretral, períneo, pesquisa de úlceras/verrugas) e dinâmica (pedir manobra de Valsalva/tossir para avaliar prolapso de parede vaginal ou perda urinária de esforço). 3) Exame Especular: escolher o espéculo de Collins de tamanho adequado (não usar lubrificante em gel se for coletar citologia oncótica; apenas umedecer com soro fisiológico se necessário). Afastar os pequenos lábios, introduzir o espéculo fechado em ângulo oblíquo (~45°) direcionado para baixo (protegendo a uretra subpúbica), girar para a posição horizontal, abrir suavemente até visualizar e centralizar o colo uterino, e travar a borboleta. Inspecionar paredes vaginais, conteúdo e colo; realizar coleta da ectocérvice (espátula de Ayre) e endocérvice (escovinha). Para retirar: destravar, recuar um pouco para liberar o colo, fechar suavemente sem beliscar a mucosa e retirar. 4) Toque Vaginal Bimanual: calçar luva com lubrificante hidrossolúvel nos dedos indicador e médio, avaliar tonicidade perineal, paredes vaginais, consistência e mobilidade indolor do colo; com a outra mão sobre o hipogástrio (mão abdominal), apreender o útero entre as duas mãos (avaliar posição — AVF/RVF —, volume, superfície, consistência fibroelástica e mobilidade) e palpar os fórnices laterais para avaliar anexos.',
      tratamento: 'Comunicação Pós-Exame: Oferecer papel para higiene, permitir que a paciente se vista com privacidade antes de conversar sobre os achados e registrar detalhadamente no prontuário.'
    },
    socraticQuestion: 'Durante a introdução do espéculo de Collins no exame ginecológico, por que ele deve ser inserido inicialmente em leve inclinação oblíqua apoiando a pressão sobre a parede vaginal posterior, e nunca pressionando anteriormente logo abaixo da sínfise púbica?',
    references: [
      { title: 'Bates — Propedêutica Médica, 13ª Edição — Cap. Genitália Feminina', source: 'Bickley, L. S.', year: '2022', evidenceLevel: 'Referência Oficial de Semiologia (HAM)', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero', source: 'Ministério da Saúde / INCA / FEBRASGO', year: '2021', evidenceLevel: 'Diretriz Oficial Nacional', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-ham-gin-1',
        topic: 'HAM — Exame Geniturinário Feminino',
        subtopic: 'Técnica do Exame Especular e Toque Bimanual',
        vignette: 'Na prática simulada de HAM sobre o exame ginecológico completo de uma paciente adulta que comparece para coleta de exame citopatológico (Papanicolaou):',
        question: 'Qual sequência descreve corretamente os cuidados técnicos obrigatórios para o exame especular e coleta citopatológica?',
        options: [
          'Realizar o toque bimanual com abundante gel lubrificante antes do exame especular para dilatar o canal vaginal.',
          'Garantir bexiga vazia, consentimento e privacidade; realizar inspeção externa; introduzir o espéculo fechado sem gel lubrificante (para não prejudicar a amostra citológica), protegendo a uretra anterior, abrir e centralizar o colo uterino antes de realizar o toque bimanual.',
          'Introduzir o espéculo já aberto na posição vertical pressionando a região suburetral.',
          'Coletar a citologia oncótica apenas do fórnice vaginal lateral, sem tocar a Junção Escamocolunar (JEC).'
        ],
        correctIndex: 1,
        explanation: 'O exame especular SEMPRE precede o toque vaginal bimanual quando há coleta de citologia oncótica, e o espéculo não deve ser besuntado com gel lubrificante (que contamina a lâmina), sendo introduzido fechado com apoio na parede posterior para não traumatizar a uretra (sensível, situada anteriormente).'
      }
    ]
  },
  {
    id: 'ham-cateterismo-vesical',
    category: 'HAM — Habilidades Médicas & Semiologia',
    keywords: ['cateterismo vesical', 'sonda vesical', 'foley', 'demora', 'retenção urinária', 'bexigoma', 'uretra', 'técnica asséptica', 'itu', 'trauma uretral'],
    title: '12 & 15. HAM — Cateterismo Vesical de Demora (Técnica Asséptica e Caso Clínico)',
    specialty: 'Habilidades Cirúrgicas & Urológicas (HAM / ANVISA)',
    evidenceConfidence: {
      level: 'Diretriz de Segurança do Paciente (ANVISA / OMS / Sabiston)',
      summary: 'Indicações estritas, contraindicações absolutas (suspeita de lesão uretral), lista de materiais, técnica asséptica rigorosa e prevenção de ITU associada a cateter.',
      limitations: 'O cateterismo vesical de demora é a principal causa de infecção do trato urinário relacionada à assistência à saúde (ITU-AC); deve ser removido assim que cessar a indicação.'
    },
    apgGuide: {
      anatomia: 'Diferença anatômica crucial (Questão 15): • Uretra Feminina: curta (~4 cm), retilínea, abre-se no vestíbulo vaginal entre o clitóris (anterior) e o introito vaginal (posterior). • Uretra Masculina: longa (~18 a 22 cm), apresenta duas curvaturas e divide-se em 4 partes: Intramural (pré-prostática), Prostática (mais dilatável, atravessa a próstata), Membranácea (atravessa o diafragma urogenital, envolvida pelo esfíncter uretral externo — ponto mais estreito e vulnerável a falso trajeto) e Esponjosa/Peniana. Na Hiperplasia Prostática Benigna (HPB), o crescimento da zona de transição comprime a uretra prostática causando retenção urinária aguda (bexigoma palpável e maciço no hipogástrio).',
      fisiologia: 'O armazenamento vesical depende do relaxamento do músculo detrusor (simpático β3) e contração dos esfíncteres (simpático α1 no colo vesical/próstata e somático pudendo no esfíncter externo). O esvaziamento depende da contração parassimpática colinérgica M3 do detrusor.',
      fisiopatologia: 'Indicações do Cateterismo Vesical de Demora (CVD): 1) Retenção urinária aguda ou obstrução infravesical; 2) Monitorização rigorosa do débito urinário horário em pacientes críticos/instáveis ou grandes cirurgias; 3) Irrigação vesical contínua (hematúria maciça com coágulos — sonda de 3 vias); 4) Cicatrização de feridas perineais/sacrais abertas (úlcera por pressão grau III/IV) em incontinentes; 5) Conforto em cuidados paliativos de fim de vida. CONTRAINDICAÇÃO ABSOLUTA: Suspeita de trauma/lesão uretral (fratura pélvica com Tríade clássica: sangue no meato uretral [uretrorragia], hematoma perineal em "asa de borboleta" ou retenção urinária pós-trauma/próstata alta ao toque).',
      diagnostico: 'Materiais e Etapas da Inserção Segura (Técnica Asséptica): • Materiais: Bandeja de cateterismo estéril (cuba rim, cúpula, pinça Cheron, gases estéreis, campo fenestrado estéril), luva de procedimento (para higiene prévia), luva ESTÉRIL, cateter de Foley (2 vias, calibre habitual 14-16 Fr em mulheres e 16-18 Fr em homens), bolsa coletora de sistema FECHADO estéril, clorexidina aquosa 0,2% (antissepsia de mucosa), gel de lidocaína 2% estéril (seringa de 10-20 mL para lubrificação/anestesia uretral), seringa de 10-20 mL com ÁGUA DESTILADA estéril (para insuflar o balonete — NUNCA usar soro fisiológico, pois o NaCl cristaliza e obstrui o canal do balonete!) e seringa de 20 mL vazia. • Passo a Passo: 1) Confirmar indicação, explicar ao paciente e realizar higiene íntima com água e sabão (luva de procedimento); 2) Higienizar as mãos, abrir o pacote estéril com técnica asséptica, conectar previamente a sonda de Foley ao sistema coletor fechado (e testar o balonete se protocolo institucional indicar); 3) Calçar luvas estéreis; 4) Realizar antissepsia rigorosa com clorexidina aquosa (no homem: retrair prepúcio e limpar da glande/meato para a periferia; na mulher: grandes lábios, pequenos lábios e meato uretral sempre no sentido anteroposterior); 5) Colocar o campo fenestrado estéril (a mão não dominante que segura o pênis ou afasta os lábios fica "contaminada" e não toca mais nos materiais estéreis); 6) Lubrificar: no homem, injetar 10-15 mL de lidocaína gel estéril diretamente no meato uretral e aguardar 2-3 min, mantendo o pênis perpendicular ao corpo (90°) para retificar a curvatura peniana; 7) Introduzir o cateter suavemente com a mão dominante estéril até retornar urina; no homem, avançar até a bifurcação ("Y") da sonda antes de insuflar o balonete (evita insuflar o balão dentro da uretra prostática!); 8) Insuflar o balonete com água destilada estéril (volume indicado no cateter, geralmente 10 mL) e tracionar levemente até sentir ancoragem no colo vesical; 9) Reposicionar o prepúcio no homem (prevenir parafimose!), fixar a sonda (região supra-púbica ou face anteromedial da coxa) e manter bolsa coletora abaixo do nível da bexiga sem tocar o chão.',
      tratamento: 'Manutenção e Prevenção de Infecção (ANVISA): Manter o sistema estritamente fechado, esvaziar a bolsa quando atingir 2/3 da capacidade sem contaminar a válvula de drenagem, nunca elevar a bolsa acima do nível do púbis (evita refluxo de urina) e reavaliar diariamente a possibilidade de retirada.'
    },
    socraticQuestion: 'No Caso Clínico 15: Ao passar uma sonda de Foley em um paciente masculino, por que devemos introduzir o cateter até a bifurcação ("Y") e aguardar o retorno de urina ANTES de insuflar o balonete, e por que o balonete deve ser insuflado com água destilada e não com soro fisiológico?',
    references: [
      { title: 'Medidas de Prevenção de Infecção Relacionada à Assistência à Saúde — Prevenção de ITU associada a Cateter Vesical', source: 'ANVISA — Agência Nacional de Vigilância Sanitária', year: '2021', evidenceLevel: 'Protocolo Oficial de Segurança do Paciente', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Sabiston — Tratado de Cirurgia, 21ª Edição — Urologia e Cateterismo Vesical', source: 'Townsend, C. M. (Elsevier)', year: '2022', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-ham-cvd-1',
        topic: 'HAM — Cateterismo Vesical e Caso Clínico 15',
        subtopic: 'Técnica Asséptica, Anatomia Uretral e Segurança do Paciente',
        vignette: 'Caso Clínico Simulado (Questão 15): Homem de 69 anos procura o pronto-socorro com dor intensa em hipogástrio e incapacidade de urinar há 14 horas. Ao exame físico, palpa-se massa globosa, tensa e maciça à percussão na região suprapúbica (bexigoma). Não há história de trauma. Foi indicado cateterismo vesical de demora para alívio imediato.',
        question: 'Durante a execução técnica segura do cateterismo vesical de demora neste paciente masculino, qual das seguintes condutas é OBRIGATÓRIA para evitar complicações graves?',
        options: [
          'Insuflar o balonete com 10 mL de Soro Fisiológico 0,9% assim que a ponta da sonda passar pelo meato uretral externo.',
          'Realizar antissepsia com clorexidina alcoólica na mucosa uretral e manter o pênis fletido para baixo durante a passagem.',
          'Posicionar o pênis perpendicularmente ao tronco (90°) para retificar a curvatura subpúbica, instilar lidocaína gel 2% estéril na uretra, avançar a sonda até a bifurcação ("Y") com retorno de urina, insuflar o balonete com água destilada estéril e reposicionar o prepúcio ao final.',
          'Desconectar o cateter da bolsa coletora diariamente para lavar a bexiga com água corrente.'
        ],
        correctIndex: 2,
        explanation: 'No homem (uretra longa de ~20 cm), o pênis deve ser elevado a 90° para retificar a uretra esponjosa, a sonda deve ser introduzida até a bifurcação ("Y") com confirmação de retorno urinário para garantir que o balão não seja insuflado na uretra prostática (o que causaria lesão uretral grave e uretrorragia), o balonete deve ser preenchido com água destilada (soro fisiológico pode cristalizar e impedir a desinsuflação futura) e o prepúcio deve ser reduzido ao final para evitar parafimose.'
      }
    ]
  },
  {
    id: 'ham-sbv-bls',
    category: 'HAM — Habilidades Médicas & Semiologia',
    keywords: ['suporte básico de vida', 'sbv', 'bls', 'pcr', 'parada cardiorrespiratória', 'rcp', 'compressões torácicas', 'dea', 'desfibrilador', '30:2'],
    title: '13. HAM — Suporte Básico de Vida (SBV / BLS) e Uso do DEA na PCR',
    specialty: 'Emergências Médicas & Ressuscitação (AHA / SBC)',
    evidenceConfidence: {
      level: 'Alta Evidência (Diretrizes AHA / SBC de Ressuscitação Cardiopulmonar)',
      summary: 'Sequência C-A-B de atendimento inicial à Parada Cardiorrespiratória no adulto, parâmetros de RCP de alta qualidade e desfibrilação precoce com DEA.',
      limitations: 'Cada minuto de atraso na desfibrilação de um ritmo chocável (FV/TV sem pulso) reduz a sobrevida em 7% a 10% se não houver RCP imediata.'
    },
    apgGuide: {
      anatomia: 'As compressões torácicas são aplicadas sobre a metade inferior do esterno (centro do tórax, na linha intermamilar), evitando comprimir o processo xifoide. O coração fica situado no mediastino médio, entre o corpo do esterno anteriormente e os corpos vertebrais torácicos (T5-T8) posteriormente.',
      fisiologia: 'Durante a PCR, o fluxo sanguíneo coronariano e cerebral gerado pela RCP depende de dois mecanismos: 1) Bomba Cardíaca (compressão direta dos ventrículos entre o esterno e a coluna vertebral) e 2) Bomba Torácica (aumento da pressão intratorácica na compressão ejeta sangue para fora do tórax; o retorno total do tórax na descompressão cria pressão negativa que aspira o retorno venoso e permite a perfusão das artérias coronárias, que ocorre na "diástole"/descompressão).',
      fisiopatologia: 'Os 4 ritmos de PCR dividem-se em: • Chocáveis (tratados com desfibrilação pelo DEA + RCP): Fibrilação Ventricular (FV — atividade elétrica caótica, causa mais comum de PCR súbita extra-hospitalar no adulto) e Taquicardia Ventricular Sem Pulso (TVSP). • Não Chocáveis (tratados exclusivamente com RCP de alta qualidade + Adrenalina + correção de causas reversíveis 5H/5T): Assistolia e Atividade Elétrica Sem Pulso (AESP).',
      diagnostico: 'Sequência Passo a Passo do SBV no Adulto (AHA / SBC): 1) Segurança da Cena: verificar se o local é seguro para o socorrista e a vítima. 2) Checar Responsividade: tocar os ombros com firmeza e chamar em voz alta ("Senhor, você está bem?"). 3) Acionar Ajuda / SAMU (192) e Pedir o DEA: se a vítima não responde, apontar para alguém (ou ligar no viva-voz) pedindo para ligar 192 e trazer o Desfibrilador Externo Automático (DEA) imediatamente. 4) Checar Respiração e Pulso Carotídeo Simultaneamente (em no mínimo 5 e no MÁXIMO 10 segundos): observar se o tórax se eleva (atenção: gasping/respiração agônica NÃO é respiração normal e indica PCR!) enquanto palpa o pulso carotídeo (no sulco entre a traqueia e o músculo esternocleidomastoideo).',
      tratamento: '5) Iniciar RCP de Alta Qualidade (Sequência C-A-B): Se ausência de pulso (ou dúvida após 10s), iniciar imediatamente ciclos de 30 compressões para 2 ventilações (30:2): • Frequência: 100 a 120 compressões por minuto; • Profundidade: 5 a 6 cm no adulto; • Retorno total do tórax após cada compressão (não ficar apoiado sobre o peito); • Minimizar interrupções (< 10 segundos); • Ventilações: abrir via aérea (inclinação da cabeça e elevação do queixo — Chin Lift — ou tração da mandíbula — Jaw Thrust — se suspeita de trauma cervical) e aplicar 2 ventilações de 1 segundo cada até visibilizar elevação torácica. 6) Uso do DEA assim que chegar: Ligar o DEA -> Colar as pás adesivas no tórax desnudo e seco (uma infraclavicular direita paraesternal e outra no precórdio lateral esquerdo abaixo do mamilo/linha hemiaxilar) -> Afastar todos para análise do ritmo -> Se CHOQUE INDICADO: garantir que ninguém toque na vítima e apertar o botão de choque -> Retomar IMEDIATAMENTE a RCP pelas compressões torácicas por 2 minutos (5 ciclos de 30:2) antes de nova checagem!'
    },
    socraticQuestion: 'Durante a Ressuscitação Cardiopulmonar (RCP), após o DEA aplicar o choque em um paciente em Fibrilação Ventricular, você deve checar o pulso carotídeo imediatamente ou reiniciar as compressões torácicas na mesma hora por 2 minutos? E por que é fundamental permitir o retorno total do tórax entre uma compressão e outra?',
    references: [
      { title: 'American Heart Association (AHA) Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care', source: 'Circulation / AHA (PubMed)', year: '2020', evidenceLevel: 'Diretriz Internacional (Nível IA)', pmid: '33081529', url: 'https://pubmed.ncbi.nlm.nih.gov/33081529/' },
      { title: 'Atualização da Diretriz de Ressuscitação Cardiopulmonar e Cuidados Cardiovasculares de Emergência da Sociedade Brasileira de Cardiologia', source: 'Sociedade Brasileira de Cardiologia (SBC)', year: '2019', evidenceLevel: 'Diretriz Oficial Nacional', pmid: '31644799', url: 'https://pubmed.ncbi.nlm.nih.gov/31644799/' }
    ],
    questions: [
      {
        id: 'q-ham-sbv-1',
        topic: 'HAM — Suporte Básico de Vida (SBV / BLS)',
        subtopic: 'Parâmetros de RCP de Alta Qualidade e Uso do DEA',
        vignette: 'Você presencia um homem de 58 anos colapsar subitamente na recepção do ambulatório. A cena é segura. Ao chamá-lo, ele está irresponsivo. Você pede para acionarem o serviço de emergência (192) e trazerem o DEA, e checa simultaneamente a respiração e o pulso carotídeo por 8 segundos: o paciente apresenta apenas movimentos de "gasping" (respiração agônica) e não tem pulso palpável.',
        question: 'Qual é a conduta imediata e quais são os parâmetros corretos das compressões torácicas segundo as diretrizes da AHA/SBC?',
        options: [
          'Colocar o paciente em posição lateral de segurança, pois a presença de gasping exclui parada cardiorrespiratória.',
          'Aplicar 5 ventilações de resgate lentas antes de iniciar compressões a 60 por minuto.',
          'Iniciar RCP imediatamente pelas compressões torácicas na relação 30 compressões : 2 ventilações, com frequência de 100 a 120/min, profundidade de 5 a 6 cm, permitindo o retorno total do tórax e utilizando o DEA assim que disponível.',
          'Aguardar a chegada do DEA sem tocar no paciente para não alterar o traçado eletrocardiográfico.'
        ],
        correctIndex: 2,
        explanation: 'O gasping (respiração agônica) é um sinal clássico de PCR e não representa ventilação eficaz. Na ausência de pulso em até 10 segundos, inicia-se imediatamente a RCP pela sequência C-A-B (30 compressões : 2 ventilações), com frequência de 100-120/min, profundidade de 5-6 cm no adulto e retorno total do tórax.'
      }
    ]
  },

  // ==========================================================================
  // TRILHA 3: FISIOLOGIA MÉDICA — AS 10 QUESTÕES FUNDAMENTAIS DO GRUPO
  // ==========================================================================
  {
    id: 'fisio-conducao-cardiaca',
    category: 'Fisiologia Médica (10 Questões)',
    keywords: ['condução elétrica', 'coração', 'nó sinoatrial', 'nó atrioventricular', 'feixe de his', 'purkinje', 'marcapasso', 'atraso nodal', 'átrios', 'ventrículos'],
    title: 'Fisiologia 01 — Sistema de Condução Elétrica do Coração e Sincronia Atrioventricular',
    specialty: 'Fisiologia Cardiovascular (Guyton & Hall)',
    evidenceConfidence: {
      level: 'Consenso Fisiológico Consolidado (Guyton & Hall, Cap. 10)',
      summary: 'Sequência de geração e propagação do impulso cardíaco e importância hemodinâmica do atraso no nó AV.',
      limitations: 'Distúrbios do sistema de condução (bloqueios AV ou de ramo) alteram a sequência fisiológica e exigem avaliação eletrocardiográfica.'
    },
    apgGuide: {
      anatomia: 'O sistema de condução é composto por cardiomiócitos especializados autoexcitáveis: 1) Nó Sinoatrial (SA ou de Keith-Flack), situado na parede posterolateral superior do átrio direito, próximo à desembocadura da veia cava superior; 2) Vias Internodais (anterior, média e posterior) e Feixe Interatrial de Bachmann (para o átrio esquerdo); 3) Nó Atrioventricular (AV ou de Aschoff-Tawara), na porção posterior direita do septo interatrial; 4) Feixe Atrioventricular (de His), única conexão elétrica normal que atravessa o esqueleto fibroso isolante do coração, dividindo-se em Ramo Direito e Ramo Esquerdo (fascículos anterossuperior e posteroinferior); 5) Fibras de Purkinje subendocárdicas.',
      histologia: 'As células nodais (SA e AV) possuem poucas miofibrilas contráteis e potencial de repouso instável (~ -55 a -60 mV), enquanto as Fibras de Purkinje são células largas, ricas em glicogênio e com altíssima densidade de junções comunicantes (conexinas nos discos intercalares), permitindo condução ultrarrápida (1,5 a 4,0 m/s).',
      fisiologia: '1) Automaticidade (Marcapasso Fisiológico): O Nó SA dispara na maior frequência intrínseca (60-100 bpm) devido aos canais "Funny" (If — influxo lento de Na+) e canais de Ca²⁺ tipo T e L, comandando o ritmo sinusal. 2) Contração Atrial: O impulso propaga-se pelos átrios (~0,3 a 1 m/s), gerando a onda P no ECG e a sístole atrial. 3) O Atraso Fisiológico no Nó AV (~0,09 a 0,12 s): As células do nó AV e fibras juncionais possuem menos gap junctions e diâmetro reduzido, retardando a passagem do estímulo. Esse atraso é VITAL: garante que os átrios terminem de se contrair e esvaziem o sangue nos ventrículos ANTES que a contração ventricular comece! 4) Sincício Ventricular: Após atravessar o Feixe de His e os ramos, as Fibras de Purkinje distribuem o estímulo quase instantaneamente do endocárdio para o epicárdio e do ápice para a base ventricular (complexo QRS), produzindo uma contração helicoidal eficiente que ejeta o sangue para a aorta e tronco pulmonar.',
      diagnostico: 'Correlação Eletrocardiográfica (ECG): Onda P = despolarização atrial; Intervalo PR (0,12 a 0,20 s) = condução do nó SA pelo nó AV até os ventrículos; Complexo QRS (< 0,12 s) = despolarização ventricular; Onda T = repolarização ventricular.',
      tratamento: 'Aplicação Clínica: Na Fibrilação Atrial, o nó SA perde o comando e o nó AV atua como "filtro protetor", impedindo que centenas de impulsos atriais caóticos passem todos para os ventrículos.'
    },
    socraticQuestion: 'O que aconteceria com o enchimento ventricular (pré-carga) e com o débito cardíaco se não existisse o atraso fisiológico de ~0,1 segundo no Nó Atrioventricular e o esqueleto fibroso cardíaco, fazendo com que átrios e ventrículos se contraíssem exatamente ao mesmo tempo?',
    references: [
      { title: 'Tratado de Fisiologia Médica, 14ª Edição — Cap. 10: Excitação Rítmica do Coração', source: 'Guyton & Hall (Elsevier)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-fisio-1',
        topic: 'Fisiologia Cardiovascular',
        subtopic: 'Sistema de Condução Elétrica do Coração',
        vignette: 'Durante o estudo do ciclo cardíaco, analisa-se a velocidade de propagação do impulso elétrico desde o Nó Sinoatrial até as Fibras de Purkinje.',
        question: 'Qual é a função hemodinâmica essencial do atraso fisiológico da condução elétrica no Nó Atrioventricular (Nó AV) e qual estrutura conduz o impulso mais rapidamente nos ventrículos?',
        options: [
          'Permitir que os ventrículos se contraiam antes dos átrios; o próprio Nó Sinoatrial.',
          'Permitir que os átrios completem sua contração e esvaziem seu conteúdo nos ventrículos antes do início da sístole ventricular; as Fibras de Purkinje (ricas em junções comunicantes).',
          'Bloquear totalmente a passagem de estímulos em repouso; as valvas mitral e tricúspide.',
          'Fechar as valvas semilunares durante a sístole; o feixe interatrial de Bachmann.'
        ],
        correctIndex: 1,
        explanation: 'O atraso nodal de ~0,09-0,12s no Nó AV (devido ao menor número de junções comunicantes/gap junctions) garante que a sístole atrial ocorra antes da sístole ventricular, otimizando o enchimento ventricular final. Já as Fibras de Purkinje possuem a maior velocidade de condução do coração (até 4 m/s) para sincronizar a contração de todo o miocárdio ventricular.'
      }
    ]
  },
  {
    id: 'fisio-troca-gasosa-E-mecanica',
    category: 'Fisiologia Médica (10 Questões)',
    keywords: ['troca gasosa', 'hematose', 'alvéolos', 'lei de fick', 'inspiração', 'expiração', 'pressão intrapleural', 'diafragma', 'surfactante', 'lei de boyle'],
    title: 'Fisiologia 02 & 07 — Mecânica Ventilatória (Pressões) e Troca Gasosa Alveolar (Hematose)',
    specialty: 'Fisiologia Respiratória (Guyton & Hall)',
    evidenceConfidence: {
      level: 'Consenso Fisiológico Consolidado (Guyton & Hall, Cap. 38 e 40)',
      summary: 'Integra as Questões 2 e 7 de Fisiologia: mecânica de pressões na inspiração/expiração (Lei de Boyle) e determinantes da difusão alveolocapilar de O₂ e CO₂ (Lei de Fick).',
      limitations: 'Em patologias pulmonares, o desequilíbrio ventilação/perfusão (V/Q) é a causa mais frequente de hipoxemia clínica.'
    },
    apgGuide: {
      anatomia: 'A zona respiratória pulmonar compreende os bronquíolos respiratórios, ductos alveolares e ~300 milhões de Alvéolos, envoltos por uma densa rede capilar pulmonar. Os pulmões são revestidos pela pleura visceral e a parede torácica pela pleura parietal, separadas pelo espaço pleural virtual.',
      histologia: 'Membrana Respiratória (Barreira Alveolocapilar, espessura média de apenas 0,2 a 0,6 µm): 1) Camada de líquido e Surfactante pulmonar (produzido pelos Pneumócitos Tipo II — dipalmitoilfosfatidilcolina — que reduz a tensão superficial e impede o colabamento alveolar pela Lei de Laplace); 2) Epitélio alveolar (Pneumócitos Tipo I pavimentoso simples, 95% da superfície); 3) Membrana basal epitelial fundida à membrana basal capilar; 4) Endotélio capilar pulmonar.',
      fisiologia: '• Mecânica Ventilatória (Questão 7 — Lei de Boyle: P × V = constante): No repouso pré-inspiratório, a pressão alveolar é igual à atmosférica (0 cmH₂O) e a pressão intrapleural é negativa (-5 cmH₂O, mantendo os pulmões expandidos). 1) Inspiração: contração do Diafragma (desce) e intercostais externos (elevam costelas) -> aumenta o volume da caixa torácica -> pressão intrapleural cai para -7,5 cmH₂O -> alvéolos expandem -> pressão alveolar cai para -1 cmH₂O (subatmosférica) -> o ar entra nos pulmões. 2) Expiração tranquila (processo passivo): relaxamento do diafragma + retração elástica pulmonar -> volume alveolar diminui -> pressão alveolar sobe para +1 cmH₂O -> o ar sai. • Troca Gasosa / Hematose (Questão 2 — Lei de Difusão de Fick): Taxa de Difusão = (Área × ΔPressão Parcial × Solubilidade) / (Espessura da membrana × √Peso Molecular). No sangue venoso que chega ao capilar pulmonar, a PO₂ é de 40 mmHg e no alvéolo a PO₂ é de 104 mmHg (gradiente de 64 mmHg promove rápida difusão de O₂ para o sangue e ligação à hemoglobina). Já o CO₂ tem gradiente menor (PCO₂ venosa = 45 mmHg vs PCO₂ alveolar = 40 mmHg = gradiente de apenas 5 mmHg), mas difunde 20 vezes mais rápido que o O₂ por ser muito mais solúvel nos lipídios/água da membrana!',
      diagnostico: 'Fatores que reduzem a eficiência da hematose (Lei de Fick): 1) Aumento da espessura da membrana (ex: edema agudo de pulmão, fibrose pulmonar); 2) Redução da área de superfície alveolar (ex: enfisema pulmonar no DPOC); 3) Queda da pressão parcial de O₂ inspirado (ex: grandes altitudes) ou desequilíbrio Ventilação/Perfusão (V/Q).',
      tratamento: 'Aplicação Clínica: Se entrar ar no espaço pleural (Pneumotórax), a pressão intrapleural negativa é perdida (iguala-se à atmosférica) e o pulmão colaba pela sua própria retração elástica.'
    },
    socraticQuestion: 'Sabendo que a diferença de pressão parcial do CO₂ entre o sangue venoso (45 mmHg) e o alvéolo (40 mmHg) é de apenas 5 mmHg — muito menor que o gradiente de 64 mmHg do O₂ —, por que o CO₂ consegue atravessar a membrana alveolocapilar com tanta facilidade?',
    references: [
      { title: 'Tratado de Fisiologia Médica, 14ª Edição — Cap. 38 (Ventilação Pulmonar) e Cap. 40 (Difusão de O2 e CO2)', source: 'Guyton & Hall (Elsevier)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-fisio-resp-1',
        topic: 'Fisiologia Respiratória',
        subtopic: 'Mecânica Ventilatória e Troca Gasosa Alveolar (Lei de Fick)',
        vignette: 'Um estudante relaciona os fenômenos mecânicos da inspiração com os fatores físicos que determinam a difusão de O₂ e CO₂ através da membrana alveolocapilar.',
        question: 'Qual combinação descreve corretamente o que ocorre na inspiração fisiológica e como a Lei de Fick explica o prejuízo da hematose no edema pulmonar e no enfisema?',
        options: [
          'Na inspiração, a pressão alveolar torna-se positiva (+5 cmH₂O); o CO₂ difunde mais devagar que o O₂ por ser menos solúvel.',
          'A contração do diafragma torna a pressão intrapleural mais negativa (-7,5 cmH₂O) e a pressão alveolar subatmosférica (-1 cmH₂O), promovendo a entrada de ar; a difusão gasosa é prejudicada pelo aumento da espessura da membrana (edema) ou pela redução da área de troca (enfisema).',
          'A expiração de repouso exige contração vigorosa do diafragma; o surfactante aumenta a tensão superficial alveolar.',
          'A pressão intrapleural normal no repouso é positiva (+10 cmH₂O) para comprimir os alvéolos.'
        ],
        correctIndex: 1,
        explanation: 'Pela Lei de Boyle, a expansão torácica pelo diafragma reduz a pressão intrapleural (de -5 para -7,5 cmH₂O) e torna a pressão alveolar negativa (-1 cmH₂O), aspirando o ar atmosférico. Pela Lei de Fick, a difusão é diretamente proporcional à área de superfície (reduzida no enfisema) e ao gradiente de pressão, e inversamente proporcional à espessura da barreira (aumentada no edema intersticial/alveolar).'
      }
    ]
  },
  {
    id: 'fisio-linfatico-termorregulacao',
    category: 'Fisiologia Médica (10 Questões)',
    keywords: ['sistema linfático', 'linfa', 'intersticial', 'equilíbrio hídrico', 'starling', 'edema', 'ducto torácico', 'pele', 'temperatura', 'termorregulação', 'sudorese', 'hipotálamo'],
    title: 'Fisiologia 03 & 04 — Sistema Linfático (Equilíbrio Hídrico) e Termorregulação Cutânea',
    specialty: 'Fisiologia da Microcirculação e Termorregulação (Guyton & Hall)',
    evidenceConfidence: {
      level: 'Consenso Fisiológico Consolidado (Guyton & Hall, Cap. 16 e 74)',
      summary: 'Integra as Questões 3 e 4 de Fisiologia: retorno linfático do filtrado capilar e controle hipotalâmico da temperatura corporal pela pele.',
      limitations: 'Em ambientes com umidade relativa do ar próxima a 100%, a evaporação do suor perde eficácia térmica.'
    },
    apgGuide: {
      anatomia: '• Sistema Linfático (Questão 3): Inicia-se em capilares linfáticos de fundo cego no interstício de quase todos os tecidos -> vasos coletores com válvulas -> linfonodos -> Troncos Linfáticos -> Ducto Linfático Direito (drena MSD, hemitórax e hemicabeça direitos na junção subclávia-jugular direita) e Ducto Torácico (inicia na cisterna do quilo e drena todo o restante do corpo no ângulo venoso esquerdo). • Pele (Questão 4): Epiderme, Derme (contendo plexos vasculares arteriovenosos e glândulas sudoríparas écrinas inervadas por fibras simpáticas colinérgicas) e Hipoderme.',
      histologia: 'As células endoteliais dos capilares linfáticos sobrepõem-se formando microválvulas unidirecionais ancoradas por filamentos ao tecido conjuntivo: quando o interstício incha, os filamentos puxam as bordas endoteliais abrindo passagem para líquido e macromoléculas.',
      fisiologia: '• Equilíbrio Hídrico e Linfa (Questão 3): Nos capilares sanguíneos (Forças de Starling), cerca de 20 L de plasma são filtrados por dia na extremidade arterial e ~17 L são reabsorvidos na extremidade venosa. Os ~3 Litros/dia excedentes (junto com proteínas plasmáticas extravasadas que não conseguem reentrar no capilar sanguíneo) são drenados pelos capilares linfáticos e devolvidos ao sangue venoso. Sem essa drenagem de proteínas pelo sistema linfático, a pressão coloidosmótica intersticial subiria, gerando edema grave (linfedema). A propulsão da linfa depende da contração intrínseca do músculo liso linfático (bomba linfática), das válvulas unidirecionais e da compressão externa pelos músculos esqueléticos e pulsação arterial. • Regulação da Temperatura pela Pele (Questão 4): O termostato central fica no Hipotálamo Anterior/Área Pré-Óptica. 1) No Calor: o hipotálamo reduz o tônus simpático vasoconstritor cutâneo -> Vasodilatação das anastomoses arteriovenosas da derme (multiplica em até 8x o fluxo sanguíneo na pele, dissipando calor por radiação, condução e convecção) E ativa fibras simpáticas colinérgicas (acetilcolina) nas glândulas sudoríparas écrinas -> Sudorese (a evaporação de 1 g de suor retira 0,58 kcal de calor da superfície corporal). 2) No Frio: o hipotálamo Posterior comanda Vasoconstrição cutânea simpática adrenérgica (conserva calor no núcleo central), piloereção e termogênese por tremores musculares (calafrios).',
      diagnostico: 'Correlação Clínica: Na filariose (Wuchereria bancrofti) ou após esvaziamento axilar cirúrgico, a obstrução linfática acumula proteínas no interstício, causando linfedema duro (não depressível em fases crônicas).',
      tratamento: 'Aplicação Clínica: Na hipertermia/intermação com desidratação grave ou uso de anticolinérgicos, a cessação da sudorese impede a perda evaporativa de calor, exigindo resfriamento físico imediato.'
    },
    socraticQuestion: 'Por que a função mais insubstituível do sistema linfático não é apenas devolver os 3 litros de água ao sangue, mas sim remover continuamente as PROTEÍNAS que escapam dos capilares sanguíneos para o interstício?',
    references: [
      { title: 'Tratado de Fisiologia Médica, 14ª Edição — Cap. 16 (A Microcirculação e o Sistema Linfático) e Cap. 74 (Regulação da Temperatura Corporal)', source: 'Guyton & Hall (Elsevier)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-fisio-linfa-1',
        topic: 'Fisiologia — Sistema Linfático e Termorregulação',
        subtopic: 'Retorno do Líquido Intersticial e Controle Térmico Cutâneo',
        vignette: 'Um estudante integra os mecanismos de manutenção do volume intersticial pelo sistema linfático com a resposta fisiológica da pele durante o exercício físico em ambiente quente.',
        question: 'Qual é o papel essencial do sistema linfático nas forças de Starling e quais mecanismos cutâneos são ativados pelo hipotálamo anterior para dissipar calor?',
        options: [
          'Os linfáticos aumentam a pressão oncótica do interstício; no calor ocorre vasoconstrição cutânea e inibição do suor.',
          'Os linfáticos drenam o excesso de líquido filtrado (~3 L/dia) e removem as proteínas do interstício (mantendo baixa a pressão oncótica intersticial e prevenindo edema); no calor ocorre vasodilatação cutânea e estimulação simpática colinérgica da sudorese evaporativa.',
          'O ducto torácico drena a linfa para a artéria aorta; o suor retém calor na epiderme.',
          'Os capilares linfáticos são impermeáveis a proteínas e lipídios; a temperatura é controlada pelo cerebelo.'
        ],
        correctIndex: 1,
        explanation: 'O sistema linfático retorna ~3 L/dia de filtrado excedente e é a única via pela qual as proteínas extravasadas voltam à circulação, mantendo baixa a pressão coloidosmótica intersticial. Na termorregulação ao calor, o hipotálamo anterior promove vasodilatação cutânea (transferindo calor do centro para a pele) e ativa a sudorese écrina (cuja evaporação resfria o corpo).'
      }
    ]
  },
  {
    id: 'fisio-insulina-glucagon-glicolise',
    category: 'Fisiologia Médica (10 Questões)',
    keywords: ['insulina', 'glucagon', 'glicemia', 'jejum', 'pós-prandial', 'glicólise', 'atp', 'carboidratos', 'glut4', 'glicogenólise', 'gliconeogênese', 'piruvato'],
    title: 'Fisiologia 05 & 10 — Insulina vs Glucagon na Glicemia e Bioenergética (Glicólise e ATP)',
    specialty: 'Fisiologia Endócrina & Bioquímica Médica (Guyton / Lehninger)',
    evidenceConfidence: {
      level: 'Consenso Fisiológico e Bioquímico Consolidado',
      summary: 'Integra as Questões 5 e 10 de Fisiologia: homeostase glicêmica no ciclo jejum-alimentado e extração de energia (ATP) pela glicólise e respiração celular.',
      limitations: 'Tecidos como o encéfalo e as hemácias captam glicose via GLUT1/GLUT3 de forma independente de insulina.'
    },
    apgGuide: {
      anatomia: 'Ilhotas Pancreáticas de Langerhans: Células Beta (~60-70% da ilhota, secretam Insulina) e Células Alfa (~25%, secretam Glucagon), drenando diretamente para a veia porta hepática rumo ao Fígado (órgão tampão da glicemia).',
      fisiologia: '• Regulação Complementar Insulina e Glucagon (Questão 5): 1) Estado Pós-Prandial (Após Refeição — Glicemia sobe > 90-100 mg/dL): A glicose entra na célula Beta via GLUT2 -> sofre glicólise gerando ATP -> o aumento da razão ATP/ADP fecha canais de K+ sensíveis ao ATP -> despolariza a membrana -> abre canais de Ca²⁺ -> exocitose de INSULINA. A insulina (hormônio da abundância/anabólico): a) promove translocação de transportadores GLUT4 para a membrana do músculo esquelético e tecido adiposo (captação rápida de glicose); b) estimula no fígado a Glicólise (ativando glicoquinase e PFK-1) e a Glicogênese (ativando glicogênio sintase); c) inibe a gliconeogênese e a lipólise. 2) Estado de Jejum (Glicemia cai < 80 mg/dL): As células Alfa secretam GLUCAGON (via receptor acoplado à proteína Gs -> eleva AMPc -> ativa PKA no hepatócito). O glucagon (hormônio contrarregulador/catabólico): a) estimula a Glicogenólise hepática (quebra do glicogênio nas primeiras 8-12h de jejum); b) estimula a Gliconeogênese hepática (síntese de glicose a partir de lactato, glicerol e aminoácidos como alanina no jejum prolongado); c) estimula lipólise e cetogênese para poupar glicose para o cérebro.',
      fisiopatologia: '• Obtenção de Energia e Papel da Glicólise (Questão 10): Após entrar no citosol celular e ser fosforilada em Glicose-6-Fosfato (pela hexoquinase ou glicoquinase hepática), a molécula de glicose (6 carbonos) passa pela GLICÓLISE (Via de Embden-Meyerhof, 10 reações no citosol, sem necessidade de O₂): 1) Fase de Investimento: consome 2 ATPs (hexoquinase e fosfofrutoquinase-1 [PFK-1, principal enzima alostérica marca-passo da glicólise]); 2) Fase de Pagamento: gera 4 ATPs (por fosforilação em nível de substrato) + 2 NADH + 2 moléculas de Piruvato (3 carbonos). Saldo líquido da glicólise = 2 ATPs e 2 NADH por glicose! Destino do Piruvato: a) Com O₂ e mitocôndrias (Aeróbio): o piruvato entra na mitocôndria -> Piruvato Desidrogenase gera Acetil-CoA -> Ciclo de Krebs (ácido cítrico) -> Cadeia Transportadora de Elétrons e Fosforilação Oxidativa (rendendo ~30 a 32 ATPs totais por molécula de glicose!); b) Sem O₂ ou nas hemácias (que não têm mitocôndrias — Glicólise Anaeróbia): o piruvato é convertido em Lactato pela Lactato Desidrogenase (LDH) para regenerar o NAD+ e permitir que a glicólise continue gerando 2 ATPs.',
      diagnostico: 'Correlação Clínica: As hemácias dependem 100% da glicólise anaeróbia para produzir ATP e manter a bomba Na+/K+-ATPase funcionando; deficiências enzimáticas na glicólise (ex: deficiência de piruvato quinase) causam anemia hemolítica.',
      tratamento: 'Aplicação Prática: Em uma hipoglicemia grave com paciente inconsciente (incapaz de deglutir), administra-se Glicose hipertônica EV ou Glucagon IM/SC (que mobiliza o glicogênio hepático em minutos).'
    },
    socraticQuestion: 'Por que o músculo esquelético não consegue liberar glicose livre de volta para a corrente sanguínea durante o jejum (mesmo tendo grandes estoques de glicogênio), enquanto o fígado consegue? E por que a glicólise no citosol precisa converter piruvato em lactato quando falta oxigênio?',
    references: [
      { title: 'Tratado de Fisiologia Médica, 14ª Edição — Cap. 68 (Metabolismo dos Carboidratos e Formação de ATP) e Cap. 79 (Insulina, Glucagon e Diabetes)', source: 'Guyton & Hall (Elsevier)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Princípios de Bioquímica de Lehninger, 8ª Edição — Cap. 14: Glicólise, Gliconeogênese e Via das Pentoses-Fosfato', source: 'Nelson, D. L.; Cox, M. M.', year: '2022', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-fisio-metab-1',
        topic: 'Fisiologia Endócrina e Bioenergética',
        subtopic: 'Insulina, Glucagon e Glicólise (Produção de ATP)',
        vignette: 'Um estudante compara o metabolismo dos carboidratos logo após um almoço rico em amido (estado pós-prandial) com o período de jejum noturno de 12 horas, analisando também a via glicolítica citosólica.',
        question: 'Qual afirmação descreve corretamente a ação complementar da insulina e do glucagon e o saldo energético da glicólise?',
        options: [
          'A insulina estimula a glicogenólise no jejum; a glicólise ocorre exclusivamente dentro da matriz mitocondrial produzindo 36 ATPs diretamente.',
          'Após a refeição, a insulina promove a captação de glicose via GLUT4 no músculo/adipócito e ativa a glicogênese e a glicólise; no jejum, o glucagon ativa a glicogenólise e a gliconeogênese hepáticas. A glicólise no citosol converte 1 glicose em 2 piruvatos com saldo líquido direto de 2 ATPs e 2 NADH.',
          'O glucagon promove a translocação de GLUT4 nos neurônios; a enzima glicose-6-fosfatase está presente em alta concentração no músculo esquelético.',
          'As hemácias obtêm ATP exclusivamente pelo ciclo de Krebs mitocondrial e beta-oxidação de ácidos graxos.'
        ],
        correctIndex: 1,
        explanation: 'A insulina reduz a glicemia pós-prandial promovendo a translocação de GLUT4 (músculo/tecido adiposo) e o armazenamento hepático (glicogênese). No jejum, o glucagon mantém a glicemia ativando a glicogenólise e a gliconeogênese no fígado (único órgão com glicose-6-fosfatase significativa junto ao córtex renal). A glicólise citosólica investe 2 ATPs e produz 4 ATPs (saldo líquido de 2 ATPs + 2 NADH + 2 piruvatos).'
      }
    ]
  },
  {
    id: 'fisio-hematologia-imuno',
    category: 'Fisiologia Médica (10 Questões)',
    keywords: ['hemácias', 'eritropoiese', 'eritropoietina', 'epo', 'medula óssea', 'linfócitos b', 'linfócitos t', 'imunidade', 'hemostasia', 'plaquetas', 'coagulação', 'fibrina'],
    title: 'Fisiologia 06, 08 & 09 — Eritropoiese (EPO), Linfócitos B e T e Hemostasia (Plaquetas e Coagulação)',
    specialty: 'Fisiologia Hematológica e Imunológica (Guyton & Hall)',
    evidenceConfidence: {
      level: 'Consenso Fisiológico Consolidado (Guyton & Hall, Cap. 33, 35, 36 e 37)',
      summary: 'Integra as Questões 6, 8 e 9 de Fisiologia: formação das hemácias estimulada pela eritropoietina, resposta imune adaptativa (B vs T) e etapas da hemostasia.',
      limitations: 'O modelo clássico da cascata de coagulação (intrínseca/extrínseca) é útil para interpretar exames laboratoriais (TTPa e TP/INR), enquanto in vivo opera de forma integrada no modelo celular da coagulação.'
    },
    apgGuide: {
      anatomia: 'No adulto, a hematopoiese ocorre na Medula Óssea Vermelha dos ossos axiais (esterno, costelas, vértebras, ossos ilíacos da pelve e epífises proximais do fêmur e úmero). Os órgãos linfoides primários são a Medula Óssea (maturação dos Linfócitos B) e o Timo (maturação dos Linfócitos T).',
      fisiologia: '• 1) Eritropoiese e Papel da Eritropoietina (Questão 6): A partir da célula-tronco hematopoética pluripotente -> progenitor mieloide -> Proeritroblasto -> Eritroblasto basófilo (inicia síntese de hemoglobina) -> policromatofílico -> ortocromático (expulsa o núcleo!) -> Reticulócito (entra no sangue periférico com restos de RNA ribossômico por 1-2 dias) -> Eritrócito maduro (disco bicôncavo anucleado, meia-vida de 120 dias). Regulação pela Eritropoietina (EPO): Cerca de 90% da EPO é produzida pelos fibroblastos intersticiais peritubulares dos RINS (e 10% pelo fígado). Quando há hipóxia tecidual (anemia, altitude, doença cardiopulmonar), o fator HIF-1α acumula-se nas células renais e estimula a transcrição do gene da EPO. A EPO age na medula óssea estimulando a diferenciação de proeritroblastos e acelerando a maturação das hemácias (além de exigir Ferro para o grupamento Heme, e Vitamina B12 + Ácido Fólico para síntese de DNA). • 2) Linfócitos B vs Linfócitos T (Questão 8): Ambos compõem a Imunidade Adaptativa específica e geram memória imunológica: a) Linfócitos B (Imunidade Humoral): reconhecem antígenos nativos solúveis diretamente via receptor BCR -> diferenciam-se em Plasmócitos secretores de Anticorpos (Imunoglobulinas IgM, IgG, IgA, IgE, IgD) que neutralizam toxinas/vírus extracelulares, opsonizam bactérias e ativam o complemento; b) Linfócitos T (Imunidade Celular — só reconhecem peptídeos processados e apresentados via moléculas de MHC!): Linfócitos T CD4+ Auxiliares (Helper — reconhecem antígenos no MHC Classe II de células apresentadoras profissionais [dendríticas, macrófagos, B] e secretam citocinas que orquestram toda a resposta imune, ativando macrófagos [Th1], eosinófilos [Th2] ou neutrófilos [Th17] e ajudando os linfócitos B na troca de classe de anticorpos); Linfócitos T CD8+ Citotóxicos (reconhecem antígenos endógenos no MHC Classe I de qualquer célula nucleada infectada por vírus ou tumoral, induzindo apoptose via perforinas e granzimas).',
      fisiopatologia: '• 3) Hemostasia após Lesão Vascular (Questão 9): Ocorre em 4 etapas coordenadas: a) Vasoconstrição Imediata: espasmo miogênico local + liberação de endotelina pelo endotélio lesado e tromboxano A2 (TXA2) e serotonina pelas plaquetas; b) Hemostasia Primária (Tampão Plaquetário): a lesão expõe o colágeno subendotelial -> o Fator de von Willebrand (FvW) liga-se ao colágeno e ao receptor plaquetário GPIb (Adesão plaquetária) -> as plaquetas mudam de forma, liberam grânulos (ADP e TXA2, que recrutam novas plaquetas — Ativação) e expressam o receptor GPIIb/IIIa, que se liga ao fibrinogênio formando pontes entre as plaquetas (Agregação plaquetária); c) Hemostasia Secundária (Coagulação Sanguínea): ativação sequencial dos fatores de coagulação (zimogênios sintetizados pelo fígado, sendo os fatores II, VII, IX e X dependentes de Vitamina K). A Via Extrínseca (iniciada pela exposição do Fator Tecidual [FT / Fator III] subendotelial que ativa o Fator VII) e a Via Intrínseca (Fatores XII -> XI -> IX + VIII) convergem na Via Comum: ativação do Fator X -> o complexo Protrombinase (Xa + Va + Ca²⁺ + fosfolipídios plaquetários) converte a Protrombina (Fator II) em TROMBINA (Fator IIa) -> a Trombina cliva o Fibrinogênio solúvel (Fator I) em monômeros de FIBRINA e ativa o Fator XIII, que cria ligações cruzadas covalentes formando uma malha insolúvel e estável sobre o tampão plaquetário; d) Fibrinólise: posteriormente, o plasminogênio é ativado pelo t-PA em Plasmina, que dissolve o coágulo (gerando produtos de degradação da fibrina como o Dímero-D) à medida que o vaso cicatriza.',
      diagnostico: 'Correlação Clínica: Na Doença Renal Crônica avançada, a destruição do parênquima renal reduz a síntese de Eritropoietina, causando anemia normocítica e normocrômica hipoproliferativa.',
      tratamento: 'Aplicação Farmacológica: O AAS (Aspirina) inibe irreversivelmente a COX-1 plaquetária (bloqueando a síntese de Tromboxano A2 na hemostasia primária); já a Varfarina (inibe epóxido-redutase da Vitamina K) e a Rivaroxabana (inibe Fator Xa) atuam na hemostasia secundária.'
    },
    socraticQuestion: 'Qual é a diferença clínica entre um defeito na Hemostasia Primária (plaquetas/Fator de von Willebrand) e um defeito na Hemostasia Secundária (fatores de coagulação, como na Hemofilia)? E por que um paciente com insuficiência renal crônica desenvolve anemia mesmo tendo estoques normais de ferro e vitamina B12?',
    references: [
      { title: 'Tratado de Fisiologia Médica, 14ª Edição — Cap. 33 (Hemácias e Eritropoiese), Cap. 36 (Imunidade Adquirida) e Cap. 37 (Hemostasia e Coagulação)', source: 'Guyton & Hall (Elsevier)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-fisio-hemo-1',
        topic: 'Fisiologia Hematológica e Imunológica',
        subtopic: 'Eritropoiese, Imunidade Adaptativa e Hemostasia',
        vignette: 'Durante uma revisão integrada de Fisiologia Médica, o grupo discute a regulação da formação de hemácias, a diferença entre imunidade humoral e celular e a formação do coágulo estável após uma lesão vascular.',
        question: 'Assinale a alternativa que relaciona corretamente os três processos fisiológicos:',
        options: [
          'A eritropoietina é produzida pelo baço em resposta à hiperóxia; os linfócitos B destroem células infectadas via perforinas; a plasmina converte fibrinogênio em fibrina.',
          'A hipóxia tecidual estimula os rins a secretarem Eritropoietina (EPO), que induz a diferenciação de proeritroblastos na medula óssea; os linfócitos B diferenciam-se em plasmócitos secretores de anticorpos (imunidade humoral) enquanto os linfócitos T CD8+ exercem citotoxicidade celular via MHC-I; na hemostasia, as plaquetas formam o tampão primário (via FvW, ADP, TXA2 e GPIIb/IIIa) e a cascata de coagulação gera Trombina para converter fibrinogênio em rede estável de fibrina.',
          'As plaquetas sintetizam os fatores de coagulação II, VII, IX e X; os linfócitos T produzem imunoglobulina E.',
          'O reticulócito é uma célula nucleada que permanece 120 dias na medula óssea antes de entrar no sangue.'
        ],
        correctIndex: 1,
        explanation: 'Os rins produzem ~90% da EPO em resposta à hipóxia (via HIF-1α), estimulando a eritropoiese medular. Na imunidade adaptativa, os linfócitos B medeiam a resposta humoral (anticorpos) e os linfócitos T medeiam a resposta celular (CD4+ auxiliares via MHC-II e CD8+ citotóxicos via MHC-I). Na hemostasia, o tampão plaquetário primário é estabilizado pela malha de fibrina formada pela ação da trombina na hemostasia secundária.'
      }
    ]
  },

  // ==========================================================================
  // TRILHA 4: FISIOPATOLOGIA E CLÍNICA — AS 10 QUESTÕES DO GRUPO
  // ==========================================================================
  {
    id: 'fisiopato-drge-hpylori',
    category: 'Fisiopatologia & Clínica (10 Questões)',
    keywords: ['esfíncter esofágico inferior', 'eei', 'drge', 'refluxo', 'helicobacter pylori', 'h. pylori', 'câncer gástrico', 'adenocarcinoma', 'pelayo correa', 'caga', 'vaca', 'urease'],
    title: 'Fisiopatologia 01 & 02 — Disfunção do EEI na DRGE e H. pylori no Câncer Gástrico',
    specialty: 'Gastroenterologia & Patologia (Robbins / FBG / ACG)',
    evidenceConfidence: {
      level: 'Alta Evidência Científica (IARC Classe I / Diretriz FBG e ACG)',
      summary: 'Integra as Questões 1 e 2 de Fisiopatologia: mecanismos da incompetência da barreira antirrefluxo na DRGE e carcinogênese gástrica induzida pelo Helicobacter pylori (Cascata de Pelayo Correa).',
      limitations: 'Embora ~50% da população mundial seja colonizada por H. pylori, apenas 1-3% desenvolvem adenocarcinoma gástrico, dependendo da virulência da cepa (CagA+/VacA+), genética do hospedeiro e fatores dietéticos (nitrosaminas, sal, tabagismo).'
    },
    apgGuide: {
      anatomia: '1) Barreira Antirrefluxo (JEG): composta pelo Esfíncter Esofágico Inferior (EEI — músculo liso circular intrínseco de 3-4 cm com pressão de repouso de 10-30 mmHg) sobreposto ao pilar direito do diafragma crural (esfíncter extrínseco), ligamento frenoesofágico e ângulo agudo de His. 2) Estômago: antro pilórico (rico em células G produtoras de gastrina) e corpo/fundo (glândulas oxínticas com células parietais produtoras de HCl e fator intrínseco, e células principais produtoras de pepsinogênio).',
      histologia: 'No esôfago, a agressão ácida/biliar crônica substitui o epitélio estratificado pavimentoso não queratinizado por epitélio colunar com metaplasia intestinal e células caliciformes (Esôfago de Barrett). No estômago, o H. pylori é um bacilo Gram-negativo espiralado flagelado que coloniza a camada de muco sobre o epitélio foveolar.',
      fisiopatologia: '• Questão 1 — Como a disfunção do EEI causa DRGE: A competência antirrefluxo falha por três mecanismos principais: a) Relaxamentos Transitórios do EEI (RTEEI — mecanismo mais frequente!): quedas abruptas da pressão do EEI independentes da deglutição, durando > 10 segundos, desencadeadas por distensão pós-prandial do fundo gástrico via reflexo vagovagal mediado por óxido nítrico (NO) e VIP; b) Hipotonia basal verdadeira do EEI (< 10 mmHg), agravada por alimentos gordurosos, chocolate, cafeína, álcool, tabagismo, progesterona (gestação) e bloqueadores de canais de cálcio; c) Desarranjo anatômico da JEG (Hérnia de Hiato por deslizamento), que separa o EEI do pinçamento diafragmático crural, aliado ao aumento da pressão intra-abdominal (obesidade central). O refluxo de HCl, pepsina e sais biliares supera o clearance esofágico (peristalse e bicarbonato salivar), lesando as junções intercelulares da mucosa esofágica. • Questão 2 — Como o H. pylori aumenta o risco de Câncer Gástrico: O H. pylori sobrevive ao ácido graças à enzima UREASE (hidrolisa ureia em amônia [NH₃] e CO₂, alcalinizando o microambiente), usa flagelos para penetrar no muco e adesinas (BabA) para aderir ao epitélio. Cepas virulentas injetam a oncoproteína CagA no citoplasma epitelial (via sistema de secreção tipo IV, ativando vias proliferativas SHP-2/MAPK e desfazendo junções apicais) e secretam a citotoxina vacuolizante VacA. A inflamação crônica (IL-1β, TNF-α, IL-8 e espécies reativas de oxigênio/nitrogênio dos neutrófilos) conduz à CASCATA DE PELAYO CORREA: Mucosa Normal -> Gastrite Crônica Não Atrófica -> Gastrite Crônica Atrófica Multifocal (perda das glândulas parietais e hipocloridria) -> Metaplasia Intestinal (completa e incompleta) -> Displasia (baixo e alto grau) -> Adenocarcinoma Gástrico (tipo intestinal de Lauren). Além disso, a estimulação antigênica crônica dos linfócitos B pode originar o Linfoma MALT gástrico.',
      diagnostico: 'DRGE: clínico em sintomas típicos sem alarme; EDA imediata se disfagia, odinofagia, perda ponderal, anemia/sangramento ou início > 40-45 anos. H. pylori: EDA com teste da urease rápida e histopatologia (ou teste respiratório com ureia marcada C¹³ / antígeno fecal para controle de cura 4 semanas após término do antibiótico e 2 semanas sem IBP).',
      tratamento: 'DRGE: medidas posturais/perda de peso + IBP (Omeprazol/Pantoprazol 30 min antes do desjejum). Erradicação do H. pylori (IV Consenso Brasileiro): IBP em dose plena 12/12h + Amoxicilina 1g 12/12h + Claritromicina 500mg 12/12h por 14 dias (reduz significativamente o risco de progressão para câncer gástrico quando realizada antes da instalação de displasia).'
    },
    socraticQuestion: 'Explique a diferença entre uma úlcera duodenal e o risco de câncer gástrico causados pelo mesmo H. pylori: por que a pangastrite atrófica do corpo gástrico (que REDUZ a produção de ácido/hipocloridria) é justamente o padrão que mais predispõe ao adenocarcinoma gástrico na Cascata de Pelayo Correa?',
    references: [
      { title: 'Robbins & Cotran — Patologia: Bases Patológicas das Doenças, 10ª Edição — Cap. 17: Trato Gastrointestinal', source: 'Kumar, V.; Abbas, A. K.; Aster, J. C. (Elsevier)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'IV Consenso Brasileiro sobre Infecção pelo Helicobacter pylori', source: 'Federação Brasileira de Gastroenterologia — Arq Gastroenterol', year: '2018', evidenceLevel: 'Diretriz Nacional Oficial', pmid: '29995100', url: 'https://pubmed.ncbi.nlm.nih.gov/29995100/' },
      { title: 'ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease', source: 'Am J Gastroenterol / PubMed', year: '2022', evidenceLevel: 'Diretriz Clínica (Nível IA)', pmid: '34807007', url: 'https://pubmed.ncbi.nlm.nih.gov/34807007/' }
    ],
    questions: [
      {
        id: 'q-fisiopato-gastro-1',
        topic: 'Fisiopatologia Gastrointestinal',
        subtopic: 'Disfunção do EEI na DRGE e Carcinogênese por H. pylori',
        vignette: 'Um grupo de estudo revisa os mecanismos fisiopatológicos da Doença do Refluxo Gastroesofágico (DRGE) e a evolução histopatológica da infecção crônica pelo Helicobacter pylori até o adenocarcinoma gástrico.',
        question: 'Quais são, respectivamente, o principal mecanismo funcional de incompetência do EEI na DRGE e a sequência histopatológica clássica de Pelayo Correa induzida pelo H. pylori?',
        options: [
          'Hipertonia permanente do EEI; esofagite eosinofílica -> pólipo hiperplásico -> sarcoma gástrico.',
          'Relaxamentos Transitórios do Esfíncter Esofágico Inferior (RTEEI, desencadeados por distensão gástrica via reflexo vagovagal); Gastrite crônica ativa -> Gastrite atrófica multifocal -> Metaplasia intestinal -> Displasia -> Adenocarcinoma gástrico.',
          'Contração espástica do pilar diafragmático; produção de ácido clorídrico pela bactéria através da enzima catalase.',
          'Ausência congênita do plexo de Meissner; conversão direta de células principais em linfoma de Hodgkin.'
        ],
        correctIndex: 1,
        explanation: 'Na DRGE, os Relaxamentos Transitórios do EEI (RTEEI) — independentes da deglutição e mediados por reflexo vagovagal após distensão fúndica — são o mecanismo predominante. Na infecção por H. pylori (especialmente cepas CagA+/VacA+), a inflamação crônica leva à cascata de Pelayo Correa: gastrite crônica -> atrofia glandular -> metaplasia intestinal -> displasia -> adenocarcinoma.'
      }
    ]
  },
  {
    id: 'fisiopato-alergia-crohn-rcu',
    category: 'Fisiopatologia & Clínica (10 Questões)',
    keywords: ['alergia alimentar', 'ige', 'intolerância alimentar', 'lactose', 'mastócito', 'anafilaxia', 'doença de crohn', 'retocolite ulcerativa', 'rcu', 'doença inflamatória intestinal', 'granuloma', 'transmural'],
    title: 'Fisiopatologia 03 & 04 — Alergia IgE vs Intolerância Alimentar e Doença de Crohn vs Retocolite Ulcerativa',
    specialty: 'Imunologia Clínica & Gastroenterologia (Robbins / Harrison)',
    evidenceConfidence: {
      level: 'Alta Evidência Científica (Consenso ASBAI / ECCO / GEDIIB)',
      summary: 'Integra as Questões 3 e 4: distinção imunológica vs enzimática nas reações adversas a alimentos e diagnóstico diferencial clínico-patológico entre Doença de Crohn e Retocolite Ulcerativa.',
      limitations: 'Em cerca de 5% a 10% dos casos de colite inflamatória restrita ao cólon, a distinção inicial entre Crohn e RCU pode ser inconclusiva (colite indeterminada / não classificada).'
    },
    apgGuide: {
      anatomia: 'Na Doença de Crohn (DC), qualquer segmento do tubo digestivo (da boca ao ânus) pode ser acometido, sendo o local mais comum o íleo terminal e cólon direito (ileocolite), frequentemente poupando o reto. Na Retocolite Ulcerativa (RCU), o acometimento é EXCLUSIVO do cólon e reto, iniciando-se invariavelmente no reto (proctite) e estendendo-se de forma contínua e retrógrada.',
      histologia: '• Doença de Crohn: Inflamação TRANSMURAL (acomete da mucosa até a serosa, gerando úlceras aftoides/fissuras profundas, aspecto em "pedras de calçamento" [cobblestone], gordura mesentérica rastejante [creeping fat] e estenoses/fístulas) e presença de GRANULOMAS NÃO CASEOSOS em ~35-50% dos casos. • Retocolite Ulcerativa: Inflamação superficial restrita à MUCOSA e SUBMUCOSA superficial, contínua, friável, com pseudopólipos inflamatórios, ABSCESSOS DE CRIPTA neutrofílicos e depleção de células caliciformes, sem granulomas.',
      fisiopatologia: '• Questão 3 — Alergia Alimentar Mediada por IgE vs Intolerância Alimentar: 1) Alergia Alimentar Mediada por IgE (Reação de Hipersensibilidade Tipo I — Imunológica!): Na sensibilização prévia a uma proteína alimentar (ex: leite de vaca [caseína/β-lactoglobulina], amendoim, ovo, crustáceos), linfócitos Th2 secretam IL-4 e IL-13, induzindo linfócitos B a produzirem anticorpos IgE específicos, que se fixam aos receptores de alta afinidade (FcεRI) na superfície de Mastócitos e Basófilos. Na reexposição, mesmo quantidades mínimas (traços/microgramas) do alérgeno fazem ligação cruzada (cross-linking) nas moléculas de IgE, provocando degranulação explosiva em minutos (até 2h) de Histamina, Triptase, Leucotrienos e Prostaglandinas -> vasodilatação, extravasamento capilar e broncoespasmo -> Urticária, angioedema, vômitos, sibilância e risco de choque ANAFILÁTICO fatal! 2) Intolerância Alimentar (Reação Não-Imunológica!): Decorre de deficiência enzimática (ex: deficiência de lactase na borda em escova dos enterócitos), efeito farmacológico (cafeína, tiramina) ou osmótico. Na intolerância à lactose, o dissacarídeo não digerido permanece na luz intestinal exercendo efeito osmótico (atrai água -> diarreia osmótica) e é fermentado pelas bactérias colônicas produzindo gases (H₂, CO₂, metano -> distensão abdominal, flatulência e cólicas). É dose-dependente (pequenas quantidades costumam ser toleradas) e NUNCA causa anafilaxia ou urticária.',
      diagnostico: '• Questão 4 — Diferenciação Clínica entre Doença de Crohn e Retocolite Ulcerativa: 1) Padrão da Diarreia e Sangramento: Na RCU, o sintoma cardinal é a diarreia mucossanguinolenta frequente (hematoquezia/enterorragia franca), associada a tenesmo e urgência evacuatória (pela proctite constante). Na Doença de Crohn, predomina dor abdominal no quadrante inferior direito (simulando apendicite), diarreia crônica frequentemente sem sangue vivo visível (exceto na colite de Crohn), febre, perda ponderal importante e déficit de crescimento/má absorção (inclusive de vitamina B12 e sais biliares pelo acometimento ileal). 2) Complicações Penetrantes e Perianais: Fístulas (enteroentéricas, enterovesicais, enterocutâneas), estenoses fibróticas obstrutivas e doença perianal grave (fístulas e abscessos perianais) são marcas registradas da Doença de Crohn (pela natureza transmural) e estão ausentes na RCU. 3) Padrão Endoscópico: Lesões salteadas ("skip lesions", áreas doentes intercaladas com mucosa normal) na Doença de Crohn vs lesão contínua a partir do reto na RCU.',
      tratamento: 'Alergia IgE: exclusão estrita da proteína + Adrenalina intramuscular (face anterolateral da coxa) na anafilaxia. Intolerância à lactose: reposição de enzima lactase oral ou derivados sem lactose. DII: aminossalicilatos (Mesalazina, especialmente na RCU), corticoides nas crises agudas, imunomoduladores (Azatioprina) e terapia biológica (Anti-TNF como Infliximabe/Adalimumabe, Anti-integrina Vedolizumabe, Anti-IL12/23 Ustequinumabe).'
    },
    socraticQuestion: 'Um paciente diz no consultório: "Doutor, tenho alergia a leite porque quando tomo dois copos de leite sinto barriga estufada e gases, mas consigo comer um pedaço de queijo sem sentir nada e nunca tive placas na pele ou falta de ar". Como você explica a ele, com base nos mecanismos fisiopatológicos, por que o quadro dele é uma Intolerância à Lactose e não uma Alergia à Proteína do Leite de Vaca (APLV) mediada por IgE?',
    references: [
      { title: 'Robbins & Cotran — Patologia: Bases Patológicas das Doenças, 10ª Edição — Doença Inflamatória Intestinal e Hipersensibilidade Tipo I', source: 'Kumar, V.; Abbas, A. K. (Elsevier)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Consenso Brasileiro sobre Alergia Alimentar: Etiopatogenia, Clínica e Diagnóstico', source: 'ASBAI / Sociedade Brasileira de Pediatria (SBP)', year: '2018', evidenceLevel: 'Diretriz Oficial Nacional', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-fisiopato-dii-1',
        topic: 'Fisiopatologia Clínica',
        subtopic: 'Doença de Crohn vs Retocolite Ulcerativa e Alergia IgE vs Intolerância',
        vignette: 'Um estudante compara dois pacientes: o Paciente 1 apresenta diarreia crônica, dor em fossa ilíaca direita, perda de peso, fístula perianal e colonoscopia mostrando úlceras profundas intercaladas com mucosa normal ("lesões salteadas") no íleo terminal e cólon ascendente, com reto poupado. O Paciente 2 apresenta diarreia mucossanguinolenta diária com tenesmo e colonoscopia mostrando inflamação contínua restrita à mucosa desde o reto até o cólon sigmoide.',
        question: 'Quais são, respectivamente, os diagnósticos do Paciente 1 e do Paciente 2, e qual característica histopatológica explica a formação de fístulas no Paciente 1?',
        options: [
          'Paciente 1: Retocolite Ulcerativa; Paciente 2: Doença de Crohn; inflamação restrita ao epitélio superficial.',
          'Paciente 1: Doença de Crohn; Paciente 2: Retocolite Ulcerativa; inflamação transmural (acometendo todas as camadas da parede intestinal) com granulomas não caseosos na Doença de Crohn.',
          'Paciente 1: Intolerância à lactose; Paciente 2: Alergia mediada por IgE; degranulação de mastócitos por deficiência de lactase.',
          'Ambos apresentam síndrome do intestino irritável sem substrato inflamatório.'
        ],
        correctIndex: 1,
        explanation: 'A Doença de Crohn (Paciente 1) pode acometer da boca ao ânus com predileção ileocecal, apresenta lesões salteadas (skip lesions), frequentemente poupa o reto e caracteriza-se por inflamação transmural e granulomas não caseosos, o que explica a formação de estenoses e fístulas (inclusive perianais). A Retocolite Ulcerativa (Paciente 2) é restrita ao cólon/reto, contínua a partir do reto e limitada à mucosa/submucosa, cursando classicamente com hematoquezia e tenesmo.'
      }
    ]
  },
  {
    id: 'fisiopato-giardia-diarreia-obstrucao',
    category: 'Fisiopatologia & Clínica (10 Questões)',
    keywords: ['giardia', 'giardíase', 'trofozoíto', 'cisto', 'diarreia', 'osmótica', 'secretora', 'inflamatória', 'esteatorreia', 'obstrução intestinal', 'abdome agudo', 'vômitos', 'parada de eliminação'],
    title: 'Fisiopatologia 05, 06 & 07 — Giardíase, Mecanismos da Diarreia e Sinais de Obstrução Intestinal',
    specialty: 'Gastroenterologia, Infectologia & Cirurgia (Robbins / Harrison / Sabiston)',
    evidenceConfidence: {
      level: 'Alta Evidência Científica (Harrison / Robbins / Sabiston)',
      summary: 'Integra as Questões 5, 6 e 7: transmissão e patogênese da Giardia duodenalis, os 4 mecanismos fisiopatológicos da diarreia e o quadro clínico do abdome agudo obstrutivo.',
      limitations: 'Em diarreias infecciosas e inflamatórias clínicas, frequentemente coexistem mais de um mecanismo fisiopatológico (ex: componente secretor + osmótico).'
    },
    apgGuide: {
      anatomia: 'O intestino delgado (duodeno, jejuno e íleo) é o principal sítio de digestão e absorção de nutrientes e água (~7-8 L/dia), graças às pregas circulares de Kerckring, vilosidades intestinais e microvilosidades apicais dos enterócitos ("borda em escova").',
      fisiologia: 'A absorção intestinal de água é passiva e segue o transporte ativo de solutos (especialmente o cotransporte Na+/Glicose [SGLT1], que é a base fisiológica do Soro de Reidratação Oral da OMS!). Já a secreção intestinal ocorre nas criptas de Lieberkühn via abertura de canais de cloreto (CFTR) estimulada por AMPc, GMPc ou Ca²⁺.',
      fisiopatologia: '• Questão 5 — Transmissão e Mecanismos da Giardíase (Giardia duodenalis / G. lamblia / G. intestinalis): 1) Transmissão: Via fecal-oral pela ingestão de CISTOS tetranucleados infectantes presentes em água não tratada/contaminada (cistos resistem à cloração habitual da água!), alimentos crus ou contato pessoa a pessoa (creches). Basta ingerir 10 a 25 cistos para causar infecção. 2) Mecanismo Patogênico: O ácido gástrico desencadeia o desencistamento no duodeno, liberando os TROFOZOÍTOS flagelados binucleados. Os trofozoítos NÃO invadem a mucosa nem a corrente sanguínea; eles aderem firmemente à borda em escova do duodeno e jejuno proximal através do seu Disco Ventral Suctorial (disco adesivo) e lectinas. Essa adesão provoca: a) Atrofia e encurtamento difuso das microvilosidades e vilosidades (reduzindo drasticamente a área absortiva); b) Perda das dissacaridases da borda em escova (causando intolerância secundária à lactose); c) Aumento da permeabilidade epitelial (disfunção de tight junctions / ZO-1) e apoptose de enterócitos; d) Barreira mecânica e desconjugação de sais biliares -> resultando em Diarreia disabsortiva/osmótica e ESTEATORREIA (fezes volumosas, fétidas, gordurosas que boiam, sem sangue ou leucócitos!). • Questão 6 — Os 4 Principais Mecanismos Fisiopatológicos da Diarreia: 1) Diarreia Osmótica: presença de solutos osmoticamente ativos e pouco absorvíveis na luz intestinal que retêm água (ex: deficiência de lactase, uso de laxantes osmóticos como lactulose/manitol, má absorção). Característica chave: CESSA COM O JEJUM e possui Gap Osmótico Fecal elevado (> 100 mOsm/kg). 2) Diarreia Secretora: ativação de vias intracelulares (AMPc, GMPc, Ca²⁺) nos enterócitos das criptas que abrem canais de Cl- (CFTR) e inibem a absorção de Na+, gerando secreção maciça isotônica de água e eletrólitos (ex: toxina da Cólera [Vibrio cholerae], E. coli enterotoxigênica, tumores neuroendócrinos como VIPoma). Característica chave: grande volume aquoso que NÃO CESSA COM O JEJUM e tem Gap Osmótico Fecal baixo (< 50 mOsm/kg). 3) Diarreia Inflamatória / Exsudativa: lesão e ulceração do epitélio intestinal por invasão microbiana ou autoimunidade, com exsudação de muco, proteínas, sangue e pus para o lúmen (ex: Shigella, Salmonella, Entamoeba histolytica, Campylobacter, Doença de Crohn, RCU). Característica chave: disenteria (fezes de pequeno volume com sangue, muco e leucócitos fecais positivos + febre/tenesmo). 4) Diarreia por Dismotilidade: aceleração do trânsito intestinal reduzindo o tempo de contato do quimo com a mucosa absortiva (ex: hipertireoidismo, síndrome do intestino irritável forma diarreica) ou estase com supercrescimento bacteriano.',
      diagnostico: '• Questão 7 — Principais Sinais Clínicos de Obstrução Intestinal (Abdome Agudo Obstrutivo — Sabiston): A Tétrade Clássica da Obstrução Intestinal Mecânica compreende: 1) Dor abdominal em cólica (periumbilical na obstrução alta/delgado; hipogástrica na baixa/cólon); 2) Parada de eliminação de gases e fezes (obstipação absoluta — sinal mais específico de obstrução completa); 3) Vômitos (precoces e biliosos na obstrução intestinal alta; tardios e fecaloides na obstrução baixa); 4) Distensão abdominal (mais pronunciada quanto mais distal for a obstrução, com timpanismo à percussão). À ausculta abdominal: inicialmente ruídos hidroaéreos hiperativos de luta com timbre metálico ("borborigmos"), que evoluem para silêncio abdominal se houver isquemia/gangrena (estrangulamento). Sinais de Alarme para Estrangulamento/Isquemia (emergência cirúrgica imediata!): dor que passa de cólica intermitente para dor contínua e intensa, febre, taquicardia, irritação peritoneal (defesa/Blumberg+) e acidose metabólica com hiperlactatemia.',
      tratamento: 'Giardíase: Metronidazol (250mg 8/8h por 5-7 dias), Tinidazol ou Secnidazol (dose única) ou Nitazoxanida + higiene hídrica. Obstrução Intestinal: "Nada pela boca" (jejum), hidratação venosa + correção hidroeletrolítica, sonda nasogástrica (SNG) aberta para descompressão gástrica e avaliação cirúrgica (laparotomia imediata se obstrução total, hérnia estrangulada, volvo ou sofrimento vascular).'
    },
    socraticQuestion: 'Como você diferencia clinicamente, com uma única pergunta simples na anamnese ("A diarreia melhora quando você fica em jejum?"), uma Diarreia Osmótica (como na intolerância à lactose) de uma Diarreia Secretora (como na cólera)? E por que a Giardia causa fezes gordurosas (esteatorreia) mas NUNCA causa sangue vivo nas fezes?',
    references: [
      { title: 'Medicina Interna de Harrison, 21ª Edição — Cap. Diarreia e Constipação / Giardíase', source: 'Loscalzo, J. et al. (McGraw-Hill)', year: '2022', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Sabiston — Tratado de Cirurgia, 21ª Edição — Obstrução Intestinal e Abdome Agudo', source: 'Townsend, C. M. (Elsevier)', year: '2022', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-fisiopato-diarreia-1',
        topic: 'Fisiopatologia Gastrointestinal e Cirúrgica',
        subtopic: 'Giardíase, Mecanismos da Diarreia e Obstrução Intestinal',
        vignette: 'Três casos são discutidos na sessão clínica: Caso A — criança com diarreia crônica fétida, esteatorreia e perda de peso após beber água de poço, sem febre ou sangue nas fezes; Caso B — paciente com diarreia aquosa profusa que persiste inalterada mesmo após 24 horas de jejum absoluto; Caso C — idoso com cirurgia abdominal prévia (aderências/bridas) que desenvolve dor abdominal em cólica, vômitos biliosos, distensão abdominal e parada total de eliminação de gases e fezes.',
        question: 'Quais são os mecanismos fisiopatológicos e diagnósticos corretos para os Casos A, B e C, respectivamente?',
        options: [
          'Caso A: Invasão sanguínea por cistos de Giardia; Caso B: Diarreia osmótica; Caso C: Diarreia por dismotilidade.',
          'Caso A: Giardíase (ingestão de cistos -> adesão de trofozoítos no duodeno/jejuno causando atrofia de microvilosidades e má absorção); Caso B: Diarreia Secretora (ativação de canais de Cl- CFTR nas criptas, que não cessa com o jejum); Caso C: Obstrução Intestinal Mecânica (tétrade clássica com ruídos metálicos de luta).',
          'Caso A: Disenteria bacteriana inflamatória; Caso B: Deficiência de lactase; Caso C: Gastrite atrófica.',
          'Todos os três casos são explicados por hipersensibilidade alimentar mediada por IgE.'
        ],
        correctIndex: 1,
        explanation: 'A Giardia duodenalis é transmitida por cistos na água/alimentos e seus trofozoítos aderem ao duodeno/jejuno atrofiando as microvilosidades e causando diarreia disabsortiva/esteatorreia sem invasão mucosa. A diarreia que não cessa com o jejum é classicamente Secretora. E a tétrade de dor em cólica, vômitos, distensão e parada de eliminação de gases/fezes define a Obstrução Intestinal.'
      }
    ]
  },
  {
    id: 'fisiopato-cirrose-nefritica-mama',
    category: 'Fisiopatologia & Clínica (10 Questões)',
    keywords: ['cirrose', 'hipertensão portal', 'células estreladas', 'ito', 'ascite', 'varizes esofágicas', 'síndrome nefrítica', 'síndrome nefrótica', 'proteinúria', 'hematúria', 'câncer de mama', 'receptores hormonais', 'her2', 'tamoxifeno'],
    title: 'Fisiopatologia 08, 09 & 10 — Cirrose e Hipertensão Portal, Nefrítica vs Nefrótica e Câncer de Mama',
    specialty: 'Hepatologia, Nefrologia & Oncologia (Robbins / Harrison)',
    evidenceConfidence: {
      level: 'Alta Evidência Científica (Robbins & Cotran / Harrison / Diretrizes SBOC)',
      summary: 'Integra as Questões 8, 9 e 10 de Fisiopatologia: hemodinâmica da hipertensão portal na cirrose, fisiopatologia glomerular (nefrítica vs nefrótica) e subtipos moleculares do câncer de mama.',
      limitations: 'Tumores de mama podem apresentar heterogeneidade intratumoral, exigindo imuno-histoquímica padronizada na biópsia por agulha grossa (core biopsy).'
    },
    apgGuide: {
      anatomia: '1) Sistema Porta Hepático: A Veia Porta é formada pela união da Veia Mesentérica Superior com a Veia Esplênica (que recebe a Mesentérica Inferior), drenando o sangue do trato gastrointestinal e baço para os sinusoides hepáticos. 2) Glomérulo Renal: endotélio fenestrado, membrana basal glomerular e podócitos. 3) Mama: unidades ductolobulares terminais (local de origem da maioria dos carcinomas mamários).',
      fisiopatologia: '• Questão 8 — Como a Cirrose Hepática leva à Hipertensão Portal (Pressão portal > 10 mmHg ou GPVH > 5 mmHg): Pela Lei de Ohm Hidrodinâmica (Pressão = Resistência × Fluxo), a cirrose eleva a pressão portal por DOIS mecanismos sinérgicos: 1) Aumento da Resistência Vascular Intra-Hepática ( ~70% — Componente Mecânico e Dinâmico): A agressão hepatocelular crônica (álcool, vírus B/C, DHGNA/MASLD) ativa as Células Estreladas Hepáticas (de Ito) no espaço de Disse, que se transformam em miofibroblastos contráteis produtores de colágeno tipo I e III -> ocorre fibrose perissinusoidal, capilarização dos sinusoides (perda das fenestrações) e formação de nódulos regenerativos que comprimem as vênulas hepáticas (componente mecânico fixo), somados à deficiência de Óxido Nítrico (NO) intra-hepático e excesso de endotelina-1 que contraem as células estreladas ao redor dos sinusoides (componente dinâmico); 2) Aumento do Fluxo Sanguíneo Venoso Portal (~30% — Circulação Hiperdinâmica Esplâncnica): Paradoxalmente, na circulação esplâncnica extra-hepática ocorre superprodução de vasodilatadores (especialmente NO, glucagon e endocanabinoides), causando vasodilatação arteriolar esplâncnica e despejando um volume sanguíneo aumentado dentro de um fígado fibrótico e resistente! Consequências clínicas: abertura de colaterais portossistêmicas (Varizes Esofagogástricas com risco de hemorragia digestiva alta), esplenomegalia congestiva (com plaquetopenia por sequestro), Ascite e Encefalopatia Hepática. • Questão 9 — Diferença Fisiopatológica entre Síndrome Nefrítica e Síndrome Nefrótica: 1) Síndrome Nefrítica (ex: GNPE pós-estreptocócica, Nefropatia por IgA/Berger, Nefrite Lúpica proliferativa): O mecanismo central é a INFLAMAÇÃO GLOMERULAR AGUDA com deposição de imunocomplexos, ativação do complemento e infiltração de leucócitos/proliferação endocapilar e mesangial. Isso causa dois efeitos: a) Ruptura inflamatória da parede capilar glomerular -> passagem de hemácias (HEMATÚRIA DISMÓRFICA com acantócitos e CILINDROS HEMÁTICOS patognomônicos!) e proteinúria subnefrótica (< 3,5 g/dia); b) Obstrução do lúmen capilar glomerular pela proliferação celular -> queda da Taxa de Filtração Glomerular (TFG) -> OLIGÚRIA, azotemia (aumento de ureia/creatinina) e retenção renal primária de sódio e água -> HIPERTENSÃO ARTERIAL e edema periorbitário/moderado. 2) Síndrome Nefrótica (ex: Doença por Lesão Mínima na infância, GESF, Nefropatia Membranosa, Nefropatia Diabética): O mecanismo central é a LESÃO DOS PODÓCITOS (apagamento dos pedicelos e destruição do diafragma da fenda de filtração) e perda da barreira de carga negativa da membrana basal glomerular, SEM inflamação celular obstrutiva. Isso gera hiperpermeabilidade maciça às proteínas -> PROTEINÚRIA MACIÇA (≥ 3,5 g/24h no adulto ou ≥ 50 mg/kg/dia na criança) -> HIPOPROTEINEMIA / HIPOALBUMINEMIA (< 3,0 g/dL) -> queda da pressão coloidosmótica plasmática -> extravasamento de água para o interstício e retenção secundária de sódio -> EDEMA GENERALIZADO (Anasarca) -> estímulo hepático compensatório de síntese de lipoproteínas -> HIPERLIPIDEMIA / LIPIDÚRIA (cilindros graxos). Além disso, há perda urinária de Antitrombina III (hipercoagulabilidade/trombose) e de IgG (risco de infecções).',
      diagnostico: '• Questão 10 — Como os Receptores Hormonais (RE/RP) e o HER2 influenciam a escolha do tratamento do Câncer de Mama: Todo carcinoma invasivo de mama deve ser submetido a estudo Imuno-Histoquímico (IHQ) para avaliar 4 marcadores: Receptor de Estrogênio (RE), Receptor de Progesterona (RP), proteína HER2 (receptor de fator de crescimento epidérmico humano 2) e índice proliferativo Ki-67. 1) Tumores Luminais A e B (RE+ e/ou RP+, representam ~70% dos cânceres de mama): O crescimento tumoral é impulsionado pela ligação do estrogênio aos receptores nucleares das células neoplásicas. Por isso, esses tumores respondem à HORMONIOTERAPIA (Endocrinoterapia Adjuvante por 5 a 10 anos): a) Moduladores Seletivos do Receptor de Estrogênio (SERM — Tamoxifeno, que bloqueia competitivamente o RE na mama, indicado em mulheres na pré-menopausa); b) Inibidores da Aromatase (Anastrozol, Letrozol, Exemestano — bloqueiam a conversão periférica de androgênios em estrogênio no tecido adiposo, indicados na pós-menopausa). 2) Tumores HER2-Positivos (Superexpressão/amplificação do oncogene ERBB2/HER2): São tumores biologicamente mais agressivos, porém altamente responsivos à TERAPIA-ALVO ANTI-HER2 com anticorpos monoclonais (Trastuzumabe e Pertuzumabe) associados à quimioterapia. 3) Tumores Triplo-Negativos (Basal-like: RE negativo, RP negativo e HER2 negativo): Como não possuem os alvos hormonais nem o receptor HER2, NÃO respondem ao Tamoxifeno/Anastrozol nem ao Trastuzumabe, sendo tratados fundamentalmente com Quimioterapia citotóxica e Imunoterapia (ex: Pembrolizumabe).',
      tratamento: 'Síntese Clínica: Na cirrose com hipertensão portal, betabloqueadores não seletivos (Propranolol ou Carvedilol) reduzem o fluxo esplâncnico e previnem sangramento varicoso; na síndrome nefrótica, IECA/BRA reduzem a pressão intraglomerular e a proteinúria; no câncer de mama, a imuno-histoquímica define a medicina de precisão.'
    },
    socraticQuestion: 'Compare o edema da Síndrome Nefrítica com o edema da Síndrome Nefrótica: em qual das duas o edema é causado primariamente pela queda da pressão oncótica plasmática (hipoalbuminemia por perda maciça de proteínas na urina), e por que pacientes com Síndrome Nefrótica têm alto risco de trombose venosa?',
    references: [
      { title: 'Robbins & Cotran — Patologia: Bases Patológicas das Doenças, 10ª Edição — Cap. Fígado (Cirrose), Rim (Doenças Glomerulares) e Mama', source: 'Kumar, V.; Abbas, A. K. (Elsevier)', year: '2021', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Medicina Interna de Harrison, 21ª Edição — Glomerulopatias, Cirrose e Câncer de Mama', source: 'Loscalzo, J. et al.', year: '2022', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-fisiopato-integrada-1',
        topic: 'Fisiopatologia — Fígado, Rim e Oncologia',
        subtopic: 'Hipertensão Portal, Nefrítica vs Nefrótica e Receptores no Câncer de Mama',
        vignette: 'Três questões de fisiopatologia aplicada são debatidas na sessão: 1) Mecanismo da hipertensão portal na cirrose; 2) Diferença entre síndrome nefrítica e nefrótica; 3) Papel dos receptores hormonais (RE/RP) no câncer de mama.',
        question: 'Assinale a alternativa que apresenta a explicação fisiopatológica correta para as três condições:',
        options: [
          'Na cirrose, há queda da resistência intra-hepática; na síndrome nefrótica predomina hematúria com cilindros hemáticos sem proteinúria; tumores triplo-negativos são tratados com Tamoxifeno.',
          'Na cirrose, a ativação das células estreladas (de Ito) gera fibrose sinusoidal (aumentando a resistência intra-hepática) somada à vasodilatação esplâncnica (aumentando o fluxo portal); a síndrome nefrítica cursa com inflamação glomerular, hematúria dismórfica/cilindros hemáticos, oligúria e hipertensão, enquanto a nefrótica decorre de lesão podocitária com proteinúria ≥ 3,5 g/24h, hipoalbuminemia e anasarca; no câncer de mama RE+/RP+, os receptores hormonais permitem o uso de endocrinoterapia (Tamoxifeno ou Inibidores da Aromatase).',
          'A síndrome nefrítica causa perda maciça de antitrombina III e colesterol alto sem hematúria; o Trastuzumabe bloqueia o receptor de progesterona.',
          'As células de Kupffer produzem albumina na síndrome nefrótica para evitar o edema.'
        ],
        correctIndex: 1,
        explanation: 'Na cirrose, a hipertensão portal combina aumento da resistência intra-hepática (fibrose pelas células estreladas de Ito + nódulos regenerativos + queda de NO intra-hepático) e aumento do fluxo portal por vasodilatação esplâncnica. A síndrome nefrítica é inflamatória (hematúria dismórfica, cilindros hemáticos, HAS, oligúria) e a nefrótica é podocitopática/perda da barreira de carga (proteinúria maciça ≥ 3,5g/24h, hipoalbuminemia, anasarca, dislipidemia). No câncer de mama, a presença de RE/RP guia a hormonioterapia (Tamoxifeno ou inibidores da aromatase).'
      }
    ]
  },

  // ==========================================================================
  // TRILHA 5: SOI III — 10 QUESTÕES DE RACIOCÍNIO CLÍNICO (CASOS INTEGRADOS)
  // ==========================================================================
  {
    id: 'soi3-has-emergencia',
    category: 'SOI III — Raciocínio Clínico (10 Casos)',
    keywords: ['hipertensão arterial', 'emergência hipertensiva', 'urgência hipertensiva', 'lesão de órgão-alvo', 'loa', 'edema agudo de pulmão', 'nitroprussiato', 'nitroglicerina', 'soi iii'],
    title: 'SOI III Caso 01 — Hipertensão Arterial e Emergência Hipertensiva (Lesão de Órgãos-Alvo)',
    specialty: 'Cardiologia & Emergências Clínicas (SOI III / SBC)',
    evidenceConfidence: {
      level: 'Alta Evidência (Diretrizes Brasileiras de Hipertensão Arterial — SBC)',
      summary: 'Diferenciação entre Emergência Hipertensiva (com LOA aguda) e Urgência/Pseudocrise, fisiopatologia vascular e metas seguras de redução pressórica.',
      limitations: 'Reduções abruptas e excessivas da PA (> 25% na 1ª hora, exceto na dissecção aguda de aorta) podem precipitar isquemia cerebral, coronariana ou renal por desvio da curva de autorregulação.'
    },
    apgGuide: {
      anatomia: 'Os órgãos-alvo mais vulneráveis à elevação pressórica aguda e crônica possuem leitos microvasculares de alta perfusão: Encéfalo, Coração (miocárdio e coronárias), Rins (arteríolas aferentes e glomérulos), Retina e Grandes Vasos (Aorta).',
      fisiologia: 'Os leitos cerebral, renal e coronariano possuem Autorregulação do Fluxo Sanguíneo: mantêm a perfusão constante dentro de uma faixa de PAM (normalmente 60 a 150 mmHg) contraindo ou dilatando suas arteríolas. No hipertenso crônico mal controlado, essa curva de autorregulação é desviada para a DIREITA (protege o cérebro de pressões altas, mas torna o paciente intolerante a quedas rápidas da PA!).',
      fisiopatologia: 'Caso 01 (Homem, 55 anos, PA 210/125 mmHg, cefaleia, visão turva, dispneia, estertores bilaterais e SpO₂ 89%): 1) Emergência vs Elevação Importante (Urgência): O que define uma EMERGÊNCIA HIPERTENSIVA não é apenas o número absoluto da PA, mas sim a presença de LESÃO AGUDA E PROGRESSIVA DE ÓRGÃO-ALVO (LOA) com risco iminente de morte! Neste caso, o paciente apresenta Edema Agudo de Pulmão Hipertensivo (dispneia, estertores bilaterais, hipoxemia SpO₂ 89% por falência ventricular esquerda aguda contra pós-carga extrema) e sinais de Encefalopatia/Retinopatia Hipertensiva (cefaleia + visão turva por quebra da barreira hematoencefálica e hiperperfusão/edema vasogênico cerebral). Na Urgência Hipertensiva, a PA está ≥ 180/120 mmHg, mas NÃO há lesão aguda de órgão-alvo (tratada com medicação oral e redução gradual em 24-48h). 2) Fisiopatologia Crônica e Aguda: Hiperatividade simpática e do SRAA + disfunção endotelial (queda de NO) -> remodelamento vascular (hipertrofia da túnica média e arterioloesclerose hialina/hiperplásica), hipertrofia ventricular esquerda concêntrica (rigidez diastólica), nefroesclerose hipertensiva e necrose fibrinoide arteriolar na hipertensão maligna.',
      diagnostico: 'Exames Obrigatórios na Emergência Hipertensiva: Fundoscopia direta (pesquisar hemorragias em chama de vela, exsudatos algodonosos e papiledema — retinopatia graus III/IV de Keith-Wagener), ECG de 12 derivações e Troponina (isquemia/sobrecarga), Radiografia de Tórax (congestão pulmonar/cardiomegalia), Creatinina, Ureia, Eletrólitos (Na+, K+) e Sumário de Urina/EAS (hematúria/proteinúria), além de TC de Crânio sem contraste se houver sinais neurológicos focais ou rebaixamento para afastar AVC hemorrágico/isquêmico.',
      tratamento: 'Conduta Imediata no Caso 01 (Emergência Hipertensiva com Edema Agudo de Pulmão): 1) Internação em Sala Vermelha/UTI, monitorização contínua, cabeceira elevada (Fowler) e Oxigenoterapia / VNI (CPAP/BiPAP — reduz pré e pós-carga e melhora a hipoxemia de 89%!); 2) Anti-hipertensivo Parenteral (Intravenoso) titulável de meia-vida curta: Nitroprussiato de Sódio EV em bomba de infusão (vasodilatador arterial e venoso potente) e/ou Nitroglicerina EV (Tridil) + Furosemida EV (diurético de alça para alívio da congestão pulmonar); 3) Velocidade Segura de Redução da PA (Regra de Ouro SBC/AHA): Reduzir a PAM em no máximo 20% a 25% na 1ª hora; nas 2 a 6 horas seguintes, atingir ~160/100-110 mmHg; e normalizar em 24 a 48h. Justificativa: como a curva de autorregulação cerebral e renal do hipertenso crônico está desviada para a direita, baixar a PA de 210/125 para 120/80 mmHg em minutos causaria hipoperfusão grave, precipitando AVC isquêmico hemodinâmico ("infarto em zona de fronteira"), IAM ou injúria renal aguda!'
    },
    socraticQuestion: 'No Caso 01 do SOI III (PA = 210/125 mmHg com estertores pulmonares, SpO₂ 89% e visão turva): por que seria um erro médico grave administrar Nifedipino sublingual ou reduzir a pressão arterial desse paciente para 120/80 mmHg já na primeira hora de atendimento?',
    references: [
      { title: 'Diretrizes Brasileiras de Hipertensão Arterial — Cap. Crise Hipertensiva', source: 'Sociedade Brasileira de Cardiologia (SBC) — Arq Bras Cardiol', year: '2021', evidenceLevel: 'Diretriz Oficial Nacional (Classe I)', pmid: '33909761', url: 'https://pubmed.ncbi.nlm.nih.gov/33909761/' }
    ],
    questions: [
      {
        id: 'q-soi3-1',
        topic: 'SOI III — Caso 01: Hipertensão Arterial e Lesão de Órgãos-Alvo',
        subtopic: 'Emergência Hipertensiva e Velocidade de Redução Pressórica',
        vignette: 'Um homem de 55 anos, hipertenso há 10 anos com baixa adesão, procura atendimento por cefaleia e visão turva. Apresenta PA de 210/125 mmHg, dispneia, estertores pulmonares bilaterais e SpO₂ de 89%.',
        question: 'Qual é a classificação correta do quadro, a conduta imediata e a justificativa fisiopatológica para a meta de redução da pressão arterial?',
        options: [
          'Urgência hipertensiva; administrar Captopril 25mg via oral e dar alta após 1 hora.',
          'Emergência hipertensiva (Edema Agudo de Pulmão hipertensivo e encefalopatia/retinopatia aguda); iniciar suporte ventilatório/O₂, Furosemida EV e vasodilatador intravenoso titulável (Nitroprussiato de Sódio ou Nitroglicerina EV), reduzindo a PAM em até 20-25% na 1ª hora para evitar hipoperfusão cerebral, coronariana e renal (devido ao desvio da curva de autorregulação para a direita na HAS crônica).',
          'Pseudocrise hipertensiva por dor; administrar apenas analgésico e ansiolítico.',
          'Emergência hipertensiva; administrar Nifedipino de ação rápida sublingual para normalizar a PA para 110/70 mmHg em 15 minutos.'
        ],
        correctIndex: 1,
        explanation: 'A presença de lesão aguda de órgão-alvo (edema agudo de pulmão com estertores/hipoxemia + sintomas neurovisuais) define Emergência Hipertensiva, exigindo vasodilatador intravenoso titulável (Nitroprussiato/Nitroglicerina) e redução controlada da PAM em 20-25% na 1ª hora, respeitando a curva de autorregulação desviada à direita do hipertenso crônico.'
      }
    ]
  },
  {
    id: 'soi3-dor-toracica-sca',
    category: 'SOI III — Raciocínio Clínico (10 Casos)',
    keywords: ['dor torácica', 'síndrome coronariana aguda', 'sca', 'iam', 'iamcsst', 'iamssst', 'troponina', 'supradesnivelamento', 'dissecção de aorta', 'pericardite', 'hipotensão', 'nitrato'],
    title: 'SOI III Caso 02 — Dor Torácica: Síndrome Coronariana Aguda, Choque e Diagnóstico Diferencial',
    specialty: 'Cardiologia de Emergência (SOI III / SBC / ESC)',
    evidenceConfidence: {
      level: 'Alta Evidência (Diretrizes SBC e ESC de Síndromes Coronarianas Agudas)',
      summary: 'Avaliação sistematizada da dor torácica na emergência, fisiopatologia da ruptura de placa aterosclerótica, reperfusão e contraindicações medicamentosas na hipotensão.',
      limitations: 'O primeiro ECG pode ser normal ou inespecífico em até 30% dos casos de IAMSSST; a seriação eletrocardiográfica e de troponina de alta sensibilidade é obrigatória.'
    },
    apgGuide: {
      anatomia: 'As artérias coronárias direita (ACD — irriga VD, parede inferior do VE e nós SA/AV na maioria dos indivíduos) e esquerda (Tronco da Coronária Esquerda -> Descendente Anterior [DA, irriga parede anterior e 2/3 anteriores do septo] e Circunflexa [CX, parede lateral]) perfundem o miocárdio predominantemente durante a DIÁSTOLE ventricular.',
      fisiopatologia: 'Caso 02 (Homem, 62 anos, tabagista, diabético, dislipidêmico, dor torácica opressiva há 50 min irradiada para MSE com sudorese, náuseas, HIPOTENSO e taquicárdico): 1) Fisiopatologia da Isquemia na SCA: Ruptura ou erosão de uma placa aterosclerótica vulnerável (capa fibrosa fina e núcleo lipídico rico em macrófagos espumosos) -> exposição do colágeno e fator tecidual -> adesão/agregação plaquetária e ativação da cascata de coagulação formando um trombo intracoronariano: • Trombo Totalmente Oclusivo = Isquemia transmural = SCA com Supradesnivelamento do ST (IAMCSST); • Trombo Suboclusivo = Isquemia subendocárdica = SCA sem Supradesnivelamento do ST (IAMSSST, quando há necrose de cardiomiócitos com elevação de Troponina; ou Angina Instável, se troponina negativa). A perda > 40% da massa contrátil do VE (ou infarto de VD) leva à hipotensão e Choque Cardiogênico!',
      diagnostico: 'Diagnóstico Diferencial das 5 Emergências Torácicas: 1) IAMCSST vs IAMSSST/Angina Estável: Na angina estável, a dor dura < 10-15 min, desencadeada por esforço e alivia com repouso/nitrato. Na SCA, dura > 20 min em repouso com sintomas autonômicos (sudorese fria, náuseas). ECG em até 10 minutos da chegada! Troponina de alta sensibilidade (hs-cTn): marcador padrão-ouro de injúria/necrose miocárdica (curva de ascensão/queda), mas no IAMCSST NÃO se espera o resultado da troponina para indicar a reperfusão! 2) Dissecção Aguda de Aorta: dor lancinante/"rasgando" de intensidade máxima desde o início, irradiada para o dorso interescapular, assimetria de pulsos/PA entre os membros (> 20 mmHg) e alargamento de mediastino no RX. 3) Tromboembolismo Pulmonar (TEP): dispneia súbita, dor pleurítica ventilatório-dependente, taquicardia, fatores de risco para TVP. 4) Pericardite Aguda: dor pleurítica que piora ao deitar e melhora ao sentar inclinando o tórax para frente, atrito pericárdico e supra de ST difuso côncavo ("em sorriso") com infra de PR.',
      tratamento: 'Conduta Crítica no Caso 02 (ATENÇÃO À HIPOTENSÃO!): 1) Reperfusão Imediata (se IAMCSST): Angioplastia Primária (ICP) em até 90 min (ou 120 min se transferência) ou Fibrinólise (Tenecteplase/Alteplase em até 30 min se ICP indisponível e sem contraindicações). 2) Dupla Antiagregação Plaquetária: AAS 160-300 mg mastigado + Inibidor P2Y12 (Clopidogrel, Ticagrelor ou Prasugrel) + Anticoagulação (Enoxaparina ou HNF). 3) QUAIS MEDICAMENTOS DEVEM SER EVITADOS DIANTE DA HIPOTENSÃO / CHOQUE? • NUNCA administrar Nitratos (Nitroglicerina/Isossorbida) na hipotensão (PAS < 90 mmHg), no infarto de Ventrículo Direito ou uso recente de sildenafila/tadalafila (24-48h), pois a venodilatação reduz abruptamente a pré-carga e agrava o choque! • NUNCA iniciar Betabloqueadores precoces (Metoprolol) na vigência de hipotensão, choque cardiogênico, congestão pulmonar aguda (Killip ≥ II), bradicardia ou BAV, pois deprimem o inotropismo e precipitam colapso hemodinâmico! • Evitar AINEs (exceto AAS) e usar Morfina com extrema cautela (apenas em dor refratária sem hipotensão).'
    },
    socraticQuestion: 'No Caso 02 do SOI III, o paciente com dor torácica isquêmica típica está HIPOTENSO e taquicárdico. Por que administrar Nitrato sublingual/venoso ou Betabloqueador neste momento exato — condutas que muitos estudantes decoram no mnemônico antigo "MONAB" — seria potencialmente fatal para este paciente?',
    references: [
      { title: 'Diretrizes da Sociedade Brasileira de Cardiologia sobre Angina Instável e Infarto Agudo do Miocárdio', source: 'Sociedade Brasileira de Cardiologia (SBC) — Arq Bras Cardiol', year: '2021', evidenceLevel: 'Diretriz Oficial Nacional (Classe I)', pmid: '34287532', url: 'https://pubmed.ncbi.nlm.nih.gov/34287532/' },
      { title: '2023 ESC Guidelines for the management of acute coronary syndromes', source: 'European Society of Cardiology (ESC) — Eur Heart J', year: '2023', evidenceLevel: 'Diretriz Internacional (Nível IA)', pmid: '37622654', url: 'https://pubmed.ncbi.nlm.nih.gov/37622654/' }
    ],
    questions: [
      {
        id: 'q-soi3-2',
        topic: 'SOI III — Caso 02: Dor Torácica e Síndrome Coronariana Aguda',
        subtopic: 'Avaliação Inicial, Reperfusão e Contraindicações na Hipotensão',
        vignette: 'Homem de 62 anos, tabagista, diabético e dislipidêmico, apresenta dor torácica opressiva há 50 minutos irradiada para o braço esquerdo, associada a sudorese e náuseas. Está hipotenso (PA 82/50 mmHg) e taquicárdico (FC 118 bpm). O ECG mostra alterações isquêmicas agudas.',
        question: 'Diante da hipotensão arterial apresentada por este paciente com Síndrome Coronariana Aguda, qual conduta farmacológica e de manejo está CORRETA?',
        options: [
          'Administrar dinitrato de isossorbida sublingual e metoprolol intravenoso imediatamente para reduzir o consumo miocárdico de oxigênio.',
          'Aguardar o resultado da curva de troponina de 6 horas antes de tomar qualquer conduta, mesmo se houver supradesnivelamento do segmento ST.',
          'Realizar ECG em até 10 minutos, administrar AAS + segundo antiagregante (inibidor P2Y12), planejar reperfusão coronariana imediata (Angioplastia Primária se IAMCSST ou IAMSSST com instabilidade hemodinâmica) e CONTRAINDICAR nitratos e betabloqueadores na fase aguda devido à hipotensão/risco de choque cardiogênico.',
          'Prescrever anti-inflamatório não esteroidal (Ibuprofeno) para alívio da dor isquêmica.'
        ],
        correctIndex: 2,
        explanation: 'Pacientes com SCA e instabilidade hemodinâmica (hipotensão/choque cardiogênico) têm contraindicação absoluta ao uso imediato de nitratos (que reduzem a pré-carga por venodilatação) e de betabloqueadores (que reduzem o inotropismo e a frequência cardíaca compensatória), devendo receber antiagregação, suporte hemodinâmico e reperfusão coronariana de emergência.'
      }
    ]
  },
  {
    id: 'soi3-dispneia-tep',
    category: 'SOI III — Raciocínio Clínico (10 Casos)',
    keywords: ['dispneia aguda', 'asma', 'dpoc', 'pneumonia', 'derrame pleural', 'pneumotórax', 'tromboembolismo pulmonar', 'tep', 'tvp', 'tríade de virchow', 'dímero d', 'wells', 'angiotomografia'],
    title: 'SOI III Casos 03 & 04 — Dispneia Aguda (IC vs DPOC/Asma) e Tromboembolismo Pulmonar (TVP/TEP)',
    specialty: 'Pneumologia, Cardiologia & Emergência (SOI III)',
    evidenceConfidence: {
      level: 'Alta Evidência (Diretrizes ESC de TEP / GOLD / GINA / SBC)',
      summary: 'Integra os Casos 03 e 04 do SOI III: diagnóstico diferencial sistematizado da dispneia aguda na emergência e abordagem completa da TVP e Embolia Pulmonar.',
      limitations: 'Em idosos tabagistas e hipertensos, IC descompensada e DPOC exacerbado frequentemente coexistem ("asma cardíaca" com sibilos por edema peribrônquico).'
    },
    apgGuide: {
      anatomia: 'Vias aéreas inferiores (brônquios e bronquíolos), parênquima alveolar, espaço pleural e árvore arterial pulmonar (que recebe todo o débito do ventrículo direito, onde êmbolos oriundos do sistema venoso profundo dos membros inferiores — veias ilíacas, femorais e poplíteas — impactam).',
      fisiopatologia: '• Caso 03 (Mulher, 68 anos, hipertensa e tabagista, dispneia intensa, ortopneia, edema de MMII, estertores pulmonares E sibilos, FR 32 irpm, SpO₂ 85%): 1) Como diferenciar as hipóteses: a) Insuficiência Cardíaca Aguda (Congestão Pulmonar): aumento da pressão hidrostática capilar pulmonar -> transudação intersticial e alveolar (estertores crepitantes bibasais, ortopneia, DPN, edema simétrico de MMII, B3, turgência jugular). Atenção: o edema da mucosa brônquica na IC aguda comprime as pequenas vias aéreas gerando SIBLOS ("Asma Cardíaca"!). BNP / NT-proBNP muito elevados (> 400 / > 900-1800 pg/mL) e RX com cardiomegalia, cefalização de trama vascular e linhas B de Kerley confirmam a origem cardiogênica. b) Exacerbação de DPOC / Asma: broncoespasmo e inflamação de vias aéreas -> limitação ao fluxo expiratório e aprisionamento aéreo (tempo expiratório prolongado, sibilos difusos, hiperinsuflação e retificação diafragmática no RX, hipercapnia com acidose respiratória na gasometria no DPOC grave). c) Pneumonia: febre, tosse produtiva purulenta, estertores localizados/sopro tubário e consolidação com broncograma aéreo no RX. d) Derrame Pleural: abolição do murmúrio vesicular e do frêmito toracovocal com macicez à percussão e parábola de Damoiseau no RX. e) Pneumotórax: dor torácica súbita, abolição do MV unilateral com HIPERTIMPANISMO à percussão e linha pleural sem trama vascular periférica no RX. • Caso 04 (Mulher, 46 anos, pós-operatório e imobilização prolongada, edema unilateral de perna esquerda + dor na panturrilha -> horas depois: dispneia súbita, dor torácica ventilatório-dependente, taquicardia e queda da SpO₂): 1) Tríade de Virchow na TVP/TEP: a) Estase Venosa (imobilização prolongada no pós-operatório reduz a bomba muscular da panturrilha); b) Lesão Endotelial e Hipercoagulabilidade (estado inflamatório e pró-trombótico pós-cirúrgico com aumento de fator tecidual e fibrinogênio). O trombo desprende-se das veias profundas da perna esquerda, viaja pela veia cava inferior, atravessa o AD e VD e obstrui ramos da artéria pulmonar (TEP), gerando espaço morto alveolar (alvéolo ventilado mas não perfundido -> hipoxemia) e aumento abrupto da pós-carga do Ventrículo Direito!',
      diagnostico: '• Caso 04 — Probabilidade Clínica (Escore de Wells), Dímero-D e Exames de Imagem no TEP/TVP: 1) Probabilidade Pré-Teste Baixa ou Intermediária (Wells improvável): solicitar DÍMERO-D (produto de degradação da fibrina com altíssimo Valor Preditivo Negativo: se negativo, EXCLUI TVP/TEP sem precisar de tomografia!). 2) Probabilidade Pré-Teste ALTA (Wells provável — como no Caso 04, que tem cirurgia recente, sinais clínicos de TVP unilateral e taquicardia!): NÃO pedir Dímero-D (pois mesmo no pós-operatório ele já vem alto e um falso-negativo não excluiria com segurança); ir DIRETO para o exame de imagem confirmatório: Angiotomografia Computadorizada de Artérias Pulmonares (Angio-TC de Tórax — padrão-ouro para TEP) e Ultrassonografia Venosa com Doppler Colorido de MMII (compressibilidade venosa ausente confirma TVP). Diferenciação nos membros: TVP (edema unilateral agudo, empastamento da panturrilha/sinal de Homans); Insuficiência Venosa Crônica (edema vespertino bilateral crônico, varizes, dermatite ocre); Doença Arterial Obstrutiva Periférica — DAOP (claudicação intermitente, extremidade fria, pálida e ausência de pulsos distais pedioso/tibial posterior).',
      tratamento: '• Conduta no Caso 03: Oxigenoterapia / VNI (CPAP/BiPAP beneficia tanto o Edema Agudo de Pulmão quanto a exacerbação de DPOC!) + Furosemida EV e vasodilatador para a IC descompensada + Broncodilatador inalatório de curta ação (Salbutamol/Fenoterol + Ipratrópio) para o broncoespasmo associado (evitando betabloqueadores não seletivos na crise de broncoespasmo e evitando hiperóxia excessiva no DPOC retentor crônico de CO₂ — alvo SpO₂ 88-92%). • Conduta no Caso 04 (TEP): Avaliar estabilidade hemodinâmica! Se TEP Estável: iniciar ANTICOAGULAÇÃO PLENA imediata (Enoxaparina SC 1 mg/kg 12/12h, Heparina Não Fracionada ou DOACs como Rivaroxabana/Apixabana). Se TEP Maciço / Alto Risco (Instabilidade Hemodinâmica: PAS < 90 mmHg ou choque obstrutivo de VD): indicar TERAPIA DE REPERFUSÃO (Trombólise Sistêmica com Alteplase EV, se sem contraindicações absolutas, ou embolectomia).'
    },
    socraticQuestion: 'No Caso 04 (mulher no pós-operatório com edema unilateral da perna esquerda que evolui com dispneia súbita, dor pleurítica e hipoxemia): por que o Escore de Wells dela já é de ALTA probabilidade clínica, e por que pedir um Dímero-D para decidir se vai fazer a Angiotomografia Pulmonar seria uma conduta inadequada nesse caso?',
    references: [
      { title: '2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism', source: 'European Society of Cardiology (ESC) — Eur Heart J', year: '2019', evidenceLevel: 'Diretriz Internacional (Nível IA)', pmid: '31504429', url: 'https://pubmed.ncbi.nlm.nih.gov/31504429/' },
      { title: 'Global Strategy for Prevention, Diagnosis and Management of COPD (GOLD Report)', source: 'GOLD / PubMed', year: '2024', evidenceLevel: 'Consenso Internacional', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-soi3-34',
        topic: 'SOI III — Casos 03 e 04: Dispneia Aguda e Tromboembolismo Pulmonar',
        subtopic: 'Tríade de Virchow, Escore de Wells, Dímero-D e Manejo do TEP',
        vignette: 'Uma mulher de 46 anos, após cirurgia recente e imobilização prolongada, apresenta edema unilateral da perna esquerda e dor na panturrilha. Horas depois, desenvolve dispneia súbita, dor torácica ventilatório-dependente, taquicardia (FC 116 bpm), PA 118/76 mmHg e SpO₂ de 89%.',
        question: 'Considerando a alta probabilidade clínica de Tromboembolismo Pulmonar (TEP) secundário a TVP neste caso hemodinamicamente estável, qual é a sequência diagnóstica e terapêutica correta?',
        options: [
          'Solicitar apenas Dímero-D e aguardar 24 horas antes de iniciar qualquer medicação.',
          'Pela alta probabilidade pré-teste (Wells provável), indicar Angiotomografia de Artérias Pulmonares (e/ou Doppler venoso de MMII) e iniciar Anticoagulação Plena imediata (reservedo a trombólise sistêmica para os casos com instabilidade hemodinâmica / choque obstrutivo).',
          'Realizar trombólise com Alteplase imediatamente em todos os pacientes com TEP, mesmo com pressão arterial normal.',
          'Diagnosticar insuficiência arterial periférica aguda e prescrever apenas diurético tiazídico.'
        ],
        correctIndex: 1,
        explanation: 'Diante de alta probabilidade clínica pelo Escore de Wells (cirurgia recente/imobilização + clínica de TVP + taquicardia), o Dímero-D não deve ser usado para excluir o diagnóstico; procede-se diretamente à Angiotomografia Pulmonar e inicia-se anticoagulação plena imediata. A trombólise sistêmica é reservada ao TEP de alto risco (com instabilidade hemodinâmica/choque).'
      }
    ]
  },
  {
    id: 'soi3-endocardite-hemato',
    category: 'SOI III — Raciocínio Clínico (10 Casos)',
    keywords: ['endocardite infecciosa', 'febre', 'sopro cardíaco', 'procedimento odontológico', 'vegetações', 'hemoculturas', 'duke', 'febre reumática', 'anemia', 'plaquetopenia', 'leucemia', 'blastos', 'pancitopenia'],
    title: 'SOI III Casos 05 & 06 — Endocardite Infecciosa (Sopro + Febre) e Emergências Hematológicas (Leucemia)',
    specialty: 'Infectologia, Cardiologia & Hematologia (SOI III)',
    evidenceConfidence: {
      level: 'Alta Evidência (Diretrizes ESC 2023 de Endocardite / Harrison Hematologia)',
      summary: 'Integra os Casos 05 e 06 do SOI III: diagnóstico de Endocardite Infecciosa subaguda (Critérios de Duke, hemoculturas e ecocardiografia) e interpretação da pancitopenia com células imaturas (blastos) no sangue periférico.',
      limitations: 'O Ecocardiograma Transtorácico (ETT) tem sensibilidade de ~60-70% para vegetações; se a suspeita de endocardite persistir ou houver prótese valvar, o Ecocardiograma Transesofágico (ETE, sensibilidade > 90%) é obrigatório.'
    },
    apgGuide: {
      anatomia: 'Caso 05: Endocárdio valvar (especialmente valvas mitral e aórtica na endocardite comunitária, e valva tricúspide em usuários de drogas injetáveis). Caso 06: Medula óssea hematopoética e sangue periférico.',
      fisiopatologia: '• Caso 05 (Homem, 39 anos, febre há 3 semanas, perda de peso, fadiga, sopro cardíaco novo, pequenas lesões hemorrágicas periféricas e histórico de procedimento odontológico recente): 1) Fisiopatologia da Endocardite Infecciosa (EI): Um jato sanguíneo turbulento em uma valva previamente lesada ou degenerada lesa o endotélio valvar -> expõe colágeno e deposita plaquetas e fibrina formando a Endocardite Trombótica Não Bacteriana (ETNB estéril) -> durante a manipulação odontológica (gengiva/mucosa oral), ocorre BACTEREMIA transitória por estreptococos do grupo Viridans (ex: Streptococcus sanguinis, S. mutans), que possuem adesinas capazes de se fixar ao trombo de fibrina-plaquetas -> multiplicação bacteriana protegida por novas camadas de fibrina formando as VEGETAÇÕES VALVARES friáveis. As vegetações destroem os folhetos valvares (gerando sopro regurgitante novo) e soltam fragmentos sépticos (Fenômenos Embólicos: hemorragias subungueais em "estilhaço", manchas de Janeway palmoplantares indolores, embolia cerebral/esplênica) e imunológicos (nódulos de Osler dolorosos nas polpas digitais, manchas de Roth na retina e glomerulonefrite). Diferença para Febre Reumática: a Febre Reumática é uma complicação autoimune NÃO supurativa (mimetismo molecular pela proteína M) que ocorre 2 a 3 semanas após faringoamigdalite por Streptococcus pyogenes (Critérios de Jones: cardite, poliartrite migratória, coreia de Sydenham, eritema marginado, nódulos subcutâneos), com hemoculturas NEGATIVAS! • Caso 06 (Mulher, 34 anos, fadiga, palidez, febre recorrente, equimoses espontâneas, sangramento gengival; hemograma com anemia, plaquetopenia, leucócitos alterados e CÉLULAS IMATURAS no sangue periférico): 1) Fisiopatologia da Insuficiência Medular por Leucemia Aguda: Um clone neoplásico de precursores hematopoéticos imaturos (BLASTOS — mieloblastos na LMA ou linfoblastos na LLA) sofre bloqueio de maturação e prolifera descontroladamente na medula óssea, ocupando o espaço medular ("hiato leucêmico") e suprimindo a produção normal das três séries sanguíneas: a) Queda de hemácias -> Anemia (fadiga, palidez); b) Queda de plaquetas -> Plaquetopenia (equimoses espontâneas, petéquias e gengivorragia — distúrbio da hemostasia primária!); c) Queda de neutrófilos maduros funcionais (neutropenia funcional, mesmo quando os leucócitos totais estão altos às custas de blastos!) -> Febre e infecções graves.',
      diagnostico: '• Caso 05 (Endocardite): Critérios de Duke Modificados (2 Maiores: 1. Hemoculturas positivas típicas + 2. Ecocardiograma com vegetação, abscesso perivalvar ou nova deiscência/regurgitação valvar). REGRA CRÍTICA DAS HEMOCULTURAS: Coletar 3 pares de hemoculturas (aeróbio + anaeróbio) de sítios de punção venosa periférica diferentes ANTES de iniciar qualquer antibiótico! • Caso 06 (Hematologia): Como diferenciar no laboratório: 1) Contagem de Reticulócitos: diferencia anemias hipoproliferativas/medulares (reticulócitos baixos: leucemia, aplasia, carência de ferro/B12/folato) de anemias hiperproliferativas por destruição periférica (reticulócitos altos: Anemias Hemolíticas, que cursam com aumento de LDH, bilirrubina indireta e queda de haptoglobina); 2) Esfregaço de Sangue Periférico (visualiza blastos, bastonetes de Auer na LMA, esquizócitos ou drepanócitos); 3) Coagulograma (TP, TTPa, Fibrinogênio e Dímero-D: crucial para rastrear CIVD, muito associada à Leucemia Promielocítica Aguda — LMA M3!); 4) Mielograma e Imunofenotipagem por Citometria de Fluxo da Medula Óssea (≥ 20% de blastos confirma Leucemia Aguda).',
      tratamento: '• Caso 05: No paciente subagudo estável, aguardar a coleta dos 3 pares de hemoculturas e iniciar antibioticoterapia bactericida IV prolongada (4 a 6 semanas, ex: Penicilina G Cristalina ou Ceftriaxona ± Gentamicina para S. viridans). Indicações de Cirurgia Cardíaca de Urgência na Endocardite: 1) Insuficiência Cardíaca aguda/choque por destruição valvar grave; 2) Infecção não controlada (abscesso perivalvar, bloqueio AV novo, febre/bacteremia persistente > 7 dias ou etiologia fúngica); 3) Prevenção de embolia (vegetação > 10 mm com evento embólico ou > 15 mm). • Caso 06: Encaminhamento hematológico de EMERGÊNCIA! Transfusão de concentrado de plaquetas se sangramento ativo ou plaquetas < 10.000-20.000/mm³, suporte transfusional de hemácias e início imediato de antibiótico de amplo espectro (Cefepime ou Piperacilina-Tazobactam) na primeira hora se houver Neutropenia Febril!'
    },
    socraticQuestion: 'No Caso 05 (suspeita de Endocardite Infecciosa subaguda após procedimento dentário): por que devemos coletar 3 pares de hemoculturas em sítios venosos diferentes ANTES de prescrever a primeira dose de antibiótico? E no Caso 06, por que a presença de células imaturas (blastos) associada a anemia, plaquetopenia e sangramento gengival exige avaliação hematológica de emergência?',
    references: [
      { title: '2023 ESC Guidelines for the management of endocarditis', source: 'European Society of Cardiology (ESC) — Eur Heart J', year: '2023', evidenceLevel: 'Diretriz Internacional (Nível IA)', pmid: '37622656', url: 'https://pubmed.ncbi.nlm.nih.gov/37622656/' },
      { title: 'Medicina Interna de Harrison, 21ª Edição — Leucemias Agudas e Abordagem das Anemias', source: 'Loscalzo, J. et al.', year: '2022', evidenceLevel: 'Livro-Texto de Referência', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-soi3-56',
        topic: 'SOI III — Casos 05 e 06: Endocardite Infecciosa e Leucemia Aguda',
        subtopic: 'Critérios de Duke, Hemoculturas e Interpretação da Pancitopenia com Blastos',
        vignette: 'No Caso 05, um homem de 39 anos apresenta febre há 3 semanas, sopro cardíaco novo e lesões hemorrágicas periféricas após procedimento odontológico. No Caso 06, uma mulher de 34 anos apresenta febre, palidez, gengivorragia, equimoses, anemia, plaquetopenia e células imaturas (blastos) no sangue periférico.',
        question: 'Quais são as condutas diagnósticas prioritárias para o Caso 05 e para o Caso 06, respectivamente?',
        options: [
          'No Caso 05, iniciar antibiótico oral empírico imediatamente sem colher culturas; no Caso 06, prescrever sulfato ferroso ambulatorial e reavaliar em 3 meses.',
          'No Caso 05 (suspeita de Endocardite Infecciosa subaguda por Streptococcus do grupo viridans), coletar 3 pares de hemoculturas de sítios periféricos distintos ANTES de iniciar a antibioticoterapia IV e realizar Ecocardiograma (Critérios de Duke); no Caso 06 (suspeita de Leucemia Aguda com falência medular), solicitar esfregaço periférico, reticulócitos, coagulograma (rastrear CIVD) e encaminhamento hematológico de emergência para Mielograma/Imunofenotipagem e suporte transfusional.',
          'No Caso 05, indicar cirurgia cardíaca imediata para todos os pacientes sem ecocardiograma; no Caso 06, administrar AAS para tratar o sangramento gengival.',
          'Ambos os casos tratam-se de anemia ferropriva simples secundária a gengivite.'
        ],
        correctIndex: 1,
        explanation: 'Na suspeita de Endocardite Infecciosa subaguda, a coleta de 3 pares de hemoculturas antes do antibiótico é mandatória para isolar o patógeno (como S. viridans pós-manipulação dentária) e guiar 4-6 semanas de terapia bactericida, junto ao ecocardiograma (Critérios Maiores de Duke). Já a combinação de anemia, plaquetopenia (sangramento mucocutâneo), febre e blastos periféricos caracteriza suspeita de Leucemia Aguda, uma emergência hematológica que exige mielograma, coagulograma e suporte imediato.'
      }
    ]
  },
  {
    id: 'soi3-arboviroses-malaria-tb-ca',
    category: 'SOI III — Raciocínio Clínico (10 Casos)',
    keywords: ['dengue', 'zika', 'chikungunya', 'malária', 'sinais de alarme', 'dor abdominal', 'hematócrito', 'gota espessa', 'ns1', 'tosse crônica', 'hemoptise', 'tuberculose', 'neoplasia pulmonar', 'câncer de pulmão', 'tabagismo', 'baar', 'trm-tb'],
    title: 'SOI III Casos 07 & 08 — Arboviroses vs Malária (Sinais de Alarme) e Tosse Crônica (TB vs Câncer de Pulmão)',
    specialty: 'Infectologia, Pneumologia & Saúde Coletiva (SOI III / MS)',
    evidenceConfidence: {
      level: 'Alta Evidência (Diretrizes do Ministério da Saúde — Dengue, Malária e Tuberculose)',
      summary: 'Integra os Casos 07 e 08 do SOI III: manejo da síndrome febril aguda com sinais de alarme (Dengue Grupo C vs Malária) e investigação de tosse crônica com hemoptise e opacidade pulmonar (Tuberculose vs Carcinoma Brônquico).',
      limitations: 'Em pacientes grandes tabagistas residentes no Brasil, a coexistência ou sequela de tuberculose e carcinoma broncogênico é possível, exigindo investigação microbiológica E anatomopatológica completas.'
    },
    apgGuide: {
      anatomia: 'Caso 07: Endotélio capilar sistêmico (extravasamento plasmático na dengue) e eritrócitos/hepatócitos (ciclo do Plasmodium na malária). Caso 08: Ápices pulmonares (segmentos apicais e posteriores dos lobos superiores, com maior relação V/Q e maior PO₂, local preferencial do Mycobacterium tuberculosis) e árvore brônquica/parênquima.',
      fisiopatologia: '• Caso 07 (Paciente de 28 anos, área de arboviroses + viagem recente para área de malária, febre, cefaleia, mialgia e náuseas há 4 dias -> evolui com DOR ABDOMINAL INTENSA, VÔMITOS PERSISTENTES e redução da diurese): 1) Diferenciação Clínica e Epidemiológica: a) Dengue: febre alta abrupta (2 a 7 dias), cefaleia retro-orbitária, mialgia intensa ("febre quebra-ossos"). Quando a febre começa a ceder (entre o 3º e 7º dia — Fase Crítica!), a resposta imune causa disfunção endotelial e AUMENTO DA PERMEABILIDADE CAPILAR (extravasamento de plasma para o terceiro espaço), levando a hemoconcentração (aumento do Hematócrito!), plaquetopenia e SINAIS DE ALARME: Dor abdominal intensa e contínua, vômitos persistentes, hipotensão postural/lipotimia, sangramento de mucosas, letargia/irritabilidade, hepatomegalia > 2 cm e acúmulo de líquidos (ascite/derrame pleural). b) Chikungunya: predomina poliartralgia/artrite simétrica intensa e incapacitante (frequentemente cronifica). c) Zika: febre baixa ou ausente, exantema maculopapular pruriginoso precoce e hiperemia conjuntival não purulenta. d) Malária (Plasmodium vivax ou P. falciparum): retorno de área endêmica (Região Amazônica), paroxismos febris precedidos de calafrios intensos e seguidos de sudorese profusa (ciclo eritrocítico com hemólise, esplenomegalia e anemia; P. falciparum causa citoaderência microvascular e malária grave com insuficiência renal e cerebral). • Caso 08 (Homem, 64 anos, tabagista há 40 anos, tosse persistente, hemoptise, perda ponderal, dor torácica, sudorese noturna, contato domiciliar prévio com Tuberculose e RX com opacidade pulmonar suspeita): 1) Tuberculose Pulmonar vs Neoplasia Pulmonar: Na Tuberculose, a inalação de aerossóis com M. tuberculosis leva à fagocitose alveolar e formação do granuloma caseoso (resposta Th1 mediada por IFN-γ e TNF-α), que pode liquefazer e cavitar nos lobos superiores. No Câncer de Pulmão (adenocarcinoma, carcinoma epidermoide/escamoso ou pequenas células), as mutações induzidas pelos carcinógenos do tabaco (TP53, KRAS, EGFR) promovem proliferação epitelial maligna, invasão vascular brônquica (hemoptise) e caquexia tumoral.',
      diagnostico: '• Exames do Caso 07 conforme o tempo de doença: Como o paciente está no 4º dia de sintomas: 1) Para Dengue: até o 5º dia de sintomas solicita-se pesquisa direta do vírus — Antígeno NS1 ou RT-PCR (a Sorologia IgM só deve ser solicitada a partir do 6º dia!); Hemograma completo obrigatório em todos os casos para avaliar Hematócrito (hemoconcentração) e Plaquetas. 2) Para Malária: GOTA ESPESSA (padrão-ouro oficial do MS, permite identificar a espécie de Plasmodium e quantificar a parasitemia) ou Teste Rápido Imunocromatográfico — deve ser feito IMEDIATAMENTE em todo febril vindo de área endêmica! • Exames do Caso 08 (Tosse Crônica + Hemoptise): 1) Investigação Microbiológica imediata para Tuberculose (e isolamento respiratório com máscara PFF2/N95 até descartar bacilífero!): Teste Rápido Molecular para Tuberculose no escarro (TRM-TB / GeneXpert — detecta DNA do M. tuberculosis e resistência à Rifampicina em 2 horas) + Baciloscopia direta (BAAR — 2 amostras) + Cultura para micobactérias; 2) Investigação de Imagem e Histopatológica para Neoplasia: Tomografia Computadorizada (TC) de Tórax com contraste (caracteriza a massa, espiculações, cavitação e linfonodos mediastinais) seguida de Broncoscopia com Biópsia (para lesões centrais/endobrônquicas) ou Biópsia transtorácica guiada por TC (para lesões periféricas). A confirmação histopatológica e imuno-histoquímica é indispensável para diagnosticar e estadiar o câncer de pulmão.',
      tratamento: '• Conduta Imediata no Caso 07: O paciente apresenta SINAIS DE ALARME (dor abdominal intensa + vômitos persistentes + oligúria) = Dengue Grupo C! A hidratação venosa NÃO PODE ESPERAR os resultados dos exames específicos: iniciar imediatamente expansão volêmica intravenosa com Soro Fisiológico 0,9% (10 mL/kg na 1ª hora em leito de internação/observação, reavaliando hematócrito e diurese horária ≥ 1 mL/kg/h) e realizar Gota Espessa imediata (se malária grave/P. falciparum, iniciar Artesunato IV). CONTRAINDICAÇÃO ABSOLUTA na suspeita de Dengue: NUNCA usar AAS (Aspirina) nem Anti-inflamatórios Não Esteroidais (AINEs: Ibuprofeno, Diclofenaco, Nimesulida, Cetoprofeno) pelo alto risco de sangramento grave! Usar Dipirona ou Paracetamol. • Conduta no Caso 08: Precauções para aerossóis, estabilização de vias aéreas se hemoptise volumosa, início do esquema RIPE (Rifampicina, Isoniazida, Pirazinamida e Etambutol por 6 meses) se confirmada TB, e encaminhamento oncológico/cirúrgico prioritário se confirmada neoplasia.'
    },
    socraticQuestion: 'No Caso 07 (paciente no 4º dia de febre que passa a apresentar dor abdominal intensa, vômitos persistentes e redução da diurese): por que a dor abdominal intensa e o aumento do Hematócrito no hemograma são sinais de alarme críticos na Dengue, qual exame virológico deve ser pedido no 4º dia (NS1 ou Sorologia IgM?) e quais medicamentos para febre/dor são estritamente proibidos?',
    references: [
      { title: 'Dengue: Diagnóstico e Manejo Clínico — Adulto e Criança (6ª Edição)', source: 'Ministério da Saúde do Brasil', year: '2024', evidenceLevel: 'Diretriz Oficial Nacional', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Manual de Recomendações para o Controle da Tuberculose no Brasil', source: 'Ministério da Saúde do Brasil / SBPT', year: '2022', evidenceLevel: 'Diretriz Oficial Nacional', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-soi3-78',
        topic: 'SOI III — Casos 07 e 08: Síndrome Febril Aguda e Tosse Crônica',
        subtopic: 'Dengue com Sinais de Alarme vs Malária e Tuberculose vs Neoplasia Pulmonar',
        vignette: 'No Caso 07, um paciente de 28 anos no 4º dia de febre, cefaleia e mialgia após viagem a região amazônica evolui com dor abdominal intensa, vômitos persistentes e oligúria. No Caso 08, um homem de 64 anos, tabagista há 40 anos e contato de tuberculose, apresenta tosse crônica, hemoptise, perda ponderal, sudorese noturna e opacidade pulmonar na radiografia.',
        question: 'Assinale a alternativa que apresenta o manejo diagnóstico e terapêutico correto para ambos os casos:',
        options: [
          'No Caso 07, prescrever Ibuprofeno e solicitar apenas sorologia IgM no 4º dia; no Caso 08, aguardar 6 meses sem exames de escarro.',
          'No Caso 07, reconhecer os Sinais de Alarme (dor abdominal intensa e vômitos = Grupo C), iniciar hidratação venosa imediata (SF 0,9% 10 mL/kg na 1ª hora), contraindicar AAS e AINEs, e solicitar hemograma (hematócrito/plaquetas), antígeno NS1/RT-PCR (pois está no 4º dia) e Gota Espessa imediata para malária; no Caso 08, instituir precauções respiratórias, solicitar TRM-TB/BAAR e cultura no escarro para tuberculose, além de TC de tórax e broncoscopia com biópsia para confirmação histopatológica de neoplasia pulmonar.',
          'No Caso 07, dar alta com reidratação oral; no Caso 08, iniciar quimioterapia oncológica sem realizar biópsia nem pesquisa de BAAR.',
          'A gota espessa só positivará após 30 dias de sintomas na malária.'
        ],
        correctIndex: 1,
        explanation: 'Dor abdominal intensa e contínua + vômitos persistentes são sinais de alarme clássicos de extravasamento plasmático na Dengue (Grupo C), exigindo hidratação venosa imediata, proibição de AAS/AINEs, pesquisa de NS1 (até o 5º dia) e Gota Espessa para excluir malária. No Caso 08, os fatores de risco obrigam a investigar simultaneamente Tuberculose (TRM-TB/BAAR/cultura com medidas de biossegurança aérea) e Câncer de Pulmão (TC de tórax + biópsia por broncoscopia ou transtorácica).'
      }
    ]
  },
  {
    id: 'soi3-pele-chagas',
    category: 'SOI III — Raciocínio Clínico (10 Casos)',
    keywords: ['lesões cutâneas', 'melanoma', 'abcde', 'hanseníase', 'sensibilidade', 'erisipela', 'celulite', 'impetigo', 'doença de chagas', 'trypanosoma cruzi', 'barbeiro', 'cardiomiopatia chagásica', 'saúde indígena'],
    title: 'SOI III Casos 09 & 10 — Lesões Cutâneas (Melanoma, Hanseníase, Celulite) e Doença de Chagas / Saúde Indígena',
    specialty: 'Dermatologia, Infectologia, Cardiologia & Saúde Coletiva (SOI III)',
    evidenceConfidence: {
      level: 'Alta Evidência (Diretrizes SBD / PCDT Hanseníase e Consenso Brasileiro de Doença de Chagas)',
      summary: 'Integra os Casos 09 e 10 do SOI III: diagnóstico diferencial dermatológico (Critérios ABCDE do melanoma, teste de sensibilidade na hanseníase e infecções bacterianas agudas) e abordagem integral da Cardiopatia Chagásica Crônica e determinantes sociais em populações indígenas e rurais.',
      limitations: 'Na fase crônica da Doença de Chagas, a parasitemia é baixa e intermitente; por isso, os exames parasitológicos diretos (gota espessa) são negativos e o diagnóstico baseia-se em 2 testes sorológicos IgG de princípios distintos.'
    },
    apgGuide: {
      anatomia: 'Caso 09: Epiderme (melanócitos na camada basal), derme superficial e vasos linfáticos (acometidos na erisipela), derme profunda e hipoderme (celulite) e nervos periféricos cutâneos (células de Schwann acometidas pelo Mycobacterium leprae na hanseníase). Caso 10: Miocárdio e sistema de condução cardíaco (especialmente o ramo direito do Feixe de His e o fascículo anterossuperior do ramo esquerdo).',
      fisiopatologia: '• Caso 09 (Três padrões de lesões cutâneas): 1) Lesão pigmentada que aumentou e mudou de cor -> Suspeita de MELANOMA CUTÂNEO: transformação maligna dos melanócitos (frequentemente associada a exposição UV intermitente intensa e mutação BRAF). Avalia-se pela Regra do ABCDE: A = Assimetria; B = Bordas irregulares/endentadas; C = Cores variadas (preto, marrom, azul, vermelho, branco); D = Diâmetro > 6 mm; E = Evolução (mudança recente de tamanho, forma, cor ou sangramento). Conduta: Dermatoscopia e Biópsia Excisional com margens de 1-3 mm para medir a Espessura de Breslow! 2) Placa eritematosa/infiltrada ou hipocrômica com PERDA DE SENSIBILIDADE -> HANSENÍASE (Mycobacterium leprae, bacilo álcool-ácido resistente com tropismo pelas células de Schwann dos nervos periféricos): a destruição neural segue a sequência clássica: perda da sensibilidade TÉRMICA -> DOLOROSA -> TÁTIL! 3) Lesão cutânea aguda dolorosa, quente, avermelhada (eritema) com febre -> ERISIPELA vs CELULITE: Na Erisipela (causada principalmente pelo Streptococcus pyogenes), a infecção acomete a derme superficial e os vasos linfáticos, apresentando bordas BEM DELIMITADAS e elevadas; na Celulite (S. aureus ou S. pyogenes), acomete a derme profunda e tecido subcutâneo, com bordas imprecisas/mal delimitadas. (Já o Impetigo é superficial epidérmico, com vesículas/pústulas que secam formando crostas melicéricas cor de mel). • Caso 10 (Homem, 49 anos, área rural endêmica, condições habitacionais com presença do vetor barbeiro, palpitações, tontura, dispneia aos esforços, ECG com distúrbio de condução e Eco com queda da FEVE): 1) Transmissão e Fisiopatologia da Doença de Chagas (Trypanosoma cruzi): Transmitida pelas fezes do triatomíneo hematófago ("barbeiro", associado a casas de pau a pique/taipa e coberturas vegetais) depositadas durante o repasto sanguíneo (também por via oral — açaí/caldo de cana contaminados —, vertical ou transfusional). Na Fase Aguda (dura 4-8 semanas), há alta parasitemia (sinal de Romaña/chagoma de inoculação, febre, miocardite aguda). Na Fase Crônica Cardíaca (10 a 30 anos depois, em ~30% dos infectados), a persistência parasitária de baixo grau, a resposta autoimune cruzada, a denervação autonômica parassimpática e a isquemia microvascular geram MIOCARDITE CRÔNICA FIBROSANTE progressiva -> destruição do sistema de condução (causando o clássico Bloqueio de Ramo Direito [BRD] associado ao Bloqueio Divisional Anterossuperior Esquerdo [BDASE], bradiarritmias/BAV total e taquicardia ventricular com risco de morte súbita) e Cardiomiopatia Chagásica Dilatada (com aneurisma apical de VE em "dedo de luva", trombo mural e ICFEr)!',
      diagnostico: '• Caso 10 — Como confirmar o diagnóstico da Doença de Chagas conforme a fase: 1) Fase Aguda (alta parasitemia): Exame Parasitológico Direto no sangue periférico (pesquisa direta a fresco do T. cruzi, gota espessa ou método de concentração de Strout). 2) Fase Crônica (baixa parasitemia — como no paciente de 49 anos do Caso 10!): O diagnóstico é SOROLÓGICO, exigindo obrigatoriamente DOIS testes sorológicos pesquisa de IgG anti-T. cruzi de princípios metodológicos diferentes (ex: ELISA + Imunofluorescência Indireta [IFI] ou Hemaglutinação Indireta [HAI]). Avaliação cardíaca: ECG de 12 derivações, Holter 24h (rastrear arritmias ventriculares e bloqueios), RX de tórax e Ecocardiograma (FEVE, acinesia inferobasal e aneurisma apical).',
      tratamento: '• Caso 09: Melanoma = biópsia excisional e ampliação de margens conforme Breslow + pesquisa de linfonodo sentinela; Hanseníase = Poliquimioterapia Única (PQT-U: Rifampicina + Dapsona + Clofazimina) + avaliação de contatos; Erisipela/Celulite = Penicilina/Cefalosporina de 1ª geração (Cefalexina/Cefazolina) ou Oxacilina/Clindamicina (internar se sinais de sepse ou suspeita de fasciíte necrosante!). • Caso 10 (Chagas e Saúde Indígena/Rural): 1) Manejo da ICFEr (IECA/BRA, Betabloqueador com cautela se sem bradicardia/BAV, Espironolactona, iSGLT2) e das Arritmias (Amiodarona, Implante de Marcapasso definitivo em BAV avançado ou CDI para prevenção de morte súbita); 2) Tratamento Etiológico Antiparasitário (Benznidazol): obrigatório em todos os casos na Fase Aguda, congênitos, crianças/adolescentes e adultos até 50 anos na forma indeterminada ou cardíaca inicial (não indicado na cardiopatia avançada — estudo BENEFIT); 3) Determinantes Socioculturais e Saúde Indígena: Integrar a assistência ao Subsistema de Atenção à Saúde Indígena (SASI-SUS / DSEI), respeitando as especificidades culturais e linguísticas, articulando com Agentes Indígenas de Saúde (AIS), promovendo melhoria habitacional (reboco de paredes, telas), vigilância entomológica comunitária e controle higiênico-sanitário de alimentos regionais (como o açaí).'
    },
    socraticQuestion: 'No Caso 09, qual teste simples de consultório confirma a suspeita clínica de Hanseníase em uma placa cutânea infiltrada? E no Caso 10, por que o diagnóstico da Doença de Chagas na fase crônica é feito com 2 sorologias IgG de métodos diferentes (e não com exame direto do sangue), e qual é a alteração clássica do ECG na Cardiopatia Chagásica?',
    references: [
      { title: 'II Consenso Brasileiro em Doença de Chagas', source: 'Sociedade Brasileira de Medicina Tropical / Ministério da Saúde', year: '2016', evidenceLevel: 'Consenso Oficial Nacional', pmid: '27982292', url: 'https://pubmed.ncbi.nlm.nih.gov/27982292/' },
      { title: 'Protocolo Clínico e Diretrizes Terapêuticas da Hanseníase', source: 'Ministério da Saúde do Brasil / SBD', year: '2022', evidenceLevel: 'Diretriz Oficial Nacional', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    questions: [
      {
        id: 'q-soi3-910',
        topic: 'SOI III — Casos 09 e 10: Dermatologia Clínica e Doença de Chagas',
        subtopic: 'Melanoma (ABCDE), Hanseníase e Cardiopatia Chagásica Crônica',
        vignette: 'No Caso 09, são avaliados pacientes com: (1) lesão pigmentada assimétrica em crescimento; (2) placa eritematosa infiltrada com perda de sensibilidade térmica e dolorosa; e (3) placa eritematosa aguda, quente, dolorosa, de bordas bem delimitadas e febre. No Caso 10, um homem de 49 anos de área rural endêmica com exposição ao barbeiro apresenta palpitações, dispneia, bloqueio de condução no ECG e queda da fração de ejeção no ecocardiograma.',
        question: 'Assinale a alternativa que correlaciona corretamente o diagnóstico e a investigação dos Casos 09 e 10:',
        options: [
          'A perda de sensibilidade na placa cutânea é típica do melanoma; na fase crônica da doença de Chagas o diagnóstico é feito exclusivamente por gota espessa.',
          'No Caso 09: (1) suspeita de Melanoma (avaliado pelos critérios ABCDE, dermatoscopia e biópsia excisional), (2) Hanseníase (M. leprae com tropismo neural causando perda de sensibilidade térmica, dolorosa e tátil) e (3) Erisipela (infecção estreptocócica da derme superficial e linfáticos com bordas bem delimitadas). No Caso 10: Cardiopatia Chagásica Crônica (confirmada por 2 testes sorológicos IgG de princípios distintos, cursando classicamente com BRD + BDASE no ECG e aneurisma apical de VE), exigindo cuidado articulado às condições de moradia e saúde indígena/rural.',
          'A erisipela é uma infecção fúngica crônica indolor; a doença de Chagas acomete apenas a valva pulmonar sem causar arritmias.',
          'O tratamento com Benznidazol reverte imediatamente a fibrose miocárdica avançada em pacientes com insuficiência cardíaca terminal.'
        ],
        correctIndex: 1,
        explanation: 'Os critérios ABCDE guiam a suspeita de melanoma; a alteração de sensibilidade (térmica -> dolorosa -> tátil) em lesão cutânea define a síndrome neurocutânea da Hanseníase; e a placa eritematosa quente e febril de bordas bem definidas caracteriza a Erisipela. Na Doença de Chagas crônica, a parasitemia é escassa, exigindo 2 sorologias IgG de métodos distintos (ex: ELISA + IFI), sendo o bloqueio de ramo direito (BRD) associado ao BDASE o achado eletrocardiográfico mais característico.'
      }
    ]
  }
];

function findMatchingKnowledge(queryText = '') {
  const norm = String(queryText).toLowerCase();
  let best = CURATED_MEDICAL_KNOWLEDGE[0];
  let bestScore = -1;

  for (const item of CURATED_MEDICAL_KNOWLEDGE) {
    let score = 0;
    if (norm.includes(item.id.toLowerCase())) score += 8;
    if (norm.includes(item.title.toLowerCase())) score += 8;
    for (const kw of item.keywords) {
      if (norm.includes(kw.toLowerCase())) score += 3;
    }
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }
  return { matched: best, score: bestScore };
}

/**
 * Busca artigos reais na API NCBI E-Utilities (PubMed) com timeout curto (2.5s)
 */
async function searchPubMedArticles(query, maxResults = 3) {
  const isTestEnv = typeof process !== 'undefined' && process.env?.SYNAPSE_DB_PATH?.includes('test-data.json');
  if (!query || isTestEnv) {
    return [];
  }
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&retmax=${maxResults}&sort=relevance&term=${encodeURIComponent(query + ' AND (guideline[Publication Type] OR review[Publication Type])')}`;
    const searchRes = await fetch(searchUrl, { signal: controller.signal });
    if (!searchRes.ok) {
      clearTimeout(timeoutId);
      return [];
    }
    const searchJson = await searchRes.json();
    const idList = searchJson?.esearchresult?.idlist || [];
    if (idList.length === 0) {
      clearTimeout(timeoutId);
      return [];
    }

    const summaryUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=${idList.join(',')}`;
    const summaryRes = await fetch(summaryUrl, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!summaryRes.ok) return [];

    const summaryJson = await summaryRes.json();
    const resultObj = summaryJson?.result || {};
    const articles = [];

    for (const pmid of idList) {
      const item = resultObj[pmid];
      if (item && item.title) {
        articles.push({
          title: item.title.replace(/\.$/, ''),
          source: `${item.source || 'PubMed Indexed Journal'} (PMID: ${pmid})`,
          year: (item.pubdate || '').slice(0, 4) || '2024',
          evidenceLevel: 'Artigo Indexado PubMed / MEDLINE',
          pmid: String(pmid),
          url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`
        });
      }
    }
    return articles;
  } catch (_) {
    return [];
  }
}

/**
 * Sanitiza referências garantindo ZERO Wikipédia
 */
function sanitizeTrustedReferences(refs = [], fallbackRefs = []) {
  const combined = [...fallbackRefs, ...refs];
  const seen = new Set();
  const clean = [];

  for (const r of combined) {
    if (!r || !r.title) continue;
    const src = String(r.source || '');
    const url = String(r.url || '');
    if (/wikipedia|wikimedia|yahoo|blogspot|tiktok/i.test(src + ' ' + url)) {
      continue;
    }
    const key = r.pmid || r.title.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      clean.push({
        title: r.title,
        source: r.source || 'Literatura Médica Oficial',
        year: r.year || '2024',
        evidenceLevel: r.evidenceLevel || 'Referência Acadêmica',
        pmid: r.pmid || null,
        url: r.url || (r.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/` : 'https://pubmed.ncbi.nlm.nih.gov/')
      });
    }
  }
  return clean.slice(0, 5);
}

/**
 * Gera estudo estruturado para APG / HAM / SOI III
 */
async function generateApgStudy({ topic, objectives = [] }) {
  const { matched } = findMatchingKnowledge(topic + ' ' + objectives.join(' '));
  const pubmedRefs = await searchPubMedArticles(topic, 2);
  const trustedRefs = sanitizeTrustedReferences(pubmedRefs, matched.references);

  const customObjectivesNote = objectives.length > 0
    ? ` (Objetivos trabalhados: ${objectives.join(' | ')}).`
    : '';

  return {
    id: matched.id,
    title: matched.title,
    category: matched.category,
    specialty: matched.specialty,
    evidenceConfidence: matched.evidenceConfidence,
    apgGuide: {
      anatomia: matched.apgGuide.anatomia,
      fisiologia: matched.apgGuide.fisiologia || matched.apgGuide.histologia,
      fisiopatologia: (matched.apgGuide.fisiopatologia || matched.apgGuide.histologia || matched.apgGuide.fisiologia) + customObjectivesNote,
      diagnostico: matched.apgGuide.diagnostico,
      tratamento: matched.apgGuide.tratamento
    },
    socraticQuestion: matched.socraticQuestion,
    references: trustedRefs
  };
}

/**
 * Processa mensagem no Chat Mentor Acadêmico
 */
async function generateMentorChatResponse({
  message,
  mode = 'socratic',
  apgTopic = '',
  useOwnMaterials = false,
  materials = []
}) {
  const { matched } = findMatchingKnowledge(`${apgTopic} ${message}`);
  const activeMaterials = useOwnMaterials && materials.length > 0 ? materials : [];
  const usedOwnMaterials = activeMaterials.length > 0;

  const pubmedRefs = await searchPubMedArticles(apgTopic || message, 2);
  let baseRefs = sanitizeTrustedReferences(pubmedRefs, matched.references);

  if (usedOwnMaterials) {
    baseRefs = [
      ...activeMaterials.map((m) => ({
        title: `Material do Grupo: ${m.title}`,
        source: `Biblioteca Pessoal (${m.fileName})`,
        year: new Date(m.createdAt).getFullYear().toString(),
        evidenceLevel: 'Material de Apoio Autorizado',
        pmid: null,
        url: '#materials'
      })),
      ...baseRefs
    ];
  }

  let materialQuoteSection = '';
  if (usedOwnMaterials) {
    const snippets = activeMaterials
      .slice(0, 2)
      .map((m) => `> 📄 **Integrado ao seu material (${m.title}):** *"${m.extractedText.slice(0, 280)}..."*`)
      .join('\n\n');
    materialQuoteSection = `\n\n### Conexão com o Material do Grupo\n${snippets}`;
  }

  const histologiaPart = matched.apgGuide.histologia
    ? `\n2. **Histologia & Organização Tecidual:** ${matched.apgGuide.histologia}`
    : '';

  const reply = `### ${matched.title}

Vamos estruturar seu raciocínio conectando morfofisiologia, clínica e evidências científicas verificáveis:

1. **Anatomia Aplicada:** ${matched.apgGuide.anatomia}${histologiaPart}
3. **Fisiologia & Mecanismos:** ${matched.apgGuide.fisiologia || ''}
4. **Fisiopatologia & Correlação Semiológica:** ${matched.apgGuide.fisiopatologia || ''}
5. **Diagnóstico & Conduta Baseada em Evidências:** ${matched.apgGuide.diagnostico} — ${matched.apgGuide.tratamento}${materialQuoteSection}

---
⚖️ **Evidência Científica (${matched.evidenceConfidence.level}):** ${matched.evidenceConfidence.limitations}

---
🧠 **Pergunta Socrática (Desenvolva seu Raciocínio):**
*${matched.socraticQuestion}*`;

  return {
    reply,
    socraticPrompt: matched.socraticQuestion,
    clinicalAxes: matched.apgGuide,
    references: baseRefs,
    evidenceConfidence: matched.evidenceConfidence,
    usedOwnMaterials,
    matchedTopic: matched.title
  };
}

/**
 * Gera questão clínica de aprendizagem ativa
 */
function generateActiveReviewQuestion({ topic = '', difficulties = [] }) {
  const targetQuery = topic || (difficulties[0]?.topic) || CURATED_MEDICAL_KNOWLEDGE[0].title;
  const { matched } = findMatchingKnowledge(targetQuery);
  const pool = matched.questions || CURATED_MEDICAL_KNOWLEDGE[0].questions;
  const chosen = pool[Math.floor(Math.random() * pool.length)];

  return {
    id: chosen.id,
    topic: chosen.topic,
    subtopic: chosen.subtopic,
    vignette: chosen.vignette,
    question: chosen.question,
    options: chosen.options,
    correctIndex: chosen.correctIndex,
    explanation: chosen.explanation,
    references: matched.references
  };
}

/**
 * Extrai texto legível de um arquivo PDF em Buffer
 */
function extractTextFromPdfBuffer(buffer, fallbackTitle = '') {
  const raw = buffer.toString('latin1');
  const extractedChunks = [];

  const parenMatches = raw.match(/\(([^()]{3,300})\)/g) || [];
  for (const m of parenMatches) {
    const inner = m.slice(1, -1).replace(/\\[nrt]/g, ' ').replace(/[^\x20-\x7EÀ-ÿ]/g, ' ').trim();
    if (inner.length > 4 && !/^(Type|Font|Page|Catalog|Outlines|Parent|Resources|ProcSet)/i.test(inner)) {
      extractedChunks.push(inner);
    }
  }

  let text = extractedChunks.join(' ').replace(/\s+/g, ' ').trim();
  if (text.length < 20) {
    const asciiMatches = raw.match(/[A-Za-zÀ-ÿ0-9,;:.?!()/\- ]{15,}/g) || [];
    text = asciiMatches
      .filter((s) => !/obj|endobj|stream|endstream|xref|trailer|startxref/i.test(s))
      .slice(0, 30)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  return text || `Documento PDF acadêmico indexado: ${fallbackTitle}`;
}

const SynapseEngineExports = {
  GROUP_MEMBERS,
  CURATED_MEDICAL_KNOWLEDGE,
  findMatchingKnowledge,
  searchPubMedArticles,
  sanitizeTrustedReferences,
  generateApgStudy,
  generateMentorChatResponse,
  generateActiveReviewQuestion,
  extractTextFromPdfBuffer
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SynapseEngineExports;
}
if (typeof window !== 'undefined') {
  window.SynapseEngine = SynapseEngineExports;
}

