import "@/styles/globals.scss";
import "@/styles/tailwind.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SABA Marble - The Future of RNG Marble Games",
    description:
        "SABA Marble is a revolutionary RNG-simulated sports game designed for fast-paced entertainment and betting. Perfect for sports lovers seeking instant action and quick wins.",
    keywords: "SABA Marble, RNG games, sports betting, iGaming, marble games, sports simulation",
    authors: [{ name: "SABA Marbles" }],
    openGraph: {
        title: "SABA Marble - The Future of RNG Marble Games",
        description: "Revolutionary RNG-simulated sports game for fast-paced entertainment and betting",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "SABA Marble - The Future of RNG Marble Games",
        description: "Revolutionary RNG-simulated sports game for fast-paced entertainment and betting",
    },
    robots: "index, follow",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
