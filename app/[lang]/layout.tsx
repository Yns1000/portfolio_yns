import type { Metadata } from "next";
import { Geist, Geist_Mono, Tajawal } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { i18n, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Yns | Portfolio",
  description: "IT & Industrial Engineer Portfolio. Crafting premium digital experiences.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dir = lang === "ar" ? "rtl" : "ltr";
  const baseFonts = lang === "ar" ? `${tajawal.variable}` : `${geistSans.variable} ${geistMono.variable}`;
  const fontClass = `${baseFonts}`;
  
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} dir={dir} className={fontClass} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <Navbar lang={lang} />
            <main className="overflow-x-hidden w-full flex flex-col min-h-screen">
              {children}
            </main>
            <Footer dict={dict} />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}