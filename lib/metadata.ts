// app/lib/metadata.ts
import type { Metadata } from "next";

export const rootMetadata: Metadata = {
  title: {
    default: "Class 10 CBSE Webinar",
    template: "%s | CBSE Prep",
  },
  icons: {
    icon: "/logo.png",
  },
  description:
    "Master 100 Most-Asked Questions in 2 Hours and boost your board exam scores.",
};
