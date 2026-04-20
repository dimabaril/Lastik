// Single source of truth — add new tags here
export const TAG = {
  VFX: "vfx",
  "3D": "3D",
  "2D": "2D",
  ADVERTISING: "реклама",
  AI: "ИИ",
  MIXED_MEDIA: "mixed media",
  INTERFACES: "интерфейсы",
  CHARACTER_DESIGN: "дизайн персонажей",
  MUSEUM: "музей",

  MOTION: "motion",
  ART: "арт",
  AUTHOR: "авторское",
  TRANSPORT: "транспорт",
  EVENT: "ивент",
} as const;

export type Tag = (typeof TAG)[keyof typeof TAG];

// Flat list for iteration (filters, UI)
export const tags = Object.values(TAG);
