"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Client-side only code
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {children}
    </div>
  );
}
