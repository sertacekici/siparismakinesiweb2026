import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ALL_PRODUCTS, SOFTWARE_PRODUCTS, HARDWARE_PRODUCTS } from "@/lib/products";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import SiparisYonetimiContent from "@/components/sections/SiparisYonetimiContent";
import MasaSiparisiContent from "@/components/sections/MasaSiparisiContent";
import QrMenuContent from "@/components/sections/QrMenuContent";
import RaporlamaContent from "@/components/sections/RaporlamaContent";
import OnlineSiparisContent from "@/components/sections/OnlineSiparisContent";
import KuryeCozumleriContent from "@/components/sections/KuryeCozumleriContent";
import CokluSubeContent from "@/components/sections/CokluSubeContent";
import YazarkasaPosContent from "@/components/sections/YazarkasaPosContent";
import PosTerminaliContent from "@/components/sections/PosTerminaliContent";
import OdemeTerminaliContent from "@/components/sections/OdemeTerminaliContent";
import DigerDonanimContent from "@/components/sections/DigerDonanimContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — Sipariş Makinesi`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const Icon = product.icon;
  const isSoftware = product.category === "yazilim";
  const siblings = isSoftware ? SOFTWARE_PRODUCTS : HARDWARE_PRODUCTS;
  const currentIdx = siblings.findIndex((p) => p.slug === slug);
  const prev = currentIdx > 0 ? siblings[currentIdx - 1] : null;
  const next = currentIdx < siblings.length - 1 ? siblings[currentIdx + 1] : null;

  // Diğer kategoriden öneriler
  const otherCategory = isSoftware ? HARDWARE_PRODUCTS : SOFTWARE_PRODUCTS;
  const suggestions = otherCategory.slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-24 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-foreground/50">
            <Link href="/" className="hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link
              href="/urunler"
              className="hover:text-primary transition-colors"
            >
              Ürünler
            </Link>
            <span>/</span>
            <span className="text-foreground/80">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                  isSoftware
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                {isSoftware ? "Yazılım" : "Donanım"}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-foreground/60 leading-relaxed mb-8">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/905327985436"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1fb855] transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Anında İletişime Geçin
                </a>
                <Link
                  href="/urunler"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-secondary hover:bg-gray-50 transition-colors"
                >
                  Tüm Ürünler
                </Link>
              </div>
            </div>

            {/* Feature Icon & Quick Features */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${
                  isSoftware ? "bg-primary/10" : "bg-secondary/10"
                }`}
              >
                <Icon
                  className={`h-10 w-10 ${
                    isSoftware ? "text-primary" : "text-secondary"
                  }`}
                />
              </div>
              <h2 className="text-xl font-bold text-secondary mb-4">
                Öne Çıkan Özellikler
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sipariş Yönetimi Özel İçerik */}
      {slug === "siparis-yonetimi" && <SiparisYonetimiContent />}

      {/* Masa Siparişi Özel İçerik */}
      {slug === "masa-siparisi" && <MasaSiparisiContent />}

      {/* QR Menü Özel İçerik */}
      {slug === "qr-menu" && <QrMenuContent />}

      {/* Raporlama Özel İçerik */}
      {slug === "raporlama" && <RaporlamaContent />}

      {/* Online Sipariş Entegrasyonu Özel İçerik */}
      {slug === "online-siparis-entegrasyonu" && <OnlineSiparisContent />}

      {/* Kurye Çözümleri Özel İçerik */}
      {slug === "kurye-cozumleri" && <KuryeCozumleriContent />}

      {/* Çoklu Şube Yönetimi Özel İçerik */}
      {slug === "coklu-sube-yonetimi" && <CokluSubeContent />}

      {/* Yazarkasa POS Entegrasyonları Özel İçerik */}
      {slug === "yazarkasa-pos-entegrasyonu" && <YazarkasaPosContent />}

      {/* POS Terminali Özel İçerik */}
      {slug === "pos-terminali" && <PosTerminaliContent />}

      {/* Ödeme Terminali Özel İçerik */}
      {slug === "odeme-terminali" && <OdemeTerminaliContent />}

      {/* Diğer Donanım Ürünleri Özel İçerik */}
      {slug === "diger-donanim-urunleri" && <DigerDonanimContent />}

      {/* Prev / Next Navigation */}
      <section className="py-8 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {prev ? (
              <Link
                href={`/urunler/${prev.slug}`}
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                {prev.name}
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/urunler/${next.slug}`}
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
              >
                {next.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Other Category Suggestions */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary mb-8">
            {isSoftware
              ? "Donanım Çözümlerimiz"
              : "Yazılım Çözümlerimiz"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {suggestions.map((s) => {
              const SIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/urunler/${s.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <SIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-secondary mb-1">
                    {s.name}
                  </h3>
                  <p className="text-sm text-foreground/60 line-clamp-2">
                    {s.shortDescription}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
