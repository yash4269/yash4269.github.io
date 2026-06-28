import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { resume } from "@/data/resume";
import { getIcon } from "@/lib/icons-map";

export default function ContactSection() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: resume.contact.social.linkedin?.url || "",
      iconName: "linkedin",
      ariaLabel: "Visit my LinkedIn profile",
    },
    {
      name: "Email",
      url: resume.contact.social.email?.url || "",
      iconName: "email",
      ariaLabel: "Send me an email",
    },
  ].filter((link) => link.url);

  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="text-muted-foreground text-sm max-w-sm">
          Open to Product Management opportunities in cybersecurity, BFSI, and enterprise tech. Feel free to reach out!
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="rounded-full cursor-pointer size-9 bg-background text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors flex items-center justify-center"
            >
              {getIcon(link.iconName, "h-5 w-5")}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
