import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import VimeoPlayer from "@/app/components/VimeoPlayer";
import VideoPlayer from "@/app/components/VideoPlayer";
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
    <main className="mx-auto w-full max-w-screen-xl flex-1 bg-black p-6 text-white">
      {/* ─── Project Header ─── */}
      <div className="flex justify-between border-t-2 border-white bg-black">
        {/* ─── Title ─── */}
        <h1 className="font-druk-cyr-bold-italic text-8xl">{project.title}</h1>
        {/* ─── Close button ─── */}
        <Link
          href="/projects"
          className="self-start text-4xl text-white transition-opacity hover:opacity-60"
        >
          ✕
        </Link>
      </div>

      {/* Upper block */}
      <div className="mb-6 flex flex-col gap-6">
        <div className="flex gap-6">
          {/* Main content */}
          <div className="flex flex-1 flex-col gap-6">
            <div className="flex flex-wrap items-center justify-end gap-3 text-xl">
              {/* ─── Description ─── */}
              {/* <p className="font-victor-mono">{project.description}</p> */}
              {/* ─── Tags ─── */}
              <div className="font-victor-mono flex divide-x">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-0.5 whitespace-nowrap">
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
          <div className="flex flex-col gap-6 self-end pt-2">
            {project.brand && (
              <div>
                <p className="font-victor-mono mb-1 text-lg text-(--fade-color)">
                  Бренд
                </p>
                <p className="font-arimo text-2xl font-bold">{project.brand}</p>
              </div>
            )}
            {project.agency && (
              <div>
                <p className="font-victor-mono mb-1 text-lg text-(--fade-color)">
                  Агентство
                </p>
                <p className="font-arimo text-2xl font-bold">
                  {project.agency}
                </p>
              </div>
            )}
            {project.production && (
              <div>
                <p className="font-victor-mono mb-1 text-lg text-(--fade-color)">
                  Продакшн
                </p>
                <p className="font-arimo text-2xl font-bold">
                  {project.production}
                </p>
              </div>
            )}
            {project.client && (
              <div>
                <p className="font-victor-mono mb-1 text-lg text-(--fade-color)">
                  Клиент
                </p>
                <p className="font-arimo text-2xl font-bold">
                  {project.client}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* svg */}
          <Image
            // src="/arrow.svg"
            src="/arrow.png"
            alt="arrow"
            width={29}
            height={40}
            // className="self-start pt-3"
          />
          {/* text index 0 */}
          <p className="font-arimo max-w-1/2 text-2xl font-semibold">
            {renderText(project.texts[0])}
          </p>
        </div>
      </div>

      {/* ─── Content grid ─── */}
      {project.layout ? (
        <div className="mt-6 flex flex-col gap-6">
          {project.layout.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-12 items-start gap-6">
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
                        className="overflow-hidden rounded-xl"
                      >
                        <VideoPlayer
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
                        className="overflow-hidden rounded-xl"
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
                        className="overflow-hidden rounded-xl"
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
        <div className="mt-6 flex flex-col gap-6">
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
            <div className="grid grid-cols-2 items-start gap-6">
              {project.images.map((src, i) => (
                <div key={`img-${i}`} className="overflow-hidden rounded-xl">
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
                <div key={`vid-${i}`} className="overflow-hidden rounded-xl">
                  <video src={src} controls className="w-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
