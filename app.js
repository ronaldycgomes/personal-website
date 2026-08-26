import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import htm from "htm";

const html = htm.bind(React.createElement);

const profilePhoto = "./assets/profile.webp";

const logoMap = {
  mercadolivre: { src: "./assets/logos/mercadolivre.png", bg: null },
  soc:          { src: "./assets/logos/soc.svg", bg: "#FFFFFF", darkText: true },
  mazzatech:    { src: "./assets/logos/mazzatech.png", bg: "#FFFFFF", darkText: true },
  zurich:       { src: "./assets/logos/zurich.svg", bg: "#FFFFFF" },
  ufabc:        { src: "./assets/logos/ufabc.svg", bg: "#FFFFFF" },
  etec:         { src: "./assets/logos/etec.png", bg: "#FFFFFF" },
  fiap:         { src: "./assets/logos/fiap.png", bg: null }
};

const techIconMap = {
  "Java":            "./assets/logos/tech/java.svg",
  "Kotlin":          "./assets/logos/tech/kotlin.svg",
  "Go":              "./assets/logos/tech/go.svg",
  "Spring Boot":     "./assets/logos/tech/spring.svg",
  "Spring Security": "./assets/logos/tech/spring.svg",
  "Spring Data":     "./assets/logos/tech/spring.svg",
  "Node.js":         "./assets/logos/tech/nodejs.svg",
  "React":           "./assets/logos/tech/react.svg",
  "TypeScript":      "./assets/logos/tech/typescript.svg",
  "JavaScript":      "./assets/logos/tech/javascript.svg",
  "HTML":            "./assets/logos/tech/html5.svg",
  "CSS":             "./assets/logos/tech/css3.svg",
  "Bootstrap":       "./assets/logos/tech/bootstrap.svg",
  "AWS":             "./assets/logos/tech/aws.svg",
  "EC2":             "./assets/logos/tech/amazonec2.svg",
  "S3":              "./assets/logos/tech/amazons3.svg",
  "Lambda":          "./assets/logos/tech/awslambda.svg",
  "CloudWatch":      "./assets/logos/tech/amazoncloudwatch.svg",
  "DynamoDB":        "./assets/logos/tech/amazondynamodb.svg",
  "API Gateway":     "./assets/logos/tech/amazonapigateway.svg",
  "SNS":             "./assets/logos/tech/aws.svg",
  "SQS":             "./assets/logos/tech/amazonsqs.svg",
  "SES":             "./assets/logos/tech/aws.svg",
  "BigQuery":        "./assets/logos/tech/googlecloud.svg",
  "MongoDB":         "./assets/logos/tech/mongodb.svg",
  "MySQL":           "./assets/logos/tech/mysql.svg",
  "ElasticSearch":   "./assets/logos/tech/elasticsearch.svg",
  "GitHub":          "./assets/logos/tech/github.svg",
  "GitLab":          "./assets/logos/tech/gitlab.svg",
  "Jest":            "./assets/logos/tech/jest.svg",
};

const navLinks = {
  pt: [
    { label: "Experiência", href: "#experience" },
    { label: "Stack",       href: "#stack"       },
    { label: "Formação",    href: "#education"   },
    { label: "Contato",     href: "#contact"     }
  ],
  en: [
    { label: "Experience", href: "#experience" },
    { label: "Stack",      href: "#stack"       },
    { label: "Education",  href: "#education"   },
    { label: "Contact",    href: "#contact"     }
  ]
};

const content = {
  pt: {
    brand: "Ronaldy Gomes",
    hero: {
      eyebrow: "Software Engineer · Anti-fraud · Cloud · AI",
      title: "Ronaldy Gomes",
      subtitle:
        "Engenheiro de software com foco em sistemas escaláveis, prevenção a fraudes e IA aplicada ao desenvolvimento.",
      summary:
        "Atuo no Mercado Livre protegendo milhões de transações com microsserviços resilientes, observabilidade e decisões orientadas por dados. Minha base une backend forte, visão full stack, preocupação com qualidade e uso prático de IA para acelerar entregas com responsabilidade.",
      primaryCta: "Falar por e-mail",
      secondaryCta: "Ver LinkedIn",
      badgeTitle: "Atuação atual",
      badgeBody: "Prevenção a fraudes no Mercado Livre, com foco em performance, segurança e evolução contínua.",
      photoAlt: "Foto de perfil de Ronaldy Gomes"
    },
    metrics: [
      {
        label: "Experiência",
        value: "3+ anos em engenharia de software"
      },
      {
        label: "Base",
        value: "São Paulo, Brasil"
      },
      {
        label: "Especialidade",
        value: "Java, Kotlin, Go, AWS e observabilidade"
      }
    ],
    spotlight: {
      overview: {
        eyebrow: "Visão geral",
        title: "Código com impacto real em escala latino-americana.",
        body:
          "Minha atuação combina arquitetura, resiliência, segurança e aceleração via IA para entregar software confiável em ambientes de alto volume."
      },
      contacts: {
        eyebrow: "Contato",
        title: "Canais principais",
        ctaTitle: "Vamos conversar",
        items: [
          { label: "E-mail", value: "gomesronaldy@hotmail.com", href: "mailto:gomesronaldy@hotmail.com", icon: "email" },
          { label: "Telefone", value: "+55 13 97416-3101", href: "tel:+5513974163101", icon: "phone" },
          { label: "LinkedIn", value: "ronaldy-gomes", href: "https://www.linkedin.com/in/ronaldy-gomes", icon: "linkedin" },
          { label: "GitHub", value: "ronaldycgomes", href: "https://github.com/ronaldycgomes", icon: "github" }
        ]
      }
    },
    highlights: {
      eyebrow: "Destaques",
      title: "O que define meu perfil",
      items: [
        {
          icon: "⚡",
          title: "Escalabilidade com responsabilidade",
          body: "Construção e manutenção de microsserviços seguros, resilientes e preparados para alto volume."
        },
        {
          icon: "🤖",
          title: "IA como acelerador",
          body: "Uso de Cursor, Windsurf, GitHub Copilot e OpenAI Codex para automatizar etapas e elevar produtividade."
        },
        {
          icon: "🛡️",
          title: "Qualidade desde a base",
          body: "Foco em testes unitários, integração, end-to-end, código limpo e arquitetura sustentável."
        },
        {
          icon: "🤝",
          title: "Execução colaborativa",
          body: "Trabalho próximo com produto, QA e stakeholders para transformar regra de negócio em software confiável."
        }
      ]
    },
    experience: {
      eyebrow: "Experiência",
      title: "Trajetória"
    },
    stack: {
      eyebrow: "Stack",
      title: "Tecnologias e ferramentas",
      intro:
        "Minha atuação passa por backend, frontend, mobile, cloud e observabilidade. Tenho maior profundidade em Java/Kotlin, AWS e construção de sistemas distribuídos."
    },
    education: {
      eyebrow: "Formação",
      title: "Base acadêmica"
    },
    certs: {
      eyebrow: "Certificações",
      title: "Aprendizado contínuo"
    },
    skills: {
      eyebrow: "Competências",
      title: "Pontos fortes"
    },
    personal: {
      eyebrow: "Além do trabalho",
      title: "Interesses pessoais",
      body:
        "Fora do código, sou saxofonista com 10 anos de experiência e entusiasta de automobilismo. Criatividade, ritmo e precisão também aparecem na forma como construo produtos."
    },
    jobs: [
      {
        company: "Mercado Livre",
        role: "Software Developer",
        period: "Dez 2024 - Atual",
        location: "São Paulo, Brasil",
        logo: logoMap.mercadolivre.src,
        logoBg: logoMap.mercadolivre.bg,
        fallback: "ML",
        summary: "Prevenção a fraudes em um ecossistema com milhões de transações e alta exigência de disponibilidade.",
        bullets: [
          "Desenvolvimento de microsserviços de alta performance para prevenção a fraudes.",
          "Criação de integrações estratégicas no ecossistema MELI.",
          "Análise de métricas de observabilidade para otimizar fluxos e garantir alta disponibilidade.",
          "Uso de IA para acelerar desenvolvimento e apoiar estratégias de detecção.",
          "Foco em testes, código limpo e arquitetura evolutiva."
        ]
      },
      {
        company: "SOC",
        role: "Desenvolvedor de Software",
        period: "Dez 2022 - Dez 2024",
        location: "Brasil",
        logo: logoMap.soc.src,
        logoBg: logoMap.soc.bg,
        fallback: "SOC",
        summary: "Atuação full stack com produto, integrações, frontend, APIs e melhoria contínua do sistema.",
        bullets: [
          "Desenvolvimento de frontend para demandas da área de produto.",
          "Implementação e manutenção de APIs REST, SOAP e WebServices.",
          "Documentação técnica e funcional para apoiar o time.",
          "Práticas ágeis, SOLID, Design Patterns e testes unitários.",
          "Atuação em mobile com Kotlin e Swift em abordagem WebView."
        ]
      },
      {
        company: "mazzatech",
        role: "Analista de aplicações de TI",
        period: "Abr 2022 - Out 2022",
        location: "São Paulo, Brasil",
        logo: logoMap.mazzatech.src,
        logoBg: logoMap.mazzatech.bg,
        fallback: "MZ",
        summary: "Integrações, mapeamento de software, documentação e eficiência operacional em contexto regional.",
        bullets: [
          "Levantamento de requisitos e mapeamento de software na América do Sul.",
          "Criação e acompanhamento de integrações entre aplicações locais e web.",
          "Documentação técnica e de segurança cibernética.",
          "Suporte a usuários, automações e análises para melhoria de usabilidade."
        ]
      },
      {
        company: "Zurich Santander Insurance America",
        role: "Estagiário em sustentação de sistemas",
        period: "Jun 2021 - Mar 2022",
        location: "São Paulo, Brasil",
        logo: logoMap.zurich.src,
        fallback: "ZI",
        summary: "Sustentação, monitoramento e apoio à confiabilidade operacional dos sistemas.",
        bullets: [
          "Monitoramento de desempenho de sistemas e análise de causa raiz de incidentes.",
          "Atendimento de chamados e suporte a usuários internos.",
          "Configuração de softwares e documentação técnica.",
          "Colaboração em melhorias de sistemas e rotinas de controle fiscal da área."
        ]
      }
    ],
    stackGroups: [
      {
        title: "Backend",
        items: ["Java", "Kotlin", "Go", "Spring Boot", "Spring Security", "Spring Data", "Hibernate", "Node.js"]
      },
      {
        title: "Frontend",
        items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap"]
      },
      {
        title: "Cloud & Data",
        items: ["AWS", "EC2", "S3", "Lambda", "CloudWatch", "DynamoDB", "API Gateway", "SNS", "SQS", "SES", "BigQuery"]
      },
      {
        title: "Qualidade & Ferramentas",
        items: ["JUnit", "Mockito", "Jest", "GitHub", "GitLab", "ElasticSearch", "MongoDB", "MySQL", "Twilio"]
      }
    ],
    schools: [
      {
        name: "Universidade Federal do ABC",
        course: "Bacharelado em Ciência e Tecnologia / Ciência da Computação",
        period: "2019 - 2025",
        logo: logoMap.ufabc.src,
        fallback: "UF"
      },
      {
        name: "FIAP",
        course: "Análise e Desenvolvimento de Sistemas",
        period: "2022 - 2023",
        logo: logoMap.fiap.src,
        logoBg: logoMap.fiap.bg,
        fallback: "FI"
      },
      {
        name: "ETEC - Escola Técnica Estadual de São Paulo",
        course: "Técnico em Mecânica",
        period: "2017 - 2018",
        logo: logoMap.etec.src,
        logoBg: logoMap.etec.bg,
        fallback: "ET"
      }
    ],
    certsList: [
      "Formação Certificação Java",
      "AWS Educate Introduction to Generative AI",
      "Claude Code in Action",
      "Fundamentos de finanças - FGV",
      "Dart: criando e manipulando variáveis e listas"
    ],
    skillsList: ["Claude Skills", "Escalabilidade e observabilidade", "Google BigQuery", "Comunicação", "Trabalho em equipe", "Flexibilidade"]
  },
  en: {
    brand: "Ronaldy Gomes",
    hero: {
      eyebrow: "Software Engineer · Anti-fraud · Cloud · AI",
      title: "Ronaldy Gomes",
      subtitle:
        "Software engineer focused on scalable systems, fraud prevention, and AI-assisted development.",
      summary:
        "I currently work at Mercado Livre protecting millions of transactions through resilient microservices, observability, and data-informed decision making. My background blends strong backend foundations, full-stack execution, quality-first engineering, and practical use of AI to speed up delivery with rigor.",
      primaryCta: "Send email",
      secondaryCta: "Open LinkedIn",
      badgeTitle: "Current work",
      badgeBody: "Fraud prevention at Mercado Livre with a focus on performance, security, and continuous evolution.",
      photoAlt: "Profile photo of Ronaldy Gomes"
    },
    metrics: [
      {
        label: "Experience",
        value: "3+ years in software engineering"
      },
      {
        label: "Location",
        value: "Sao Paulo, Brazil"
      },
      {
        label: "Specialty",
        value: "Java, Kotlin, Go, AWS, and observability"
      }
    ],
    spotlight: {
      overview: {
        eyebrow: "Overview",
        title: "Engineering with real impact at Latin American scale.",
        body:
          "My work combines architecture, resilience, security, and AI acceleration to deliver reliable software in high-volume environments."
      },
      contacts: {
        eyebrow: "Contact",
        title: "Main channels",
        ctaTitle: "Let's connect",
        items: [
          { label: "Email", value: "gomesronaldy@hotmail.com", href: "mailto:gomesronaldy@hotmail.com", icon: "email" },
          { label: "Phone", value: "+55 13 97416-3101", href: "tel:+5513974163101", icon: "phone" },
          { label: "LinkedIn", value: "ronaldy-gomes", href: "https://www.linkedin.com/in/ronaldy-gomes", icon: "linkedin" },
          { label: "GitHub", value: "ronaldycgomes", href: "https://github.com/ronaldycgomes", icon: "github" }
        ]
      }
    },
    highlights: {
      eyebrow: "Highlights",
      title: "What defines my profile",
      items: [
        {
          icon: "⚡",
          title: "Scalability with ownership",
          body: "Building and maintaining secure, resilient microservices designed for high-throughput environments."
        },
        {
          icon: "🤖",
          title: "AI as leverage",
          body: "Using Cursor, Windsurf, GitHub Copilot, and OpenAI Codex to automate workflows and raise productivity."
        },
        {
          icon: "🛡️",
          title: "Quality from the ground up",
          body: "Strong attention to unit, integration, and end-to-end testing, clean code, and sustainable architecture."
        },
        {
          icon: "🤝",
          title: "Collaborative execution",
          body: "Working closely with product, QA, and stakeholders to turn business rules into reliable software."
        }
      ]
    },
    experience: {
      eyebrow: "Experience",
      title: "Career path"
    },
    stack: {
      eyebrow: "Stack",
      title: "Technologies and tooling",
      intro:
        "My work spans backend, frontend, mobile, cloud, and observability. I have deeper expertise in Java/Kotlin, AWS, and distributed systems."
    },
    education: {
      eyebrow: "Education",
      title: "Academic foundation"
    },
    certs: {
      eyebrow: "Certificates",
      title: "Continuous learning"
    },
    skills: {
      eyebrow: "Strengths",
      title: "Core skills"
    },
    personal: {
      eyebrow: "Beyond work",
      title: "Personal interests",
      body:
        "Outside software, I am a saxophonist with 10 years of experience and a motorsport enthusiast. Creativity, rhythm, and precision also shape how I build products."
    },
    jobs: [
      {
        company: "Mercado Livre",
        role: "Software Developer",
        period: "Dec 2024 - Present",
        location: "Sao Paulo, Brazil",
        logo: logoMap.mercadolivre.src,
        logoBg: logoMap.mercadolivre.bg,
        fallback: "ML",
        summary: "Fraud prevention in an ecosystem with millions of transactions and strong availability requirements.",
        bullets: [
          "Built high-performance microservices for fraud prevention scenarios.",
          "Delivered strategic integrations across the MELI ecosystem.",
          "Used observability data to optimize flows and increase availability.",
          "Applied AI to speed up development and support detection workflows.",
          "Kept a strong focus on testing, clean code, and evolvable architecture."
        ]
      },
      {
        company: "SOC",
        role: "Software Developer",
        period: "Dec 2022 - Dec 2024",
        location: "Brazil",
        logo: logoMap.soc.src,
        logoBg: logoMap.soc.bg,
        fallback: "SOC",
        summary: "Full-stack execution across product demands, integrations, frontend, APIs, and continuous improvement.",
        bullets: [
          "Built frontend features for product-driven requests.",
          "Implemented and maintained REST, SOAP, and WebServices APIs.",
          "Produced technical and functional documentation.",
          "Applied agile practices, SOLID principles, design patterns, and unit testing.",
          "Contributed to mobile demands using Kotlin and Swift in a WebView approach."
        ]
      },
      {
        company: "mazzatech",
        role: "IT Applications Analyst",
        period: "Apr 2022 - Oct 2022",
        location: "Sao Paulo, Brazil",
        logo: logoMap.mazzatech.src,
        logoBg: logoMap.mazzatech.bg,
        fallback: "MZ",
        summary: "Integrations, software mapping, documentation, and operational efficiency in a regional context.",
        bullets: [
          "Handled requirements gathering and software mapping across South America.",
          "Designed integrations between local and web applications.",
          "Created technical and cybersecurity documentation.",
          "Supported users, internal automations, and usability improvements."
        ]
      },
      {
        company: "Zurich Santander Insurance America",
        role: "Systems Support Intern",
        period: "Jun 2021 - Mar 2022",
        location: "Sao Paulo, Brazil",
        logo: logoMap.zurich.src,
        fallback: "ZI",
        summary: "System support, monitoring, and operational reliability work.",
        bullets: [
          "Monitored system performance and investigated root causes for incidents.",
          "Supported internal users and configured software and systems.",
          "Maintained technical documentation.",
          "Collaborated on system improvements and IT fiscal routines."
        ]
      }
    ],
    stackGroups: [
      {
        title: "Backend",
        items: ["Java", "Kotlin", "Go", "Spring Boot", "Spring Security", "Spring Data", "Hibernate", "Node.js"]
      },
      {
        title: "Frontend",
        items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap"]
      },
      {
        title: "Cloud & Data",
        items: ["AWS", "EC2", "S3", "Lambda", "CloudWatch", "DynamoDB", "API Gateway", "SNS", "SQS", "SES", "BigQuery"]
      },
      {
        title: "Quality & Tools",
        items: ["JUnit", "Mockito", "Jest", "GitHub", "GitLab", "ElasticSearch", "MongoDB", "MySQL", "Twilio"]
      }
    ],
    schools: [
      {
        name: "Federal University of ABC",
        course: "Bachelor's degree in Science and Technology / Computer Science",
        period: "2019 - 2025",
        logo: logoMap.ufabc.src,
        fallback: "UF"
      },
      {
        name: "FIAP",
        course: "Systems Analysis and Development",
        period: "2022 - 2023",
        logo: logoMap.fiap.src,
        logoBg: logoMap.fiap.bg,
        fallback: "FI"
      },
      {
        name: "ETEC - Technical State School of Sao Paulo",
        course: "Technical degree in Mechanics",
        period: "2017 - 2018",
        logo: logoMap.etec.src,
        logoBg: logoMap.etec.bg,
        fallback: "ET"
      }
    ],
    certsList: [
      "Java Certification Track",
      "AWS Educate Introduction to Generative AI",
      "Claude Code in Action",
      "Finance Fundamentals - FGV",
      "Dart: variables and lists"
    ],
    skillsList: ["Claude Skills", "Scalability and observability", "Google BigQuery", "Communication", "Teamwork", "Adaptability"]
  }
};

function getAutoTheme() {
  const hour = new Date().getHours();
  return hour >= 18 || hour < 6 ? "dark" : "light";
}

function LogoBadge({ logo, logoBg, fallback, alt }) {
  const [failed, setFailed] = useState(false);

  if (logo && !failed) {
    const bgStyle = logoBg ? { backgroundColor: logoBg } : {};
    const containerCls = logoBg
      ? "h-14 w-14 shrink-0 overflow-hidden rounded-2xl p-2"
      : "h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/95 p-2 dark:border-white/10 dark:bg-white/5";
    return html`
      <div className=${containerCls} style=${bgStyle}>
        <img className="h-full w-full object-contain" src=${logo} alt=${alt} onError=${() => setFailed(true)} />
      </div>
    `;
  }

  return html`
    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-slate-200/90 bg-white text-sm font-extrabold text-cyan-900 dark:border-white/10 dark:bg-white/5 dark:text-[#98dade]">
      <span>${fallback}</span>
    </div>
  `;
}

function TechPill({ name }) {
  const icon = techIconMap[name];
  // Icons from Simple Icons are black SVGs — invert them to white in dark mode.
  // Colored devicon icons (React, TypeScript, AWS orange, etc.) are excluded.
  const darkInvertSet = new Set([
    "GitHub", "EC2", "S3", "Lambda", "CloudWatch", "DynamoDB", "API Gateway", "SQS"
  ]);
  const needsInvert = darkInvertSet.has(name);
  return html`
    <li className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
      ${icon ? html`<img src=${icon} alt=${name} className=${`h-4 w-4 shrink-0 object-contain${needsInvert ? " dark:invert" : ""}`} />` : null}
      ${name}
    </li>
  `;
}

const contactSvgs = {
  email: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.52 5.52l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>',
  linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  github: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>'
};

function ContactIcon({ icon }) {
  const svg = contactSvgs[icon] || "";
  return html`<span
    aria-hidden="true"
    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300"
    dangerouslySetInnerHTML=${{ __html: svg }}
  />`;
}

function ToggleGroup({ options, value, onChange, label }) {
  return html`
    <div
      role="group"
      aria-label=${label || "Opções"}
      className="inline-flex w-auto rounded-full border border-slate-200/90 bg-white/95 p-1 shadow-sm dark:border-white/10 dark:bg-white/5"
    >
      ${options.map(
        (option) => html`
          <button
            key=${option.value}
            aria-pressed=${value === option.value ? "true" : "false"}
            aria-label=${option.ariaLabel || option.label}
            className=${`rounded-full px-3 py-2 text-sm transition ${
              value === option.value
                ? "bg-slate-900 text-white dark:bg-[#ff9464]/15 dark:text-white"
                : "text-slate-600 dark:text-slate-300"
            }`}
            type="button"
            onClick=${() => onChange(option.value)}
          >
            ${option.label}
          </button>
        `
      )}
    </div>
  `;
}

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("portfolio-lang") || "pt");
  const [themePreference, setThemePreference] = useState(() => localStorage.getItem("portfolio-theme") || "auto");
  const [activeSection, setActiveSection] = useState("hero");
  const locale = useMemo(() => content[lang], [lang]);
  const theme = themePreference === "auto" ? getAutoTheme() : themePreference;

  useEffect(() => {
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = locale.brand + " | Software Engineer";
  }, [lang, locale.brand]);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", themePreference);
  }, [themePreference]);

  useEffect(() => {
    document.body.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");

    const syncTheme = () => {
      if (themePreference === "auto") {
        const nextTheme = getAutoTheme();
        document.body.dataset.theme = nextTheme;
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
      }
    };

    document.addEventListener("visibilitychange", syncTheme);
    window.addEventListener("focus", syncTheme);

    return () => {
      document.removeEventListener("visibilitychange", syncTheme);
      window.removeEventListener("focus", syncTheme);
    };
  }, [theme, themePreference]);

  // Active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Scroll reveal
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const vh = window.innerHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.getAttribute("data-reveal-delay") || "0", 10);
            setTimeout(() => entry.target.classList.add("is-revealed"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -28px 0px" }
    );

    elements.forEach((el) => {
      const { top } = el.getBoundingClientRect();
      if (top > vh * 0.92) {
        el.classList.add("reveal-pending");
      } else {
        el.classList.add("is-revealed");
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return html`
    <div
      className=${`min-h-screen ${
        theme === "dark" ? "bg-hero-dark text-slate-100" : "bg-hero-light text-slate-900"
      }`}
    >
      <div className="mx-auto w-[min(1200px,calc(100%-32px))] py-6 pb-18 max-sm:w-[min(100%-20px,1200px)] max-sm:pt-4">
      <header className="sticky top-4 z-30 mb-6 rounded-[28px] border border-slate-200/80 bg-white/80 px-4 py-3 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep md:rounded-full">
        <div className="flex items-center justify-between gap-3">
          <a className="inline-flex shrink-0 items-center gap-3 no-underline" href="#hero">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-orange-500 to-cyan-900 font-bold text-white">
              RG
            </span>
            <span className="hidden sm:inline font-bold tracking-[0.02em]">${locale.brand}</span>
          </a>

          <nav className="hidden items-center gap-5 md:flex">
            ${navLinks[lang].map(
              (link) => html`
                <a
                  key=${link.href}
                  href=${link.href}
                  className=${`text-sm no-underline transition-colors ${
                    link.href === "#" + activeSection
                      ? "font-semibold text-slate-900 dark:text-white"
                      : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  ${link.label}
                </a>
              `
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <${ToggleGroup}
              label=${lang === "pt" ? "Selecionar idioma" : "Select language"}
              options=${[
                { label: "\uD83C\uDDE7\uD83C\uDDF7 PT", value: "pt", ariaLabel: "Português" },
                { label: "\uD83C\uDDFA\uD83C\uDDF8 EN", value: "en", ariaLabel: "English" }
              ]}
              value=${lang}
              onChange=${setLang}
            />
            <${ToggleGroup}
              label=${lang === "pt" ? "Selecionar tema" : "Select theme"}
              options=${[
                { label: "Auto", value: "auto", ariaLabel: lang === "pt" ? "Tema Automático" : "Auto Theme" },
                { label: "Light", value: "light", ariaLabel: lang === "pt" ? "Tema Claro" : "Light Theme" },
                { label: "Dark", value: "dark", ariaLabel: lang === "pt" ? "Tema Escuro" : "Dark Theme" }
              ]}
              value=${themePreference}
              onChange=${setThemePreference}
            />
          </div>
        </div>

        <nav className="-mx-1 mt-2 flex overflow-x-auto px-1 pb-0.5 md:hidden" style=${{ scrollbarWidth: "none" }}>
          ${navLinks[lang].map(
            (link) => html`
              <a
                key=${link.href}
                href=${link.href}
                className=${`mr-1 shrink-0 rounded-full px-3 py-1.5 text-sm no-underline transition-colors ${
                  link.href === "#" + activeSection
                    ? "bg-slate-900 text-white dark:bg-white/15 dark:text-white"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
                }`}
              >
                ${link.label}
              </a>
            `
          )}
        </nav>
      </header>

      <main>
        <section className="grid gap-6 py-7 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)]" id="hero">
          <article data-reveal="" className="order-1 relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7 lg:order-1">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-orange-200/60 blur-2xl dark:bg-[#ff9464]/10"></div>
            <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.hero.eyebrow}</p>
            <h1 className="max-w-[9ch] font-serif text-[clamp(3rem,9vw,5.8rem)] leading-[0.94]">${locale.hero.title}</h1>
            <p className="mt-4 text-[clamp(1.15rem,2.6vw,1.55rem)] text-cyan-900 dark:text-[#98dade]">${locale.hero.subtitle}</p>
            <p className="mt-5 max-w-3xl text-[0.98rem] leading-8 text-slate-600 dark:text-slate-300 sm:text-base">${locale.hero.summary}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-cyan-900 px-5 text-center font-bold text-white no-underline sm:w-auto"
                href="mailto:gomesronaldy@hotmail.com"
              >
                ${locale.hero.primaryCta}
              </a>
              <a
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-200/90 bg-white px-5 text-center font-bold no-underline shadow-sm dark:border-white/10 dark:bg-white/5 sm:w-auto"
                href="https://www.linkedin.com/in/ronaldy-gomes"
                target="_blank"
                rel="noopener noreferrer"
              >
                ${locale.hero.secondaryCta}
              </a>
            </div>
          </article>

          <aside data-reveal="" data-reveal-delay="120" className="order-2 relative grid gap-4 overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7 lg:order-2">
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-sky-200/60 blur-2xl dark:bg-[#ff9464]/10"></div>
            <div className="relative min-h-[320px] rounded-[24px] border border-slate-200/80 bg-slate-50/60 p-2.5 dark:border-white/10 sm:min-h-[460px] sm:rounded-[28px] sm:p-3">
              <img
                className="min-h-[300px] w-full rounded-[20px] object-cover [object-position:center_top] sm:min-h-[432px] sm:rounded-[22px]"
                src=${profilePhoto}
                alt=${locale.hero.photoAlt}
              />
              <div className="absolute bottom-3 right-3 max-w-[170px] rounded-[18px] bg-slate-900/80 px-3 py-2.5 text-slate-50 shadow-2xl sm:bottom-5 sm:right-5 sm:max-w-[220px] sm:rounded-[20px] sm:px-4 sm:py-3">
                <strong>${locale.hero.badgeTitle}</strong>
                <span className="mt-1 block text-sm text-slate-200">${locale.hero.badgeBody}</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 py-7 md:grid-cols-3">
          ${locale.metrics.map(
            (metric, i) => html`
              <article
                data-reveal=""
                data-reveal-delay=${i * 80}
                className="rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px]"
                key=${metric.label}
              >
                <span className="mb-2 block text-sm text-slate-500 dark:text-slate-300">${metric.label}</span>
                <strong className="block text-[1.08rem] leading-7">${metric.value}</strong>
              </article>
            `
          )}
        </section>

        <section className="py-7">
          <article data-reveal="" className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-8">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-orange-200/60 blur-2xl dark:bg-[#ff9464]/10"></div>
            <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.spotlight.overview.eyebrow}</p>
            <h2 className="max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.spotlight.overview.title}</h2>
            <p className="mt-5 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">${locale.spotlight.overview.body}</p>
          </article>
        </section>

        <section className="py-7">
          <div className="max-w-[54rem]">
            <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.highlights.eyebrow}</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.highlights.title}</h2>
          </div>
          <div className="mt-6 grid gap-[18px] lg:grid-cols-4">
            ${locale.highlights.items.map(
              (item, i) => html`
                <article
                  data-reveal=""
                  data-reveal-delay=${i * 90}
                  className="rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-[22px]"
                  key=${item.title}
                >
                  <div className="mb-3 text-2xl">${item.icon}</div>
                  <h3 className="text-[1.08rem]">${item.title}</h3>
                  <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">${item.body}</p>
                </article>
              `
            )}
          </div>
        </section>

        <section className="py-7" id="experience">
          <div className="max-w-[54rem]">
            <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.experience.eyebrow}</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.experience.title}</h2>
          </div>

          <div className="mt-6 grid gap-[18px]">
            ${locale.jobs.map(
              (job, i) => html`
                <article
                  data-reveal=""
                  data-reveal-delay=${i * 70}
                  className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7"
                  key=${job.company}
                >
                  <div className="grid gap-[18px] sm:flex sm:items-start">
                    <${LogoBadge} logo=${job.logo} logoBg=${job.logoBg} fallback=${job.fallback} alt=${job.company} />
                    <div>
                      <h3 className="text-[1.08rem]">${job.role} · ${job.company}</h3>
                      <div className="mt-3 flex flex-wrap gap-2.5">
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                          ${job.period}
                        </span>
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                          ${job.location}
                        </span>
                      </div>
                      <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">${job.summary}</p>
                    </div>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-[18px] leading-7 text-slate-600 dark:text-slate-300">
                    ${job.bullets.map((bullet) => html`<li key=${bullet}>${bullet}</li>`)}
                  </ul>
                </article>
              `
            )}
          </div>
        </section>

        <section className="grid gap-6 py-7 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]" id="stack">
          <div data-reveal="">
            <div className="max-w-[54rem]">
              <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.stack.eyebrow}</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.stack.title}</h2>
            </div>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">${locale.stack.intro}</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            ${locale.stackGroups.map(
              (group, i) => html`
                <article
                  data-reveal=""
                  data-reveal-delay=${i * 80}
                  className="rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7"
                  key=${group.title}
                >
                  <h3 className="text-[1.08rem]">${group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    ${group.items.map((item) => html`<${TechPill} key=${item} name=${item} />`)}
                  </ul>
                </article>
              `
            )}
          </div>
        </section>

        <section className="grid gap-6 py-7 lg:grid-cols-2" id="education">
          <article data-reveal="" className="rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7">
            <div className="max-w-[54rem]">
              <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.education.eyebrow}</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.education.title}</h2>
            </div>

            <div className="mt-5 grid gap-3.5">
              ${locale.schools.map(
                (school) => html`
                  <article
                    className="grid gap-4 rounded-[20px] border border-slate-200/90 bg-slate-50/95 p-4 dark:border-white/10 dark:bg-white/5 sm:grid-cols-[58px_minmax(0,1fr)] sm:items-center sm:rounded-[22px] sm:p-[18px]"
                    key=${school.name}
                  >
                    <${LogoBadge} logo=${school.logo} logoBg=${school.logoBg} fallback=${school.fallback} alt=${school.name} />
                    <div>
                      <h3 className="text-[1.08rem]">${school.name}</h3>
                      <p className="mt-2 text-slate-600 dark:text-slate-300">${school.course}</p>
                      <span className="mt-2 block text-slate-500 dark:text-slate-300">${school.period}</span>
                    </div>
                  </article>
                `
              )}
            </div>
          </article>

          <article data-reveal="" data-reveal-delay="110" className="rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7">
            <div className="max-w-[54rem]">
              <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.certs.eyebrow}</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.certs.title}</h2>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              ${locale.certsList.map(
                (item) => html`
                  <li
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                    key=${item}
                  >
                    ${item}
                  </li>
                `
              )}
            </ul>
          </article>
        </section>

        <section className="grid gap-6 py-7 lg:grid-cols-2">
          <article data-reveal="" className="rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7">
            <div className="max-w-[54rem]">
              <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.skills.eyebrow}</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.skills.title}</h2>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              ${locale.skillsList.map(
                (item) => html`
                  <li
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                    key=${item}
                  >
                    ${item}
                  </li>
                `
              )}
            </ul>
          </article>

          <article data-reveal="" data-reveal-delay="110" className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-sky-200/60 blur-2xl dark:bg-[#ff9464]/10"></div>
            <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.personal.eyebrow}</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.personal.title}</h2>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">${locale.personal.body}</p>
          </article>
        </section>

        <section className="py-7" id="contact">
          <article data-reveal="" className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-orange-200/60 blur-2xl dark:bg-[#ff9464]/10"></div>
            <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.spotlight.contacts.eyebrow}</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.spotlight.contacts.ctaTitle}</h2>
            <div className="mt-5 grid gap-3">
              ${locale.spotlight.contacts.items.map(
                (item) => html`
                  <div
                    className="flex items-center gap-3 border-b border-slate-200/70 py-3 last:border-b-0 last:pb-0 dark:border-white/10"
                    key=${item.label}
                  >
                    <${ContactIcon} icon=${item.icon} />
                    <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-sm text-slate-500 dark:text-slate-300">${item.label}</span>
                      <a className="truncate text-sm" href=${item.href} target=${item.href.startsWith("http") ? "_blank" : null} rel=${item.href.startsWith("http") ? "noopener noreferrer" : null}>${item.value}</a>
                    </div>
                  </div>
                `
              )}
            </div>
          </article>
        </section>
      </main>
      </div>
    </div>
  `;
}

createRoot(document.getElementById("root")).render(html`<${App} />`);
