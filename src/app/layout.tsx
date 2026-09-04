import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

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
  title: "Ritoban Goswami - Full-Stack Software Engineer",
  description: "Full-stack engineer with 4 years shipping production systems, working with React/Next.js, Node.js/FastAPI, and AWS.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Ritoban Goswami - Full-Stack Software Engineer",
    description: "Full-stack engineer with 4 years shipping production systems, working with React/Next.js, Node.js/FastAPI, and AWS.",
    url: "https://ritoban-goswami.vercel.app",
    siteName: "Ritoban Goswami",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ritoban Goswami - Full-Stack Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritoban Goswami - Full-Stack Software Engineer",
    description: "Full-stack engineer with 4 years shipping production systems, working with React/Next.js, Node.js/FastAPI, and AWS.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${cormorant.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-on-background font-sans overflow-x-hidden relative">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

