export const TAG = {
  "2D": { ru: "2D", en: "2D" },
  "3D": { ru: "3D", en: "3D" },
  "3D_VR": { ru: "3D-VR", en: "3D-VR" },
  AI: { ru: "AI", en: "AI" },
  MUSEUM: { ru: "музей", en: "museum" },
  ADVERTISING: { ru: "реклама", en: "advertising" },
  EFFECTS_2D: { ru: "2D эффекты", en: "2D effects" },
  CLIP: { ru: "клип", en: "music video" },
  CAMPAIGN: { ru: "имидж", en: "campaign" },
  MOTION: { ru: "моушн", en: "motion" },
  BUMPER: { ru: "заставка", en: "title sequence" },
  FILM: { ru: "фильм", en: "film" },
  CODING: { ru: "кодинг", en: "coding" },
  INSTALLATION: { ru: "инсталляция", en: "installation" },
  STOPMOTION: { ru: "stopmotion", en: "stopmotion" },
} as const;

export type Tag = (typeof TAG)[keyof typeof TAG];

// Flat list for iteration (filters, UI)
export const tags = Object.values(TAG);
