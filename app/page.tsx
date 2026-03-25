import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-black text-white items-center justify-center">
      <p className="">раздел</p>
      <h1 className="">главная страничка</h1>
      <p className="">думаю будет редирект на проекты, но пока так</p>
      <Link
        href="/projects"
        className="px-6 py-2 rounded-full border border-white/30 text-sm hover:border-white hover:bg-white/5 transition-colors"
      >
        ← на проекты
      </Link>
    </div>
  );
}
