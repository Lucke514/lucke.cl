import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export interface Experience {
  company: string;
  letter: string;
  role: Localized;
  startDate: Date;
  endDate: Date | null;
  color: string;
  description?: Localized;
  tasks: Localized[];
  tags: string[];
  isLast?: boolean;
}

export const experiences: Experience[] = [
  {
    company: 'Kibernum',
    letter: 'K',
    role: {
      es: 'Full Stack Software Engineer (Semi Senior+)',
      en: 'Full Stack Software Engineer (Semi Senior+)',
    },
    startDate: new Date(2026, 0), // Ene 2026
    endDate: null,
    color: 'orange',
    tasks: [
      {
        es: 'Desarrollo de aplicaciones full stack con NestJS en backend y React con Next.js en frontend, aplicando arquitectura hexagonal para mantener código limpio y desacoplado',
        en: 'Full stack application development with NestJS on the backend and React with Next.js on the frontend, applying hexagonal architecture to keep code clean and decoupled',
      },
      {
        es: 'Implementación y gestión de contenido mediante Strapi como CMS headless, facilitando la administración de contenido dinámico',
        en: 'Content implementation and management with Strapi as a headless CMS, simplifying dynamic content administration',
      },
      {
        es: 'Gestión de tareas y seguimiento de proyectos mediante Jira bajo metodología Scrum, asegurando entregas ágiles y coordinación efectiva del equipo',
        en: 'Task management and project tracking with Jira under Scrum, ensuring agile deliveries and effective team coordination',
      },
      {
        es: 'Containerización de aplicaciones con Docker y orquestación de despliegues, utilizando GitLab para CI/CD y control de versiones',
        en: 'Application containerization with Docker and deployment orchestration, using GitLab for CI/CD and version control',
      },
    ],
    tags: ['NestJS', 'React', 'Next.js', 'Strapi', 'Docker', 'GitLab', 'Scrum'],
  },
  {
    company: 'Mocca IA',
    letter: 'M',
    role: {
      es: 'Software Engineer (Semi Senior)',
      en: 'Software Engineer (Semi Senior)',
    },
    startDate: new Date(2025, 10), // Nov 2025
    endDate: new Date(2026, 0), // Ene 2026
    color: 'red',
    description: {
      es: 'Proyecto trabajando en soluciones empresariales con inteligencia artificial.',
      en: 'Project focused on enterprise solutions powered by artificial intelligence.',
    },
    tasks: [
      {
        es: 'Implementé soluciones REST API con Node.js + Express, integradas con aplicaciones frontend en React, optimizando la comunicación entre servicios y la gestión de datos',
        en: 'Built REST API solutions with Node.js + Express, integrated with React frontends, optimizing service-to-service communication and data management',
      },
      {
        es: 'Diseñé e integré agentes con inteligencia artificial dentro de soluciones tecnológicas empresariales, mejorando la automatización de procesos y la toma de decisiones',
        en: 'Designed and integrated AI agents into enterprise technology solutions, improving process automation and decision making',
      },
      {
        es: 'Trabajé con infraestructura en Microsoft Azure para el despliegue y orquestación de microservicios, aplicando buenas prácticas de escalabilidad y seguridad en la nube',
        en: 'Worked with Microsoft Azure infrastructure for microservice deployment and orchestration, applying cloud scalability and security best practices',
      },
      {
        es: 'Participé en la planificación de arquitectura de software, aplicando principios Clean Architecture y asegurando mantenibilidad en entornos distribuidos',
        en: 'Participated in software architecture planning, applying Clean Architecture principles and ensuring maintainability in distributed environments',
      },
    ],
    tags: ['Node.js', 'Express', 'React', 'Azure', 'IA'],
  },
  {
    company: 'GESTPYME',
    letter: 'G',
    role: {
      es: 'Full Stack Developer (Semi Senior)',
      en: 'Full Stack Developer (Semi Senior)',
    },
    startDate: new Date(2024, 5), // Jun 2024
    endDate: new Date(2025, 10), // Nov 2025
    color: 'blue',
    tasks: [
      {
        es: 'Implementé pipelines de CI/CD con Docker + GitHub Actions, reduciendo significativamente los tiempos de despliegue',
        en: 'Implemented CI/CD pipelines with Docker + GitHub Actions, significantly reducing deployment times',
      },
      {
        es: 'Desarrollé microservicios en Node.js (NestJS) para mensajería y documentos vía WhatsApp, con integración de chatbots de ventas y comunicación en tiempo real mediante WebSockets',
        en: 'Developed Node.js (NestJS) microservices for WhatsApp messaging and documents, with sales chatbot integration and real-time communication via WebSockets',
      },
      {
        es: 'Automaticé procesos empresariales conectando microservicios de facturación electrónica (SII) mediante Python + Cron',
        en: 'Automated business processes by connecting electronic invoicing microservices (Chilean IRS, SII) using Python + Cron',
      },
      {
        es: 'Desarrollé un microservicio RPA (Robotic Process Automation) en NestJS para automatizar la subida de contratos de trabajo, incorporando validaciones y carga masiva de documentos al ERP',
        en: 'Built an RPA (Robotic Process Automation) microservice in NestJS to automate employment contract uploads, with validations and bulk document loading into the ERP',
      },
      {
        es: 'Diseñé una plataforma de empleo integrada al ERP utilizando Node.js + Prisma, conectada al módulo de personal para publicación y gestión de ofertas laborales',
        en: 'Designed a job platform integrated into the ERP using Node.js + Prisma, connected to the HR module for publishing and managing job offers',
      },
      {
        es: 'Construí una herramienta de gestión de agenda con notificaciones en tiempo real (correo, WhatsApp, Zoom), optimizando la coordinación interna de reuniones',
        en: 'Built a scheduling tool with real-time notifications (email, WhatsApp, Zoom), streamlining internal meeting coordination',
      },
      {
        es: 'Desarrollé un sistema de gestión de órdenes de trabajo (NestJS + Prisma + MySQL), mejorando trazabilidad y tiempos de resolución',
        en: 'Developed a work order management system (NestJS + Prisma + MySQL), improving traceability and resolution times',
      },
      {
        es: 'Desarrollé integraciones dentro de un microservicio TCP utilizando Redis para comunicación distribuida y Strapi como CMS headless, permitiendo el manejo centralizado de productos y sincronización con el ecosistema interno de la empresa',
        en: 'Built integrations inside a TCP microservice using Redis for distributed communication and Strapi as a headless CMS, enabling centralized product management and synchronization with the company ecosystem',
      },
    ],
    tags: ['NestJS', 'Prisma', 'Docker', 'CI/CD', 'RPA', 'Redis', 'Strapi'],
  },
  {
    company: 'Freelance',
    letter: 'F',
    role: {
      es: 'Full Stack Developer (Semi Senior)',
      en: 'Full Stack Developer (Semi Senior)',
    },
    startDate: new Date(2023, 2), // Mar 2023
    endDate: null,
    color: 'green',
    tasks: [
      {
        es: 'Desarrollé una aplicación web de gestión empresarial (Node.js + PostgreSQL) para administrar clientes, bodegas e inventarios, con arquitectura modular y escalable',
        en: 'Developed a business management web app (Node.js + PostgreSQL) to manage customers, warehouses and inventories, with a modular and scalable architecture',
      },
      {
        es: 'Implementé soluciones de optimización para radiotaxis, reduciendo un <strong>70%</strong> las llamadas entre conductores y la central mediante APIs y sockets',
        en: 'Implemented optimization solutions for radio taxi fleets, cutting driver-to-dispatch calls by <strong>70%</strong> through APIs and sockets',
      },
      {
        es: 'Diseñé microservicios escalables con soporte para pasarelas de pago, bases de datos SQL y NoSQL y operaciones CRUD seguras',
        en: 'Designed scalable microservices supporting payment gateways, SQL and NoSQL databases and secure CRUD operations',
      },
    ],
    tags: ['Node.js', 'PostgreSQL', 'APIs', 'Java'],
  },
  {
    company: 'Hospital de Ovalle',
    letter: 'H',
    role: {
      es: 'Practicante en Desarrollo de Software',
      en: 'Software Development Intern',
    },
    startDate: new Date(2024, 0), // Ene 2024
    endDate: new Date(2024, 2), // Mar 2024
    color: 'purple',
    description: {
      es: 'Desarrollé una aplicación para optimizar la entrega de medicamentos, logrando una mejora del <strong>60%</strong> en eficiencia operativa, utilizando WebSockets, HTTP y APIs de voz.',
      en: 'Built an application to optimize medication delivery, achieving a <strong>60%</strong> improvement in operational efficiency using WebSockets, HTTP and voice APIs.',
    },
    tasks: [],
    tags: ['WebSockets', 'Node.js', 'APIs'],
    isLast: true,
  },
];

const MONTHS: Record<Lang, string[]> = {
  es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

export function formatDate(date: Date | null, lang: Lang, present: string): string {
  if (!date) return present;
  return `${MONTHS[lang][date.getMonth()]} ${date.getFullYear()}`;
}

export function calculateDuration(
  startDate: Date,
  endDate: Date | null,
  labels: { year: string; years: string; month: string; months: string }
): string {
  const end = endDate || new Date();

  let months = (end.getFullYear() - startDate.getFullYear()) * 12;
  months += end.getMonth() - startDate.getMonth();
  months += 1; // Incluir el mes actual

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} ${remainingMonths === 1 ? labels.month : labels.months}`;
  } else if (remainingMonths === 0) {
    return `${years} ${years === 1 ? labels.year : labels.years}`;
  }
  return `${years} ${years === 1 ? labels.year : labels.years} ${remainingMonths} ${remainingMonths === 1 ? labels.month : labels.months}`;
}
