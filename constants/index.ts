import { IExperience, IProject, IService } from "@/types/constants";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    image: "bootstrap.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Vue",
    image: "vue.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Angular",
    image: "angular.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: ".Net Framwork",
    image: "net.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Laravel",
    image: "laravel.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const services: IService[] = [
  {
    title: "Problem Solver",
    icon: '/dis/web.webp',
    dis: "Skilled in analytical thinking and creative problem-solving, able to tackle complex issues.",
  },
  {
    title: "Frontend Wizard",
    icon: '/dis/backend.webp',
    dis: "Mastery in front-end technologies, delivering engaging and interactive user interfaces.",
  },
  {
    title: "Backend Maestro",
    icon: '/dis/creator.webp',
    dis: "Specializing in server-side development, adept at crafting robust and scalable backend architectures.",
  },
  {
    title: "Code Artisan",
    icon: '/dis/mobile.webp',
    dis: "Dedicated to writing clean, maintainable code that aligns with best practices and coding standards",
  },
];

export const FULLSTACK_SKILL = [
  {
    skill_name: "Github",
    image: "github.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Jira",
    image: "jira.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Bitbucket",
    image: "bitbucket.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Version Control",
    image: "version-control.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Google Analytics",
    image: "google-analytics.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Flutter",
    image: "flutter.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Modern Next.js 14 Portfolio",
    description:
      'Embark on a journey through my professional evolution with the "Modern Next.js Portfolio" - a dynamic showcase of my skills, experiences, and passion for web development. Crafted with precision and powered by Next.js, this portfolio is more than just a static display; it\'s an immersive experience that reflects the cutting edge of modern web technologies.',
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "Interactive Cards Portfolio",
    description:
      'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "Space Themed Website",
    description:
      'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#works",
  },
  {
    title: "Contact me",
    link: "#contact",
  },
] as const;

export const experiences: IExperience[] = [
  {
    title: "Full Stack Engineering",
    company_name: "Workd, Inc.",
    icon: '/company/workd-inc.svg',
    iconBg: "#383E56",
    date: "April 2025",
    points: [
      "Designed, developed, and maintained full-stack web applications within WORKD’s cloud-based business management platform, integrating ERP, CRM, and communication tools into a seamless user experience.",
      "Built and optimized RESTful APIs using Node.js and Express, ensuring secure and scalable data flow between front-end interfaces and back-end services.",
      "Integrated real-time communication tools VoIP, live chat, and email modules) to enhance client relationship management and sales operations.",
      "Led the refactoring of legacy codebases, increasing application performance by 30% and reducing technical debt through best practices and modular architecture.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Blotato",
    icon: '/company/blotato.webp',
    iconBg: "#383E56",
    date: "January 2022 - December 2023",
    points: [
      "Built and maintained core web features using React, Next.js, and Node.js, enhancing performance and user experience.",
      "Integrated AI models OpenAI to transform long-form content YouTube, blogs, podcasts) into platform-specific posts Instagram, TikTok, LinkedIn).",
      "Developed backend services and APIs to support automation tools like Zapier and Airtable, improving workflow efficiency.",
      "Contributed to code quality and team productivity through testing, and CI/CD pipelines with GitHub Actions and Vercel.",
    ],
  },
  {
    title: "Front End Engineer",
    company_name: "Identity Dental Marketing",
    icon: '/company/identitydental_logo.webp',
    iconBg: "#383E56",
    date: "Feburary 2019 - December 2021",
    points: [
      "Developed responsive, SEO-friendly websites using JavaScript, and React, optimizing for both patient experience and marketing performance.",
      "Maintained and updated client websites through custom CMS solutions and integrated tools like Google Analytics and Tag Manager.",
      "Maintained and updated dozens of client websites across diverse dental specialties, using Git for version control and CMS platforms for content updates.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Freelancer",
    icon: '/company/freelance.svg',
    iconBg: "#383E56",
    date: "Feburary 2011 - December 2015",
    points: [
      "Developed a customer management dashboard using C#, SQL, JavaScript, HTML, and CSS, enabling employees to efficiently view and manage customer data.",
      "Built secure RESTful APIs in PHP to facilitate seamless communication between front-end and back-end components.",
      "Automated manual workflows by writing SQL scripts, significantly improving operational efficiency and reducing processing time.",
    ],
  }
] as const;

export const projects: IProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: '/prof/carrent.webp',
    source_code_link: "https://github.com/sangerramirez00/car-rental",
  },
  {
    name: "PressAllMyLinks",
    description:
      "PressAllMyLinks Dashboard lets users combine all their important links into one customizable, shareable page—making online presence management simple and efficient.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: '/prof/pressallmylinks_dashboard.png',
    source_code_link: "https://github.com/sangerramirez00/pressallmylinks-panel-summary",
  },
  {
    name: "Chatbot UI",
    description:
      "Chatbot UI is an open-source interface for chatting with multiple AI models like GPT-4, Claude 3, and Gemini—offering a unified, customizable experience across different APIs.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: '/prof/chatbot-ai.png',
    source_code_link: "https://github.com/sangerramirez00/Chatbot-AI-summary",
  },
  // {
  //   name: "Shahrzad Restaurant",
  //   description:
  //     "Prepare your taste buds for a culinary adventure like no other with Shahrzad, the ultimate restaurant web page that brings a unique shopping experience right to your screen.  Explore a world of delectable dishes, tantalizing flavors, and top-notch services, all in one convenient platform.",
  //   tags: [
  //     {
  //       name: "React JS",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Firebase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: '/prof/ShahrzadRestaurant.webp',
  //   source_code_link: "https://github.com/Jaber-Saed/Progect-food",
  // },
  // {
  //   name: "Movix",
  //   description:
  //     "Get ready for an immersive movie-watching experience like no other with Movix! Our cutting-edge webpage brings the world of cinema to your screen, giving you instant access to a vast library of movies at your fingertips.Plus, our seamless streaming technology ensures smooth playback and high-quality video.",
  //   tags: [
  //     {
  //       name: "React JS",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Axios",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: '/prof/Movix.webp',
  //   source_code_link: "https://github.com/Jaber-Saed/Movix-Single-Page",
  // },
  // {
  //   name: "SpinMaster",
  //   description:
  //     "Get ready for a thrilling slot game experience like no other with SpinMaster!  Our innovative web page brings the excitement and charm of a casino right to your screen, allowing you to spin the reels and win big from the comfort of your own home.you can enjoy a slot games, each with its unique theme, stunning graphics, and immersive sound effects",
  //   tags: [
  //     {
  //       name: "HTML",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Css ",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Java Script",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: '/prof/slot-game.webp',
  //   source_code_link: "https://github.com/Jaber-Saed/slot-game",
  // },
] as const;