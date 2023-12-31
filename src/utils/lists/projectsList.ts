import { StaticImageData } from "next/image";
import {
  clockHub,
  loFlo,
  portfolio,
  tausk,
  workInProgress,
} from "../../assets";

interface I_Language {
  name: string;
  bgColor: string;
  color?: string;
}

interface I_LanguagesUsed {
  languagesUsed: I_Language[];
}

interface I_ProjectExtraList {
  title: string;
  description: string[];
}

interface I_ProjectExplorerList {
  name: string;
  route: string;
  title: string;
}

interface I_ProjectList extends I_ProjectExplorerList, I_LanguagesUsed {
  description: string;
  imgSrc: StaticImageData;
  sourceCodeUrl: string;
  viewDemoUrl?: string;
  extra?: I_ProjectExtraList[];
}

const projectList: I_ProjectList[] = [
  {
    name: "loflo.jsx",
    route: "#loflo",
    title: "LoFlo",
    imgSrc: loFlo,
    description:
      "A flashcard app where users can learn more effectively using digital flashcards and sub-folders.",
    languagesUsed: [
      { name: "NextJS", bgColor: "#0284C7" },
      { name: "Drizzle Orm", bgColor: "#c5f74f", color: "#000" },
      { name: "TursoDB", bgColor: "#2a937c" },
    ],
    viewDemoUrl: "https://loflo.vercel.app/",
    sourceCodeUrl: "https://github.com/AdamUhh/Loflo",
    extra: [
      {
        title: "Why I made it",
        description: [
          "I made this flashcard app because I wanted an easy way to remember generic phrases (for languages), and some programming concepts/definitions.",
          "Additionally, it was useful in learning more about NextJS v14",
        ],
      },
      {
        title: "Challenges",
        description: [
          "I had some trouble coming up with a nice design, before deciding to simply make it minimalistic. Moreover, I initially had larger plans such as adding queues and sharing folders, but decided to scale it down as I wouldn't really use these features, and decided that weren't that difficult to implement if needed later on, but would just take up a big chunk of time - I decided to simply use that time on other projects that I had delayed",
        ],
      },
    ],
  },
  {
    name: "vstl.tsx",
    route: "#vstl",
    title: "VSTL",
    imgSrc: workInProgress,
    description:
      "A task manager/todo list app, inspired by the clean look of VSCode. You can easily create, edit, and delete tasks in a file-like structure. Utilize quick shortcuts to transform lines into todo checkboxes. Whether hosted locally or saved on the cloud, it's a straightforward tool to enhance your productivity.",
    languagesUsed: [
      { name: "React", bgColor: "#0284C7" },
      { name: "Electron", bgColor: "#50A8EE", color: "#000" },
      { name: "Redux", bgColor: "#7046B2" },
    ],
    sourceCodeUrl: "https://github.com/AdamUhh/VSTL",
  },
  {
    name: "portfolio.tsx",
    route: "#portfolio",
    title: "Portfolio",
    imgSrc: portfolio,
    description:
      "A personal portfolio showcasing my skills, projects, and experiences. This website is designed to highlight my capabilities and provide a comprehensive overview of my work.",
    languagesUsed: [
      { name: "NextJS", bgColor: "#0284C7" },
      { name: "AWS SES", bgColor: "#DAA83F", color: "#000" },
    ],
    sourceCodeUrl: "https://github.com/AdamUhh/Portfolio",
    extra: [
      {
        title: "Why I made it",
        description: [
          "I created this portfolio to make it easy for employers and collaborators to know about me and my work.",
          "My goal was to make it simple for anyone to explore my background, skills, and projects in a unique way.",
          "The design is inspired by Visual Studio Code (VSCode), a popular code editor. I chose this theme to make visitors who are into coding feel at home. I think it showcases how much I enjoy coding, and connects my portfolio with the world of development.",
          "Additionally, I learnt the new features of NextJS v14 from creating this project.",
        ],
      },
      {
        title: "Challenges",
        description: [
          "At first, I had issues finding a suitable design and what content to showcase and write about. After thinking about it, I decided to simply build it how I visioned it and get it working. I then cleaned the design a bit, before finally asking some friends and family what they thought and how it could be improved.",
        ],
      },
    ],
  },
  {
    name: "tausk.jsx",
    route: "#tausk",
    title: "Tausk",
    imgSrc: tausk,
    description:
      "A todolist app I made when I first started web development. It has features such as add/edit/delete todos, as well as a drag and drop file system, all linked to an Authentication system via Firebase.",
    languagesUsed: [
      { name: "React", bgColor: "#0284C7" },
      { name: "Redux Saga", bgColor: "#999999" },
      { name: "Firebase", bgColor: "#ffca28", color: "#000" },
    ],
    viewDemoUrl: "https://tausk.netlify.app/",
    sourceCodeUrl: "https://github.com/AdamUhh/Tausk",
    extra: [
      {
        title: "Why I made it",
        description: [
          "I wanted to see what I could make that was bigger than usual, and decided to go for this project. Looking at it now, I'm happy to see that I can make a much better version at a much quicker, organized pace (VSTL).",
        ],
      },
      {
        title: "Challenges",
        description: [
          "The drag and drop feature was quite confusing, especially since at the time, as the documentation was difficult to understand. Moreover, the amount of boilerplate required for redux saga at the time was enormous and time-consuming to go through. Additionally, perhaps most importantly, after completing 90% of the project, I got my first burn out. I wasn't really expecting it and it took around a month for me to get past it and work on another project.",
        ],
      },
    ],
  },
  {
    name: "clock-hub.jsx",
    route: "#clock-hub",
    title: "Clock Hub",
    imgSrc: clockHub,
    description:
      "A clock app to keep track of the current time. It features a stopwatch and international clock support, with a range of selected wallpapers.",
    languagesUsed: [{ name: "SvelteKit", bgColor: "#0284C7" }],
    viewDemoUrl: "https://clockhub.netlify.app/",
    sourceCodeUrl: "https://github.com/AdamUhh/clock-hub",
    extra: [
      {
        title: "Why I made it",
        description: [
          "Not much to it, really. I had two screens, and I just wanted one of them to display the time when it was inactive. I added clocks for different time zones so I could coordinate game times with my friends in different countries.",
        ],
      },
    ],
  },
];

const projectExplorerList: I_ProjectExplorerList[] = [
  { name: "index.ts", route: "#overview", title: "overview" },
  ...projectList.map((p) => ({ name: p.name, route: p.route, title: p.title })),
];

export { projectExplorerList, projectList };

export type { I_LanguagesUsed, I_ProjectExtraList, I_ProjectList };
