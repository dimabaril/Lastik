"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navLinks = [
  { label: "проекты", href: "/projects" },
  { label: "студия", href: "/studio" },
  { label: "арт-дирекшен курс", href: "/kurs" },
];

const navColors = ["var(--nav-color-1)", "var(--nav-color-2)"];

const navGlowStyles = [styles.navLink1, styles.navLink2];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="uppercase font-arimo text-2xl sticky top-0 z-10">
      <Link href="/">
        <Image
          src="/red-Logo_print_mm_cmyk.svg"
          alt="Logo"
          width={120}
          height={120}
          className={`${styles.rotate} absolute top-6 left-6 z-10`}
        />
      </Link>
      <nav className={`${styles.gradientMask} backdrop-blur-md flex`}>
        {/* Symmetrical to logo */}
        <div className="w-36"></div>
        <div className="flex flex-1 items-center gap-2 flex-wrap  max-w-screen-xl mx-auto p-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
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
          ))}
        </div>
        {/* Symmetrical to logo */}
        <div className="w-36"></div>
      </nav>
    </header>
  );
}
