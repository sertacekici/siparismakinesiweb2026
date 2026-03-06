import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://siparismakinesi.com";

export function generateSEOMetadata(overrides?: Partial<Metadata>): Metadata {
  const title =
    overrides?.title ||
    "Sipariş Makinesi — Restoran Otomasyon Sistemi | Sipariş & Stok Yönetimi";
  const description =
    (overrides?.description as string) ||
    "Sipariş Makinesi ile restoranınızı dijitalleştirin. QR sipariş, mutfak ekranı, stok takibi ve raporlama. 1500+ restoran tarafından tercih edilen otomasyon çözümü.";

  return {
    title,
    description,
    keywords: [
      "restoran otomasyon sistemi",
      "restoran yazılımı",
      "sipariş sistemi",
      "restoran pos sistemi",
      "restoran yönetim programı",
      "qr menü sipariş sistemi",
      "restoran stok takip yazılımı",
      "online sipariş restoran",
      "adisyon sistemi",
      "mutfak ekranı yazılımı",
      "restoran sipariş takip programı",
      "garson sipariş takibi",
      "sipariş makinesi",
    ],
    authors: [{ name: "Sipariş Makinesi" }],
    creator: "Sipariş Makinesi",
    publisher: "Sipariş Makinesi",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: siteUrl,
      languages: { "tr-TR": siteUrl },
    },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: siteUrl,
      siteName: "Sipariş Makinesi",
      title: title as string,
      description,
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Sipariş Makinesi — Restoran Otomasyon Sistemi",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title as string,
      description,
      images: [`${siteUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    ...overrides,
  };
}
