import Image from "next/image";

const WHO_CARDS = [
  {
    title: "Иллюстратор",
    desc: "и хочешь не только рисовать отдельные картинки, но и строить персонажей, миры и визуальную логику проекта.",
  },
  {
    title: "Дизайнер",
    desc: "и хочешь мыслить шире одного стиля, лучше собирать концепции и сильнее влиять на проект целиком.",
  },
  {
    title: "Студент визуальной профессии",
    desc: `и хочешь нащупать более профессиональное мышление: как идеи превращаются в систему, а не остаются на уровне “прикольной картинки”.`,
  },
  {
    title: "Автор, работающий с аудиторией",
    desc: "если тебе хочется прокачать вкус, насмотренность, вариативность и научиться увереннее оформлять свои идеи.",
  },
  {
    title:
      "Раскачать и поиграть, подтолкнуть творческие практики и застрявшие личные проекты",
    desc: "и хочешь нащупать более профессиональное мышление: как идеи превращаются в систему, а не остаются на уровне “прикольной картинки”.",
  },
  {
    title: "AI-энтузиаст",
    desc: "если тебе хочется прокачать вкус, насмотренность, вариативность и научиться увереннее оформлять свои идеи.",
  },
];

const HOW_STEPS = [
  { color: "bg-[#D4FF00]", label: "живые созвоны" },
  { color: "bg-[#00FF9F]", label: "чат с поддержкой" },
  { color: "bg-[#FF006E]", label: "небольшие домашние задания" },
  { color: "bg-[#5BB4E5]", label: "постоянный фидбек" },
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
    desc: "Упаковка идей и презентация.",
  },
];

const COMMUNITY = [
  {
    color: "#00b303",
    title: "Поддерживающее комьюнити",
    desc: "Общайтесь с единомышленниками, которые понимают ваш творческий путь и вдохновляют стремиться к совершенству",
  },
  {
    color: "#aa26ff",
    title: "Регулярные критики",
    desc: "Получайте конструктивную обратную связь от опытных арт-директоров, чтобы совершенствовать работу",
  },
  {
    color: "#0052c2",
    title: "Дух сотрудничества",
    desc: "Делитесь идеями, задавайте вопросы для друг друга и растите вместе в поддерживающей среде",
  },
  {
    color: "#fdda07",
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

const CTA_FEATURES = [
  { color: "bg-[#D4FF00]", label: "5 модулей интенсивного обучения" },
  { color: "bg-[#D4FF00]", label: "Еженедельные живые сессии" },
  { color: "bg-[#D4FF00]", label: "Личное менторство и фидбэк" },
  { color: "bg-[#D4FF00]", label: "Доступ к материалам курса" },
];

const REVIEWS = [
  {
    name: "Анна Соколова",
    desc: "Моушн-дизайнер",
    text: "Мастерская трансформировала мой подход к анимации. Теперь я думаю как арт-директор, а не просто исполнитель.",
    pic: "https://placecats.com/200/200",
  },
  {
    name: "Дмитрий Волков",
    desc: "Иллюстратор",
    text: "Я наконец-то научился переводить свой стиль в моушн. Проектный подход и живой фидбэк — это то, что работает.",
    pic: "https://placecats.com/200/200",
  },
  {
    name: "Елена Петрова",
    desc: "ДКреативный директор",
    text: "Культура фидбэка и креативное комьюнити сделали всю разницу. Связи, которые я построила здесь, бесценны.",
    pic: "https://placecats.com/200/200",
  },
];

export default function ArtCourse() {
  return (
    <main className="mx-auto flex max-w-screen-xl flex-1 flex-col gap-20 bg-black p-6 text-white">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="flex items-start">
        <Image
          src="/kurs-hero2.png"
          alt="Hero Image"
          width={200}
          height={200}
          className="rotate-19"
        />
        <div className="flex flex-col gap-12">
          <h1 className="font-unbounded text-8xl font-bold">
            Мастерская
            <br />
            <span className="text-[#D4FF00]">
              арт-
              <br />
              дирекшена
            </span>
          </h1>
          <div className="flex">
            <div className="flex flex-col gap-8 pr-8">
              <p className="font-onest text-lg font-medium text-[#99A1AF]">
                Практический курс по арт-дирекшену в анимации и вокруг.
                <br />
                Для дизайнеров, иллюстраторов, аниматоров и всех, кто хочет
                выходить за рамки своих профессий, собирать сильные визуальные
                концепции, докручивать идеи и уверенно их упаковывать.
              </p>
              <p className="font-onest text-lg font-medium">
                5 онлайн-встреч по выходным
                <br />
                Скоро стартует 2 поток
              </p>
              <button className="font-onest self-start rounded-full bg-[#D4FF00] px-8 py-4 text-lg font-medium text-black">
                Подать заявку
              </button>
            </div>
            <div className="flex max-w-lg -rotate-7 gap-6 rounded-3xl bg-[#141414] p-8">
              <div className="h-16 w-16 shrink-0 rounded-2xl bg-[#FEFE1F]" />
              <div className="flex flex-col gap-3">
                <p className="font-unbounded text-2xl font-bold">
                  Настроить арт-дирекшн пайплайн
                </p>
                <p className="font-onest text-4xl text-[#99A1AF]">
                  Это база, которая пригодится в любых визуальных проектах (в
                  том числе AI)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO ──────────────────────────────────────────────────────────── */}
      <section className="flex flex-col gap-12">
        <h2 className="font-unbounded self-center text-5xl font-bold">
          Кому подойдёт курс
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {WHO_CARDS.map((c) => (
            <div
              key={c.title}
              className="flex gap-6 rounded-2xl bg-[#141414] p-8"
            >
              <div className="h-16 w-16 shrink-0 rounded-2xl bg-[#FF006E]" />
              <div className="flex flex-col gap-3">
                <p className="font-unbounded text-2xl font-bold">{c.title}</p>
                <p className="font-onest text-lg text-[#99A1AF]">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRACTICE ─────────────────────────────────────────────────────── */}
      <section className="flex flex-col gap-12 bg-[#141414]">
        <h2 className="font-unbounded text-5xl font-bold">
          Не только лекции,
          <br />а <span className="text-[#FF006E]">живая</span>
          <br />
          творческая <span className="text-[#D4FF00]">практика</span>
        </h2>
        <div className="flex gap-12">
          <p className="font-onest text-lg text-[#99A1AF]">
            Это не теоретический курс, где вы пассивно слушаете. Это творческая
            мастерская, где вы с нуля создаёте собственный визуальный проект.
          </p>
          <div className="flex flex-col gap-6">
            <p className="font-onest text-lg text-[#99A1AF]">
              Научитесь мыслить как арт-директор, создавать визуальные
              концепции, собирать мудборды и рассказывать истории через образы и
              композицию.
            </p>
            <p className="font-onest text-lg">
              В конце мастерской у вас будет готовая портфолио-работа, которая
              покажет ваши навыки арт-дирекшна.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW ──────────────────────────────────────────────────────────── */}
      <section className="flex flex-col gap-12">
        <h2 className="font-unbounded self-center text-5xl font-bold">
          Как проходит курс
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {HOW_STEPS.map((step, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 rounded-3xl bg-[#141414] p-8"
            >
              <div className={`h-3 w-3 rounded-full ${step.color}`} />

              <p className="font-onest text-lg font-medium">{step.label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-onest text-lg">
            <span className="text-[#99A1AF]">
              Структура курса помогает не «послушать и забыть»,
            </span>
            <br />а довести проект до завершения
          </p>
        </div>
      </section>

      {/* ── PROGRAM ──────────────────────────────────────────────────────── */}
      <section className="flex flex-col gap-12">
        <h2 className="font-unbounded text-5xl font-bold">
          Программа{" "}
          <span className="text-[#FF006E]">
            5
            <br />
            встреч
          </span>
        </h2>
        <div className="flex flex-col gap-3">
          {PROGRAM.map((p, i) => (
            <div key={p.n} className="flex gap-6 rounded-3xl bg-[#141414] p-8">
              <span
                className={`font-unbounded flex h-16 w-16 items-center justify-center rounded-2xl ${i % 2 === 0 ? "bg-[#D4FF00]" : "bg-[#FF006E]"} text-2xl font-bold text-black`}
              >
                {p.n}
              </span>
              <div className="flex flex-col gap-2">
                <p className="font-unbounded text-2xl font-bold">{p.title}</p>
                {p.desc && (
                  <p className="mt-1 text-lg text-neutral-400">{p.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXERCISES ────────────────────────────────────────────────────── */}
      <section className="flex flex-col gap-12 bg-[#141414]">
        <div className="flex gap-10">
          {/* Shapes */}
          <div className="relative h-64 w-64 shrink-0 rounded-2xl bg-[#1A1A1A]">
            <div className="absolute top-8 left-8 h-32 w-32 rounded-full bg-[#00FF9F]" />
            <div className="absolute top-16 left-32 h-25 w-25 rotate-29 rounded-xl bg-[#FF9F57]" />
            <div className="absolute top-40 left-12 h-28 w-28 rounded-full bg-[#8B4A8F]" />
          </div>
          {/* Text */}
          <div className="flex flex-col gap-12">
            <h2 className="font-unbounded self-end text-5xl font-bold">
              Креативные <span className="text-[#D4FF00]">упражнения</span>
            </h2>
            <p className="max-w-md text-[#99A1AF]">
              Практические упражнения и инструменты визуального мышления,
              которые помогает развить ваш уникальный творческий голос
            </p>
            <ul className="flex flex-col gap-3 text-lg text-[#D1D5DC]">
              {EXERCISES.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl bg-[#0A0A0A] p-4"
                >
                  <div className={`h-2 w-2 rounded-full ${item.color}`} />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── PROJECT ──────────────────────────────────────────────────────── */}
      <section className="flex flex-col gap-12 bg-[#141414]">
        <h2 className="font-unbounded text-5xl font-bold">
          Работа с <span className="text-[#FF006E]">проектом</span>
        </h2>
        <p className="font-onest text-lg text-[#99A1AF]">
          Ты не просто слушаешь — ты делаешь
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1 rounded-3xl border-2 border-[#01ff9e4d] bg-[#0A0A0A] p-10">
            <p className="font-unbounded absolute -top-6 rounded-full bg-[#00FF9F] px-4 py-2.5 font-semibold text-black">
              Есть проект
            </p>
            <p className="font-onest mt-2 text-xl">
              Получаешь фидбек по всем этапам:
              <br />
              <span className="text-[#99A1AF]">
                от идеи до реализации и питчинга
              </span>
            </p>
          </div>
          <div className="relative flex-1 rounded-3xl border-2 border-[#D4FF004d] bg-[#0A0A0A] p-10">
            <p className="font-unbounded absolute -top-6 rounded-full bg-[#D4FF00] px-4 py-2.5 font-semibold text-black">
              Нет поректа
            </p>
            <p className="font-onest mt-2 text-xl">
              Поможем придумать проект на 5 недель или мини-задачи на каждой
              встрече
            </p>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ────────────────────────────────────────────────────── */}
      <section className="flex flex-col gap-12 bg-[#141414]">
        <h2 className="font-unbounded text-5xl font-bold">
          Творческое <span className="text-[#FF006E]">комьюнити</span>
        </h2>

        <p className="font-onest text-lg text-[#99A1AF]">
          Поддерживающая среда, где все делятся прогрессом и смотрят какие
          вокруг творческие проекты у людей в работе.
        </p>

        <div className="grid grid-cols-2 gap-6">
          {COMMUNITY.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 bg-[#1A1A1A] p-8"
            >
              <div
                className="h-12 w-12 rounded-full"
                style={{ background: item.color }}
              />
              <p className="font-unbounded text-lg font-medium">{item.title}</p>
              <p className="font-onest text-lg text-[#99A1AF]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INSTRUCTORS ──────────────────────────────────────────────────── */}
      <section className="Быусешщт сдфыыТфьу=Эадуч адуч-сщд пфз-12 ип-х№141414ъЭЮ flex flex-col gap-12 bg-[#141414]">
        <h2 className="font-unbounded text-5xl font-bold">
          Мы будем вести курс <br /> анимационных студий
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[
            {
              name: "Лёша Платонов",
              role: "Креативный директор",
              desc: "15+ лет в анимации и арт-дирекшне, работала с крупными студиями над отмеченными наградами проектами",
              img: null,
            },
            {
              name: "Надя Степанова",
              role: "Иарт-директор в Ластике",
              desc: "Специализируется на экспериментальной анимации и визуальных эффектах со страстью к творческим экспериментам",
              img: null,
            },
          ].map((person) => (
            <div key={person.name} className="rounded-3xl bg-[#1A1A1A]">
              <Image
                src={person.img || "https://placecats.com/400/300"}
                alt={person.name}
                width={400}
                height={300}
                className="w-full rounded-t-3xl object-cover"
              />
              <div className="flex flex-col gap-3 p-8">
                <p className="font-unbounded text-xl font-bold">
                  {person.name}
                </p>
                <p className="foont-onest text-lg font-semibold text-[#FF006E]">
                  {person.role}
                </p>
                <p className="font-onest text-lg text-[#99A1AF]">
                  {person.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MOCKUP / PLATFORM ────────────────────────────────────────────── */}
      {/* <section className="flex flex-col gap-12">
        <div className="relative overflow-hidden rounded-3xl bg-[#111] p-8">
          <div className="flex h-64 items-center justify-center rounded-xl bg-neutral-800 text-neutral-600">
            [скриншот платформы]
          </div>

          <div className="absolute top-6 right-8 max-w-45 rounded-2xl bg-[#ebf400] px-5 py-3 text-sm font-semibold text-black">
            Всё в одном месте
          </div>
          <div className="absolute bottom-16 left-10 max-w-40 rounded-2xl bg-[#ff5599] px-5 py-3 text-sm font-semibold">
            Удобно смотреть
          </div>
        </div>
      </section> */}

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section className="flex flex-col items-center gap-12 bg-[#0A0A0A]">
        <h2 className="font-unbounded text-5xl font-bold">
          Отзывы <span className="text-[#D4FF00]">участников</span>
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="flex flex-col gap-6 rounded-3xl bg-[#141414] p-8"
            >
              <div className="flex items-center gap-6">
                <Image
                  src={review.pic}
                  alt={review.name}
                  width={65}
                  height={65}
                  className="rounded-2xl"
                />
                <div>
                  <p className="font-unbounded text-lg font-bold">
                    {review.name}
                  </p>
                  <p className="font-onest text-lg text-[#6A7282]">
                    {review.desc}
                  </p>
                </div>
              </div>
              <p className="font-onest text-lg text-[#99A1AF]">
                &ldquo;{review.text}&ldquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#141414]">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-4">
            <h2 className="font-unbounded text-5xl font-bold">
              Присоединяйтесь
              <br />к <span className="text-[#D4FF00]">мастерской</span>
            </h2>
            <p className="font-onest text-lg text-[#99A1AF]">
              Трансформируйте свою творческую практику за 4 недели
              <br />
              интенсивного обучения. Организованное количество мест.
            </p>
          </div>

          <div className="rounded-3xl bg-[#1A1A1A] p-8">
            <div className="flex flex-col gap-8">
              <p className="font-unbounded text-6xl font-bold text-[#D4FF00]">
                ? 000 ₽
              </p>

              <div className="flex flex-col gap-4">
                <p className="font-onest text-lg text-[#99A1AF]">
                  5-недельная интенсивная программа
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {CTA_FEATURES.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`h-2 w-2 shrink-0 rounded-full ${feature.color}`}
                      />
                      <p className="font-onest text-lg text-[#D1D5DC]">
                        {feature.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#"
                className="rounded-full bg-[#D4FF00] p-3 text-lg font-semibold text-black transition-opacity hover:opacity-80"
              >
                Подать заявку на мастеркую →
              </a>
              <div className="flex flex-col gap-2 text-base">
                <p className="text-[#FF006E]">
                  Организационное количество мест · Следующий поток стартует 1
                  апреля 2026
                </p>
                <p className="text-[#4A5565]">
                  Запись доступна · Закрытие в течение 30 дней
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
