import { logoMap } from "../config/logos.js";

export const contentPt = {
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
        { label: "WhatsApp", value: "+55 13 97416-3101", href: "https://wa.me/5513974163101?text=Ol%C3%A1%20Ronaldy,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!", icon: "whatsapp" },
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
      logoBg: logoMap.zurich.bg,
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
      items: ["Java", "Kotlin", "Go", "Spring Boot", "Spring Security", "Spring Data", "Node.js"]
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
      items: ["Jest", "GitHub", "GitLab", "ElasticSearch", "MongoDB", "MySQL"]
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
  skillsList: ["Claude Skills", "Escalabilidade e observabilidade", "Google BigQuery", "Comunicação", "Trabalho em equipe", "Flexibilidade"]
};
