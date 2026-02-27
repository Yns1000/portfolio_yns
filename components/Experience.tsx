"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { type Dictionary } from "@/lib/dictionary";
import { type SanityExperience } from "@/types/sanity";
import { urlForImage } from "@/sanity/lib/image";

export default function Experience({ experiences, dict }: { experiences: SanityExperience[], dict: Dictionary }) {

  const isAr = dict.nav.projects !== 'Projects' && dict.nav.projects !== 'Projets';

  const getLocalizedText = (textObj: Record<string, string> | string | undefined | null) => {
    if (typeof textObj === 'object' && textObj !== null) {
      return textObj[isAr ? 'ar' : dict.nav.projects === 'Projets' ? 'fr' : 'en'] || textObj.en || '';
    }
    return textObj || '';
  };

  const renderDescription = (text: string) => {
    return text.split('\n').map((line, i) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return null;

      if (trimmedLine.startsWith('- ')) {
        const content = trimmedLine.substring(2);
        return (
          <li key={i} className="ml-5 mb-1.5 list-disc text-muted-foreground leading-relaxed font-light">
            {content}
          </li>
        );
      }
      return <p key={i} className="mb-2 text-muted-foreground leading-relaxed font-light">{line}</p>;
    });
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString(dict.nav.projects === 'Projets' ? 'fr-FR' : dict.nav.projects === 'Projects' ? 'en-US' : 'ar-SA', { month: 'short', year: 'numeric' });
  };

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
                <div className="mb-4 relative z-10 flex flex-col items-start gap-4">
                  <span className="text-[10px] md:text-sm whitespace-nowrap font-mono text-muted-foreground bg-secondary/70 px-2.5 py-1 md:px-3 md:py-1 rounded-full shrink-0">
                    {formatDate(exp.startDate)} - {exp.isCurrent ? (dict.nav.projects === 'Projets' ? "Présent" : dict.nav.projects === 'Projects' ? "Present" : "حاضر") : formatDate(exp.endDate || "")}
                  </span>
                  <div className="flex items-start gap-3 w-full">
                    {exp.logo && (
                      <div className={`relative w-12 h-12 rounded-md overflow-hidden shrink-0 mt-1 ${exp.whiteBackground ? 'bg-white' : 'bg-white/10'}`}>
                        <Image 
                          src={urlForImage(exp.logo)?.url() || ""} 
                          alt={exp.company}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <h3 className="font-bold text-xl md:text-2xl text-foreground leading-tight">{getLocalizedText(exp.role)}</h3>
                  </div>
                </div>
                <div className="font-semibold text-primary mb-5 text-lg relative z-10">{exp.company}{exp.location ? ` • ${exp.location}` : ''}</div>
                <div className="relative z-10">
                  {renderDescription(getLocalizedText(exp.description))}
                </div>
              </div>

              {index === experiences.length - 2 && (
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-0 md:left-[-10%] lg:left-[5%]' : 'right-0 md:right-[-10%] lg:right-[5%]'} z-0 pointer-events-none`}>
                  <Image 
                    src="/filling-survey.svg" 
                    alt="Survey illustration" 
                    width={280} 
                    height={280} 
                    className="opacity-90 drop-shadow-sm dark:hidden"
                  />
                  <Image 
                    src="/filling-survey_white.svg" 
                    alt="Survey illustration dark" 
                    width={280} 
                    height={280} 
                    className="opacity-90 drop-shadow-sm hidden dark:block"
                  />
                </div>
              )}

              {index === experiences.length - 1 && (
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isAr ? 'right-0 md:right-[-10%] lg:right-[5%]' : 'left-0 md:left-[-10%] lg:left-[5%]'} z-0 pointer-events-none`}>
                  <Image 
                    src="/business-deal.svg" 
                    alt="Business Deal illustration" 
                    width={320} 
                    height={320} 
                    className={`opacity-90 drop-shadow-sm dark:hidden ${isAr ? 'scale-x-[-1]' : 'scale-x-[1]'}`}
                  />
                  <Image 
                    src="/business-deal_white.svg" 
                    alt="Business Deal illustration dark" 
                    width={320} 
                    height={320} 
                    className={`opacity-90 drop-shadow-sm hidden dark:block ${isAr ? 'scale-x-[-1]' : 'scale-x-[1]'}`}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
