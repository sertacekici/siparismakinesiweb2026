import type { MetadataRoute } from "next";
import { ALL_PRODUCTS } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://siparismakinesi.com";
  const lastModified = new Date();

  const productPages: MetadataRoute.Sitemap = ALL_PRODUCTS.map((p) => ({
    url: `${baseUrl}/urunler/${p.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/urunler`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/teklif-al`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gizlilik`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/kvkk`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cerez-politikasi`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...productPages,
  ];
}
