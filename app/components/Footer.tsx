import FooterClock from "./FooterClock";
import FitText from "./FitText";

const EMAIL = "hello@130studio.com";
const TELEGRAM = "https://t.me/lastikstudio";

const SOCIAL_LINKS = [
  { label: "behance", href: "https://behance.net/lastik" },
  { label: "vimeo", href: "https://vimeo.com/lastik" },
  { label: "instagram*", href: "https://instagram.com/lastik.studio" },
  { label: "facebook*", href: "https://facebook.com" },
];

export default function Footer() {
  return (
    <footer className="">
      <div className="grid grid-cols-3 p-6">
        {/* Time */}
        <div className="flex flex-col gap-3">
          <span className="text-xs tracking-widest text-(--fade-color) uppercase">
            Keep track of time
          </span>
          <FooterClock />
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <span className="text-xs tracking-widest text-(--contact-color) uppercase">
            Contact
          </span>
          <div className="flex flex-col gap-1 font-arimo text-2xl">
            <a
              href={`mailto:${EMAIL}`}
              className="hover:text-(--contact-color) transition-colors"
            >
              {EMAIL}
            </a>
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--contact-color) transition-colors"
            >
              telegram
            </a>
          </div>
        </div>

        {/* Follow */}
        <div className="flex flex-col gap-3">
          <span className="text-xs tracking-widest text-(--follow-color) uppercase">
            Follow
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-2xl">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-(--follow-color) transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <p className="text-xs text-(--fade-color)">
            *Owned by Meta Platforms Inc., which is recognized as an extremist
            organization and whose activities are prohibited in the territory of
            the Russian Federation
          </p>
        </div>
      </div>
      {/* Big name */}
      <div className="max-w-screen-xl mx-auto px-6">
        <FitText className="font-manrope select-none">1:30 STUDIO</FitText>
      </div>
    </footer>
  );
}
