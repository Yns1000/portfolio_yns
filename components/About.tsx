"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { type Associative, type Hobby } from "@/lib/data/mock";
import { type Dictionary } from "@/lib/dictionary";

export default function About({ associative, hobbies, dict }: { associative: Associative[], hobbies: Hobby[], dict: Dictionary }) {
  const mainAssoc = associative[0];

  const techStack = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "SQL", "TailwindCSS", "Framer Motion", "PySpark", "Industrial IoT"
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {dict.nav.about}
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full opacity-80" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="/cv-fr.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium tracking-wide hover:bg-foreground/90 transition-all text-sm group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              {dict.about?.cvFr || "CV (FR)"}
            </a>
            <a 
              href="/cv-en.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border bg-card px-6 py-3 rounded-full font-medium tracking-wide hover:bg-muted transition-all text-sm group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              {dict.about?.cvEn || "CV (EN)"}
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-flow-row-dense mb-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-muted/40 border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden group min-h-[350px]"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
             
             <div className="relative z-10 h-full flex flex-col justify-between">
               <div>
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4 block">{dict.about?.associative || "Associative"}</span>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{mainAssoc.role}</h3>
                  <div className="font-medium text-lg text-primary mb-6">{mainAssoc.organization}</div>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-light">
                    {mainAssoc.description}
                  </p>
               </div>
               <div className="mt-12 text-sm font-mono text-muted-foreground bg-background/50 backdrop-blur-md px-4 py-2 rounded-full w-fit">
                 {mainAssoc.period}
               </div>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-1 bg-card border border-border/40 rounded-3xl p-8 shadow-sm flex flex-col justify-center items-center relative overflow-hidden min-h-[350px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent pointer-events-none" />
            <h3 className="text-xl font-bold text-foreground mb-8 relative z-10">{dict.about?.techStack || "Tech Stack"}</h3>
            
            <div className="w-full relative flex overflow-hidden mask-horizontal">
              <motion.div 
                className="flex whitespace-nowrap gap-4 shrink-0"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
              >
                {[...techStack, ...techStack].map((tech, i) => (
                  <div key={i} className="bg-background/50 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-xl text-sm font-mono text-foreground/80 hover:text-foreground hover:border-foreground/30 transition-colors">
                    {tech}
                  </div>
                ))}
              </motion.div>
            </div>
            
            <div className="w-full relative flex overflow-hidden mask-horizontal mt-4">
              <motion.div 
                className="flex whitespace-nowrap gap-4 shrink-0"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
              >
                {[...techStack, ...techStack].reverse().map((tech, i) => (
                  <div key={i} className="bg-background/50 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-xl text-sm font-mono text-foreground/80 hover:text-foreground hover:border-foreground/30 transition-colors">
                    {tech}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
             <motion.div
               key={hobby._id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
               className={`relative bg-card rounded-3xl overflow-hidden shadow-sm group border border-border/40 ${hobby.colSpan === 2 ? 'md:col-span-2 aspect-[2/1] md:aspect-auto min-h-[250px]' : 'col-span-1 aspect-square md:aspect-auto min-h-[250px]'}`}
             >
                <Image 
                  src={hobby.image}
                  alt={hobby.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                   <h4 className="text-white font-medium text-xl md:text-2xl">{hobby.title}</h4>
                </div>
             </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .mask-horizontal {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}} />
    </section>
  );
}
