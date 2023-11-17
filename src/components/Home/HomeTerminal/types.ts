interface HomeTerminalContainerProps {
  isOpen: boolean;
  children: React.ReactNode;
}

interface HomeTerminalContentProps {
  isOpen: boolean;
}

interface HomeTerminalProps {
  isOpen: boolean;
  handleClose: () => void;
}

interface HomeTerminalTitlebarProps {
  handleClose: () => void;
}

export type {
  HomeTerminalProps,
  HomeTerminalContainerProps,
  HomeTerminalContentProps,
  HomeTerminalTitlebarProps,
};
