import NotificationContainer from "./Container";
import NotificationContent from "./Content";
import NotificationTitlebar from "./Titlebar";

interface NotificationProps {
  handleClose: () => void;
  isOpen: boolean;
  handleVSCodeClick: () => void;
}

export default function Notification({
  isOpen,
  handleClose,
  handleVSCodeClick,
}: NotificationProps) {
  return (
    <NotificationContainer isOpen={isOpen}>
      <NotificationTitlebar handleClose={handleClose} />
      <NotificationContent handleVSCodeClick={handleVSCodeClick} />
    </NotificationContainer>
  );
}
