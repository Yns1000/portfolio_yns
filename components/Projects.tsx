"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { type Project } from "@/lib/data/mock";
import { type Dictionary } from "@/lib/dictionary";

export default function Projects({ projects, dict }: { projects: Project[], dict: Dictionary }) {
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
            >
              <div className="aspect-[4/3] bg-muted rounded-2xl mb-8 overflow-hidden relative shadow-md">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
