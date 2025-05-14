import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const notoSans = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "marukun-dev",
  description: "marilの個人サイト",
  openGraph: {
    type: "website",
    title: "marukun-dev",
    description: "marilの個人サイト",
    siteName: "marukun-dev",
    url: "https://maril.blue/",
    images: {
      url: "https://maril.blue/api/og/marukun-dev",
      type: "image/png",
      width: 1200,
      height: 630,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={`${notoSans.className}`}>
        <Header />
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}
