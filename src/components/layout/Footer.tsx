import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { SOFTWARE_PRODUCTS, HARDWARE_PRODUCTS } from "@/lib/products";
import CookiePreferencesButton from "@/components/layout/CookiePreferencesButton";

const quickLinks = [
  { href: "/urunler", label: "Ürünler" },
  { href: "/#ozellikler", label: "Özellikler" },
  { href: "/#nasil-calisir", label: "Nasıl Çalışır" },
  { href: "/#referanslar", label: "Referanslar" },
  { href: "/#iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="relative bg-white text-secondary overflow-hidden border-t border-border" aria-label="Site footer">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/adelsoft.png"
                alt="Adelsoft Logo"
                width={180}
                height={48}
                className="h-auto w-auto max-h-10"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Restoranınızı dijitalleştirin. Sipariş yönetimi, QR menü, mutfak
              ekranı ve daha fazlası tek platformda.
            </p>
          </div>

          {/* Ürünler */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-secondary">
              Ürünler
            </h3>
            <ul className="space-y-3">
              {SOFTWARE_PRODUCTS.slice(0, 4).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/urunler/${p.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              {HARDWARE_PRODUCTS.slice(0, 2).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/urunler/${p.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/urunler"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-light transition-colors duration-200"
                >
                  Tüm Ürünler
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-secondary">
              Hızlı Linkler
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-secondary">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span>{SITE_CONFIG.email}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span>{SITE_CONFIG.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span>{SITE_CONFIG.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Tüm hakları
            saklıdır.
          </p>
          <div className="flex gap-6">
            <Link
              href="/gizlilik"
              className="text-xs text-muted-foreground hover:text-secondary transition-colors duration-200"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/kvkk"
              className="text-xs text-muted-foreground hover:text-secondary transition-colors duration-200"
            >
              KVKK
            </Link>
            <Link
              href="/cerez-politikasi"
              className="text-xs text-muted-foreground hover:text-secondary transition-colors duration-200"
            >
              Çerez Politikası
            </Link>
            <CookiePreferencesButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
