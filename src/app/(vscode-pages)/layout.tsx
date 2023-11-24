import AppLayout from "components/VSCode_Components/Layout";
import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetBrains",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    template: "%s | AdamUhh's Portfolio",
    default: "AdamUhh's Portfolio",
  },
  description: "Welcome to my portfolio",
  generator: "Next.js",
  applicationName: "AdamUhh's Portfolio",
  keywords: ["Next.js", "Portfolio", "Developer Portfolio"],
  creator: "AdamUhh",
  openGraph: {
    title: "AdamUhh's Portfolio",
    description: "Welcome to my portfolio",
    url: "https://adamuhh.dev",
    siteName: "AdamUhh's Portfolio",
    images: [
      {
        url: "/logo_600x600.png",
        width: 600,
        height: 600,
        alt: "AdamUhh Logo",
      },
      {
        url: "/logo_1000x1000.png",
        width: 1000,
        height: 1000,
        alt: "AdamUhh Logo",
      },
    ],
    locale: "en_US",
    type: "profile",
    firstName: "Adam",
    lastName: "M.",
    username: "AdamUhh",
    gender: "Male",
  },
  metadataBase: new URL("https://adamuhh.dev"),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NextTopLoader showSpinner={false} />
      <div
        className={`${jetBrains.variable} ${poppins.variable} overflow-hidden font-poppins`}
      >
        <AppLayout>{children}</AppLayout>
      </div>
    </>
  );
}
