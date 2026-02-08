//cspell:disable
import { satoshi } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${satoshi.variable} font-sans antialiased scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800`}
        style={{
          overscrollBehavior: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
