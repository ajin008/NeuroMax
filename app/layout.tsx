import { satoshi } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CBSE 100 Most-Asked Questions | Boost Board Exam Scores",
  description:
    "Master the 100 most-repeated CBSE questions in 2 hours. Join our live session and boost your board exam scores.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${satoshi.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
