import { ReactNode } from "react";
import ContactSection from "../VSCode_Components/ContactSection";
import Details from "./Details";
import Header from "./Header";
import Skills from "./Skills";

export function DetailHeader({ name = "Introduction" }: { name: string }) {
  return <h4 className={"text-3xl font-semibold"}>{name}</h4>;
}

export function Sections({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto flex w-full flex-col px-5 py-3">
      {children}
    </section>
  );
}

export default function AboutMe() {
  return (
    <div className="h-full w-full overflow-y-auto overflow-x-hidden py-5">
      <Header />
      <div className="mb-3 flex border-b-2 border-b-white/10 px-5">
        <div className="mb-[-2px] border-b-2 pb-2 text-xl font-bold">
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
