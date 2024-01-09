import {
  mdiBadgeAccount,
  mdiCog,
  mdiConsole,
  mdiDevTo,
  mdiEmailEdit,
  mdiFileMultipleOutline,
  mdiGithub,
  mdiInformationOutline,
} from "@mdi/js";

const actionbarTopList: {
  title: string;
  icon: string;
  route: string;
  external?: boolean;
}[] = [
  {
    title: "Home",
    icon: mdiFileMultipleOutline,
    route: "/",
  },
  {
    title: "About me",
    icon: mdiInformationOutline,
    route: "/about",
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
  {
    title: "CV",
    icon: mdiBadgeAccount,
    route: "https://cv.adamuhh.dev/",
    external: true,
  },
];
const actionbarBottomList: {
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
export { actionbarBottomList, actionbarTopList };
