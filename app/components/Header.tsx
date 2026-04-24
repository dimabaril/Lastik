"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";
import HamburgerButton from "./HamburgerButton";

const navLinks = [
  { label: "проекты", href: "/projects" },
  { label: "студия", href: "/studio" },
  { label: "курс арт-дирекшен", href: "/kurs" },
  { label: "риил", href: "/reel" },
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
      className={`${navGlowStyles[i % 2]} rounded-full border-2 bg-black/70 px-8 pt-1.5 pb-2.5 transition-all duration-300`}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className="font-unbounded sticky top-0 z-10 text-2xl whitespace-nowrap">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/red-Logo_print_mm_cmyk.svg"
          alt="Logo"
          width={120}
          height={120}
          className={`${styles.rotate} absolute top-6 left-6 z-10 max-2xl:w-13`}
        />
      </Link>

      <nav
        className={`${styles.gradientMask} relative flex flex-col items-end backdrop-blur-md lg:flex-row`}
      >
        <div className="hidden w-36 lg:block" />

        {/* Hamburger button — mobile only */}
        <div className="flex p-6 lg:hidden">
          <HamburgerButton
            isOpen={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          />
        </div>

        {/* Nav links — row on desktop, column dropdown on mobile */}
        <div
          className={`flex max-w-screen-xl flex-1 items-end gap-2 p-6 transition-all duration-300 max-lg:flex-col lg:mx-auto ${isOpen ? "max-lg:max-h-64" : "max-lg:max-h-0 max-lg:p-[0_24_0_24]"}`}
        >
          {links}
        </div>

        <div className="hidden w-36 xl:block" />
      </nav>
    </header>
  );
}
