# Documentação do Projeto: Personal Website & Portfolio

## 1. Visão Geral

Este projeto é uma **Landing Page / Portfólio Profissional** de **Ronaldy Gomes** (Engenheiro de Software com foco em sistemas escaláveis, prevenção a fraudes, computação em nuvem AWS e inteligência artificial aplicada ao desenvolvimento).

O projeto adota uma **Arquitetura No-Build (Zero-Bundler SPA)**, executando nativamente no navegador através de padrões modernos da web (ES Modules, Import Maps, React 18, HTM e Tailwind CSS).

---

## 2. Arquitetura e Decisões Técnicas

```
+-------------------------------------------------------------------------+
|                               Browser                                   |
|                                                                         |
|   +-----------------------------------------------------------------+   |
|   |                          index.html                             |   |
|   |  - Tailwind CSS (Play CDN com extensão de tema)                 |   |
|   |  - Import Maps (ESM: react@18.3.1, react-dom@18.3.1, htm@3.1.1)  |   |
|   |  - Schema.org (JSON-LD), Meta SEO, OpenGraph, Scroll Styles     |   |
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
|   | - navigation.js  |     | - Experience.js    |            │          |
|   +------------------+     | - Stack.js         |            ▼          |
|                            | - Education.js     |   +---------------+   |
|                            | - Contact.js       |   |    assets/    |   |
|                            | - ui/ (TechPill,   |   | - profile.webp|   |
|                            |   LogoBadge, etc.) |   | - logos/      |   |
|                            +--------------------+   +---------------+   |
+-------------------------------------------------------------------------+
```

### 2.1. Pilares de Engenharia
- **Arquitetura Modular em `src/`**: Código desacoplado em componentes, dados de tradução e configurações com carregamento nativo via ES Modules.
- **ES Modules & Import Maps**: Mapeamento nativo dos pacotes via `<script type="importmap">` usando `esm.sh`. Dispensa ferramentas como Webpack, Rollup, Vite ou Babel.
- **React 18 & HTM (Hyperscript Tagged Markup)**: Provê reatividade, hooks (`useState`, `useEffect`, `useMemo`) e sintaxe declarativa limpa.
- **Tailwind CSS CDN**: Estilização atômica, suporte a dark mode (`dark:`), fontes customizadas (`Lora`) e layout responsivo.
- **Offline-First Assets**: Todos os logos de empresas, tecnologias e imagem de perfil são servidos localmente, eliminando latência externa e riscos de rate-limiting.

---

## 3. Registro de Mudanças Recentes (Changelog)

### ✅ Melhorias Concluídas:
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

---

## 4. Estrutura de Diretórios

```
personal-website/
├── .gitignore          # Regras de exclusão do Git
├── index.html          # Ponto de entrada HTML, importmaps, Tailwind CDN e meta tags
├── assets/             # Recursos estáticos 100% locais
│   ├── profile.webp    # Foto de perfil otimizada (WebP ~29KB)
│   ├── cv-ronaldy-gomes.pdf # Currículo para download direto
│   └── logos/          # Vetores e imagens locais
│       ├── *.svg / *.png / *.jpg
│       └── tech/       # SVGs das tecnologias (Java, Spring, AWS, React, etc.)
├── src/                # Código-fonte modular da aplicação
│   ├── app.js          # Ponto de entrada e estado raiz
│   ├── config/
│   │   └── logos.js    # Mapeamento de logos e ícones
│   ├── data/
│   │   ├── content.pt.js   # Conteúdo em Português
│   │   ├── content.en.js   # Conteúdo em Inglês
│   │   └── navigation.js   # Links de navegação
│   └── components/
│       ├── Header.js
│       ├── Hero.js
│       ├── Metrics.js
│       ├── Spotlight.js
│       ├── Highlights.js
│       ├── Experience.js
│       ├── Stack.js
│       ├── Education.js
│       ├── Contact.js
│       └── ui/
│           ├── LogoBadge.js
│           ├── TechPill.js
│           ├── ContactIcon.js
│           └── ToggleGroup.js
└── docs/               # Documentação técnica de engenharia
    └── README.md       # Esta documentação
```

---

## 5. Como Executar o Projeto

Como o projeto não utiliza etapas de compilação ou empacotamento, basta servi-lo através de qualquer servidor HTTP estático:

```bash
# Opção 1: Python 3
python3 -m http.server 3000

# Opção 2: Node.js (npx serve)
npx serve .
```
Acesse `http://localhost:3000` no seu navegador.

---

## 6. Roadmap de Próximas Evoluções

| Prioridade | Ação / Melhoria | Impacto Técnico & Negócio | Esforço | Detalhes da Implementação |
| :--- | :--- | :--- | :---: | :--- |
| 🟢 **Baixa** | **Favicons Multi-dispositivo & Web App Manifest** | **Experiência Mobile/PWA** | ~10 min | Gerar ícone Apple Touch, `favicon.ico` e arquivo `manifest.json` para permitir salvar o portfólio como atalho na tela inicial do celular. |
| 🟢 **Baixa** | **Barra de Progresso de Scroll no Topo** | **Polimento Visual / UI** | ~5 min | Linha gradiente no topo que indica a porcentagem de leitura da página. |
| 🟢 **Baixa** | **Botão Voltar ao Topo Flutuante** | **Usabilidade Mobile** | ~5 min | Botão sutil com seta que aparece ao rolar mais de 40% da página. |
| 🟢 **Baixa** | **Compilação Estática do Tailwind CSS** | **Performance máxima** | ~15 min | Substituir a engine em runtime do CDN (~3MB) por um arquivo `dist/styles.css` minificado (~12 KB) para eliminar bloqueios de renderização (*FCP*). |

---

## 7. Guia de Continuidade de Contexto para Sessões e Agentes

Para retomar o desenvolvimento deste projeto em uma nova sessão do assistente de IA ou por outros engenheiros:
1. **Arquivo Fonte de Verdade:** Este arquivo ([`docs/README.md`](file:///Users/ronaldycgomes/Desktop/projects/personal-website/docs/README.md)) serve como documentação viva e ponto de partida para qualquer análise.
2. **Instrução de Continuidade:** Em uma nova sessão, utilize o prompt:
   > *"Leia o arquivo `docs/README.md` e dê continuidade na implementação do item [Nome do Item] da tabela de Roadmap."*
