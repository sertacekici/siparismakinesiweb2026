"use client";

import {
  BarChart3,
  Phone,
  Globe,
  Truck,
  CreditCard,
  Users,
  ShoppingCart,
  XCircle,
  Percent,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Utensils,
  Package,
  FileDown,
  Filter,
  Layers,
  Zap,
  Award,
  Clock,
} from "lucide-react";

/* ─────────── Masa & Paket Raporlama ─────────── */
function ReportModes() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary via-secondary to-secondary-light" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
            Esnek Raporlama
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Masa & Paket{" "}
            <span className="gradient-text">Ayrı veya Birlikte</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            İster masa raporlarını, ister paket raporlarını ayrı ayrı alın —
            isterseniz hepsini birlikte görün.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Masa Raporu */}
          <div className="glass-dark rounded-2xl p-6 border border-white/5 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              <Utensils className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Masa Raporları</h3>
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              Masa bazlı ciro, ortalama hesap tutarı, en yoğun masalar ve
              garson performansı.
            </p>
            <div className="bg-white rounded-xl p-4">
              <div className="space-y-2">
                {[
                  { label: "Toplam Masa Cirosu", value: "₺48,320" },
                  { label: "Ort. Hesap Tutarı", value: "₺285" },
                  { label: "Toplam Masa Adedi", value: "169" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">{r.label}</span>
                    <span className="text-xs font-bold text-secondary">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Paket Raporu */}
          <div className="glass-dark rounded-2xl p-6 border border-white/5 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
              <Package className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Paket Raporları</h3>
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              Paket sipariş sayısı, ciro, kurye bazlı dağılım ve teslimat
              bölge analizi.
            </p>
            <div className="bg-white rounded-xl p-4">
              <div className="space-y-2">
                {[
                  { label: "Toplam Paket Cirosu", value: "₺32,150" },
                  { label: "Toplam Paket Adedi", value: "214" },
                  { label: "Ort. Paket Tutarı", value: "₺150" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">{r.label}</span>
                    <span className="text-xs font-bold text-secondary">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Birlikte */}
          <div className="glass-dark rounded-2xl p-6 border border-primary/20 ring-1 ring-primary/10 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-5 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
              <Layers className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Birleşik Rapor</h3>
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              Masa + paket tüm verileri tek raporda görün. Genel ciro, sipariş
              dağılımı ve karşılaştırma.
            </p>
            <div className="bg-white rounded-xl p-4">
              <div className="space-y-2">
                {[
                  { label: "Toplam Ciro", value: "₺80,470" },
                  { label: "Toplam Sipariş", value: "383" },
                  { label: "Masa / Paket Oranı", value: "%60 / %40" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">{r.label}</span>
                    <span className="text-xs font-bold text-secondary">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Sipariş Kaynağı Analizi ─────────── */
function OrderSourceAnalysis() {
  const sources = [
    {
      icon: Phone,
      title: "Telefonla Sipariş",
      value: "₺12,400",
      count: "82",
      color: "bg-amber-500",
      barWidth: "35%",
    },
    {
      icon: Globe,
      title: "Yemek Sepeti",
      value: "₺18,200",
      count: "124",
      color: "bg-red-500",
      barWidth: "52%",
    },
    {
      icon: Globe,
      title: "Getir Yemek",
      value: "₺14,800",
      count: "98",
      color: "bg-purple-500",
      barWidth: "42%",
    },
    {
      icon: Globe,
      title: "Trendyol Yemek",
      value: "₺9,600",
      count: "64",
      color: "bg-orange-500",
      barWidth: "27%",
    },
    {
      icon: Globe,
      title: "Migros Yemek",
      value: "₺5,200",
      count: "34",
      color: "bg-green-500",
      barWidth: "15%",
    },
    {
      icon: Utensils,
      title: "Masa Siparişi",
      value: "₺48,320",
      count: "169",
      color: "bg-blue-500",
      barWidth: "100%",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 section-gradient" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Sol — Açıklama */}
          <div>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              Sipariş Kaynağı Analizi
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary leading-tight mb-6">
              Hangi Kanaldan{" "}
              <span className="gradient-text">Ne Kadar Gelir?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Telefon, internet platformları ve masa siparişlerini ayrı ayrı
              analiz edin. Her platformun cirosunu, sipariş sayısını ve
              oranını görün.
            </p>

            <div className="space-y-4">
              {[
                "Yemek Sepeti, Getir, Trendyol, Migros ayrı ayrı raporlama",
                "Telefonla gelen siparişlerin ayrı takibi",
                "Platform bazlı ciro karşılaştırması",
                "Sipariş kaynağı dağılım grafikleri",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ — Mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl border border-border/50 p-6 shadow-xl shadow-black/5">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-muted-foreground">
                  Sipariş Kaynağı Raporu — Bu Hafta
                </span>
              </div>

              <div className="space-y-3">
                {sources.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.title} className="bg-muted/50 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-md ${s.color} flex items-center justify-center`}>
                            <Icon className="h-3.5 w-3.5 text-white" />
                          </div>
                          <span className="text-xs font-bold text-secondary">{s.title}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-secondary">{s.value}</span>
                          <span className="text-[10px] text-muted-foreground ml-1">({s.count})</span>
                        </div>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${s.color} rounded-full`}
                          style={{ width: s.barWidth }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center justify-between bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-3">
                <span className="text-xs font-bold text-secondary">Toplam Ciro</span>
                <span className="text-lg font-bold text-primary">₺108,520</span>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Detaylı Rapor Türleri ─────────── */
function ReportCategories() {
  const reports = [
    {
      icon: CreditCard,
      title: "Ödeme Türü Toplamları",
      desc: "Nakit, kredi kartı, online ödeme, yemek kartı — her ödeme türünün toplamını ve oranını görün.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Truck,
      title: "Kurye Analizi",
      desc: "Kurye bazlı teslimat sayısı, toplam ciro, ortalama teslimat süresi ve kurye hesap toplamları.",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: ShoppingCart,
      title: "Ürün Satış Analizi",
      desc: "En çok satan ürünler, kategori bazlı satış dağılımı, ürün performans karşılaştırması.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: XCircle,
      title: "İptal Raporları",
      desc: "İptal edilen siparişler, iptal nedenleri, garson/platform bazlı iptal oranları ve kayıp analizi.",
      gradient: "from-red-500 to-rose-500",
    },
    {
      icon: Percent,
      title: "İndirim Raporları",
      desc: "Uygulanan indirimler, indirim tutarları, kampanya bazlı sonuçlar ve indirim etki analizi.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Users,
      title: "Garson Bazlı Raporlar",
      desc: "Garson başına düşen sipariş, ciro, ortalama hesap tutarı ve satış performansı karşılaştırması.",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Performans Raporları",
      desc: "Günlük, haftalık, aylık performans trendleri. Geçen dönemle karşılaştırmalı büyüme analizi.",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      icon: Utensils,
      title: "Masa Raporları",
      desc: "Masa bazlı ciro, oturma süreleri, en verimli masalar ve doluluk oranı analizi.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Package,
      title: "Paket Raporları",
      desc: "Paket sipariş sayısı, bölge bazlı dağılım, ortalama paket tutarı ve teslimat performansı.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary via-secondary to-secondary-light" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
            Detaylı Rapor Türleri
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Her Açıdan{" "}
            <span className="gradient-text">Detaylı Analiz</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Ödeme, kurye, ürün, iptal, indirim, garson, performans, masa ve
            paket — 9 farklı rapor kategorisi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="glass-dark rounded-2xl p-6 border border-white/5 group hover:border-white/10 transition-colors duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${r.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Dışa Aktarma & Filtreleme ─────────── */
function ExportSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 section-gradient" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-border/50 p-8 sm:p-12 shadow-lg shadow-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol */}
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                Dışa Aktarma
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary leading-tight mb-6">
                Raporlarınızı{" "}
                <span className="gradient-text">İstediğiniz Formatta</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Tüm raporları tarih aralığı, sipariş kaynağı, garson, bölge
                ve ödeme türüne göre filtreleyin. Excel veya PDF olarak
                dışa aktarın.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-3">
                  <FileDown className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="text-sm font-bold text-secondary">Excel</div>
                    <div className="text-[10px] text-muted-foreground">.xlsx formatı</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-5 py-3">
                  <FileDown className="h-5 w-5 text-red-500" />
                  <div>
                    <div className="text-sm font-bold text-secondary">PDF</div>
                    <div className="text-[10px] text-muted-foreground">.pdf formatı</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ — Filtre Mockup */}
            <div className="bg-muted/30 rounded-2xl p-6 border border-border/30">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold text-secondary">Rapor Filtreleri</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Tarih Aralığı", value: "01.03.2026 - 06.03.2026" },
                  { label: "Sipariş Kaynağı", value: "Tümü" },
                  { label: "Ödeme Türü", value: "Nakit + Kredi Kartı" },
                  { label: "Garson", value: "Tüm Garsonlar" },
                  { label: "Bölge", value: "Tüm Bölgeler" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center justify-between bg-white rounded-lg px-4 py-2.5 border border-border/50"
                  >
                    <span className="text-[11px] text-muted-foreground">{f.label}</span>
                    <span className="text-xs font-semibold text-secondary">{f.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl py-3 text-center">
                <span className="text-sm font-bold text-white">Rapor Oluştur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Performans Göstergeleri ─────────── */
function PerformanceMetrics() {
  const metrics = [
    { value: "9+", label: "Rapor Kategorisi", icon: BarChart3 },
    { value: "%100", label: "Anlık Veri", icon: Zap },
    { value: "∞", label: "Yazılım Garantisi", icon: Award },
    { value: "30dk", label: "Sorun Giderme Garantisi", icon: Clock },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary via-secondary-light to-secondary" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.label} className="text-center glass-dark rounded-2xl py-8 px-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  {m.value}
                </div>
                <div className="text-sm text-white/50">{m.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Ana Export ─────────── */
export default function RaporlamaContent() {
  return (
    <>
      <ReportModes />
      <OrderSourceAnalysis />
      <ReportCategories />
      <ExportSection />
      <PerformanceMetrics />
    </>
  );
}
