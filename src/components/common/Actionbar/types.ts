interface ActionItemProps {
  route: string;
  title: string;
  icon: string;
  external?: boolean;
  isActive?: boolean;
}

interface ActionButtonItemProps extends ActionItemProps {
  setShowTerminal: React.Dispatch<React.SetStateAction<boolean>>;
}

export type { ActionItemProps, ActionButtonItemProps };
