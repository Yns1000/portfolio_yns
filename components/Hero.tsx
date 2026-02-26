import { getDictionary } from "@/lib/dictionary";
import { type Locale } from "@/lib/i18n";
import HeroClient from "./HeroClient";

export default async function Hero({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  return <HeroClient dict={dict} />;
}