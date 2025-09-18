import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/footer";

const generalSans = localFont({
  src: [
    {
      path: "../../public/Font/GeneralSans_Complete/Fonts/OTF/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
});

const gildaDisplay = localFont({
  src: [
    {
      path: "../../public/Font/Gilda_Display/GildaDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gilda-display",
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/Font/Satoshi_Complete/Fonts/OTF/Satoshi-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Font/Satoshi_Complete/Fonts/OTF/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Font/Satoshi_Complete/Fonts/OTF/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Real Estate - PPH",
  description: "Frontend built with Next.js, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${gildaDisplay.variable} ${satoshi.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
