import Link from "next/link";

export default function Something() {
  return (
    <div className="flex flex-col flex-1 bg-black text-white items-center justify-center">
      <p className="">раздел</p>
      <h1 className="">что-то</h1>
      <p className="">скоро здесь появится что-то интересное</p>
      <Link
        href="/"
        className="px-6 py-2 rounded-full border border-white/30 text-sm hover:border-white hover:bg-white/5 transition-colors"
      >
        ← на главную
      </Link>
    </div>
  );
}
