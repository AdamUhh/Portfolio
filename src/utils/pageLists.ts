import {
  mdiEmailEdit,
  mdiDevTo,
  mdiFileMultipleOutline,
  mdiGithub,
  mdiInformationOutline,
  mdiCog,
  mdiConsole,
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
