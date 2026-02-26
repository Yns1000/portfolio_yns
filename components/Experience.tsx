"use client";

import { motion } from "framer-motion";
import { type Experience as ExperienceType } from "@/lib/data/mock";
import { type Dictionary } from "@/lib/dictionary";

export default function Experience({ experiences, dict }: { experiences: ExperienceType[], dict: Dictionary }) {

  return (
    <section id="experience" className="py-32 bg-muted/30 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {dict.nav.experience}
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full opacity-80" />
        </motion.div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-2 md:before:mx-auto md:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border/80 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex z-10 items-center justify-center w-5 h-5 bg-primary rounded-full border-4 border-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[-0.45rem] md:ml-[0]" />
              
              <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-3rem)] bg-card p-8 rounded-2xl border border-border/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/40">
                <div className="flex flex-row items-start md:items-center justify-between gap-4 mb-4 relative z-10">
                  <h3 className="font-bold text-xl md:text-2xl text-foreground leading-tight mt-0.5 md:mt-0">{exp.role}</h3>
                  <span className="text-[10px] md:text-sm whitespace-nowrap font-mono text-muted-foreground bg-secondary/70 px-2.5 py-1 md:px-3 md:py-1 rounded-full shrink-0">{exp.period}</span>
                </div>
                <div className="font-semibold text-primary mb-5 text-lg relative z-10">{exp.company}</div>
                <p className="text-muted-foreground leading-relaxed font-light relative z-10">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
