import Link from "next/link";
import type { Metadata } from "next";
import {
  SOFTWARE_PRODUCTS,
  HARDWARE_PRODUCTS,
} from "@/lib/products";
import { Monitor, Code, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ürünler — Sipariş Makinesi | Yazılım & Donanım Çözümleri",
  description:
    "Sipariş Makinesi yazılım ve donanım ürünlerini keşfedin. POS terminali, QR menü, mutfak ekranı, stok takibi ve daha fazlası.",
};

export default function UrunlerPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
            Ürünlerimiz
          </h1>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            Restoranınızın ihtiyacına özel yazılım ve donanım çözümleri.
            Hepsini birlikte kullanın, tek noktadan yönetin.
          </p>
        </div>
      </section>

      {/* Yazılım Ürünleri */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                Yazılım Çözümleri
              </h2>
              <p className="text-sm text-foreground/50">
                Restoran operasyonlarınızı dijitalleştiren yazılım ürünleri
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOFTWARE_PRODUCTS.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.slug}
                  href={`/urunler/${product.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Detayları İncele <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donanım Ürünleri */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Monitor className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                Donanım Çözümleri
              </h2>
              <p className="text-sm text-foreground/50">
                Restoran ortamına özel tasarlanmış profesyonel donanımlar
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HARDWARE_PRODUCTS.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.slug}
                  href={`/urunler/${product.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Detayları İncele <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
            Hangi ürünler size uygun?
          </h2>
          <p className="text-foreground/60 mb-8">
            İhtiyaçlarınıza en uygun çözümü belirlemek için hemen WhatsApp
            üzerinden bizimle iletişime geçin.
          </p>
          <a
            href="https://wa.me/905327985436"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-3 text-base font-semibold text-white hover:bg-[#1fb855] transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Anında İletişime Geçin
          </a>
        </div>
      </section>
    </>
  );
}
