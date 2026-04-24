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
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-6 mx-auto pb-18 px-6">
        <div className="max-lg:hidden"></div>
        {/* Big name */}
        <Image
          src="/footer-lastik.svg"
          alt="lastik"
          width={399}
          height={156}
          unoptimized
          className="justify-self-center"
        />

        {/* Social links */}
        <div className="flex flex-col gap-4 justify-between md:justify-self-end max-md:justify-self-center">
          <a
            href={`mailto:${EMAIL}`}
            className="bg-[#FFF546] py-2 px-8 rounded-full text-2xl text-black hover:text-(--ref-color-dark) transition-colors"
          >
            {EMAIL}
          </a>
          <div className="flex gap-6 justify-between">
            {SOCIAL_LINKS.map(({ label, href, svg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-(--ref-color-light) transition-colors"
              >
                {svg ? (
                  <span
                    className="block w-12 h-12 bg-current"
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
      </div>
    </footer>
  );
}
