import { client } from "@/sanity/lib/client";
import { settingsQuery } from "@/sanity/lib/queries";
import { SanitySettings } from "@/types/sanity";
import { type Dictionary } from "@/lib/dictionary";

export default async function Footer({ dict }: { dict: Dictionary }) {
  const settings = await client.fetch<SanitySettings | null>(settingsQuery);

  return (
    <footer className="border-t border-border/40 bg-muted/20 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter">Yns.</span>
            <span className="text-muted-foreground text-sm border-l border-border/40 pl-2 ml-2">© {new Date().getFullYear()}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {dict.footer?.illustrationsBy || "Illustrations by "} 
            <a href="https://www.streamlinehq.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">
              StreamlineHQ
            </a>
          </p>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {settings?.linkedinUrl && (
            <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
          )}
          {settings?.githubUrl && (
            <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              GitHub
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
