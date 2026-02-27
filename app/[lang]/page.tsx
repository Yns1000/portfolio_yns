import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { getDictionary } from "@/lib/dictionary";
import { type Locale } from "@/lib/i18n";
import { client } from "@/sanity/lib/client";
import { projectsQuery, experiencesQuery, educationQuery, skillsQuery, associationsQuery, hobbiesQuery } from "@/sanity/lib/queries";
import { type SanityProject, type SanityExperience, type SanityEducation, type SanitySkill, type SanityAssociation, type SanityHobby } from "@/types/sanity";

// We set this component to always fetch the latest data from Sanity directly without aggressive Next.js caching
export const revalidate = 0;

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  // Fetch portolio data directly from Sanity CMS via dynamic groq params
  const projects: SanityProject[] = await client.fetch(projectsQuery, { lang });
  const experiences: SanityExperience[] = await client.fetch(experiencesQuery, { lang });
  const education: SanityEducation[] = await client.fetch(educationQuery, { lang });
  const skills: SanitySkill[] = await client.fetch(skillsQuery, { lang });
  const associations: SanityAssociation[] = await client.fetch(associationsQuery, { lang });
  const hobbies: SanityHobby[] = await client.fetch(hobbiesQuery, { lang });
  
  return (
    <main>
      <Hero lang={lang} />
      <About education={education} skills={skills} associations={associations} hobbies={hobbies} dict={dict} />
      <Experience experiences={experiences} dict={dict} />
      <Projects projects={projects} dict={dict} />
    </main>
  );
}