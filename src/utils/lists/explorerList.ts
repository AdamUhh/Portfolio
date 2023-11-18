interface I_ExplorerList {
  name: string;
  route: string;
  hideInTabs?: boolean;
}

const explorerList: I_ExplorerList[] = [
  {
    name: "home.tsx",
    route: "/",
    hideInTabs: true,
  },
  {
    name: "about.html",
    route: "/about",
  },
  {
    name: "projects.ts",
    route: "/projects",
  },
  {
    name: "contact.css",
    route: "/contact",
  },
];

export { explorerList };
