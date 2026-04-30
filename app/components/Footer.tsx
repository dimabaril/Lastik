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
    <footer className="bg-black">
      {/* <div className="grid grid-cols-3 max-w-screen-xl mx-auto py-12 px-6"> */}
      <div className="grid-rows-reverse mx-auto grid grid-cols-1 gap-y-6 px-3 py-18 md:grid-cols-2 lg:grid-cols-3 lg:px-6">
        {/* Social links */}
        <div className="flex aspect-323/127 flex-col justify-between gap-4 justify-self-center md:justify-self-start">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-[#FFF546] p-2 text-center text-2xl text-black transition-colors hover:text-(--ref-color-dark)"
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
          // width={399}
          // height={156}
          width={285}
          height={112}
          unoptimized
          className="justify-self-center md:justify-self-end lg:justify-self-center"
        />

        <div className="max-lg:hidden"></div>
      </div>
      <div
        className="h-5"
        style={{
          background:
            "linear-gradient(224.76deg, #CB8BFF 31.55%, #FF8D8D 110.48%)",
        }}
      ></div>
    </footer>
  );
}
