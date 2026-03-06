import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import {
  createLocalBusinessSchema,
  createOrganizationSchema,
  createWebsiteSchema,
  defaultViewport,
  generateSEOMetadata,
} from "@/lib/metadata";
import JsonLd from "@/components/seo/JsonLd";
import CookieConsentBanner from "@/components/layout/CookieConsentBanner";
import TrackingManager from "@/components/layout/TrackingManager";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = generateSEOMetadata();
export const viewport: Viewport = defaultViewport;

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
        <JsonLd
          data={[
            createWebsiteSchema(),
            createOrganizationSchema(),
            createLocalBusinessSchema(),
          ]}
        />
        <Suspense fallback={null}>
          <TrackingManager />
        </Suspense>
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
