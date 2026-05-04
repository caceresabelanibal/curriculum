import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1, rootMargin: "-60px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      setTimeout(() => {
        if (ringRef.current) {
          ringRef.current.style.left = `${e.clientX}px`;
          ringRef.current.style.top = `${e.clientY}px`;
        }
      }, 80);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

// ─── CONTENIDO BILINGÜE ────────────────────────────────────────────────────────
const CONTENT = {
  es: {
    nav: ["Sobre mí", "Experiencia", "Skills", "Educación", "Contacto"],
    navHrefs: ["#sobre-mi", "#experiencia", "#skills", "#educacion", "#contacto"],
    subtitle: "Chieff Technical Officer (C.T.O) | Sysadmin · DevOps · S.R.E",
    description: "Más de 15 años construyendo infraestructuras sólidas, escalables y automatizadas — desde el servidor hasta la estrategia tecnológica.",
    heroCta1: "Contactame",
    heroCta2: "Ver LinkedIn",
    sectionAbout: "Sobre mí",
    sectionExp: "Experiencia",
    sectionSkills: "Skills & Stack",
    sectionCerts: "Certificaciones",
    sectionEdu: "Educación",
    sectionLang: "Idiomas",
    contactTitle: "Hablemos de tu",
    contactTitleEm: "próximo desafío",
    contactText: "Disponible para roles de liderazgo técnico, consultoría de infraestructura o proyectos DevOps. No dudes en escribirme.",
    contactBtn: "Enviar mensaje",
    footerText: "Abel Aníbal Cáceres — La Falda, Córdoba, Argentina",
    about: [
      "Cuento con más de 15 años de experiencia en IT, con una base sólida en administración de sistemas (Windows, Linux, bases de datos, scripting y seguridad) y más de 5 años enfocado en prácticas DevOps, automatización y cloud. He trabajado diseñando, implementando y operando infraestructuras en Azure y AWS, utilizando tecnologías como Terraform, CloudFormation, EKS, Kubernetes, Docker, OpenShift, Jenkins, GitHub Actions, Harness y Azure DevOps.",
      "Me considero un líder enfocado y comprometido, con capacidad para adaptarme a contextos cambiantes y gestionar escenarios imprevistos. Creo firmemente que los equipos que abrazan el cambio y la mejora continua son los que logran sostener resultados y superar los desafíos de un mercado en constante evolución.",
    ],
    stats: [
      { number: "15+", label: "Años en IT" },
      { number: "5+",  label: "Años en DevOps" },
      { number: "5",   label: "Empresas líderes" },
      { number: "3",   label: "Clouds dominadas" },
    ],
    experience: [
      {
        date: "Feb 2026 — Actual",
        title: "C.T.O Chieff Technical Officer",
        company: "BluAxis",
        description: "Líder tecnológico impulsando la innovación de productos, arquitecturas escalables y equipos de ingeniería de alto rendimiento. Enfocado en alinear la tecnología con la estrategia de negocio, acelerar la entrega mediante automatización y prácticas modernas de DevOps, y construir plataformas resilientes nativas de la nube.",
      },
      {
        date: "Jun 2024 — Feb 2026",
        title: "Sr. Automation Engineer | DevOps",
        company: "Nasdaq",
        description: "Automatización del despliegue completo de VDAs Citrix y servicios de soporte sobre Oracle Cloud, reduciendo el tiempo de aprovisionamiento de varios días a minutos. Infraestructura gestionada con Terraform y PowerShell, CI/CD con GitLab.",
      },
      {
        date: "Abr 2024 — Jun 2024",
        title: "Sr. DevOps Engineer",
        company: "Nubiral",
        description: "Proyecto intensivo en Microsoft Azure: despliegue y configuración de VMs, gestión de infraestructura con ARM templates, pipelines de CI/CD con Azure DevOps y automatización de flujos de despliegue.",
      },
      {
        date: "Oct 2021 — Abr 2024",
        title: "DevOps Engineer — SRE",
        company: "Techunting · Proyecto: Particle 41",
        description: "SRE a cargo de construir el puente entre desarrollo y operaciones. Automatización y escalabilidad en AWS y Azure usando Harness, Helm, Kubernetes, Terraform, GitHub Actions, Jenkins, CloudFormation, EKS y Azure DevOps.",
      },
      {
        date: "Ene 2021 — Oct 2021",
        title: "Ingeniero de Infraestructura | DevOps",
        company: "SanCor Salud",
        description: "SRE encargado del proceso de desarrollo de aplicaciones, automatización y consistencia de despliegues. Stack: Docker, Kubernetes, OpenShift, Jenkins, GitHub, AWS y scripting.",
      },
      {
        date: "Sep 2010 — Ene 2021",
        title: "Líder de Soporte | Laboratorios",
        company: "Penta Security Solutions",
        description: "10 años liderando soporte técnico e infraestructura. Especialización en seguridad de entornos, virtualización, bases de datos (SQL Server, MySQL, Oracle), Windows Server, Linux/Unix y Active Directory.",
      },
      {
        date: "May 2008 — Ago 2010",
        title: "Analista de Soporte N1 / N2",
        company: "Hewlett Packard Enterprise",
        description: "Soporte técnico para clientes enterprise: Banco Santander RÍO, Molinos Río de la Plata, PepsiCo Cono Sur y Pfizer.",
      },
    ],
    skills: [
      { group: "Cloud", tags: ["AWS", "Azure", "Oracle Cloud", "EKS", "CloudFormation", "ARM Templates"] },
      { group: "Contenedores & Orquestación", tags: ["Kubernetes", "Docker", "OpenShift", "Helm"] },
      { group: "CI/CD & Automatización", tags: ["Terraform", "GitHub Actions", "Jenkins", "Harness", "Azure DevOps", "GitLab CI"] },
      { group: "Sistemas & Scripting", tags: ["Linux", "Windows Server", "PowerShell", "Bash", "Active Directory"] },
      { group: "Bases de datos", tags: ["SQL Server", "MySQL", "Oracle"] },
      { group: "Soft Skills", tags: ["Liderazgo técnico", "Scrum Master", "Adaptabilidad", "Mejora continua"] },
    ],
    certifications: [
      "Microsoft Certified: Azure Fundamentals",
      "Certified Kubernetes Administrator (CKA)",
      "HashiCorp Terraform Associate",
      "Scrum Master — Metodologías Ágiles",
      "Introduction to Oracle Cloud Essentials",
    ],
    languages: [
      { lang: "Español", level: "Nativo", pct: 100 },
      { lang: "Inglés", level: "B2 — Nivel Profesional de Trabajo", pct: 72 },
    ],
    education: [
      { year: "2017 — 2020", title: "Técnico Superior en Desarrollo de Software", institution: "Instituto Superior Pascal" },
      { year: "2001 — 2004", title: "Bachiller en Comunicación Social y Medios", institution: "CENS 451" },
    ],
    contact: {
      email: "caceresabelanibal@gmail.com",
      phone: "+54 351 286 9149",
      location: "La Falda, Córdoba, Argentina",
      linkedin: "https://www.linkedin.com/in/abelanibalcaceres",
    },
  },

  en: {
    nav: ["About", "Experience", "Skills", "Education", "Contact"],
    navHrefs: ["#sobre-mi", "#experiencia", "#skills", "#educacion", "#contacto"],
    subtitle: "Chieff Technical Officer (C.T.O) | Sysadmin · DevOps · S.R.E",
    description: "15+ years building solid, scalable, and automated infrastructures — from the server room to the technology strategy.",
    heroCta1: "Contact me",
    heroCta2: "View LinkedIn",
    sectionAbout: "About me",
    sectionExp: "Experience",
    sectionSkills: "Skills & Stack",
    sectionCerts: "Certifications",
    sectionEdu: "Education",
    sectionLang: "Languages",
    contactTitle: "Let's talk about your",
    contactTitleEm: "next challenge",
    contactText: "Available for technical leadership roles, infrastructure consulting, or DevOps projects. Feel free to reach out.",
    contactBtn: "Send message",
    footerText: "Abel Aníbal Cáceres — La Falda, Córdoba, Argentina",
    about: [
      "I have over 15 years of experience in IT, with a strong foundation in systems administration (Windows, Linux, databases, scripting, and security) and more than 5 years focused on DevOps practices, automation, and cloud. I have designed, implemented, and operated infrastructures on Azure and AWS using technologies such as Terraform, CloudFormation, EKS, Kubernetes, Docker, OpenShift, Jenkins, GitHub Actions, Harness, and Azure DevOps.",
      "I consider myself a focused and committed leader, capable of adapting to changing contexts and managing unforeseen scenarios. I firmly believe that teams that embrace change and continuous improvement are the ones that sustain results and overcome the challenges of an ever-evolving market.",
    ],
    stats: [
      { number: "15+", label: "Years in IT" },
      { number: "5+",  label: "Years in DevOps" },
      { number: "5",   label: "Top companies" },
      { number: "3",   label: "Clouds mastered" },
    ],
    experience: [
      {
        date: "Feb 2026 — NOW",
        title: "C.T.O Chieff Technical Officer",
        company: "BluAxis",
        description: "Technology leader driving product innovation, scalable architecture, and high-performing engineering teams. Focused on aligning technology with business strategy, accelerating delivery through automation and modern DevOps practices, and building resilient, cloud-native platforms.",
      },
      {
        date: "Jun 2024 — Feb 2026",
        title: "Sr. Automation Engineer | DevOps",
        company: "Nasdaq",
        description: "Full automation of Citrix VDA deployments and supporting services on Oracle Cloud, reducing provisioning time from several days to minutes. Infrastructure managed with Terraform and PowerShell, CI/CD with GitLab.",
      },
      {
        date: "Apr 2024 — Jun 2024",
        title: "Sr. DevOps Engineer",
        company: "Nubiral",
        description: "Intensive project on Microsoft Azure: VM deployment and configuration, infrastructure management with ARM templates, CI/CD pipelines with Azure DevOps, and deployment flow automation.",
      },
      {
        date: "Oct 2021 — Apr 2024",
        title: "DevOps Engineer — SRE",
        company: "Techunting · Project: Particle 41",
        description: "SRE responsible for bridging development and operations. Automation and scalability on AWS and Azure using Harness, Helm, Kubernetes, Terraform, GitHub Actions, Jenkins, CloudFormation, EKS, and Azure DevOps.",
      },
      {
        date: "Jan 2021 — Oct 2021",
        title: "Infrastructure Engineer | DevOps",
        company: "SanCor Salud",
        description: "SRE in charge of application development processes, automation, and deployment consistency. Stack: Docker, Kubernetes, OpenShift, Jenkins, GitHub, AWS, and scripting.",
      },
      {
        date: "Sep 2010 — Jan 2021",
        title: "Support Lead | Labs",
        company: "Penta Security Solutions",
        description: "10 years leading technical support and infrastructure. Expertise in environment security, virtualization, databases (SQL Server, MySQL, Oracle), Windows Server, Linux/Unix, and Active Directory.",
      },
      {
        date: "May 2008 — Aug 2010",
        title: "Support Analyst L1 / L2",
        company: "Hewlett Packard Enterprise",
        description: "Technical support for enterprise clients: Banco Santander RÍO, Molinos Río de la Plata, PepsiCo Southern Cone, and Pfizer.",
      },
    ],
    skills: [
      { group: "Cloud", tags: ["AWS", "Azure", "Oracle Cloud", "EKS", "CloudFormation", "ARM Templates"] },
      { group: "Containers & Orchestration", tags: ["Kubernetes", "Docker", "OpenShift", "Helm"] },
      { group: "CI/CD & Automation", tags: ["Terraform", "GitHub Actions", "Jenkins", "Harness", "Azure DevOps", "GitLab CI"] },
      { group: "Systems & Scripting", tags: ["Linux", "Windows Server", "PowerShell", "Bash", "Active Directory"] },
      { group: "Databases", tags: ["SQL Server", "MySQL", "Oracle"] },
      { group: "Soft Skills", tags: ["Technical leadership", "Scrum Master", "Adaptability", "Continuous improvement"] },
    ],
    certifications: [
      "Microsoft Certified: Azure Fundamentals",
      "Certified Kubernetes Administrator (CKA)",
      "HashiCorp Terraform Associate",
      "Scrum Master — Agile Methodologies",
      "Introduction to Oracle Cloud Essentials",
    ],
    languages: [
      { lang: "Spanish", level: "Native", pct: 100 },
      { lang: "English", level: "B2 — Professional Working Proficiency", pct: 72 },
    ],
    education: [
      { year: "2017 — 2020", title: "Higher Technician in Software Development", institution: "Instituto Superior Pascal" },
      { year: "2001 — 2004", title: "Bachelor in Social Communication and Media", institution: "CENS 451" },
    ],
    contact: {
      email: "caceresabelanibal@gmail.com",
      phone: "+54 351 286 9149",
      location: "La Falda, Córdoba, Argentina",
      linkedin: "https://www.linkedin.com/in/abelanibalcaceres",
    },
  },
};


// ─── TESTIMONIALS DATA ─────────────────────────────────────────────────────────
const TESTIMONIALS = {
  es: [
    {
      text: "Aníbal es un fantástico jugador de equipo y un gran activo para cualquier equipo DevOps. Siempre dispuesto a asumir tareas, buscando proactivamente ayuda cuando era necesario para asegurar una ejecución eficiente.",
      name: "Pritesh Kalantri",
      role: "Cloud Architect | Founder @ Helyx",
      date: "Enero 2025",
    },
    {
      text: "Recomiendo a Aníbal para roles en Kubernetes y DevOps. Sus contribuciones fueron clave en nuestro despliegue multi-región de servicios Kubernetes en AWS EKS. Completó las tareas asignadas con precisión y rápidamente se volvió experto en nuestros pipelines de Harness.",
      name: "Ken Goodridge",
      role: "Principal Software Engineer @ EBSCO",
      date: "Abril 2024",
    },
    {
      text: "Un excelente profesional y persona, muy a gusto trabajando en equipo y de forma colaborativa. Destaco su compromiso, sus ganas de aprender y su buen humor, incluso en situaciones de crisis.",
      name: "Diego Terre",
      role: "Líder de Ciberseguridad @ SanCor Salud",
      date: "Marzo 2024",
    },
    {
      text: "Trabajé con Aníbal hace varios años y puedo decir que tiene mente abierta y entiende las necesidades del negocio. Siempre busca formas alternativas de resolver problemas. No le teme al trabajo duro y tiene buenas habilidades de resolución de problemas.",
      name: "Mauro Bozzi",
      role: "Arquitectura de Seguridad | CISSP · CISM · CISA",
      date: "Febrero 2024",
    },
    {
      text: "Tuve la fortuna de trabajar con Abel en Penta Security Solutions. Es un excelente profesional y compañero. Una persona atenta, dedicada, prolija y con un gran poder de resolución a cualquier tipo de problemáticas.",
      name: "Yesica Fernández",
      role: "Technical Manager | Payments @ Uala",
      date: "Junio 2021",
    },
    {
      text: "Fue un placer trabajar con Aníbal. Es una persona muy responsable y siempre dispuesta a ayudar a resolver cada situación. Si no sabe algo, encontrará la manera.",
      name: "Amalia Sciutto",
      role: "CMO & CybOps Director, Co-Founder PSS/ABX",
      date: "Abril 2021",
    },
    {
      text: "Su calidad, tanto como profesional como en lo personal, hicieron que haya sido un placer trabajar juntos. Es altamente recomendable para trabajos de IT, en análisis, desarrollo y resolución de problemas.",
      name: "Nicolás Fernando Trujillo",
      role: "Sr Project Manager | PMP® ITIL® PMI-ACP®",
      date: "Enero 2019",
    },
    {
      text: "Aníbal es genial para trabajar. Es un experto en administración Microsoft, su inglés es sólido, su actitud es excelente y es confiable.",
      name: "Eric Napier",
      role: "Software Engineer",
      date: "Enero 2017",
    },
    {
      text: "Aníbal es un excelente profesional de IT, muy experimentado y con un profundo conocimiento técnico. Su capacidad de liderazgo y su habilidad para trabajar en equipo son sobresalientes.",
      name: "Sam Elliott",
      role: "SVP Product Management @ BeyondTrust",
      date: "Enero 2017",
    },
  ],
  en: [
    {
      text: "Anibal is a fantastic team player and a great asset to any DevOps team! He was always eager to take on DevOps tasks, proactively seeking assistance when needed to ensure everything was executed efficiently.",
      name: "Pritesh Kalantri",
      role: "Cloud Architect | Founder @ Helyx",
      date: "January 2025",
    },
    {
      text: "I recommend Aníbal for roles focusing on Kubernetes and DevOps. His contributions were key to our multi-region deployment of Kubernetes services on AWS EKS. He consistently completed tasks with accuracy and quickly became proficient in our Harness deployment pipelines.",
      name: "Ken Goodridge",
      role: "Principal Software Engineer @ EBSCO",
      date: "April 2024",
    },
    {
      text: "An excellent professional and person, very comfortable working as a team and collaboratively. I highlight his commitment, his eagerness to learn, and his good humor, even in crisis situations.",
      name: "Diego Terre",
      role: "Cybersecurity Lead @ SanCor Salud",
      date: "March 2024",
    },
    {
      text: "I worked with Anibal several years ago and I can say that he has an open mind and understands the business needs. He looks always for alternate ways to solve issues. He is not afraid of hard work and has good problem solving skills.",
      name: "Mauro Bozzi",
      role: "Security Architecture | CISSP · CISM · CISA",
      date: "February 2024",
    },
    {
      text: "I had the fortune of working with Abel at Penta Security Solutions. He is an excellent professional and colleague — attentive, dedicated, thorough, and with a great ability to resolve any kind of issue.",
      name: "Yesica Fernández",
      role: "Technical Manager | Payments @ Uala",
      date: "June 2021",
    },
    {
      text: "It was a pleasure working with Anibal. He is a very responsible person, and he is always willing to help to resolve every situation. If he doesn't know he will find the way.",
      name: "Amalia Sciutto",
      role: "CMO & CybOps Director, Co-Founder PSS/ABX",
      date: "April 2021",
    },
    {
      text: "His quality, both as a professional and as a person, made it a pleasure to work together. Highly recommended for IT work — analysis, development, and problem-solving.",
      name: "Nicolás Fernando Trujillo",
      role: "Sr Project Manager | PMP® ITIL® PMI-ACP®",
      date: "January 2019",
    },
    {
      text: "Anibal is great to work with. He is an expert on Microsoft administration, his English is strong, his attitude is stellar, and he is dependable. I am glad to have him on my team.",
      name: "Eric Napier",
      role: "Software Engineer",
      date: "January 2017",
    },
    {
      text: "Anibal is an excellent IT professional. He is highly experienced and has a deep technical knowledge. His training and technical analysis are outstanding, so is his ability to lead and work with a team.",
      name: "Sam Elliott",
      role: "SVP Product Management @ BeyondTrust",
      date: "January 2017",
    },
  ],
};

function heroStyle(delay) {
  return { animation: `heroFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s both` };
}

// ─── LANGUAGE SWITCH ───────────────────────────────────────────────────────────
function LangSwitch({ lang, setLang }) {
  return (
    <button
      className={`lang-switch ${lang === "en" ? "lang-en" : "lang-es"}`}
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      aria-label="Switch language"
    >
      <span className="lang-option">ES</span>
      <span className="lang-slider" />
      <span className="lang-option">EN</span>
    </button>
  );
}

// ─── SECCIONES ─────────────────────────────────────────────────────────────────
function Hero({ t, lang, setLang }) {
  return (
    <section className="hero" id="inicio">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="hero-inner">
        <div>
          <div className="hero-tag" style={heroStyle(0.2)}>{t.subtitle}</div>
          <h1 style={heroStyle(0.35)}>
            {"Abel Aníbal Cáceres".split(" ").map((word, i) =>
              <span key={i}>{word} </span>
            )}
          </h1>
          <p className="hero-desc" style={heroStyle(0.5)}>{t.description}</p>
          <div className="hero-ctas" style={heroStyle(0.65)}>
            <a href="#contacto" className="btn-primary">{t.heroCta1}</a>
            <a href="https://www.linkedin.com/in/abelanibalcaceres" target="_blank" rel="noreferrer" className="btn-secondary">{t.heroCta2}</a>
          </div>
        </div>
        <div style={heroStyle(0.4)}>
          <img src="/yo.jpeg" alt="Abel Aníbal Cáceres" className="hero-photo" />
        </div>
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section id="sobre-mi">
      <div className="container">
        <FadeIn><div className="section-label">{t.sectionAbout}</div></FadeIn>
        <div className="about-grid">
          <FadeIn delay={0.1}>
            <div className="about-text">
              {t.about.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </FadeIn>
          <div className="about-stats">
            {t.stats.map((s, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.08}>
                <div className="stat-item">
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience({ t }) {
  return (
    <section id="experiencia">
      <div className="container">
        <FadeIn><div className="section-label">{t.sectionExp}</div></FadeIn>
        <div className="timeline">
          {t.experience.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="timeline-item">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-company">{item.company}</div>
                <div className="timeline-desc">{item.description}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills({ t }) {
  return (
    <section id="skills">
      <div className="container">
        <FadeIn><div className="section-label">{t.sectionSkills}</div></FadeIn>
        <div className="skills-grid">
          {t.skills.map((group, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="skill-group">
                <div className="skill-group-title">{group.group}</div>
                <div className="skill-tags">
                  {group.tags.map((tag, j) => <span key={j} className="skill-tag">{tag}</span>)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.1}>
          <div className="section-label" style={{ marginTop: "3.5rem" }}>{t.sectionCerts}</div>
          <div className="cert-list">
            {t.certifications.map((cert, i) => (
              <div key={i} className="cert-item">
                <span className="cert-dot">▸</span> {cert}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Languages({ t }) {
  return (
    <section id="idiomas">
      <div className="container">
        <FadeIn><div className="section-label">{t.sectionLang}</div></FadeIn>
        <div className="lang-list">
          {t.languages.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="lang-item">
                <div className="lang-header">
                  <span className="lang-name">{item.lang}</span>
                  <span className="lang-level">{item.level}</span>
                </div>
                <div className="lang-bar-bg">
                  <div className="lang-bar-fill" style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education({ t }) {
  return (
    <section id="educacion">
      <div className="container">
        <FadeIn><div className="section-label">{t.sectionEdu}</div></FadeIn>
        <div className="edu-grid">
          {t.education.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="edu-card">
                <div className="edu-year">{item.year}</div>
                <div className="edu-title">{item.title}</div>
                <div className="edu-institution">{item.institution}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ t }) {
  const { email, phone, location, linkedin } = t.contact;
  return (
    <section id="contacto">
      <div className="container">
        <div className="contact-inner">
          <FadeIn>
            <div>
              <h2 className="contact-title">{t.contactTitle} <em>{t.contactTitleEm}</em></h2>
              <p className="contact-text">{t.contactText}</p>
              <a href={`mailto:${email}`} className="btn-primary">{t.contactBtn}</a>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="contact-links">
              <a href={`mailto:${email}`} className="contact-link"><Mail size={16}/> {email}</a>
              <a href={`tel:${phone}`} className="contact-link"><Phone size={16}/> {phone}</a>
              <span className="contact-link"><MapPin size={16}/> {location}</span>
              <a href={linkedin} target="_blank" rel="noreferrer" className="contact-link">
                <Linkedin size={16}/> linkedin.com/in/abelanibalcaceres <ExternalLink size={12}/>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}


function Testimonials({ t, lang }) {
  const items = TESTIMONIALS[lang];
  // Duplicate for infinite loop
  const doubled = [...items, ...items];

  return (
    <section id="referencias">
      <div className="container">
        <FadeIn>
          <div className="section-label">
            {lang === "es" ? "Referencias" : "References"}
          </div>
        </FadeIn>
      </div>
      <div className="testimonials-track-wrapper">
        <div className="testimonials-track">
          {doubled.map((item, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{item.name}</span>
                <span className="testimonial-role">{item.role}</span>
                <span className="testimonial-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── APP PRINCIPAL ─────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState("es");
  const t = CONTENT[lang];

  return (
    <>
      <Cursor />
      <nav>
        <a href="#inicio" className="nav-logo"></a>
        <ul className="nav-links">
          {t.nav.map((label, i) => (
            <li key={i}><a href={t.navHrefs[i]}>{label}</a></li>
          ))}
        </ul>
        <LangSwitch lang={lang} setLang={setLang} />
      </nav>
      <main>
        <Hero t={t} lang={lang} setLang={setLang} />
        <About t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Languages t={t} />
        <Education t={t} />
        <Testimonials t={t} lang={lang} />
        <Contact t={t} />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} {t.footerText}</p>
      </footer>
    </>
  );
}
