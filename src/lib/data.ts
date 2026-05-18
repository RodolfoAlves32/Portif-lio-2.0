import {
  Code2,
  Cpu,
  PenTool,
  FileJson,
  Layout,
  Mail,
  Smartphone,
  Terminal,
  Wand2,
} from "lucide-react";

export const siteData = {
  name: "Rodolfo Alves Vitorino Filho",
  role: "Analista de Sistemas | Front-end Developer | Web Developer | Prompt Engineer",
  email: "ralvesvitorinofilho@gmail.com",
  phone: "+5535992672068",
  socials: {
    github: "https://github.com/RodolfoAlves32",
    linkedin: "https://www.linkedin.com/in/rodolfo-alves-vitorino-84a622206/",
    whatsapp: "https://wa.me/5535992672068",
  },
  hero: {
    greeting: "Olá, eu sou",
    title: "Rodolfo Alves Vitorino Filho",
    subtitle: "Analista de Sistemas focado em Front-end, Desenvolvimento Web e Prompt Engineering.",
    description: "Crio interfaces modernas, responsivas e inteligentes usando HTML, CSS, React, Next.js e ferramentas de IA.",
  },
  about: {
    text: "Sou Analista de Sistemas em formação, com foco em desenvolvimento front-end e criação de experiências web modernas. Tenho interesse em interfaces responsivas, aplicações web com React e Next.js, automações com IA e criação de soluções digitais úteis, bonitas e funcionais.",
    cards: [
      { title: "Desenvolvimento Web", icon: Code2 },
      { title: "Front-end", icon: Layout },
      { title: "UI/UX", icon: PenTool },
      { title: "Prompt Engineering", icon: Wand2 },
      { title: "Low-code Tools", icon: Cpu },
      { title: "Aprendizado Contínuo", icon: Terminal },
    ],
  },
  skills: {
    frontend: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
    design: [
      { name: "UI Design", level: 75 },
      { name: "UX básico", level: 70 },
      { name: "Responsividade", level: 95 },
      { name: "Framer Motion", level: 75 },
      { name: "Componentização", level: 90 },
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Antigravity", level: 80 },
      { name: "Vercel", level: 85 },
    ],
    ai: [
      { name: "Prompt Engineering", level: 90 },
      { name: "Automação com IA", level: 85 },
      { name: "Criação de sites com IA", level: 85 },
      { name: "Low-code/No-code", level: 80 },
      { name: "Otimização de prompts", level: 85 },
    ],
  },
  projects: [
    {
      id: "1",
      name: "SprintCare",
      description: "Sistema web para agendamento e gestão de consultas em clínicas médicas.",
      tech: ["Next.js", "React", "Tailwind", "Prisma"],
      status: "Em desenvolvimento",
      image: "/images/project-sprintcare.jpg",
      github: "https://github.com/seu-usuario/sprintcare",
      demo: "#",
    },
    {
      id: "2",
      name: "Cardápio Digital",
      description: "Site para restaurantes criarem cardápio online com QR Code.",
      tech: ["React", "TypeScript", "Tailwind"],
      status: "Planejado",
      image: "/images/project-menu.jpg",
      github: "#",
      demo: "#",
    },
    {
      id: "3",
      name: "Gerador de Currículo",
      description: "Aplicação web para criar currículos profissionais e exportar em PDF.",
      tech: ["Next.js", "React", "CSS"],
      status: "Planejado",
      image: "/images/project-cv.jpg",
      github: "#",
      demo: "#",
    },
    {
      id: "4",
      name: "Controle Financeiro",
      description: "Sistema simples para registrar receitas, despesas, metas e gráficos.",
      tech: ["React", "Node.js", "PostgreSQL"],
      status: "Planejado",
      image: "/images/project-finance.jpg",
      github: "#",
      demo: "#",
    },
  ],
  timeline: [
    {
      year: "2023",
      title: "Início dos estudos",
      description: "Início dos estudos em Análise e Desenvolvimento de Sistemas.",
    },
    {
      year: "2023",
      title: "Fundamentos Web",
      description: "Aprendizado em HTML, CSS e JavaScript.",
    },
    {
      year: "2024",
      title: "Ecossistema React",
      description: "Evolução para React e Next.js com Tailwind CSS.",
    },
    {
      year: "2024",
      title: "Prática e Construção",
      description: "Criação de projetos pessoais e aplicações completas.",
    },
    {
      year: "2025",
      title: "IA e Prompt Engineering",
      description: "Estudos avançados em Prompt Engineering e ferramentas de IA.",
    },
    {
      year: "Presente",
      title: "Objetivo Profissional",
      description: "Atuar como desenvolvedor front-end ou analista de sistemas.",
    },
  ],
};

export const certificates = [
  {
    title: "Administração de PostgreSQL",
    institution: "GINEAD",
    hours: "100 horas",
    date: "Março de 2026",
    category: "Banco de Dados",
    image: "/assets/certificates/postgresql-ginead.jfif",
    link: "/assets/certificates/postgresql-ginead.jfif"
  },
  {
    title: "Formação Front-end - HTML, CSS, JavaScript, React e +",
    institution: "Udemy",
    hours: "51,5 horas",
    date: "Março de 2026",
    category: "Front-end",
    image: "/assets/certificates/frontend-udemy.jfif",
    link: "/assets/certificates/frontend-udemy.jfif"
  },
  {
    title: "Engenharia de Prompt Eficaz para Servidores Públicos",
    institution: "ENAP",
    hours: "2 horas",
    date: "Março de 2026",
    category: "Prompt Engineering / IA",
    image: "/assets/certificates/prompt-enap.jfif",
    link: "/assets/certificates/prompt-enap.jfif"
  }
];
