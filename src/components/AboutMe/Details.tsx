import Link from "next/link";
import { DetailHeader, Sections } from ".";

export default function Details() {
  return (
    <>
      <Sections>
        <DetailHeader name="👋 Introduction" />
        <p className="text-white/50">
          Hey there!{" "}
          <span className="text-white/75">
            I&apos;m Adam, a Full Stack Developer who loves making useful apps.
            I&apos;m good at building responsive, user-friendly web
            applications.{" "}
          </span>{" "}
          I&apos;m flexible with problem-solving and can quickly adapt to new tech,
          making me handy in fast-paced development.
        </p>
        <p className="text-white/50">
          Explore my
          <Link
            href={"/projects"}
            className="mx-1 rounded-[2px] bg-sky-700 px-1.5 py-0.5 text-ms font-semibold text-white hover:bg-sky-700/90"
          >
            Projects
          </Link>
          and let&apos;s collaborate!
        </p>
      </Sections>
      <Sections>
        <DetailHeader name="💡Interests" />
        <p className="text-white/50">
          I&apos;ve had a lot of fun (and stress){" "}
          <span className="text-white/75">
            creating desktop apps with Electron
          </span>{" "}
          and am exploring making apps that work on different devices with
          AvaloniaUI. I&apos;m also into design, using tools like Photoshop and
          Figma. I&apos;m also dipping my toes into game development, learning
          about Unity, Unreal Engine 4, and Blender.
        </p>
      </Sections>
      <Sections>
        <DetailHeader name="🛠️What it's like to work with me" />
        <p className="text-white/50">
          I&apos;d say working with me is manageable/typical, like having a
          helpful teammate who&apos;s able to solve problems and is able to
          learn new things quickly. At the moment, I&apos;m working on getting
          better at talking with others and gaining more experience in teamwork.
          The tech world is always changing, and I&apos;m keeping up with it and
          staying open-minded.
        </p>
      </Sections>
    </>
  );
}
