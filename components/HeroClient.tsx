"use client";

import { motion } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";
import { type Dictionary } from "@/lib/dictionary";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroClient({ dict }: { dict: Dictionary }) {
  const lenis = useLenis();
  const isAr = dict.nav.projects !== 'Projects' && dict.nav.projects !== 'Projets';

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo("#projects", { offset: -50 });
    } else {
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center w-full px-4 pt-16 md:pt-0 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center -mt-16 md:mt-0"
        style={{ maskImage: "linear-gradient(to bottom, white 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, white 60%, transparent 100%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-foreground/5 dark:bg-primary/10 blur-[120px] rounded-full dark:mix-blend-screen" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-foreground/5 dark:bg-accent/10 blur-[90px] rounded-full dark:mix-blend-multiply" />
      </div>

      {/* Decorative Doodle Background */}
      <div className={`absolute inset-0 w-full h-full opacity-10 pointer-events-none z-0 ${isAr ? 'scale-x-[-1]' : 'scale-x-[1]'}`}>
        <Image 
          src="/Doodle/9.svg" 
          alt="Doodle decorative background" 
          fill
          className="object-cover dark:invert"
          priority
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-5xl w-full"
      >
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xs md:text-base font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4 md:mb-6 block"
        >
          {`${dict.hero.greeting} Yns.`}
        </motion.span>
        
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 leading-tight md:leading-none pb-2"
        >
          {dict.hero.role}
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-light"
        >
          {dict.hero.description}
        </motion.p>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6, duration: 0.5 }}
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           className="inline-block"
        >
          <a 
            href="#projects" 
            onClick={handleScroll}
            className="group relative inline-flex items-center justify-center gap-2 md:gap-3 px-8 py-4 md:px-10 md:py-4 rounded-full font-medium tracking-wide transition-all duration-300 text-sm md:text-base cursor-pointer bg-foreground text-background hover:bg-foreground/90 shadow-xl hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              {dict.hero.viewWork}
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-4 h-4 md:w-5 md:h-5 text-background/80 group-hover:text-background transition-colors duration-300" />
              </motion.span>
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
