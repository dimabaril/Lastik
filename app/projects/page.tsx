import Image from "next/image";
// import Aside from "../components/Aside";
import ProjectsGridFlex from "../components/ProjectsGridFlex";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <div className="max-w-screen-xl mx-auto px-3 py-6">
      {/* ─── Main column ─── */}
      <div className="flex flex-1 flex-col min-h-screen bg-black text-white">
        {/* ─── Hero ─── */}
        <section className="flex flex-col gap-10 items-center text-center py-15">
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
          <ProjectsGridFlex
            projects={projects.map((project) => ({
              title: project.title,
              thumbVideo: project.thumbVideo,
              slug: project.slug,
              tags: project.tags,
              size: project.size,
            }))}
          />
        </section>
      </div>
      {/* ─── Right aside ─── */}
      {/* <Aside /> */}
    </div>
  );
}
