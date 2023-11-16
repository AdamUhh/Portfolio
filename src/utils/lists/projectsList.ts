import { StaticImageData } from "next/image";
import { loFlo } from "../../assets";

interface I_Language {
  name: string;
  color: string;
  text?: string;
}

interface I_LanguagesUsed {
  languagesUsed: I_Language[];
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
