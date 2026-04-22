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
  { label: "арт-дирекшен курс", href: "/kurs" },
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
      className={`${navGlowStyles[i % 2]} px-8 py-2 rounded-full bg-black/70 border-2 transition-all duration-300`}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className="uppercase font-arimo text-2xl sticky top-0 z-10">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/red-Logo_print_mm_cmyk.svg"
          alt="Logo"
          width={120}
          height={120}
          className={`${styles.rotate} max-sm:w-13 absolute top-6 left-6 z-10`}
        />
      </Link>

      <nav
        className={`${styles.gradientMask} relative backdrop-blur-md flex flex-col lg:flex-row items-end`}
      >
        <div className="hidden lg:block w-36" />

        {/* Hamburger button — mobile only */}
        <div className="lg:hidden flex p-6">
          <HamburgerButton
            isOpen={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          />
        </div>

        {/* Nav links — row on desktop, column dropdown on mobile */}
        <div
          className={`flex items-end flex-1 gap-2 max-w-screen-xl max-lg:flex-col lg:mx-auto p-6 transition-all duration-300
            ${isOpen ? "max-lg:max-h-64" : "max-lg:max-h-0 max-lg:p-[0_24_0_24]"}`}
        >
          {links}
        </div>

        <div className="hidden xl:block w-36" />
      </nav>
    </header>
  );
}
