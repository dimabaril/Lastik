const asideItems = [
  "bg-pink-400",
  "bg-green-400",
  "bg-purple-300",
  "bg-yellow-300",
  "bg-zinc-700",
  "bg-blue-400",
  "bg-zinc-600",
  "bg-teal-400",
  "bg-orange-400",
  "bg-pink-300",
  "bg-zinc-700",
  "bg-green-300",
];

export default function Aside() {
  return (
    <aside className="w-32 fixed z-20 right-0 top-0 h-full flex flex-col gap-2 py-6 px-6 bg-black overflow-y-auto">
      {asideItems.map((color, i) => (
        <div
          key={i}
          className={`w-full aspect-square rounded-xl ${color} shrink-0 cursor-pointer hover:opacity-80 transition-opacity`}
        />
      ))}
    </aside>
  );
}
