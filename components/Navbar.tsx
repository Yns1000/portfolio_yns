import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getDictionary } from "@/lib/dictionary";
import { type Locale } from "@/lib/i18n";
import { client } from "@/sanity/lib/client";
import { settingsQuery } from "@/sanity/lib/queries";
import { SanitySettings } from "@/types/sanity";
import { Github, Linkedin } from "lucide-react";

export default async function Navbar({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  const settings = await client.fetch<SanitySettings | null>(settingsQuery);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={`/${lang}`} className="text-2xl font-bold tracking-tighter">
            Yns.
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">{dict.nav.about}</a>
            <a href="#projects" className="hover:text-foreground transition-colors">{dict.nav.projects}</a>
            <a href="#experience" className="hover:text-foreground transition-colors">{dict.nav.experience}</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-3 md:gap-4">
          {settings?.githubUrl && (
            <Link href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full">
              <Github className="w-5 h-5" />
            </Link>
          )}
          {settings?.linkedinUrl && (
            <Link href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full">
              <Linkedin className="w-5 h-5" />
            </Link>
          )}
          <div className="h-6 w-px bg-border/50 mx-1 hidden sm:block"></div>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}