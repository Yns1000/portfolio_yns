import { getDictionary } from "@/lib/dictionary";
import { type Locale } from "@/lib/i18n";
import { client } from "@/sanity/lib/client";
import { settingsQuery } from "@/sanity/lib/queries";
import { SanitySettings } from "@/types/sanity";
import NavbarClient from "./NavbarClient";

export default async function Navbar({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  const settings = await client.fetch<SanitySettings | null>(settingsQuery);
  return <NavbarClient lang={lang} dict={dict} settings={settings} />;
}