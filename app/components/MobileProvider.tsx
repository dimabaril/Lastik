"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

const MobileContext = createContext(false);

const subscribe = () => () => {};
const getSnapshot = () => window.matchMedia("(hover: none)").matches;
const getServerSnapshot = () => false;

export function MobileProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
}

export function useIsMobile() {
  return useContext(MobileContext);
}
