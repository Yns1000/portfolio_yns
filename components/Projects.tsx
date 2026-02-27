"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useLenis } from "@studio-freight/react-lenis";
import { type Dictionary } from "@/lib/dictionary";
import { type SanityProject } from "@/types/sanity";
import { urlForImage } from "@/sanity/lib/image";

export default function Projects({ projects, dict }: { projects: SanityProject[], dict: Dictionary }) {
  const [selectedProject, setSelectedProject] = useState<SanityProject | null>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = "unset";
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = "unset";
      if (lenis) lenis.start();
    };
  }, [selectedProject, lenis]);

  const getLocalizedText = (textObj: Record<string, string> | string | undefined | null) => {
    if (typeof textObj === 'object' && textObj !== null) {
      return textObj[dict.nav.projects === 'Projects' ? 'en' : dict.nav.projects === 'Projets' ? 'fr' : 'ar'] || textObj.en || '';
    }
    return textObj || '';
  };

  const renderDescription = (text: string) => {
    return text.split('\n').map((line, i) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return null;

      if (trimmedLine.startsWith('- ')) {
        const content = trimmedLine.substring(2);
        // Simple bold parsing for **text**
        const parts = content.split(/\*\*(.*?)\*\*/g);
        return (
          <li key={i} className="ml-6 mb-2 list-disc text-foreground/80 leading-relaxed">
            {parts.map((part, index) => 
              index % 2 === 1 ? <strong key={index} className="text-foreground font-semibold">{part}</strong> : part
            )}
          </li>
        );
      }
      return <p key={i} className="mb-4 text-foreground/80 leading-relaxed">{line}</p>;
    });
  };

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-20"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{dict.nav.projects}</h2>
            <div className="w-24 h-1 bg-primary rounded-full opacity-80" />
          </div>
          <span className="text-sm text-muted-foreground font-mono hidden md:block">2024 — 2026</span>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((item, index) => (
            <motion.article 
              key={item._id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(item)}
            >
              <div className="aspect-[4/3] bg-muted rounded-2xl mb-8 overflow-hidden relative shadow-md">
                {item.mainImage && (
                  <Image 
                    src={urlForImage(item.mainImage)?.url() || ""} 
                    alt={getLocalizedText(item.title)}
                    fill
                    className="object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {item.tags?.map((tag) => (
                    <span key={tag} className="bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center justify-between">
                  {getLocalizedText(item.title)}
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed line-clamp-3">
                  {getLocalizedText(item.description)}
                </p>
                <div className="mt-4 text-primary font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {dict.nav.projects === 'Projets' ? 'Voir plus' : dict.nav.projects === 'Projects' ? 'Read more' : 'اقرأ المزيد'}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-3xl shadow-2xl border border-border"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-background/50 backdrop-blur-md rounded-full text-foreground hover:bg-muted transition-colors z-10"
              >
                <X size={20} />
              </button>

              {selectedProject.mainImage && (
                <div className="relative w-full h-64 md:h-96">
                  <Image 
                    src={urlForImage(selectedProject.mainImage)?.url() || ""} 
                    alt={getLocalizedText(selectedProject.title)}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-8 md:p-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags?.map((tag) => (
                    <span key={tag} className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  {getLocalizedText(selectedProject.title)}
                </h3>

                <div className="text-lg">
                  {renderDescription(getLocalizedText(selectedProject.description))}
                </div>

                {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                  <div className="mt-10 flex flex-wrap gap-4 pt-8 border-t border-border">
                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-full text-sm font-semibold transition-colors flex items-center gap-2">
                        GitHub <ArrowUpRight size={16} />
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-semibold transition-colors flex items-center gap-2">
                        Live Project <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
