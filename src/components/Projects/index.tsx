import Image from "next/image";
import NumberedList from "./LineNumber";
import { loFlo } from "../../assets";

export default function Projects() {
  return (
    <NumberedList>
      <h1 id="#" className="border-b-1 border-white text-3xl font-medium">
         Personal Projects
      </h1>
      <p className="text-xl">
        These are some of the projects I have worked on:
      </p>
      <br />
      <h1 id="#lo-flo" className="border-b-1 border-white text-2xl">
        Lo-Flo
      </h1>
      <div className="flex gap-4">
        <Image src={loFlo} alt="Lo-Flo Image" width={300} />
        <h4 className="text-xl pt-4">A flashcard app similar to quizlet</h4>
      </div>
      <br />
      <h1 id="#vstl" className="border-b-1 border-white text-2xl">
         VSTL
      </h1>
      <Image src={loFlo} alt="Lo-Flo Image" width={300} />
      {/* <div id="#nammaX"></div> */}
    </NumberedList>
  );
}
