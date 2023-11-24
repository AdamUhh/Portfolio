import { ReactNode } from "react";
import ContactSection from "../VSCode_Components/ContactSection";
import Details from "./Details";
import Header from "./Header";
import Skills from "./Skills";

export function DetailHeader({ name = "Introduction" }: { name: string }) {
  return <h4 className={"text-3xl font-bold"}>{name}</h4>;
}

export function Sections({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto flex w-full flex-col px-5 py-3 sm:px-2">
      {children}
    </section>
  );
}

export default function AboutMe() {
  return (
    <div className="h-full w-full overflow-y-auto overflow-x-hidden py-5 sm:py-2">
      <Header />
      <div className="mb-3 flex border-b-2 border-b-main-FOREGROUND/10 px-5 sm:px-2">
        <div className="mb-[-2px] border-b-2 border-b-main-FOREGROUND pb-2 text-xl font-bold">
          Details
        </div>
      </div>
      <Details />
      <Skills />
      <Sections>
        <ContactSection />
      </Sections>
    </div>
  );
}
