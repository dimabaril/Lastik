import Link from "next/link";

export default function ArtCourse() {
  return (
    <div className="flex flex-col flex-1 bg-black text-white items-center justify-center max-w-screen-xl mx-auto p-6">
      <p className="">раздел</p>
      <h1 className="">арт-дирекшен курс</h1>
      <p className="">скоро здесь появится информация о курсе</p>
      <Link
        href="/"
        className="px-6 py-2 rounded-full border border-white/30 text-sm hover:border-white hover:bg-white/5 transition-colors"
      >
        ← на главную
      </Link>
    </div>
  );
}
