export default function HamburgerButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex h-13 w-13 cursor-pointer flex-col justify-center gap-2"
      aria-label="Toggle menu"
    >
      <span
        className={`block h-0.5 w-full origin-center bg-white transition-[transform,box-shadow] duration-300 group-hover:[box-shadow:0_0_6px_2px_rgba(255,255,255,0.8)] ${isOpen ? "translate-y-2.5 rotate-45" : ""}`}
      />
      <span
        className={`block h-0.5 w-full bg-white transition-[opacity,box-shadow] duration-300 group-hover:[box-shadow:0_0_6px_2px_rgba(255,255,255,0.8)] ${isOpen ? "opacity-0" : ""}`}
      />
      <span
        className={`block h-0.5 w-full origin-center bg-white transition-[transform,box-shadow] duration-300 group-hover:[box-shadow:0_0_6px_2px_rgba(255,255,255,0.8)] ${isOpen ? "-translate-y-2.5 -rotate-45" : ""}`}
      />
    </button>
  );
}
