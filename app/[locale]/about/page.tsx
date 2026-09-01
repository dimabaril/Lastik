import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import VideoPlayer from "@/app/components/VideoPlayer";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
}) => (
  <h2
    className={`font-unbounded self-start rounded-full bg-white px-6 py-4 text-xl font-bold text-black uppercase max-lg:py-2 max-lg:text-base ${className}`}
  >
    {children}
  </h2>
);

type Props = { params: Promise<{ locale: string }> };

export default async function Studio({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("about");

  const aiAdvantages = (
    <>
      <p className="font-unbounded text-2xl max-lg:text-xl max-lg:leading-tight">
        {t("aiUsePrefix")}
      </p>
      <ul className="font-arimo list-disc pl-4 text-2xl opacity-90 max-lg:text-xl max-lg:leading-tight">
        {(t.raw("aiUseList") as string[]).map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p className="font-arimo text-2xl font-bold max-lg:text-xl max-lg:leading-tight">
        {t("aiSuffix")}
      </p>
    </>
  );

  return (
    <div className="mx-auto flex max-w-screen-xl flex-1 flex-col items-center justify-center gap-15 bg-black p-3 text-white lg:p-6">
      {/* Hero */}
      <h1 className="sr-only">about</h1>
      <Image
        src="/about-team.png"
        alt="Lastik team"
        width={821}
        height={541}
        className="w-2/3"
        loading="eager"
        priority
      />

      <section className="flex flex-col gap-4">
        <SectionTitle>{t("superPowers")}</SectionTitle>
        <div className="flex gap-4 max-lg:flex-col-reverse">
          <ul className="font-arimo list-disc pl-6 text-2xl max-lg:text-xl max-lg:leading-tight">
            {(t.raw("superPowersList") as string[]).map(
              (item: string, i: number) => (
                <li key={i}>{item}</li>
              ),
            )}
          </ul>

          <div>
            <VideoPlayer
              src="/about/neo (1080p) 2-converted.webm"
              className="w-full object-cover lg:rounded-3xl"
            />
          </div>
        </div>
        <div>
          <VideoPlayer
            src="/about/Comp 2_3-converted.webm"
            className="w-full object-cover lg:rounded-3xl"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle>{t("notOnlyVisual")}</SectionTitle>
        <div className="flex justify-between gap-4 max-lg:flex-col">
          <div className="flex flex-col gap-4" style={{ flex: 702 / 993 }}>
            <Image
              src="/about/Group 103.png"
              alt="AI pipeline"
              width={702}
              height={299}
              className="w-full"
              unoptimized
            />
            <div className="flex flex-1 flex-col gap-4">
              <p className="font-unbounded text-3xl max-lg:text-2xl">
                {t("storytellingHeading")}
              </p>
              <p className="font-arimo text-2xl max-lg:text-xl max-lg:leading-tight">
                {t("storytellingBody")}
              </p>
            </div>
            <Image
              src="/about/Group 104.png"
              alt="AI pipeline"
              width={702}
              height={318}
              className="w-full"
              unoptimized
            />
          </div>
          <div
            className="gap- flex flex-col justify-between gap-4 max-lg:hidden"
            style={{ flex: 507 / 993 }}
          >
            <Image
              src="/about/Group 156.png"
              alt="AI pipeline"
              width={507}
              height={218}
              className="w-full"
              unoptimized
            />
            <Image
              src="/about/Group 157.png"
              alt="AI pipeline"
              width={507}
              height={272}
              className="w-full"
              unoptimized
            />
            <Image
              src="/about/Group 158.png"
              alt="AI pipeline"
              width={507}
              height={114}
              className="w-full"
              unoptimized
            />
            <Image
              src="/about/Group 160.png"
              alt="AI pipeline"
              width={507}
              height={363}
              className="w-full"
              unoptimized
            />
          </div>
          <div
            className="flex flex-col justify-between gap-4 max-lg:hidden"
            style={{ flex: 620 / 993 }}
          >
            <Image
              src="/about/Group 164.png"
              alt="AI pipeline"
              width={619}
              height={394}
              className="w-full"
              unoptimized
            />
            <Image
              src="/about/Group 166.png"
              alt="AI pipeline"
              width={620}
              height={284}
              className="w-full"
              unoptimized
            />
            <Image
              src="/about/Group 165.png"
              alt="AI pipeline"
              width={620}
              height={304}
              className="w-full"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle>{t("aiSection")}</SectionTitle>

        <div className="flex gap-4">
          <div className="flex gap-4 max-lg:flex-col">
            <div style={{ flex: 1117 / 279 }}>
              <VideoPlayer
                src="/about/MASTER preview 15-04_1-converted.webm"
                className="h-full w-full object-cover lg:rounded-3xl"
              />
            </div>
            <div className="hidden flex-col gap-4 max-lg:flex">
              {aiAdvantages}
            </div>
            <div style={{ flex: 626 / 279 }}>
              <VideoPlayer
                src="/about/ya_shedevrium-converted.webm"
                className="h-full w-full object-cover lg:rounded-3xl"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div style={{ flex: 305 / 611 }}>
            <VideoPlayer
              src="/about/leto-luzi-converted.webm"
              className="w-full object-cover lg:rounded-3xl"
            />
          </div>
          <div className="relative max-lg:hidden" style={{ flex: 1083 / 609 }}>
            <VideoPlayer
              src="/about/AI textures-converted.webm"
              className="w-full object-cover lg:rounded-3xl"
            />

            <div
              style={{ maxWidth: "66.6667%" }}
              className="absolute right-4 bottom-4 flex flex-col gap-4 bg-slate-900/60 px-6 py-4 backdrop-blur-md lg:rounded-2xl"
            >
              {aiAdvantages}
            </div>
          </div>
          <div style={{ flex: 343 / 609 }}>
            <VideoPlayer
              src="/about/all4-converted.webm"
              className="w-full object-cover lg:rounded-3xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
