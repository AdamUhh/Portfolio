import { ReactNode } from "react";

interface NotificationTitlebarProps {
  handleClose: () => void;
}

interface NotificationProps {
  handleClose: () => void;
  isOpen: boolean;
  handleVSCodeClick: () => void;
}

interface NotificationContentProps {
  handleVSCodeClick: () => void;
}

interface NotificationContainerProps {
  isOpen: boolean;
  children: ReactNode;
}

export type {
  NotificationContainerProps,
  NotificationContentProps,
  NotificationProps,
  NotificationTitlebarProps,
};
