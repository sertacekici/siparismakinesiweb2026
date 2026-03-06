import type { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateSEOMetadata({
  path: "/teklif-al",
  title: "Teklif Al | Restoran Otomasyon Sistemi İhtiyaç Analizi",
  description:
    "Restoranınıza uygun otomasyon, QR menü, online sipariş, kurye ve donanım ihtiyaçlarını analiz edip size özel teklif alın.",
  keywords: [
    "restoran yazılım teklifi",
    "qr menü teklifi",
    "restoran otomasyon fiyat teklifi",
  ],
});

export default function TeklifAlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}