"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import Aside from "../components/Aside";
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
    <div className="flex-1 max-w-screen-xl mx-auto px-3 py-6">
      {/* ─── Main column ─── */}
      <div className="flex flex-col bg-black text-white">
        {/* ─── Hero ─── */}
        <section className="flex flex-col gap-10 items-center text-center py-15">
          <div className="relative ">
            <h1 className="text-4xl sm:text-7xl md:text-8xl  [text-shadow:0_0_10px_#fff] relative z-1">
              <span className="font-unbounded font-bold">Суперская</span>
              <br />
              <span className="font-arimo uppercase">Анимация</span>
            </h1>
            <Image
              src="/cat.svg"
              alt="cat"
              width={70}
              height={70}
              className="absolute bottom-11 -left-4 max-sm:bottom-2 max-sm:-left-10"
            />
            <Image
              src="/smile.svg"
              alt="smile"
              width={70}
              height={70}
              className="absolute -top-9 right-14 max-sm:-top-12 max-sm:right-22"
            />
            <Image
              src="/heart.svg"
              alt="heart"
              width={70}
              height={70}
              className="absolute -bottom-3 -right-4 max-sm:-bottom-3 max-sm:-right-11"
            />
          </div>
          <p className="font-arimo max-w-[730px] text-2xl leading-8">
            Создаём визуальное счастье — от идеи до финального кадра, в любой
            технике и для задач брендов по всему миру
          </p>
        </section>
        {/* ─── Tag filter ─── */}
        <section className="py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`border rounded-full px-4 py-2 transition-colors font-unbounded font-light text-base cursor-pointer ${
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
            <p className="font-unbounded text-center text-(--fade-color) mt-4 text-sm">
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
      <div className="hidden 2xl:block">
        <Aside />
      </div>
    </div>
  );
}
