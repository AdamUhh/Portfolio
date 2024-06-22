import Link from "next/link";
import { DetailHeader, Sections } from ".";

export default function Details() {
    return (
        <>
            <Sections>
                <DetailHeader name="👋 Introduction" />
                <p className="text-main-FOREGROUND/60">
                    Hey there!{" "}
                    <span className="text-main-FOREGROUND/80">
                        I&apos;m Adam, a Full Stack Developer who loves making useful apps.
                        I&apos;m good at building responsive, user-friendly web
                        applications.{" "}
                    </span>{" "}
                    I&apos;m flexible with problem-solving and can quickly adapt to new
                    tech, making me handy in fast-paced development.
                </p>
                <p className="text-main-FOREGROUND/60 mt-2">
                    Explore my
                    <Link
                        href={"/projects"}
                        className="mx-1 rounded-[2px] bg-sky-700 px-1.5 py-0.5 text-ms font-medium  tracking-wide text-white/80 hover:bg-sky-700/90"
                    >
                        Projects
                    </Link>
                    and let&apos;s collaborate!
                </p>
            </Sections>
            <Sections>
                <DetailHeader name="💡Interests" />
                <p className="text-main-FOREGROUND/60">
                    I&apos;ve had a lot of interest
                    <span className="text-main-FOREGROUND/80">
                        {" "}
                        creating desktop apps, via Electron or AvaloniaUI.
                    </span>{" "}

                    I&apos;m still exploring different frameworks and languages, and am keen on{" "}
                    <span className="text-main-FOREGROUND/80">
                        learning rust
                    </span>
                    {" "} next.<br /> I&apos;m into design, using tools like
                    <span className="text-main-FOREGROUND/80"> Photoshop and Figma</span>.
                    I also like to occasionally dip my toes into game development, learning about
                    <span className="text-main-FOREGROUND/80">
                        {" "}
                        Unity, Unreal Engine, and Blender
                    </span>
                    .
                </p>
            </Sections>
            <Sections>
                <DetailHeader name="🛠️ What it's like to work with me" />
                <p className="text-main-FOREGROUND/60">
                    I&apos;d say working with me is typical - I&apos;m pretty supportive,
                    I like to solve problems, discuss them, and find out about new concepts.
                    At the moment, I&apos;m building up my portfolio, and gaining more experience through
                    some side jobs and projects.
                </p>
            </Sections>
        </>
    );
}
