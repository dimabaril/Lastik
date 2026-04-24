import type { Metadata } from "next";

import {
  Arimo,
  Manrope,
  Victor_Mono,
  Unbounded,
  // Space_Mono,
  Onest,
} from "next/font/google";

import localFont from "next/font/local";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin", "cyrillic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
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

// const spaceMono = Space_Mono({
//   variable: "--font-space-mono",
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });

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
      className={`${arimo.variable} ${manrope.variable} ${victorMono.variable} ${unbounded.variable} ${onest.variable} ${drukCyrBoldItalic.variable} antialiased`}
    >
      {/* <head>
        <script src="https://player.vimeo.com/api/player.js" async />
      </head> */}
      <body className="flex min-h-screen flex-col bg-black">
        <Header />
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
