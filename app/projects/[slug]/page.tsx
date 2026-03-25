import Image from "next/image";
import Link from "next/link";

const loremText = `Раньше у меня не возникало желания давать интервью. Интервью всегда
становится комментарием. Написанное должно уметь обходиться без авторских пояснений.
Я мог бы перефразировать Ибсена и сказать: писать, не говорить — моё призванье.`;

const loremText2 = `Нет. У меня нет никакой литературной стратегии. Я пишу то, что пишу,
из некоей наивности, можно сказать — необходимости. Я не пытаюсь вмешиваться
ни в какие литературные баталии. Я вообще, кажется, не мыслю стратегически.`;

const tags = ["vfx", "3d", "2d", "реклама"];

const cats = [
  "https://placecats.com/600/400",
  "https://placecats.com/400/400",
  "https://placecats.com/400/300",
  "https://placecats.com/800/500",
  "https://placecats.com/500/400",
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-black text-white px-8 py-10 max-w-4xl mx-auto">
      {/* ─── Close button ─── */}
      <Link
        href="/projects"
        className="fixed top-6 right-8 text-white text-3xl hover:opacity-60 transition-opacity z-50"
      >
        ✕
      </Link>

      {/* ─── Header ─── */}
      <div className="mb-6">
        <h1 className="font-arimo text-5xl font-bold mb-1 capitalize">
          {slug.replace(/-/g, " ")}
        </h1>
        <p className="text-white/50 text-sm mb-3">Рекламный Ролик \ 30 Сек</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-white/30 rounded-full px-3 py-0.5 text-sm text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Main content ─── */}
      <div className="flex gap-8">
        {/* ─── Left column ─── */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Main image */}
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={cats[0]}
              alt="project main"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>

          {/* Description */}
          <p className="text-white/80 leading-7">{loremText}</p>
          <p className="text-white/80 leading-7">{loremText2}</p>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-1 row-span-2 rounded-xl overflow-hidden">
              <Image
                src={cats[1]}
                alt="project image"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src={cats[2]}
                alt="project image"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src={cats[3]}
                alt="project image"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom images */}
          <div className="rounded-xl overflow-hidden">
            <Image
              src={cats[4]}
              alt="project image"
              width={800}
              height={500}
              className="w-full object-cover"
            />
          </div>

          <p className="text-white/80 leading-7">{loremText2}</p>
        </div>

        {/* ─── Right column ─── */}
        <div className="w-40 shrink-0 flex flex-col gap-4 pt-2">
          <div>
            <p className="text-white/40 text-xs mb-1">Клиент</p>
            <p className="font-bold">Сбер</p>
          </div>
          <div>
            <p className="text-white/40 text-xs mb-1">Агентство</p>
            <p className="font-bold">Mosaic</p>
          </div>
        </div>
      </div>
    </div>
  );
}
