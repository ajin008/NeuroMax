import localFont from "next/font/local";

export const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500", // Changed from 700 to 500 for Medium
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700", // Changed from 800 to 700 for Bold
      style: "normal",
    },
  ],
});
