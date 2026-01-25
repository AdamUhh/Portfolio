import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";

import { Button } from "@/shadcn/button";

import { STOREFRONT_DEMO } from "@/lib/constants-link";

import { FallbackImage } from "../FallbackImage";
import { ProjectProps } from "./projects.type";

export function StorefrontDemo({ returnToProjects }: ProjectProps) {
    return (
        <div className="flex size-full flex-col overflow-hidden bg-[#191919] text-accent">
            {/* Content */}
            <div className="flex-1 animate-fade-in-up overflow-y-auto p-8">
                <div className="mx-auto max-w-3xl space-y-8">
                    {/* Title */}
                    <div className="space-y-3">
                        <h1 className="text-5xl font-bold">Storefront Demo</h1>
                        <p className="text-lg text-accent/80">
                            A demo of a storefront built to showcase a
                            simplified version of a real production store&apos;s
                            frontend.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href={STOREFRONT_DEMO}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded bg-[#0a84c8] px-4 py-2 text-sm transition-colors hover:bg-[#0a84c8]/80"
                            >
                                View Live Demo
                                <ExternalLinkIcon className="size-4" />
                            </a>
                        </div>
                    </div>

                    {/* Preview Image */}
                    <div className="overflow-hidden rounded-lg border border-[#3e3e42] bg-[#252526]">
                        <FallbackImage
                            src="/projects/storefront-demo.gif"
                            alt="Storefront Demo"
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
                            This storefront was built as a demo to go along with
                            my headless dashboard project. Rather than using the
                            real production site, I made a simplified version to
                            showcase it.
                        </p>
                        <p className="leading-relaxed text-accent/80">
                            All the content is just placeholder text and images
                            since the main focus is on layout, performance, and
                            interaction, not the backend.
                        </p>
                    </section>

                    {/* Challenges */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold">Challenges</h2>
                        <p className="leading-relaxed text-accent/80">
                            I had some trouble getting the Collection Filters to
                            work with multiple options, but I learned a lot in
                            the process.
                        </p>
                        <p className="leading-relaxed text-accent/80">
                            Another consideration I focused on was making the UI
                            feel smooth. I added smooth scrolling with Lenis,
                            but users didn&apos;t really like how it felt.
                        </p>
                        <p className="leading-relaxed text-accent/80">
                            The homepage carousel was also a bit tricky on
                            mobile because browser viewports behave
                            inconsistently, so I had to write some custom code
                            to make sure it looked and scrolled properly on all
                            devices.
                        </p>
                    </section>

                    {/* Tech Stack */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold">Tech Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded border border-[#3e3e42] bg-[#252526] px-3 py-1.5 text-sm">
                                NextJS
                            </span>
                            <span className="rounded border border-[#3e3e42] bg-[#252526] px-3 py-1.5 text-sm">
                                TypeScript
                            </span>
                            <span className="rounded border border-[#3e3e42] bg-[#252526] px-3 py-1.5 text-sm">
                                AWS
                            </span>
                            <span className="rounded border border-[#3e3e42] bg-[#252526] px-3 py-1.5 text-sm">
                                Drizzle ORM
                            </span>
                            <span className="rounded border border-[#3e3e42] bg-[#252526] px-3 py-1.5 text-sm">
                                Cockroach DB
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
