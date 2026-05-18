import { siteData } from "@/lib/data";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/50 py-12 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tight mb-2">
            {siteData.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            Desenvolvido com Next.js, Tailwind CSS e Framer Motion.
          </p>
        </div>

        <div className="flex space-x-6 mb-6 md:mb-0">
          <a
            href={siteData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={siteData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href={`mailto:${siteData.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          &copy; {currentYear} {siteData.name}.
        </div>
      </div>
    </footer>
  );
}
