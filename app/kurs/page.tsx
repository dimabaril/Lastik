import Image from "next/image";
import Buble from "./Buble";
import styles from "./rotation.module.css";
import VideoPlayer from "@/app/components/VideoPlayer";
import Marquee from "react-fast-marquee";
import CommunityCarousel from "./CommunityCarousel";
import GongClickWrapper from "./GongClickWrapper";
import ExpandingBanner from "./ExpandingBanner";

const WHO_CARDS = [
  {
    title: "Иллюстратор",
    desc: "и хочешь не только рисовать отдельные картинки, но и строить персонажей, миры и визуальную логику проекта.",
    img: "/kurs/cube.png",
  },
  {
    title: "Дизайнер",
    desc: "и хочешь мыслить поверх границ стилей, свободнее собирать концепции и сильнее влиять на проект целиком.",
    img: "/kurs/hurt.png",
  },
  {
    title: "Студент визуальной профессии",
    desc: "и ищешь формат стажировки, где сразу передают опыт и дают фидбек на твои идеи",
    img: "/kurs/star.png",
  },
  {
    title: "Аниматор",
    desc: "и думаешь как расширить свой набор инструментов, зайти на более креативную территорию.",
    img: "/kurs/cloud.png",
  },
  {
    title: "Автор, работающий с визуалом",
    desc: "и хочешь мыслить поверх границ стилей, свободнее собирать концепции и сильнее влиять на проект целиком.",
    img: "/kurs/glass.png",
  },
  {
    title: "AI-энтузиаст",
    desc: "и тебе интересно понять как устроен артдир процесс у студий и как применить этот пайплайн в соло-продакшене.",
    img: "/kurs/flash.png",
  },
];

const HOW_STEPS = [
  {
    bgColor: "bg-[#E4C2E7]",
    textColor: "text-black",
    texts: ["живые созвоны", "чат с поддержкой"],
    pic: "/kurs/60d9e61b9ceb0d52cb196508fc244cff1c085a74.png",
  },
  {
    bgColor: "bg-[#314E22]",
    textColor: "text-white",
    texts: ["постоянный фидбек", "небольшие домашние задания"],
    pic: "/kurs/a3445d9daf2c5ee1283734023d2247c61b42db79.png",
  },
  {
    bgColor: "bg-[#F2FD83]",
    textColor: "text-black",
    texts: ["презентации с теорией и рефами на миро "],
    pic: "/kurs/f8ae45ec6a2a12f8f971cdf9fc187a42d24c326e.png",
  },
];

const PROGRAM = [
  {
    n: "01",
    title: "Арт-дирекшн, как мы его понимаем",
    desc: "Как построен пострен креативный процесс в студии Ластик – инсайсты и инсайды.",
  },
  {
    n: "02",
    title: "Персонажи и мир",
    desc: "Как у нас рождаютися персонажи и окружающий их мир.",
  },
  {
    n: "03",
    title: "Визуальная история: сториборд–аниматик–сиззл",
    desc: "Воплощаем задумку, работаем над историей, пытаемся максимально быстро представить как всё будет в итоге.",
  },
  {
    n: "04",
    title: "ИИ",
    desc: "Наш воркфлоу с нейронками, поделимся найденными приёмами – как миксуем классику и генерации.",
  },
  {
    n: "05",
    title: "Тритмент, питч – как презентовать концепт и что дальше",
    desc: "Наш воркфлоу с нейронками, поделимся найденными приёмами – как миксуем классику и генерации.",
  },
];

const COMMUNITY = [
  {
    title: "Поддерживающее комьюнити",
    desc: "Общайтесь с единомышленниками, которые понимают ваш творческий путь и вдохновляют двигаться дальше",
  },
  {
    title: "Регулярные критики",
    desc: "Получайте конструктивную обратную связь от опытных арт-директоров, чтобы совершенствовать работу",
  },
  {
    title: "Дух сотрудничества и обмена",
    desc: "Делитесь идеями, задавайте вопросы для друг друга, делитесь рефами/инсайтами и растите вместе в поддерживающей среде",
  },
  {
    title: "Место для презентаций",
    desc: "Представляйте финишные проекты и развивайте навыки публичных выступлений",
  },
];

const EXERCISES = [
  { color: "bg-[#00FF9F]", label: "Визуальные брейншторм" },
  { color: "bg-[#FF006E]", label: "Охота за референсами" },
  { color: "bg-[#D4FF00]", label: "Эксперименты с композицией" },
  { color: "bg-[#8B4A8F]", label: "Концептуальное мышление" },
  { color: "bg-[#00FF9F]", label: "Создание мудбордов" },
  { color: "bg-[#6B93D6]", label: "Исследование стилей" },
];

const REVIEWS = [
  {
    name: "Валерия",
    desc: "Дизайн-лид в сфере IGaming, веб-дизайнер на фрилансе в крипте.",
    text: `Курс раскачивает застоявшуюся оптику и помогает посмотреть на проект с новой стороны.
     Очень понравилось окунуться в ничем не ограниченную креативную среду, где ты делишься своими идеями, а тебе предлагают, как их развить и где добрать насмотренность`,
    userPic: "/kurs/review_1.png",
    background: "/kurs/buble-1.png",
    size: {
      width: 707,
      height: 421,
      padding: 40,
    },
  },
  {
    name: "Анастасия",
    desc: "Санкт-Петербург, аниматор и иллюстратор",
    text: `Мне было очень полезно и интересно, я ни секунды не пожалела!
     Самое полезное для меня было узнать, как вы работаете с нейро и когда мы развивали фантазию, придумывая сюжеты за 5 минут; как разрабатываете персонажа.`,
    // userPic: "/kurs/review_2.png",
    background: "/kurs/buble-2.png",
    size: {
      // width: 500,
      width: 550,
      // height: 298,
      height: 350,
      padding: 50,
    },
  },
  {
    name: "НАСТЯ",
    desc: "Санкт-Петербург, аниматор и иллюстратор",
    text: `впечатление супер! ожидания оправдались на сто процентов! очень полезно было увидеть внутрянку работы анимационной студии, ее будни и проблемы
   очень продуктивно действует и питает творческая среда и фидбек от ребят довела до структурной, раскадровочной, сюжетной, сценарной, финальной точки оба проекта, с которыми заходила в курс`,
    userPic: "/kurs/review_3.png",
    background: "/kurs/buble-3.png",
    size: {
      width: 578,
      height: 442,
      padding: 32,
    },
  },
  {
    name: "София",
    desc: "аниматор",
    text: `Супер-полезные советы по докручиванию идеи для проектов.
  Услышала много интересных подходов по разработке.`,
    userPic: "/kurs/review_4.png",
    background: "/kurs/buble-4.png",
    size: {
      width: 427,
      height: 281,
      padding: 32,
    },
  },
  {
    name: "Маша Родина",
    desc: "Кёльн, художница, дизайнерка, фотографка",
    text: `Курс был очень весёлым, радостным, зажигательным, ярким! Как допинг креатива. Теперь я понимаю, как работает анимационная студия полезно, что есть план, созвоны, домашние задания`,
    userPic: "/kurs/review_5.png",
    background: "/kurs/buble-5-flipped.png",
    size: {
      width: 574,
      height: 429,
      padding: 85,
    },
  },
  {
    name: "Ната",
    desc: "иллюстратор, Литва",
    text: `Много полезного: ToonSquid, создание видеореференсов, где в анимации пригодятся нейросети, а еще смотреть на работы и процесс других участников`,
    userPic: "/kurs/review_6.png",
    background: "/kurs/buble-6.png",
    size: {
      width: 487,
      height: 328,
      padding: 45,
    },
  },
];

export default function ArtCourse() {
  return (
    <>
      {/* <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8 text-center xl:hidden">
        <p className="font-unbounded text-3xl font-bold text-[#FFE6EB]">
          В разработке, доступна на десктопе
        </p>
        <p className="font-onest text-lg text-[#99A1AF]">
          Минимальная ширина экрана 1280px
        </p>
      </main> */}

      {/* <main className="hidden flex-1 flex-col gap-12 xl:flex"> */}
      <main className="flex flex-1 flex-col">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="pb-15 md:pt-15">
          <div className="mx-auto flex max-w-screen-xl bg-[#FFF9EF] text-black max-md:flex-col-reverse md:rounded-3xl">
            <div className="relative flex flex-1 flex-col gap-5 p-10 max-lg:p-6">
              <h1 className="font-unbounded text-4xl font-bold sm:text-5xl md:text-6xl">
                мастерская
                <br />
                арт-дирекшена
              </h1>
              <p className="font-onest text-lg font-bold md:text-xl">
                Практический курс по арт-дирекшену от студии Ластик в анимации и
                вокруг.
              </p>
              <p className="font-onest text-lg leading-tight font-medium md:text-xl">
                Арт-лаборатория по поиску вашего уникального визуального голоса.
                Мы препарируем реальные кейсы студии, учим внедрять AI в рабочий
                процесс и помогаем превращать скучные брифы в „визуальный
                мармелад“ через глубокую проработку персонажей и миров.
              </p>
              <p className="font-unbounded text-base font-bold md:text-lg">
                5 онлайн-встреч по выходным
                <br />
                31 мая -28 июня
              </p>
              <button className="font-unbounded self-start rounded-full bg-[#EBF400] px-10 py-4 text-2xl font-bold md:text-3xl">
                подать заявку
              </button>
              <Image
                src="/kurs-hero2.png"
                alt="Hero Image"
                width={278}
                height={347}
                className="absolute right-13 -bottom-20 h-auto w-50 -rotate-20"
              />
            </div>
            <div className="flex-1">
              <GongClickWrapper className="h-full">
                <Image
                  src="/kurs/yogagirl.png"
                  alt="yogagirl"
                  width={705}
                  height={705}
                  className="h-full w-full object-cover md:rounded-r-3xl"
                />
              </GongClickWrapper>
            </div>
          </div>
        </section>

        {/* ── WHO ──────────────────────────────────────────────────────────── */}
        <section className="flex flex-col gap-15 py-15">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-12 text-black">
            <h2 className="font-unbounded self-center text-4xl text-5xl font-bold text-[#FFE6EB]">
              Кому подойдёт курс
            </h2>
            <div className="grid gap-3 lg:grid-cols-2 lg:gap-6">
              {WHO_CARDS.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-6 bg-[#E4CBDE] p-5 lg:rounded-3xl"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={100}
                    height={100}
                    style={{
                      width: "88px",
                      height: "auto",
                      animationDuration: `${3.5 + WHO_CARDS.indexOf(item) * 0.7}s`,
                      animationDelay: `${WHO_CARDS.indexOf(item) * -1.1}s`,
                    }}
                    className={styles.rotationImage}
                  />
                  <div className="flex flex-col gap-3">
                    <p className="font-unbounded text-lg font-bold md:text-xl">
                      {item.title}
                    </p>
                    <p className="font-onest text-sm leading-tight md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ExpandingBanner
            className="py-35"
            style={{
              background:
                "linear-gradient(224.76deg, #DAACFF 40.57%, #FF8D8D 110.48%)",
            }}
          >
            <p className="font-unbounded mx-auto max-w-142 text-center text-xl font-bold text-black md:text-2xl">
              Любому, кто хочет раскачаться, подтолкнуть творческие практики и
              застрявшие личные проекты
            </p>
          </ExpandingBanner>
        </section>

        {/* ── INSTRUCTORS ──────────────────────────────────────────────────── */}
        <section className="flex flex-col gap-12 py-15 text-white">
          <h2 className="font-unbounded self-center text-4xl font-bold text-[#FFE6EB] md:text-5xl">
            Мы будем вести курс
          </h2>

          {/* <div className="grid grid-cols-1 justify-items-center md:grid-cols-2"> */}
          <div className="mx-auto flex w-full max-w-screen-xl flex-wrap justify-around gap-12">
            {[
              {
                name: "Лёша Платонов",
                role: "Креативный директор",
                desc: "15+ лет в анимации и арт-дирекшне, работала с крупными студиями над отмеченными наградами проектами",
                img: "/kurs/lesha.png",
              },
              {
                name: "Надя Степанова",
                role: "арт-директор в Ластике",
                desc: "Специализируется на экспериментальной анимации и визуальных эффектах со страстью к творческим экспериментам",
                img: "/kurs/nadya.png",
              },
            ].map((person) => (
              <div key={person.name} className="max-w-84">
                <div className="relative">
                  <Image
                    src={person.img}
                    alt={person.name}
                    width={336}
                    height={533}
                    className=""
                  />
                  <p className="font-unbounded absolute inset-x-0 bottom-6 text-center text-xl font-bold md:text-2xl">
                    {person.name}
                  </p>
                </div>
                <div className="flex flex-col gap-3 p-7">
                  <p className="foont-onest text-sm font-semibold md:text-base">
                    {person.role}
                  </p>
                  <p className="font-onest text-sm md:text-base">
                    {person.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="hidden lg:block">
          <VideoPlayer src="/kurs/Comp 2_2-converted.webm" className="w-full" />
        </div>

        {/* ── PRACTICE ─────────────────────────────────────────────────────── */}
        <section className="mx-auto flex max-w-screen-xl py-15 text-[#FFE6EB] max-xl:flex-col max-xl:gap-12 max-xl:p-6 max-lg:gap-6">
          <div className="flex flex-col gap-12">
            <h2 className="font-unbounded text-4xl font-bold md:text-5xl">
              Не только лекции,
              <br />а живая
              <br />
              творческая практика
            </h2>
            <p className="font-onest text-xl font-semibold md:text-2xl">
              Мы рассказываем всё самое важное про арт-дирекшн, даём
              практические советы и приёмы, а дальше – творческая мастерская,
              где все варят свои визуальные проекты.
            </p>
            <ul className="font-onest list-disc pl-6 text-xl font-semibold md:text-2xl">
              <li>научитесь мыслить как арт-директор</li>
              <li>создавать - визуальные концепции, собирать мудборды</li>
              <li>работать с персонажами</li>
              <li>рассказывать истории через образы и композицию.</li>
            </ul>
          </div>
          <div className="max-xl:self-end 2xl:-mr-15">
            <Buble {...REVIEWS[0]} />
          </div>
        </section>

        {/* ── HOW ──────────────────────────────────────────────────────────── */}
        <section className="mx-auto flex max-w-screen-xl flex-col gap-12 border-[#EBF400] py-15 lg:border-t-2">
          <h2 className="font-unbounded self-center text-4xl font-bold text-[#FFE6EB] md:text-5xl">
            Как проходит курс
          </h2>
          <div className="flex max-lg:flex-col lg:gap-6">
            {HOW_STEPS.map((step, idx) => (
              <div
                key={idx}
                className={`flex flex-1 justify-between gap-6 p-8 max-lg:p-6 lg:flex-col lg:rounded-3xl ${step.bgColor} ${step.textColor}`}
              >
                <div className="flex flex-col gap-6">
                  {step.texts.map((text, textIdx) => (
                    <p
                      key={textIdx}
                      className="font-unbounded text-xl leading-tight font-bold md:text-2xl"
                    >
                      {text}
                    </p>
                  ))}
                </div>
                <Image
                  src={step.pic}
                  alt={`Step ${idx + 1}`}
                  width={250}
                  height={250}
                  className="w-2/3 self-end max-lg:w-30 lg:-mb-13"
                />
              </div>
            ))}
          </div>
        </section>

        <div className="mx-6 block self-end lg:hidden">
          <Buble {...REVIEWS[1]} className="" />
        </div>
        {/* ── PROGRAM ──────────────────────────────────────────────────────── */}
        <section className="mt-10 bg-[#6754FE] lg:mt-50 lg:px-15 lg:pt-25 lg:pb-15">
          <div className="hidden lg:block">
            <Buble {...REVIEWS[1]} className="relative z-10 -mt-72 -mb-15" />
          </div>
          <div className="mx-auto flex max-w-screen-xl flex-col gap-12 bg-white px-28 py-15 text-black max-lg:p-6 lg:rounded-3xl">
            <h2 className="font-unbounded self-center text-4xl font-bold md:text-5xl">
              Программа 5 встреч
            </h2>
            <div className="flex flex-col gap-10">
              {PROGRAM.map((item, i) => (
                <div key={item.n} className="flex gap-6">
                  <div
                    className={`font-unbounded flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-[#FF87CF] text-xl font-bold md:text-2xl`}
                  >
                    {item.n}
                  </div>
                  <div className="flex flex-col">
                    <p className="font-unbounded text-xl font-bold md:text-2xl">
                      {item.title}
                    </p>
                    <p className="font-onest mt-1 text-xl font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXERCISES ────────────────────────────────────────────────────── */}
        <section className="bg-[#6754FE] pb-25 text-white">
          <div className="mx-auto flex max-w-screen-xl px-28 max-xl:flex-col max-lg:gap-12 max-lg:p-6">
            <div className="flex flex-col gap-12">
              <h2 className="font-unbounded text-4xl font-bold md:text-5xl">
                Креативные упражнения
              </h2>
              <ul className="font-unbounded flex flex-col gap-10 text-2xl font-bold">
                {EXERCISES.map((item) => (
                  <li key={item.label} className="flex items-center gap-8">
                    <div className="h-4 w-4 shrink-0 rounded-full bg-white"></div>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="self-end xl:-mr-45 xl:-mb-20 xl:-ml-55">
              <Buble {...REVIEWS[2]} />
            </div>
          </div>
        </section>

        {/* ── PROJECT ──────────────────────────────────────────────────────── */}
        <section className="mx-auto flex max-w-screen-xl flex-col gap-12 py-15">
          <h2 className="font-unbounded self-center text-4xl font-bold text-[#FFE6EB] md:text-5xl">
            Работа с проектом
          </h2>

          <div className="flex flex-col gap-6 text-black md:flex-row">
            <div className="flex flex-col gap-6">
              <p className="font-unbounded self-center rounded-full bg-[#EBF400] px-4 py-2.5 text-sm font-semibold text-black">
                Есть проект
              </p>
              <div className="flex-1 bg-[#FFE6EB] px-10 py-5 md:rounded-2xl">
                {/* <p className="font-onest mt-2 text-2xl font-medium whitespace-nowrap"> */}
                <p className="font-onest mt-2 text-xl font-medium md:text-2xl">
                  Получаешь фидбек по всем этапам:
                  <br />
                  от идеи до реализации и питчинга
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-unbounded self-center rounded-full bg-[#EBF400] px-4 py-2.5 text-sm font-semibold text-black">
                Нет проекта
              </p>
              <div className="flex-1 bg-[#FFE6EB] px-10 py-5 md:rounded-2xl">
                <ul className="font-onest mt-2 list-disc pl-6 text-xl font-medium md:text-2xl">
                  <li>Поможем придумать проект на 5 недель</li>
                  <li>
                    готовые брифы или можно двигаться с мини-задачами на каждой
                    встрече
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMMUNITY ────────────────────────────────────────────────────── */}
        <section className="mt-6 flex flex-col gap-12 border-[#EBF400] lg:border-t-2">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-12 p-6">
            <div>
              <Buble
                {...REVIEWS[3]}
                className="relative z-10 min-[1180px]:-mt-10 min-[1180px]:-mb-60"
              />
            </div>
            <h2 className="font-unbounded text-4xl font-bold text-[#FFE6EB] md:text-5xl lg:self-end">
              Творческое комьюнити
            </h2>
            <p className="font-onest max-w-166 text-base text-[#99A1AF] md:text-lg lg:self-end lg:text-right">
              Поддерживающая среда, где все делятся прогрессом и смотрят какие
              вокруг творческие проекты у людей в работе.
            </p>
            <div className="grid gap-12 text-white md:grid-cols-2">
              {COMMUNITY.map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <p className="font-unbounded text-lg font-bold md:text-xl">
                    {item.title}
                  </p>
                  <p className="font-onest text-sm md:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="font-unbounded self-center text-lg font-bold text-white md:text-xl">
            Очень разные работы и темы участников первого потока{" "}
          </p>
          <CommunityCarousel />
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-15">
          <div className="flex p-8 max-[1120px]:flex-col max-lg:gap-12 lg:justify-around">
            <div className="self-start">
              <Buble {...REVIEWS[4]} />
            </div>
            <div className="self-end">
              <Buble {...REVIEWS[5]} />
            </div>
          </div>
          <Marquee
            className="font-unbounded bg-[#EBF400] p-4 text-3xl text-black md:text-4xl"
            autoFill={true}
            // speed={50}
            // pauseOnHover={true}
          >
            мастерская стартует 31 мая!
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Marquee>

          <div className="bg-[#387BFE] md:px-15 md:pt-15 md:pb-25">
            <div className="mx-auto flex max-w-screen-xl bg-[#FFF9EF] text-black max-md:flex-col-reverse md:rounded-3xl">
              <div className="flex flex-1 flex-col gap-5 p-10 max-lg:p-6">
                <h1 className="font-unbounded text-2xl font-bold sm:text-3xl md:text-4xl">
                  Присоединяйтесь к мастерской
                </h1>

                <p className="font-onest text-sm leading-tight font-semibold md:text-base">
                  Трансформируйте свою творческую практику за 4 недели
                  интенсивного обучения. Мест немного, мы планиируем так, чтобы
                  у всех было время на обратную свзяь.
                </p>
                <p className="font-unbounded text-base font-bold md:text-lg">
                  5 онлайн-встреч по выходным
                  <br />
                  31 мая -28 июня
                </p>
                <div className="flex-1"></div>
                <div>
                  <div className="font-unbounded flex gap-4 text-2xl font-bold sm:text-3xl md:text-4xl">
                    <p className="whitespace-nowrap text-black">18 000 ₽</p>
                    <p className="whitespace-nowrap text-[#A6A6A6] line-through">
                      25 000 ₽
                    </p>
                  </div>
                  <p className="font-onest text-sm text-[#B1B1B1] md:text-base">
                    низкая цена действует до 21 мая
                  </p>
                </div>
                <button className="font-unbounded self-start rounded-2xl bg-black px-15 py-3 text-lg font-bold text-white md:text-xl">
                  подать заявку
                </button>
              </div>
              <div className="flex-1">
                <GongClickWrapper className="h-full">
                  <Image
                    src="/kurs/yogagirl.png"
                    alt="yogagirl"
                    width={705}
                    height={705}
                    className="h-full w-full object-cover md:rounded-r-3xl"
                  />
                </GongClickWrapper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
