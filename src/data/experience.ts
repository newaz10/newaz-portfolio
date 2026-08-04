import { Experience } from "~/types/data";

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Quad Theory Ltd",
    role: "Junior Software Engineer",
    period: "Oct 2025 - Present",
    location: "Remote",
    website: "https://www.linkedin.com/company/quad-theory-ltd/",
    highlights: [
      "Engineered a scalable order-handling framework for GoTaste UK with dynamic pricing and automated refunds, reducing support tickets by 30%.",
      "Integrated Google Maps API and geospatial indexing to power restaurant discovery, improving search accuracy by 25%.",
      "Architected a role-based access control (RBAC) system for subscription tiers, securing 15+ admin routes and ensuring 100% compliance with plan-specific data visibility.",
      "Optimized backend architecture and implemented complex geolocation features for high-impact delivery in a remote collaborative environment.",
    ],
    techUsed: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Maps API",
      "RESTful APIs",
      "JWT",
    ],
  },
  {
    id: "exp-2",
    company: "ZeroByte",
    role: "Frontend Developer",
    period: "Apr 2025 - Sep 2025",
    location: "On-site",
    website: undefined,
    highlights: [
      "Developed responsive user interfaces using React.js and Tailwind CSS, ensuring cross-browser compatibility and mobile-first design.",
      "Collaborated with backend teams to integrate RESTful APIs, optimizing data fetching and state management for improved performance.",
      "Implemented reusable UI components and maintained code quality through Git version control and peer code reviews.",
      "Participated in agile sprints, translating Figma designs into pixel-perfect, interactive web experiences.",
    ],
    techUsed: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Git",
      "REST APIs",
    ],
  },
];
