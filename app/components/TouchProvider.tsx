"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

const TouchContext = createContext(false);

const subscribe = () => () => {};

export function TouchProvider({ children }: { children: React.ReactNode }) {
  const isTouch = useSyncExternalStore(
    subscribe,
    () => window.matchMedia("(hover: none)").matches,
    () => false,
  );

  return (
    <TouchContext.Provider value={isTouch}>{children}</TouchContext.Provider>
  );
}

export function useIsTouch() {
  return useContext(TouchContext);
}
