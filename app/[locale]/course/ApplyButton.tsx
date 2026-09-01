"use client";

import { useState } from "react";
import ApplicationForm from "./ApplicationForm";

interface ApplyButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function ApplyButton({ className, children }: ApplyButtonProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      {open && <ApplicationForm onClose={() => setOpen(false)} />}
    </>
  );
}
