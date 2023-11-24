import ContactMe from "components/ContactMe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function ContactPage() {
  return <ContactMe />;
}
