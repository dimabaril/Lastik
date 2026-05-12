import { Tag, TAG } from "./tags";

export type LayoutItem = {
  type: "text" | "image" | "video" | "vimeo";
  index: number;
  cols: number;
  colStart?: number;
};

export type Credits = {
  brand?: string;
  agency?: string;
  production?: string;
  client?: string;
};

export type Thumb = {
  origin?: string;
  video?: string;
  poster?: string;
  videoSize?: { width: number; height: number };
};

export type Vimeo = {
  id: number;
  hash?: string;
  aspectRatio?: number;
  fullWidth?: boolean;
};

export type Project = {
  slug: string;
  size: number;
  thumb: Thumb;
  title: string;
  description: string;
  tags: readonly Tag[];
  vimeos: Vimeo[];
  credits?: Credits;
  images: string[];
  videosOrigin?: string[];
  videos?: string[];
  texts: string[];
  layout?: LayoutItem[][];
};

export const projects: Project[] = [
  {
    slug: "museum-of-transport",
    size: 12,
    thumb: {
      origin: "/projects/trans-museum/thumb/trans_museum.webm",
      video: "/projects/trans-museum/thumb/trans_museum-converted.webm",
      poster: "/projects/trans-museum/thumb/trans_museum-poster.jpg",
      videoSize: { width: 1230, height: 308 },
    },
    title: "Музей Транспорта Москвы",
    description: "Description",
    tags: [TAG["2D"], TAG["3D"], TAG.AI, TAG.MUSEUM],
    vimeos: [
      {
        id: 1187717775,
        hash: "7a46d91482",
        aspectRatio: 4,
        fullWidth: true,
      },
    ],
    credits: {
      client: "Музей Транспорта Москвы",
      agency: "Red Pepper Films",
    },
    images: [
      "/projects/trans-museum/Screenshot 2025-11-26 at 13.33.05.png",
      "/projects/trans-museum/Screenshot 2025-11-26 at 13.29.50.png",
      "/projects/trans-museum/Screenshot 2025-11-26 at 13.33.12.png",
      "/projects/trans-museum/Screenshot 2025-11-28 at 11.59.02.png",
      "/projects/trans-museum/Screenshot 2025-11-26 at 13.33.34.png",
      "/projects/trans-museum/image (20).png",
      "/projects/trans-museum/f0837bbe-69ea-4f7b-86bb-05ac0c7eaefa.png",
      "/projects/trans-museum/ad5663d3-fc08-462b-a567-a6b516c6270e.png",
      "/projects/trans-museum/1275f56b-b025-4174-b38b-637e6eec332e.png",
      "/projects/trans-museum/2f90a65a-cef9-48cb-818e-4f47ef765432.png",
      "/projects/trans-museum/image (21).png",
      "/projects/trans-museum/image (22).png",
      "/projects/trans-museum/photo_2025-11-25_22-56-03.jpg",
      "/projects/trans-museum/photo_2025-11-25_22-56-09.jpg",
      "/projects/trans-museum/photo_2025-11-25_22-55-33.jpg",
      "/projects/trans-museum/photo_2025-11-25_22-55-38.jpg",
      "/projects/trans-museum/photo_2025-11-25_22-55-48.jpg",
      "/projects/trans-museum/photo_2025-11-25_22-55-55.jpg",
      "/projects/trans-museum/image (23).png",
      "/projects/trans-museum/image (24).png",
      "/projects/trans-museum/image (25).png",
      "/projects/trans-museum/image (26).png",
      "/projects/trans-museum/image (27).png",
    ],
    videosOrigin: [
      "/projects/trans-museum/MASTER 1920x480_12_1.mp4",
      "/projects/trans-museum/MASTER preview 15-04_6.mp4",
      "/projects/trans-museum/MASTER preview 15-04_7.mp4",
    ],
    videos: [
      "/projects/trans-museum/MASTER 1920x480_12_1-converted.webm",
      "/projects/trans-museum/MASTER preview 15-04_6-converted.webm",
      "/projects/trans-museum/MASTER preview 15-04_7-converted.webm",
    ],
    texts: [
      "13-минутный mix-media фильм про то, как в гараже Мельникова в Москве появляется Музей транспорта — архивы, интервью, чертежи и идеи команды складываются в одну историю.",
      "Мы наполнили реалистичные интерьеры гаража Мельникова жизнерадостными рисованными посетителями.",
      "Персонажи объединили разные эпохи и пространства. Хотелось показать, что годы идут, транспорт меняется, но сама ситуация передвижения остается.",
      "Нам очень хотелось больше крафтовых, живых элементов. История про сотрудника музея, как он сам напал на след экспоната, и как по крупицам собиралась коллекция музея, идеально подошла для покадровой анимации.",
      "Эпизод про детскую линию в экспозиции мы, конечно, рисовали как дети. И тут тоже был простор для покадровой анимации. Эти части здорово сбалансировали 3D и ИИ материал.",
      "Мы использовали нейронки там, где иначе бы не осилили. Брали реальные экспонаты музея, но делали с ними что-то неожиданное – показывали стадии реставрации или собирали сотню объектов в огромную витрину.",
    ],
    layout: [
      [{ type: "text", index: 1, cols: 7 }],
      [
        { type: "image", index: 0, cols: 6 },
        { type: "image", index: 1, cols: 6 },
      ],
      [
        { type: "image", index: 2, cols: 6 },
        { type: "image", index: 3, cols: 6 },
      ],
      [
        { type: "image", index: 4, cols: 6 },
        { type: "image", index: 5, cols: 6 },
      ],
      [{ type: "text", index: 2, cols: 7 }],
      [
        { type: "image", index: 6, cols: 6 },
        { type: "image", index: 7, cols: 6 },
      ],
      [
        { type: "image", index: 8, cols: 6 },
        { type: "image", index: 9, cols: 6 },
      ],
      [{ type: "video", index: 0, cols: 12 }],
      [{ type: "text", index: 3, cols: 7 }],
      [
        { type: "image", index: 10, cols: 6 },
        { type: "image", index: 11, cols: 6 },
      ],
      [
        { type: "image", index: 12, cols: 4 },
        { type: "image", index: 13, cols: 4 },
        { type: "image", index: 14, cols: 4 },
      ],
      [
        { type: "image", index: 15, cols: 4 },
        { type: "image", index: 16, cols: 4 },
        { type: "image", index: 17, cols: 4 },
      ],
      [{ type: "image", index: 18, cols: 12 }],
      [{ type: "image", index: 19, cols: 12 }],
      [{ type: "text", index: 4, cols: 7 }],
      [{ type: "image", index: 20, cols: 8, colStart: 3 }],
      [{ type: "image", index: 21, cols: 8, colStart: 3 }],
      [{ type: "image", index: 22, cols: 8, colStart: 3 }],
      [{ type: "text", index: 5, cols: 7 }],
      [{ type: "video", index: 1, cols: 10, colStart: 2 }],
      [{ type: "video", index: 2, cols: 10, colStart: 2 }],
    ],
  },
  {
    slug: "love-generation",
    size: 4,
    thumb: {
      origin: "/projects/love-generation/thumb/love_generation-thumb.webm",
      video:
        "/projects/love-generation/thumb/love_generation-thumb-converted.webm",
      poster:
        "/projects/love-generation/thumb/love_generation-thumb-poster.jpg",
      videoSize: { width: 392, height: 220 },
    },
    title: "Love Generation",
    description: "Description",
    tags: [TAG["3D"], TAG.ADVERTISING],
    vimeos: [
      {
        id: 981913828,
      },
    ],
    credits: {
      brand: "Love Generation",
    },
    images: [
      "/projects/love-generation/image.png",
      "/projects/love-generation/ban.png",
    ],
    videosOrigin: [
      "/projects/love-generation/PALETKA_backstage.mp4",
      "/projects/love-generation/GLOSS_backstage.mp4",
    ],
    videos: [
      "/projects/love-generation/PALETKA_backstage-converted.webm",
      "/projects/love-generation/GLOSS_backstage-converted.webm",
    ],
    texts: [
      "Бренду косметики **LOVE GENERATION** нужны были ролики для соцсетей. Клиент хотел привлечь топ-инфлюенсеров, но при этом сохранить фокус на самих продуктах.",
      `**Персонажи**

      Мы оживили палетку теней, лак для ногтей и тональный крем, сделав их главными героями трёх коротких роликов.`,
      `**ГОЛОСА**

      Каждый персонаж получил свой характер — вдохновлённый образами инста-селебрити Машмилаш и Романа Каграманова, которые также озвучили героев.`,
      // "Вся история крутится вокруг self-care, лёгкой самоиронии и уверенности в себе.",
    ],
    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [{ type: "text", index: 1, cols: 7 }],
      [
        // { type: "image", index: 0, cols: 5 },
        { type: "image", index: 1, cols: 12 },
      ],
      [{ type: "text", index: 2, cols: 7 }],
      [{ type: "video", index: 0, cols: 12 }],
      [{ type: "video", index: 1, cols: 12 }],

      // [{ type: "text", index: 3, cols: 6, colStart: 0 }],
    ],
  },

  {
    slug: "vk-neo",
    size: 5.5,
    thumb: {
      origin: "/projects/vk-neo/thumb/NEO_pw.webm",
      video: "/projects/vk-neo/thumb/NEO_pw-converted.webm",
      poster: "/projects/vk-neo/thumb/NEO_pw-poster.jpg",
      videoSize: { width: 602, height: 338 },
    },
    title: "VK / Маруся x NEO",
    description: "Description",
    tags: [TAG["2D"], TAG["3D"], TAG.ADVERTISING],
    vimeos: [
      {
        id: 889904948,
      },
    ],
    credits: {
      brand: "VK",
    },
    images: [
      "/projects/vk-neo/image 21.png",
      // "/projects/vk-neo/rob1.png",
      "/projects/vk-neo/rob3.jpeg",
      "/projects/vk-neo/rob2.jpeg",
      "/projects/vk-neo/unicorn.png",
      "/projects/vk-neo/dragon.png",
      "/projects/vk-neo/ccc 1.png",
    ],
    videosOrigin: ["/projects/vk-neo/neo_animatic.mp4"],
    videos: ["/projects/vk-neo/neo_animatic-converted.webm"],
    texts: [
      "Бодрый хип-хоп трек стал мотором истории о детской колонке **Neo**.",
      "Умная колонка рассказывает фантастические сюжеты, и в кадре появляются единороги, роботы и дракон — символ Года Дракона.",
      "Ролик начался с покадрового аниматика, чтобы выстроить ритм, а затем превратился в детализированную 3D-анимацию.",
    ],
    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [{ type: "text", index: 1, cols: 7 }],
      [{ type: "image", index: 0, cols: 12 }],
      [
        { type: "image", index: 1, cols: 6 },
        { type: "image", index: 2, cols: 6 },
      ],
      [{ type: "image", index: 3, cols: 12 }],
      [{ type: "image", index: 4, cols: 12 }],
      [{ type: "text", index: 2, cols: 7 }],
      [{ type: "video", index: 0, cols: 12 }],
      [{ type: "image", index: 5, cols: 12 }],
    ],
  },

  {
    slug: "sber-terminal",
    size: 2.5,
    thumb: {
      origin: "/projects/sber-terminal/thumb/SBER_terminal_sq.webm",
      video: "/projects/sber-terminal/thumb/SBER_terminal_sq-converted.webm",
      poster: "/projects/sber-terminal/thumb/SBER_terminal_sq-poster.jpg",
      videoSize: { width: 306, height: 306 },
    },
    title: "СБЕР / Оплата улыбкой",
    description: "Description",
    tags: [TAG["3D"], TAG.ADVERTISING],
    vimeos: [
      {
        id: 1182969480,
      },
    ],
    credits: {
      brand: "СБЕР",
      agency: "MosAIc",
    },
    images: [
      "/projects/sber-terminal/term-2-1.jpg",
      "/projects/sber-terminal/term-2-3.jpg",
      "/projects/sber-terminal/term-2-2.jpg",
      "/projects/sber-terminal/photo_2026-03-09_15-05-06.jpg",
      "/projects/sber-terminal/photo_2026-03-09_15-05-17.jpg",
      "/projects/sber-terminal/photo_2026-03-09_15-05-20.jpg",
      "/projects/sber-terminal/photo_2026-03-09_15-05-22.jpg",
      "/projects/sber-terminal/photo_2026-03-09_15-05-23.jpg",
      "/projects/sber-terminal/photo_2026-03-09_15-05-25.jpg",
      "/projects/sber-terminal/photo_2026-03-09_15-05-27.jpg",
      "/projects/sber-terminal/photo_2026-03-09_15-08-25.jpg",
    ],
    texts: [
      "Для **Сбера** мы сделали короткий 3D-ролик про терминал оплаты улыбкой.",
      `**Персонаж**

      Клиент хотел оживить терминал и превратить его в эмоционального персонажа: все-таки оплата – улыбкой :)

      Мы показали характер через пластику, точный ритм (подстроились под уже готовый трек) и работу со светом.

      Добавили отсылку к культовой лампе из известной заставки (было сложно удержаться).`,
      "Проект был реализован всего за две недели — от раскадровки до финального рендера.",
    ],
    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [
        { type: "image", index: 0, cols: 4 },
        { type: "image", index: 1, cols: 4 },
        { type: "image", index: 2, cols: 4 },
      ],
      [{ type: "text", index: 1, cols: 7 }],
      [
        { type: "image", index: 3, cols: 3 },
        { type: "image", index: 4, cols: 3 },
        { type: "image", index: 5, cols: 3 },
        { type: "image", index: 6, cols: 3 },
      ],
      [
        { type: "image", index: 7, cols: 3 },
        { type: "image", index: 8, cols: 3 },
        { type: "image", index: 9, cols: 3 },
        { type: "image", index: 10, cols: 3 },
      ],
      [{ type: "text", index: 2, cols: 7, colStart: 6 }],
    ],
  },

  {
    slug: "vtb-1",
    size: 7,
    thumb: {
      origin: "/projects/vtb-1/thumb/vtb-1-thumb.webm",
      video: "/projects/vtb-1/thumb/vtb-1-thumb-converted.webm",
      poster: "/projects/vtb-1/thumb/vtb-1-thumb-poster.jpg",
      videoSize: { width: 706, height: 398 },
    },
    title: "ВТБ / Переводы",
    description: "Description",
    tags: [TAG["3D"], TAG.EFFECTS_2D, TAG.ADVERTISING],
    vimeos: [
      {
        id: 1054459009,
        hash: "b5699500f6",
      },
    ],
    credits: {
      brand: "ВТБ",
      agency: "MosAIc",
    },
    images: [
      "/projects/vtb-1/Remove tool edits (1).png",
      // "/projects/vtb-1/71DA3E3C-5D97-4B62-94A6-3E1BF4178F93.jpeg",
      "/projects/vtb-1/2DE27646-6D42-4FE6-9A64-EF4E9C3574AB.jpeg",
      "/projects/vtb-1/Снимок экрана 2024-05-15 в 12.36.55.png",
      "/projects/vtb-1/92BC146A-41F6-4250-A1C0-CAA8414B2D89.jpeg",
      "/projects/vtb-1/927D8C27-152B-4816-9E4E-C31A620354E4.jpeg",
      "/projects/vtb-1/Снимок экрана 2024-05-15 в 12.36.50.png",
    ],
    videosOrigin: [
      "/projects/vtb-1/vtb_AI textures.mp4",
      "/projects/vtb-1/vtb_layers_1.mp4",
    ],
    videos: [
      "/projects/vtb-1/vtb_AI textures-converted.webm",
      "/projects/vtb-1/vtb_layers_1-converted.webm",
    ],
    texts: [
      "Энергичный ролик, где наша графика плотно переплелась со съемочным материалом.",
      "На этом проекте для ВТБ мы впервые опробовали пайплайн с ИИ-текстурированием, который сегодня позволяет нам значительно ускоряться и делать штуки, которые иначе сложно добиться.",
      "Замешали 3D-анимацию, ИИ-текстуры, 2D-комиксные эффекты и титры.",
      "По настроению в начале плотно ориентировались на Spider-Verse, но постепенно стиль настраивался под визуал ВТБ.",
    ],
    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [{ type: "text", index: 1, cols: 7 }],
      [{ type: "video", index: 0, cols: 12 }],
      [{ type: "text", index: 2, cols: 7, colStart: 6 }],

      [{ type: "video", index: 1, cols: 12 }],

      [{ type: "text", index: 3, cols: 7 }],
      [{ type: "image", index: 0, cols: 12 }],
      [
        { type: "image", index: 1, cols: 6 },
        { type: "image", index: 2, cols: 6 },
      ],
      [
        { type: "image", index: 3, cols: 6 },
        { type: "image", index: 4, cols: 6 },
      ],
      [{ type: "image", index: 5, cols: 12 }],
    ],
  },

  {
    slug: "vk-mini-app",
    size: 5,
    thumb: {
      origin: "/projects/vk-mini-app/thumb/VK_MiniApps.webm",
      video: "/projects/vk-mini-app/thumb/VK_MiniApps-converted.webm",
      poster: "/projects/vk-mini-app/thumb/VK_MiniApps-poster.jpg",
      videoSize: { width: 498, height: 414 },
    },
    title: "VK / Mini Apps",
    description: "Description",
    tags: [TAG["3D"], TAG.EFFECTS_2D, TAG.ADVERTISING],
    vimeos: [
      {
        id: 814924190,
      },
    ],
    credits: {
      brand: "VK",
    },

    images: [
      "/projects/vk-mini-app/1.png",
      "/projects/vk-mini-app/2.png",
      "/projects/vk-mini-app/3.png",
      "/projects/vk-mini-app/4.png",
      "/projects/vk-mini-app/5.png",
      "/projects/vk-mini-app/6.png",
      "/projects/vk-mini-app/7.png",
      "/projects/vk-mini-app/8.png",
      "/projects/vk-mini-app/9.png",
      "/projects/vk-mini-app/10.png",
      "/projects/vk-mini-app/11.png",
      "/projects/vk-mini-app/12.png",

      "/projects/vk-mini-app/c0.png",
      "/projects/vk-mini-app/c1-2.gif",
      "/projects/vk-mini-app/c1-1.gif",
      "/projects/vk-mini-app/c1-3.gif",
      "/projects/vk-mini-app/c2-1.png",
      "/projects/vk-mini-app/c2-2.gif",
      "/projects/vk-mini-app/c3-1.png",
      "/projects/vk-mini-app/c3-2.gif",
      "/projects/vk-mini-app/cloud1.png",
      "/projects/vk-mini-app/cloud3.gif",
      "/projects/vk-mini-app/cloud2.png",

      "/projects/vk-mini-app/sketch1.png",
      "/projects/vk-mini-app/sketch3.png",
      "/projects/vk-mini-app/sketch2.png",
      "/projects/vk-mini-app/girl1.png",
      "/projects/vk-mini-app/girl2.png",
      "/projects/vk-mini-app/girl3.png",

      "/projects/vk-mini-app/zip1.gif",
      "/projects/vk-mini-app/zip2.gif",
      "/projects/vk-mini-app/dance1.gif",
      "/projects/vk-mini-app/dance2.gif",
      "/projects/vk-mini-app/1222.png",
      "/projects/vk-mini-app/12.png",
      "/projects/vk-mini-app/backstage1.gif",
      "/projects/vk-mini-app/backstage2.gif",
      "/projects/vk-mini-app/backstage3.gif",
    ],

    texts: [
      "Промо для мини-приложений VK.",

      `**Сцены**

      Чтобы сделать проект динамичным и модным, решили объединить  3D с живой покадровой 2D-анимацией.`,

      `**Персонажи**

      Придумывали персонажей, чтобы они выражали суть мини-приложений – прогноз погоды, трекер фитнеса/шагов, приложение для знакомств.

      Любимый персонаж — непредсказуемое облачко, которое меняет погоду вместе с настроением.`,

      `**Фоны и эффекты**

      3D-сцены вначале рисовали, искали классные сочетания форм и паттернов. Получилось клевое изогнутое пространство.

      Для каждой сцены мы рисовали и анимировали 2д эффекты, хотелось добавить энергии!`,

      `**Анимация**

      Перед переходом к финальной графике сделали покадровый аниматик, чтобы точно выстроить ритм и движения для 3D-анимации.

      Для танцевальных сцен мы использовали видео-референсы, ну и наши любимые видео аниматики с собою в главных ролях.`,

      "В результате получился яркий, бодрый ролик, который мы прям очень любим.",
    ],
    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [{ type: "text", index: 1, cols: 7 }],
      [
        { type: "image", index: 0, cols: 3 },
        { type: "image", index: 1, cols: 3 },
        { type: "image", index: 2, cols: 3 },
        { type: "image", index: 3, cols: 3 },
      ],
      [
        { type: "image", index: 4, cols: 3 },
        { type: "image", index: 5, cols: 3 },
        { type: "image", index: 6, cols: 3 },
        { type: "image", index: 7, cols: 3 },
      ],
      [
        { type: "image", index: 8, cols: 3 },
        { type: "image", index: 9, cols: 3 },
        { type: "image", index: 10, cols: 3 },
        { type: "image", index: 11, cols: 3 },
      ],
      [{ type: "text", index: 2, cols: 7 }],

      [
        { type: "image", index: 12, cols: 8 },
        { type: "image", index: 13, cols: 4 },
      ],
      [
        { type: "image", index: 14, cols: 8 },
        { type: "image", index: 15, cols: 4 },
      ],
      [
        { type: "image", index: 16, cols: 7 },
        { type: "image", index: 17, cols: 5 },
      ],
      [
        { type: "image", index: 18, cols: 6 },
        { type: "image", index: 19, cols: 6 },
      ],
      [
        { type: "image", index: 20, cols: 4 },
        { type: "image", index: 21, cols: 4 },
        { type: "image", index: 22, cols: 4 },
      ],
      [{ type: "text", index: 3, cols: 7 }],

      [{ type: "image", index: 23, cols: 12 }],
      [
        { type: "image", index: 24, cols: 6 },
        { type: "image", index: 25, cols: 6 },
      ],
      [
        { type: "image", index: 26, cols: 4 },
        { type: "image", index: 27, cols: 4 },
        { type: "image", index: 28, cols: 4 },
      ],
      [{ type: "text", index: 4, cols: 7 }],

      [
        { type: "image", index: 29, cols: 5 },
        { type: "image", index: 30, cols: 7 },
      ],
      [
        { type: "image", index: 31, cols: 6 },
        { type: "image", index: 32, cols: 6 },
      ],
      [
        { type: "image", index: 33, cols: 6 },
        { type: "image", index: 34, cols: 6 },
      ],

      [
        { type: "image", index: 35, cols: 3 },
        { type: "image", index: 36, cols: 6 },
        { type: "image", index: 37, cols: 3 },
      ],

      [{ type: "text", index: 5, cols: 7 }],
    ],
  },

  {
    slug: "rocs",
    size: 2.5,
    thumb: {
      origin: "/projects/rocs/thumb/rocs.webm",
      video: "/projects/rocs/thumb/rocs-converted.webm",
      poster: "/projects/rocs/thumb/rocs-poster.jpg",
      videoSize: { width: 184, height: 184 },
    },
    title: "R.O.C.S.",
    description: "Description",
    tags: [TAG["3D"], TAG.ADVERTISING],
    vimeos: [
      {
        id: 769844526,
      },
    ],
    credits: {
      brand: "R.O.C.S.",
    },
    images: [
      "/projects/rocs/1 (2).png",
      "/projects/rocs/2 (2).png",
      "/projects/rocs/3 (2).png",
      "/projects/rocs/4 (1).png",
      "/projects/rocs/5 (2).png",
      "/projects/rocs/6 (2).png",
      "/projects/rocs/7 (1).png",
      "/projects/rocs/8 (2).png",
      "/projects/rocs/9 (2).png",
      "/projects/rocs/10 (2).png",
      "/projects/rocs/11 (2).png",
      "/projects/rocs/12 (3).png",
      "/projects/rocs/13 (1).png",
      "/projects/rocs/14 (1).png",

      "/projects/rocs/1 (3).png",
      "/projects/rocs/2 (4).png",
      "/projects/rocs/3 (3).png",
      "/projects/rocs/4 (2).png",
      "/projects/rocs/5 (3).png",
      "/projects/rocs/6 (3).png",
      "/projects/rocs/7 (2).png",
      "/projects/rocs/8 (3).png",
      "/projects/rocs/9 (3).png",
      "/projects/rocs/10 (3).png",
    ],
    texts: [
      "Абстрактное 3D про то как зубная паста действует на микро-уровне.",
      "Была задача визуализовать пользу пасты через активные вещества, и мы создали серию «субстанций» — полупрозрачных, текучих форм и частиц, которые живут в кадре, взаимодействуют с эмалью и друг с другом.",
    ],

    layout: [
      [
        { type: "image", index: 0, cols: 3 },
        { type: "image", index: 1, cols: 3 },
        { type: "image", index: 2, cols: 3 },
        { type: "image", index: 3, cols: 3 },
      ],
      [
        { type: "image", index: 4, cols: 3 },
        { type: "image", index: 5, cols: 3 },
        { type: "image", index: 6, cols: 3 },
        { type: "image", index: 7, cols: 3 },
      ],
      [
        { type: "image", index: 8, cols: 3 },
        { type: "image", index: 9, cols: 3 },
        { type: "image", index: 10, cols: 3 },
        { type: "image", index: 11, cols: 3 },
      ],

      [
        { type: "image", index: 12, cols: 3 },
        { type: "image", index: 13, cols: 3 },
      ],

      [{ type: "text", index: 1, cols: 7 }],
      [
        { type: "image", index: 14, cols: 4 },
        { type: "image", index: 15, cols: 4 },
        { type: "image", index: 16, cols: 4 },
      ],
      [
        { type: "image", index: 17, cols: 4 },
        { type: "image", index: 18, cols: 4 },
        { type: "image", index: 19, cols: 4 },
      ],
      [
        { type: "image", index: 20, cols: 6 },
        { type: "image", index: 21, cols: 6 },
      ],
      [
        { type: "image", index: 22, cols: 6 },
        { type: "image", index: 23, cols: 6 },
      ],
    ],
  },

  {
    slug: "zvuk",
    size: 5.5,
    thumb: {
      origin: "/projects/zvuk/thumb/zvuk-thumb.webm",
      video: "/projects/zvuk/thumb/zvuk-thumb-converted.webm",
      poster: "/projects/zvuk/thumb/zvuk-thumb-poster.jpg",
      videoSize: { width: 602, height: 338 },
    },
    title: "СБЕР / Звук",
    description: "Description",
    tags: [TAG["2D"], TAG["3D"], TAG.ADVERTISING, TAG.CLIP],
    vimeos: [
      {
        id: 718359494,
      },
    ],
    credits: {
      brand: "СБЕР Звук",
    },
    images: [
      "/projects/zvuk/zvuk_1.png",

      "/projects/zvuk/sketch1.png",
      "/projects/zvuk/sketch2-1.jpeg",
      "/projects/zvuk/sketch2-2.jpeg",
      "/projects/zvuk/sketch2-3.jpeg",
      "/projects/zvuk/sketch2-4.jpeg",
      "/projects/zvuk/sketch2.png",
      "/projects/zvuk/sketch3-1.jpeg",
      "/projects/zvuk/sketch3-2.png",
      "/projects/zvuk/sketch3.jpeg",
      "/projects/zvuk/sketch4-2.jpeg",
      "/projects/zvuk/sketch4-1.jpeg",

      "/projects/zvuk/1.png",
      "/projects/zvuk/2.png",
      "/projects/zvuk/3.png",
      "/projects/zvuk/4.jpg",
      "/projects/zvuk/5.png",
      "/projects/zvuk/6.png",
      "/projects/zvuk/7.jpg",
      "/projects/zvuk/8.png",
      "/projects/zvuk/9.png",
      "/projects/zvuk/10.png",
      "/projects/zvuk/11.png",
      "/projects/zvuk/12.png",
      "/projects/zvuk/13.png",
      "/projects/zvuk/14.png",
      "/projects/zvuk/15.png",
      "/projects/zvuk/16.png",
      "/projects/zvuk/17.png",
      "/projects/zvuk/18.png",
      "/projects/zvuk/19.png",
      "/projects/zvuk/20.png",
      "/projects/zvuk/21.png",
      "/projects/zvuk/22.png",
      "/projects/zvuk/23.png",
      "/projects/zvuk/24.png",
      "/projects/zvuk/25.png",
      "/projects/zvuk/26.png",
      "/projects/zvuk/27.png",
    ],
    texts: [
      "Перед нами стояла задача в сжатые сроки создать 40-секундный ролик для онлайн-платформы стриминга Звук.",
      "Тема кампании «Уважай уши» вдохновила нас на формат коллаба с участием разных художников, каждый из которых по-своему высказался на тему ушей.",
    ],
    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [{ type: "text", index: 1, cols: 7 }],
      [{ type: "image", index: 0, cols: 12 }],
      [{ type: "image", index: 1, cols: 12 }],
      [
        { type: "image", index: 2, cols: 4 },
        { type: "image", index: 3, cols: 4 },
        { type: "image", index: 4, cols: 4 },
      ],
      [
        { type: "image", index: 5, cols: 6 },
        { type: "image", index: 6, cols: 6 },
      ],
      [
        { type: "image", index: 7, cols: 4 },
        { type: "image", index: 8, cols: 4 },
        { type: "image", index: 9, cols: 4 },
      ],
      [
        { type: "image", index: 10, cols: 6 },
        { type: "image", index: 11, cols: 6 },
      ],
      [
        { type: "image", index: 12, cols: 2 },
        { type: "image", index: 13, cols: 2 },
        { type: "image", index: 14, cols: 2 },
        { type: "image", index: 15, cols: 2 },
        { type: "image", index: 16, cols: 2 },
        { type: "image", index: 17, cols: 2 },
      ],
      [
        { type: "image", index: 18, cols: 2 },
        { type: "image", index: 19, cols: 2 },
        { type: "image", index: 20, cols: 2 },
        { type: "image", index: 21, cols: 2 },
        { type: "image", index: 22, cols: 2 },
        { type: "image", index: 23, cols: 2 },
      ],
      [
        { type: "image", index: 24, cols: 2 },
        { type: "image", index: 25, cols: 2 },
        { type: "image", index: 26, cols: 2 },
        { type: "image", index: 27, cols: 2 },
        { type: "image", index: 28, cols: 2 },
        { type: "image", index: 29, cols: 2 },
      ],
      [
        { type: "image", index: 30, cols: 2 },
        { type: "image", index: 31, cols: 2 },
        { type: "image", index: 32, cols: 2 },
        { type: "image", index: 33, cols: 2 },
        { type: "image", index: 34, cols: 2 },
        { type: "image", index: 35, cols: 2 },
      ],
      [
        { type: "image", index: 36, cols: 2 },
        { type: "image", index: 37, cols: 2 },
        { type: "image", index: 38, cols: 2 },
      ],
    ],
  },

  {
    slug: "mts",
    size: 4,
    thumb: {
      origin: "/projects/mts/thumb/mts-thumb.webm",
      video: "/projects/mts/thumb/mts-thumb-converted.webm",
      poster: "/projects/mts/thumb/mts-thumb-poster.jpg",
      videoSize: { width: 392, height: 220 },
    },
    title: "МТС / Neku-sai",
    description: "Description",
    tags: [TAG["2D"], TAG.CLIP],
    vimeos: [
      {
        id: 1031579586,
      },
    ],
    credits: {
      brand: "МТС",
      production: "Human",
    },
    images: [
      "/projects/mts/Вакалоиды_Цвет.jpg",
      "/projects/mts/Crow (1).png",
      "/projects/mts/Вакалоиды (1).png",
      "/projects/mts/Вакалоиды_ПБ_Черная.jpg",
      "/projects/mts/image.png",
      "/projects/mts/telegram-cloud-photo-size-2-5323689908914740862-y.jpg",
      "/projects/mts/комнаты.png",
    ],
    videosOrigin: [
      "/projects/mts/Snippet_FINAL.webm",
      "/projects/mts/Common_reel_MASTER_version.webm",
      "/projects/mts/Reel_Black_FINAL.webm",
      "/projects/mts/vocaloids_001_v001.webm",
    ],
    videos: [
      "/projects/mts/Snippet_FINAL-converted.webm",
      "/projects/mts/Common_reel_MASTER_version-converted.webm",
      "/projects/mts/Reel_Black_FINAL-converted.webm",
      "/projects/mts/vocaloids_001_v001-converted.webm",
    ],
    texts: [
      "Клип и серия рилсов для виртуальной группы **Neku-sai**, которую запустил **МТС Лэйбл**.",
      "Наша задача была не просто сделать анимацию, а создать убедительных персонажей. Мы детально продумывали образы: татуировки, аксессуары, маникюр, мелкие привычки — именно такие детали делают героя живым.",
      "За основу визуального характера взяли энергетику фронт-герлз из группы «Ранетки», а песня «О тебе» стала отправной точкой для всей истории.",
      "Клип и короткие ролики построены на эстетике тикток-контента — будто они сняты на айфон в спальне, которую делишь с младшим братом, и смонтированы прямо на телефоне. Этот «домашний» язык помог сделать виртуальную группу ближе и понятнее аудитории.",
    ],
    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [{ type: "text", index: 1, cols: 7 }],

      [
        { type: "video", index: 0, cols: 3 },
        { type: "video", index: 1, cols: 3 },
        { type: "video", index: 2, cols: 3 },
        { type: "video", index: 3, cols: 3 },
      ],
      [{ type: "text", index: 2, cols: 7 }],

      [
        { type: "image", index: 0, cols: 5 },
        { type: "image", index: 1, cols: 7 },
      ],
      [
        { type: "image", index: 2, cols: 7 },
        { type: "image", index: 3, cols: 5 },
      ],
      [{ type: "text", index: 3, cols: 7 }],
      [
        { type: "image", index: 4, cols: 6 },
        { type: "image", index: 5, cols: 6 },
      ],

      [{ type: "image", index: 6, cols: 12 }],
    ],
  },

  {
    slug: "yandex-incl",
    size: 6,
    thumb: {
      origin: "/projects/yandex-incl/thumb/ya_incl-thumb.webm",
      video: "/projects/yandex-incl/thumb/ya_incl-thumb-converted.webm",
      poster: "/projects/yandex-incl/thumb/ya_incl-thumb-poster.jpg",
      videoSize: { width: 602, height: 338 },
    },
    title: "Яндекс / Инклюзия",
    description:
      "Технологичный проект поисковой системы с абстрактными элементами",
    tags: [TAG["2D"], TAG.IMAGE],
    vimeos: [
      {
        id: 1054472202,
      },
      {
        id: 1054472284,
        hash: "1e4e3262aa",
      },
    ],
    credits: {
      brand: "Яндекс",
    },

    images: [
      "/projects/yandex-incl/bask_sketch2.jpg",
      "/projects/yandex-incl/girl_sketch_pw.jpg",
      "/projects/yandex-incl/bask1.gif",
      "/projects/yandex-incl/sb_gorovka.jpg",
      "/projects/yandex-incl/gotov1.gif",
    ],
    // videos: ["https://vimeo.com/1054472284/1e4e3262aa"],

    texts: [
      "Про инклюзию для Яндекса. Каждая история — о человеке с инвалидностью и том, как технологии помогают жить обычной жизнью в большом городе.",
      "Первый ролик — о сервисе такси для людей с ограниченными возможностями.",
      "Героиня — молодая девушка в инвалидной коляске, которая едет на баскетбол, выбрав в приложении специальную опцию.",
      "Вторая история — про дедушку, который уже почти не видит, но очень любит готовить. Он собирается испечь пирог для внуков, но не может сам прочитать надписи на упаковках.",
    ],
    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [{ type: "text", index: 1, cols: 7 }],
      [{ type: "text", index: 2, cols: 7 }],
      [
        { type: "image", index: 0, cols: 6 },
        { type: "image", index: 1, cols: 6 },
      ],
      [{ type: "image", index: 2, cols: 12 }],
      [{ type: "text", index: 3, cols: 7, colStart: 6 }],
      [{ type: "vimeo", index: 1, cols: 12 }],
      [{ type: "image", index: 3, cols: 12 }],
      [{ type: "image", index: 4, cols: 12 }],
    ],
  },

  {
    slug: "mail-ru",
    size: 5,
    thumb: {
      origin: "/projects/mail-ru/thumb/mail-thumb.webm",
      video: "/projects/mail-ru/thumb/mail-thumb-converted.webm",
      poster: "/projects/mail-ru/thumb/mail-thumb-poster.jpg",
      videoSize: { width: 498, height: 280 },
    },
    title: "MAIL.RU / Ребрендинг ",
    description: "Description",
    tags: [TAG["3D"], TAG.ADVERTISING],
    vimeos: [
      {
        id: 1054447127,
      },
    ],
    credits: {
      brand: "mail.ru",
    },
    images: [
      "/projects/mail-ru/photo_2026-03-09_13-27-02.jpg",
      "/projects/mail-ru/photo_2026-03-09_13-27-21.jpg",
      "/projects/mail-ru/photo_2026-03-09_13-27-15.jpg",
      "/projects/mail-ru/photo_2026-03-09_13-33-56.jpg",
    ],
    videosOrigin: [
      "/projects/mail-ru/MAIL_anim_1_v07.mp4",
      "/projects/mail-ru/MAIL_anim_3_v02 (2).mp4",
      "/projects/mail-ru/MAIL_anim_1_v02.mp4",
      "/projects/mail-ru/MAIL_anim_fin_1_v02.mp4",
    ],
    videos: [
      "/projects/mail-ru/MAIL_anim_1_v07-converted.webm",
      "/projects/mail-ru/MAIL_anim_3_v02 (2)-converted.webm",
      "/projects/mail-ru/MAIL_anim_1_v02-converted.webm",
      "/projects/mail-ru/MAIL_anim_fin_1_v02-converted.webm",
    ],
    texts: [
      "Mail.ru провёл ребрендинг, выкатив новый дизайн и маскота — белую собаку по имени Байт.",
      "Нас попросили создать интро об обновлённом интерфейсе.",
      "Под легкий прозрачный дизайн, хотелось сделать плавные движения и чтобы в монтаже было как можно больше органичных мэтч-катов.",
    ],
    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [{ type: "text", index: 1, cols: 7, colStart: 6 }],
      [
        { type: "image", index: 0, cols: 6 },
        { type: "image", index: 1, cols: 6 },
      ],
      [
        { type: "image", index: 2, cols: 6 },
        { type: "image", index: 3, cols: 6 },
      ],
      [{ type: "text", index: 2, cols: 7 }],

      [
        { type: "video", index: 0, cols: 6 },
        { type: "video", index: 1, cols: 6 },
      ],
      [
        { type: "video", index: 2, cols: 6 },
        { type: "video", index: 3, cols: 6 },
      ],
    ],
  },

  {
    slug: "mansi",
    size: 8,
    thumb: {
      origin: "/projects/mansi/thumb/mansi-thumb.webm",
      video: "/projects/mansi/thumb/mansi-thumb-converted.webm",
      poster: "/projects/mansi/thumb/mansi-thumb-poster.jpg",
      videoSize: { width: 812, height: 284 },
    },
    title: "Фестиваль Дух огня / Мифы Манси",
    description: "Description",
    tags: [TAG["2D"], TAG["3D"], TAG.FILM],
    // vimeoId: 779626942,
    vimeos: [
      {
        id: 779626942,
        aspectRatio: 2.857,
      },
    ],

    images: [
      "/projects/mansi/A382CCB0-CED1-410C-9CFB-E80FCEC10831.png",
      "/projects/mansi/telegram-cloud-photo-size-2-5438318849423426342-y.jpg",
      "/projects/mansi/telegram-cloud-photo-size-2-5456181257630237561-y.jpg",
      "/projects/mansi/telegram-cloud-document-2-5453929457360314954.jpg",

      "/projects/mansi/telegram-cloud-photo-size-2-5431363205722128715-y.jpg",
      "/projects/mansi/telegram-cloud-document-2-5445080562010169447.jpg",
      "/projects/mansi/telegram-cloud-document-2-5436140252576095848.jpg",
      "/projects/mansi/Screenshot 2022-11-23 at 19.53.15.png",

      "/projects/mansi/7CDE33E5-C4F3-4934-BB21-3EDB283A3EE8.png",
      "/projects/mansi/telegram-cloud-photo-size-2-5438644669937467623-y.jpg",

      "/projects/mansi/telegram-cloud-document-2-5456667846903866348.jpg",
      "/projects/mansi/telegram-cloud-document-2-5456667846903866979.jpg",
      "/projects/mansi/telegram-cloud-document-2-5449612396752543682.jpg",
      "/projects/mansi/Screenshot 2022-11-23 at 20.06.47.png",
      "/projects/mansi/colors (1).jpg",

      "/projects/mansi/telegram-cloud-photo-size-2-5438496802803401745-y.jpg",
      "/projects/mansi/IMAGE 2022-11-14 15_51_22.jpg",
      "/projects/mansi/photo_2022-11-16 00.39.14.jpeg",
      "/projects/mansi/IMAGE 2022-11-14 15_51_07.jpg",
    ],
    texts: [
      'Фильм про сотворение мира по легендам сибирского народа Манси. Создан для церемонии открытия фестиваля "Дух огня".',
    ],

    layout: [
      [{ type: "image", index: 0, cols: 12 }],
      [{ type: "image", index: 1, cols: 12 }],
      [{ type: "image", index: 2, cols: 12 }],
      [{ type: "image", index: 3, cols: 12 }],
      [],
      [],
      [{ type: "image", index: 4, cols: 12 }],
      [{ type: "image", index: 5, cols: 12 }],
      [{ type: "image", index: 6, cols: 12 }],
      [{ type: "image", index: 7, cols: 12 }],
      [],
      [],
      [{ type: "image", index: 8, cols: 12 }],
      [{ type: "image", index: 9, cols: 12 }],
      [],
      [],
      [
        { type: "image", index: 10, cols: 9 },
        { type: "image", index: 11, cols: 3 },
      ],
      [{ type: "image", index: 12, cols: 12 }],
      [{ type: "image", index: 13, cols: 12 }],
      [{ type: "image", index: 14, cols: 12 }],
      [],
      [],
      [{ type: "image", index: 15, cols: 12 }],
      [{ type: "image", index: 16, cols: 12 }],
      [{ type: "image", index: 17, cols: 12 }],
      [{ type: "image", index: 18, cols: 12 }],
    ],
  },

  {
    slug: "eapteka",
    size: 3,
    thumb: {
      origin: "/projects/eapteka/thumb/tab_thumb.webm",
      video: "/projects/eapteka/thumb/tab_thumb-converted.webm",
      poster: "/projects/eapteka/thumb/tab_thumb-poster.jpg",
      videoSize: { width: 288, height: 288 },
    },
    title: "СБЕР / Еаптека",
    description: "Description",
    tags: [TAG["3D"], TAG.ADVERTISING],
    vimeos: [
      {
        id: 676229349,
      },
    ],
    credits: {
      brand: "ЕАПТЕКА",
      production: "Zebra Hero",
    },
    images: [],
    videosOrigin: [
      "/projects/eapteka/faces.webm",
      "/projects/eapteka/eapteka_1.webm",
      "/projects/eapteka/eapteka_2.webm",
    ],
    videos: [
      "/projects/eapteka/faces-converted.webm",
      "/projects/eapteka/eapteka_1-converted.webm",
      "/projects/eapteka/eapteka_2-converted.webm",
    ],
    texts: [
      "Для EApteka мы придумали серию визуальных героев — таблетки со своим характером и портреты людей, которым они предназначены.",

      `**Лица**
      Мы курировали съёмку, выбирали выразительные лица, это был классный опыт общения и взаимодействия с кучей таких разных людей.`,

      `**Таблетки**
      Дальше мы с каждой таблеткой мы работали как с персонажем: искали форму, настроение и ритм, чтобы она точно попадала в своего «человека».`,

      `Отдельным слоем стал саунд-дизайн. Мы добавили ASMR-звучание — хруст, щелчки, мягкие касания — чтобы визуал буквально ощущался кожей.

      В результате получился ролик, который говорит на языке фарм-категории, но звучит и выглядит совсем иначе.`,
    ],
    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [{ type: "text", index: 1, cols: 7 }],
      [{ type: "video", index: 0, cols: 12 }],
      [{ type: "text", index: 2, cols: 7 }],
      [{ type: "video", index: 1, cols: 8, colStart: 3 }],
      [{ type: "video", index: 2, cols: 8, colStart: 3 }],
      [{ type: "text", index: 3, cols: 7 }],
    ],
  },

  {
    slug: "delimobil",
    size: 3,
    thumb: {
      origin: "/projects/delimobil/thumb/delimobil.webm",
      video: "/projects/delimobil/thumb/delimobil-converted.webm",
      poster: "/projects/delimobil/thumb/delimobil-poster.jpg",
      videoSize: { width: 288, height: 312 },
    },
    title: "Делимобиль",
    description: "Description",
    tags: [TAG["3D"], TAG.ADVERTISING],
    vimeos: [
      {
        id: 872188494,
      },
    ],
    credits: {
      brand: "Делимобиль",
    },
    images: [
      "/projects/delimobil/telegram-cloud-photo-size-2-5433936741535960381-y.jpg",
      "/projects/delimobil/telegram-cloud-photo-size-2-5436281162319385226-y.jpg",
      "/projects/delimobil/5E7C4467-0BC4-4E17-A590-7AC6A5511C87.jpeg",
    ],
    texts: [
      "Обычно Делимобиль придерживается строгого и выверенного стиля, но эта партнерская кампания должна была быть более игривой.",
      "Нас попросили создать мимимишный образ для более экспериментального и бодрого ролика.",
      "Интересный факт: музыку написал наш креативный директор Леша.",
    ],

    layout: [
      // [{ type: "text", index: 0, cols: 7 }],
      [{ type: "text", index: 1, cols: 7 }],
      [{ type: "image", index: 0, cols: 12 }],
      [
        { type: "image", index: 1, cols: 6 },
        { type: "image", index: 2, cols: 6 },
      ],
      [{ type: "text", index: 2, cols: 7, colStart: 6 }],
    ],
  },

  {
    slug: "sobchak",
    size: 4.5,
    thumb: {
      origin: "/projects/sobchak/thumb/sobchak_thumb.webm",
      video: "/projects/sobchak/thumb/sobchak_thumb-converted.webm",
      poster: "/projects/sobchak/thumb/sobchak_thumb-poster.jpg",
      videoSize: { width: 446, height: 250 },
    },
    title: "Осторожно, Собчак!",
    description: "Description",
    tags: [TAG["2D"], TAG.BUMPER],
    vimeos: [
      {
        id: 404077121,
      },
    ],
    credits: {
      client: "Осторожно, Собчак!",
    },

    images: [
      "/projects/sobchak/1 gif1.gif",
      "/projects/sobchak/2 storyboard.png",
      "/projects/sobchak/3 characters.jpg",
      "/projects/sobchak/4 dog.jpg",
      "/projects/sobchak/5 dog.jpg",
      "/projects/sobchak/5 gif2.gif",
      "/projects/sobchak/6 gif3.gif",
      "/projects/sobchak/7 anim.gif",
      "/projects/sobchak/8 pic1.jpg",
      "/projects/sobchak/9 pic3.jpg",
      "/projects/sobchak/8 pic2.jpg",
      "/projects/sobchak/9 pic5.jpg",
      "/projects/sobchak/9 pic4.jpeg",
      "/projects/sobchak/11 pic10.jpg",
      "/projects/sobchak/12 gif4.gif",
    ],
    texts: [
      `Заставка для Youtube-шоу "Осторожно, Собчак"`,

      `**История**

      Мы подхватили ироничную игру слов из названия шоу и предложили собаку в качестве главного героя заставки. Получился сюрреалистический трип альтер-эго женщины-собаки по её собственному подсознанию.`,

      `**Собака**

      Чтобы найти идеальную собаку, мы много скетчили.Каждый в студии должен был придумать свой вариант и получилась куча рисунков.

      Был найден персонаж — женщина-собака, беспокойная дворняга, собаченция, которая, высунув язык, прыгает и несётся неизвестно куда.`,

      `**Вдохновения**
      
      Походка и поза были взяты у нашей любимой норвежской наездницы Айлы Кирстен. Мебель подсказало интервью с Цукербергом — эти стулья нас просто покорили.`,

      `**Персонажи**

      Вся история пронизана группой странных персонажей. Эти монстры, дьяволы, гоблины — безумные спутники беспринципной журналистки в мире скандалов и разоблачений.`,

      `**Фоны**

      Сюрреалистические локации отсылают к символическим слоям личности Ксении. Она попросила лишь немного безрассудства. Несмотря на её первоначальные возражения, мы не смогли устоять и добавили больше психоделического дизайна. Цветовую палитру несколько раз приглушили для достижения желаемого уровня потусторонности и мрачности.`,
    ],

    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [{ type: "image", index: 0, cols: 12 }],
      [{ type: "text", index: 1, cols: 7 }],
      [{ type: "image", index: 1, cols: 12 }],
      [{ type: "text", index: 2, cols: 7 }],
      [{ type: "image", index: 2, cols: 12 }],
      [{ type: "image", index: 3, cols: 12 }],
      [{ type: "image", index: 4, cols: 12 }],
      [{ type: "text", index: 3, cols: 7 }],
      [{ type: "image", index: 5, cols: 12 }],
      [{ type: "image", index: 6, cols: 12 }],
      [{ type: "text", index: 4, cols: 7 }],
      [{ type: "image", index: 7, cols: 12 }],

      [{ type: "text", index: 5, cols: 7 }],

      [
        { type: "image", index: 8, cols: 6 },
        { type: "image", index: 9, cols: 6 },
      ],
      [
        { type: "image", index: 10, cols: 6 },
        { type: "image", index: 11, cols: 6 },
      ],
      [{ type: "image", index: 12, cols: 12 }],
      [{ type: "image", index: 13, cols: 12 }],
      [{ type: "image", index: 14, cols: 12 }],
    ],
  },

  {
    slug: "mosmuseum",
    size: 4.5,
    thumb: {
      origin: "/projects/mosmuseum/thumb/mosmuseum-thumb.webm",
      video: "/projects/mosmuseum/thumb/mosmuseum-thumb-converted.webm",
      poster: "/projects/mosmuseum/thumb/mosmuseum-thumb-poster.jpg",
      videoSize: { width: 446, height: 250 },
    },
    title: "Музей Москвы",
    description: "Description",
    tags: [TAG["2D"], TAG["3D"], TAG.MUSEUM],
    vimeos: [
      {
        id: 677745860,
      },
    ],
    credits: {
      client: "Музей Москвы",
    },
    images: [
      "/projects/mosmuseum/faa984142929675.6270fadb77c91.gif",
      "/projects/mosmuseum/image (30).png",
      "/projects/mosmuseum/215e95142929675.62711a564afeb.png",
      "/projects/mosmuseum/1bdcdb142929675.62711a564b8d4.png",
      "/projects/mosmuseum/091ce9142929675.6270ec8c12dd4.gif",
      "/projects/mosmuseum/e5ca4d142929675.6270fadb7816b.png",
      "/projects/mosmuseum/43c8e6142929675.6270fadb76a24.gif",
    ],
    texts: [
      // "Текст"
    ],

    layout: [
      [{ type: "image", index: 0, cols: 12 }],
      [{ type: "image", index: 1, cols: 12 }],
      [{ type: "image", index: 2, cols: 12 }],
      [{ type: "image", index: 3, cols: 12 }],
      [{ type: "image", index: 4, cols: 12 }],
      [{ type: "image", index: 5, cols: 12 }],
      [{ type: "image", index: 6, cols: 12 }],
    ],
  },

  {
    slug: "volchok",
    size: 5,
    thumb: {
      origin: "/projects/volchok/thumb/volchok-thumb.webm",
      video: "/projects/volchok/thumb/volchok-thumb-converted.webm",
      poster: "/projects/volchok/thumb/volchok-thumb-poster.jpg",
      videoSize: { width: 498, height: 280 },
    },
    title: "Волковская Пивоварня",
    description: "Description",
    tags: [TAG["2D"], TAG.ADVERTISING],
    vimeos: [
      {
        id: 625784188,
      },
    ],
    credits: {
      brand: "Волковская Пивоварня",
    },

    images: [
      "/projects/volchok/64fd2f130842133.6195235b144dd.gif",
      "/projects/volchok/840b4c130842133.6195235b59732.gif",
      "/projects/volchok/92c5dc130842133.6195235b9d5be.gif",
      "/projects/volchok/9b45f8130842133.6195235bc4ef0.gif",
      "/projects/volchok/e9f5c1130842133.619609fb1ade0.png",
      "/projects/volchok/80d6b2130842133.619609fb199f2.png",
      "/projects/volchok/248602130842133.619609fb1a235.png",
      "/projects/volchok/5070b0130842133.619609fb1bcce.png",
      "/projects/volchok/e4ed12130842133.619609fb1915e.jpg",
      "/projects/volchok/9ca2a5130842133.619609fb18b71.jpg",
      "/projects/volchok/303ab5130842133.6195235c1e3ff.gif",
      "/projects/volchok/f124f6130842133.6195235c51e36.gif",
      "/projects/volchok/d22576130842133.6195235ca2ce2.gif",
      "/projects/volchok/image (28).png",
      "/projects/volchok/cfef70130842133.6195235d0330b.gif",
      "/projects/volchok/038fc3130842133.6195235d3d908.gif",
      "/projects/volchok/b28c69130842133.6195235dc8081.gif",
      "/projects/volchok/e87368130842133.6195235e8e6cb.gif",
    ],
    texts: [
      // "Текст"
    ],
    layout: [
      [{ type: "image", index: 0, cols: 12 }],
      [{ type: "image", index: 1, cols: 12 }],
      [{ type: "image", index: 2, cols: 12 }],
      [{ type: "image", index: 3, cols: 12 }],

      [
        { type: "image", index: 4, cols: 6 },
        { type: "image", index: 5, cols: 6 },
      ],

      [{ type: "image", index: 6, cols: 12 }],
      [{ type: "image", index: 7, cols: 12 }],

      [
        { type: "image", index: 8, cols: 6 },
        { type: "image", index: 9, cols: 6 },
      ],

      [{ type: "image", index: 10, cols: 12 }],
      [{ type: "image", index: 11, cols: 12 }],
      [{ type: "image", index: 12, cols: 12 }],
      [{ type: "image", index: 13, cols: 12 }],
      [{ type: "image", index: 14, cols: 12 }],
      [{ type: "image", index: 15, cols: 12 }],
      [{ type: "image", index: 16, cols: 12 }],
      [{ type: "image", index: 17, cols: 12 }],
    ],
  },

  {
    slug: "rambler",
    size: 6,
    thumb: {
      origin: "/projects/rambler/thumb/rambler_thumb.webm",
      video: "/projects/rambler/thumb/rambler_thumb-converted.webm",
      poster: "/projects/rambler/thumb/rambler_thumb-poster.jpg",
      videoSize: { width: 602, height: 338 },
    },
    title: "Агрегатор",
    description: "Description",
    tags: [TAG["3D"], TAG.ADVERTISING],
    vimeos: [
      {
        id: 631969238,
      },
    ],
    credits: {
      production: "Zebra Hero",
    },
    images: [
      "/projects/rambler/e03764124306657.6273fd163c485.png",
      "/projects/rambler/79ae87124306657.6273fd163c9ce.png",
      "/projects/rambler/f94071124306657.6273f52379af3.png",
      "/projects/rambler/b16c76124306657.6273f52378c47.png",
      "/projects/rambler/9f7009124306657.6273fd163d1a4.jpeg",
      "/projects/rambler/47ce99124306657.6273f5237a017.png",
    ],
    texts: [
      "Веселые алгоритмы на конвейере спама и кликбейта.",
      "Одна крупная медиаплатформа готовила запуск обновлённой новостной ленты с собственной системой фильтрации спама. Нужно было наглядно объяснить работу сложного алгоритма — без технического перегруза и скучных схем.",
      "Маршмеллоу-человечки разных форм и размеров сортируют штуки на ленте. Мы  старались сделать их эмоциональными и минималистичными одновременно.",
      "Новостной контент мы представили в виде разных объектов – на любой вкус и цвет.",
    ],

    layout: [
      [{ type: "text", index: 1, cols: 7 }],
      [{ type: "image", index: 0, cols: 12 }],
      [{ type: "text", index: 2, cols: 7 }],
      [{ type: "image", index: 1, cols: 12 }],
      [{ type: "text", index: 3, cols: 7 }],
      [{ type: "image", index: 2, cols: 12 }],
      [{ type: "image", index: 3, cols: 12 }],
      [{ type: "image", index: 4, cols: 12 }],
      [{ type: "image", index: 5, cols: 12 }],
    ],
  },

  {
    slug: "sber-high-res",
    size: 7,
    thumb: {
      origin: "/projects/sber-high-res/thumb/sber-high-res-thumb.webm",
      video: "/projects/sber-high-res/thumb/sber-high-res-thumb-converted.webm",
      poster: "/projects/sber-high-res/thumb/sber-high-res-thumb-poster.jpg",
      videoSize: { width: 706, height: 398 },
    },
    title: "СБЕР / Кредит 5%",
    description: "Description",
    tags: [TAG["2D"], TAG.MOTION, TAG.ADVERTISING],
    vimeos: [
      {
        id: 838986118,
      },
    ],
    credits: {
      brand: "СБЕР",
      production: "Hype",
    },

    images: [
      "/projects/sber-high-res/1.png",
      "/projects/sber-high-res/2.png",
      "/projects/sber-high-res/3.png",
      "/projects/sber-high-res/4.png",
      "/projects/sber-high-res/5.png",
      "/projects/sber-high-res/6.png",
      "/projects/sber-high-res/7.png",
      "/projects/sber-high-res/8.png",
      "/projects/sber-high-res/9.gif",
      "/projects/sber-high-res/10.gif",
      "/projects/sber-high-res/11.gif",
      "/projects/sber-high-res/12.png",
      "/projects/sber-high-res/13.png",
      "/projects/sber-high-res/14.png",
      "/projects/sber-high-res/15.png",
      "/projects/sber-high-res/16.png",
      "/projects/sber-high-res/17.gif",
      "/projects/sber-high-res/18.gif",
      "/projects/sber-high-res/19.gif",
      "/projects/sber-high-res/20.gif",
      "/projects/sber-high-res/21.gif",
      "/projects/sber-high-res/22.gif",
    ],
    texts: [
      `Анимационные сцены для съемочного ролика Сбера про кредит на учёбу.

      Главные герои видео — студенты разных специальностей, которые чувствуют себя не на своем месте. Анимация показывает их переход от скучной учёбы к настоящим  интересам.`,

      `**РЕСЕРЧ СТИЛЯ**

      Нам было интересно попробовать новый графический стиль, поэкспериментировать с угловатыми формами, и это классно вписалось в инди-формат видео.
      
      **ПЕРСОНАЖ-ДЕВУШКА**

      Стилизованный анимированный персонаж должна была иметь явное сходство с актрисой из видео.`,

      `**СТИЛЫ И КАДРЫ ОКРУЖАЮЩЕЙ СРЕДЫ**

      Мы сохранили геометрию лекционной аудитории, но преобразовали его в абстрактную фантастическую среду.`,

      "По сюжету, девушка преодолевает «потолок своих возможностей» и монотонную реальность, вылетая навстречу своей мечте — стать аниматором :)",

      `**АНИМАЦИЯ**
      Анимация сочетает в себе несколько слоев и техник.Покадровая анимация персонажа на 3D-фоне, в которой объекты и эффекты анимируются покадрово, плюс моушн.`,

      "Сцена включала в себя несколько пространств и разборку комнаты, что было проще реализовать в 3D.",

      `**ПЕРСОНАЖ «ПОДВОДНЫЙ ПАРЕНЬ»**
      Этот персонаж, подобно Францу Кафке, пребывает в апатии в мире законов и юриспруденции, он чувствует себя на самом дне.`,

      `**АНИМАЦИЯ**
      Для этого эпизода все элементы были нарисованы вручную. Мы пробовали разные варианты финального превращения персонажа, наш любимый — с гигантской пиджаком :)`,
    ],
    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [{ type: "text", index: 1, cols: 7 }],

      [
        { type: "image", index: 0, cols: 12 },
        { type: "image", index: 1, cols: 12 },
      ],
      [{ type: "text", index: 2, cols: 7 }],

      [
        { type: "image", index: 2, cols: 6 },
        { type: "image", index: 3, cols: 6 },
      ],
      [{ type: "image", index: 4, cols: 12 }],
      [{ type: "text", index: 3, cols: 7 }],

      [
        { type: "image", index: 5, cols: 4 },
        { type: "image", index: 6, cols: 4 },
        { type: "image", index: 7, cols: 4 },
      ],
      [{ type: "text", index: 4, cols: 7 }],

      [
        { type: "image", index: 8, cols: 6 },
        { type: "image", index: 9, cols: 6 },
      ],
      [
        { type: "text", index: 5, cols: 6 },
        { type: "image", index: 10, cols: 6 },
      ],
      [{ type: "text", index: 6, cols: 7 }],
      [
        { type: "image", index: 11, cols: 4 },
        { type: "image", index: 12, cols: 4 },
        { type: "image", index: 13, cols: 4 },
      ],
      [
        { type: "image", index: 14, cols: 6 },
        { type: "image", index: 15, cols: 6 },
      ],
      [{ type: "text", index: 7, cols: 7 }],
      [{ type: "image", index: 16, cols: 12 }],
      [
        { type: "image", index: 17, cols: 6 },
        { type: "image", index: 18, cols: 3 },
        { type: "image", index: 19, cols: 3 },
      ],
      [
        { type: "image", index: 20, cols: 6 },
        { type: "image", index: 21, cols: 6 },
      ],
    ],
  },

  {
    slug: "i-want-to-know-everything",
    size: 5,
    thumb: {
      origin:
        "/projects/i-want-to-know-everything/thumb/i-want-to-know-everything-thumb.webm",
      video:
        "/projects/i-want-to-know-everything/thumb/i-want-to-know-everything-thumb-converted.webm",
      poster:
        "/projects/i-want-to-know-everything/thumb/i-want-to-know-everything-thumb-poster.jpg",
      videoSize: { width: 498, height: 280 },
    },
    title: "Хочу всё знать!",
    description: "Description",
    tags: [TAG["2D"], TAG.BUMPER],
    vimeos: [
      {
        id: 575844837,
      },
    ],
    credits: {
      client: "Киностудия им. Горького",
    },

    images: [
      "/projects/i-want-to-know-everything/63f74c123601575.60f184f4450e7.png",

      "/projects/i-want-to-know-everything/0990a4123601575.618983a2cf905.png",
      "/projects/i-want-to-know-everything/1194ee123601575.618983a2d0072.gif",
      "/projects/i-want-to-know-everything/2830dc123601575.618983a2cdb5f.gif",
      "/projects/i-want-to-know-everything/8cfb71123601575.618983a2ce96a.gif",
      "/projects/i-want-to-know-everything/6c4164123601575.61898484b1811.png",
    ],
    videosOrigin: [
      "/projects/i-want-to-know-everything/7ec1e4123601575.60f1a0a8c9a8a.webm",
    ],
    videos: [
      "/projects/i-want-to-know-everything/7ec1e4123601575.60f1a0a8c9a8a-converted.webm",
    ],
    texts: [
      // "Текст"
    ],

    layout: [
      [{ type: "image", index: 0, cols: 12 }],
      [{ type: "video", index: 0, cols: 12 }],
      [{ type: "image", index: 1, cols: 12 }],
      [{ type: "image", index: 2, cols: 12 }],
      [{ type: "image", index: 3, cols: 12 }],
      [{ type: "image", index: 4, cols: 12 }],
      [{ type: "image", index: 5, cols: 12 }],
    ],
  },

  {
    slug: "gorod-otkritiy",
    size: 6,
    thumb: {
      origin: "/projects/gorod-otkritiy/thumb/gorod_otkritiy.webm",
      video: "/projects/gorod-otkritiy/thumb/gorod_otkritiy-converted.webm",
      poster: "/projects/gorod-otkritiy/thumb/gorod_otkritiy-poster.jpg",
      videoSize: { width: 602, height: 338 },
    },
    title: "Город открытий",
    description: "Description",
    tags: [TAG["2D"], TAG["3D_VR"], TAG.CODING, TAG.INSTALLATION],
    vimeos: [
      {
        id: 1189107509,
        hash: "a26d7ddabd",
      },
    ],
    credits: {
      client: "Департамент туризма Москвы",
    },
    texts: [
      "Большой проект – интерактивная инсталляция для школьников про выбор будущих профессий. Задача – чтобы подросток ощутил, что он уже вырос и оказался на работе своей мечты. Для этого рисовали комиксы и придумывали VR-сцены.",
      "От сценария и стиля до программирования – всё сделано внутри студии. Клиент масштабировал инсталляцию и активно использует её по всей России.",
    ],
    images: [
      "/projects/gorod-otkritiy/image (34).png",
      "/projects/gorod-otkritiy/Screenshot 2025-09-02 at 19.42.32.png",
      "/projects/gorod-otkritiy/Screenshot 2025-09-02 at 19.43.11.png",
      "/projects/gorod-otkritiy/Screenshot 2025-09-02 at 19.43.58.png",
      "/projects/gorod-otkritiy/Screenshot 2025-09-02 at 19.45.08.png",
      "/projects/gorod-otkritiy/Screenshot 2025-09-02 at 19.37.52.png",
      "/projects/gorod-otkritiy/Screenshot 2025-09-02 at 19.40.04.png",
      "/projects/gorod-otkritiy/Screenshot 2025-09-02 at 19.38.13.png",
      "/projects/gorod-otkritiy/Screenshot 2025-09-02 at 19.42.00.png",
    ],

    layout: [
      [
        { type: "text", index: 1, cols: 6 },
        { type: "image", index: 0, cols: 6 },
      ],

      [
        { type: "image", index: 1, cols: 6 },
        { type: "image", index: 2, cols: 6 },
      ],
      [
        { type: "image", index: 3, cols: 6 },
        { type: "image", index: 4, cols: 6 },
      ],
      [
        { type: "image", index: 5, cols: 6 },
        { type: "image", index: 6, cols: 6 },
      ],
      [
        { type: "image", index: 7, cols: 6 },
        { type: "image", index: 8, cols: 6 },
      ],
    ],
  },

  {
    slug: "uralsib",
    size: 5,
    thumb: {
      origin: "/projects/uralsib/thumb/uralsib-thumb.webm",
      video: "/projects/uralsib/thumb/uralsib-thumb-converted.webm",
      poster: "/projects/uralsib/thumb/uralsib-thumb-poster.jpg",
      videoSize: { width: 498, height: 280 },
    },
    title: "Уралсиб / HR",
    description: "Description",
    tags: [TAG["2D"], TAG.ADVERTISING],
    vimeos: [
      {
        id: 831559447,
      },
    ],
    credits: {
      brand: "Уралсиб",
    },
    images: [
      "/projects/uralsib/pers1-1.jpg",
      "/projects/uralsib/pers1-2.jpg",
      "/projects/uralsib/pers1-3.jpg",
      "/projects/uralsib/pers2-1.jpg",
      "/projects/uralsib/pers2-2.jpg",
      "/projects/uralsib/pers2-3.png",
      "/projects/uralsib/pers3-1.jpg",
      "/projects/uralsib/pers3-2.jpg",
      "/projects/uralsib/pers3-3.jpg",
      "/projects/uralsib/pers4.jpg",
      "/projects/uralsib/image.png",
    ],
    texts: [
      "Промо HR-отдела Уралсиба для молодых специалистов.",
      "Использовали покадровую 2D-анимацию, чтобы превратить актеров в метафорические воплощения своих карьерных стремлений.",
    ],
    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [{ type: "text", index: 1, cols: 7 }],
      [
        { type: "image", index: 0, cols: 4 },
        { type: "image", index: 1, cols: 4 },
        { type: "image", index: 2, cols: 4 },
      ],
      [
        { type: "image", index: 3, cols: 4 },
        { type: "image", index: 4, cols: 4 },
        { type: "image", index: 5, cols: 4 },
      ],
      [
        { type: "image", index: 6, cols: 4 },
        { type: "image", index: 7, cols: 4 },
        { type: "image", index: 8, cols: 4 },
      ],
      [{ type: "image", index: 9, cols: 12 }],
      [{ type: "image", index: 10, cols: 12 }],
    ],
  },

  {
    slug: "green-idea",
    size: 6,
    thumb: {
      origin: "/projects/green-idea/thumb/green-idea-thumb.webm",
      video: "/projects/green-idea/thumb/green-idea-thumb-converted.webm",
      poster: "/projects/green-idea/thumb/green-idea-thumb-poster.jpg",
      videoSize: { width: 602, height: 338 },
    },
    title: "Green Idea",
    description: "Description",
    tags: [TAG["2D"], TAG.ADVERTISING],
    vimeos: [
      {
        id: 580000376,
      },
    ],
    credits: {
      brand: "Green Idea",
    },
    images: [
      "/projects/green-idea/08d99c123100343.610060b1d2f81.gif",
      "/projects/green-idea/0a0788123100343.610060b1d3cd4.gif",
      "/projects/green-idea/358a6e123100343.6101347d777bc.png",
      "/projects/green-idea/42688f123100343.6101347d77ebe.png",
      "/projects/green-idea/748035123100343.610060b1d36cb.gif",
      "/projects/green-idea/8598d0123100343.6101339bddd6e.png",
      "/projects/green-idea/a2d472123100343.610060b1d5050.gif",
      "/projects/green-idea/cdc08f123100343.6101339bdd80e.gif",
      "/projects/green-idea/e13e83123100343.610060b1d4b23.gif",
      "/projects/green-idea/image (29).png",
    ],
    texts: [
      // "Текст"
    ],
    layout: [
      [{ type: "image", index: 5, cols: 12 }],
      [{ type: "image", index: 3, cols: 12 }],
      [{ type: "image", index: 6, cols: 12 }],
      [{ type: "image", index: 7, cols: 12 }],
      [{ type: "image", index: 9, cols: 12 }],
      [{ type: "image", index: 1, cols: 12 }],
      [{ type: "image", index: 4, cols: 12 }],
      [{ type: "image", index: 8, cols: 12 }],
      [{ type: "image", index: 2, cols: 12 }],
      [{ type: "image", index: 0, cols: 12 }],
    ],
  },

  {
    slug: "unprincipled",
    size: 6,
    thumb: {
      origin: "/projects/unprincipled/thumb/unprincipled-thumb.webm",
      video: "/projects/unprincipled/thumb/unprincipled-thumb-converted.webm",
      poster: "/projects/unprincipled/thumb/unprincipled-thumb-poster.jpg",
      videoSize: { width: 602, height: 256 },
    },
    title: "Беспринципные / Титры",
    description: "Description",
    tags: [TAG["2D"], TAG["3D"], TAG.BUMPER],
    vimeos: [
      {
        id: 476301197,
        aspectRatio: 2.35,
        fullWidth: true,
      },
    ],
    images: [
      "/projects/unprincipled/189026123100837.61011435d1168.gif",
      "/projects/unprincipled/3809fa123100837.61011435d01fb.png",
      "/projects/unprincipled/406b36123100837.61011435d16f2.gif",
      "/projects/unprincipled/fc88ab123100837.61011435d0963.gif",
      "/projects/unprincipled/7735fc123100837.61011435cf70d.png",
      "/projects/unprincipled/8b383a123100837.61011435cfc80.png",
    ],
    texts: [
      // "Текст"
    ],
    layout: [
      [{ type: "image", index: 0, cols: 12 }],
      [{ type: "image", index: 1, cols: 12 }],
      [{ type: "image", index: 2, cols: 12 }],
      [{ type: "image", index: 3, cols: 12 }],
      [{ type: "image", index: 4, cols: 12 }],
      [{ type: "image", index: 5, cols: 12 }],
    ],
  },

  {
    slug: "bigcup",
    size: 4,
    thumb: {
      origin: "/projects/bigcup/thumb/bigcup_thumb.webm",
      video: "/projects/bigcup/thumb/bigcup_thumb-converted.webm",
      poster: "/projects/bigcup/thumb/bigcup_thumb-poster.jpg",
      videoSize: { width: 392, height: 220 },
    },
    title: "Большая кружка",
    description: "Description",
    tags: [TAG["3D"], TAG.EFFECTS_2D, TAG.ADVERTISING],
    vimeos: [
      {
        id: 747611807,
      },
    ],
    images: [],
    videosOrigin: ["/projects/bigcup/pear1.3.webm"],
    videos: ["/projects/bigcup/pear1.3-converted.webm"],
    texts: [
      "Рекламный ролик, где бутылки ряженки, чашки и фрукты не скрывают своих чувств.",
    ],

    layout: [[{ type: "video", index: 0, cols: 12 }]],
  },

  {
    slug: "hospitality",
    size: 3,
    thumb: {
      origin: "/projects/hospitality/thumb/hospitality-thumb.webm",
      video: "/projects/hospitality/thumb/hospitality-thumb-converted.webm",
      poster: "/projects/hospitality/thumb/hospitality-thumb-poster.jpg",
      videoSize: { width: 288, height: 162 },
    },
    title: "Мостуризм / 6 историй",
    description: "Description",
    tags: [TAG["2D"], TAG.FILM],
    vimeos: [
      {
        id: 644262497,
      },
    ],
    credits: {
      client: "Департамент туризма Москвы",
    },

    images: [
      "/projects/hospitality/IMG_3182.JPG",
      "/projects/hospitality/IMG_3181.JPG",
      "/projects/hospitality/scene04902.png",
      "/projects/hospitality/IMAGE 2021-08-21 22_25_31.jpg",
      "/projects/hospitality/scene06758.png",
    ],
    texts: [
      "6 эпизодов о гостеприимстве — про то как сближаются туристы и жители Москвы. Эти истории о приключениях и взаимопомощи показывают школьникам (чему мы очень рады).",
      "Любим этот проект за сценарии и персонажей.",
    ],

    layout: [
      [{ type: "text", index: 1, cols: 12 }],
      [{ type: "image", index: 0, cols: 12 }],
      [{ type: "image", index: 1, cols: 12 }],
      [{ type: "image", index: 2, cols: 12 }],
      [{ type: "image", index: 3, cols: 12 }],
      [{ type: "image", index: 4, cols: 12 }],
    ],
  },

  {
    slug: "shedevrum",
    size: 5,
    thumb: {
      origin: "/projects/shedevrum/thumb/ya_shedevrium.webm",
      video: "/projects/shedevrum/thumb/ya_shedevrium-converted.webm",
      poster: "/projects/shedevrum/thumb/ya_shedevrium-poster.jpg",
      videoSize: { width: 498, height: 280 },
    },
    title: "Яндекс / Шедеврум",
    description: "Description",
    tags: [TAG.AI, TAG.CLIP],
    vimeos: [
      {
        id: 1165318329,
        hash: "774fccab78",
      },
    ],
    credits: {
      brand: "Яндекс",
      production: "Рабочее название",
    },

    images: [
      "/projects/shedevrum/1.png",
      "/projects/shedevrum/2.png",
      "/projects/shedevrum/3.png",
      "/projects/shedevrum/4.png",
      "/projects/shedevrum/5.png",
      "/projects/shedevrum/6.png",
      "/projects/shedevrum/7.png",
    ],
    texts: [
      "Генеративные ёлочные игрушки летят на ёлку под заводной трек — новогодний тизер «Шедевриум» для Яндекса.",
      "Была задача за неделю собрать веселый новогодний клип, где поют ёлочные игрушки, сгенерированные нейронкой Яндекса, Шедевриум. От игрушек рябило в глазах..",
      "Елки тоже не остались без внимания – подводная, ледяная, березовая, из тарелок, войлока...",
    ],
    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [{ type: "text", index: 1, cols: 7 }],
      [{ type: "image", index: 0, cols: 12 }],
      [{ type: "text", index: 2, cols: 7 }],
      [{ type: "image", index: 1, cols: 8, colStart: 3 }],
      [{ type: "image", index: 2, cols: 8, colStart: 3 }],
      [{ type: "image", index: 3, cols: 8, colStart: 3 }],
      [{ type: "image", index: 4, cols: 12, colStart: 0 }],
      [{ type: "image", index: 5, cols: 8, colStart: 3 }],
      [{ type: "image", index: 6, cols: 8, colStart: 3 }],
    ],
  },

  {
    slug: "presents-fest-2024",
    size: 4,
    thumb: {
      origin:
        "/projects/presents-fest-2024/thumb/presents-fest-2024-thumb.webm",
      video:
        "/projects/presents-fest-2024/thumb/presents-fest-2024-thumb-converted.webm",
      poster:
        "/projects/presents-fest-2024/thumb/presents-fest-2024-thumb-poster.jpg",
      videoSize: { width: 392, height: 220 },
    },
    title: "VK / Фестиваль подарков",
    description: "Description",
    tags: [TAG["3D"], TAG.ADVERTISING],
    vimeos: [
      {
        id: 1091235348,
        hash: "4a6c52f315",
      },
    ],
    credits: {
      brand: "VK",
    },

    images: [
      "/projects/presents-fest-2024/image.png",
      "/projects/presents-fest-2024/telegram-cloud-photo-size-2-5451940346792631033-y.jpg",
    ],
    texts: [
      "Небольшое 3D-промо про полет подарка в космических просторах.",
      "Любопытно как много вариантов перебрали, прежде чем выбрали того самого персонажа.",
    ],

    layout: [
      [{ type: "text", index: 1, cols: 7 }],
      [{ type: "image", index: 0, cols: 12 }],
      [{ type: "image", index: 1, cols: 12 }],
    ],
  },

  {
    slug: "zvuk-2",
    size: 3.5,
    thumb: {
      origin: "/projects/zvuk-2/thumb/zvuk-2-thumb.webm",
      video: "/projects/zvuk-2/thumb/zvuk-2-thumb-converted.webm",
      poster: "/projects/zvuk-2/thumb/zvuk-2-thumb-poster.jpg",
      videoSize: { width: 340, height: 192 },
    },
    title: "Звук 2",
    description: "Description",
    tags: [TAG["2D"], TAG.ADVERTISING],
    vimeos: [
      {
        id: 926255997,
      },
    ],
    credits: {
      brand: "СБЕР Звук",
    },
    images: [
      // "/projects/zvuk-2/1.jpg"
    ],
    texts: ["Текст"],
  },

  {
    slug: "taxi-v2",
    size: 3.5,
    thumb: {
      origin: "/projects/taxi-v2/thumb/taxi-v2-thumb.webm",
      video: "/projects/taxi-v2/thumb/taxi-v2-thumb-converted.webm",
      poster: "/projects/taxi-v2/thumb/taxi-v2-thumb-poster.jpg",
      videoSize: { width: 340, height: 192 },
    },
    title: "Такси под прикрытием / Титры",
    description: "Description",
    tags: [TAG["2D"], TAG.BUMPER],
    vimeos: [
      {
        id: 807825908,
      },
    ],
    images: [],
    texts: [
      'Открывающие титры для сериала "Такси под прикрытием".',
      "Векторная анимация. Хотелось сделать персонажей простых, но с классной динамикой.",
      "Много драк и всякого экшна!",
    ],
    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [{ type: "text", index: 1, cols: 7 }],
      [{ type: "text", index: 2, cols: 7 }],
    ],
  },
  {
    slug: "saint-spring-v3",
    size: 3.5,
    thumb: {
      origin: "/projects/saint-spring-v3/thumb/saint-spring-v3-thumb.webm",
      video:
        "/projects/saint-spring-v3/thumb/saint-spring-v3-thumb-converted.webm",
      poster:
        "/projects/saint-spring-v3/thumb/saint-spring-v3-thumb-poster.jpg",
      videoSize: { width: 340, height: 192 },
    },
    title: "Святой Источник",
    description: "Description",
    tags: [TAG.STOPMOTION, TAG.ADVERTISING],
    vimeos: [
      {
        id: 681815409,
      },
    ],
    credits: {
      brand: "Святой Источник",
    },

    images: [
      "/projects/saint-spring-v3/image (31).png",
      "/projects/saint-spring-v3/photo_2026-05-04_20-19-35.jpg",
      "/projects/saint-spring-v3/image (32).png",
      "/projects/saint-spring-v3/image (33).png",
    ],
    videosOrigin: ["/projects/saint-spring-v3/Si_animatic_11.mp4"],
    videos: ["/projects/saint-spring-v3/Si_animatic_11-converted.webm"],
    texts: [
      'Стопмоушен реклама воды "Святой источник" о бутылках разного размера.',
      "Три сцены и три бутылки для разных ситуаций: большая — для дома, средняя — для прогулок, а маленькая — для занятий спортом.",
      "Мы сделали каждую бутылку персонажем в своем окружении и создали разные декорации. Кровать сделана из стопки футболок, а беговая дорожка — из карандашей. Картинку настроили, используя фирменные цвета и стиль: чистый, свежий и нежный. Мы также добавили крошечные 2D-эффекты, чтобы всё задышало.",
    ],

    layout: [
      [{ type: "text", index: 1, cols: 7 }],
      [
        { type: "video", index: 0, cols: 7 },
        { type: "image", index: 0, cols: 5 },
      ],
      [{ type: "text", index: 2, cols: 7 }],
      [{ type: "image", index: 1, cols: 12 }],
      [{ type: "image", index: 3, cols: 12 }],
      [{ type: "image", index: 2, cols: 5 }],
    ],
  },

  {
    slug: "supermarket-trollys-dream-v1",
    size: 3.5,
    thumb: {
      origin:
        "/projects/supermarket-trollys-dream-v1/thumb/supermarket-trollys-dream-v1-thumb.webm",
      video:
        "/projects/supermarket-trollys-dream-v1/thumb/supermarket-trollys-dream-v1-thumb-converted.webm",
      poster:
        "/projects/supermarket-trollys-dream-v1/thumb/supermarket-trollys-dream-v1-thumb-poster.jpg",
      videoSize: { width: 340, height: 192 },
    },
    title: "Перекрёсток / Тележкин сон",
    description: "Description",
    tags: [TAG.INSTALLATION],
    vimeos: [
      {
        id: 641474779,
      },
    ],
    credits: {
      client: "X5 Retail Group",
      brand: "Перекрёсток",
    },

    images: [
      "/projects/supermarket-trollys-dream-v1/hf_20260504_183405_7a56b989-b538-4e9d-8d5e-397456871cd3.png",
      "/projects/supermarket-trollys-dream-v1/hf_20260504_183554_cb2d1413-39e2-4580-aae6-ba02effdb796.png",
      "/projects/supermarket-trollys-dream-v1/hf_20260504_184001_4d2fd7f5-1329-47dd-aebe-de428ad24faa.png",
      "/projects/supermarket-trollys-dream-v1/photo_2026-05-04_20-19-04.jpg",
      "/projects/supermarket-trollys-dream-v1/photo_2026-05-04_20-19-09.jpg",
      "/projects/supermarket-trollys-dream-v1/image 92.png",
      "/projects/supermarket-trollys-dream-v1/image 91.png",
      "/projects/supermarket-trollys-dream-v1/image 90.png",
      "/projects/supermarket-trollys-dream-v1/image 96.png",
    ],
    texts: [
      `62-метровый объект из переработанного пластика, установленный в витрине флагманского супермаркета «Перекрёсток» на Большой Полянке в Москве.
      Студия Ластик х Сергей "POGA" Погосян.`,

      `Перед началом сборки отсортировали около четырёх тонн очищенного вторсырья.
      В финальной работе использовано 340 кг пластика: упаковка от продуктов, лотки для готовой еды, детские игрушки и другие повседневные предметы. Каждый фрагмент выкладывался вручную и фиксировался горячим клеем, фон покрывали прорезиненной краской.`,

      "Проект получил награду за лучший дизайн на российском конкурсе POSM и in-store-коммуникаций POPAI-2021.",
    ],

    layout: [
      [
        { type: "image", index: 0, cols: 12 },
        { type: "image", index: 1, cols: 12 },
        { type: "image", index: 2, cols: 12 },
      ],
      [{ type: "text", index: 1, cols: 7 }],
      [{ type: "image", index: 3, cols: 12 }],
      [{ type: "image", index: 4, cols: 12 }],
      [
        { type: "image", index: 5, cols: 7 },
        { type: "image", index: 6, cols: 4 },
      ],
      [
        { type: "image", index: 7, cols: 4 },
        { type: "image", index: 8, cols: 7 },
      ],
      [{ type: "text", index: 2, cols: 7, colStart: 6 }],
    ],
  },
  {
    slug: "the-skin-v1",
    size: 4,
    thumb: {
      origin: "/projects/the-skin-v1/thumb/the-skin-v1-thumb.webm",
      video: "/projects/the-skin-v1/thumb/the-skin-v1-thumb-converted.webm",
      poster: "/projects/the-skin-v1/thumb/the-skin-v1-thumb-poster.jpg",
      videoSize: { width: 392, height: 220 },
    },
    title: "ТЦ Ривьера / Шкура",
    description: "Description",
    tags: [TAG.INSTALLATION],
    vimeos: [
      {
        id: 515761986,
      },
    ],
    credits: {
      client: "XScompany, ТЦ Riviera",
    },
    images: [
      "/projects/the-skin-v1/thumb/28097a130993239.618bd967e9636.png",
      "/projects/the-skin-v1/thumb/0996ee130993239.618bd967eabbd.png",
      "/projects/the-skin-v1/thumb/61f227130993239.618c4809d9621.png",
      "/projects/the-skin-v1/thumb/01e86c130993239.618bd967e89c5.png",
      "/projects/the-skin-v1/thumb/66aa18130993239.618c4808bbd2a.png",
      "/projects/the-skin-v1/thumb/4f8030130993239.618bd966cbea2.png",
      "/projects/the-skin-v1/thumb/d6c37f130993239.618c480a38b6f.jpg",
      "/projects/the-skin-v1/thumb/d0fad9130993239.618c480965e67.jpg",
      "/projects/the-skin-v1/thumb/8650b4130993239.618c480966342.jpg",
      "/projects/the-skin-v1/thumb/487df9130993239.618c480a39208.jpg",
      "/projects/the-skin-v1/thumb/47c0b0130993239.618bd967e9bab.png",
      "/projects/the-skin-v1/thumb/a13e8c130993239.618bd967ea173.png",
      "/projects/the-skin-v1/thumb/07c6ad130993239.618bd966cc84a.png",
      "/projects/the-skin-v1/thumb/959fb8130993239.618bd967e8f3c.png",
      "/projects/the-skin-v1/thumb/1298e4130993239.618bd966cc410.png",
      "/projects/the-skin-v1/thumb/f8c3e7130993239.618bd967ea617.png",
    ],
    texts: [
      "Инсталляция из вторсырья для экофестиваля, посвящённого переработке отходов и осознанному потреблению.",
      "Среди десяти приглашённых арт-групп мы представили работу «Шкура / The Skin» — инсталляцию 15×5 метров в форме тигриной шкуры, полностью собранную из пластикового мусора.",
      "Проект реализовали совместно с командой под руководством Сергея «Póga» Погосяна.",
      "Для мозаики использовали очищенное вторсырьё: стаканчики из-под йогурта, ведерки из-под мороженого, бутылки из-под бытовой химии и тд. Цвет и фактура складывались диктовались самими материалами.",
      "Отдельным вызовом стало размещение 300-килограммовой конструкции на витрине торгового центра. Инсталляцию пришлось продумать не только как художественный объект, но и как инженерную систему.",
      "Без морализаторства, сигнализируя о  масштабе пластиковых отходов и потенциале переработки, работа стала знаковой в городском пространстве и после окончания фестиваля осталась в ТЦ на пару лет.",
    ],
    layout: [
      // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
      [{ type: "image", index: 0, cols: 12 }],
      [{ type: "image", index: 1, cols: 12 }],
      [{ type: "text", index: 1, cols: 7 }],
      [{ type: "image", index: 2, cols: 10, colStart: 2 }],
      [{ type: "image", index: 3, cols: 12 }],
      [{ type: "image", index: 4, cols: 12 }],
      [{ type: "text", index: 2, cols: 7 }],
      [{ type: "image", index: 5, cols: 10, colStart: 2 }],
      [{ type: "text", index: 3, cols: 7 }],
      [
        { type: "image", index: 6, cols: 5 },
        { type: "image", index: 7, cols: 7 },
      ],
      [{ type: "text", index: 4, cols: 7 }],
      [
        { type: "image", index: 8, cols: 6 },
        { type: "image", index: 9, cols: 6 },
      ],
      [{ type: "image", index: 10, cols: 12 }],
      [
        { type: "image", index: 11, cols: 4 },
        { type: "image", index: 12, cols: 4 },
        { type: "image", index: 13, cols: 4 },
      ],
      [{ type: "text", index: 5, cols: 7 }],
      [{ type: "image", index: 14, cols: 6, colStart: 4 }],
      [{ type: "image", index: 15, cols: 12 }],
    ],
  },
];

export type ProjectSlug = (typeof projects)[number]["slug"];
