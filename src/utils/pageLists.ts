import {
  mdiCog,
  mdiConsole,
  mdiDevTo,
  mdiEmailEdit,
  mdiFileMultipleOutline,
  mdiGithub,
  mdiInformationOutline,
} from "@mdi/js";

export const explorerList: {
  name: string;
  route: string;
}[] = [
  {
    name: "home.tsx",
    route: "/",
  },
  {
    name: "about.html",
    route: "/about-me",
  },
  {
    name: "contact.css",
    route: "/contact",
  },
  {
    name: "projects.ts",
    route: "/projects",
  },
  {
    name: "github.md",
    route: "/github",
  },
];

export const projectList: {
  name: string;
  route: string;
}[] = [
  {
    name: "index.ts",
    route: "#overview",
  },
  {
    name: "lo-flo.tsx",
    route: "#lo-flo",
  },
  {
    name: "vstl.tsx",
    route: "#vstl",
  },
  {
    name: "nammaX.js",
    route: "#nammaX",
  },
];

export const actionbarList: {
  title: string;
  icon: string;
  route: string;
}[] = [
  {
    title: "Home",
    icon: mdiFileMultipleOutline,
    route: "/",
  },
  {
    title: "About me",
    icon: mdiInformationOutline,
    route: "/about-me",
  },
  {
    title: "Projects",
    icon: mdiDevTo,
    route: "/projects",
  },
  {
    title: "Contact",
    icon: mdiEmailEdit,
    route: "/contact",
  },
];
export const actionbarBottomList: {
  title: string;
  icon: string;
  route: string;
  external?: boolean;
}[] = [
  {
    title: "Terminal",
    icon: mdiConsole,
    route: "#",
  },
  {
    title: "Github",
    icon: mdiGithub,
    route: "https://github.com/adamuhh",
    external: true,
  },
  {
    title: "Settings",
    icon: mdiCog,
    route: "/settings",
  },
];

interface Skill {
  name: string;
  experience: "Beginner" | "Amateur" | "Intermediate" | "Advanced";
}

interface SkillDict<T extends Skill[]> {
  [key: string]: T;
}

export const skillDict: SkillDict<Skill[]> = {
  languages: [
    { name: "HTML5", experience: "Advanced" },
    { name: "CSS3", experience: "Intermediate" },
    { name: "Sass", experience: "Amateur" },
    { name: "TypeScript", experience: "Intermediate" },
    { name: "CSharp", experience: "Amateur" },
    { name: "Autohotkey", experience: "Beginner" },
  ],
  frontend: [
    { name: "React", experience: "Advanced" },
    { name: "Next.js", experience: "Advanced" },
    { name: "Redux", experience: "Intermediate" },
  ],
  backend: [
    { name: "Node.js", experience: "Intermediate" },
    { name: "Express", experience: "Amateur" },
    { name: "GraphQL", experience: "Amateur" },
    { name: "Prisma", experience: "Intermediate" },
    { name: "Docker", experience: "Amateur" },
  ],
  databases: [
    { name: "MySQL", experience: "Intermediate" },
    { name: "PostgreSQL", experience: "Intermediate" },
    { name: "MongoDB", experience: "Intermediate" },
    { name: "Firebase", experience: "Intermediate" },
    { name: "Supabase", experience: "Amateur" },
  ],
  cloud: [{ name: "AWS", experience: "Beginner" }],
  design: [
    { name: "Photoshop", experience: "Amateur" },
    { name: "Figma", experience: "Amateur" },
  ],
  gameDevelopment: [{ name: "Unity", experience: "Beginner" }],
  ecommerce: [{ name: "Shopify", experience: "Intermediate" }],
  desktopApplications: [
    { name: "Electron", experience: "Intermediate" },
    { name: "AvaloniaUI", experience: "Beginner" },
  ],
};
