"use client";

import {
  Building2,
  Users,
  LayoutDashboard,
  ShieldCheck,
  UtensilsCrossed,
  Package,
  BarChart3,
  CreditCard,
  Truck,
  Receipt,
  Ban,
  TrendingUp,
  Settings,
  Globe,
  CheckCircle,
  ArrowRight,
  Zap,
  PieChart,
  FileText,
  ShoppingCart,
  Wallet,
  ClipboardList,
  Monitor,
  Clock,
  Filter,
  Download,
} from "lucide-react";

/* ─────────── Hero — Tek veya 300 Şube ─────────── */
function SubeHero() {
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
            Merkezi Yönetim
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            İster 1 Şube, İster 300 Şube —{" "}
            <span className="gradient-text">Anlık Takip</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Tüm şubelerinizi tek panelden gerçek zamanlı yönetin. Masa durumları,
            siparişler, cirolar, kuryeler ve personel — her şey kontrol altında.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Şube Yönetimi", value: "Sınırsız", icon: Building2 },
            { label: "Kullanıcı Rolü", value: "6 Farklı", icon: Users },
            { label: "Rapor Türü", value: "15+", icon: BarChart3 },
            { label: "Anlık Takip", value: "7/24", icon: Clock },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-dark rounded-2xl p-6 border border-white/5 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-black text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Module Overview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { icon: LayoutDashboard, label: "Dashboard", color: "from-blue-500 to-indigo-600" },
            { icon: Users, label: "Rol Yönetimi", color: "from-violet-500 to-purple-600" },
            { icon: Building2, label: "Şube Yönetimi", color: "from-primary to-primary-dark" },
            { icon: UtensilsCrossed, label: "Masa Takibi", color: "from-amber-500 to-orange-600" },
            { icon: ShoppingCart, label: "Sipariş Takibi", color: "from-emerald-500 to-teal-600" },
            { icon: PieChart, label: "Satış Analizi", color: "from-pink-500 to-rose-600" },
            { icon: Package, label: "Ürün İşlemleri", color: "from-cyan-500 to-blue-600" },
            { icon: ClipboardList, label: "Şube Sipariş", color: "from-indigo-500 to-blue-600" },
            { icon: Wallet, label: "Bakiye Takibi", color: "from-green-500 to-emerald-600" },
            { icon: Truck, label: "Kurye Yönetimi", color: "from-orange-500 to-red-600" },
            { icon: Receipt, label: "Gider Yönetimi", color: "from-slate-500 to-gray-600" },
            { icon: Ban, label: "İptal Raporları", color: "from-red-500 to-rose-600" },
            { icon: TrendingUp, label: "Ciro Analizi", color: "from-teal-500 to-cyan-600" },
            { icon: FileText, label: "Genel Rapor", color: "from-purple-500 to-violet-600" },
            { icon: Settings, label: "Sistem Ayarları", color: "from-gray-500 to-slate-600" },
            { icon: Globe, label: "API Entegrasyon", color: "from-blue-600 to-indigo-700" },
          ].map((mod) => (
            <div
              key={mod.label}
              className="group glass-dark rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all duration-300 flex items-center gap-3"
            >
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${mod.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
              >
                <mod.icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-white/80">
                {mod.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Dashboard & Kullanıcı Yönetimi ─────────── */
function DashboardVeKullanicilar() {
  const roles = [
    { name: "Şirket Yöneticisi", desc: "Tüm şubelere tam erişim, sistem ayarları", color: "from-primary to-primary-dark" },
    { name: "Şube Yöneticisi", desc: "Kendi şubesinin tam yönetimi", color: "from-blue-500 to-indigo-600" },
    { name: "Personel", desc: "Sipariş ve masa işlemleri", color: "from-emerald-500 to-teal-600" },
    { name: "Kurye", desc: "Teslimat ve sipariş takibi", color: "from-amber-500 to-orange-600" },
    { name: "Muhasebe", desc: "Ciro, gider ve bakiye raporları", color: "from-violet-500 to-purple-600" },
    { name: "Depo", desc: "Ürün ve stok yönetimi", color: "from-cyan-500 to-blue-600" },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Dashboard */}
          <div>
            <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">
              Gerçek Zamanlı
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary leading-tight mb-6">
              Merkezi{" "}
              <span className="gradient-text">Dashboard</span>
            </h2>
            <p className="text-lg text-foreground/50 mb-8">
              Rol tabanlı hızlı erişim kısayolları ve anlık sistem özeti ile
              tüm operasyonunuzu tek bakışta görün.
            </p>

            {/* Dashboard Mockup */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold text-secondary">Dashboard</h4>
                <span className="text-[10px] font-semibold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">
                  ● Canlı
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Bugünkü Sipariş", val: "247", trend: "+12%" },
                  { label: "Açık Masa", val: "34", trend: "" },
                  { label: "Günlük Ciro", val: "₺18.450", trend: "+8%" },
                ].map((d) => (
                  <div
                    key={d.label}
                    className="rounded-xl bg-gray-50 p-3 text-center"
                  >
                    <div className="text-lg font-black text-secondary">{d.val}</div>
                    <div className="text-[10px] text-foreground/40">{d.label}</div>
                    {d.trend && (
                      <span className="text-[9px] font-bold text-green-500">
                        {d.trend}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                {["Siparişler", "Masalar", "Raporlar", "Ayarlar"].map((btn) => (
                  <div
                    key={btn}
                    className="flex-1 rounded-lg bg-primary/10 py-2 text-center text-[10px] font-semibold text-primary"
                  >
                    {btn}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Roles */}
          <div>
            <div className="inline-flex items-center rounded-full bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-600 uppercase tracking-wider mb-4">
              6 Farklı Rol
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary leading-tight mb-6">
              Kullanıcı &{" "}
              <span className="gradient-text">Rol Yönetimi</span>
            </h2>
            <p className="text-lg text-foreground/50 mb-8">
              Firebase Authentication entegrasyonu ile güvenli giriş. Her role
              özel yetki ve erişim kontrolü.
            </p>

            <div className="space-y-3">
              {roles.map((r) => (
                <div
                  key={r.name}
                  className="group flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${r.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-secondary">
                      {r.name}
                    </h4>
                    <p className="text-xs text-foreground/40">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Şube & Masa & Sipariş Takibi ─────────── */
function SubeMasaSiparis() {
  const modules = [
    {
      badge: "Şube Yönetimi",
      badgeColor: "bg-primary/10 text-primary",
      title: "Çoklu Şube Yönetimi",
      desc: "Şube oluşturma, düzenleme ve silme. Şube bazında tüm verileri filtreleme ve şube personel yönetimi.",
      icon: Building2,
      color: "from-primary to-primary-dark",
      features: [
        "Şube oluşturma / düzenleme / silme",
        "Şube bazında veri filtreleme",
        "Şube personel yönetimi",
        "Tüm verilerde şube filtresi",
      ],
    },
    {
      badge: "Masa Takibi",
      badgeColor: "bg-amber-500/10 text-amber-600",
      title: "Anlık Masa Durumları",
      desc: "Boş, dolu ve ödeme bekleyen masaları anlık takip edin. Grafiksel dağılım analizi ve masa bazında adisyon görüntüleme.",
      icon: UtensilsCrossed,
      color: "from-amber-500 to-orange-600",
      features: [
        "Anlık masa durumları (Boş / Dolu / Ödeme Bekliyor)",
        "Grafiksel masa dağılım analizi (Pie Chart)",
        "Masa bazında adisyon görüntüleme",
        "Şube filtreli masa takibi",
      ],
    },
    {
      badge: "Sipariş Takibi",
      badgeColor: "bg-emerald-500/10 text-emerald-600",
      title: "Gerçek Zamanlı Siparişler",
      desc: "Tüm sipariş kaynaklarını anlık takip edin. Telefon, Yemeksepeti, Getir, Trendyol, Migros ve masa siparişleri tek ekranda.",
      icon: ShoppingCart,
      color: "from-emerald-500 to-teal-600",
      features: [
        "Gerçek zamanlı sipariş izleme",
        "Kaynak filtresi: Telefon, Yemeksepeti, Getir, Trendyol, Migros, Masa",
        "Saat aralığı ve tarih filtresi",
        "Sipariş detay modalı",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary via-secondary to-secondary-light" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
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
            Operasyon Takibi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Şube, Masa ve{" "}
            <span className="gradient-text">Sipariş Takibi</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Tüm şubelerinizin masa durumlarını, siparişlerini ve operasyonel
            verilerini gerçek zamanlı takip edin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <div key={m.badge} className="relative group">
              <div className="glass-dark rounded-2xl p-8 border border-white/5 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <m.icon className="h-7 w-7 text-white" />
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${m.badgeColor}`}
                  >
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{m.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-6">
                  {m.desc}
                </p>

                <div className="space-y-3 mt-auto">
                  {m.features.map((f, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 border border-white/5"
                    >
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-white/70">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {i < modules.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-primary/60" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Satış, Ürün & Şube Sipariş Sistemi ─────────── */
function SatisUrunSubeSiparis() {
  const cards = [
    {
      icon: PieChart,
      title: "Satış Adetleri & Ürün Analizi",
      desc: "Ürün bazında satış istatistikleri, kaynak bazında filtreleme (Paket/Online/Salon) ve görsel grafikler.",
      color: "from-pink-500 to-rose-600",
      shadow: "shadow-pink-500/20",
      features: [
        "Ürün bazında satış istatistikleri",
        "Kaynak bazında filtreleme (Paket / Online / Salon)",
        "Bar Chart ve Pie Chart görselleri",
      ],
    },
    {
      icon: Package,
      title: "Ürün İşlemleri",
      desc: "Ürün ekleme, düzenleme ve silme. Birim ölçüsü ve fiyat yönetimi ile menünüzü merkezi olarak kontrol edin.",
      color: "from-cyan-500 to-blue-600",
      shadow: "shadow-cyan-500/20",
      features: [
        "Ürün ekleme / düzenleme / silme",
        "Birim ölçüsü yönetimi",
        "Fiyat yönetimi",
      ],
    },
    {
      icon: ClipboardList,
      title: "Şube Sipariş Sistemi",
      desc: "Şubeden merkeze ürün sipariş talebi oluşturma, sepet yönetimi ve sipariş durumu takibi.",
      color: "from-indigo-500 to-blue-600",
      shadow: "shadow-indigo-500/20",
      features: [
        "Şubeden merkeze sipariş talebi",
        "Sepet yönetimi",
        "Durum takibi: Bekleme → Onaylı → Gönderilen → Tamamlanan",
        "PDF ve Excel export",
      ],
    },
    {
      icon: Wallet,
      title: "Şube Bakiye Takibi",
      desc: "Borç/alacak bakiye yönetimi, bakiye hareketleri kaydı ve ödeme tipi ile sipariş numarasına göre filtreleme.",
      color: "from-green-500 to-emerald-600",
      shadow: "shadow-green-500/20",
      features: [
        "Borç / Alacak bakiye yönetimi",
        "Bakiye hareketleri kaydı",
        "Ödeme tipi ve sipariş numarasına göre filtreleme",
        "Excel export",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Veri & Operasyon
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Satış, Ürün &{" "}
            <span className="gradient-text">Şube Sipariş</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/50">
            Satış analizlerinden ürün yönetimine, şubeler arası sipariş
            taleplerinden bakiye takibine kadar tüm operasyonel süreçler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-5 ${c.shadow} shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <c.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-foreground/50 leading-relaxed mb-4">
                {c.desc}
              </p>
              <div className="space-y-2">
                {c.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-foreground/60">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Kurye, Gider & İptal Raporları ─────────── */
function KuryeGiderIptal() {
  const sections = [
    {
      icon: Truck,
      title: "Kurye Yönetimi",
      color: "from-orange-500 to-red-600",
      shadow: "shadow-orange-500/20",
      items: [
        { label: "Kurye Atama", desc: "Paket siparişlere kurye atama" },
        { label: "Kurye Raporu", desc: "Teslimat başarı oran analizi" },
        { label: "Detaylı Kurye Raporu", desc: "Sipariş bazında kurye performansı" },
        { label: "Teslim Raporu", desc: "Teslimat detayları (müşteri, adres, tutar)" },
      ],
    },
    {
      icon: Receipt,
      title: "Gider Yönetimi",
      color: "from-slate-500 to-gray-600",
      shadow: "shadow-slate-500/20",
      items: [
        { label: "Gider Kalemi Kaydı", desc: "Gider kategorileri oluşturma / düzenleme" },
        { label: "Gider Kaydı", desc: "Günlük gider işlemleri, Günlük Kasa / Merkez Kasa seçimi" },
        { label: "Filtreleme", desc: "Tarih, kategori ve kaynağa göre filtreleme" },
        { label: "Dışa Aktarma", desc: "Excel export" },
      ],
    },
    {
      icon: Ban,
      title: "İptal Raporları",
      color: "from-red-500 to-rose-600",
      shadow: "shadow-red-500/20",
      items: [
        { label: "Paket İptal", desc: "Paket sipariş iptal raporları" },
        { label: "Salon İptal", desc: "Salon sipariş iptal raporları" },
        { label: "İptal Detayları", desc: "İptal nedeni, tarih/saat gösterimi" },
        { label: "Şube Filtresi", desc: "Şube bazında filtreleme" },
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary via-secondary to-secondary-light" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[200px]" />
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
            Operasyonel Kontrol
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Kurye, Gider &{" "}
            <span className="gradient-text">İptal Raporları</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Kurye performansından gider yönetimine, iptal analizlerinden
            detaylı raporlamaya kadar her şey merkezi panelde.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {sections.map((s) => (
            <div
              key={s.title}
              className="glass-dark rounded-2xl p-8 border border-white/5 h-full flex flex-col"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 ${s.shadow} shadow-lg`}
              >
                <s.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{s.title}</h3>
              <div className="space-y-4 mt-auto">
                {s.items.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm font-semibold text-white/80">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-xs text-white/35 pl-6">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Ciro Analizi & Genel Rapor ─────────── */
function CiroVeGenelRapor() {
  const ciroTabs = [
    { name: "Özet", icon: LayoutDashboard },
    { name: "Paket Sipariş", icon: Package },
    { name: "Masa Sipariş", icon: UtensilsCrossed },
    { name: "İptal", icon: Ban },
    { name: "Ürün", icon: ShoppingCart },
    { name: "Masalar", icon: Monitor },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Ciro Analizi */}
          <div>
            <div className="inline-flex items-center rounded-full bg-teal-500/10 px-4 py-1.5 text-xs font-semibold text-teal-600 uppercase tracking-wider mb-4">
              Ciro & Analiz
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary leading-tight mb-6">
              Ciro &{" "}
              <span className="gradient-text">Analiz Raporu</span>
            </h2>
            <p className="text-lg text-foreground/50 mb-8">
              6 farklı tab ile detaylı ciro analizi. Bar Chart, Pie Chart ve
              Area Chart görselleri ile verilerinizi görsel olarak analiz edin.
            </p>

            {/* Tab Mockup */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex flex-wrap gap-2 mb-6">
                {ciroTabs.map((tab, i) => (
                  <div
                    key={tab.name}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold ${
                      i === 0
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-foreground/50"
                    }`}
                  >
                    <tab.icon className="h-3 w-3" />
                    {tab.name}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  { label: "Bar Chart ile ciro dağılımı", icon: BarChart3 },
                  { label: "Pie Chart ile kaynak analizi", icon: PieChart },
                  { label: "Area Chart ile trend takibi", icon: TrendingUp },
                  { label: "Kaynak bazında ciro hesaplama", icon: Filter },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3"
                  >
                    <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground/60">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Genel Rapor */}
          <div>
            <div className="inline-flex items-center rounded-full bg-purple-500/10 px-4 py-1.5 text-xs font-semibold text-purple-600 uppercase tracking-wider mb-4">
              Birleşik Görünüm
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary leading-tight mb-6">
              Genel{" "}
              <span className="gradient-text">Rapor</span>
            </h2>
            <p className="text-lg text-foreground/50 mb-8">
              Gider, sipariş ve kurye raporlarının birleşik görünümü. Saat ve
              şube bazında filtreleme ile detaylı analiz.
            </p>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
              {[
                {
                  icon: Receipt,
                  title: "Gider Raporu",
                  desc: "Tüm şubelerin gider toplamları ve detayları",
                  color: "bg-slate-100 text-slate-600",
                },
                {
                  icon: ShoppingCart,
                  title: "Sipariş Raporu",
                  desc: "Sipariş toplamları, kaynak dağılımı ve trend",
                  color: "bg-emerald-100 text-emerald-600",
                },
                {
                  icon: Truck,
                  title: "Kurye Raporu",
                  desc: "Kurye bazlı teslimat performans raporu",
                  color: "bg-orange-100 text-orange-600",
                },
              ].map((r) => (
                <div
                  key={r.title}
                  className="flex items-start gap-4 rounded-xl bg-gray-50 p-4"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${r.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-secondary mb-1">{r.title}</h4>
                    <p className="text-xs text-foreground/40">{r.desc}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-3 pt-2">
                {[
                  { icon: Clock, label: "Saat Filtresi" },
                  { icon: Building2, label: "Şube Filtresi" },
                  { icon: Download, label: "Excel Export" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-primary/10 py-2 text-[10px] font-semibold text-primary"
                  >
                    <f.icon className="h-3 w-3" />
                    {f.label}
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

/* ─────────── Sistem Ayarları & API ─────────── */
function SistemVeApi() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sistem Ayarları */}
          <div className="glass-dark rounded-2xl p-8 border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-500 to-slate-600 flex items-center justify-center shadow-lg">
                <Settings className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Sistem Ayarları</h3>
                <p className="text-xs text-white/40">Canlı ayar senkronizasyonu</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Menü modüllerini göster / gizle (Şube, Kurye, Rapor İşlemleri)",
                "\"Gel Al\" siparişleri kontrolü",
                "Canlı ayar senkronizasyonu",
                "Şube bazında modül ayarları",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 border border-white/5"
                >
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* API & Entegrasyon */}
          <div className="glass-dark rounded-2xl p-8 border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
                <Globe className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  API & Entegrasyon
                </h3>
                <p className="text-xs text-white/40">Cloud Functions</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Masa yönetimi API'leri",
                "Müşteri yönetimi API'leri",
                "Masa ödemeleri ve iptal kayıtları",
                "API Key tabanlı güvenlik",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 border border-white/5"
                >
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Ana Export ─────────── */
export default function CokluSubeContent() {
  return (
    <>
      <SubeHero />
      <DashboardVeKullanicilar />
      <SubeMasaSiparis />
      <SatisUrunSubeSiparis />
      <KuryeGiderIptal />
      <CiroVeGenelRapor />
      <SistemVeApi />
    </>
  );
}
