import Image from "next/image";

import VideoPlayer from "@/app/components/VideoPlayer";

const aiAdvantages = (
  <>
    <p className="font-unbounded text-2xl max-lg:text-xl max-lg:leading-tight">
      Мы используем AI там, где он реально нужен:
    </p>
    <ul className="font-arimo list-disc pl-4 text-2xl opacity-90 max-lg:text-xl max-lg:leading-tight">
      <li>быстрые превизы и прототипы</li>
      <li>создать то, что иначе невозможно</li>
      <li>сдать проект быстрее и дешевле</li>
    </ul>
    <p className="font-arimo text-2xl font-bold max-lg:text-xl max-lg:leading-tight">
      + конечный продукт без привкуса нейронок
    </p>
  </>
);

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
}) => (
  <h2
    className={`font-unbounded self-start rounded-full bg-white px-6 py-4 text-xl font-bold text-black uppercase max-lg:py-2 max-lg:text-base ${className}`}
  >
    {children}
  </h2>
);

export default function Studio() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-1 flex-col items-center justify-center gap-15 bg-black p-3 text-white lg:p-6">
      {/* Hero */}
      <h1 className="sr-only">about</h1>
      <Image
        src="/about-team.png"
        alt="Lastik team"
        width={1656}
        height={1090}
        className="w-2/3"
      />

      <section className="flex flex-col gap-4">
        <SectionTitle>НАШИ СУПЕРСИЛЫ</SectionTitle>
        <div className="flex gap-4 max-md:flex-col-reverse">
          <ul className="font-arimo list-disc pl-6 text-2xl max-lg:text-xl max-lg:leading-tight">
            <li>Крутой арт-дирекшн, легко переключаемся между стилями</li>
            <li>Персонажей разрабатывают лучшие иллюстраторы</li>
            <li>Уважаем классическую 2D-анимацию</li>
            <li>3D-анимация любой сложности</li>
            <li>
              AI – собственные ноухау, локальные тренированные нейросети под
              особые задачи
            </li>
            <li>Модный и актуальный моушн</li>
          </ul>

          <div>
            <VideoPlayer
              src="/about/neo (1080p) 2.mp4"
              className="w-full rounded-3xl object-cover"
            />
          </div>
        </div>
        <div>
          <VideoPlayer
            src="/about/Comp 2_3.mp4"
            className="w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle>не только визуал</SectionTitle>
        <div className="flex justify-between gap-4 max-md:flex-col">
          <div className="flex flex-col gap-4" style={{ flex: 702 / 993 }}>
            <Image
              src="/about/Group 103.png"
              alt="AI pipeline"
              width={702}
              height={299}
              className="w-full"
              unoptimized
            />
            <div className="flex flex-1 flex-col gap-4">
              {/* <h2 className="font-unbounded rounded-full bg-white px-6 py-4 text-xl font-bold text-black uppercase">
                не только визуал
              </h2> */}
              <p className="font-unbounded text-3xl max-lg:text-2xl">
                Сторителлинг в Ластике – база
              </p>
              <p className="font-arimo text-2xl max-lg:text-xl max-lg:leading-tight">
                Мы умеем придумывать истории. Нас зовут, чтобы сделать сложную
                тему понятной и живой.
              </p>
            </div>
            <Image
              src="/about/Group 104.png"
              alt="AI pipeline"
              width={702}
              height={318}
              className="w-full"
              unoptimized
            />
          </div>
          <div
            className="gap- flex flex-col justify-between gap-4 max-md:hidden"
            style={{ flex: 507 / 993 }}
          >
            <Image
              src="/about/Group 156.png"
              alt="AI pipeline"
              width={507}
              height={218}
              className="w-full"
              unoptimized
            />
            <Image
              src="/about/Group 157.png"
              alt="AI pipeline"
              width={507}
              height={272}
              className="w-full"
              unoptimized
            />
            <Image
              src="/about/Group 158.png"
              alt="AI pipeline"
              width={507}
              height={114}
              className="w-full"
              unoptimized
            />
            <Image
              src="/about/Group 160.png"
              alt="AI pipeline"
              width={507}
              height={363}
              className="w-full"
              unoptimized
            />
          </div>
          <div
            className="flex flex-col justify-between gap-4 max-md:hidden"
            style={{ flex: 620 / 993 }}
          >
            <Image
              src="/about/Group 164.png"
              alt="AI pipeline"
              width={619}
              height={394}
              className="w-full"
              unoptimized
            />
            <Image
              src="/about/Group 166.png"
              alt="AI pipeline"
              width={620}
              height={284}
              className="w-full"
              unoptimized
            />
            <Image
              src="/about/Group 165.png"
              alt="AI pipeline"
              width={620}
              height={304}
              className="w-full"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle>AI в нашем пайплайне</SectionTitle>

        <div className="flex gap-4">
          <div className="flex gap-4 max-md:flex-col">
            {/* Как это рассчитать:Коэффициент для flex — это отношение ширины к высоте ($Width / Height$).Первое видео: $1117 / 279 \approx \mathbf{4}$Второе видео: $626 / 279 \approx \mathbf{2.24}$ */}
            <div style={{ flex: 1117 / 279 }}>
              <VideoPlayer
                src="/about/MASTER preview 15-04_1.mp4"
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
            <div className="hidden flex-col gap-4 max-md:flex">
              {aiAdvantages}
            </div>
            <div style={{ flex: 626 / 279 }}>
              <VideoPlayer
                src="/about/ya_shedevrium.mp4"
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div style={{ flex: 305 / 611 }}>
            <VideoPlayer
              src="/about/leto-luzi.mp4"
              className="w-full rounded-3xl object-cover"
            />
          </div>
          <div className="relative max-md:hidden" style={{ flex: 1083 / 609 }}>
            <VideoPlayer
              src="/about/AI textures.mp4"
              className="w-full rounded-3xl object-cover"
            />

            <div
              style={{ maxWidth: "66.6667%" }}
              className="absolute right-4 bottom-4 flex flex-col gap-4 rounded-2xl bg-slate-900/60 px-6 py-4 backdrop-blur-md"
            >
              {aiAdvantages}
            </div>
          </div>
          <div style={{ flex: 343 / 609 }}>
            <VideoPlayer
              src="/about/all4.mp4"
              className="w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
