"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navLinks = [
  { label: "проекты", href: "/projects" },
  { label: "студия", href: "/studio" },
  { label: "что-то", href: "/chto-to" },
  { label: "арт-дирекшен курс", href: "/kurs" },
];

const navColors = ["var(--nav-color-1)", "var(--nav-color-2)"];
const navColorsBorder = ["rgba(255, 68, 122, 0.7)", "rgba(221, 255, 0, 0.7)"];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className=" sticky top-0 z-10">
      <Link href="/">
        <Image
          src="/red-Logo_print_mm_cmyk.svg"
          alt="Logo"
          width={120}
          height={120}
          className={`${styles.rotate} absolute top-6 left-6 z-10`}
        />
      </Link>
      <nav
        className={`${styles.gradientMask} pl-43.5 flex flex-1 items-center gap-2 p-6 flex-wrap backdrop-blur`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: navColors[i % 2],
              borderColor: navColorsBorder[i % 2],
              boxShadow:
                pathname === link.href
                  ? `${navColors[(i + 1) % 2]} 1px 1px 10px, ${navColors[(i + 1) % 2]} -1px -1px 10px`
                  : "none",
            }}
            className="px-8 py-2 rounded-full text-2xl bg-black/70 border hover:border-dashed transition-all duration-300"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
