import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ritoban Goswami — Full-Stack Engineer",
  description: "Building high-performance, scalable web applications with a focus on React, Next.js, and AWS. Bridging the gap between physics logic and software architecture.",
  openGraph: {
    title: "Ritoban Goswami — Full-Stack Engineer",
    description: "Building high-performance, scalable web applications with a focus on React, Next.js, and AWS.",
    url: "https://ritobangoswami.dev",
    siteName: "Ritoban Goswami",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritoban Goswami — Full-Stack Engineer",
    description: "Building high-performance, scalable web applications with a focus on React, Next.js, and AWS.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full bg-background text-on-background font-sans overflow-x-hidden relative">
        {children}
      </body>
    </html>
  );
}

