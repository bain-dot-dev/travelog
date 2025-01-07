import localFont from "next/font/local";

export const circular = localFont({
  src: [
    {
      path: "../public/fonts/circular-std-book-200.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/circular-std-medium-500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/circular-std-bold-700.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/circular-std-black-900.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-circular",
});
