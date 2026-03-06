import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import FAQ from "@/components/sections/FAQ";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/seo/JsonLd";
import {
  createBreadcrumbSchema,
  createFAQSchema,
  createWebPageSchema,
  generateSEOMetadata,
} from "@/lib/metadata";

export const metadata: Metadata = generateSEOMetadata({
  path: "/",
  title:
    "Sipariş Makinesi | Restoran Otomasyon Sistemi, QR Menü ve Online Sipariş",
  description:
    "Sipariş Makinesi ile restoran sipariş yönetimi, QR menü, online sipariş entegrasyonu, mutfak ekranı ve raporlama süreçlerinizi tek platformda yönetin.",
  keywords: [
    "qr menü",
    "online sipariş entegrasyonu",
    "paket servis yazılımı",
    "restoran otomasyon programı",
  ],
});

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <JsonLd
          data={[
            createWebPageSchema({
              title:
                "Sipariş Makinesi | Restoran Otomasyon Sistemi, QR Menü ve Online Sipariş",
              description:
                "Sipariş Makinesi ile restoran sipariş yönetimi, QR menü, online sipariş entegrasyonu, mutfak ekranı ve raporlama süreçlerinizi tek platformda yönetin.",
              path: "/",
            }),
            createBreadcrumbSchema([{ name: "Ana Sayfa", path: "/" }]),
            createFAQSchema(),
          ]}
        />
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
