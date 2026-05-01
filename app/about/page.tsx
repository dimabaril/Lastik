import Image from "next/image";
import VideoPlayer from "../components/VideoPlayer";

export default function Studio() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-1 flex-col items-center justify-center gap-15 bg-black p-3 text-white max-md:gap-3 lg:p-6">
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
        <h2 className="font-unbounded self-center self-start rounded-full bg-white px-6 py-4 text-xl font-bold text-black uppercase">
          НАШИ СУПЕРСИЛЫ
        </h2>
        <div className="flex gap-6">
          <div className="flex flex-col items-start gap-6">
            {/* <h2 className="font-unbounded rounded-full bg-white px-6 py-4 text-xl font-bold text-black uppercase">
                НАШИ СУПЕРСИЛЫ
              </h2> */}
            <ul className="font-arimo list-disc pl-6 text-2xl">
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
          </div>
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
        <h2 className="font-unbounded self-center self-start rounded-full bg-white px-6 py-4 text-xl font-bold text-black uppercase">
          не только визуал
        </h2>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-4" style={{ flex: 702 / 993 }}>
            <Image
              src="/about/Group 103.png"
              alt="AI pipeline"
              width={702}
              height={299}
              className=""
              unoptimized
            />
            <div className="flex flex-1 flex-col gap-4">
              {/* <h2 className="font-unbounded rounded-full bg-white px-6 py-4 text-xl font-bold text-black uppercase">
                не только визуал
              </h2> */}
              <p className="font-unbounded text-3xl">
                Сторителлинг в Ластике – база
              </p>
              <p className="font-arimo text-2xl">
                Мы умеем придумывать истории. Нас зовут, чтобы сделать сложную
                тему понятной и живой.
              </p>
            </div>
            <Image
              src="/about/Group 104.png"
              alt="AI pipeline"
              width={702}
              height={318}
              className=""
              unoptimized
            />
          </div>
          <div
            className="gap- flex flex-col justify-between gap-4"
            style={{ flex: 507 / 993 }}
          >
            <Image
              src="/about/Group 156.png"
              alt="AI pipeline"
              width={507}
              height={218}
              className=""
              unoptimized
            />
            <Image
              src="/about/Group 157.png"
              alt="AI pipeline"
              width={507}
              height={272}
              className=""
              unoptimized
            />
            <Image
              src="/about/Group 158.png"
              alt="AI pipeline"
              width={507}
              height={114}
              className=""
              unoptimized
            />
            <Image
              src="/about/Group 160.png"
              alt="AI pipeline"
              width={507}
              height={363}
              className=""
              unoptimized
            />
          </div>
          <div
            className="flex flex-col justify-between gap-4"
            style={{ flex: 620 / 993 }}
          >
            <Image
              src="/about/Group 164.png"
              alt="AI pipeline"
              width={619}
              height={394}
              className=""
              unoptimized
            />
            <Image
              src="/about/Group 166.png"
              alt="AI pipeline"
              width={620}
              height={284}
              className=""
              unoptimized
            />
            <Image
              src="/about/Group 165.png"
              alt="AI pipeline"
              width={620}
              height={304}
              className=""
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-unbounded self-center self-start rounded-full bg-white px-6 py-4 text-xl font-bold text-black uppercase">
          AI в нашем пайплайне
        </h2>
        <div className="flex gap-4">
          <div className="flex w-full items-stretch gap-4">
            {/* Как это рассчитать:Коэффициент для flex — это отношение ширины к высоте ($Width / Height$).Первое видео: $1117 / 279 \approx \mathbf{4}$Второе видео: $626 / 279 \approx \mathbf{2.24}$ */}
            <div style={{ flex: 1117 / 279 }}>
              <VideoPlayer
                src="/about/MASTER preview 15-04_1.mp4"
                className="h-full w-full rounded-3xl object-cover"
              />
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
          <div className="relative" style={{ flex: 1083 / 609 }}>
            <VideoPlayer
              src="/about/AI textures.mp4"
              className="w-full rounded-3xl object-cover"
            />

            <div
              style={{ maxWidth: "66.6667%" }}
              className="absolute right-4 bottom-4 flex flex-col gap-4 rounded-2xl bg-slate-900/60 px-6 py-4 backdrop-blur-md"
            >
              <p className="font-unbounded text-2xl">
                Мы используем AI там, где он реально нужен:
              </p>
              <ul className="font-arimo list-disc pl-4 text-2xl opacity-90">
                <li>быстрые превизы и прототипы</li>
                <li>создать то, что иначе невозможно</li>
                <li>сдать проект быстрее и дешевле</li>
              </ul>
              <p className="font-arimo text-2xl font-bold">
                + конечный продукт без привкуса нейронок
              </p>
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
