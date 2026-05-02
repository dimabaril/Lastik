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
  video?: string;
  poster?: string;
};

export type Vimeo = {
  id: number;
  hash?: string;
  aspectRatio?: number;
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
  videos?: string[];
  texts: string[];
  layout?: LayoutItem[][];
};

export const projects: Project[] = [
  {
    slug: "museum-of-transport",
    size: 12,
    thumb: {
      video: "/projects/trans-museum/thumb/trans_museum.webm",
      poster: "/projects/trans-museum/thumb/trans_museum-poster.jpg",
    },
    title: "Музей Транспорта Москвы",
    description: "Description",
    tags: [TAG["2D"], TAG["3D"], TAG.AI, TAG.MUSEUM],
    vimeos: [
      {
        id: 1187717775,
        hash: "7a46d91482",
        aspectRatio: 4,
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
    videos: [
      "/projects/trans-museum/MASTER 1920x480_12_1.mp4",
      "/projects/trans-museum/MASTER preview 15-04_6.mp4",
      "/projects/trans-museum/MASTER preview 15-04_7.mp4",
    ],
    texts: [
      "13-минутный mix-media фильм про то, как в гараже Мельникова в Москве появляется Музей транспорта — архивы, интервью, чертежи и идеи команды складываются в одну историю.",
      "Мы наполнили реалистичные интерьеры гаража Мельникова жизнерадостными рисованными посетителями.",
      "Персонажи объединили разные эпохи и пространства. Хотелось показать, что годы идут, транспорт меняется, но сама ситуация передвижения остается.",
      "Нам очень хотелось больше крафтовых, живых элементов. История про сотрудника музея, как он сам напал на след экспоната, и как по крупицам собиралась коллекция музея, идеально подошла для покадровой анимации.",
      `Эпизод про детскую линию в экспозиции мы, конечно, рисовали как дети.
        И тут тоже был простор для покадровой анимации.

        Эти части здорово сбалансировали 3D и ИИ материал.`,
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
      [{ type: "text", index: 2, cols: 7, colStart: 6 }],
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
      video: "/projects/love-generation/thumb/love_generation-thumb.webm",
      poster:
        "/projects/love-generation/thumb/love_generation-thumb-poster.jpg",
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
    videos: [
      "/projects/love-generation/PALETKA_backstage.mp4",
      "/projects/love-generation/GLOSS_backstage.mp4",
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
    size: 6,
    thumb: {
      video: "/projects/vk-neo/thumb/NEO_pw.webm",
      poster: "/projects/vk-neo/thumb/NEO_pw-poster.jpg",
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
    videos: ["/projects/vk-neo/neo_animatic.mp4"],
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
    size: 2,
    thumb: {
      video: "/projects/sber-terminal/thumb/SBER_terminal.webm",
      poster: "/projects/sber-terminal/thumb/SBER_terminal-poster.jpg",
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
      video: "/projects/vtb-1/thumb/vtb-1-thumb.webm",
      poster: "/projects/vtb-1/thumb/vtb-1-thumb-poster.jpg",
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
    videos: [
      "/projects/vtb-1/vtb_AI textures.mp4",
      "/projects/vtb-1/vtb_layers_1.mp4",
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
      video: "/projects/vk-mini-app/thumb/VK_MiniApps.webm",
      poster: "/projects/vk-mini-app/thumb/VK_MiniApps-poster.jpg",
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
    size: 2,
    thumb: {
      video: "/projects/rocs/thumb/rocs.webm",
      poster: "/projects/rocs/thumb/rocs-poster.jpg",
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
      // "/projects/rocs/1.jpg"
    ],
    texts: ["Текст"],
  },

  {
    slug: "zvuk",
    size: 6,
    thumb: {
      video: "/projects/zvuk/thumb/zvuk-thumb.webm",
      poster: "/projects/zvuk/thumb/zvuk-thumb-poster.jpg",
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
      video: "/projects/mts/thumb/mts-thumb.webm",
      poster: "/projects/mts/thumb/mts-thumb-poster.jpg",
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
    videos: [
      "/projects/mts/Snippet_FINAL.webm",
      "/projects/mts/Common_reel_MASTER_version.webm",
      "/projects/mts/Reel_Black_FINAL.webm",
      "/projects/mts/vocaloids_001_v001.webm",
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
      video: "/projects/yandex-incl/thumb/ya_incl-thumb.webm",
      poster: "/projects/yandex-incl/thumb/ya_incl-thumb-poster.jpg",
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
      video: "/projects/mail-ru/thumb/mail-thumb.webm",
      poster: "/projects/mail-ru/thumb/mail-thumb-poster.jpg",
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
    videos: [
      "/projects/mail-ru/MAIL_anim_1_v07.mp4",
      "/projects/mail-ru/MAIL_anim_3_v02 (2).mp4",
      "/projects/mail-ru/MAIL_anim_1_v02.mp4",
      "/projects/mail-ru/MAIL_anim_fin_1_v02.mp4",
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
      video: "/projects/mansi/thumb/mansi-thumb.webm",
      poster: "/projects/mansi/thumb/mansi-thumb-poster.jpg",
    },
    title: "Фестиваль Дух огня / Мифы Манси",
    description: "Description",
    tags: [TAG["2D"], TAG["3D"], TAG.FILM],
    // vimeoId: 779626942,
    vimeos: [
      {
        id: 779626942,
      },
    ],

    images: [
      // "/projects/mansi/1.jpg"
    ],
    texts: ["Текст"],
  },

  {
    slug: "eapteka",
    size: 3,
    thumb: {
      video: "/projects/eapteka/thumb/TAB_16_v02.webm",
      poster: "/projects/eapteka/thumb/TAB_16_v02-poster.png",
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

    images: [
      // "/projects/eapteka/Screenshot 2026-03-18 at 14.30.24.png",
      // "/projects/eapteka/000000.png",
      // "/projects/eapteka/000000 (1).png",
    ],
    videos: [
      "/projects/eapteka/faces.webm",
      "/projects/eapteka/gif1.webm",
      "/projects/eapteka/gif2.webm",
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
      video: "/projects/delimobil/thumb/delimobil.webm",
      poster: "/projects/delimobil/thumb/delimobil-poster.jpg",
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
      video: "/projects/sobchak/thumb/sobchak_thumb.webm",
      poster: "/projects/sobchak/thumb/sobchak_thumb-poster.jpg",
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
      video: "/projects/mosmuseum/thumb/mosmuseum-thumb.webm",
      poster: "/projects/mosmuseum/thumb/mosmuseum-thumb-poster.jpg",
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
      // "/projects/mosmuseum/1.jpg"
    ],
    texts: ["Текст"],
  },

  {
    slug: "volchok",
    size: 5,
    thumb: {
      video: "/projects/volchok/thumb/volchok-thumb.webm",
      poster: "/projects/volchok/thumb/volchok-thumb-poster.jpg",
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
      // "/projects/volchok/1.jpg"
    ],
    texts: ["Текст"],
  },

  {
    slug: "rambler",
    size: 6,
    thumb: {
      video: "/projects/rambler/thumb/rambler_thumb.webm",
      poster: "/projects/rambler/thumb/rambler_thumb-poster.jpg",
    },
    title: "Рамблер",
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
      // "/projects/rambler/1.jpg"
    ],
    texts: ["Текст"],
  },

  {
    slug: "sber-high-res",
    size: 7,
    thumb: {
      video: "/projects/sber-high-res/thumb/sber-high-res-thumb.webm",
      poster: "/projects/sber-high-res/thumb/sber-high-res-thumb-poster.jpg",
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
      video:
        "/projects/i-want-to-know-everything/thumb/i-want-to-know-everything-thumb.webm",
      poster:
        "/projects/i-want-to-know-everything/thumb/i-want-to-know-everything-thumb-poster.jpg",
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
      // "/projects/i-want-to-know-everything/1.jpg"
    ],
    texts: ["Текст"],
  },

  {
    slug: "gorod-otkritiy",
    size: 6,
    thumb: {
      video: "/projects/gorod-otkritiy/thumb/gorod_otkritiy.webm",
      poster: "/projects/gorod-otkritiy/thumb/gorod_otkritiy-poster.jpg",
    },
    title: "Город открытий",
    description: "Description",
    tags: [TAG["2D"], TAG["3D_VR"], TAG.CODING, TAG.INSTALLATION],
    vimeos: [
      {
        id: 926255997,
      },
    ],
    credits: {
      client: "Департамент туризма Москвы",
    },
    texts: ["Текст"],
    images: [
      // "/projects/gorod-otkritiy/image.png"
    ],
  },

  {
    slug: "uralsib",
    size: 5,
    thumb: {
      video: "/projects/uralsib/thumb/uralsib-thumb.webm",
      poster: "/projects/uralsib/thumb/uralsib-thumb-poster.jpg",
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
      video: "/projects/green-idea/thumb/green-idea-thumb.webm",
      poster: "/projects/green-idea/thumb/green-idea-thumb-poster.jpg",
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
      // "/projects/green-idea/1.jpg"
    ],
    texts: ["Текст"],
  },

  {
    slug: "unprincipled",
    size: 6,
    thumb: {
      video: "/projects/unprincipled/thumb/unprincipled-thumb.webm",
      poster: "/projects/unprincipled/thumb/unprincipled-thumb-poster.jpg",
    },
    title: "Беспринципные / Титры",
    description: "Description",
    tags: [TAG["2D"], TAG["3D"], TAG.BUMPER],
    vimeos: [
      {
        id: 476301197,
      },
    ],
    images: [
      // "/projects/unprincipled/1.jpg"
    ],
    texts: ["Текст"],
  },

  {
    slug: "bigcup",
    size: 4,
    thumb: {
      video: "/projects/bigcup/thumb/bigcup_thumb.webm",
      poster: "/projects/bigcup/thumb/bigcup_thumb-poster.jpg",
    },
    title: "Большая кружка",
    description: "Description",
    tags: [TAG["3D"], TAG.EFFECTS_2D, TAG.ADVERTISING],
    vimeos: [
      {
        id: 747611807,
      },
    ],
    images: [
      // "/projects/bigcup/1.jpg"
    ],
    texts: ["Текст"],
  },

  {
    slug: "hospitality",
    size: 3,
    thumb: {
      video: "/projects/hospitality/thumb/hospitality-thumb.webm",
      poster: "/projects/hospitality/thumb/hospitality-thumb-poster.jpg",
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
      // "/projects/hospitality/1.jpg"
    ],
    texts: ["Текст"],
  },

  {
    slug: "shedevrum",
    size: 5,
    thumb: {
      video: "/projects/shedevrum/thumb/ya_shedevrium.webm",
      poster: "/projects/shedevrum/thumb/ya_shedevrium-poster.jpg",
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
      video: "/projects/presents-fest-2024/thumb/presents-fest-2024-thumb.webm",
      poster:
        "/projects/presents-fest-2024/thumb/presents-fest-2024-thumb-poster.jpg",
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
      // "/projects/presents-fest-2024/1.jpg"
    ],
    texts: ["Текст"],
  },

  {
    slug: "zvuk-2",
    size: 3.5,
    thumb: {
      video: "/projects/zvuk-2/thumb/zvuk-2-thumb.webm",
      poster: "/projects/zvuk-2/thumb/zvuk-2-thumb-poster.jpg",
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
      video: "/projects/taxi-v2/thumb/taxi-v2-thumb.webm",
      poster: "/projects/taxi-v2/thumb/taxi-v2-thumb-poster.jpg",
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
      video: "/projects/saint-spring-v3/thumb/saint-spring-v3-thumb.webm",
      poster:
        "/projects/saint-spring-v3/thumb/saint-spring-v3-thumb-poster.jpg",
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
      // "/projects/saint-spring-v3/1.jpg"
    ],
    texts: ["Текст"],
  },

  {
    slug: "supermarket-trollys-dream-v1",
    size: 3.5,
    thumb: {
      video:
        "/projects/supermarket-trollys-dream-v1/thumb/supermarket-trollys-dream-v1-thumb.webm",
      poster:
        "/projects/supermarket-trollys-dream-v1/thumb/supermarket-trollys-dream-v1-thumb-poster.jpg",
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
      // "/projects/supermarket-trollys-dream-v1/1.jpg"
    ],
    texts: ["Текст"],
  },
  {
    slug: "the-skin-v1",
    size: 4,
    thumb: {
      video: "/projects/the-skin-v1/thumb/the-skin-v1-thumb.webm",
      poster: "/projects/the-skin-v1/thumb/the-skin-v1-thumb-poster.jpg",
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
