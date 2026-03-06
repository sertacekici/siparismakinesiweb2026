import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateSEOMetadata } from "@/lib/metadata";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = generateSEOMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" data-scroll-behavior="smooth">
      <body className={`${inter.variable} antialiased`}>
        <a href="#main-content" className="skip-to-content">
          İçeriğe geç
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
