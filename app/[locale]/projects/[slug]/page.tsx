import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import VimeoPlayer from "@/app/components/VimeoPlayer";
import VideoPlayer from "@/app/components/VideoPlayer";
import { projects, type Project } from "@/lib/projects";
import type { Locale } from "@/i18n/routing";
import BackButton from "@/app/components/BackButton";

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
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ["ru", "en"]) {
    for (const project of projects) {
      params.push({ locale, slug: project.slug });
    }
  }
  return params;
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("projectPage");

  const project: Project | undefined = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const title =
    locale === "en" && project.titleEn ? project.titleEn : project.title;
  const texts =
    locale === "en" && project.textsEn ? project.textsEn : project.texts;

  return (
    <main className="mx-auto flex w-full max-w-screen-xl flex-1 flex-col gap-6 bg-black p-3 text-white max-md:gap-4 lg:p-6">
      {/* ─── Project Header ─── */}
      <div className="flex items-center justify-between border-t-2 border-white bg-black pt-3">
        <h1 className="font-druk-cyr-bold-italic text-4xl font-bold italic sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <BackButton className="text-4xl text-white transition-opacity hover:opacity-60 sm:text-7xl lg:text-8xl">
          ✕
        </BackButton>
      </div>

      {/* Upper block */}
      <div className="flex flex-col gap-6 max-md:gap-4">
        <div
          className={`flex gap-6 max-lg:flex-col max-md:gap-4 ${project.vimeos[0].fullWidth ? "flex-col" : ""}`}
        >
          {/* Main content */}
          <div className="flex flex-1 flex-col gap-6 max-md:gap-4">
            {/* ─── Tags ─── */}
            <div className="font-victor-mono flex divide-x self-end text-xl max-lg:text-lg">
              {project.tags.map((tag) => (
                <span
                  key={tag[locale as Locale] ?? tag.en}
                  className="px-3 py-0.5 whitespace-nowrap"
                >
                  {tag[locale as Locale] ?? tag.en}
                </span>
              ))}
            </div>

            {/* Main video */}
            <VimeoPlayer
              id={project.vimeos[0].id}
              hash={project.vimeos[0].hash}
              aspectRatio={project.vimeos[0].aspectRatio}
            />
          </div>
          {/* ─── Right column ─── */}
          <div className="flex flex-col gap-6 self-end max-lg:items-end max-lg:gap-4 max-md:gap-1">
            {[
              { label: t("brand"), value: project.credits?.brand },
              { label: t("agency"), value: project.credits?.agency },
              { label: t("production"), value: project.credits?.production },
              { label: t("client"), value: project.credits?.client },
            ]
              .filter((item) => item.value)
              .map((item) => (
                <div
                  key={item.label}
                  className="flex items-center max-lg:gap-2 lg:flex-col lg:items-start"
                >
                  <p className="font-victor-mono text-lg text-(--fade-color) max-lg:text-base">
                    {item.label}
                  </p>
                  <p className="font-arimo text-2xl font-bold max-lg:text-xl">
                    {item.value}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* description */}
        {texts[0] && (
          <div className="flex items-center gap-4">
            <Image
              src="/arrow.png"
              alt="arrow"
              width={29}
              height={40}
              className="max-md:w-5"
            />
            <p className="font-arimo text-2xl font-semibold max-lg:text-xl max-lg:leading-tight lg:max-w-1/2">
              {renderText(texts[0])}
            </p>
          </div>
        )}
      </div>

      {/* ─── Content grid ─── */}
      {project.layout ? (
        <div className="flex flex-col gap-6 max-md:gap-4">
          {project.layout.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-12 items-start gap-6 max-md:gap-4"
            >
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
                        className={`font-onest col-span-12 text-xl whitespace-pre-line max-lg:text-lg max-lg:leading-tight ${item.cols ? `lg:col-span-${item.cols}` : ""} ${item.colStart ? `lg:col-start-${item.colStart}` : ""}`}
                      >
                        {renderText(texts[item.index])}
                      </div>
                    );
                  case "video":
                    return (
                      <div
                        key={i}
                        style={style}
                        className="overflow-hidden lg:rounded-xl"
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
                        className="overflow-hidden lg:rounded-xl"
                      >
                        <VimeoPlayer
                          id={vimeo.id}
                          hash={vimeo.hash}
                          aspectRatio={vimeo.aspectRatio}
                        />
                      </div>
                    );
                  }
                  case "image":
                    return (
                      <div
                        key={i}
                        style={style}
                        className="overflow-hidden lg:rounded-xl"
                      >
                        <Image
                          src={project.images[item.index]}
                          alt={`${title} — ${item.index + 1}`}
                          width={800}
                          height={800}
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
        <div className="mt-6 flex flex-col gap-6 max-md:gap-4">
          {texts.map((text, i) => (
            <p
              key={i}
              className="font-onest text-xl whitespace-pre-line max-lg:text-lg max-lg:leading-tight"
            >
              {renderText(text)}
            </p>
          ))}
          {project.images.map((src, i) => (
            <div key={`img-${i}`} className="overflow-hidden lg:rounded-xl">
              <Image
                src={src}
                alt={`${title} — ${i + 1}`}
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>
          ))}
          {project.videos?.map((src, i) => (
            <div key={`vid-${i}`} className="overflow-hidden lg:rounded-xl">
              <video src={src} controls className="w-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
