// Title: Музей Транспорта Москвы
// Tags: 2D / 3D / AI / музей
// Client: Музей Транспорта Москвы
// Agency: Red Pepper Films

// Title: СБЕР / Оплата улыбкой
// Tags: 3D / реклама
// Brand: СБЕР
// Agency: MosAIc

// Title: ВТБ / Переводы
// Tags: 3D / 2D эффекты / реклама
// Brand: ВТБ
// Agency: MosAIc

// Title: МТС / Neku-sai
// Tags: 2D / клип
// Brand: МТС
// Production: Human

// Title: Яндекс / Инклюзия
// Tags: 2D / имидж
// Brand: Яндекс

// Title: MAIL.RU / Ребрендинг
// Tags: 3D / реклама
// Brand: mail.ru

// Title: Яндекс / Шедеврум
// Tags: AI / клип
// Brand: Яндекс
// Production: Рабочее название

// Title: VK / Маруся x NEO
// Tags: 2D / 3D / реклама
// Brand: VK

// Title: Делимобиль
// Tags: 3D / реклама
// Brand: Делимобиль

// Title: Love Generation
// Tags: 3D / реклама
// Brand: Love Generation

// Title: VK / Mini Apps
// Tags: 3D / 2D эффекты / реклама
// Brand: VK

// Title: СБЕР / Кредит 5%
// Tags: 2D / моушн / реклама
// Brand: СБЕР
// Production: Hype

// Title: СБЕР / Звук
// Tags: 2D / 3D / реклама / клип
// Brand: СБЕР Звук

// Title: Такси под прикрытием / Титры
// Tags: 2D / заставка

// Title: Волковская Пивоварня
// Tags: 2D / реклама
// Brand: Волковская Пивоварня

// Title: Уралсиб / HR
// Tags: 2D / реклама
// Brand: Уралсиб

// Title: R.O.C.S.
// Tags: 3D / реклама
// Brand: R.O.C.S.

// Title: Фестиваль Дух огня / Мифы Манси
// Tags: 2D / 3D / фильм

// Title: СБЕР / Еаптека
// Tags: 3D / реклама
// Brand: ЕАПТЕКА
// Production: Zebra Hero

// Title: Green Idea
// Tags: 2D / реклама
// Brand: Green Idea

// Title: Осторожно, Собчак!
// Tags: 2D / заставка
// Client: Осторожно, Собчак!

// Title: Хочу всё знать!
// Tags: 2D / заставка
// Client: Киностудия им. Горького

// Title: Рамблер
// Tags: 3D / реклама
// Production: Zebra Hero

// Title: Музей Москвы
// Tags: 2D / 3D / музей
// Client: Музей Москвы

// Title: Мостуризм / 6 историй
// Tags: 2D / фильм
// Client: Департамент туризма Москвы

// Title: VK / Фестиваль подарков
// Tags: 3D / реклама
// Brand: VK

// Title: Большая Кружка
// Tags: 3D / 2D эффекты / реклама
// Brand: Большая кружка

// Title: Беспринципные / Титры
// Tags: 2D / 3D / заставка

// Title: Святой Источник
// Tags: stopmotion / реклама
// Brand: Святой Источник

// Title: ТЦ Ривьера / Шкура
// Tags: инсталляция
// Client: XScompany, ТЦ Riviera

// Title: Перекрёсток / Тележкин сон
// Tags: инсталляция
// Client: X5 Retail Group
// Brand: Перекрёсток

// Title: Город открытий
// Tags: 2D / 3D-VR / кодинг / инсталляция
// Client: Департамент туризма Москвы

// Tags: 2D / реклама
// Brand: Сбер Звук

// Single source of truth — add new tags here
export const TAG = {
  "2D": "2D",
  "3D": "3D",
  "3D_VR": "3D-VR",
  AI: "AI",
  MUSEUM: "музей",
  ADVERTISING: "реклама",
  EFFECTS_2D: "2D эффекты",
  CLIP: "клип",
  IMAGE: "имидж",
  MOTION: "моушн",
  BUMPER: "заставка",
  FILM: "фильм",
  CODING: "кодинг",
  INSTALLATION: "инсталляция",
  STOPMOTION: "stopmotion",
} as const;

export type Tag = (typeof TAG)[keyof typeof TAG];

// Flat list for iteration (filters, UI)
export const tags = Object.values(TAG);
