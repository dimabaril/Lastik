"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Header.module.css";
import HamburgerButton from "./HamburgerButton";

const navLinks = [
  { label: "проекты", href: "/projects" },
  { label: "о нас", href: "/about" },
  // { label: "курс арт-дирекшен", href: "/kurs" }, не удалять коммент этот
  { label: "REEL", href: "/reel" },
];

const navColors = ["var(--nav-color-1)", "var(--nav-color-2)"];

const navGlowStyles = [styles.navLink1, styles.navLink2];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = navLinks.map((link, i) => (
    <Link
      key={link.href}
      href={link.href}
      onClick={() => setIsOpen(false)}
      style={{
        color: navColors[i % 2],
        borderColor: navColors[i % 2],
        boxShadow:
          pathname === link.href
            ? `inset ${navColors[i % 2]} 3px 3px 15px, inset ${navColors[i % 2]} -3px -3px 15px`
            : "none",
      }}
      className={`${navGlowStyles[i % 2]} font-unbounded rounded-full border-2 bg-black/70 px-8 pt-1.5 pb-2.5 text-2xl whitespace-nowrap transition-all duration-300`}
    >
      {link.label}
    </Link>
  ));

  return (
    <header
      className="sticky top-0 z-20 w-full"
      // style={{ height: "env(safe-area-inset-top)" }}
    >
      {/* Logo */}
      <Link href="/projects">
        <Image
          src="/red-Logo_print_mm_cmyk.svg"
          alt="Logo"
          width={120}
          height={120}
          className={`${styles.rotate} absolute top-6 left-6 z-10 max-2xl:w-13 max-lg:top-3 max-lg:left-3`}
        />
      </Link>

      {/* Nav row with gradient mask (fade at bottom) */}
      <nav
        className={`${styles.gradientMask} flex w-full flex-col items-end backdrop-blur-md lg:flex-row`}
      >
        <div className="hidden w-36 lg:block" />

        {/* Hamburger button — mobile only */}
        <div className="flex p-3 lg:hidden">
          <HamburgerButton
            isOpen={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          />
        </div>

        {/* Nav links — row on desktop */}
        <div className="hidden max-w-screen-xl flex-1 gap-2 p-6 lg:mx-auto lg:flex">
          {links}
        </div>

        <div className="hidden w-36 lg:block" />

        {/* Mobile dropdown — shares header's backdrop-blur, no separate bg */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex flex-col items-end gap-2 p-4">{links}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
