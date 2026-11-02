# 🧠 SYNAPSE MD — A Inteligência Artificial que Desenvolve a Inteligência Humana

> *“E se a IA não pensasse por você? E se ela ensinasse você a pensar melhor?”*  
> **Não terceirize seu raciocínio. Desenvolva-o.**

---

## 👩‍⚕️ Integrantes do Grupo (Versão Dia 2)

- **Lanna Maria Ribas Luz**
- **Laura Meira Porto**
- **Mariane Gomes Bandeira**
- **Thaís Silva Nolasco**

---

## 🎯 Sobre o Projeto

O **Synapse MD** é uma plataforma acadêmica de inteligência artificial voltada à aprendizagem médica ativa. Diferente de um chatbot comum que apenas entrega respostas prontas, o Synapse MD atua como um **mentor socrático** estruturado em **Três Inteligências**:

1. **Inteligência Científica (Evidence First™):** Baseado exclusivamente em literatura médica de referência (*Guyton & Hall, Moore, Netter, Tortora, Snell, Bates, Robbins & Cotran, Harrison*, Diretrizes Oficiais SBC/MS/FEBRASGO e PubMed). **Zero uso de Wikipédia.**
2. **Inteligência Clínica:** Estrutura o raciocínio em **5 eixos** (*Anatomia, Fisiologia/Histologia, Fisiopatologia/Semiologia, Diagnóstico e Conduta*) e aplica casos clínicos simulados.
3. **Inteligência Educacional:** Mapeia lacunas de aprendizagem, acompanha o domínio por tema e sugere revisões ativas personalizadas.

---

## 📚 Material de Apoio Integrado (45 Questões e Casos Clínicos)

- **📘 APG — Morfofisiologia (8 Temas):** SNC, SNP, Potencial de Ação e Sinapses, Visão, Audição e Equilíbrio, Anatomia e Fisiologia Renal, Sistema Reprodutor Feminino (Ciclo Menstrual) e Masculino (Espermatogênese).
- **🩺 HAM — Habilidades Médicas & Semiologia (7 Questões e Casos):** Exame Neurológico Motor/Reflexos e Caso de Ataxia, Exame dos 12 Pares de Nervos Cranianos, Exame Ginecológico Completo, Cateterismo Vesical de Demora (Técnica + Caso Simulado) e Suporte Básico de Vida (SBV/DEA).
- **⚡ Fisiologia Médica (10 Questões):** Condução Elétrica Cardíaca, Troca Gasosa Alveolar, Sistema Linfático, Termorregulação Cutânea, Insulina vs. Glucagon, Eritropoiese e EPO, Pressões Respiratórias, Linfócitos B e T, Hemostasia e Glicólise/ATP.
- **🔬 Fisiopatologia & Clínica (10 Questões):** Disfunção do EEI na DRGE, *H. pylori* e Câncer Gástrico, Alergia IgE vs. Intolerância Alimentar, Doença de Crohn vs. Retocolite Ulcerativa, Giardíase, Mecanismos da Diarreia, Sinais de Obstrução Intestinal, Cirrose e Hipertensão Portal, Síndrome Nefrítica vs. Nefrótica e Receptores Hormonais no Câncer de Mama.
- **🏥 SOI III — Raciocínio Clínico (10 Casos Integrados):** Emergência Hipertensiva, Síndrome Coronariana Aguda com Hipotensão, Dispneia Aguda, TVP e Embolia Pulmonar, Endocardite Infecciosa, Leucemia Aguda, Dengue com Sinais de Alarme vs. Malária, Tuberculose vs. Câncer de Pulmão, Melanoma/Hanseníase/Erisipela e Doença de Chagas / Saúde Indígena.

---

## 🗂️ Estrutura Enxuta do Projeto (Pronta para GitHub e GitHub Pages)

O projeto possui **zero dependências externas** (não utiliza `node_modules`), contendo apenas os arquivos essenciais:

| Arquivo | Função |
| :--- | :--- |
| `index.html` | Interface completa (Modo Escuro/Claro, responsiva para celular e desktop) |
| `styles.css` | Identidade visual inspirada nos slides (Azul Ciano `#38bdf8` + Violeta `#a855f7`) |
| `app.js` | Controlador dos 5 módulos (funciona tanto com servidor Node quanto direto no GitHub Pages) |
| `synapse-engine.js` | Motor médico com todas as 45 questões, casos clínicos e referências científicas |
| `server.js` | Servidor local em Node.js puro (opcional) |
| `package.json` | Manifesto enxuto do projeto |

---

## 🚀 Como Usar

### Opção 1 — Direto no Navegador ou GitHub Pages (Sem instalar nada)
Basta abrir o arquivo `index.html` no navegador ou ativar o **GitHub Pages** no repositório do GitHub.

### Opção 2 — Rodando o Servidor Local Node.js
```bash
node server.js
```
Depois, acesse **`http://localhost:3000`** e clique em **"⚡ Entrar Agora na Plataforma (1 Clique)"**.
