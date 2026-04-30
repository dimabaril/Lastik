"use client";
import React from "react";

export default function BackButton({
  className = "",
  ariaLabel = "Back",
  children,
}: {
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={`cursor-pointer ${className}`}
      aria-label={ariaLabel}
      onClick={() => window.history.back()}
    >
      {children}
    </button>
  );
}
