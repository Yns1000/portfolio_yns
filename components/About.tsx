"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ExternalLink, GraduationCap, Globe, Heart, Gamepad2 } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { type Dictionary } from "@/lib/dictionary";
import { type SanityEducation, type SanitySkill, type SanityAssociation, type SanityHobby, type SanitySettings } from "@/types/sanity";

/**
 * Renders the About section including education, skills, hobbies, and associative experience.
 * @param {Object} props
 * @param {SanityEducation[]} props.education
 * @param {SanitySkill[]} props.skills
 * @param {SanityAssociation[]} props.associations
 * @param {SanityHobby[]} props.hobbies
 * @param {Dictionary} props.dict
 * @returns {JSX.Element}
 */
export default function About({ 
  education, 
  skills, 
  associations, 
  hobbies,
  settings,
  dict,
  lang
}: { 
  education: SanityEducation[], 
  skills: SanitySkill[], 
  associations: SanityAssociation[], 
  hobbies: SanityHobby[],
  settings?: SanitySettings,
  dict: Dictionary,
  lang: string
}) {
  const mainAssoc = associations?.[0];
  const languages = skills?.filter(s => s.category === 'language') || [];
  const isAr = lang === 'ar';
  
  function getLocalizedText(textObj: Record<string, string> | string | undefined | null) {
    if (typeof textObj === 'object' && textObj !== null) {
      return textObj[lang] || textObj.en || '';
    }
    return textObj || '';
  }

  const techStack = skills?.filter(s => s.category === 'technical').map(s => getLocalizedText(s.name)) || [];

  const renderDescription = (text: string) => {
    return text.split('\n').map((line, i) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return null;

      if (trimmedLine.startsWith('- ')) {
        const content = trimmedLine.substring(2);
        return (
          <li key={i} className="mb-1.5 text-muted-foreground leading-relaxed font-light flex items-start gap-2">
            <span className="font-bold text-primary mt-[2px]">+</span>
            <span>{content}</span>
          </li>
        );
      }
      return <p key={i} className="mb-2 text-muted-foreground leading-relaxed font-light">{line}</p>;
    });
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.getFullYear().toString();
  };

  return (
    <section id="about" className="pt-10 pb-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
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
            {settings?.cvFrUrl && (
              <a 
                href={settings.cvFrUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium tracking-wide hover:bg-foreground/90 hover:scale-105 active:scale-95 transition-all text-sm group shadow-lg"
              >
                <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
                {dict.about?.cvFr || "CV (FR)"}
              </a>
            )}
            {settings?.cvEnUrl && (
              <a 
                href={settings.cvEnUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border bg-card px-6 py-3 rounded-full font-medium tracking-wide hover:bg-muted hover:scale-105 active:scale-95 transition-all text-sm group"
              >
                <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
                {dict.about?.cvEn || "CV (EN)"}
              </a>
            )}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-[minmax(300px,auto)] gap-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 lg:col-span-8 bg-card border border-border/50 rounded-3xl p-8 shadow-sm flex flex-col justify-start relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-colors duration-500" />
            <h3 className="text-2xl font-bold text-foreground mb-8 relative z-10 flex items-center gap-3">
              <GraduationCap className="text-primary" size={28} />
              {dict.nav.projects === 'Projects' ? 'Education' : dict.nav.projects === 'Projets' ? 'Formation' : 'تعليم'}
            </h3>
            
            <div className="relative flex-1 flex flex-col justify-between pl-8 border-l-2 border-primary/20 ml-2 mt-6 space-y-6 pt-2">
              <LucideIcons.ArrowUp size={28} className="absolute -top-4 -left-[15px] text-primary/40 z-0 bg-background pb-2 h-7 box-content" />
              {education?.map((edu, index) => (
                <div key={edu._id} className="relative z-10 group min-h-[250px] mb-16 last:mb-0">
                  <div className="absolute -left-[41px] mt-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-20" />
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-2 gap-2 relative z-20">
                    <h4 className="text-xl font-bold text-foreground leading-tight sm:pr-[220px] md:pr-[250px]">{getLocalizedText(edu.degree)}</h4>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary/70 px-3 py-1 rounded-full w-fit shrink-0 relative z-30 md:absolute md:-top-1 md:right-4">
                      {formatDate(edu.startDate)} - {edu.isCurrent ? (dict.nav.projects === 'Projets' ? 'Présent' : dict.nav.projects === 'Projects' ? 'Present' : 'حاضر') : formatDate(edu.endDate || "")}
                    </span>
                  </div>
                  <div className="font-medium text-primary mb-3 text-md relative z-20 sm:pr-[220px] md:pr-[250px]">{edu.school}{edu.location ? `, ${edu.location}` : ''}</div>
                  <div className="text-sm relative z-20 sm:pr-[220px] md:pr-[250px] mt-6 pb-4">
                    {renderDescription(getLocalizedText(edu.description))}
                  </div>

                  {index === 0 && (
                    <div className="mt-8 flex justify-center sm:block sm:mt-0 sm:absolute sm:right-0 md:right-4 sm:top-1/2 sm:-translate-y-1/2 z-0 pointer-events-none opacity-90 transition-transform duration-500 hover:scale-105">
                      <Image 
                        src="/graduation.svg" 
                        alt="Graduation illustration" 
                        width={180} 
                        height={180} 
                        className="drop-shadow-sm dark:hidden w-32 h-32 sm:w-[180px] sm:h-[180px]"
                      />
                      <Image 
                        src="/graduation_white.svg" 
                        alt="Graduation illustration dark" 
                        width={180} 
                        height={180} 
                        className="drop-shadow-sm hidden dark:block w-32 h-32 sm:w-[180px] sm:h-[180px]"
                      />
                    </div>
                  )}

                  {index === 1 && (
                    <div className="mt-8 flex justify-center sm:block sm:mt-0 sm:absolute sm:right-0 md:right-4 sm:top-1/2 sm:-translate-y-1/2 z-0 pointer-events-none opacity-90 transition-transform duration-500 hover:scale-105">
                      <Image 
                        src="/scientist.svg" 
                        alt="Scientist illustration" 
                        width={180} 
                        height={180} 
                        className="drop-shadow-sm dark:hidden w-32 h-32 sm:w-[180px] sm:h-[180px]"
                      />
                      <Image 
                        src="/scientist_white.svg" 
                        alt="Scientist illustration dark" 
                        width={180} 
                        height={180} 
                        className="drop-shadow-sm hidden dark:block w-32 h-32 sm:w-[180px] sm:h-[180px]"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-6 lg:col-span-4 bg-card border border-border/50 rounded-3xl p-8 shadow-sm flex flex-col relative overflow-hidden"
          >
            <div className={`absolute top-0 ${isAr ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 transition-colors duration-500`} />
            <h3 className="text-2xl font-bold text-foreground mb-8 relative z-10 flex items-center gap-3">
              <Globe className="text-primary" size={26} />
              {dict.nav.projects === 'Projects' ? 'Languages' : dict.nav.projects === 'Projets' ? 'Langues' : 'اللغات'}
            </h3>
            
            <div className="flex flex-col gap-3 flex-1">
              {languages.map((lang: SanitySkill) => (
                <div 
                  key={lang._id} 
                  className="group relative p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-sm overflow-hidden flex flex-row items-center justify-between gap-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="font-bold text-foreground tracking-tight text-base">
                      {getLocalizedText(lang.name)}
                    </span>
                    {lang.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-md bg-primary/10 text-primary ring-1 ring-primary/20">
                        {lang.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-end shrink-0">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/80 text-secondary-foreground ring-1 ring-border/50 shadow-sm">
                      {getLocalizedText(lang.level)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 flex items-center justify-center flex-1">
              <Image 
                src="/outside-comfort-zone.svg" 
                alt="Outside comfort zone illustration" 
                width={220} 
                height={220} 
                className={`opacity-90 drop-shadow-sm dark:hidden transition-transform duration-500 hover:scale-105 ${isAr ? 'scale-x-[-1]' : ''}`}
              />
              <Image 
                src="/outside-comfort-zone_white.svg" 
                alt="Outside comfort zone illustration dark" 
                width={220} 
                height={220} 
                className={`opacity-90 drop-shadow-sm hidden dark:block transition-transform duration-500 hover:scale-105 ${isAr ? 'scale-x-[-1]' : ''}`}
              />
            </div>

            <div className="mt-auto pt-6">
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-5 block">
                {dict.about?.techStack || "Tech Stack & Languages"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <span key={i} className="bg-background border border-border/40 px-3 py-1.5 rounded-lg text-xs font-medium text-foreground/80 hover:text-foreground hover:bg-muted/40 transition-colors shadow-sm cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {hobbies && hobbies.length > 0 && (
          <div className="mb-6 relative z-20">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3 px-2">
              <Gamepad2 className="text-primary" size={26} />
              {dict.nav.projects === 'Projects' ? 'Hobbies' : dict.nav.projects === 'Projets' ? 'Loisirs' : 'الهوايات'}
            </h3>
            <div className="relative flex flex-col md:flex-row items-center md:items-start min-h-[160px] w-full">
              <div className={`grid grid-cols-3 place-items-center gap-y-8 gap-x-2 sm:flex sm:flex-wrap sm:justify-center lg:flex-col lg:justify-start lg:items-start sm:gap-x-6 sm:gap-y-8 lg:gap-y-10 w-full ${isAr ? 'md:pl-[240px] lg:pl-[320px]' : 'md:pr-[240px] lg:pr-[320px]'} pb-4 pt-4 px-2 z-20`}>
                {[
                  hobbies.slice(0, Math.ceil(hobbies.length / 2)),
                  hobbies.slice(Math.ceil(hobbies.length / 2))
                ].map((rowHobbies, rowIndex) => (
                  rowHobbies.length > 0 ? (
                    <div key={rowIndex} className={`contents lg:flex lg:flex-row lg:justify-center lg:items-center lg:w-full lg:gap-x-12`}>
                      {rowHobbies.map((hobby, i) => {
                        const actualIndex = rowIndex === 0 ? i : i + Math.ceil(hobbies.length / 2);
                        const iconString = hobby.iconName?.trim() || 'Star';
                        const Icon = ((LucideIcons as unknown) as Record<string, LucideIcons.LucideIcon>)[iconString] || LucideIcons.Star;
                        return (
                          <motion.div
                            key={hobby._id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: actualIndex * 0.05, duration: 0.4 }}
                            className="flex flex-col items-center justify-start gap-3 w-[76px] sm:w-[84px] h-[100px] group relative"
                          >
                            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-muted/40 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 group-hover:-translate-y-2 transition-all duration-300 relative z-10 shrink-0">
                              <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                            </div>
                            <h4 className="font-semibold text-xs text-foreground/80 text-center line-clamp-2 leading-tight group-hover:text-foreground transition-colors overflow-visible w-full mt-auto">
                              {getLocalizedText(hobby.title)}
                            </h4>
                          </motion.div>
                        );
                      })}
                    </div>
                  ) : null
                ))}
              </div>
              
              <div className={`flex justify-end pr-4 -mb-8 mt-6 w-full relative z-10 md:absolute md:mb-0 md:mt-0 md:bottom-[-34px] md:pr-0 ${isAr ? 'md:left-4 lg:left-12' : 'md:right-4 lg:right-12'} pointer-events-none`}>
                <Image 
                  src="/jogging.svg" 
                  alt="Jogging illustration" 
                  width={280} 
                  height={280} 
                  className={`opacity-90 drop-shadow-lg dark:hidden w-48 h-48 md:w-[280px] md:h-[280px] ${isAr ? 'scale-x-[-1]' : ''}`}
                />
                <Image 
                  src="/jogging_white.svg" 
                  alt="Jogging illustration dark" 
                  width={280} 
                  height={280} 
                  className={`opacity-90 drop-shadow-lg hidden dark:block w-48 h-48 md:w-[280px] md:h-[280px] ${isAr ? 'scale-x-[-1]' : ''}`}
                />
              </div>
            </div>
          </div>
        )}

        {mainAssoc && (
          <div className="grid grid-cols-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden group"
              style={{
                backgroundColor: mainAssoc.bgColor || 'hsl(var(--primary))',
                color: mainAssoc.textColor || 'hsl(var(--primary-foreground))'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="max-w-2xl">
                  <span className="text-sm font-mono uppercase tracking-wider mb-4 block opacity-70">
                    {dict.about?.associative || "Associative"}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{mainAssoc.name}</h3>
                  <div className="font-medium text-xl mb-6 opacity-90">{getLocalizedText(mainAssoc.role)}</div>
                  <div className="text-lg leading-relaxed font-light opacity-90 mix-blend-plus-lighter">
                    {getLocalizedText(mainAssoc.description).split('\n').map((line: string, i: number) => {
                      const trimmedLine = line.trim();
                      if (!trimmedLine) return null;
                      if (trimmedLine.startsWith('- ')) {
                        return (
                          <li key={i} className="mb-1.5 list-none flex items-start gap-3 leading-relaxed font-light">
                            <span className="font-bold opacity-80 mt-[2px]">+</span>
                            <span>{trimmedLine.substring(2)}</span>
                          </li>
                        );
                      }
                      return <p key={i} className="mb-2 leading-relaxed font-light">{line}</p>;
                    })}
                  </div>
                </div>
                
                <div className={`w-full md:w-auto flex justify-between md:justify-end items-center gap-4 shrink-0 mt-6 md:mt-0 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex flex-col md:flex-row gap-3 ${isAr ? 'md:flex-row-reverse' : ''}`}>
                    {mainAssoc.instagramUrl && (
                      <a href={mainAssoc.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-background/20 hover:bg-background/30 h-10 px-4 sm:h-12 sm:px-6 rounded-full font-medium transition-colors text-xs sm:text-sm backdrop-blur-sm">
                        Instagram <ExternalLink size={16} />
                      </a>
                    )}
                    {mainAssoc.tiktokUrl && (
                      <a href={mainAssoc.tiktokUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-background/20 hover:bg-background/30 h-10 px-4 sm:h-12 sm:px-6 rounded-full font-medium transition-colors text-xs sm:text-sm backdrop-blur-sm">
                        TikTok <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  {mainAssoc.donationUrl && (
                    <div className="relative flex items-center justify-center mt-2 sm:mt-0">
                      <Image 
                        src="/Arrow.svg" 
                        alt="Arrow pointing to donate" 
                        width={60} 
                        height={60} 
                        className="absolute opacity-80 drop-shadow-md pointer-events-none -top-12 -left-8 rotate-[120deg]"
                        style={{ filter: mainAssoc.textColor ? `drop-shadow(0px 0px 4px ${mainAssoc.textColor})` : 'none' }}
                      />
                      <Image 
                        src="/Arrow.svg" 
                        alt="Arrow pointing to donate" 
                        width={50} 
                        height={50} 
                        className="absolute opacity-80 drop-shadow-md pointer-events-none -bottom-10 -right-6 -rotate-45"
                        style={{ filter: mainAssoc.textColor ? `drop-shadow(0px 0px 4px ${mainAssoc.textColor})` : 'none' }}
                      />

                      <a href={mainAssoc.donationUrl} target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center justify-center gap-2 bg-background text-foreground h-12 px-6 w-full sm:w-auto rounded-full font-bold shadow-md transition-transform hover:scale-105 active:scale-95 text-sm ring-2 ring-background/50">
                        <Heart size={16} className="text-rose-500 fill-rose-500" /> {dict.nav.projects === 'Projects' ? 'Donate' : dict.nav.projects === 'Projets' ? 'Faire un don' : 'تبرع '}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}