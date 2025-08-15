import { buildVersion } from "@/constants";
import "@/styles/globals.scss";
import "@/styles/tailwind.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import SentryInit from "./sentry-init";

const inter = Inter({ subsets: ["latin"] });

const title = "SABA Marble - The Future of RNG Marble Games";
const description =
    "SABA Marble is a revolutionary RNG-simulated sports game designed for fast-paced entertainment and betting. Perfect for sports lovers seeking instant action and quick wins.";
const keywords = "SABA Marble, RNG games, sports betting, iGaming, marble games, sports simulation";
const authors = [{ name: "SABA Marbles" }];

const openGraph = {
    title,
    description: "Revolutionary RNG-simulated sports game for fast-paced entertainment and betting",
    type: "website",
    locale: "en_US",
};

const twitter = {
    card: "summary_large_image",
    title,
    description,
};

export const metadata: Metadata = {
    title,
    description,
    keywords,
    authors,
    openGraph,
    twitter,
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
    const configFileWithVersion = `./c.js?${buildVersion}`;
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                <Script id="config-script" src={configFileWithVersion} strategy="beforeInteractive" />
                <SentryInit />
                {children}
            </body>
        </html>
    );
}
