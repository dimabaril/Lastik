import Image from "next/image";
import Aside from "../components/Aside";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Love Generation",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/love-generation/thumb/love_generation-thumb.webm",
  },
  {
    title: "VK NEO",
    span: "col-span-1 row-span-2",
    videoId: "926255997",
    thumbVideo: "/projects/vk-neo/thumb/NEO_pw.webm",
    featured: true,
  },
  {
    title: "Уралсиб",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/uralsib/thumb/uralsib-thumb.webm",
  },
  {
    title: "Делимобиль",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/delimobil/thumb/delimobil-thumb.webm",
  },
  {
    title: "МТС",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/mts/thumb/mts-thumb.webm",
  },
  {
    title: "Звук",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/zvuk/thumb/zvuk-thumb.webm",
  },
  {
    title: "Звук 2",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/zvuk-2/thumb/zvuk-2-thumb.webm",
  },
  {
    title: "ВТБ",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/vtb-1/thumb/vtb-1-thumb.webm",
  },
  {
    title: "Музей Москвы",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/mosmuseum/thumb/mosmuseum-thumb.webm",
  },
  {
    title: "Green Idea",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/green-idea/thumb/green-idea-thumb.webm",
  },
  {
    title: "Mail.ru",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/mail-ru/thumb/mail-thumb.webm",
  },
  {
    title: "Яндекс",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/yandex-incl/thumb/ya_incl-thumb.webm",
  },
  {
    title: "Волчок",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/volchok/thumb/volchok-thumb.webm",
  },
  {
    title: "Такси",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/taxi-v2/thumb/taxi-v2-thumb.webm",
  },
  {
    title: "Манси",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/mansi/thumb/mansi-thumb.webm",
  },
  {
    title: "Странейшие",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo:
      "/projects/stranneyshie-horiz/thumb/stranneyshie-horiz-thumb.webm",
  },
  {
    title: "Hospitality",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/hospitality/thumb/hospitality-thumb.webm",
  },
  {
    title: "I want to know",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo:
      "/projects/i-want-to-know-everything/thumb/i-want-to-know-everything-thumb.webm",
  },
  {
    title: "Presents Fest",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo:
      "/projects/presents-fest-2024/thumb/presents-fest-2024-thumb.webm",
  },
  {
    title: "Saint Spring",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/saint-spring-v3/thumb/saint-spring-v3-thumb.webm",
  },
  {
    title: "SBER High Res",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/sber-high-res/thumb/sber-high-res-thumb.webm",
  },
  {
    title: "Собчак",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/sobchak/thumb/sobchak_thumb.webm",
  },
  {
    title: "Supermarket",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo:
      "/projects/supermarket-trollys-dream-v1/thumb/supermarket-trollys-dream-v1-thumb.webm",
  },
  {
    title: "The Skin",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/the-skin-v1/thumb/the-skin-v1-thumb.webm",
  },
  {
    title: "Unprincipled",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
    thumbVideo: "/projects/unprincipled/thumb/unprincipled-thumb.webm",
  },
];

export default function Projects() {
  return (
    <div>
      {/* ─── Main column ─── */}
      <div className="flex flex-1 flex-col min-h-screen bg-black text-white">
        {/* ─── Hero ─── */}
        <section className="flex flex-col gap-10 items-center px-6 pt-16 pb-12 text-center">
          <div className="relative ">
            {/* <h1 className="font-arimo text-8xl leading-18 tracking-tighter drop-shadow-[0_0_5px_#fff]"> */}
            {/* <h1 className="font-arimo text-8xl leading-18 tracking-tighter drop-shadow-[0_0_20px_#3b82f6]"> */}
            {/* <h1 className="font-arimo text-8xl leading-18 tracking-tighter [text-shadow:0_0_10px_rgba(255,255,255,0.9)]"> */}

            {/* <h1 className="font-arimo text-8xl leading-18 tracking-tighter [text-shadow:0_0_10px_#fff,0_0_20px_#ff00de]"> */}
            <h1 className="font-arimo text-8xl leading-18 tracking-tighter [text-shadow:0_0_10px_#fff]">
              Design thats
              <br />
              crazy good
            </h1>
            <Image
              src="/cat.png"
              alt="cat"
              width={100}
              height={100}
              className="absolute top-0 -left-20"
            />
            <Image
              src="/heart.png"
              alt="heart"
              width={80}
              height={80}
              className="absolute -top-7 -right-15"
            />
            <Image
              src="/smile.png"
              alt="smile"
              width={65}
              height={65}
              className="absolute -bottom-2 right-29"
            />
          </div>
          <p className="max-w-2xl text-2xl leading-8">
            Мы создаём визуальное счастье в любой технике анимационную графику
            для компаний по всему миру
          </p>
        </section>
        {/* ─── Projects grid ─── */}
        <section className="px-6 pb-24 pr-32">
          <div className="grid grid-cols-3 gap-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                span={project.span}
                thumbVideo={project.thumbVideo}
              />
            ))}
          </div>
        </section>
      </div>
      {/* ─── Right aside ─── */}
      <Aside />
    </div>
  );
}
