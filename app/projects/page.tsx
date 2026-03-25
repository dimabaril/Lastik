import Image from "next/image";
import Aside from "../components/Aside";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "LOVE generation",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
  },
  {
    title: "НЕО",
    span: "col-span-1 row-span-2",
    videoId: "926255997",
    featured: true,
  },
  {
    title: "СБЕР. терминал",
    span: "col-span-1 row-span-1",
    videoId: "926255997",
  },
  { title: "Уралсиб", span: "col-span-1 row-span-1", videoId: "926255997" },
  { title: "ЕАПТЕКА", span: "col-span-1 row-span-1", videoId: "926255997" },
  { title: "СБЕР1. звук", span: "col-span-1 row-span-1", videoId: "926255997" },
  { title: "ВТБ", span: "col-span-1 row-span-1", videoId: "926255997" },
  { title: "СБЕР2. звук", span: "col-span-1 row-span-1", videoId: "926255997" },
  { title: "Делимобиль", span: "col-span-1 row-span-1", videoId: "926255997" },
  { title: "СБЕР3", span: "col-span-1 row-span-1", videoId: "926255997" },
  { title: "МТС", span: "col-span-1 row-span-1", videoId: "926255997" },
  { title: "СБЕР4. звук", span: "col-span-1 row-span-1", videoId: "926255997" },
  { title: "Волчок", span: "col-span-1 row-span-1", videoId: "926255997" },
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
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                span={project.span}
                videoId={project.videoId}
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
