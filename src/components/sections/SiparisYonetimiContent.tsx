"use client";

import {
  ShieldCheck,
  Layers,
  Award,
  Zap,
  UtensilsCrossed,
  Printer,
  ChefHat,
  Receipt,
  ArrowRight,
  Store,
  Building2,
  Truck,
  Coffee,
  Settings,
  CheckCircle,
  TrendingUp,
  Lock,
  Users,
  Ruler,
  Scale,
  Plus,
  Minus,
  Flame,
  Tag,
  Gift,
} from "lucide-react";

/* ─────────── Sipariş Akış Diyagramı ─────────── */
function OrderFlowDiagram() {
  const steps = [
    {
      icon: Users,
      label: "Garson Sipariş Alır",
      desc: "Masa veya paket sipariş tablet/telefon üzerinden anında girilir",
      color: "from-blue-500 to-blue-600",
      shadow: "shadow-blue-500/25",
    },
    {
      icon: Printer,
      label: "Mutfak Fişi Çıkar",
      desc: "Sipariş otomatik olarak mutfak yazıcısına iletilir",
      color: "from-amber-500 to-orange-500",
      shadow: "shadow-amber-500/25",
    },
    {
      icon: ChefHat,
      label: "Mutfak Hazırlar",
      desc: "Mutfak ekranında sipariş görüntülenir, hazırlık başlar",
      color: "from-green-500 to-emerald-600",
      shadow: "shadow-green-500/25",
    },
    {
      icon: Receipt,
      label: "Kasa Hesap Alır",
      desc: "Sipariş tamamlanır, ödeme alınır ve kayıt oluşur",
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
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
            Sipariş Akışı
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Müşteri Siparişinden Teslimata{" "}
            <span className="gradient-text">Kusursuz İşleyiş</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Her adım otomatik, her işlem kayıt altında. Tek bir sipariş bile
            gözden kaçmaz.
          </p>
        </div>

        {/* Flow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
          {/* Connector Lines (desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-blue-500/40 via-amber-500/40 via-green-500/40 to-purple-500/40" />
            {/* Animated dots on the line */}
            <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white animate-flow-dot" />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative flex flex-col items-center text-center group">
                {/* Arrow between steps (mobile) */}
                {i > 0 && (
                  <div className="md:hidden flex items-center justify-center -mt-1 mb-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-white/50 rotate-90" />
                    </div>
                  </div>
                )}

                {/* Icon */}
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

                {/* Step number */}
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold flex items-center justify-center mb-3">
                  {i + 1}
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {step.label}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Servis Modları ─────────── */
function ServiceModes() {
  const modes = [
    {
      icon: Coffee,
      title: "Sade Masa Servis",
      desc: "Restoran ve kafe konseptleri için masa bazlı sipariş yönetimi. Masalarınızı görsel haritada takip edin.",
      features: ["Masa haritası", "Garson ataması", "Hesap bölme"],
      gradient: "from-blue-500/10 to-cyan-500/5",
      iconBg: "from-blue-500 to-cyan-500",
    },
    {
      icon: Truck,
      title: "Sade Paket Servis",
      desc: "Paket ve kurye bazlı sipariş yönetimi. Adrese teslim ve gel-al siparişlerini kolayca yönetin.",
      features: ["Adres yönetimi", "Kurye takibi", "Sipariş rotası"],
      gradient: "from-amber-500/10 to-orange-500/5",
      iconBg: "from-amber-500 to-orange-500",
    },
    {
      icon: Store,
      title: "İkisi Birden",
      desc: "Hem masa hem paket servis tek sistemde. İki modu birlikte kullanarak tüm sipariş kanallarınızı yönetin.",
      features: ["Birleşik panel", "Kanal bazlı raporlama", "Esnek geçiş"],
      gradient: "from-primary/10 to-primary-dark/5",
      iconBg: "from-primary to-primary-dark",
      highlight: true,
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 section-gradient" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Esnek Servis Modları
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            İşletmenize Göre{" "}
            <span className="gradient-text">Yapılandırın</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Sade masa servis, sade paket servis veya ikisini birden kullanın.
            Sistem size uyum sağlar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modes.map((mode) => {
            const Icon = mode.icon;
            return (
              <div
                key={mode.title}
                className={`relative bg-white rounded-2xl p-8 card-hover border ${
                  mode.highlight
                    ? "border-primary/30 ring-2 ring-primary/10"
                    : "border-border/50"
                }`}
              >
                {mode.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold px-4 py-1 rounded-full">
                    En Popüler
                  </div>
                )}

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mode.iconBg} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-secondary mb-3">
                  {mode.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {mode.desc}
                </p>

                <ul className="space-y-2">
                  {mode.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-foreground/70">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Avantaj Kartları ─────────── */
function AdvantageCards() {
  const advantages = [
    {
      icon: ShieldCheck,
      title: "%100'e Yakın Kayıp-Kaçak Kontrolü",
      desc: "Her sipariş, her ürün ve her ödeme kayıt altındadır. Sistem üzerinden geçmeyen işlem yoktur. Kayıp ve kaçak oranınızı sıfıra indirin.",
      stat: "%100",
      statLabel: "Kontrol Oranı",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: Award,
      title: "Ömür Boyu Yazılım Garantisi",
      desc: "Yazılımsal sorunlara karşı ömür boyu garanti. Güncelleme, hata düzeltme ve teknik destek süresiz olarak sağlanır.",
      stat: "∞",
      statLabel: "Süresiz Garanti",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Hiçbir Zaman Donma Yapmaz",
      desc: "Optimize edilmiş altyapı sayesinde yoğun saatlerde bile sistem kasma veya donma yaşamaz. Kesintisiz hizmet garantisi.",
      stat: "0ms",
      statLabel: "Donma Süresi",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Settings,
      title: "Modüler & Yapılandırılabilir",
      desc: "İhtiyacınıza göre modülleri ekleyin veya çıkarın. Tam özelleştirilebilir yapı, gereksiz karmaşıklık yok.",
      stat: "100%",
      statLabel: "Özelleştirme",
      color: "from-blue-500 to-cyan-600",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Avantajlar
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Neden{" "}
            <span className="gradient-text">Sipariş Makinesi?</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Rakiplerden farkımız: güvenilirlik, performans ve sınırsız destek.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="group relative bg-white rounded-2xl p-8 card-hover border border-border/50 overflow-hidden"
              >
                {/* Subtle gradient bg on hover */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-12 translate-x-12" />

                <div className="flex items-start gap-6 relative">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${adv.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-secondary mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {adv.desc}
                    </p>

                    {/* Stat badge */}
                    <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-1.5">
                      <span className="text-lg font-bold gradient-text">
                        {adv.stat}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {adv.statLabel}
                      </span>
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

/* ─────────── Ölçeklenebilirlik ─────────── */
function ScalabilitySection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 section-gradient" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              Ölçeklenebilir
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary leading-tight mb-6">
              Küçük İşletmeden Zincir Restorana{" "}
              <span className="gradient-text">Tam Kontrol</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              İster tek şubeli küçük bir kafe olun, ister 50+ şubeli bir
              restoran zinciri. Sipariş Makinesi tüm ölçeklere uyum sağlar ve
              işleyişinizi eksiksiz kontrol altında tutar.
            </p>

            <div className="space-y-4">
              {[
                "Tek şubeden çoklu şubeye kolay geçiş",
                "Merkezi yönetim paneli ile tüm şubeleri izleme",
                "Şube bazlı performans ve raporlama",
                "Her şubeye özel menü ve fiyat tanımlama",
                "Kullanıcı yetkilendirme ve rol bazlı erişim",
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

          {/* Right - Visual: Scalability Graphic */}
          <div className="relative">
            <div className="bg-white rounded-3xl border border-border/50 p-8 shadow-xl shadow-black/5">
              {/* Mini dashboard mockup */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-muted-foreground">
                  Sipariş Makinesi — Yönetim Paneli
                </span>
              </div>

              {/* Branch cards */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { name: "Merkez Şube", orders: 847, trend: "+12%" },
                  { name: "Kadıköy Şube", orders: 632, trend: "+8%" },
                  { name: "Beşiktaş Şube", orders: 521, trend: "+15%" },
                  { name: "Ataşehir Şube", orders: 394, trend: "+22%" },
                ].map((branch) => (
                  <div
                    key={branch.name}
                    className="bg-muted rounded-xl p-4 border border-border/30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-secondary">
                        {branch.name}
                      </span>
                      <span className="text-[10px] font-bold text-green-500 bg-green-50 px-1.5 py-0.5 rounded">
                        {branch.trend}
                      </span>
                    </div>
                    <div className="text-xl font-bold text-secondary">
                      {branch.orders}
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      sipariş / bugün
                    </div>
                    {/* Mini bar chart */}
                    <div className="flex items-end gap-0.5 mt-2 h-6">
                      {[40, 65, 50, 80, 70, 90, 60].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-primary/20 rounded-sm"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom total bar */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">
                    Toplam Sipariş (Bugün)
                  </div>
                  <div className="text-2xl font-bold text-secondary">2,394</div>
                </div>
                <div className="flex items-center gap-1 text-green-500">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-sm font-bold">+14.3%</span>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Profesyonel Sipariş Yönetimi ─────────── */
function ProfessionalOrderManagement() {
  const features = [
    {
      icon: Ruler,
      title: "Ürün Boyutları",
      desc: "Her ürün için Küçük – Orta – Büyük veya 90gr – 120gr – 180gr gibi boyut seçenekleri tanımlayın.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Tag,
      title: "Boyuta Göre Fiyatlandırma",
      desc: "Her boyut için farklı fiyat belirleyin. Küçük boy 90₺, orta 120₺, büyük 150₺ gibi esnek fiyat yapısı.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Plus,
      title: "Ek Malzeme Seçenekleri",
      desc: "Kaşar ekle, mantar ekle, sos ekle… Ürüne eklenebilecek tüm malzemeleri ve fiyatlarını tanımlayın.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Minus,
      title: "İçindekiler & Çıkartılabilir Malzemeler",
      desc: "Ürünün standart içeriği görünsün. Müşteri isterse \u201Csoğansız\u201D, \u201Csossuz\u201D gibi çıkartma yapabilsin.",
      gradient: "from-red-500 to-rose-500",
    },
    {
      icon: Flame,
      title: "Pişme Seçeneği",
      desc: "Az pişmiş, orta, çok pişmiş… Et, burger, tost gibi ürünlerde pişme tercihini siparişe ekleyin.",
      gradient: "from-orange-600 to-red-600",
    },
    {
      icon: Layers,
      title: "Boyuta Göre Ek Malzeme Fiyatı",
      desc: "Küçük boy kaşar ekleme 5₺, büyük boy kaşar ekleme 10₺ gibi boyut bazlı ek malzeme fiyatlandırma.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Gift,
      title: "Kampanya Oluşturma",
      desc: "1 Alına 1 Bedava, 2 Pizza alına 1 Lt içecek ücretsiz gibi esnek kampanya kuralları tanımlayın.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  /* Mini product mockup for the right side */
  const mockupSizes = [
    { label: "Küçük", weight: "90gr", price: "₺90", active: false },
    { label: "Orta", weight: "120gr", price: "₺120", active: true },
    { label: "Büyük", weight: "180gr", price: "₺150", active: false },
  ];
  const mockupExtras = [
    { name: "Kaşar", price: "+₺10", checked: true },
    { name: "Mantar", price: "+₺8", checked: false },
    { name: "Acı Sos", price: "+₺5", checked: true },
  ];
  const mockupRemove = [
    { name: "Soğan", removed: true },
    { name: "Turşu", removed: false },
    { name: "Mayıdanoz", removed: true },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary via-secondary to-secondary-light" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Sol — Özellik Listesi */}
          <div>
            <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
              Profesyonel Sipariş Yönetimi
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Her Detay{" "}
              <span className="gradient-text">Kontrol Altında</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-10">
              Ürün boyutları, ek malzemeler, pişme tercihleri ve kampanyalar —
              siparişin her parçasını özelleştirin.
            </p>

            <div className="space-y-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-4 group">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">{f.title}</h3>
                      <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sağ — Sipariş Mockup */}
          <div className="relative lg:sticky lg:top-32">
            <div className="bg-white rounded-3xl border border-border/50 p-6 shadow-xl shadow-black/5">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-muted-foreground">
                  Sipariş Detay — Kartal Burger
                </span>
              </div>

              {/* Product header */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-base font-bold text-secondary">Kartal Burger</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">
                      Dana köfte, kaşar, marul, domates, sos
                    </div>
                  </div>
                  <div className="text-xl font-bold text-primary">₺120</div>
                </div>
              </div>

              {/* Boyut Seçimi */}
              <div className="mb-4">
                <div className="text-[11px] font-bold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Ruler className="h-3 w-3 text-primary" /> Boyut Seçimi
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {mockupSizes.map((s) => (
                    <div
                      key={s.label}
                      className={`rounded-lg border-2 p-2.5 text-center transition-all ${
                        s.active
                          ? "border-primary bg-primary/5 shadow-sm shadow-primary/10"
                          : "border-border/50 bg-muted/30"
                      }`}
                    >
                      <div className="text-xs font-bold text-secondary">{s.label}</div>
                      <div className="text-[10px] text-muted-foreground">{s.weight}</div>
                      <div className={`text-sm font-bold mt-1 ${s.active ? "text-primary" : "text-secondary"}`}>
                        {s.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pişme Seçimi */}
              <div className="mb-4">
                <div className="text-[11px] font-bold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Flame className="h-3 w-3 text-orange-500" /> Pişme Seçeneği
                </div>
                <div className="flex gap-2">
                  {["Az", "Orta", "Çok"].map((p, i) => (
                    <div
                      key={p}
                      className={`flex-1 rounded-lg border-2 py-1.5 text-center text-xs font-semibold transition-all ${
                        i === 1
                          ? "border-orange-400 bg-orange-50 text-orange-600"
                          : "border-border/50 text-muted-foreground bg-muted/30"
                      }`}
                    >
                      {p} Pişmiş
                    </div>
                  ))}
                </div>
              </div>

              {/* Ek Malzeme */}
              <div className="mb-4">
                <div className="text-[11px] font-bold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Plus className="h-3 w-3 text-green-500" /> Ek Malzeme
                </div>
                <div className="space-y-1.5">
                  {mockupExtras.map((e) => (
                    <div key={e.name} className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                          e.checked ? "border-green-500 bg-green-500" : "border-border"
                        }`}>
                          {e.checked && <CheckCircle className="h-3 w-3 text-white" />}
                        </div>
                        <span className="text-xs text-secondary">{e.name}</span>
                      </div>
                      <span className="text-xs font-semibold text-green-600">{e.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Çıkartılacak */}
              <div className="mb-4">
                <div className="text-[11px] font-bold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Minus className="h-3 w-3 text-red-500" /> Çıkart
                </div>
                <div className="flex gap-2 flex-wrap">
                  {mockupRemove.map((r) => (
                    <div
                      key={r.name}
                      className={`rounded-full px-3 py-1 text-xs font-medium border transition-all ${
                        r.removed
                          ? "border-red-200 bg-red-50 text-red-500 line-through"
                          : "border-border/50 bg-muted/30 text-muted-foreground"
                      }`}
                    >
                      {r.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Kampanya Bilgisi */}
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Gift className="h-4 w-4 text-pink-500" />
                  <span className="text-xs font-bold text-pink-600">Aktif Kampanya</span>
                </div>
                <p className="text-[11px] text-pink-500">
                  2 Burger alına 1 Lt İçecek Ücretsiz! 🎉
                </p>
              </div>

              {/* Toplam */}
              <div className="mt-4 flex items-center justify-between bg-secondary rounded-xl p-4">
                <span className="text-sm font-bold text-white">Toplam</span>
                <div className="text-right">
                  <div className="text-xs text-white/50 line-through">₺135</div>
                  <div className="text-xl font-bold text-primary">₺120</div>
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

/* ─────────── Terazi Entegrasyonu ─────────── */
function TeraziEntegrasyonu() {
  const flowSteps = [
    {
      step: "01",
      title: "Ürün Tartılır",
      desc: "Terazi üzerinde ürün tartılır, ağırlık bilgisi otomatik olarak yazılıma aktarılır.",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20",
    },
    {
      step: "02",
      title: "Fiyat Hesaplanır",
      desc: "Birim fiyat × tartılan ağırlık otomatik çarpılarak satış tutarı belirlenir.",
      color: "from-primary to-primary-dark",
      shadow: "shadow-primary/20",
    },
    {
      step: "03",
      title: "Adisyona Eklenir",
      desc: "Hesaplanan tutar tek tuşla adisyona veya hızlı satış ekranına eklenir.",
      color: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20",
    },
    {
      step: "04",
      title: "Fiş Basılır",
      desc: "Ödeme alınır, ağırlık ve tutar bilgisi ile mali fiş otomatik basılır.",
      color: "from-violet-500 to-purple-600",
      shadow: "shadow-violet-500/20",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary via-secondary to-secondary-light" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Sol — Açıklama */}
          <div>
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
              Terazi Entegrasyonu
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Terazi ile{" "}
              <span className="gradient-text">Hızlı Satış</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              Tartılı ürün satan işletmeler için terazi entegrasyonu. Terazi
              üzerinde tartılan ürünün ağırlığı otomatik olarak sisteme aktarılır,
              birim fiyat üzerinden tutar hesaplanır ve tek tuşla satış
              tamamlanır.
            </p>

            <div className="space-y-4">
              {[
                "Terazi cihazıyla otomatik ağırlık aktarımı",
                "Kilogram ve gram bazlı birim fiyatlandırma",
                "Tartım sonrası tek tuşla hızlı satış",
                "Ağırlık bilgisi fişe ve rapora yansır",
                "Kasap, şarküteri, manav, kuruyemiş için ideal",
                "Yazarkasa entegrasyonu ile mali fiş desteği",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <span className="text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ — Terazi Mockup */}
          <div className="relative">
            <div className="glass-dark rounded-3xl border border-white/5 p-6 shadow-xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-white/40">
                  Hızlı Satış — Terazi Modu
                </span>
              </div>

              {/* Terazi gösterge */}
              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-5 mb-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Scale className="h-5 w-5 text-blue-400" />
                  <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Terazi Okuması</span>
                </div>
                <div className="text-5xl font-black text-white mb-1">0.750</div>
                <div className="text-sm text-white/40">kilogram</div>
              </div>

              {/* Ürün bilgisi */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-sm font-bold text-white">Dana Kıyma</div>
                    <div className="text-xs text-white/40 mt-0.5">Birim Fiyat: ₺320,00 / kg</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/30">Toplam</div>
                    <div className="text-xl font-bold text-primary">₺240,00</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/30">
                  <span>0.750 kg × ₺320,00 = ₺240,00</span>
                </div>
              </div>

              {/* Sepet */}
              <div className="space-y-2 mb-4">
                <div className="text-[11px] font-bold text-white/50 uppercase tracking-wider mb-2">Sepet</div>
                {[
                  { name: "Kuşbaşı Et", weight: "1.200 kg", price: "₺468,00" },
                  { name: "Dana Kıyma", weight: "0.750 kg", price: "₺240,00" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Scale className="h-3 w-3 text-white/30" />
                      <span className="text-xs text-white/60">{item.name}</span>
                      <span className="text-[10px] text-white/30">{item.weight}</span>
                    </div>
                    <span className="text-xs font-semibold text-white/80">{item.price}</span>
                  </div>
                ))}
              </div>

              {/* Toplam */}
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 rounded-xl p-4 flex items-center justify-between">
                <span className="text-sm font-bold text-white">Genel Toplam</span>
                <div className="text-2xl font-bold text-primary">₺708,00</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Alt — Akış Diyagramı */}
        <div className="mt-20">
          <h3 className="text-center text-lg font-bold text-white/70 mb-8">Terazi ile Satış Akışı</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {flowSteps.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="glass-dark rounded-2xl p-6 border border-white/5 text-center group h-full">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-4 ${s.shadow} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-lg font-black text-white">{s.step}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed">{s.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Performans Göstergeleri ─────────── */
function PerformanceMetrics() {
  const metrics = [
    { value: "%100", label: "Kayıp-Kaçak Kontrolü", icon: Lock },
    { value: "0", label: "Donma & Kesinti", icon: Zap },
    { value: "∞", label: "Yazılım Garantisi", icon: Award },
    { value: "30dk", label: "Sorun Giderme Garantisi", icon: ShieldCheck },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary via-secondary-light to-secondary" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="text-center glass-dark rounded-2xl py-8 px-4"
              >
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
export default function SiparisYonetimiContent() {
  return (
    <>
      <OrderFlowDiagram />
      <AdvantageCards />
      <ServiceModes />
      <ProfessionalOrderManagement />
      <TeraziEntegrasyonu />
      <ScalabilitySection />
      <PerformanceMetrics />
    </>
  );
}
