import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import VimeoPlayer from "@/app/components/VimeoPlayer";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="font-manrope min-h-screen bg-black text-white max-w-screen-xl mx-auto p-6">
      {/* ─── Close button ─── */}
      <Link
        href="/projects"
        className="fixed top-6 right-8 text-white text-3xl hover:opacity-60 transition-opacity z-50"
      >
        ✕
      </Link>

      <div className="flex gap-6 items-center mb-6">
        <div className="flex flex-col flex-1 gap-6">
          {/* ─── Title ─── */}
          <h1 className="text-5xl font-bold capitalize">{project.title}</h1>
          <div className="font-victor-mono flex justify-between items-center">
            {/* ─── Description ─── */}
            <p className="text-white/50 text-sm">{project.description}</p>
            {/* ─── Tags ─── */}
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/30 rounded-full px-3 py-0.5 text-sm text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Main video */}
          <VimeoPlayer videoId={String(project.videoId)} />
        </div>
        {/* ─── Right column ─── */}
        <div className="w-40 shrink-0 flex flex-col gap-6 pt-2">
          {project.client && (
            <div>
              <p className="text-white/40 text-xs mb-1">Клиент</p>
              <p className="font-bold">{project.client}</p>
            </div>
          )}
          {project.agency && (
            <div>
              <p className="text-white/40 text-xs mb-1">Агентство</p>
              <p className="font-bold">{project.agency}</p>
            </div>
          )}
        </div>
      </div>

      {/* ─── Content grid ─── */}
      {project.layout ? (
        <div className="flex flex-col gap-6 mt-6">
          {project.layout.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-12 gap-6">
              {row.map((item, i) => {
                const style: React.CSSProperties = {
                  gridColumn: item.colStart
                    ? `${item.colStart} / span ${item.cols}`
                    : `span ${item.cols}`,
                };
                if (item.type === "text") {
                  return (
                    <div
                      key={i}
                      style={style}
                      className="text-white/80 leading-7 whitespace-pre-line"
                    >
                      {project.texts[item.index]}
                    </div>
                  );
                }
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
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-6 mt-6">
          {project.texts.map((text, i) => (
            <p key={i} className="text-white/80 leading-7 whitespace-pre-line">
              {text}
            </p>
          ))}
          {project.images.length > 0 && (
            <div className="grid grid-cols-2 gap-6">
              {project.images.map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden">
                  <Image
                    src={src}
                    alt={`${project.title} — ${i + 1}`}
                    width={800}
                    height={600}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
