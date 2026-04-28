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
  title: "The God Hand | The Brotherhood",
  description:
    "Real talk on men's physical health, mental strength, and the power of brotherhood. Subscribe to The God Hand on YouTube.",
  keywords: ["men's health", "testosterone", "men's group", "brotherhood", "mental health for men", "fitness"],
  openGraph: {
    title: "The God Hand",
    description: "Real talk on men's health, mindset, and brotherhood.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0d0d] text-[#f5f0eb]">{children}</body>
    </html>
  );
}
