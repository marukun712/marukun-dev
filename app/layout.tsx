import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const quickSand = Quicksand({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "marukun-dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={`${quickSand.className}`}>
        <Header />
        <div className="container mx-auto md:w-1/2 p-4">{children}</div>
      </body>
    </html>
  );
}
