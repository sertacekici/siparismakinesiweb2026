"use client";

import { useRef, useState, useCallback } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { STATS } from "@/lib/constants";

type Sparkle = { id: number; x: number; y: number; size: number; r: number };

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [glow, setGlow] = useState({ x: -999, y: -999, active: false });
  const idRef = useRef(0);
  const lastRef = useRef({ x: 0, y: 0, t: 0 });

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const b = el.getBoundingClientRect();
    const x = e.clientX - b.left;
    const y = e.clientY - b.top;
    setGlow({ x, y, active: true });

    const now = performance.now();
    if (Math.hypot(x - lastRef.current.x, y - lastRef.current.y) < 16 || now - lastRef.current.t < 32) return;
    lastRef.current = { x, y, t: now };

    const batch: Sparkle[] = Array.from({ length: 2 + Math.floor(Math.random() * 2) }, () => ({
      id: idRef.current++,
      x: x + (Math.random() - 0.5) * 40,
      y: y + (Math.random() - 0.5) * 40,
      size: 3 + Math.random() * 7,
      r: Math.random() * 360,
    }));
    setSparkles((p) => [...p.slice(-22), ...batch]);
    const ids = new Set(batch.map((s) => s.id));
    setTimeout(() => setSparkles((p) => p.filter((s) => !ids.has(s.id))), 850);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden"
      aria-label="Ana bölüm"
      onPointerMove={onPointerMove}
      onPointerLeave={() => setGlow((g) => ({ ...g, active: false }))}
    >
      {/* ─── AI / TECH BACKGROUND ─── */}
      <div className="absolute inset-0 -z-10">
        {/* Deep base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-8%,#102a4c_0%,#0a1628_50%,#040c14_100%)]" />

        {/* Dot matrix */}
        <div className="absolute inset-0 hero-dot-matrix" />

        {/* Central AI orb */}
        <div className="absolute left-1/2 top-[36%] -translate-x-1/2 -translate-y-1/2 h-[480px] w-[480px] sm:h-[620px] sm:w-[620px]">
          <div className="absolute inset-0 rounded-full hero-core-glow" />
          <div className="absolute inset-[16%] rounded-full hero-ring-outer" />
          <div className="absolute inset-[30%] rounded-full hero-ring-inner" />
          <div className="absolute inset-[43%] rounded-full hero-nucleus" />
        </div>

        {/* Hexagons */}
        <svg className="absolute left-[5%] top-[10%] h-28 w-28 hero-hex-1" viewBox="0 0 100 100" fill="none" aria-hidden="true"><polygon points="50,2 93,25 93,75 50,98 7,75 7,25" stroke="rgba(56,189,248,0.35)" strokeWidth="1.2" fill="rgba(56,189,248,0.03)"/></svg>
        <svg className="absolute right-[8%] top-[16%] h-20 w-20 hero-hex-2" viewBox="0 0 100 100" fill="none" aria-hidden="true"><polygon points="50,2 93,25 93,75 50,98 7,75 7,25" stroke="rgba(99,225,255,0.28)" strokeWidth="1" fill="rgba(99,225,255,0.02)"/></svg>
        <svg className="absolute left-[12%] bottom-[18%] h-24 w-24 hero-hex-3" viewBox="0 0 100 100" fill="none" aria-hidden="true"><polygon points="50,2 93,25 93,75 50,98 7,75 7,25" stroke="rgba(56,189,248,0.25)" strokeWidth="1" fill="rgba(56,189,248,0.02)"/></svg>
        <svg className="absolute right-[4%] bottom-[24%] h-16 w-16 hero-hex-4" viewBox="0 0 100 100" fill="none" aria-hidden="true"><polygon points="50,2 93,25 93,75 50,98 7,75 7,25" stroke="rgba(99,225,255,0.30)" strokeWidth="1.2" fill="rgba(99,225,255,0.02)"/></svg>
        <svg className="absolute left-[45%] top-[5%] h-14 w-14 hero-hex-2" viewBox="0 0 100 100" fill="none" aria-hidden="true"><polygon points="50,2 93,25 93,75 50,98 7,75 7,25" stroke="rgba(56,189,248,0.18)" strokeWidth="0.8"/></svg>
        <svg className="absolute right-[22%] bottom-[8%] h-18 w-18 hero-hex-3" viewBox="0 0 100 100" fill="none" aria-hidden="true"><polygon points="50,2 93,25 93,75 50,98 7,75 7,25" stroke="rgba(99,225,255,0.22)" strokeWidth="1"/></svg>

        {/* Ambient glows */}
        <div className="absolute left-[14%] top-[18%] h-80 w-80 rounded-full bg-cyan-500/[0.10] blur-[100px] hero-ambient-1" />
        <div className="absolute right-[10%] top-[14%] h-72 w-72 rounded-full bg-blue-500/[0.12] blur-[90px] hero-ambient-2" />
        <div className="absolute left-[38%] bottom-[8%] h-96 w-96 rounded-full bg-sky-500/[0.08] blur-[120px] hero-ambient-3" />
        <div className="absolute right-[25%] bottom-[18%] h-64 w-64 rounded-full bg-indigo-500/[0.08] blur-[80px] hero-ambient-2" />

        {/* Tech grid */}
        <div className="absolute inset-0 hero-tech-grid" />

        {/* Floating data particles */}
        <div className="absolute left-[8%] bottom-[12%] hero-particle" style={{ animationDelay: '0s', animationDuration: '7s' }} aria-hidden="true" />
        <div className="absolute left-[18%] bottom-[5%] hero-particle" style={{ animationDelay: '1.4s', animationDuration: '9s' }} aria-hidden="true" />
        <div className="absolute left-[32%] bottom-[18%] hero-particle hero-particle-lg" style={{ animationDelay: '2.8s', animationDuration: '8s' }} aria-hidden="true" />
        <div className="absolute left-[48%] bottom-[8%] hero-particle" style={{ animationDelay: '0.6s', animationDuration: '10s' }} aria-hidden="true" />
        <div className="absolute left-[62%] bottom-[14%] hero-particle hero-particle-lg" style={{ animationDelay: '3.5s', animationDuration: '7.5s' }} aria-hidden="true" />
        <div className="absolute left-[75%] bottom-[6%] hero-particle" style={{ animationDelay: '1.8s', animationDuration: '8.5s' }} aria-hidden="true" />
        <div className="absolute left-[88%] bottom-[16%] hero-particle" style={{ animationDelay: '4.2s', animationDuration: '9.5s' }} aria-hidden="true" />
        <div className="absolute left-[55%] bottom-[22%] hero-particle" style={{ animationDelay: '2.1s', animationDuration: '6.5s' }} aria-hidden="true" />
        <div className="absolute left-[25%] bottom-[28%] hero-particle hero-particle-lg" style={{ animationDelay: '5s', animationDuration: '11s' }} aria-hidden="true" />
        <div className="absolute left-[92%] bottom-[30%] hero-particle" style={{ animationDelay: '3s', animationDuration: '8s' }} aria-hidden="true" />

        {/* Energy lines */}
        <div className="absolute left-0 top-[20%] w-full h-px hero-energy-line" />
        <div className="absolute left-0 top-[65%] w-full h-px hero-energy-line hero-energy-line-2" />

        {/* Scan line */}
        <div className="absolute inset-x-0 hero-scanline" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[36%] bg-gradient-to-t from-[#030810] via-[#030810]/50 to-transparent" />

        {/* Mouse glow */}
        <div
          className={`absolute w-[360px] h-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-300 ${glow.active ? "opacity-100" : "opacity-0"}`}
          style={{ left: glow.x, top: glow.y, background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0.06) 36%, transparent 68%)" }}
          aria-hidden="true"
        />

        {/* Sparkle trail */}
        {sparkles.map((s) => (
          <span
            key={s.id}
            className="hero-sparkle"
            style={{ left: s.x, top: s.y, width: s.size, height: s.size, "--sr": `${s.r}deg` } as React.CSSProperties}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative text-center max-w-4xl mx-auto animate-slide-up px-6 py-10 sm:px-10 sm:py-14">
          {/* Rotating border light */}
          <div className="pointer-events-none absolute -inset-[2px] rounded-[34px] hero-rotating-border" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 rounded-[32px] hero-command-shell" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px hero-shell-line" />
          <div className="pointer-events-none absolute inset-x-14 bottom-0 h-px hero-shell-line hero-shell-line-reverse" />
          <div className="pointer-events-none absolute left-4 top-4 h-16 w-16 hero-shell-corner" />
          <div className="pointer-events-none absolute right-4 top-4 h-16 w-16 rotate-90 hero-shell-corner" />
          <div className="pointer-events-none absolute left-4 bottom-4 h-16 w-16 -rotate-90 hero-shell-corner" />
          <div className="pointer-events-none absolute right-4 bottom-4 h-16 w-16 rotate-180 hero-shell-corner" />
          <div className="pointer-events-none absolute left-1/2 top-3 h-20 w-40 -translate-x-1/2 hero-shell-signal" />

          {/* Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-5 py-2 text-sm font-medium text-white/90 mb-8 border border-white/10 shadow-[0_0_24px_rgba(83,233,255,0.08)]">
            <Sparkles className="h-4 w-4 text-primary" />
            1500+ Restoran Tarafından Tercih Ediliyor
          </div>

          {/* H1 - SEO optimized */}
          <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] [text-shadow:0_0_24px_rgba(112,233,255,0.12)]">
            Restoranınızın{" "}
            <span className="gradient-text">Dijital Dönüşümü</span>
            <br />
            <span className="text-white/90">Sipariş Makinesi ile Başlıyor</span>
          </h1>

          {/* Subtitle */}
          <p className="relative z-10 mt-6 text-lg sm:text-xl text-white/68 max-w-2xl mx-auto leading-relaxed">
            Sipariş yönetimi, QR menü, mutfak ekranı, stok takibi ve raporlama.
            Restoran otomasyon sisteminin tüm ihtiyaçlarınız tek platformda.
          </p>

          {/* CTA Buttons */}
          <div className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905327985436"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-button group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-8 py-4 text-base font-semibold text-white shadow-[0_18px_50px_-18px_rgba(47,177,182,0.8)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_22px_60px_-18px_rgba(47,177,182,1)]"
            >
              <span className="hero-cta-bg" aria-hidden="true" />
              <span className="hero-cta-shine" aria-hidden="true" />
              <span className="hero-cta-pulse" aria-hidden="true" />
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span className="relative z-10">Anında İletişime Geçin</span>
              <ArrowRight className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#ozellikler"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              <Play className="h-5 w-5" />
              Özellikleri İncele
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center glass-dark rounded-2xl py-6 px-4">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
