import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Providers } from "./providers";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetBrains",
});
const poppins = Poppins({
  subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AdamUhh's Portfolio",
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
        url: "https://adamuhh.dev/logo_600x600.png",
        width: 600,
        height: 600,
        alt: "AdamUhh Logo",
      },
      {
        url: "https://adamuhh.dev/logo_1000x1000.png",
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
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <NextTopLoader showSpinner={false} />
          <div
            className={`${jetBrains.variable} ${poppins.variable} overflow-hidden font-poppins`}
          >
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
