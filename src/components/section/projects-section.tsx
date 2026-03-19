"use client";
import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { resume } from "@/data/resume";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;
const INITIAL_SHOW_COUNT = 2;

function ExpandControl({
  showAll,
  onToggle,
  projectCount,
}: {
  showAll: boolean;
  onToggle: () => void;
  projectCount: number;
}) {
  const hiddenCount = projectCount - INITIAL_SHOW_COUNT;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={showAll ? "Collapse projects" : "Expand projects"}
      className={cn(
        "w-full max-w-[800px] mx-auto h-10 rounded-lg",
        "bg-muted/30 border-b border-l border-r border-border",
        "flex items-center justify-center gap-2",
        "text-muted-foreground hover:text-foreground transition-colors",
        "hover:bg-muted/50"
      )}
    >
      <span className="w-12 h-0.5 bg-muted-foreground/80 rounded-full" />
      <span className="sr-only">
        {showAll ? "Collapse" : `Show ${hiddenCount} more`}
      </span>
    </button>
  );
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll
    ? resume.projects
    : resume.projects.slice(0, INITIAL_SHOW_COUNT);

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">My Projects</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What I&apos;ve built</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              If you can&apos;t build it, you don&apos;t understand it. So I strip away assumptions, find the physics, and build from there.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto w-full">
            {displayedProjects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={0.02}
                duration={0.15}
              >
                <ProjectCard
                  key={project.title}
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
          {resume.projects.length > INITIAL_SHOW_COUNT && (
            <ExpandControl
              showAll={showAll}
              onToggle={() => setShowAll(!showAll)}
              projectCount={resume.projects.length}
            />
          )}
        </div>
      </div>
    </section>
  );
}

