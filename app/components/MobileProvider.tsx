"use client";

import { createContext, useContext, useState } from "react";

const MobileContext = createContext(false);

export function MobileProvider({ children }: { children: React.ReactNode }) {
  const [isMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: none)").matches,
  );

  return (
    <MobileContext.Provider value={isMobile}>
      {children}
    </MobileContext.Provider>
  );
}

export function useIsMobile() {
  return useContext(MobileContext);
}
