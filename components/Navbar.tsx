import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getDictionary } from "@/lib/dictionary";
import { type Locale } from "@/lib/i18n";

export default async function Navbar({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={`/${lang}`} className="text-2xl font-bold tracking-tighter">
            Yns.
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href={`/${lang}#about`} className="hover:text-foreground transition-colors">{dict.nav.about}</Link>
            <Link href={`/${lang}#projects`} className="hover:text-foreground transition-colors">{dict.nav.projects}</Link>
            <Link href={`/${lang}#experience`} className="hover:text-foreground transition-colors">{dict.nav.experience}</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}