# Documentação Técnica de Engenharia: Personal Website & Portfolio

## 1. Visão Geral do Projeto

* **URL de Produção:** [https://ronaldycgomes.github.io/personal-website/](https://ronaldycgomes.github.io/personal-website/)

Este projeto é o **Portfólio Profissional** de **Ronaldy Gomes** — *Software Developer & MLOps no Mercado Livre*, atuando nos contextos de **Prevenção a Fraudes**, **MLOps**, **Sistemas Distribuídos de Alta Escala**, **Cloud AWS** e **Developer Experience (DevEx)** acelerada pelos ecossistemas **Claude (Anthropic)**, **OpenAI** e **Google (Gemini)**.

O projeto adota uma **Arquitetura No-Build (Zero-Bundler SPA)**, executando nativamente no navegador através de padrões modernos da web (ES Modules nativos, Import Maps, React 18, HTM e Tailwind CSS).

---

## 2. Arquitetura e Decisões Técnicas

```text
+-------------------------------------------------------------------------+
|                               Browser                                   |
|                                                                         |
|   +-----------------------------------------------------------------+   |
|   |                          index.html                             |   |
|   |  - Tailwind CSS (Play CDN com extensão de tema e cores)         |   |
|   |  - Import Maps (ESM: react@18.3.1, react-dom@18.3.1, htm@3.1.1)  |   |
|   |  - Schema.org (JSON-LD), PWA Manifest, SEO Canônico, OpenGraph  |   |
|   +-----------------------------------------------------------------+   |
|                                   │                                     |
|                                   ▼ (ESM Module Load)                   |
|   +-----------------------------------------------------------------+   |
|   |                          src/app.js                             |   |
|   |  - Orquestrador de Estado Global (Theme, i18n, Observers)       |   |
|   +-----------------------------------------------------------------+   |
|            │                          │                      │          |
|            ▼                          ▼                      ▼          |
|   +------------------+     +--------------------+   +---------------+   |
|   |    src/data/     |     |  src/components/   |   |  src/config/  |   |
|   | - content.pt.js  |     | - Header.js        |   | - logos.js    |   |
|   | - content.en.js  |     | - Hero.js          |   +---------------+   |
|   | - navigation.js  |     | - Metrics.js       |            │          |
|   +------------------+     | - Spotlight.js     |            ▼          |
|                            | - Highlights.js    |   +---------------+   |
|                            | - Experience.js    |   |    assets/    |   |
|                            | - Stack.js         |   | - profile.webp|   |
|                            | - Education.js     |   | - favicon.svg |   |
|                            | - Contact.js       |   | - logos/tech/ |   |
|                            | - ui/ (TechPill,   |   +---------------+   |
|                            |   ScrollProgress,  |                       |
|                            |   BackToTop, etc.) |                       |
|                            +--------------------+                       |
+-------------------------------------------------------------------------+
```

### 2.1. Pilares de Engenharia
* **Arquitetura Modular em `src/`**: Código desacoplado em componentes, dados de tradução e configurações com carregamento nativo via ES Modules.
* **ES Modules & Import Maps**: Mapeamento nativo dos pacotes via `<script type="importmap">` usando `esm.sh`. Dispensa ferramentas como Webpack, Rollup, Vite ou Babel em desenvolvimento.
* **React 18 & HTM (Hyperscript Tagged Markup)**: Provê reatividade, hooks (`useState`, `useEffect`, `useMemo`) e sintaxe declarativa limpa sem JSX transpilado.
* **Tailwind CSS**: Estilização atômica, suporte a dark mode (`dark:`), fontes customizadas (`Lora`) e layout responsivo elástico.
* **Offline-First Assets**: Todos os logos de empresas, tecnologias e imagem de perfil são servidos localmente, eliminando latência externa e riscos de rate-limiting.

---

## 3. Registro de Mudanças (Changelog Histórico)

### ✅ Entregas Concluídas:
1. **Refatoração Arquitetural Modular (`src/`):**
   * Quebra do monólito `app.js` em módulos especializados: `src/data/` (i18n), `src/config/` (logos), `src/components/` (seções) e `src/components/ui/` (componentes reutilizáveis).
2. **Botão de Download de CV em PDF:**
   * Botão de chamada para ação (*CTA*) no Hero com suporte a download direto do currículo em PDF nos dois idiomas (`pt` e `en`).
3. **Botão de Copiar E-mail e Telefone (1-Click Clipboard + Toast Feedback):**
   * Micro-interação no card de contato com animação e tooltip (*"Copiado!"*) ao clicar para copiar e-mail, WhatsApp e telefone.
4. **Canal Direto do WhatsApp:**
   * Inclusão do WhatsApp com mensagem personalizada pré-formatada na seção de contatos.
5. **Higienização de Assets (`assets/`):**
   * Remoção de arquivos duplicados e órfãos (`profile.jpg`, `fiap.jpg`, `ml_full.svg`, `mercadolivre.svg`).
6. **SEO Estruturado (Schema.org / JSON-LD):**
   * Inserção de dados estruturados semânticos `Person` para indexação em rich snippets no Google.
7. **Acessibilidade e Semântica (a11y):**
   * Atributos `aria-label`, `aria-pressed`, `role="group"` e `aria-hidden="true"` implementados nos controles e ícones.
8. **Otimização de Imagem para WebP:**
   * Redução de 93.5% do payload da foto de perfil (~29 KB).
9. **Posicionamento & Copywriting Técnico (MLOps, Fraud Prevention & DevEx):**
   * Atualização de idade (25 anos) e alinhamento de escopo para **MLOps** e **Fraud Prevention** no Mercado Livre.
   * Destaque para atuação em **Developer Experience (DevEx)** utilizando ecossistemas Claude (Anthropic), OpenAI e Google (Gemini).
10. **Novos Ícones Oficiais em SVG:**
   * Adição e mapeamento de ícones oficiais de alta fidelidade em cores para Python, Docker, Claude, OpenAI, Gemini, Git (losango oficial), MLOps, DevEx, Test Automation, Prompt Engineering, PyTorch, FastAPI, PostgreSQL e Blender.
11. **Projeto Pessoal SnapBrick AI:**
   * Substituição da seção de certificações pelo card estruturado do projeto de Visão Computacional SnapBrick AI, com badge de status em desenvolvimento, layout centralizado e tech stack completa (PyTorch, YOLOv11, FastAPI, BlenderProc, React Native, PostgreSQL).
12. **Barra de Progresso de Leitura (ScrollProgress):**
   * Indicador sutil de 2.5px com gradiente no topo do navegador que acompanha a rolagem da página.
13. **Botão Flutuante Voltar ao Topo (BackToTop) & Blindagem de Layout:**
   * Botão com efeito glassmorphism e rolagem suave para o topo ao passar de 350px.
   * Blindagens preventivas de responsividade: grid elástico no Hero (`minmax(0, 0.92fr)`), `overflow-x-hidden` global e dimensionamento adaptativo em dispositivos móveis.
14. **Suporte PWA & Web App Manifest (`manifest.json`):**
   * Manifesto PWA completo para instalação como Web App na tela inicial de smartphones (iOS/Android) com suporte a tema dark/light dinâmico (`theme-color`).
15. **Favicon Vetorial Oficial (`assets/favicon.svg`):**
   * Monograma RG com gradiente de marca e suporte nativo a todas as resoluções e telas Retina.
16. **SEO Canônico & Dados Estruturados Enriquecidos:**
   * Tag canônica (`link rel="canonical"`) e expansão do Schema.org com entidades de MLOps, DevEx e Machine Learning Pipelines.
17. **Indexação Avançada (`robots.txt` & `sitemap.xml`):**
   * Configuração de rastreamento com sitemap multilíngue para Google Search Console e Bing Webmaster Tools.
18. **Otimização de LCP & Hints de Performance:**
   * Preload da foto de perfil, atributos `fetchpriority="high"` e `decoding="async"`, e `preconnect` para CDN de módulos ESM (`esm.sh`).
19. **Calibração de Switches Mobile (Header & ToggleGroup):**
   * Escala fluida e compacta dos botões de tema e idioma em smartphones para eliminar qualquer estouro de largura.

---

## 4. Estrutura de Diretórios Completa

```text
personal-website/
├── README.md               # Apresentação principal do repositório no GitHub
├── index.html              # Ponto de entrada HTML, importmaps, Tailwind CDN e meta tags
├── manifest.json           # Manifesto Web App (PWA)
├── package.json            # Scripts de desenvolvimento e metadados
├── assets/                 # Recursos estáticos 100% locais
│   ├── favicon.svg         # Favicon vetorial oficial RG
│   ├── profile.webp        # Foto de perfil otimizada (WebP ~29KB)
│   ├── cv-ronaldy-gomes.pdf# Currículo para download direto
│   └── logos/              # Vetores e imagens locais
│       ├── *.svg / *.png / *.jpg
│       └── tech/           # SVGs das tecnologias (Python, Docker, PyTorch, etc.)
├── src/                    # Código-fonte modular da aplicação
│   ├── app.js              # Ponto de entrada e estado raiz
│   ├── config/
│   │   └── logos.js        # Mapeamento de logos e ícones
│   ├── data/
│   │   ├── content.pt.js   # Conteúdo em Português
│   │   ├── content.en.js   # Conteúdo em Inglês
│   │   └── navigation.js   # Links de navegação
│   └── components/
│       ├── Header.js, Hero.js, Metrics.js, Spotlight.js,
│       ├── Highlights.js, Experience.js, Stack.js, Education.js, Contact.js
│       └── ui/
│           ├── ScrollProgress.js  # Barra de leitura no topo
│           ├── BackToTop.js       # Botão flutuante voltar ao topo
│           ├── TechPill.js        # Pílula com ícone oficial da tecnologia
│           ├── LogoBadge.js       # Badge de empresas e faculdades
│           ├── ContactIcon.js     # Ícones dos canais de contato
│           └── ToggleGroup.js     # Controles de tema e idioma
└── docs/
    └── README.md           # Esta documentação técnica detalhada
```

---

## 5. Como Executar o Projeto

```bash
# Opção 1: NPM Scripts
npm run dev

# Opção 2: Python 3
python3 -m http.server 3333

# Opção 3: Node.js (npx serve)
npx serve .
```

Acesse **`http://localhost:3333`** no seu navegador.

---

## 6. Próximos Passos de Evolução

| Prioridade | Ação / Melhoria | Impacto Técnico & Negócio | Esforço | Detalhes da Implementação |
| :--- | :--- | :--- | :---: | :--- |
| 🟢 **Baixa** | **Deploy Automatizado via GitHub Actions** | **CI/CD & DevOps** | ~10 min | Workflow de CI/CD para deploy automático na branch `gh-pages` ou Vercel ao commitar na `main`. |
| 🟢 **Baixa** | **Compilação Estática do Tailwind CSS** | **Performance máxima** | ~10 min | Gerar `dist/styles.css` minificado (~12 KB) para eliminar o engine de compilação runtime do CDN em produção. |
| 🟢 **Média** | **Página/Modal Dedicado do SnapBrick AI** | **Portfólio / ML Showcase** | ~30 min | Demonstração interativa do pipeline de inferência com fotos de teste e catálogo de peças. |

---

## 7. Guia de Continuidade de Contexto para Agentes de IA

Para retomar o desenvolvimento deste projeto em uma nova sessão:
1. **Arquivo Fonte de Verdade:** Este arquivo ([`docs/README.md`](file:///Users/ronaldycgomes/Desktop/projects/personal-website/docs/README.md)) e o [`README.md`](file:///Users/ronaldycgomes/Desktop/projects/personal-website/README.md) servem como documentação viva.
2. **Instrução de Continuidade:** Em uma nova sessão, utilize o prompt:
   > *"Leia o arquivo `docs/README.md` e dê continuidade na implementação do item [Nome do Item] da tabela de Próximos Passos."*
