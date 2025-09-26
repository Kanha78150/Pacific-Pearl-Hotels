import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Gilda_Display } from "next/font/google";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer";
import ClientWrapper from "../../components/layout/ClientWrapper";

// Local Fonts
const generalSans = localFont({
  src: [
    {
      path: "../../public/fonts/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GeneralSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const gilda = Gilda_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gilda-display",
});

export const metadata: Metadata = {
  title: "Pacific Pearl Hotels Real Estate | Luxury Properties & Investments",
  description:
    "Discover premium real estate and hospitality investments with Pacific Pearl Hotels (PPH). Explore luxury hotels, resorts, and properties designed for comfort, elegance, and high returns across the United States.",

  keywords: [
    "Real Estate",
    "Luxury Hotels",
    "Hotel Investments",
    "Hospitality Real Estate",
    "PPH Properties",
    "Pacific Pearl Hotels",
    "Commercial Real Estate",
    "Luxury Resorts",
    "Property Investment",
  ],

  authors: [{ name: "Pacific Pearl Hotels" }],
  creator: "Pacific Pearl Hotels",
  publisher: "Pacific Pearl Hotels",

  icons: {
    icon: [
      {
        url: "/images/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "/images/favicon/favicon.ico",
    apple: "/images/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${satoshi.variable} ${gilda.variable}`}
    >
      <body>
        <ClientWrapper>
          <Navbar />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
