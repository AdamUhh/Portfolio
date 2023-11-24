

interface TabProps {
  route: string;
  name: string;
  isActive: boolean;
  onClick?: () => void;
}

interface TabContentProps {
  name: string;
  isActive: boolean;
  handleClick?: () => void;
}
export type { TabContentProps, TabProps };

