"use client";

import { useEffect } from "react";

export default function MobileReloadHandler() {
  useEffect(() => {
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    // Определяем любой мобильный браузер
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    if (isMobile) {
      const handler = () => {
        if (document.visibilityState === "visible") {
          window.location.reload();
        }
      };
      document.addEventListener("visibilitychange", handler);
      return () => {
        document.removeEventListener("visibilitychange", handler);
      };
    }
  }, []);

  return null;
}
