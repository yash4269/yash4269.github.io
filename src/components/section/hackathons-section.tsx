/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { resume } from "@/data/resume";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { withBasePath } from "@/lib/basePath";
import { getIcon } from "@/lib/icons-map";
import { Icons } from "@/components/icons";

function HackathonImage({ src, alt }: { src?: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={withBasePath(src)}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Hackathons</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">I like building things</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              The world makes sense to me in systems. How things connect, break, and hold together under pressure. Building is just how I think out loud.
            </p>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full grid gap-6">
          {resume.hackathons.map((hackathon) => (
            <AccordionItem
              key={hackathon.title + hackathon.dates}
              value={hackathon.title + hackathon.dates}
              className="w-full border-b-0 grid gap-2"
            >
              <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
                <div className="flex items-center gap-x-3 justify-between w-full text-left">
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    <HackathonImage src={hackathon.image} alt={hackathon.title} />
                    <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                      <div className="font-semibold leading-none">
                        {hackathon.title}
                      </div>
                      {hackathon.location && (
                        <div className="font-sans text-sm text-muted-foreground">
                          {hackathon.location}
                        </div>
                      )}
                    </div>
                  </div>
                  {hackathon.dates && (
                    <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                      <time>{hackathon.dates}</time>
                      <ChevronDown className="h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 -rotate-90 group-data-[state=open]:rotate-0 group-data-[state=open]:translate-y-px" />
                    </div>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-0 ml-11 md:ml-13 text-xs sm:text-sm text-muted-foreground whitespace-pre-line">
                <div className="flex flex-col justify-start gap-2 min-w-0">
                  {hackathon.description && (
                    <p className="leading-relaxed wrap-break-word whitespace-pre-line">
                      {hackathon.description}
                    </p>
                  )}
                  {hackathon.links && hackathon.links.length > 0 && (
                    <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                      {hackathon.links.map((link, idx) => (
                        <Link
                          href={link.href}
                          key={idx}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                            {getIcon("globe", "h-4 w-4")}
                            {link.type}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
