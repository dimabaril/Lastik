import Image from "next/image";

export default function Studio() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-1 flex-col items-center justify-center bg-black p-6 text-white">
      <h1 className="sr-only">about</h1>
      <Image
        src="/about-team.png"
        alt="Lastik team"
        width={800}
        height={600}
        className="w-full"
      />
    </div>
  );
}
