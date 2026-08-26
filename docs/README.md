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
|   |  - Estilos Globais, Meta SEO, OpenGraph, Scroll Transitions     |   |
|   +-----------------------------------------------------------------+   |
|                                   │                                     |
|                                   ▼ (ESM Module Load)                   |
|   +-----------------------------------------------------------------+   |
|   |                            app.js                               |   |
|   |  - i18n Data Store (pt-BR / en-US)                              |   |
|   |  - Theme Management (Dark / Light / Auto com sync de horário)   |   |
|   |  - Intersection Observer (Active Section + Scroll Reveal)       |   |
|   |  - Componentes Reativos (App, TechPill, LogoBadge, ToggleGroup) |   |
|   |  - Renderização via HTM + React 18 DOM Root                     |   |
|   +-----------------------------------------------------------------+   |
|                                   │                                     |
|                                   ▼ (Assets 100% locais)                |
|   +-----------------------------------------------------------------+   |
|   |                           assets/                               |   |
|   |  - profile.webp (29KB), logos locais (empresas, tech icons)     |   |
|   +-----------------------------------------------------------------+   |
+-------------------------------------------------------------------------+
```

### 2.1. Pilares de Engenharia
- **ES Modules & Import Maps**: Mapeamento nativo dos pacotes via `<script type="importmap">` usando `esm.sh`. Dispensa ferramentas como Webpack, Rollup, Vite ou Babel.
- **React 18 & HTM (Hyperscript Tagged Markup)**: Provê reatividade, hooks (`useState`, `useEffect`, `useMemo`) e sintaxe JSX-like através de template literals nativos do JavaScript ES6 (`html\`...\``).
- **Tailwind CSS CDN**: Estilização atômica, suporte a dark mode (`dark:`), fontes customizadas (`Lora`) e layout responsivo.
- **Offline-First Assets**: Todos os logos de empresas, tecnologias e imagem de perfil são servidos localmente, eliminando latência externa e riscos de rate-limiting.

---

## 3. Registro de Mudanças Recentes (Changelog)

### ✅ Otimizações de Alta Prioridade Concluídas:
1. **Compressão e Conversão da Imagem de Perfil para WebP:**
   * Redimensionamento para resolução ideal de exibição com algoritmo Lanczos e conversão para WebP de alta fidelidade.
   * **Resultado:** Redução de **448.18 KB** para **29.20 KB** (**-93.5% de payload**), acelerando expressivamente o *Largest Contentful Paint (LCP)*.
2. **Migração para 100% de Logos Locais (`assets/logos/`):**
   * Substituição de chamadas remotas (Wikimedia Commons e GitHub Avatars) para os arquivos locais:
     * `mercadolivre.png`, `zurich.svg`, `ufabc.svg`, `soc.svg`, `mazzatech.png`, `etec.png`, `fiap.png`.
   * **Resultado:** Eliminação de latência externa e funcionamento 100% resiliente e offline.
3. **Atualização de Cache Busting:**
   * Atualizado `index.html` para carregar `./app.js?v=10`.

---

## 4. Estrutura de Diretórios

```
personal-website/
├── index.html          # Ponto de entrada HTML, importmaps, Tailwind CDN e meta tags
├── app.js              # Código da aplicação React + HTM, i18n, estados e componentes
├── assets/             # Recursos estáticos
│   ├── profile.webp    # Foto de perfil otimizada (WebP de alta fidelidade e ~29KB)
│   ├── profile.jpg     # Foto de perfil original (JPEG otimizado ~57KB)
│   └── logos/          # Vetores e imagens 100% locais (offline-first)
│       ├── *.svg / *.png / *.jpg  # Logotipos de empresas e universidades
│       └── tech/       # SVGs das tecnologias (Java, Spring, AWS, Docker, React, etc.)
└── docs/               # Documentação técnica e de engenharia
    └── README.md       # Esta documentação
```

---

## 5. Módulos e Componentes do Código

### `index.html`
- Configuração do **Tailwind CSS** com extensões de temas (fontes `Lora` e sans-serif, sombras, gradientes para herói claro/escuro).
- Estilos de scroll suave, background em grid sutil com máscara linear e regras de compensação de offset para o header fixo (`scroll-margin-top`).
- Import Map configurado para carregar React 18, React DOM e HTM via CDN `esm.sh`.

### `app.js`
- **Mapeamento de Assets**:
  - `logoMap`: Caminhos locais e estilos de fundo para cada marca.
  - `techIconMap`: Mapeamento de dezenas de tecnologias para seus respectivos arquivos SVG em `assets/logos/tech/`.
- **Dicionário de Conteúdo (`content`)**:
  - Estrutura completa de dados separada por idioma (`pt` e `en`), cobrindo Hero, Métricas, Spotlight, Highlights, Experiência Profissional detalhada, Stacks categorizadas, Formação Acadêmica, Certificações e Informações Pessoais.
- **Componentes**:
  - `LogoBadge`: Renderiza o logo da empresa/escola com tratamento de erro e fallback de iniciais.
  - `TechPill`: Tag de tecnologia com ícone SVG acoplado e tratamento de inversão de cor no tema dark para SVGs monocromáticos.
  - `ContactIcon`: SVGs inline para links de e-mail, telefone, LinkedIn e GitHub.
  - `ToggleGroup`: Seletor de opções em formato de cápsula para troca de idioma e tema.
  - `App`: Componente raiz que orquestra estado global, timers de tema, observadores de scroll e renderiza as seções da página.

---

## 6. Como Executar o Projeto

Como o projeto não utiliza etapas de compilação ou empacotamento, basta servi-lo através de qualquer servidor HTTP estático:

```bash
# Opção 1: Python 3
python3 -m http.server 3000

# Opção 2: Node.js (npx serve)
npx serve .
```
Acesse `http://localhost:3000` no seu navegador.

---

## 7. Roadmap de Melhorias Pendentes

| Prioridade | Ação / Melhoria | Impacto Técnico & Negócio | Esforço | Detalhes da Implementação |
| :--- | :--- | :--- | :---: | :--- |
| 🟡 **Média** | **Modularização do `app.js` em módulos ES** | **Alta manutenibilidade** | ~20 min | Quebrar o monólito de 1.000 linhas em pastas estruturadas (`data/` para textos PT/EN, `components/` para seções e `ui/` para componentes reutilizáveis), mantendo o conceito nativo sem bundler. |
| 🟡 **Média** | **SEO Estruturado (Schema.org / JSON-LD)** | **Indexação no Google** | ~10 min | Inserir marcação semântica `Person` no `<head>` para motores de busca reconhecerem seu cargo, empresa atual (Mercado Livre), formação (UFABC) e links sociais em resultados de busca (*Rich Snippets*). |
| 🟡 **Média** | **Acessibilidade (a11y) & Semântica** | **Conformidade WCAG** | ~10 min | Adicionar atributos `aria-label`, `aria-pressed` e `role` nos seletores de idioma e tema, além de `aria-hidden="true"` nos SVGs decorativos. |
| 🟡 **Média** | **Botão de Copiar E-mail & Feedback de Copiado** | **Melhoria de UX** | ~10 min | Incluir ação de cópia com 1 clique para a área de transferência (*clipboard*) com animação/tooltip ("Copiado!") na seção de contato. |
| 🟡 **Média** | **Botão de Download de CV em PDF** | **Conversão profissional** | ~5 min | Adicionar botão de chamada para ação (*CTA*) no Hero ou Header permitindo download direto do currículo em PDF. |
| 🟢 **Baixa** | **Favicons Multi-dispositivo & Web App Manifest** | **Experiência Mobile/PWA** | ~10 min | Gerar ícone Apple Touch, `favicon.ico` e arquivo `manifest.json` para permitir salvar o portfólio como atalho na tela inicial do celular. |
| 🟢 **Baixa** | **Compilação Estática do Tailwind CSS** | **Performance máxima** | ~15 min | Substituir a engine em runtime do CDN (~3MB) por um arquivo `dist/styles.css` minificado (~12 KB) para eliminar bloqueios de renderização (*FCP*). |

---

## 8. Guia de Continuidade de Contexto para Sessões e Agentes

Para retomar o desenvolvimento deste projeto em uma nova sessão do assistente de IA ou por outros engenheiros:
1. **Arquivo Fonte de Verdade:** Este arquivo ([`docs/README.md`](file:///Users/ronaldycgomes/Desktop/projects/personal-website/docs/README.md)) serve como documentação viva e ponto de partida para qualquer análise.
2. **Instrução de Continuidade:** Em uma nova sessão, utilize o prompt:
   > *"Leia o arquivo `docs/README.md` e dê continuidade na implementação do item [Nome do Item] da tabela de Roadmap."*
