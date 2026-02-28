"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { type Dictionary } from "@/lib/dictionary";
import { type Locale } from "@/lib/i18n";
import { type SanitySettings } from "@/types/sanity";
import { Github, Linkedin } from "lucide-react";
import { useLenis } from "@studio-freight/react-lenis";

export default function NavbarClient({ lang, dict, settings }: { lang: Locale, dict: Dictionary, settings: SanitySettings | null }) {
  const lenis = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(targetId, { offset: -80 }); // offset for fixed header
    } else {
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={`/${lang}`} className="text-2xl font-bold tracking-tighter">
            Yns.
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-foreground transition-colors cursor-pointer">{dict.nav.about}</a>
            <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="hover:text-foreground transition-colors cursor-pointer">{dict.nav.projects}</a>
            <a href="#experience" onClick={(e) => handleScroll(e, '#experience')} className="hover:text-foreground transition-colors cursor-pointer">{dict.nav.experience}</a>
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-foreground transition-colors cursor-pointer">{dict.nav.contact}</a>
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
