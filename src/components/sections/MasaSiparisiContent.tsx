"use client";

import {
  Users,
  MapPin,
  SplitSquareVertical,
  Percent,
  Printer,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  ShieldCheck,
  Zap,
  Award,
  Clock,
  Utensils,
  CreditCard,
  Bell,
  Monitor,
  Coffee,
  Flame,
  Wine,
  Star,
  Smartphone,
  Tablet,
  PlusCircle,
  FileText,
  Eye,
  Headset,
} from "lucide-react";

/* ─────────── Masa Akış Diyagramı ─────────── */
function TableFlowDiagram() {
  const steps = [
    {
      icon: MapPin,
      label: "Masa Seçilir",
      desc: "Görsel haritadan açık masa seçilir ve sipariş alımına başlanır",
      color: "from-blue-500 to-blue-600",
      shadow: "shadow-blue-500/25",
    },
    {
      icon: Utensils,
      label: "Sipariş Girilir",
      desc: "Garson tablet veya POS üzerinden ürünleri hızlıca ekler",
      color: "from-amber-500 to-orange-500",
      shadow: "shadow-amber-500/25",
    },
    {
      icon: Bell,
      label: "Mutfağa İletilir",
      desc: "Sipariş otomatik olarak mutfak ekranına ve yazıcıya düşer",
      color: "from-green-500 to-emerald-600",
      shadow: "shadow-green-500/25",
    },
    {
      icon: CreditCard,
      label: "Hesap Kapatılır",
      desc: "Hesap bölme, birleştirme veya toplu ödeme ile masa kapatılır",
      color: "from-purple-500 to-violet-600",
      shadow: "shadow-purple-500/25",
    },
  ];

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
            Masa Sipariş Akışı
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Masadan Hesaba{" "}
            <span className="gradient-text">Sorunsuz Süreç</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Masa seçiminden hesap kapamaya kadar her adım otomatik ve kayıt
            altında.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
          {/* Connector Line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-blue-500/40 via-amber-500/40 via-green-500/40 to-purple-500/40" />
            <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white animate-flow-dot" />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative flex flex-col items-center text-center group">
                {i > 0 && (
                  <div className="md:hidden flex items-center justify-center -mt-1 mb-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-white/50 rotate-90" />
                    </div>
                  </div>
                )}

                <div className="relative mb-5">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ${step.shadow} relative z-10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-9 w-9 text-white" />
                  </div>
                  <div
                    className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} blur-xl opacity-40`}
                  />
                </div>

                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold flex items-center justify-center mb-3">
                  {i + 1}
                </div>

                <h3 className="text-base font-bold text-white mb-2">{step.label}</h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Masa Haritası Mockup ─────────── */
function TableMapSection() {
  const tables = [
    { id: 1, status: "occupied", waiter: "Ali", amount: "₺485" },
    { id: 2, status: "available", waiter: "", amount: "" },
    { id: 3, status: "occupied", waiter: "Mehmet", amount: "₺230" },
    { id: 4, status: "reserved", waiter: "", amount: "" },
    { id: 5, status: "occupied", waiter: "Ayşe", amount: "₺1,120" },
    { id: 6, status: "available", waiter: "", amount: "" },
    { id: 7, status: "occupied", waiter: "Ali", amount: "₺340" },
    { id: 8, status: "available", waiter: "", amount: "" },
    { id: 9, status: "occupied", waiter: "Mehmet", amount: "₺780" },
  ];

  const statusColors: Record<string, string> = {
    occupied: "border-primary bg-primary/5",
    available: "border-green-400 bg-green-50",
    reserved: "border-amber-400 bg-amber-50",
  };
  const statusLabels: Record<string, string> = {
    occupied: "Dolu",
    available: "Boş",
    reserved: "Rezerve",
  };
  const statusDots: Record<string, string> = {
    occupied: "bg-primary",
    available: "bg-green-500",
    reserved: "bg-amber-500",
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 section-gradient" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Sol — Açıklama */}
          <div>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              Görsel Masa Haritası
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary leading-tight mb-6">
              Tüm Masalarınız{" "}
              <span className="gradient-text">Tek Bakışta</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Salondaki tüm masalarınızı görsel haritada izleyin. Hangi masa
              dolu, boş veya rezerve — anlık görün. Açık hesapları ve
              garson atamalarını tek ekrandan kontrol edin.
            </p>

            <div className="space-y-4">
              {[
                "Dolu / Boş / Rezerve anlık durum renkleri",
                "Masalara dokunarak direkt sipariş girişi",
                "Masa transferi ve birleştirme",
                "Anlık hesap tutarı görüntüleme",
                "Çoklu salon ve kat desteği",
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

          {/* Sağ — Masa Haritası Mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl border border-border/50 p-6 shadow-xl shadow-black/5">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-muted-foreground">
                  Masa Haritası — Salon 1
                </span>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 mb-4">
                {Object.entries(statusLabels).map(([key, label]) => (
                  <div key={key} className="flex items-center gap-1.5">
                    <div className={`w-2.5 h-2.5 rounded-full ${statusDots[key]}`} />
                    <span className="text-[10px] text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>

              {/* Table Grid */}
              <div className="grid grid-cols-3 gap-3">
                {tables.map((t) => (
                  <div
                    key={t.id}
                    className={`rounded-xl border-2 p-3 transition-all hover:scale-105 ${statusColors[t.status]}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-secondary">
                        Masa {t.id}
                      </span>
                      <div className={`w-2 h-2 rounded-full ${statusDots[t.status]}`} />
                    </div>
                    {t.status === "occupied" ? (
                      <>
                        <div className="text-[10px] text-muted-foreground mb-0.5">
                          {t.waiter}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-secondary">
                            {t.amount}
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="text-[10px] text-muted-foreground">
                        {statusLabels[t.status]}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom summary */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="bg-primary/5 rounded-lg p-2.5 text-center">
                  <div className="text-lg font-bold text-secondary">5</div>
                  <div className="text-[10px] text-muted-foreground">Dolu Masa</div>
                </div>
                <div className="bg-green-50 rounded-lg p-2.5 text-center">
                  <div className="text-lg font-bold text-secondary">3</div>
                  <div className="text-[10px] text-muted-foreground">Boş Masa</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-2.5 text-center">
                  <div className="text-lg font-bold text-secondary">1</div>
                  <div className="text-[10px] text-muted-foreground">Rezerve</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Hesap Yönetimi ─────────── */
function AccountManagement() {
  const features = [
    {
      icon: SplitSquareVertical,
      title: "Hesap Bölme",
      desc: "Masadaki hesabı kişi başı veya ürün bazlı kolayca bölün. Her kişi kendi hesabını ayrı ödesin. Masalar arası hesap transferi de tek dokunuşla.",
      gradient: "from-blue-500 to-cyan-500",
      highlight: true,
    },
    {
      icon: Percent,
      title: "İndirim İşlemleri",
      desc: "Yüzdelik veya tutar bazlı indirim uygulayın. Ürün, kategori veya toplam hesap üzerinden esnek indirim seçenekleri. Yetki kontrolü ile güvenli.",
      gradient: "from-amber-500 to-orange-500",
      highlight: true,
    },
    {
      icon: Printer,
      title: "Yazarkasa ile Tam Uyum",
      desc: "Tüm yazarkasa markaları ile sorunsuz entegrasyon. Fiş, fatura ve e-Arşiv çıktıları otomatik. ÖKC uyumlu yasal altyapı.",
      gradient: "from-green-500 to-emerald-500",
      highlight: true,
    },
    {
      icon: Users,
      title: "Hesap Birleştirme",
      desc: "Farklı masalardaki hesapları tek hesapta birleştirin. Grup yemekleri ve toplantılar için ideal çözüm.",
      gradient: "from-violet-500 to-purple-500",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Hesap Yönetimi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Esnek &{" "}
            <span className="gradient-text">Güçlü Hesap İşlemleri</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Hesap bölme, indirim işlemleri ve yazarkasa entegrasyonu — tüm
            finansal işlemler tek dokunuşla.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`group relative bg-white rounded-2xl p-8 card-hover border overflow-hidden ${
                  f.highlight
                    ? "border-primary/30 ring-1 ring-primary/10 shadow-lg shadow-primary/5"
                    : "border-border/50"
                }`}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-12 translate-x-12" />

                <div className="flex items-start gap-6 relative">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-secondary mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Garson Performans Mockup ─────────── */
function WaiterPerformance() {
  const waiters = [
    { name: "Ali K.", orders: 47, revenue: "₺8,420", tables: 6, rating: 4.8 },
    { name: "Mehmet D.", orders: 38, revenue: "₺6,930", tables: 5, rating: 4.5 },
    { name: "Ayşe T.", orders: 42, revenue: "₺7,650", tables: 7, rating: 4.9 },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary via-secondary to-secondary-light" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Sol — Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-3xl border border-border/50 p-6 shadow-xl shadow-black/5">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-muted-foreground">
                  Garson Performans — Bugün
                </span>
              </div>

              <div className="space-y-3">
                {waiters.map((w, i) => (
                  <div
                    key={w.name}
                    className="bg-muted rounded-xl p-4 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {w.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-secondary">{w.name}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-amber-500">★</span>
                          <span className="text-xs font-semibold text-secondary">{w.rating}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <div className="text-xs text-muted-foreground">Sipariş</div>
                          <div className="text-sm font-bold text-secondary">{w.orders}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Ciro</div>
                          <div className="text-sm font-bold text-secondary">{w.revenue}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Masa</div>
                          <div className="text-sm font-bold text-secondary">{w.tables}</div>
                        </div>
                      </div>
                      {/* Progress bar */}
                      <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full"
                          style={{ width: `${(w.orders / 50) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="mt-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Toplam Ciro (Bugün)</div>
                  <div className="text-2xl font-bold text-secondary">₺23,000</div>
                </div>
                <div className="flex items-center gap-1 text-green-500">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-sm font-bold">+18.5%</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Sağ — Açıklama */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
              Garson Takibi
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Garson Performansını{" "}
              <span className="gradient-text">Anlık İzleyin</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              Her garsonun aldığı sipariş sayısı, cirosu ve sorumlu olduğu
              masa sayısını anlık takip edin. Verimli çalışanları
              ödüllendirin, iyileştirme alanlarını tespit edin.
            </p>

            <div className="space-y-4">
              {[
                "Garson bazlı sipariş ve ciro raporları",
                "Garson başına düşen masa sayısı",
                "Vardiya bazlı performans karşılaştırma",
                "Personel yetkilendirme ve rol yönetimi",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Cihaz & Sipariş Giriş Yöntemleri ─────────── */
function DeviceOrderSection() {
  const mobileActions = [
    { icon: Utensils, label: "Sipariş Girebilir" },
    { icon: PlusCircle, label: "Ek Sipariş Girebilir" },
    { icon: FileText, label: "Hesap Kağıdı Çıkartabilir" },
    { icon: Eye, label: "Girilen Siparişleri Görebilir" },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 section-gradient" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Esnek Sipariş Girişi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Mobil veya Dokunmatik —{" "}
            <span className="gradient-text">Garson Seçer</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Garson ister mobil cihazından isterse dokunmatik ekrandan sipariş
            girebilir. Girilen siparişler mutfağa yazıcıdan çıktı olarak veya
            mutfak ekranına anlık iletilir.
          </p>
        </div>

        {/* İki Cihaz Kartı */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Mobil Cihaz */}
          <div className="group relative bg-white rounded-2xl p-8 card-hover border border-primary/20 ring-1 ring-primary/10 shadow-lg shadow-primary/5 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-12 translate-x-12" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary">Mobil Cihaz</h3>
                <p className="text-sm text-muted-foreground">Telefon veya Tablet</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Garson masalar arasında dolaşırken elindeki mobil cihazdan tüm
              sipariş işlemlerini yapabilir. Hızlı, pratik ve taşınabilir.
            </p>

            <div className="bg-primary/5 rounded-xl p-5">
              <div className="text-[11px] font-bold text-secondary uppercase tracking-wider mb-3">
                Garson Mobil Cihazdan:
              </div>
              <div className="grid grid-cols-2 gap-3">
                {mobileActions.map((a) => {
                  const Icon = a.icon;
                  return (
                    <div key={a.label} className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <Icon className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-secondary">{a.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dokunmatik Ekran */}
          <div className="group relative bg-white rounded-2xl p-8 card-hover border border-blue-200 ring-1 ring-blue-100 shadow-lg shadow-blue-500/5 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-12 translate-x-12" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary">Dokunmatik Ekran</h3>
                <p className="text-sm text-muted-foreground">POS Bilgisayar</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Kasada veya garson noktalarında sabit dokunmatik ekranlardan aynı
              işlemler hızlıca yapılabilir. Büyük ekran, büyük konfor.
            </p>

            <div className="bg-blue-50 rounded-xl p-5">
              <div className="text-[11px] font-bold text-secondary uppercase tracking-wider mb-3">
                Dokunmatik Ekrandan:
              </div>
              <div className="grid grid-cols-2 gap-3">
                {mobileActions.map((a) => {
                  const Icon = a.icon;
                  return (
                    <div key={a.label} className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <Icon className="h-3.5 w-3.5 text-blue-600" />
                      </div>
                      <span className="text-xs font-medium text-secondary">{a.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mutfak İletim */}
        <div className="bg-white rounded-2xl border border-border/50 p-8 mb-12">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 justify-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-bold text-secondary">veya</span>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Monitor className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ArrowRight className="h-5 w-5 text-primary hidden sm:block" />
              <ArrowRight className="h-5 w-5 text-primary rotate-90 sm:hidden" />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                <Printer className="h-5 w-5 text-amber-600" />
                <div>
                  <div className="text-xs font-bold text-secondary">Mutfak Yazıcısı</div>
                  <div className="text-[10px] text-muted-foreground">Fiş çıktısı</div>
                </div>
              </div>
              <span className="text-xs font-bold text-muted-foreground">veya</span>
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                <Monitor className="h-5 w-5 text-green-600" />
                <div>
                  <div className="text-xs font-bold text-secondary">Mutfak Ekranı</div>
                  <div className="text-[10px] text-muted-foreground">Anlık görüntüleme</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 20 Yıllık Tecrübe + Uzman Desteği */}
        <div className="bg-gradient-to-r from-secondary via-secondary to-secondary-light rounded-2xl p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[80px]" />

          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* 20 Yıl Badge */}
            <div className="flex-shrink-0 text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-xl shadow-primary/30 mx-auto mb-3">
                <div>
                  <div className="text-3xl font-black text-white leading-none">20</div>
                  <div className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Yıllık</div>
                </div>
              </div>
              <div className="text-sm font-bold text-white">Sektör Tecrübesi</div>
            </div>

            {/* Açıklama */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                <span className="gradient-text">20 Yıllık Tecrübe</span> ile Doğru Karar
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-5">
                İşletmenizin büyüklüğüne ve çalışma şekline göre uzman
                personelimiz hangi cihazın daha verimli çalışacağına
                — mobil mi, dokunmatik mi yoksa ikisi birlikte mi — karar
                verir. Yanlış yatırım yapmaz, doğru sistemle başlarsınız.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <Headset className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-xs text-white/60">Yerinde keşif ve analiz</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-xs text-white/60">İşletmeye özel öneri</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <Award className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-xs text-white/60">20 yıllık sektör bilgisi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Restoran Türleri ─────────── */
function RestaurantTypes() {
  const types = [
    {
      icon: Monitor,
      title: "Satış Noktası & Kiosk",
      desc: "Müşteri kendi siparişini kiosk ekranından girsin. Kasada bekleme süresi sıfırlansın, personel maliyeti düşsün.",
      highlights: [
        "Dokunmatik kiosk ekran desteği",
        "Hızlı ödeme entegrasyonu",
        "Kişiselleştirilebilir menü arayüzü",
        "Kasa ve yazıcı entegrasyonu",
      ],
      gradient: "from-blue-600 to-indigo-600",
      shadow: "shadow-blue-500/20",
      bg: "bg-blue-50",
      accent: "text-blue-600",
      checkBg: "bg-blue-100",
    },
    {
      icon: Coffee,
      title: "Self Servis",
      desc: "Yemek hattı, büfe veya kantin modeli. Müşteri tabldot seçsin, kasada hızlıca ödesin. Tepsili servis akışına uygun.",
      highlights: [
        "Tabldot / porsiyonluk seçim",
        "Hızlı kasa kesim ekranı",
        "Günlük menü yönetimi",
        "Personel yemek takibi",
      ],
      gradient: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20",
      bg: "bg-emerald-50",
      accent: "text-emerald-600",
      checkBg: "bg-emerald-100",
    },
    {
      icon: Flame,
      title: "Fast Food",
      desc: "Hız her şey! Hızlı sipariş girişi, hızlı mutfak çıktısı, hızlı ödeme. Paket ve gel-al siparişleri için optimize.",
      highlights: [
        "Hızlı sipariş giriş ekranı",
        "Paket / Gel-Al sipariş modu",
        "Combo / Menü tanımlama",
        "Sıra numarası yönetimi",
      ],
      gradient: "from-orange-500 to-red-500",
      shadow: "shadow-orange-500/20",
      bg: "bg-orange-50",
      accent: "text-orange-600",
      checkBg: "bg-orange-100",
    },
    {
      icon: Wine,
      title: "Alakart Restoran",
      desc: "Tam donanımlı masa yönetimi, çoklu kurs siparişi, şarap listesi ve detaylı hesap operasyonları ile fine-dining deneyimi.",
      highlights: [
        "Kurs bazlı sipariş yönetimi",
        "Detaylı masa haritalsı ve rezervasyon",
        "Hesap bölme / birleştirme",
        "İndirim ve ikram yetki kontrolü",
      ],
      gradient: "from-violet-500 to-purple-600",
      shadow: "shadow-violet-500/20",
      bg: "bg-violet-50",
      accent: "text-violet-600",
      checkBg: "bg-violet-100",
      popular: true,
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 section-gradient" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Her Konsepte Uygun
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Restoran Türünüze{" "}
            <span className="gradient-text">Özel Çözüm</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Kiosk’tan fine-dining’e, fast food’dan self servise — her konsepte
            özelleştirilmiş sipariş sistemi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {types.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className={`group relative bg-white rounded-2xl overflow-hidden card-hover border border-border/50`}
              >
                {/* Popular badge */}
                {t.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-primary-dark px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider shadow-lg shadow-primary/25">
                      <Star className="h-3 w-3" />
                      En Popüler
                    </div>
                  </div>
                )}

                {/* Header gradient strip */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${t.gradient}`} />

                <div className="p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center flex-shrink-0 shadow-lg ${t.shadow} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-1">
                        {t.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>

                  <div className={`${t.bg} rounded-xl p-5`}>
                    <div className="space-y-3">
                      {t.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full ${t.checkBg} flex items-center justify-center flex-shrink-0`}
                          >
                            <CheckCircle className={`h-3.5 w-3.5 ${t.accent}`} />
                          </div>
                          <span className="text-sm text-foreground/70">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Performans Göstergeleri ─────────── */
function PerformanceMetrics() {
  const metrics = [
    { value: "%100", label: "Kayıp-Kaçak Kontrolü", icon: ShieldCheck },
    { value: "0", label: "Donma & Kesinti", icon: Zap },
    { value: "∞", label: "Yazılım Garantisi", icon: Award },
    { value: "30dk", label: "Sorun Giderme Garantisi", icon: Clock },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary via-secondary-light to-secondary" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

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
export default function MasaSiparisiContent() {
  return (
    <>
      <TableFlowDiagram />
      <TableMapSection />
      <DeviceOrderSection />
      <RestaurantTypes />
      <AccountManagement />
      <WaiterPerformance />
      <PerformanceMetrics />
    </>
  );
}
