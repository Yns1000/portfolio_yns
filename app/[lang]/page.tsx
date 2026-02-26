import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { getDictionary } from "@/lib/dictionary";
import { getProjects, getExperiences, getAssociative, getHobbies } from "@/lib/data/mock";
import { type Locale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const projects = await getProjects(lang);
  const experiences = await getExperiences(lang);
  const associative = await getAssociative(lang);
  const hobbies = await getHobbies(lang);

  return (
    <main>
      <Hero lang={lang} />
      <About associative={associative} hobbies={hobbies} dict={dict} />
      <Experience experiences={experiences} dict={dict} />
      <Projects projects={projects} dict={dict} />
    </main>
  );
}