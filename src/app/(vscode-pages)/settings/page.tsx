import Settings from "components/VSCode_Components/Settings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Settings',
}

export default function SettingsPage() {
  return (
    <>
      <Settings />
    </>
  );
}
