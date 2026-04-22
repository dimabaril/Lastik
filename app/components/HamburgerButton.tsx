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
      className="group flex flex-col justify-center gap-2 w-13 h-13 cursor-pointer"
      aria-label="Toggle menu"
    >
      <span
        className={`block w-full h-0.5 bg-white transition-[transform,box-shadow] duration-300 origin-center group-hover:[box-shadow:0_0_6px_2px_rgba(255,255,255,0.8)] ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
      />
      <span
        className={`block w-full h-0.5 bg-white transition-[opacity,box-shadow] duration-300 group-hover:[box-shadow:0_0_6px_2px_rgba(255,255,255,0.8)] ${isOpen ? "opacity-0" : ""}`}
      />
      <span
        className={`block w-full h-0.5 bg-white transition-[transform,box-shadow] duration-300 origin-center group-hover:[box-shadow:0_0_6px_2px_rgba(255,255,255,0.8)] ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
      />
    </button>
  );
}
