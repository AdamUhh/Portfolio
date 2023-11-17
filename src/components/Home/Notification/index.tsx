import NotificationContainer from "./Container";
import NotificationContent from "./Content";
import NotificationTitlebar from "./Titlebar";
import { NotificationProps } from "./types";

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
