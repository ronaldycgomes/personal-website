import { logoMap } from "../config/logos.js";

export const contentPt = {
  brand: "Ronaldy Gomes",
  hero: {
    eyebrow: "Software Developer · Fraud Prevention · MLOps · Cloud & AI",
    title: "Ronaldy Gomes",
    subtitle:
      "Engenheiro de software focado em sistemas de alta escala, MLOps e IA aplicada à engenharia.",
    summary:
      "Atuo no Mercado Livre no contexto de Prevenção a Fraudes e MLOps, sustentando serviços de tráfego massivo, observabilidade profunda e infraestrutura para modelos. Uno uma base sólida de backend (Java, Kotlin, Go, Python) com o uso intensivo de IA em duas frentes: acelerando a produtividade e experiência dos desenvolvedores (DevEx via ecossistemas Claude, OpenAI e Google) e operando workloads e pipelines de Machine Learning em produção.",
    primaryCta: "Falar por e-mail",
    secondaryCta: "Ver LinkedIn",
    cvCta: "Baixar CV",
    badgeTitle: "Atuação atual",
    badgeBody: "MLOps & Prevenção a Fraudes no Mercado Livre, integrando microsserviços escaláveis e IA.",
    photoAlt: "Foto de perfil de Ronaldy Gomes"
  },
  metrics: [
    {
      label: "Experiência",
      value: "3+ anos construindo software"
    },
    {
      label: "Foco atual",
      value: "MLOps, Escala e DevEx com IA"
    },
    {
      label: "Stack principal",
      value: "Java, Kotlin, Go, Python, AWS & IA"
    }
  ],
  spotlight: {
    overview: {
      eyebrow: "Visão geral",
      title: "Engenharia sólida em escala real e IA aplicada na prática.",
      body:
        "Minha atuação combina arquitetura de microsserviços distribuídos, observabilidade em produção e infraestrutura de MLOps para suportar decisões em tempo real com alta disponibilidade e confiabilidade."
    },
    contacts: {
      eyebrow: "Contato",
      title: "Canais principais",
      ctaTitle: "Vamos conversar",
      items: [
        { label: "E-mail", value: "gomesronaldy@hotmail.com", href: "mailto:gomesronaldy@hotmail.com", icon: "email" },
        { label: "WhatsApp", value: "+55 13 97416-3101", href: "https://wa.me/5513974163101?text=Ol%C3%A1%20Ronaldy,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!", icon: "whatsapp" },
        { label: "LinkedIn", value: "ronaldy-gomes", href: "https://www.linkedin.com/in/ronaldy-gomes", icon: "linkedin" },
        { label: "GitHub", value: "ronaldycgomes", href: "https://github.com/ronaldycgomes", icon: "github" }
      ]
    }
  },
  highlights: {
    eyebrow: "Destaques",
    title: "O que define meu trabalho",
    items: [
      {
        icon: "⚡",
        title: "Escala e Confiabilidade",
        body: "Construção e sustentação de serviços preparados para tráfego massivo, baixa latência e alta disponibilidade no Mercado Livre."
      },
      {
        icon: "🤖",
        title: "IA em DevEx (Claude, OpenAI, Google)",
        body: "Aplicação dos ecossistemas de ponta de IA para acelerar a produtividade do time de engenharia, automação de testes e geração de código."
      },
      {
        icon: "🧠",
        title: "MLOps & Python para ML",
        body: "Operacionalização do ciclo de vida de modelos, pipelines de dados/inferência e boas práticas de engenharia de software aplicadas a Machine Learning."
      },
      {
        icon: "📊",
        title: "Observabilidade Contínua",
        body: "Acompanhamento rigoroso de telemetria, tracing distribuído e latência P99 para sustentação proativa e prevenção de incidentes."
      }
    ]
  },
  experience: {
    eyebrow: "Experiência",
    title: "Trajetória profissional"
  },
  stack: {
    eyebrow: "Stack",
    title: "Tecnologias e ferramentas",
    intro:
      "Experiência prática em backend distribuído, cloud, observabilidade e expansão contínua em MLOps, Python para dados e ecossistemas de IA."
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
      "Tenho 25 anos, sou saxofonista há uma década e entusiasta de automobilismo. Ritmo, precisão técnica e atenção aos detalhes são princípios que trago da música diretamente para a engenharia."
  },
  jobs: [
    {
      company: "Mercado Livre",
      role: "Software Developer (Fraud Prevention & MLOps)",
      period: "Dez 2024 - Atual",
      location: "São Paulo, Brasil",
      logo: logoMap.mercadolivre.src,
      logoBg: logoMap.mercadolivre.bg,
      fallback: "ML",
      summary: "Atuação no contexto de Prevenção a Fraudes e MLOps, sustentando serviços de alta volumetria e acelerando a engenharia com IA.",
      bullets: [
        "Desenvolvimento e sustentação de microsserviços de alta concorrência em Java, Kotlin e Go.",
        "Atuação em MLOps: suporte à infraestrutura, pipelines de dados e ciclo de vida de modelos de Machine Learning com Python para detecção de fraudes.",
        "Aceleração de Developer Experience (DevEx) utilizando ativamente os ecossistemas Claude (Anthropic), OpenAI e Google para produtividade, testes e automação.",
        "Observabilidade profunda com monitoramento de métricas de saúde, latência P99 e disponibilidade de pipelines críticos.",
        "Engenharia focada em código limpo, testes automatizados rigorosos e evolução arquitetural sustentável."
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
      summary: "Atuação full stack com foco em integrações, APIs corporativas, frontend e mobile.",
      bullets: [
        "Desenvolvimento e manutenção de APIs REST, SOAP e WebServices para produtos corporativos de alta demanda.",
        "Implementação de interfaces frontend atendendo demandas de produto com foco em usabilidade e performance.",
        "Aplicação de boas práticas de engenharia: SOLID, Design Patterns e cobertura com testes unitários.",
        "Suporte a soluções mobile utilizando Kotlin e Swift em abordagem híbrida/WebView."
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
      summary: "Integrações, documentação e suporte à eficiência operacional em contexto regional.",
      bullets: [
        "Mapeamento de requisitos técnicos e integrações entre aplicações corporativas na América do Sul.",
        "Elaboração de documentação técnica, fluxos operacionais e requisitos de segurança cibernética.",
        "Suporte a usuários e criação de automações para ganho de produtividade nas rotinas operacionais."
      ]
    },
    {
      company: "Zurich Santander Insurance America",
      role: "Estagiário em sustentação de sistemas",
      period: "Jun 2021 - Mar 2022",
      location: "São Paulo, Brasil",
      logo: logoMap.zurich.src,
      logoBg: logoMap.zurich.bg,
      fallback: "ZI",
      summary: "Sustentação, monitoramento e garantia de confiabilidade operacional dos sistemas.",
      bullets: [
        "Monitoramento de performance de sistemas e análise de causa raiz (RCA) em incidentes operacionais.",
        "Suporte técnico a sistemas internos e documentação de rotinas operacionais.",
        "Colaboração em rotinas de controle fiscal e automações de processos."
      ]
    }
  ],
  stackGroups: [
    {
      title: "Backend & Linguagens",
      items: ["Java", "Kotlin", "Go", "Python", "Spring Boot", "Node.js"]
    },
    {
      title: "MLOps & Cloud",
      items: ["AWS", "MLOps", "Python", "Lambda", "DynamoDB", "CloudWatch", "BigQuery", "Docker", "SQS", "SNS"]
    },
    {
      title: "IA & Developer Experience",
      items: ["Claude / Anthropic", "OpenAI", "Google AI / Gemini", "DevEx", "Test Automation", "Prompt Engineering"]
    },
    {
      title: "Frontend & Qualidade",
      items: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Jest", "Git", "ElasticSearch", "MongoDB", "MySQL"]
    }
  ],
  schools: [
    {
      name: "Universidade Federal do ABC",
      course: "Bacharelado em Ciência e Tecnologia / Ciência da Computação",
      period: "2019 - 2025",
      logo: logoMap.ufabc.src,
      logoBg: logoMap.ufabc.bg,
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
  skillsList: [
    "MLOps & Machine Learning Pipelines",
    "Prevenção a Fraudes & Alta Escala",
    "Sistemas Distribuídos (Java, Go, Kotlin)",
    "IA para DevEx (Claude, OpenAI, Google)",
    "Observabilidade & Latência P99",
    "Resolução de Incidentes Críticos"
  ]
};
