interface ExplorerItemProps {
  route: string;
  name: string;
  isActive?: boolean;
}

interface ProjectProps {
  route: string;
  name: string;
  isActive?: boolean;
  isProjectUrl?: boolean;
}

export type { ExplorerItemProps, ProjectProps };
