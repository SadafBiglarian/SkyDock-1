import localFont from "next/font/local";
export const vazir = localFont({
  src: [
    {
      path: "../public/fonts/vazir/Vazir-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-vazir",
});


