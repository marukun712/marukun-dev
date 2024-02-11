import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const quickSand = Quicksand({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "marukun-dev",
    description: "marukun_の個人サイトです。",
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
                {children}
            </body>
        </html>
    );
}
