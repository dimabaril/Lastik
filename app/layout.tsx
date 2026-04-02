import type { Metadata } from "next";
import { Arimo, Manrope, Victor_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin", "cyrillic"],
  // weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const victorMono = Victor_Mono({
  variable: "--font-victor-mono",
  subsets: ["latin", "cyrillic"],
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
      className={`${arimo.variable} ${manrope.variable} ${victorMono.variable} antialiased`}
    >
      {/* <head>
        <script src="https://player.vimeo.com/api/player.js" async />
      </head> */}
      <body className="min-h-screen flex flex-col bg-black ">
        <Header />
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
