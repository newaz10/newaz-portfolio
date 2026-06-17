import { Project } from "~/types/data";

export const projects: Project[] = [
  {
    id: "gotaste",
    title: "GoTaste UK",
    description:
      "A scalable food delivery platform featuring dynamic pricing, automated refunds, and geospatial restaurant discovery. Engineered to reduce support tickets by 30% and improve search accuracy by 25%.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Google Maps API",
      "Tailwind CSS",
    ],
    liveUrl: "https://gotaste.uk",
    image: "/projects/gotaste.png",
    featured: true,
    highlights: [
      {
        icon: "Zap",
        label: "Performance Boost",
        detail: "Dynamic pricing engine reducing support tickets by 30%",
      },
      {
        icon: "MapPin",
        label: "Geospatial Search",
        detail: "Google Maps API integration improving search accuracy by 25%",
      },
      {
        icon: "ShieldCheck",
        label: "RBAC Security",
        detail: "Secured 15+ admin routes with role-based subscription tiers",
      },
      {
        icon: "CreditCard",
        label: "Automated Refunds",
        detail: "Streamlined order-handling framework boosting speed by 20%",
      },
    ],
  },
  {
    id: "chattr",
    title: "Chattr",
    description:
      "A real-time chat application leveraging Socket.IO for persistent full-duplex WebSocket connections. Features a responsive UI that dynamically aligns threads and timestamps based on user roles, with secure MongoDB message persistence.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.IO",
      "Tailwind CSS",
    ],
    liveUrl: "https://chattr-chat.vercel.app/",
    githubUrl: "https://github.com/newaz10/chattr",
    image: "/projects/gotaste.png",
    featured: true,
    highlights: [
      {
        icon: "Zap",
        label: "Real-Time Sync",
        detail: "Persistent full-duplex WebSocket connections via Socket.IO",
      },
      {
        icon: "ShieldCheck",
        label: "Data Persistence",
        detail: "Structured MongoDB models for secure message storage",
      },
      {
        icon: "Users",
        label: "Dynamic UI",
        detail: "Responsive layout with role-based thread alignment",
      },
    ],
  },
  {
    id: "quickblog",
    title: "Quickblog",
    description:
      "An AI-powered MERN blog platform featuring stateless JWT authentication and Google Gemini integration. Implemented ImageKit CDN for live WebP compression, boosting Lighthouse performance scores by 25%.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Google Gemini API",
      "JWT",
      "ImageKit CDN",
    ],
    liveUrl: "https://ai-powered-blog-platform-web.vercel.app",
    githubUrl: "https://github.com/newaz10/ai-powered-blog-platform",
    image: "/projects/gotaste.png",
    featured: true,
    highlights: [
      {
        icon: "Sparkles",
        label: "AI Generation",
        detail:
          "Google Gemini API auto-generates drafts, reducing writer time by 40%",
      },
      {
        icon: "Zap",
        label: "Performance Boost",
        detail: "ImageKit WebP compression boosting Lighthouse scores by 25%",
      },
      {
        icon: "ShieldCheck",
        label: "Secure Auth",
        detail: "Stateless JWT authentication with role-based admin routing",
      },
    ],
  },
  {
    id: "crypto-tracker",
    title: "Crypto Tracker",
    description:
      "An interactive data dashboard consuming CoinGecko REST endpoints to manage live market metrics and historical data. Features multi-timeline historical trend tracking using react-google-charts and client-side route guards.",
    techStack: [
      "React.js",
      "React Router DOM",
      "React Context API",
      "react-google-charts",
      "CoinGecko API",
    ],
    liveUrl: "https://crypto-tracker-bd.vercel.app",
    githubUrl: "https://github.com/newaz10/crypto-tracker",
    image: "/projects/gotaste.png",
    featured: true,
    highlights: [
      {
        icon: "TrendingUp", // Ensure you import TrendingUp from lucide-react
        label: "Live Market Data",
        detail: "Real-time metrics and coin details via CoinGecko REST API",
      },
      {
        icon: "PieChart", // Ensure you import PieChart from lucide-react
        label: "Data Visualization",
        detail:
          "Multi-timeline historical trend tracking with react-google-charts",
      },
      {
        icon: "ShieldCheck",
        label: "State Management",
        detail: "Efficient global state handling using React Context API",
      },
    ],
  },
  {
    id: "healthmug",
    title: "HealthMug",
    description:
      "India's leading online healthcare platform with 100K+ products across Ayurveda, Homeopathy, and wellness categories. Features real-time inventory",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    liveUrl: "https://www.healthmug.com",
    image: "/projects/healthmug.jpg",
    featured: true,
  },
];
