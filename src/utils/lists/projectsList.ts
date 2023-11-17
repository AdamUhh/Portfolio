import { StaticImageData } from "next/image";
import { loFlo } from "../../assets";

interface I_Language {
  name: string;
  color: string;
  text?: string;
}

export interface I_LanguagesUsed {
  languagesUsed: I_Language[];
}

export interface I_ProjectExtraList {
  title: string;
  description: string[];
}

interface I_ProjectExplorerList {
  name: string;
  route: string;
  title: string;
}

export interface I_ProjectList extends I_ProjectExplorerList, I_LanguagesUsed {
  description: string;
  imgSrc: StaticImageData;
  sourceCodeUrl: string;
  viewDemoUrl?: string;
  extra?: I_ProjectExtraList[];
}

export const projectList: I_ProjectList[] = [
  {
    name: "lo-flo.jsx",
    route: "#lo-flo",
    title: "Lo-Flo",
    imgSrc: loFlo,
    description:
      "A flashcard app, similar to Quizlet. It helps you learn stuff with digital flashcards that are easy to make and use. It's simple and makes learning questions or languages easier. Just a straightforward tool to help you study better. It can be hosted locally or saved on the cloud.",
    languagesUsed: [
      { name: "NextJS", color: "#0284C7" },
      { name: "Prisma ORM", color: "#7E22CE" },
      { name: "Sqlite/Postgres", color: "#15803D" },
    ],
    sourceCodeUrl: "https://github.com/AdamUhh/Lo-flo--SQLite",
    extra: [
      {
        title: "Why I made it",
        description: [
          "I made this flashcard app because I wanted an easy way to remember some programming concepts and definitions. Learning programming concepts can be confusing at first, so I created a tool that keeps things simple.",
          "This app, like Quizlet but more tailored to my needs, helps me study by using digital flashcards. It's straightforward and makes learning questions, definitions, or even natural languages easier. You can use it on your own computer or save it in the cloud (e.g. supabase) for easy access. I made it to make studying less of a hassle and more straightforward for anyone learning something new.",
        ],
      },
    ],
  },
  {
    name: "vstl.tsx",
    route: "#vstl",
    title: "VSTL",
    imgSrc: loFlo,
    description:
      "A task manager/todo list app, inspired by the clean look of VSCode. You can easily create, edit, and delete tasks in a file-like structure. Utilize quick shortcuts to transform lines into todo checkboxes. Whether hosted locally or saved on the cloud, it's a straightforward tool to enhance your productivity.",
    languagesUsed: [
      { name: "React", color: "#0284C7" },
      { name: "Electron", color: "#50A8EE", text: "#000" },
      { name: "Redux", color: "#7046B2" },
    ],
    sourceCodeUrl: "https://github.com/AdamUhh/VSTL",
  },
  {
    name: "portfolio.tsx",
    route: "#portfolio",
    title: "Portfolio",
    imgSrc: loFlo,
    description:
      "A personal portfolio showcasing my skills, projects, and experiences. This website is designed to highlight my capabilities and provide a comprehensive overview of my work.",

    languagesUsed: [
      { name: "NextJS", color: "#0284C7" },
      { name: "AWS SES", color: "#DAA83F" },
    ],
    sourceCodeUrl: "https://github.com/AdamUhh/Portfolio",
    extra: [
      {
        title: "Why I made it",
        description: [
          "I created this portfolio to make it easy for employers and collaborators to know about me and my work.",
          "My goal was to make it simple for anyone to explore my background, skills, and projects in a unique way.",
          "The design is inspired by Visual Studio Code (VSCode), a popular code editor. I chose this theme to make visitors who are into coding feel at home. I think it showcases how much I enjoy coding, and connects my portfolio with the world of development",
        ],
      },
    ],
  },
  // {
  //   name: "e-commerce-site.tsx",
  //   route: "#ecommerce",
  //   title: "E-Commerce Site",
  //   imgSrc: loFlo,
  //   description:
  //     "A flashcard app, similar to Quizlet. It helps you learn stuff with digital flashcards that are easy to make and use. It's simple and makes learning questions or languages easier. Just a straightforward tool to help you study better. It can be hosted locally or saved on the cloud.",
  //   languagesUsed: [
  //     { name: "NextJS", color: "#0284C7" },
  //     { name: "Prisma ORM", color: "#7E22CE" },
  //     { name: "Sqlite/Postgres", color: "#15803D" },
  //   ],
  //   sourceCodeUrl: "https://github.com/AdamUhh/Lo-flo--SQLite",
  // },
  // {
  //   name: "e-commerce-dashboard.tsx",
  //   route: "#headless-ecommerce-dashboard",
  //   title: "Headless E-Commerce Dashboard",
  //   imgSrc: loFlo,
  //   description:
  //     "A flashcard app, similar to Quizlet. It helps you learn stuff with digital flashcards that are easy to make and use. It's simple and makes learning questions or languages easier. Just a straightforward tool to help you study better. It can be hosted locally or saved on the cloud.",
  //   languagesUsed: [
  //     { name: "NextJS", color: "#0284C7" },
  //     { name: "Prisma ORM", color: "#7E22CE" },
  //     { name: "Sqlite/Postgres", color: "#15803D" },
  //   ],
  //   sourceCodeUrl: "https://github.com/AdamUhh/Lo-flo--SQLite",
  // },
  // {
  //   name: "nammaX.js",
  //   route: "#nammaX",
  //   title: "NammaX Gym Website + Admin Dashboard",
  //   imgSrc: loFlo,
  //   description:
  //     "A flashcard app, similar to Quizlet. It helps you learn stuff with digital flashcards that are easy to make and use. It's simple and makes learning questions or languages easier. Just a straightforward tool to help you study better. It can be hosted locally or saved on the cloud.",
  //   languagesUsed: [
  //     { name: "NextJS", color: "#0284C7" },
  //     { name: "Prisma ORM", color: "#7E22CE" },
  //     { name: "Sqlite/Postgres", color: "#15803D" },
  //   ],
  //   sourceCodeUrl: "https://github.com/AdamUhh/Lo-flo--SQLite",
  // },
];

export const projectExplorerList: I_ProjectExplorerList[] = [
  { name: "index.ts", route: "#overview", title: "overview" },
  ...projectList.map((p) => ({ name: p.name, route: p.route, title: p.title })),
];
