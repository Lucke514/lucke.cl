import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export interface Project {
  title: string;
  description: Localized;
  technologies: string[];
  images: {
    src: string;
    alt: Localized;
  }[];
  links: {
    github?: string;
    live?: string;
  };
  featured: boolean;
  backendProject?: boolean;
}

export const frontendProjects: Project[] = [
  {
    title: 'Organizer.cl',
    description: {
      es: 'Aplicación SaaS para gestión de inventarios, clientes y proveedores. Backend implementado con NestJS + Prisma + MySQL, documentado en Swagger/OpenAPI. Desplegado en AWS (EC2, S3, SES) con CI/CD (Coolify + GitHub Actions). Incluye códigos de barras, reportes avanzados, alertas automáticas y ventas con pasarelas de pago seguras.',
      en: 'SaaS application for inventory, customer and supplier management. Backend built with NestJS + Prisma + MySQL, documented with Swagger/OpenAPI. Deployed on AWS (EC2, S3, SES) with CI/CD (Coolify + GitHub Actions). Includes barcodes, advanced reporting, automatic alerts and sales with secure payment gateways.',
    },
    technologies: ['NestJS', 'Prisma', 'MySQL', 'AWS', 'Swagger', 'Next.js'],
    images: [
      {
        src: '/img/projects/organizer-1.webp',
        alt: { es: 'Dashboard principal de Organizer', en: 'Organizer main dashboard' },
      },
      {
        src: '/img/projects/organizer-2.webp',
        alt: { es: 'Módulo de inventario', en: 'Inventory module' },
      },
    ],
    links: {
      live: 'https://organizer.cl',
    },
    featured: true,
  },
  {
    title: 'Portal de empleo Banen.cl',
    description: {
      es: 'Aplicación web desarrollada para la empresa Gestpyme Spa, cuyo objetivo es facilitar la búsqueda de empleo. Se emplean tecnologías como React, Node.js, TypeScript, JWT y TailwindCSS, entre otras.',
      en: 'Web application built for Gestpyme Spa to make job hunting easier. Built with React, Node.js, TypeScript, JWT and TailwindCSS, among other technologies.',
    },
    technologies: ['React', 'Node.js', 'TypeScript', 'JWT', 'TailwindCSS'],
    images: [
      {
        src: '/img/projects/Banen-1.webp',
        alt: { es: 'Página principal del portal de empleo', en: 'Job portal home page' },
      },
      {
        src: '/img/projects/Banen-2.webp',
        alt: { es: 'Panel de administración', en: 'Admin panel' },
      },
    ],
    links: {
      live: 'https://banen.cl',
    },
    featured: true,
  },
  {
    title: 'Itury',
    description: {
      es: 'Aplicación web desarrollada en el Hospital Provincial de Ovalle para mejorar la gestión y entrega de medicamentos mediante un sistema de llamadas. Integra APIs del mismo centro de salud, utilizando Node.js, EJS, Bootstrap y AJAX.',
      en: 'Web application built at the Provincial Hospital of Ovalle to improve medication management and delivery through a calling system. Integrates the hospital’s own APIs, using Node.js, EJS, Bootstrap and AJAX.',
    },
    technologies: ['EJS', 'Node.js', 'MySQL', 'BoostrapCSS', 'JavaScript'],
    images: [
      {
        src: '/img/projects/Itury-1.webp',
        alt: { es: 'Login Itury', en: 'Itury login' },
      },
      {
        src: '/img/projects/Itury-2.webp',
        alt: { es: 'Vista de la aplicación Itury', en: 'Itury application view' },
      },
    ],
    links: {},
    featured: false,
  },
  {
    title: 'My Bot',
    description: {
      es: 'Servicio de mensajería desarrollado en Node.js que permite responder mensajes de WhatsApp de forma automática. Se emplean tecnologías como Whatsapp-Web.js, Express.js y la API de OpenAI.',
      en: 'Messaging service built with Node.js that answers WhatsApp messages automatically. Uses Whatsapp-Web.js, Express.js and the OpenAI API.',
    },
    technologies: ['Node.js', 'Express.js', 'Whatsapp-Web.js', 'OpenAI'],
    images: [
      {
        src: '/img/projects/MyBot-1.webp',
        alt: { es: 'Chat de WhatsApp', en: 'WhatsApp chat' },
      },
      {
        src: '/img/projects/MyBot-2.webp',
        alt: { es: 'Panel de administración', en: 'Admin panel' },
      },
    ],
    links: {
      github: 'https://www.github.com/lucke514/mybot.cl',
      live: 'https://www.mybot.cl',
    },
    featured: false,
  },
  {
    title: 'Compress Images',
    description: {
      es: 'Aplicación web desarrollada en React que permite comprimir imágenes de forma sencilla y rápida. Se emplean tecnologías como React y TailwindCSS.',
      en: 'Web application built with React for quick and simple image compression. Built with React and TailwindCSS.',
    },
    technologies: ['React', 'TailwindCSS'],
    images: [
      {
        src: '/img/projects/CompressImage-1.webp',
        alt: { es: 'Página principal de Compress Images', en: 'Compress Images home page' },
      },
      {
        src: '/img/projects/CompressImage-2.webp',
        alt: { es: 'Comprimir imágenes', en: 'Compressing images' },
      },
    ],
    links: {
      live: 'https://compress-images.lucke.cl/',
    },
    featured: true,
  },
  {
    title: 'WhatsApp Api',
    description: {
      es: 'API desarrollada en Node.js que permite enviar mensajes de WhatsApp de forma automática. Se emplean tecnologías como Express.js, Whatsapp-web.js, React y TailwindCSS.',
      en: 'API built with Node.js for sending WhatsApp messages automatically. Uses Express.js, Whatsapp-web.js, React and TailwindCSS.',
    },
    technologies: ['Node.js', 'Express.js', 'Whatsapp-Web.js', 'React', 'TailwindCSS'],
    images: [
      {
        src: '/img/projects/Wsap-1.webp',
        alt: { es: 'Login de WhatsApp Api', en: 'WhatsApp Api login' },
      },
      {
        src: '/img/projects/Wsap-2.webp',
        alt: { es: 'Panel de usuario', en: 'User panel' },
      },
    ],
    links: {
      live: 'https://www.wsap.cl',
    },
    featured: true,
  },
];

export const backendProjects: Project[] = [
  {
    title: 'API Organizer',
    description: {
      es: 'API RESTful desarrollada en NestJS para el sistema de gestión empresarial Organizer. Proporciona endpoints para módulos como Inventario, Ventas y Compras, permitiendo operaciones CRUD y consultas avanzadas. Implementa autenticación JWT y manejo de roles para asegurar el acceso a los recursos.',
      en: 'RESTful API built with NestJS for the Organizer business management system. Provides endpoints for modules such as Inventory, Sales and Purchasing, supporting CRUD operations and advanced queries. Implements JWT authentication and role-based access control.',
    },
    technologies: ['NestJS', 'Prisma', 'MySQL', 'JWT', 'TypeScript'],
    images: [],
    links: {},
    featured: true,
    backendProject: true,
  },
  {
    title: 'Microservicio de Notificaciones',
    description: {
      es: 'Servicio especializado en el envío de notificaciones por email y SMS. Desarrollado con arquitectura de microservicios, incluye cola de mensajes para garantizar la entrega y templates personalizables para diferentes tipos de notificaciones.',
      en: 'Service specialized in sending email and SMS notifications. Built with a microservices architecture, it includes a message queue to guarantee delivery and customizable templates for different notification types.',
    },
    technologies: ['Node.js', 'Express.js', 'Redis', 'Nodemailer', 'Twilio'],
    images: [],
    links: {},
    featured: false,
    backendProject: true,
  },
  {
    title: 'Microservicio Tributario',
    description: {
      es: 'Microservicio desarrollado en NestJS para gestión tributaria empresarial, integrado con la API del SII (Servicio de Impuestos Internos) de Chile. Automatiza facturación electrónica, consulta de estados tributarios y generación de reportes. Implementa caché con Redis y está desplegado en AWS con arquitectura escalable.',
      en: 'Microservice built with NestJS for corporate tax management, integrated with the API of the SII (Chilean Internal Revenue Service). Automates electronic invoicing, tax status queries and report generation. Implements Redis caching and is deployed on AWS with a scalable architecture.',
    },
    technologies: ['NestJS', 'PostgreSQL', 'Redis', 'AWS', 'SII API', 'TypeScript'],
    images: [],
    links: {},
    featured: true,
    backendProject: true,
  },
  {
    title: 'File Microservice',
    description: {
      es: 'Microservicio de administración de archivos desarrollado en NestJS con AWS S3 como storage principal. Gestión completa de archivos por empresa con subida, descarga y eliminación. Comunicación por protocolo TCP, sistema de ACL para archivos públicos y privados por usuario, y organización multi-tenant por empresa.',
      en: 'File management microservice built with NestJS using AWS S3 as primary storage. Full per-company file management with upload, download and deletion. TCP communication, ACL system for public and private files per user, and multi-tenant organization per company.',
    },
    technologies: ['NestJS', 'AWS S3', 'TCP', 'TypeScript', 'ACL', 'Multi-tenant'],
    images: [],
    links: {},
    featured: true,
    backendProject: true,
  },
  {
    title: 'Microservicio de Inventario',
    description: {
      es: 'Sistema de gestión de inventario desarrollado en NestJS que maneja stock por bodega-artículo con control granular de existencias. Integrado con el microservicio de notificaciones para alertas automáticas de stock bajo. Incluye seguimiento en tiempo real, histórico de movimientos y reportes automatizados.',
      en: 'Inventory management system built with NestJS handling stock per warehouse-item with granular control. Integrated with the notifications microservice for automatic low-stock alerts. Includes real-time tracking, movement history and automated reporting.',
    },
    technologies: ['NestJS', 'PostgreSQL', 'Redis', 'Microservicios', 'Cron Jobs', 'TypeScript'],
    images: [],
    links: {},
    featured: true,
    backendProject: true,
  },
];

/** Proyectos destacados para la home (con imagen primero) */
export const featuredProjects: Project[] = frontendProjects
  .filter((p) => p.featured)
  .slice(0, 4);
