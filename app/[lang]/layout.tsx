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
  title: {
    template: "%s | Yns",
    default: "Yns | Portfolio",
  },
  description: "IT & Industrial Engineer Portfolio. Crafting premium digital experiences, web applications, and associative projects.",
  keywords: ["Portfolio", "Yns", "IT Engineer", "Industrial Engineer", "Web Developer", "Software Engineer", "Full Stack", "Front-end"],
  authors: [{ name: "Yns" }],
  creator: "Yns",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Yns | Portfolio",
    description: "IT & Industrial Engineer Portfolio. Crafting premium digital experiences.",
    siteName: "Yns Portfolio",
    images: [{ url: "/favicon_io/android-chrome-512x512.png", width: 512, height: 512, alt: "Yns Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yns | Portfolio",
    description: "IT & Industrial Engineer Portfolio.",
    images: ["/favicon_io/android-chrome-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "android-chrome", url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512" }
    ]
  },
  manifest: "/favicon_io/site.webmanifest",
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