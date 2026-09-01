import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import ProjectsGridFlex from "@/app/components/ProjectsGridFlex";
import Aside from "@/app/components/AsideNoSSR";
import { projects } from "@/lib/projects";
import styles from "./projects.module.css";

type Props = { params: Promise<{ locale: string }> };

export default async function Projects({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("projects");

  const localizedProjects = projects.map((project) => ({
    title: locale === "en" && project.titleEn ? project.titleEn : project.title,
    thumb: project.thumb,
    slug: project.slug,
    tags: project.tags,
    size: project.size,
  }));

  return (
    <main className="mx-auto max-w-screen-xl flex-1 pt-6 lg:px-3">
      {/* ─── Main column ─── */}
      <div className="flex flex-col bg-black text-white">
        {/* ─── Hero ─── */}
        <section className="flex flex-col items-center gap-10 px-3 py-15 text-center">
          <div className="relative">
            <h1 className="relative z-10 text-4xl sm:text-7xl md:text-8xl">
              <span className="font-unbounded font-bold">
                {t("heroTitle1")}
              </span>
              <br />
              <span className="font-arimo uppercase">{t("heroTitle2")}</span>
            </h1>
            <Image
              src="/cat.svg"
              alt="cat"
              width={70}
              height={61}
              style={{ width: "70px", height: "auto", animationDelay: "0s" }}
              className={`absolute bottom-11 -left-4 max-sm:bottom-2 max-sm:-left-10 ${styles.floatingImage}`}
            />
            <Image
              src="/smile.svg"
              alt="smile"
              width={70}
              height={70}
              style={{ width: "70px", height: "auto", animationDelay: "0.7s" }}
              className={`absolute -top-9 right-14 ${styles.floatingImage} max-sm:-top-12 max-sm:right-22`}
            />
            <Image
              src="/heart.svg"
              alt="heart"
              width={70}
              height={61}
              style={{ width: "70px", height: "auto", animationDelay: "1.3s" }}
              className={`absolute -right-4 -bottom-3 ${styles.floatingImage} max-sm:-right-11 max-sm:-bottom-3`}
            />
          </div>
          <p className="font-arimo max-w-[730px] text-2xl max-sm:text-xl max-sm:leading-tight">
            {t("heroSubtitle")}
          </p>
        </section>

        {/* ─── Projects grid ─── */}
        <section className="">
          <ProjectsGridFlex projects={localizedProjects} />
        </section>

        <section className="pt-18">
          <p className="font-unbounded text-center text-3xl font-extrabold sm:text-4xl md:text-5xl">
            {t("ctaHeading")}
          </p>

          <Image
            src="/about-team.png"
            alt="Lastik team"
            width={838}
            height={551}
            className="mx-auto w-2/3"
          />
        </section>
      </div>
      {/* ─── Right aside ─── */}
      <div className="hidden 2xl:block">
        <Aside />
      </div>
    </main>
  );
}
