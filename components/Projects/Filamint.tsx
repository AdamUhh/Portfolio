import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";

import { Button } from "@/shadcn/button";

import { FILAMINT_LINK } from "@/lib/constants-link";

import { FallbackImage } from "../FallbackImage";
import { ProjectProps } from "./projects.type";

export function Filamint({ returnToProjects }: ProjectProps) {
    return (
        <div className="flex size-full flex-col overflow-hidden bg-[#191919] text-accent">
            {/* Content */}
            <div className="flex-1 animate-fade-in-up overflow-y-auto p-8">
                <div className="mx-auto max-w-3xl space-y-8">
                    {/* Title */}
                    <div className="space-y-3">
                        <h1 className="text-5xl font-bold">
                            Filamint - 3D Print & Filamint Tracker
                        </h1>
                        <p className="text-lg text-accent/80">
                            A simple desktop app for tracking your 3D printing
                            spools and prints.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href={FILAMINT_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded bg-[#0a84c8] px-4 py-2 text-sm transition-colors hover:bg-[#0a84c8]/80"
                            >
                                View Github
                                <ExternalLinkIcon className="size-4" />
                            </a>
                        </div>
                    </div>

                    {/* Preview Image */}
                    <div className="overflow-hidden rounded-lg border border-[#3e3e42] bg-[#252526]">
                        <FallbackImage
                            src="/projects/filamint.gif"
                            alt="Filamint"
                            width={0}
                            height={0}
                            className="aspect-video w-full object-cover"
                        />
                    </div>

                    {/* Why I Made It */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold">
                            Why I Made It
                        </h2>
                        <p className="leading-relaxed text-accent/80">
                            Ive got a 3D printer, and have been using an excel
                            file to keep track of my prints and spools. It works
                            but I wanted to use something else. I was tempted to
                            use other apps but instead decided to instead make
                            my own and learn how to create desktop apps in the
                            process.
                        </p>
                    </section>

                    {/* What It Does */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold">What It Does</h2>
                        <ul className="space-y-2 text-accent/80">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 text-[#0a84c8]">•</span>
                                <span>
                                    Create, edit, and delete spools and prints.
                                </span>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="mt-1 text-[#0a84c8]">•</span>
                                <span>
                                    Upload files to prints with automatic
                                    deduplication to avoid storing duplicate
                                    files.
                                </span>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="mt-1 text-[#0a84c8]">•</span>
                                <span>
                                    Keyboard shortcuts for faster navigation and
                                    actions.
                                </span>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="mt-1 text-[#0a84c8]">•</span>
                                <span>
                                    Advanced search with qualifiers (e.g.
                                    material:PLA, vendor:&quot;Bambu
                                    Labs&quot;).
                                </span>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="mt-1 text-[#0a84c8]">•</span>
                                <span>
                                    Preview models directly within the
                                    application via ThreeJS.
                                </span>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="mt-1 text-[#0a84c8]">•</span>
                                <span>
                                    Open prints directly in your preferred
                                    slicer (e.g. OrcaSlicer), configurable.
                                </span>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="mt-1 text-[#0a84c8]">•</span>
                                <span>
                                    Autocomplete suggestions for fields such as
                                    vendor and material, configurable.
                                </span>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="mt-1 text-[#0a84c8]">•</span>
                                <span>
                                    Multiple themes including light, dark, and
                                    additional variants.
                                </span>
                            </li>

                            <li className="flex items-start gap-2">
                                <span className="mt-1 text-[#0a84c8]">•</span>
                                <span>
                                    Cross-platform support for Windows and Linux
                                    (macOS likely compatible but untested).
                                </span>
                            </li>
                        </ul>
                    </section>

                    {/* Challenges */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold">Challenges</h2>
                        <p className="leading-relaxed text-accent/80">
                            Building the app with Wails itself was quite simple.
                            However, since it was still in the v3 alpha stage
                            (at the time I worked on the project), I soon ran
                            into issues where the documentation was outdated,
                            where some functions either didn&apos;t exist,
                            required different arguments, or worse, was
                            documented heavily, but did not actually exist (such
                            as the updater). I was aware of documentation issues
                            going in, and later on just relied on the Go package
                            documentation as the source of truth.
                        </p>
                        <p className="leading-relaxed text-accent/80">
                            One of the more frustrating parts of being in alpha
                            is the lack of a built-in app updater, so I ended up
                            rolling my own. Most existing solutions felt like
                            too much effort to integrate at the time. In
                            hindsight, I wish I had just gone that route. There
                            is just so much trial and error needed to get it
                            working across different OSes and distributions.
                            Definitely a learning experience, but not one I
                            would want to repeat if possible.
                        </p>
                    </section>

                    {/* Optimizations */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold">
                            Optimizations
                        </h2>
                        <p className="leading-relaxed text-accent/80">
                            I went with React Query, which made things a lot
                            cleaner and simpler. I also added a simple file hash
                            system to avoid duplicate .3mf/.stl files being
                            reused across duplicate prints.
                        </p>
                        <p className="leading-relaxed text-accent/80">
                            All services are also modular, and I can reuse them
                            easily across different wails projects, such as the
                            shortcut service, logger service, database service,
                            etc.
                        </p>
                        <p className="leading-relaxed text-accent/80">
                            I also aimed to keep the app scalable by structuring
                            the code in a way that could be adapted for network
                            use later, in case I decide to expand it for browser
                            support later on.
                        </p>
                    </section>

                    {/* Tech Stack */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold">Tech Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded border border-[#3e3e42] bg-[#252526] px-3 py-1.5 text-sm">
                                Wails
                            </span>
                            <span className="rounded border border-[#3e3e42] bg-[#252526] px-3 py-1.5 text-sm">
                                Golang
                            </span>
                            <span className="rounded border border-[#3e3e42] bg-[#252526] px-3 py-1.5 text-sm">
                                Typescript
                            </span>
                            <span className="rounded border border-[#3e3e42] bg-[#252526] px-3 py-1.5 text-sm">
                                React
                            </span>
                        </div>
                    </section>

                    <Button
                        onPointerUp={returnToProjects}
                        className="rounded bg-[#0a84c8] hover:bg-[#0a84c8]/80"
                    >
                        <ArrowLeftIcon className="size-4" />
                        View other projects
                    </Button>
                </div>
            </div>
        </div>
    );
}
