import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black text-white items-center justify-center">
      <div className="text-center">
        <p className="text-white/30 text-sm uppercase tracking-widest mb-4">
          раздел
        </p>
        <h1 className="text-6xl font-bold text-pink-500 mb-8">
          главная страничка
        </h1>
        <p className="text-white/40 mb-10">
          думаю будет редирект на проекты, но пока так
        </p>
        <Link
          href="/projects"
          className="px-6 py-2 rounded-full border border-white/30 text-sm hover:border-white hover:bg-white/5 transition-colors"
        >
          ← на проекты
        </Link>
      </div>
    </div>
  );
}
