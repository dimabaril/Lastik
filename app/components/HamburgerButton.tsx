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
      className="flex flex-col justify-center gap-2 w-13 h-13 cursor-pointer"
      aria-label="Toggle menu"
    >
      <span
        className={`block w-full h-0.5 bg-white transition-transform duration-300 origin-center ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
      />
      <span
        className={`block w-full h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
      />
      <span
        className={`block w-full h-0.5 bg-white transition-transform duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
      />
    </button>
  );
}
