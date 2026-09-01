import type { Metadata } from "next";
import { Arimo, Victor_Mono, Unbounded, Onest, Geist } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import "@/app/globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { TouchProvider } from "@/app/components/TouchProvider";
import MobileReloadHandler from "@/app/components/MobileReloadHandler";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin", "cyrillic"],
});

const victorMono = Victor_Mono({
  variable: "--font-victor-mono",
  subsets: ["latin", "cyrillic"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
});

const drukCyrBoldItalic = localFont({
  variable: "--font-druk-cyr-bold-italic",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/druk-cyr-bold-italic/druk-cyr-bold-italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Ластик — визуальное счастье",
  description: "Мы создаём анимационную графику для компаний по всему миру",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={cn(
        "antialiased",
        arimo.variable,
        victorMono.variable,
        unbounded.variable,
        onest.variable,
        drukCyrBoldItalic.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="flex min-h-screen flex-col bg-black text-white">
        <MobileReloadHandler />
        <NextIntlClientProvider>
          <TouchProvider>
            <div className="h-19"></div>
            <Header />
            {children}
            <Footer />
          </TouchProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
