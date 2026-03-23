import Link from "next/link";
import Image from "next/image";
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
  return (
    <header className="pl-37.5 sticky top-0 z-10">
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
        className={`${styles.gradientMask} flex flex-1 items-center gap-2 p-6 flex-wrap backdrop-blur`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: navColors[i % 2],
              borderColor: navColorsBorder[i % 2],
            }}
            className="px-8 py-2 rounded-full bg-black/70 border text-2xl transition-all hover:border-dashed hover:shadow-[var(--nav-color-1)_1px_1px_10px,var(--nav-color-1)_-1px_-1px_10px]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
