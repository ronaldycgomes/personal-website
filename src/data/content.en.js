import { logoMap } from "../config/logos.js";

export const contentEn = {
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
    cvCta: "Download CV",
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
        { label: "WhatsApp", value: "+55 13 97416-3101", href: "https://wa.me/5513974163101?text=Hello%20Ronaldy,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!", icon: "whatsapp" },
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
      logoBg: logoMap.zurich.bg,
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
      title: "Quality & Tools",
      items: ["Jest", "GitHub", "GitLab", "ElasticSearch", "MongoDB", "MySQL"]
    }
  ],
  schools: [
    {
      name: "Federal University of ABC",
      course: "Bachelor's degree in Science and Technology / Computer Science",
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
};
