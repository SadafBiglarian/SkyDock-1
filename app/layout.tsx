import "@/app/globals.css";
import type { Metadata } from "next";
import { vazir } from "./fonts";

export const metadata: Metadata = {
  title: "SkyDock",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.variable} font-vazir `}>
        {/* min-h-screen */}
        {children}
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
