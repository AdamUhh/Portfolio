import AboutMe from "components/AboutMe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutPage() {
  return <AboutMe />;
}
