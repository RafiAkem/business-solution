import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "EasyIzin - Jalan Pintas Menuju Legalitas",
  description:
    "EasyIzin membantu Anda dalam pengurusan legalitas usaha, pajak, dan pengembangan bisnis.",
  icons: {
    icon: "/IconWEB.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
