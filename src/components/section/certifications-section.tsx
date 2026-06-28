/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/basePath";

const certifications = [
  {
    name: "Quantum Computing",
    image: "/certificates/quantum.jpg",
  },
  {
    name: "DeepLearning.AI TensorFlow Developer Professional Certificate",
    image: "/certificates/tensorflow.jpg",
  },
  {
    name: "Futures & Options Masterclass for Indian Stock Market",
    image: "/certificates/futures_options.jpg",
  },
  {
    name: "Six Sigma White Belt",
    image: "/certificates/six_sigma.jpg",
  },
  {
    name: "Certificate Program in Banking Technology",
    image: "/certificates/banking_tech.jpg",
  },
  {
    name: "SEBI Investor Certification",
    image: "/certificates/sebi.jpg",
  },
];

const INITIAL_SHOW_COUNT = 2;

export default function CertificationsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll
    ? certifications
    : certifications.slice(0, INITIAL_SHOW_COUNT);
  const hiddenCount = certifications.length - INITIAL_SHOW_COUNT;

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {displayed.map((cert, id) => (
          <BlurFade key={cert.name} delay={0.02 + id * 0.05}>
            <div className="border rounded-xl overflow-hidden group hover:shadow-md transition-shadow duration-200">
              <div className="relative overflow-hidden bg-muted aspect-[16/9]">
                <img
                  src={withBasePath(cert.image)}
                  alt={cert.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <p className="text-xs font-medium text-foreground leading-snug line-clamp-2">
                  {cert.name}
                </p>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
      {certifications.length > INITIAL_SHOW_COUNT && (
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          aria-label={showAll ? "Collapse certifications" : "Show all certifications"}
          className={cn(
            "w-full h-10 rounded-lg",
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
      )}
    </div>
  );
}
