import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ideas",
  description: "A collection of thoughts, experiments, and half-baked ideas.",
  openGraph: {
    title: "Ideas",
    description: "A collection of thoughts, experiments, and half-baked ideas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideas",
    description: "A collection of thoughts, experiments, and half-baked ideas.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default async function IdeasPage() {
  return (
    <section id="ideas">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          Ideas
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          A collection of thoughts, experiments, and half-baked ideas.
        </p>
      </BlurFade>
    </section>
  );
}
