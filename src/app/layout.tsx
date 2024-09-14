import type { Metadata } from "next";
import { Lato, DM_Sans, Questrial, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const questrial = Questrial({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-questrial",
});

const sourceSans3 = Source_Sans_3({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-3",
});

export const metadata: Metadata = {
  title: "JALAN PINTAS MENUJU LEGALITAS | EasyIzin",
  description: "JALAN PINTAS MENUJU LEGALITAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${dmSans.variable} ${questrial.variable} ${sourceSans3.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
