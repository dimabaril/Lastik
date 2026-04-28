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
