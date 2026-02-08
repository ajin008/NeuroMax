"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

// Move the dynamic import here
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
