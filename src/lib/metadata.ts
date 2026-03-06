import type { Metadata, Viewport } from "next";
import { FAQ_ITEMS, SITE_CONFIG } from "@/lib/constants";
import type { Product } from "@/lib/products";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.url || "https://siparismakinesi.com";

export const defaultViewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const defaultTitle =
  "Sipariş Makinesi | Restoran Otomasyon Sistemi, QR Menü ve POS Çözümleri";
const defaultDescription =
  "Sipariş Makinesi; restoran otomasyon sistemi, QR menü, online sipariş entegrasyonu, mutfak ekranı, raporlama ve çoklu şube yönetimi için uçtan uca çözüm sunar.";
const defaultKeywords = [
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
  "paket servis yazılımı",
  "yazarkasa pos entegrasyonu",
  "sipariş makinesi",
];

const websiteId = `${siteUrl}/#website`;
const organizationId = `${siteUrl}/#organization`;
const serviceId = `${siteUrl}/#service`;

interface SEOOptions {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function generateSEOMetadata({
  title = defaultTitle,
  description = defaultDescription,
  path = "/",
  keywords = [],
  type = "website",
  noIndex = false,
}: SEOOptions = {}): Metadata {
  const canonical = absoluteUrl(path);
  const mergedKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    applicationName: SITE_CONFIG.name,
    manifest: "/site.webmanifest",
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    category: "Restaurant software",
    keywords: mergedKeywords,
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon.ico"],
    },
    appleWebApp: {
      capable: true,
      title: SITE_CONFIG.name,
      statusBarStyle: "default",
    },
    alternates: {
      canonical,
      languages: {
        "tr-TR": canonical,
      },
    },
    openGraph: {
      type,
      locale: "tr_TR",
      url: canonical,
      siteName: SITE_CONFIG.name,
      title,
      description,
      images: [
        {
          url: absoluteUrl("/sipmaklogo.png"),
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} restoran otomasyon sistemi`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/sipmaklogo.png")],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "format-detection": "telephone=yes, address=yes, email=yes",
      "geo.region": "TR-34",
      "geo.placename": "Istanbul",
      "ICBM": "41.0853, 28.9784",
    },
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: SITE_CONFIG.name,
    inLanguage: "tr-TR",
    description: defaultDescription,
    publisher: {
      "@id": organizationId,
    },
  };
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: SITE_CONFIG.name,
    url: siteUrl,
    logo: absoluteUrl("/sipmaklogo.png"),
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address,
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.phone,
        email: SITE_CONFIG.email,
        contactType: "customer support",
        areaServed: "TR",
        availableLanguage: ["tr", "en"],
      },
    ],
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": serviceId,
    name: SITE_CONFIG.name,
    url: siteUrl,
    image: absoluteUrl("/sipmaklogo.png"),
    description: defaultDescription,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    areaServed: "TR",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address,
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:30",
        closes: "14:30",
      },
    ],
  };
}

export function createWebPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    inLanguage: "tr-TR",
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": serviceId,
    },
  };
}

export function createFAQSchema(faqItems = FAQ_ITEMS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createCollectionPageSchema({
  title,
  description,
  path,
  items,
}: {
  title: string;
  description: string;
  path: string;
  items: Product[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: absoluteUrl(path),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/urunler/${product.slug}`),
        name: product.name,
      })),
    },
  };
}

export function createProductSchema(product: Product) {
  if (product.category === "yazilim") {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: product.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Windows, Android",
      description: product.description,
      url: absoluteUrl(`/urunler/${product.slug}`),
      image: absoluteUrl(product.image || "/sipmaklogo.png"),
      featureList: product.features,
      publisher: {
        "@id": organizationId,
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "TRY",
        availability: "https://schema.org/InStock",
        url: absoluteUrl("/teklif-al"),
      },
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: "Restaurant hardware",
    sku: product.slug,
    url: absoluteUrl(`/urunler/${product.slug}`),
    image: absoluteUrl(product.image || "/sipmaklogo.png"),
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
    },
    additionalProperty: product.features.map((feature) => ({
      "@type": "PropertyValue",
      name: "Özellik",
      value: feature,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/teklif-al"),
    },
  };
}
