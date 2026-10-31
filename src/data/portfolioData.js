// ============================================================
// portfolioData.js — all website content lives here.
// Components import from this file; never hard-code text in components.
// ============================================================

// ─── Personal identity ───────────────────────────────────────
export const personalInfo = {
  name: "Muadh Ali Abdullah",
  firstName: "Muadh Ali Abdullah",
  brandName: "Muadh Ali Abdullah", // shown in the preloader, navbar and footer
  title: "Data Analyst",
  location: "Mangaluru, India",
  phone: "+91 7760918125",
  emails: {
    primary: "amuadhali@gmail.com",
    secondary: "",
  },
  summary:
    "Computer Science Engineering graduate with hands-on experience in SQL, Python, MS Excel, and Power BI, gained through a structured data analytics internship.",
  resumeUrl: "/Resume.pdf", // place Resume.pdf inside the /public folder
};

// ─── TAP Academy credit — used in the footer ─────────────────
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

// ─── Social links ─────────────────────────────────────────────
export const socialLinks = {
  github: "https://github.com/Muadh15",
  linkedin: "https://www.linkedin.com/in/muadh-ali-abdullah-512a36361/",
  instagram: "", // not provided — leave empty to hide the icon
};

// ─── Hero section ─────────────────────────────────────────────
export const heroContent = {
  greeting: "Hi, I'm Muadh Ali Abdullah",
  titleHighlight: "Data Analyst",
  subtitle:
    "Turning raw data into clear business insights using SQL, Python, Power BI and Excel — open to entry-level opportunities.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:amuadhali@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

// ─── About section ────────────────────────────────────────────
export const aboutContent = {
  heading: "Hello!",
  // HTML is rendered with dangerouslySetInnerHTML — only use your own trusted text here.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Muadh Ali Abdullah</span>, a Computer Science Engineering graduate transitioning into Data Analytics, based in Mangaluru. With a background in software development using React, JavaScript and MongoDB, I'm currently upskilling in SQL, Python, Statistics and Power BI — sharpening my skills through the placement training program at TAP Academy. I focus on building practical skills through real-world datasets and projects, with a goal of becoming strong in data cleaning, visualisation, reporting and business insights. Currently seeking entry-level Data Analyst opportunities.`,
  techStack: ["SQL", "Python", "Power BI", "MS Excel", "React"],
};

// ─── Process / Skills section ─────────────────────────────────
export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn data into decisions",
  description:
    "A structured approach to understanding, cleaning, analysing, and presenting data for real business impact.",
  cards: [
    {
      number: "01",
      title: "Understand",
      text: "I start by understanding the business question, exploring the dataset, and identifying the key metrics that matter.",
    },
    {
      number: "02",
      title: "Clean",
      text: "I clean and validate the data, removing inconsistencies and ensuring quality before any analysis begins.",
    },
    {
      number: "03",
      title: "Analyse",
      text: "I use SQL, Python and Excel to explore patterns, trends, and outliers that answer the business question.",
    },
    {
      number: "04",
      title: "Visualise",
      text: "I present the findings in clear Power BI dashboards and reports that non-technical stakeholders can act on.",
    },
  ],
  endText: "Ready to ship!",
};

// ─── Technical skills ─────────────────────────────────────────
export const technicalSkills = {
  categories: [
    {
      title: "Data Analysis & Quality",
      skills: [
        { name: "SQL" },
        { name: "Python" },
        { name: "MS Excel" },
        { name: "Power BI" },
        { name: "Data Cleaning & Validation" },
      ],
    },
    {
      title: "Programming & Scripting",
      skills: [
        { name: "JavaScript" },
        { name: "React" },
        { name: "HTML & CSS" },
        { name: "Node.js" },
      ],
    },
    {
      title: "Databases & Integration",
      skills: [
        { name: "MongoDB" },
        { name: "REST APIs" },
        { name: "ETL / Data Pipeline Basics" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
      ],
    },
  ],
};

// ─── Leadership / Activities ──────────────────────────────────
// Empty — no activities provided.
export const leadershipList = [];

// ─── Internships / Experience ─────────────────────────────────
export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Data Analyst Intern",
    duration: "06/2026 – Present",
    highlights: [
      "Undergoing structured, hands-on training in SQL, Python, Excel, and Power BI as part of a data analyst internship program.",
      "Completing guided assignments and case studies covering data cleaning, validation, quality checks, and querying of real-world datasets.",
      "Applying structured, detail-oriented problem-solving to practical datasets under mentorship, translating requirements into working queries and dashboards.",
    ],
    skills: [
      "Data Cleaning & Validation",
      "Quality Checks & Querying",
      "Business Dashboards & Reporting",
      "Problem Solving",
    ],
    tech: ["SQL", "Python", "MS Excel", "Power BI"],
  },
  {
    organization: "Dhee Coding Lab",
    role: "MERN Full Stack Intern",
    duration: "Jan 2025 – Jun 2025",
    highlights: [
      "Completed a 6-month structured internship learning the MERN stack (MongoDB, Express, React, Node.js).",
      "Built web pages and UI components using HTML, CSS, JavaScript, and React in a learning-focused environment.",
    ],
    skills: [
      "MERN Stack Development",
      "Web Development",
      "UI Component Building",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "HTML", "CSS", "JavaScript"],
  },
];

// ─── Soft skills ──────────────────────────────────────────────
export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Collaborated with a 4-person team on CodeVault, coordinating across implementation and testing to deliver a competition-winning product.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Translate complex data findings into clear dashboards and reports that non-technical stakeholders can understand and act on.",
  },
  {
    name: "Leadership",
    icon: "🎯",
    desc: "Took full ownership of the marketplace UI in CodeVault and built DevBoard end-to-end, self-managing the project plan from start to finish.",
  },
  {
    name: "Time Management",
    icon: "⏱️",
    desc: "Completed a 6-month structured internship while concurrently building personal projects and upskilling in data analytics tools.",
  },
];

// ─── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    id: "project-codevault",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "CodeVault",
    description:
      "A full-stack code marketplace where developers can browse, buy, and sell code snippets, powered by an OpenAI API integration for intelligent code modification. Built with a 4-person team — owned the marketplace UI end-to-end and won 3rd prize in an inter-class project competition.",
    techTags: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
    links: {
      github: "https://github.com/Muadh15/CodeVault",
      demo: "", // "" displays "Demo Coming Soon"
    },
    isFlagship: true,
    // No video link provided — field intentionally omitted
  },
  {
    id: "project-devboard",
    number: "02",
    badge: null,
    title: "DevBoard",
    description:
      "A lightweight, Jira-style sprint and task management tool featuring task boards, filtering, and state management. Built end-to-end as a solo project, following a structured self-paced plan.",
    techTags: ["React", "MongoDB"],
    links: {
      github: "https://github.com/Muadh15/DevBoard",
      demo: "",
    },
    isFlagship: false,
    // No video link provided — field intentionally omitted
  },
  {
    id: "project-retail-dashboard",
    number: "03",
    badge: null,
    title: "Retail Sales Analytics Dashboard",
    description:
      "Cleaned and analysed 15,000+ retail transactions using SQL to surface data quality issues and business trends; built an interactive Power BI dashboard tracking revenue, regional sales, and top-performing products.",
    techTags: ["SQL", "Power BI", "Data Cleaning", "Data Validation"],
    links: {
      github: "https://github.com/Muadh15/retail-sales-dashboard",
      demo: "",
    },
    isFlagship: false,
    // No video link provided — field intentionally omitted
  },
];

// ─── Certificates (used by optional Certificates component) ───
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/muadh-ali-abdullah-512a36361/",
};

// ─── Education ────────────────────────────────────────────────
export const education = {
  degree: "B.E. Computer Science",
  institution: "St Joseph Engineering College",
  cgpa: "2022 – 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

// ─── Footer ───────────────────────────────────────────────────
export const footerContent = {
  taglines: [
    "Data Analyst",
    "SQL · Python · Power BI",
    "Turning Data into Decisions",
  ],
  credential: "B.E. Computer Science",
  copyright: `© ${new Date().getFullYear()} Muadh Ali Abdullah | Built with React`,
};

// ─── EmailJS (read from .env.local — never hard-code secrets) ─
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
