import Image from "next/image";

const EMAIL = "hello@lastik.studio";

const SOCIAL_LINKS = [
  {
    label: "vimeo",
    href: "https://vimeo.com/lastik",
    svg: "/vimeo-144-svgrepo-com.svg",
  },
  {
    label: "behance",
    href: "https://behance.net/lastik",
    svg: "/behance-163-svgrepo-com.svg",
  },
  {
    label: "instagram",
    href: "https://instagram.com/lastik.studio",
    svg: "/instagram-167-svgrepo-com.svg",
  },
  {
    label: "telegram",
    href: "https://t.me/kbucilina",
    svg: "/telegram-svgrepo-com.svg",
  },
];

export default function Footer() {
  return (
    <footer className="z-20 bg-black">
      {/* <div className="grid grid-cols-3 max-w-screen-xl mx-auto py-12 px-6"> */}
      <div className="mx-auto grid grid-cols-3 gap-y-6 px-6 pb-18 max-lg:grid-cols-2 max-md:grid-cols-1">
        {/* Social links */}
        <div className="flex flex-col justify-between gap-4 max-md:justify-self-center md:justify-self-start">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-[#FFF546] px-8 py-2 text-2xl text-black transition-colors hover:text-(--ref-color-dark)"
          >
            {EMAIL}
          </a>
          <div className="flex justify-between gap-6">
            {SOCIAL_LINKS.map(({ label, href, svg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-(--ref-color-light)"
              >
                {svg ? (
                  <span
                    className="block h-12 w-12 bg-current"
                    style={{
                      maskImage: `url('${svg}')`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                  />
                ) : (
                  label
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Big name */}
        <Image
          src="/footer-lastik.svg"
          alt="lastik"
          width={399}
          height={156}
          unoptimized
          className="justify-self-center"
        />

        <div className="max-lg:hidden"></div>
      </div>
    </footer>
  );
}
