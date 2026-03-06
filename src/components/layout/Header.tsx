"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Code, Monitor } from "lucide-react";
import { SOFTWARE_PRODUCTS, HARDWARE_PRODUCTS } from "@/lib/products";

const navLinks = [
  { href: "/#nasil-calisir", label: "Nasıl Çalışır" },
  { href: "/#referanslar", label: "Referanslar" },
  { href: "/#iletisim", label: "İletişim" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border/50">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Ana navigasyon"
      >
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/sipmaklogo.png"
              alt="Sipariş Makinesi Logo"
              width={180}
              height={48}
              className="h-auto w-auto max-h-10"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* Ürünler Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center gap-1 text-sm font-medium text-foreground/60 hover:text-primary transition-all duration-200"
              >
                Ürünler
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-border/50 p-6 grid grid-cols-2 gap-6">
                  {/* Yazılım */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                      <Code className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">Yazılım</span>
                    </div>
                    <div className="space-y-1">
                      {SOFTWARE_PRODUCTS.map((p) => {
                        const Icon = p.icon;
                        return (
                          <Link
                            key={p.slug}
                            href={`/urunler/${p.slug}`}
                            onClick={() => setProductsOpen(false)}
                            className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <Icon className="h-4 w-4 text-foreground/40 group-hover:text-primary transition-colors" />
                            <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">{p.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Donanım */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                      <Monitor className="h-4 w-4 text-secondary" />
                      <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Donanım</span>
                    </div>
                    <div className="space-y-1">
                      {HARDWARE_PRODUCTS.map((p) => {
                        const Icon = p.icon;
                        return (
                          <Link
                            key={p.slug}
                            href={`/urunler/${p.slug}`}
                            onClick={() => setProductsOpen(false)}
                            className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <Icon className="h-4 w-4 text-foreground/40 group-hover:text-secondary transition-colors" />
                            <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">{p.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tüm Ürünler Link */}
                  <div className="col-span-2 pt-3 border-t border-gray-100">
                    <Link
                      href="/urunler"
                      onClick={() => setProductsOpen(false)}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Tüm Ürünleri Gör →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/60 hover:text-primary transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/teklif-al"
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Anında Teklif Alın
            </a>
            <a
              href="https://wa.me/905327985436"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-sm font-semibold text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp İletişim
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-2">
              {/* Ürünler Accordion */}
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex items-center justify-between text-base font-medium text-foreground/70 hover:text-primary transition-colors py-2"
              >
                Ürünler
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileProductsOpen && (
                <div className="pl-4 space-y-1 mb-2">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider py-1">Yazılım</p>
                  {SOFTWARE_PRODUCTS.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/urunler/${p.slug}`}
                      className="block text-sm text-foreground/60 hover:text-primary py-1.5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {p.name}
                    </Link>
                  ))}
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wider py-1 mt-2">Donanım</p>
                  {HARDWARE_PRODUCTS.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/urunler/${p.slug}`}
                      className="block text-sm text-foreground/60 hover:text-primary py-1.5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {p.name}
                    </Link>
                  ))}
                  <Link
                    href="/urunler"
                    className="block text-sm font-medium text-primary py-1.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Tüm Ürünler →
                  </Link>
                </div>
              )}

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground/70 hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/teklif-al"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-5 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Anında Teklif Alın
              </a>
              <a
                href="https://wa.me/905327985436"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-5 py-3 text-base font-semibold text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp İletişim
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
