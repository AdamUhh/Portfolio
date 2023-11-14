import AppLayout from "components/common/Layout";
import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import { Providers } from "../providers";

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
  title: "AdamUhh's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <NextTopLoader />
      <div
        className={`${jetBrains.variable} ${poppins.variable} overflow-hidden font-poppins`}
      >
        <AppLayout>{children}</AppLayout>
      </div>
    </Providers>
  );
}
