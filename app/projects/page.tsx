import Image from "next/image";
import Aside from "../components/Aside";
import ProjectsGridFlexBasis from "../components/ProjectsGridFlexBasis";

const projects = [
  {
    title: "Love Generation",
    videoId: "926255997",
    thumbVideo: "/projects/love-generation/thumb/love_generation-thumb.webm",
    tags: ["2d", "реклама"],
    size: 8,
  },
  {
    title: "VK NEO",
    videoId: "926255997",
    thumbVideo: "/projects/vk-neo/thumb/NEO_pw.webm",
    tags: ["3d", "motion"],
    size: 3,
  },
  {
    title: "Уралсиб",
    videoId: "926255997",
    thumbVideo: "/projects/uralsib/thumb/uralsib-thumb.webm",
    tags: ["2d", "реклама"],
    size: 4,
  },
  {
    title: "Делимобиль",
    videoId: "926255997",
    thumbVideo: "/projects/delimobil/thumb/delimobil-thumb.webm",
    tags: ["2d", "реклама"],
    size: 3,
  },
  {
    title: "МТС",
    videoId: "926255997",
    thumbVideo: "/projects/mts/thumb/mts-thumb.webm",
    tags: ["3d", "реклама"],
    size: 6,
  },
  {
    title: "Звук",
    videoId: "926255997",
    thumbVideo: "/projects/zvuk/thumb/zvuk-thumb.webm",
    tags: ["2d", "motion"],
    size: 4,
  },
  {
    title: "Звук 2",
    videoId: "926255997",
    thumbVideo: "/projects/zvuk-2/thumb/zvuk-2-thumb.webm",
    tags: ["2d", "motion"],
    size: 3,
  },
  {
    title: "ВТБ",
    videoId: "926255997",
    thumbVideo: "/projects/vtb-1/thumb/vtb-1-thumb.webm",
    tags: ["3d", "реклама"],
    size: 4,
  },
  {
    title: "Музей Москвы",
    videoId: "926255997",
    thumbVideo: "/projects/mosmuseum/thumb/mosmuseum-thumb.webm",
    tags: ["2d", "арт"],
    size: 3,
  },
  {
    title: "Green Idea",
    videoId: "926255997",
    thumbVideo: "/projects/green-idea/thumb/green-idea-thumb.webm",
    tags: ["2d", "motion"],
    size: 6,
  },
  {
    title: "Mail.ru",
    videoId: "926255997",
    thumbVideo: "/projects/mail-ru/thumb/mail-thumb.webm",
    tags: ["3d", "реклама"],
    size: 4,
  },
  {
    title: "Яндекс",
    videoId: "926255997",
    thumbVideo: "/projects/yandex-incl/thumb/ya_incl-thumb.webm",
    tags: ["2d", "motion"],
    size: 7,
  },
  {
    title: "Волчок",
    videoId: "926255997",
    thumbVideo: "/projects/volchok/thumb/volchok-thumb.webm",
    tags: ["2d", "авторское"],
    size: 3,
  },
  {
    title: "Такси",
    videoId: "926255997",
    thumbVideo: "/projects/taxi-v2/thumb/taxi-v2-thumb.webm",
    tags: ["2d", "реклама"],
    size: 3,
  },
  {
    title: "Манси",
    videoId: "926255997",
    thumbVideo: "/projects/mansi/thumb/mansi-thumb.webm",
    tags: ["2d", "арт"],
    size: 3,
  },
  {
    title: "Странейшие",
    videoId: "926255997",
    thumbVideo:
      "/projects/stranneyshie-horiz/thumb/stranneyshie-horiz-thumb.webm",
    tags: ["2d", "авторское"],
    size: 3,
  },
  {
    title: "Hospitality",
    videoId: "926255997",
    thumbVideo: "/projects/hospitality/thumb/hospitality-thumb.webm",
    tags: ["3d", "motion"],
    size: 4,
  },
  {
    title: "I want to know",
    videoId: "926255997",
    thumbVideo:
      "/projects/i-want-to-know-everything/thumb/i-want-to-know-everything-thumb.webm",
    tags: ["2d", "авторское"],
    size: 6,
  },
  {
    title: "Presents Fest",
    videoId: "926255997",
    thumbVideo:
      "/projects/presents-fest-2024/thumb/presents-fest-2024-thumb.webm",
    tags: ["2d", "ивент"],
    size: 6,
  },
  {
    title: "Saint Spring",
    videoId: "926255997",
    thumbVideo: "/projects/saint-spring-v3/thumb/saint-spring-v3-thumb.webm",
    tags: ["3d", "реклама"],
    size: 4,
  },
  {
    title: "SBER High Res",
    videoId: "926255997",
    thumbVideo: "/projects/sber-high-res/thumb/sber-high-res-thumb.webm",
    tags: ["3d", "реклама"],
    size: 6,
  },
  {
    title: "Собчак",
    videoId: "926255997",
    thumbVideo: "/projects/sobchak/thumb/sobchak_thumb.webm",
    tags: ["2d", "motion"],
    size: 4,
  },
  {
    title: "Supermarket",
    videoId: "926255997",
    thumbVideo:
      "/projects/supermarket-trollys-dream-v1/thumb/supermarket-trollys-dream-v1-thumb.webm",
    tags: ["3d", "авторское"],
    size: 5,
  },
  {
    title: "The Skin",
    videoId: "926255997",
    thumbVideo: "/projects/the-skin-v1/thumb/the-skin-v1-thumb.webm",
    tags: ["2d", "авторское"],
    size: 5,
  },
  {
    title: "Unprincipled",
    videoId: "926255997",
    thumbVideo: "/projects/unprincipled/thumb/unprincipled-thumb.webm",
    tags: ["2d", "авторское"],
    size: 3,
  },
];

export default function Projects() {
  return (
    <div className="max-w-screen-xl mx-auto px-3 py-6">
      {/* ─── Main column ─── */}
      <div className="flex flex-1 flex-col min-h-screen bg-black text-white">
        {/* ─── Hero ─── */}
        <section className="flex flex-col gap-10 items-center text-center">
          <div className="relative ">
            {/* <h1 className="font-arimo text-8xl leading-18 tracking-tighter drop-shadow-[0_0_5px_#fff]"> */}
            {/* <h1 className="font-arimo text-8xl leading-18 tracking-tighter drop-shadow-[0_0_20px_#3b82f6]"> */}
            {/* <h1 className="font-arimo text-8xl leading-18 tracking-tighter [text-shadow:0_0_10px_rgba(255,255,255,0.9)]"> */}

            {/* <h1 className="font-arimo text-8xl leading-18 tracking-tighter [text-shadow:0_0_10px_#fff,0_0_20px_#ff00de]"> */}
            <h1 className="font-arimo text-8xl leading-18 tracking-tighter [text-shadow:0_0_10px_#fff]">
              Суперская
              <br />
              Анимация
            </h1>
            <Image
              src="/cat.svg"
              alt="cat"
              width={60}
              height={60}
              className="absolute top-1 -left-11"
            />
            <Image
              src="/heart.svg"
              alt="heart"
              width={60}
              height={60}
              className="absolute -top-5 right-22"
            />
            <Image
              src="/smile.svg"
              alt="smile"
              width={60}
              height={60}
              className="absolute -bottom-3 -right-11"
            />
          </div>
          <p className="font-manrope max-w-2xl text-2xl leading-8">
            Мы создаём визуальное счастье в любой технике анимационную графику
            для компаний по всему миру
          </p>
        </section>
        {/* ─── Projects grid ─── */}
        <section className="">
          <ProjectsGridFlexBasis
            projects={projects.map((p) => ({
              title: p.title,
              thumbVideo: p.thumbVideo,
              slug: new URL(p.thumbVideo, "http://x").pathname.split("/")[2],
              tags: p.tags,
              size: p.size,
            }))}
          />
        </section>
      </div>
      {/* ─── Right aside ─── */}
      {/* <Aside /> */}
    </div>
  );
}
