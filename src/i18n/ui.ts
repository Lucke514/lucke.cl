export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.downloadCV': 'Descargar CV',
    'nav.ariaLabel': 'Navegación principal',
    'nav.menuTitle': 'Menú',
    'nav.logoAria': 'Ir al inicio - Lucas González',

    // Hero
    'hero.badge': 'Software Engineering',
    'hero.role1': 'Full Stack Software Engineer',
    'hero.role2': 'Arquitecto de Microservicios',
    'hero.role3': 'Especialista Cloud',
    'hero.tagline':
      'Diseño y construyo plataformas escalables para empresas: backend en Node.js, frontends modernos y arquitecturas cloud que generan resultados medibles.',
    'hero.cta.contact': 'Contactar',
    'hero.scroll': 'Scroll',

    // Stats
    'stats.years': 'Años de experiencia',
    'stats.projects': 'Proyectos entregados',
    'stats.technologies': 'Tecnologías dominadas',
    'stats.certifications': 'Certificaciones',

    // About
    'about.kicker': '¿Quién soy?',
    'about.title.pre': 'Ingeniero de',
    'about.title.highlight': 'Software',
    'about.p1':
      'Desarrollador Full Stack JavaScript con experiencia en Node.js (NestJS, Express, Fastify) para backend y en frameworks modernos de frontend como React, Angular y Astro.',
    'about.p2':
      'Especializado en el diseño de microservicios escalables, APIs RESTful/GraphQL y documentación con Swagger/OpenAPI. Dominio de Prisma y TypeORM para entornos SQL y NoSQL.',
    'about.p3':
      'Experiencia en AWS, Azure y GCP, CI/CD con Docker y GitHub Actions, y en la automatización de pruebas de extremo a extremo con Playwright y Puppeteer.',
    'about.highlight':
      'Reconocido por generar mejoras operativas medibles mediante soluciones robustas y seguras en la nube.',
    'about.expertise.title': 'Áreas de expertise',
    'about.expertise.backend.title': 'Backend Architecture',
    'about.expertise.backend.desc': 'Microservicios, APIs RESTful/GraphQL, Clean Architecture',
    'about.expertise.cloud.title': 'Cloud Infrastructure',
    'about.expertise.cloud.desc': 'AWS, Azure, GCP — despliegue y orquestación',
    'about.expertise.devops.title': 'DevOps & Automation',
    'about.expertise.devops.desc': 'CI/CD, Docker, GitHub Actions, RPA',
    'about.expertise.frontend.title': 'Frontend Development',
    'about.expertise.frontend.desc': 'React, Angular, Astro, Next.js',
    'about.impact.title': 'Impacto real',
    'about.impact.1': '70% de reducción en llamadas operativas',
    'about.impact.2': '60% de mejora en eficiencia operativa',
    'about.impact.3': 'Reducción drástica en tiempos de despliegue',

    // Proyectos destacados
    'featured.kicker': 'Trabajo seleccionado',
    'featured.title': 'Proyectos destacados',
    'featured.viewAll': 'Ver todos los proyectos',
    'featured.badge': 'Destacado',
    'projects.demo': 'Ver demo',
    'projects.github': 'GitHub',

    // Experiencia
    'experience.kicker': 'Trayectoria',
    'experience.title': 'Experiencia laboral',
    'experience.present': 'Presente',
    'experience.year': 'año',
    'experience.years': 'años',
    'experience.month': 'mes',
    'experience.months': 'meses',

    // Tecnologías
    'tech.kicker': 'Herramientas',
    'tech.title': 'Stack tecnológico',

    // Certificaciones
    'certs.kicker': 'Formación continua',
    'certs.title': 'Certificaciones',

    // Contacto
    'contact.kicker': '¿Trabajamos juntos?',
    'contact.title': '¿Buscas un desarrollador para tu equipo?',
    'contact.text':
      'Estoy abierto a nuevas oportunidades. Si crees que mi perfil encaja con tu equipo, conversemos: respondo rápido por correo o LinkedIn.',
    'contact.email': 'Enviar correo',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    // Página de proyectos
    'projectsPage.title': 'Mis proyectos',
    'projectsPage.subtitle':
      'Una selección de proyectos que demuestran mi trabajo en desarrollo full stack, desde productos SaaS hasta microservicios empresariales.',
    'projectsPage.frontend': 'Aplicaciones web',
    'projectsPage.backend': 'Backend y microservicios',
    'projectsPage.confidential':
      'Parte de mi trabajo más relevante está protegido por acuerdos de confidencialidad y no puede mostrarse públicamente.',

    // Footer
    'footer.role': 'Full Stack Software Engineer',
    'footer.rights': 'Todos los derechos reservados',

    // 404
    'notFound.title': 'Página no encontrada',
    'notFound.text': 'Lo siento, la página que estás buscando no existe o ha sido movida.',
    'notFound.redirect': 'Serás redirigido automáticamente al inicio en',
    'notFound.seconds': 'segundos',
    'notFound.home': 'Ir al inicio',
    'notFound.projects': 'Ver proyectos',
    'notFound.about': 'Sobre mí',

    // SEO
    'seo.home.title': 'Lucas González | Full Stack Software Engineer',
    'seo.home.description':
      'Software Engineer especializado en Node.js, React, microservicios y arquitecturas cloud (AWS, Azure, GCP). +3 años construyendo soluciones escalables.',
    'seo.projects.title': 'Proyectos | Lucas González',
    'seo.projects.description':
      'Proyectos de desarrollo full stack de Lucas González: aplicaciones SaaS, portales web y microservicios empresariales con Node.js, NestJS y React.',
    'seo.notFound.title': 'Página no encontrada | Lucas González',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.downloadCV': 'Download CV',
    'nav.ariaLabel': 'Main navigation',
    'nav.menuTitle': 'Menu',
    'nav.logoAria': 'Go to home - Lucas González',

    // Hero
    'hero.badge': 'Software Engineering',
    'hero.role1': 'Full Stack Software Engineer',
    'hero.role2': 'Microservices Architect',
    'hero.role3': 'Cloud Specialist',
    'hero.tagline':
      'I design and build scalable platforms for companies: Node.js backends, modern frontends and cloud architectures that deliver measurable results.',
    'hero.cta.contact': 'Get in touch',
    'hero.scroll': 'Scroll',

    // Stats
    'stats.years': 'Years of experience',
    'stats.projects': 'Projects delivered',
    'stats.technologies': 'Technologies mastered',
    'stats.certifications': 'Certifications',

    // About
    'about.kicker': 'Who am I?',
    'about.title.pre': 'Software',
    'about.title.highlight': 'Engineer',
    'about.p1':
      'Full Stack JavaScript developer experienced in Node.js (NestJS, Express, Fastify) on the backend and modern frontend frameworks such as React, Angular and Astro.',
    'about.p2':
      'Specialized in designing scalable microservices, RESTful/GraphQL APIs and Swagger/OpenAPI documentation. Proficient with Prisma and TypeORM across SQL and NoSQL environments.',
    'about.p3':
      'Experience with AWS, Azure and GCP, CI/CD with Docker and GitHub Actions, and end-to-end test automation with Playwright and Puppeteer.',
    'about.highlight':
      'Recognized for delivering measurable operational improvements through robust, secure cloud solutions.',
    'about.expertise.title': 'Areas of expertise',
    'about.expertise.backend.title': 'Backend Architecture',
    'about.expertise.backend.desc': 'Microservices, RESTful/GraphQL APIs, Clean Architecture',
    'about.expertise.cloud.title': 'Cloud Infrastructure',
    'about.expertise.cloud.desc': 'AWS, Azure, GCP — deployment and orchestration',
    'about.expertise.devops.title': 'DevOps & Automation',
    'about.expertise.devops.desc': 'CI/CD, Docker, GitHub Actions, RPA',
    'about.expertise.frontend.title': 'Frontend Development',
    'about.expertise.frontend.desc': 'React, Angular, Astro, Next.js',
    'about.impact.title': 'Real impact',
    'about.impact.1': '70% reduction in operational calls',
    'about.impact.2': '60% improvement in operational efficiency',
    'about.impact.3': 'Drastic reduction in deployment times',

    // Featured projects
    'featured.kicker': 'Selected work',
    'featured.title': 'Featured projects',
    'featured.viewAll': 'View all projects',
    'featured.badge': 'Featured',
    'projects.demo': 'Live demo',
    'projects.github': 'GitHub',

    // Experience
    'experience.kicker': 'Career',
    'experience.title': 'Work experience',
    'experience.present': 'Present',
    'experience.year': 'year',
    'experience.years': 'years',
    'experience.month': 'month',
    'experience.months': 'months',

    // Technologies
    'tech.kicker': 'Tooling',
    'tech.title': 'Tech stack',

    // Certifications
    'certs.kicker': 'Continuous learning',
    'certs.title': 'Certifications',

    // Contact
    'contact.kicker': 'Shall we work together?',
    'contact.title': 'Looking for a developer for your team?',
    'contact.text':
      "I'm open to new opportunities. If you think my profile fits your team, let's talk — I reply quickly by email or LinkedIn.",
    'contact.email': 'Send email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    // Projects page
    'projectsPage.title': 'My projects',
    'projectsPage.subtitle':
      'A selection of projects showcasing my full stack work, from SaaS products to enterprise microservices.',
    'projectsPage.frontend': 'Web applications',
    'projectsPage.backend': 'Backend & microservices',
    'projectsPage.confidential':
      'Part of my most relevant work is protected by non-disclosure agreements and cannot be shown publicly.',

    // Footer
    'footer.role': 'Full Stack Software Engineer',
    'footer.rights': 'All rights reserved',

    // 404
    'notFound.title': 'Page not found',
    'notFound.text': "Sorry, the page you're looking for doesn't exist or has been moved.",
    'notFound.redirect': 'You will be automatically redirected home in',
    'notFound.seconds': 'seconds',
    'notFound.home': 'Go home',
    'notFound.projects': 'View projects',
    'notFound.about': 'About me',

    // SEO
    'seo.home.title': 'Lucas González | Full Stack Software Engineer',
    'seo.home.description':
      'Software Engineer specialized in Node.js, React, microservices and cloud architectures (AWS, Azure, GCP). 3+ years building scalable solutions.',
    'seo.projects.title': 'Projects | Lucas González',
    'seo.projects.description':
      'Full stack development projects by Lucas González: SaaS applications, web portals and enterprise microservices built with Node.js, NestJS and React.',
    'seo.notFound.title': 'Page not found | Lucas González',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
