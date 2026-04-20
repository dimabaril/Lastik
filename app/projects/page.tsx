"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
// import Aside from "../components/Aside";
import ProjectsGridFlex from "../components/ProjectsGridFlex";
import { projects } from "@/lib/projects";
import { tags, Tag } from "@/lib/tags";

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<Set<Tag>>(new Set());

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (selectedTags.size === 0) return projects;
    return projects.filter((p) => p.tags.some((tag) => selectedTags.has(tag)));
  }, [selectedTags]);

  const toggleTag = (tag: Tag) => {
    const newTags = new Set(selectedTags);
    if (newTags.has(tag)) {
      newTags.delete(tag);
    } else {
      newTags.add(tag);
    }
    setSelectedTags(newTags);
  };

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
        {/* ─── Tag filter ─── */}
        <section className="py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`border rounded-full px-4 py-2 transition-colors font-victor-mono text-base cursor-pointer ${
                  selectedTags.has(tag)
                    ? "bg-white text-black border-white"
                    : "border-(--fade-color) text-(--fade-color) hover:border-white hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          {filteredProjects.length > 0 && (
            <p className="text-center text-(--fade-color) mt-4 text-sm">
              {filteredProjects.length}{" "}
              {(() => {
                const n = filteredProjects.length;
                const mod10 = n % 10;
                const mod100 = n % 100;
                if (mod10 === 1 && mod100 !== 11) return "проект";
                if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14))
                  return "проекта";
                return "проектов";
              })()}
            </p>
          )}
        </section>
        {/* ─── Projects grid ─── */}
        <section className="">
          <ProjectsGridFlex
            projects={filteredProjects.map((project) => ({
              title: project.title,
              thumbVideo: project.thumbVideo,
              thumbVideoPosterImage: project.thumbVideoPosterImage,
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
