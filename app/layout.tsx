import type { Metadata } from "next";
import { Geist, Geist_Mono, Arimo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${arimo.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      {/* <head>
        <script src="https://player.vimeo.com/api/player.js" async />
      </head> */}
      <body className="min-h-full flex flex-col bg-black font-arimo max-w-screen-xl mx-auto">
        <Header />
        {children}

        {/* Footer */}
        <footer className="px-6 py-16 text-center">
          <p className="text-8xl text-pink-500">Ластик</p>
        </footer>
      </body>
    </html>
  );
}
