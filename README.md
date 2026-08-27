# Ronaldy Gomes — Personal Website & Portfolio

<div align="center">

[![Version](https://img.shields.io/badge/version-v1.2.0-orange.svg?style=flat-square)](https://github.com/ronaldycgomes/personal-website/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Architecture: No--Build SPA](https://img.shields.io/badge/Architecture-No--Build%20ESM-success?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-purple.svg?style=flat-square)](manifest.json)

**Software Developer · Fraud Prevention · MLOps · Cloud · AI**  
*Sistemas distribuídos em larga escala, pipelines de Machine Learning e Developer Experience acelerada por IA.*

[🌐 Ver Demo Local](http://localhost:3333) • [📄 Ver Documentação Técnica](docs/README.md) • [💼 LinkedIn](https://www.linkedin.com/in/ronaldy-gomes)

</div>

---

## ⚡ Sobre o Portfólio

Este repositório contém o código-fonte do portfólio profissional de **Ronaldy Gomes**. Desenvolvido com foco em **performance extrema, design sofisticado e zero fricção de build**, adotando uma arquitetura moderna baseada em **ES Modules nativos, React 18, HTM e Tailwind CSS**.

---

## ✨ Funcionalidades & Engenharia Implementadas

| Categoria | Funcionalidade | Descrição / Implementação |
| :--- | :--- | :--- |
| **Arquitetura** | **No-Build ESM SPA** | Execução nativa no navegador sem necessidade de Webpack, Vite ou Babel em desenvolvimento. |
| **Internacionalização** | **i18n Nativo (PT / EN)** | Alternância instantânea de idioma entre Português e Inglês com persistência no `localStorage`. |
| **Temas** | **Dark / Light / Auto** | Alternância com suporte ao horário local do sistema (18h-6h) e respeito a `prefers-color-scheme`. |
| **Mobile & PWA** | **Instalável como App** | Suporte completo a PWA com `manifest.json`, `apple-touch-icon` e `theme-color` dinâmico. |
| **Micro-interações UX** | **Scroll Progress & Back to Top** | Linha gradiente de 2.5px indicando leitura no topo e botão flutuante com *glassmorphism* para retorno suave. |
| **Conversão & Contato** | **1-Click Copy & WhatsApp** | Cópia de E-mail/WhatsApp com animação de confirmação (*"Copiado!"*) e link direto de WhatsApp. |
| **Currículo** | **Download Direto de CV** | Botão CTA no Hero integrado com download de currículo em PDF (`assets/cv-ronaldy-gomes.pdf`). |
| **Identidade Visual** | **Ícones Oficiais em Vetor** | 100% dos ícones em SVG oficial de alta fidelidade (Python, Docker, Claude, OpenAI, Gemini, Git, PyTorch). |
| **Projetos / ML** | **SnapBrick AI Showcase** | Card estruturado de Visão Computacional com pipeline de dados sintéticos (BlenderProc) e YOLOv11. |
| **SEO & Semântica** | **Schema.org & Canonical** | Dados estruturados `Person` (JSON-LD) para rich snippets no Google e tag canônica anti-duplicação. |
| **Acessibilidade** | **a11y Rigoroso** | `aria-label`, `aria-pressed`, `role="group"`, `aria-hidden` e suporte a `prefers-reduced-motion`. |

---

## 🛠️ Arquitetura Técnica

```text
+-------------------------------------------------------------------------+
|                               Browser                                   |
|                                                                         |
|   +-----------------------------------------------------------------+   |
|   |                          index.html                             |   |
|   |  - Tailwind CSS + Import Maps (ESM: React 18 + HTM 3.1.1)       |   |
|   |  - PWA Manifest + Vector Favicon + Schema.org (JSON-LD)         |   |
|   +-----------------------------------------------------------------+   |
|                                   │                                     |
|                                   ▼ (ESM Native Load)                   |
|   +-----------------------------------------------------------------+   |
|   |                          src/app.js                             |   |
|   |  - Global State Orchestrator (Theme, i18n, IntersectionObserver)|   |
|   +-----------------------------------------------------------------+   |
|            │                          │                      │          |
|            ▼                          ▼                      ▼          |
|   +------------------+     +--------------------+   +---------------+   |
|   |    src/data/     |     |  src/components/   |   |  src/config/  |   |
|   | - content.pt.js  |     | - Header.js        |   | - logos.js    |   |
|   | - content.en.js  |     | - Hero.js          |   +---------------+   |
|   | - navigation.js  |     | - Highlights.js    |            │          |
|   +------------------+     | - Stack.js         |            ▼          |
|                            | - Education.js     |   +---------------+   |
|                            | - Contact.js       |   |    assets/    |   |
|                            | - ui/ (TechPill,   |   | - profile.webp|   |
|                            |   ScrollProgress,  |   | - favicon.svg |   |
|                            |   BackToTop, etc.) |   | - logos/tech/ |   |
|                            +--------------------+   +---------------+   |
+-------------------------------------------------------------------------+
```

---

## 🚀 Como Executar Localmente

Como a aplicação roda nativamente sobre ES Modules, não é necessário instalar dependências pesadas nem rodar bundlers:

### Opção 1: NPM Scripts
```bash
npm run dev
# ou
npm start
```

### Opção 2: Python 3
```bash
python3 -m http.server 3333
```

Acesse **[http://localhost:3333](http://localhost:3333)** no seu navegador.

---

## 📂 Estrutura de Arquivos

```text
personal-website/
├── README.md               # Apresentação principal do repositório no GitHub
├── index.html              # Ponto de entrada, importmaps, PWA, SEO Schema.org
├── manifest.json           # Manifesto Web App (PWA)
├── package.json            # Scripts de conveniência
├── assets/                 # Recursos 100% locais (Offline-First)
│   ├── favicon.svg         # Favicon vetorial oficial RG
│   ├── profile.webp        # Foto de perfil otimizada (~29 KB)
│   ├── cv-ronaldy-gomes.pdf# Currículo para download direto
│   └── logos/              # Logotipos locais
│       └── tech/           # SVGs oficiais coloridos (Python, Docker, PyTorch, etc.)
├── src/                    # Código-fonte modular
│   ├── app.js              # Ponto de entrada e estado raiz
│   ├── config/
│   │   └── logos.js        # Mapeamento dinâmico de ícones e logos
│   ├── data/
│   │   ├── content.pt.js   # Conteúdo em Português
│   │   ├── content.en.js   # Conteúdo em Inglês
│   │   └── navigation.js   # Links de navegação
│   └── components/         # Seções e componentes
│       ├── Header.js, Hero.js, Metrics.js, Spotlight.js,
│       ├── Highlights.js, Experience.js, Stack.js, Education.js, Contact.js
│       └── ui/
│           ├── ScrollProgress.js  # Barra de leitura no topo
│           ├── BackToTop.js       # Botão flutuante voltar ao topo
│           ├── TechPill.js        # Pílula com ícone oficial da tecnologia
│           ├── LogoBadge.js       # Badge de empresas e faculdades
│           └── ToggleGroup.js     # Controles de tema e idioma
└── docs/
    └── README.md           # Documentação técnica detalhada e histórico de releases
```

---

## 📜 Licença

Distribuído sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <sub>Desenvolvido com foco em engenharia limpa e alta performance por <strong>Ronaldy Gomes</strong>.</sub>
</div>
