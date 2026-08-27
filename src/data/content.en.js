import { logoMap } from "../config/logos.js";

export const contentEn = {
  brand: "Ronaldy Gomes",
  hero: {
    eyebrow: "Software Developer · Fraud Prevention · MLOps · Cloud & AI",
    title: "Ronaldy Gomes",
    subtitle:
      "Software developer focused on large-scale distributed systems, MLOps, and engineering-driven AI.",
    summary:
      "I work at Mercado Livre in the Fraud Prevention and MLOps domain, building high-throughput microservices, deep observability setups, and infrastructure for ML models. I combine a strong backend foundation (Java, Kotlin, Go, Python) with intensive daily use of AI on two fronts: accelerating developer experience (DevEx across Claude, OpenAI, and Google ecosystems) and running production Machine Learning workloads.",
    primaryCta: "Send email",
    secondaryCta: "Open LinkedIn",
    cvCta: "Download CV",
    badgeTitle: "Current work",
    badgeBody: "MLOps & Fraud Prevention at Mercado Livre, integrating scalable services and AI.",
    photoAlt: "Profile photo of Ronaldy Gomes"
  },
  metrics: [
    {
      label: "Experience",
      value: "3+ years building software"
    },
    {
      label: "Current focus",
      value: "MLOps, Scale & AI-powered DevEx"
    },
    {
      label: "Core stack",
      value: "Java, Kotlin, Go, Python, AWS & AI"
    }
  ],
  spotlight: {
    overview: {
      eyebrow: "Overview",
      title: "Solid engineering at real scale with practical AI.",
      body:
        "My work brings together distributed systems architecture, production observability, and MLOps infrastructure to support high-availability real-time decision making."
    },
    contacts: {
      eyebrow: "Contact",
      title: "Main channels",
      ctaTitle: "Let's connect",
      items: [
        { label: "Email", value: "gomesronaldy@hotmail.com", href: "mailto:gomesronaldy@hotmail.com", icon: "email" },
        { label: "WhatsApp", value: "+55 13 97416-3101", href: "https://wa.me/5513974163101?text=Hello%20Ronaldy,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!", icon: "whatsapp" },
        { label: "LinkedIn", value: "ronaldy-gomes", href: "https://www.linkedin.com/in/ronaldy-gomes", icon: "linkedin" },
        { label: "GitHub", value: "ronaldycgomes", href: "https://github.com/ronaldycgomes", icon: "github" }
      ]
    }
  },
  highlights: {
    eyebrow: "Highlights",
    title: "How I approach engineering",
    items: [
      {
        icon: "⚡",
        title: "Scale & Reliability",
        body: "Building and maintaining services designed for heavy traffic, low latency, and continuous high availability at Mercado Livre."
      },
      {
        icon: "🤖",
        title: "AI in DevEx (Claude, OpenAI, Google)",
        body: "Leveraging cutting-edge AI ecosystems to accelerate engineering velocity, test automation, and code generation."
      },
      {
        icon: "🧠",
        title: "MLOps & Python for ML",
        body: "Operationalizing model lifecycles, data/inference pipelines, and core software engineering best practices for Machine Learning."
      },
      {
        icon: "📊",
        title: "Deep Observability",
        body: "Proactive telemetry tracking, distributed tracing, and P99 latency monitoring for robust operations and incident prevention."
      }
    ]
  },
  experience: {
    eyebrow: "Experience",
    title: "Career journey"
  },
  stack: {
    eyebrow: "Stack",
    title: "Technologies and tools",
    intro:
      "Hands-on experience in distributed backends, cloud architecture, and observability, with an active focus expanding into MLOps, Python for data, and AI ecosystems."
  },
  education: {
    eyebrow: "Education",
    title: "Academic background"
  },
  featuredProject: {
    eyebrow: "Personal Project",
    title: "SnapBrick AI",
    statusBadge: "In Active Development",
    description:
      "A mobile application designed to identify scattered, loose LEGO pieces from a single photograph and suggest buildable MOCs and official sets in real time. The system uses a procedural synthetic dataset generated via BlenderProc to train a custom YOLOv11 detector, pairs it with perceptual CIE L*a*b* color mapping, and executes a low-latency constraint matching engine that queries relational catalogs to return fully and partially buildable models based on the detected pieces.",
    stack: ["PyTorch", "YOLOv11", "FastAPI", "BlenderProc", "React Native", "PostgreSQL"]
  },
  skills: {
    eyebrow: "Skills",
    title: "Key strengths"
  },
  personal: {
    eyebrow: "Beyond work",
    title: "Personal interests",
    body:
      "I am 25 years old, a saxophonist of 10 years, and a motorsport enthusiast. Rhythm, technical precision, and sharp attention to detail are principles I carry directly from music into software engineering."
  },
  jobs: [
    {
      company: "Mercado Livre",
      role: "Software Developer (Fraud Prevention & MLOps)",
      period: "Dec 2024 - Present",
      location: "São Paulo, Brazil",
      logo: logoMap.mercadolivre.src,
      logoBg: logoMap.mercadolivre.bg,
      fallback: "ML",
      summary: "Working across Fraud Prevention and MLOps, maintaining high-volume services and accelerating engineering with AI.",
      bullets: [
        "Developing and maintaining high-concurrency microservices in Java, Kotlin, and Go.",
        "Engineering within MLOps: supporting infrastructure, data pipelines, and the lifecycle of Machine Learning models with Python for fraud detection.",
        "Accelerating Developer Experience (DevEx) by actively utilizing Claude (Anthropic), OpenAI, and Google ecosystems for velocity, testing, and automation.",
        "Deep observability with real-time health monitoring, P99 latency tracking, and high-availability assurance for critical pipelines.",
        "Quality-first mindset with rigorous automated testing, clean code principles, and evolvable architecture."
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
      summary: "Full stack engineering focused on enterprise integrations, APIs, frontend, and mobile solutions.",
      bullets: [
        "Developed and maintained REST, SOAP, and WebService APIs for core enterprise products with high demand.",
        "Delivered frontend interfaces tailored to product specifications with strong usability and performance focus.",
        "Applied software engineering best practices: SOLID, Design Patterns, and thorough unit test coverage.",
        "Supported hybrid mobile solutions using Kotlin and Swift in a WebView architecture."
      ]
    },
    {
      company: "mazzatech",
      role: "IT Applications Analyst",
      period: "Apr 2022 - Oct 2022",
      location: "São Paulo, Brazil",
      logo: logoMap.mazzatech.src,
      logoBg: logoMap.mazzatech.bg,
      fallback: "MZ",
      summary: "Integrations, technical documentation, and operational efficiency across regional systems.",
      bullets: [
        "Mapped technical requirements and integrations across enterprise applications throughout South America.",
        "Authored technical specs, operational workflows, and cybersecurity baseline requirements.",
        "Provided user support and built task automations to drive operational efficiency."
      ]
    },
    {
      company: "Zurich Santander Insurance America",
      role: "Systems Operations Intern",
      period: "Jun 2021 - Mar 2022",
      location: "São Paulo, Brazil",
      logo: logoMap.zurich.src,
      logoBg: logoMap.zurich.bg,
      fallback: "ZI",
      summary: "System support, production monitoring, and operational reliability.",
      bullets: [
        "Monitored production performance and conducted root cause analysis (RCA) on operational incidents.",
        "Provided support for internal business systems and maintained operational runbooks.",
        "Assisted in fiscal compliance routines and automated internal data workflows."
      ]
    }
  ],
  stackGroups: [
    {
      title: "Backend & Languages",
      items: ["Java", "Kotlin", "Go", "Python", "Spring Boot", "Node.js"]
    },
    {
      title: "MLOps & Cloud",
      items: ["AWS", "MLOps", "Python", "Lambda", "DynamoDB", "CloudWatch", "BigQuery", "Docker", "SQS", "SNS"]
    },
    {
      title: "AI & Developer Experience",
      items: ["Claude / Anthropic", "OpenAI", "Google AI / Gemini", "DevEx", "Test Automation", "Prompt Engineering"]
    },
    {
      title: "Frontend & Quality",
      items: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Jest", "Git", "ElasticSearch", "MongoDB", "MySQL"]
    }
  ],
  schools: [
    {
      name: "Universidade Federal do ABC",
      course: "B.S. in Science & Technology / Computer Science",
      period: "2019 - 2025",
      logo: logoMap.ufabc.src,
      logoBg: logoMap.ufabc.bg,
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
      name: "ETEC - Escola Técnica Estadual de São Paulo",
      course: "Mechanical Technician",
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
    "Financial Fundamentals - FGV",
    "Dart: Data Structures and Language Foundations"
  ],
  skillsList: [
    "MLOps & Machine Learning Pipelines",
    "Fraud Prevention & High Scale",
    "Distributed Systems (Java, Go, Kotlin)",
    "AI for DevEx (Claude, OpenAI, Google)",
    "Observabilidade & P99 Latency",
    "Incident Resolution & RCA"
  ]
};
