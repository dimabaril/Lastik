import type { Metadata, Viewport } from "next";

import { Arimo, Victor_Mono, Unbounded, Onest, Geist } from "next/font/google";

import localFont from "next/font/local";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { TouchProvider } from "./components/TouchProvider";
import MobileReloadHandler from "./components/MobileReloadHandler";
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
      path: "../public/fonts/druk-cyr-bold-italic/druk-cyr-bold-italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

// TODO!!! проверить на челке
// export const viewport: Viewport = {
//   viewportFit: "cover",
// };

export const metadata: Metadata = {
  title: "Ластик — визуальное счастье",
  description: "Мы создаём анимационную графику для компаний по всему миру",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
      {/* <head>
        <script src="https://player.vimeo.com/api/player.js" async />
      </head> */}
      <body className="flex min-h-screen flex-col bg-black text-white">
        <MobileReloadHandler />
        <TouchProvider>
          {/* Header place holder */}
          <div className="h-19"></div>

          <Header />

          {children}

          {/* Footer */}
          <Footer />
        </TouchProvider>
      </body>
    </html>
  );
}
