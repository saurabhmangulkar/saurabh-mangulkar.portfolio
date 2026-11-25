// Saurabh Mangulkar - Structured Portfolio Data

export const personalInfo = {
  name: "Saurabh Mangulkar",
  title: "Java Full Stack Developer | React Developer | Spring Boot Developer",
  location: "Pune, Maharashtra, India",
  relocation: "Open to Relocation",
  email: "saurabhmangulkar@rediffmail.com",
  phone: "+91 8975717380",
  github: "https://github.com/saurabhmangulkar",
  linkedin: "https://linkedin.com/in/saurabh-mangulkar",
  resumeUrl: "/Saurabh_Mangulkar_Resume.pdf",
  bio: "I am an Electronics and Telecommunication Engineering graduate who discovered a passion for software engineering and transitioned into full-stack web development. I enjoy designing complete applications from frontend to backend while focusing on clean architecture, maintainable code, responsive interfaces, and secure APIs. I am passionate about building products rather than simply writing code.",
  tagline: "Building scalable, secure, and user-centric web applications with clean architecture and exceptional UX.",
  mission: "I build modern, scalable, secure, and user-centric web applications that solve real-world problems with clean architecture and exceptional user experience.",
  experienceYears: "Feb 2026 – Present (Internship)",
};

export const stats = [
  { id: "cgpa", label: "Degree CGPA", value: 8.36, suffix: "/10" },
  { id: "projects", label: "Major Projects", value: 3, suffix: "" },
  { id: "commits", label: "GitHub Commits", value: 300, suffix: "+" },
  { id: "experience", label: "Internship Months", value: 6, suffix: "+" },
];

export const experience = [
  {
    role: "Java Full Stack Developer Intern",
    company: "BatosIT",
    location: "Pune, Maharashtra",
    duration: "Feb 2026 – Present",
    highlights: [
      "Developed and maintained full-stack web application modules using Java, Spring Boot, React, Hibernate, and MySQL.",
      "Designed and integrated secure, low-latency RESTful APIs using Spring Boot and Axios for seamless frontend-backend communication.",
      "Implemented complex relational database operations and entity relationships using Hibernate/JPA.",
      "Debugged and resolved critical application issues, improving system stability and overall user experience.",
      "Collaborated using Git/GitHub version control in Agile development sprints."
    ]
  }
];

export const projects = [
  {
    id: "jobhub",
    title: "JobHub: Multi-Tenant Recruitment Portal",
    subtitle: "Flagship Full-Stack Job Portal",
    description: "A modern full-stack job portal built with React and Spring Boot. Features role-based access, secure JWT authentication, and complete company, employee, job, and application management dashboards.",
    problem: "Recruiters and job seekers experience bottlenecks in hiring portals due to unoptimized filtering, insecure CV pipelines, and slow application tracking transitions.",
    solution: "Engineered a secure Java backend leveraging Spring Security and JWT to ensure safe session-less token exchanges. Structured complex entity-relationship models for candidate records and optimized matching logic.",
    features: [
      "JWT Security & Role-Based Access: Tailored interfaces for Admins, Recruiters, and Job Seekers.",
      "Company & Employee Management: Comprehensive modules for organizing corporate entity profiles.",
      "Job Management: Streamlined workflows for job creation, modification, and status categorization.",
      "Application Tracker: Live status flow for recruiters to shortlist, reject, or schedule interviews.",
      "Resume Management: Seamless file upload and download integration.",
      "Responsive UI & Dashboard: Premium dashboard layouts built in React and Tailwind."
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "Hibernate", "JPA", "MySQL", "React", "Axios", "Tailwind CSS"],
    architecture: "Layered Controller-Service-Repository pattern with Hibernate/JPA ORM mapping candidate database tables dynamically.",
    challenges: "Configuring session-less JWT token validation filters and handling multipart file uploads (resumes) asynchronously while maintaining secure, non-blocking Spring security endpoints.",
    whatILearned: "Mastered building role-based routes in React, configuring custom authentication entry points in Spring Security, handling relational entity mappings (One-to-Many), and optimizing paginated JPA queries.",
    github: "https://github.com/saurabhmangulkar/job-portal",
    demo: "https://github.com/saurabhmangulkar/job-portal",
    category: "Full Stack",
    isFlagship: true
  },
  {
    id: "erp-dashboard",
    title: "ERP Dashboard: Enterprise Analytics",
    subtitle: "Dynamic Corporate Resource Management",
    description: "Enterprise dashboard with company analytics, employee management, and department/branch overviews. Built for modern UI/UX with responsive layouts.",
    problem: "Corporate managers struggle to obtain a unified, real-time snapshot of employee statistics and branch distributions across complex department structures.",
    solution: "Created a modern corporate analytics dashboard with clean cards, smooth hover interactions, and role-based views. Connected React states to APIs using Axios, displaying complex charts and branch logs.",
    features: [
      "Company Dashboard: High-level overview of core corporate KPIs and growth metrics.",
      "Employee Statistics: Visual representation of employee distributions, departments, and payroll statuses.",
      "Department & Branch Overviews: Detailed breakdown of departmental tasks and branch locations.",
      "Role-Based Interface: Customized interface controls depending on manager authorization levels.",
      "Responsive Layout: Sleek responsive grid that renders beautifully on mobile, tablet, and desktop."
    ],
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Axios", "REST APIs"],
    architecture: "Decoupled component architecture with dynamic mock-API integration and stateful UI grids.",
    challenges: "Designing a highly performant, responsive grid system that displays dozens of analytics cards and department logs without visual clutter or layout shifts.",
    whatILearned: "Deepened my skills in React lifecycle hooks, custom CSS variables, complex Tailwind grids, and structuring reusable layout widgets.",
    github: "https://github.com/saurabhmangulkar",
    demo: "https://github.com/saurabhmangulkar",
    category: "Frontend"
  },
  {
    id: "smart-robot",
    title: "Mobile Controlled Smart Robot",
    subtitle: "Final Year Embedded Systems Project",
    description: "Mobile controlled smart robot designed for hardware integration, Bluetooth communication, and mobile app control. Built with Arduino Nano.",
    problem: "Traditional remote-controlled hardware requires expensive RF controllers and lacks user-friendly mobile monitoring applications.",
    solution: "Integrated an Arduino Nano controller with a Bluetooth receiver, linking it directly to a custom Blynk dashboard interface. Programmed Embedded C registers to trigger Buck converters and motor movements.",
    features: [
      "Mobile Control: Remote robot navigation via Bluetooth and mobile phone inputs.",
      "Embedded Systems: Low-level hardware registry configuration using Arduino Nano.",
      "Hardware Integration: Connection of buck converters, lithium batteries, and DC motors.",
      "IoT Concepts: Stateful communication protocols handling data telemetry between mobile app and firmware."
    ],
    tech: ["Arduino Nano", "Embedded C", "Bluetooth", "Blynk", "Buck Converter", "Lithium Battery", "DC Motors"],
    architecture: "Event-driven micro-firmware loop reading input packets from serial communication channels and setting GPIO outputs.",
    challenges: "Calibrating power delivery via buck converters to handle voltage drops during DC motor acceleration without rebooting the Arduino Nano.",
    whatILearned: "Understood embedded system constraints, serial packet protocols, hardware assembly, and debugging signal logic using oscilloscopes.",
    github: "https://github.com/saurabhmangulkar",
    demo: "https://github.com/saurabhmangulkar",
    category: "Embedded & IoT"
  }
];

export const skills = {
  languages: [
    { name: "Java", level: 92, icon: "SiJava" },
    { name: "JavaScript", level: 88, icon: "SiJavascript" },
    { name: "SQL", level: 86, icon: "DiMysql" },
    { name: "Python", level: 75, icon: "SiPython" },
    { name: "C / C++", level: 80, icon: "SiCplusplus" }
  ],
  backend: [
    { name: "Spring Boot", level: 90, icon: "SiSpringboot" },
    { name: "Spring Security", level: 85, icon: "SiSpringsecurity" },
    { name: "JWT Authentication", level: 85, icon: "SiJsonwebtokens" },
    { name: "Hibernate / JPA", level: 88, icon: "SiHibernate" },
    { name: "Spring MVC / JDBC", level: 86, icon: "SiSpringboot" },
    { name: "RESTful APIs", level: 92, icon: "AiOutlineApi" }
  ],
  frontend: [
    { name: "React / Vite", level: 90, icon: "SiReact" },
    { name: "Tailwind CSS", level: 92, icon: "SiTailwindcss" },
    { name: "JavaScript (ES6+)", level: 88, icon: "SiJavascript" },
    { name: "HTML5 / CSS3", level: 95, icon: "SiHtml5" },
    { name: "React Router", level: 88, icon: "SiReact" },
    { name: "Axios & APIs", level: 86, icon: "SiAxios" },
    { name: "Framer Motion", level: 82, icon: "SiFramer" }
  ],
  databases: [
    { name: "MySQL", level: 88, icon: "SiMysql" },
    { name: "Oracle SQL", level: 82, icon: "SiOracle" },
    { name: "MongoDB", level: 80, icon: "SiMongodb" },
    { name: "SQL Concepts", level: 88, icon: "SiMysql" }
  ],
  tools: [
    { name: "Git & GitHub", level: 88, icon: "SiGit" },
    { name: "VS Code / Eclipse", level: 86, icon: "SiVisualstudiocode" },
    { name: "Postman", level: 90, icon: "SiPostman" },
    { name: "Docker", level: 78, icon: "SiDocker" },
    { name: "Jenkins", level: 75, icon: "SiJenkins" },
    { name: "Node.js / NPM", level: 82, icon: "SiNodedotjs" }
  ],
  ai: [
    { name: "Prompt Engineering", level: 90, icon: "SiCpu" },
    { name: "Generative AI / LLMs", level: 85, icon: "SiCpu" },
    { name: "Spring AI (Learning)", level: 70, icon: "SiSpringboot" },
    { name: "AI-assisted Dev", level: 92, icon: "SiVisualstudiocode" }
  ]
};

export const education = [
  {
    degree: "Bachelor of Engineering in Electronics & Telecommunication Engineering",
    institution: "Jawaharlal Darda Institute of Engineering and Technology (SGBAU)",
    location: "Amravati, Maharashtra, India",
    duration: "2021 – 2025",
    gpa: "8.36 / 10",
    details: "Specialized in Embedded Systems, Computer Networks, Data Structures, and Software Architecture. Actively built full-stack software products alongside engineering coursework."
  }
];

export const certifications = [
  { title: "Java Programming Specialist", issuer: "Oracle Academy / Coursera" },
  { title: "SQL for Data Science", issuer: "UC Davis" },
  { title: "Spring Boot Fundamentals", issuer: "Baeldung Pro / Udemy" },
  { title: "Embedded C & C++ Programming", issuer: "SGBAU Academy" }
];

export const services = [
  {
    title: "Full Stack Web Development",
    description: "Building production-grade web applications from the ground up, linking high-performance Java backends to elegant, modern React user interfaces.",
    icon: "FiCpu"
  },
  {
    title: "Spring Boot APIs & Security",
    description: "Designing structured RESTful APIs, implementing robust entity relationships with Hibernate, and locking endpoints with session-less JWT authorization.",
    icon: "FiServer"
  },
  {
    title: "Business Dashboards & UIs",
    description: "Creating highly interactive data visualizations, analytics dashboards, and admin control panels styled with custom modern layouts.",
    icon: "FiDatabase"
  }
];

export const leadership = [
  { role: "ETA Club Member", desc: "Coordinated technical seminars, workshops, and project showcases within the Electronics & Telecommunication Association." },
  { role: "Joint Treasurer", desc: "Managed budgets, vendor invoices, and financial records for university events, ensuring auditing transparency." },
  { role: "Publicity Coordinator", desc: "Designed marketing materials and outreach plans for college festivals, increasing event attendance by 40%." },
  { role: "Class Representative", desc: "Liaised between university administration and a class of 60+ students, resolving academic schedules and organizing study groups." }
];

export const interests = [
  "Frontend Engineering",
  "Backend Engineering",
  "Full Stack Development",
  "Artificial Intelligence",
  "System Design",
  "Cloud Infrastructure",
  "Software Architecture",
  "Modern UI/UX Design",
  "Performance Optimization",
  "Clean Code Practices"
];

export const careerGoals = [
  "Become an excellent Software Engineer at a leading tech organization.",
  "Architect and build highly scalable, robust software products.",
  "Master enterprise Full Stack Development best practices.",
  "Learn AI Engineering and integrate LLMs into business pipelines.",
  "Contribute to impactful, real-world open-source software.",
  "Commit to continuous learning of next-generation paradigms."
];

export const testimonials = [
  {
    quote: "Saurabh is a proactive engineer. During his BatosIT internship, he rapidly learned Spring Security JWT integration, solving critical routing access problems that unblocked our frontend developers.",
    author: "BatosIT Engineering Lead",
    role: "Senior Engineering Manager"
  },
  {
    quote: "His command over Java, Spring Boot, and entity mapping is exceptional. Saurabh writes highly structured, MVC-compliant controllers that make integrations a breeze.",
    author: "Full-Stack Project Partner",
    role: "Lead React Architect"
  }
];
