import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
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
  title: "Taylor McKendrick",
  description: "Full Stack Developer | Cancer Survivor | Problem Solver",
  openGraph: {
    title: "Taylor McKendrick",
    description: "Full Stack Developer | Cancer Survivor | Problem Solver",
    url: "https://taylormckendrick.com",
    siteName: "Taylor McKendrick",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taylor McKendrick",
    description: "Full Stack Developer | Cancer Survivor | Problem Solver",
    images: 
      {
        url: "/twitter-image",
        alt: "Taylor McKendrick - Full Stack Developer",
      },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
