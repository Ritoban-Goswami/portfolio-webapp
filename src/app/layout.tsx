import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ritoban-goswami.vercel.app"),
  title: "Ritoban Goswami — Full-Stack Engineer",
  description: "Building high-performance, scalable web applications with a focus on React, Next.js, and AWS. Bridging the gap between physics logic and software architecture.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Ritoban Goswami — Full-Stack Engineer",
    description: "Building high-performance, scalable web applications with a focus on React, Next.js, and AWS.",
    url: "https://ritoban-goswami.vercel.app",
    siteName: "Ritoban Goswami",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Ritoban Goswami — Full-Stack Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritoban Goswami — Full-Stack Engineer",
    description: "Building high-performance, scalable web applications with a focus on React, Next.js, and AWS.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${cormorant.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full bg-background text-on-background font-sans overflow-x-hidden relative">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

