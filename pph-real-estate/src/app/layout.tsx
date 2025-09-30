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
  title: "Pacific Pearl Hotels",
  description:
    "Based in San Diego, California, Pacific Pearl Hotels (PPH) is one of the nation's largest independent hotel companies. PPH owns and/or operates 23 lodging properties, encompassing over 6,500 rooms and employing over 3,200 personnel throughout the United States. In addition to overseeing a successful network of independent hotels, boutique properties & resorts, Pacific Pearl Hotel's hotel brand affiliations have included Hyatt, Le Meridien, Marriott, Hilton, Crowne Plaza, DoubleTree by Hilton, Wyndham, Hilton Garden Inn, Radisson, Sheraton, Hampton Inn, Element, Fairfield Inn & Suites by Marriott, Wyndham Garden, Four Points by Sheraton, La Quinta, Park Plaza, Park Inn & Suites by Radisson, Country Inn & Suites, Staybridge Suites, Holiday Inn, Holiday Inn Express, and Best Western.",

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
    "Michael Gallegos",
    "CHA is President and CEO Pacific Pearl Hotels, LLC (PPH).",
    "Hospitality Industry",
    "Real Estate Development",
    "Hotel Management",
    "Luxury Accommodations",
    "Investment Opportunities",
    "Real Estate Portfolio",
    "PPH Real Estate",
    "High-End Properties",
    "Real Estate Services",
    "Real Estate Solutions",
    "Real Estate Experts",
    "Hospitality Investments",
    "Luxury Living",
    "Real Estate Market",
    "Property Management",
    "Real Estate Consulting",
    "PPH",
    "pph",
    "Pacific Pearl Hotels",
  ],

  authors: [
    { name: "Pacific Pearl Hotels" },
    {
      name: "Michael Gallegos (CHA is President and CEO Pacific Pearl Hotels, LLC (PPH).",
      url: "https://pacific-pearl-hotels.vercel.app/about/#leadership",
    },
  ],
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

  metadataBase: new URL("https://pacific-pearl-hotels.vercel.app/"),
  openGraph: {
    title: "Pacific Pearl Hotels",
    description:
      "Based in San Diego, California, Pacific Pearl Hotels (PPH) is one of the nation's largest independent hotel companies. PPH owns and/or operates 23 lodging properties, encompassing over 6,500 rooms and employing over 3,200 personnel throughout the United States. In addition to overseeing a successful network of independent hotels, boutique properties & resorts, Pacific Pearl Hotel's hotel brand affiliations have included Hyatt, Le Meridien, Marriott, Hilton, Crowne Plaza, DoubleTree by Hilton, Wyndham, Hilton Garden Inn, Radisson, Sheraton, Hampton Inn, Element, Fairfield Inn & Suites by Marriott, Wyndham Garden, Four Points by Sheraton, La Quinta, Park Plaza, Park Inn & Suites by Radisson, Country Inn & Suites, Staybridge Suites, Holiday Inn, Holiday Inn Express, and Best Western.",
    url: "https://pacific-pearl-hotels.vercel.app/",
    siteName: "Pacific Pearl Hotels",
    images: [
      {
        url: "/images/Logo.png",
        width: 1200,
        height: 630,
        alt: "Pacific Pearl Hotels",
      },
    ],
    locale: "en-US",
    type: "website",
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
