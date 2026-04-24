import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import VimeoPlayer from "@/app/components/VimeoPlayer";
import AutoplayVideo from "@/app/components/AutoplayVideo";
import { projects, type Project } from "@/lib/projects";

function renderText(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*)/)
    .map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        part
      ),
    );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project: Project | undefined = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-black text-white max-w-screen-xl mx-auto p-6">
      {/* ─── Close button ─── */}
      <Link
        href="/projects"
        className="fixed top-6 right-8 text-white text-3xl hover:opacity-60 transition-opacity z-50"
      >
        ✕
      </Link>

      {/* Upper block */}
      <div className="flex flex-col gap-6 mb-6">
        {/* ─── Title ─── */}
        <h1 className="text-6xl font-druk-cyr-bold-italic">{project.title}</h1>
        <div className="flex gap-6">
          {/* Main content */}
          <div className="flex flex-col flex-1 gap-6">
            <div className="text-xl text-(--fade-color) flex flex-wrap gap-3 justify-between items-center">
              {/* ─── Description ─── */}
              <p className="font-victor-mono">{project.description}</p>
              {/* ─── Tags ─── */}
              <div className="flex gap-2 font-victor-mono">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-(--fade-color) rounded-full px-3 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Main video */}
            <VimeoPlayer
              videoId={project.videoId}
              videoHash={project.videoHash}
            />
          </div>
          {/* ─── Right column ─── */}
          <div className="flex flex-col gap-6 pt-2 self-end">
            {project.brand && (
              <div>
                <p className="font-victor-mono text-(--fade-color) text-lg mb-1">
                  Бренд
                </p>
                <p className="font-arimo font-bold text-2xl">{project.brand}</p>
              </div>
            )}
            {project.agency && (
              <div>
                <p className="font-victor-mono text-(--fade-color) text-lg mb-1">
                  Агентство
                </p>
                <p className="font-arimo font-bold text-2xl">
                  {project.agency}
                </p>
              </div>
            )}
            {project.production && (
              <div>
                <p className="font-victor-mono text-(--fade-color) text-lg mb-1">
                  Продакшн
                </p>
                <p className="font-arimo font-bold text-2xl">
                  {project.production}
                </p>
              </div>
            )}
            {project.client && (
              <div>
                <p className="font-victor-mono text-(--fade-color) text-lg mb-1">
                  Клиент
                </p>
                <p className="font-arimo font-bold text-2xl">
                  {project.client}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─── Content grid ─── */}
      {project.layout ? (
        <div className="flex flex-col gap-6 mt-6">
          {project.layout.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-12 gap-6 items-start">
              {row.map((item, i) => {
                const style: React.CSSProperties = {
                  gridColumn: item.colStart
                    ? `${item.colStart} / span ${item.cols}`
                    : `span ${item.cols}`,
                };
                switch (item.type) {
                  case "text":
                    return (
                      <div
                        key={i}
                        style={style}
                        className="font-onest text-xl leading-7 whitespace-pre-line"
                      >
                        {renderText(project.texts[item.index])}
                      </div>
                    );
                  case "video":
                    return (
                      <div
                        key={i}
                        style={style}
                        className="rounded-xl overflow-hidden"
                      >
                        <AutoplayVideo
                          src={project.videos?.[item.index]}
                          className="w-full object-cover"
                        />
                      </div>
                    );
                  case "vimeo": {
                    const vimeo = project.vimeos?.[item.index];
                    if (!vimeo) return null;
                    return (
                      <div
                        key={i}
                        style={style}
                        className="rounded-xl overflow-hidden"
                      >
                        <VimeoPlayer
                          videoId={vimeo.videoId}
                          videoHash={vimeo.videoHash}
                        />
                      </div>
                    );
                  }
                  case "image":
                    return (
                      <div
                        key={i}
                        style={style}
                        className="rounded-xl overflow-hidden"
                      >
                        <Image
                          src={project.images[item.index]}
                          alt={`${project.title} — ${item.index + 1}`}
                          width={800}
                          height={600}
                          className="w-full object-cover"
                          priority={rowIndex === 0}
                        />
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-6 mt-6">
          {project.texts.map((text, i) => (
            <p
              key={i}
              className="font-onest text-xl leading-7 whitespace-pre-line"
            >
              {renderText(text)}
            </p>
          ))}
          {(project.images.length > 0 ||
            (project.videos && project.videos.length > 0)) && (
            <div className="grid grid-cols-2 gap-6 items-start">
              {project.images.map((src, i) => (
                <div key={`img-${i}`} className="rounded-xl overflow-hidden">
                  <Image
                    src={src}
                    alt={`${project.title} — ${i + 1}`}
                    width={800}
                    height={600}
                    className="w-full object-cover"
                  />
                </div>
              ))}
              {project.videos?.map((src, i) => (
                <div key={`vid-${i}`} className="rounded-xl overflow-hidden">
                  <video src={src} controls className="w-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
