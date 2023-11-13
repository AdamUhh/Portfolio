import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetBrains",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdamUhh's Portfolio - Home",
  description: "Home Page",
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
          <div
            className={`${jetBrains.variable} ${poppins.variable} font-poppins overflow-hidden`}
          >
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
