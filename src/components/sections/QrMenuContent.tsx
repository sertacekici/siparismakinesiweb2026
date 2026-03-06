"use client";

import {
  QrCode,
  Eye,
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Utensils,
  Truck,
  ShoppingBag,
  DollarSign,
  Clock,
  MapPin,
  RefreshCw,
  Layers,
  Ruler,
  Settings,
  Image,
  PlusCircle,
  Pencil,
  Trash2,
  ShieldCheck,
  Zap,
  Award,
  Timer,
  Loader,
  PackageCheck,
  ChefHat,
} from "lucide-react";

/* ─────────── 2 Çalışma Prensibi ─────────── */
function WorkingModes() {
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
            2 Farklı Çalışma Prensibi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            QR Kod Okut,{" "}
            <span className="gradient-text">İstediğini Yap</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            İşletmenize uygun modeli seçin: Müşteri doğrudan sipariş versin
            veya sadece menüyü incelesin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mod 1 — Sipariş Verme */}
          <div className="group relative glass-dark rounded-2xl p-8 border border-primary/20 ring-1 ring-primary/10 overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-primary-dark px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider shadow-lg shadow-primary/25">
                En Popüler
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Sipariş Verme Modu</h3>
                <p className="text-sm text-white/40">Müşteri QR okut → Sipariş ver</p>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Müşteri QR kodu okutarak menüyü görüntüler, ürünleri seçer ve
              doğrudan sipariş verir. Garson beklemeye gerek kalmaz, sipariş
              anında mutfağa iletilir.
            </p>

            {/* Mini Phone Mockup */}
            <div className="bg-white rounded-2xl p-4 max-w-[220px] mx-auto shadow-xl shadow-black/10">
              <div className="bg-primary/10 rounded-lg p-3 mb-3 text-center">
                <QrCode className="h-6 w-6 text-primary mx-auto mb-1" />
                <div className="text-[10px] font-bold text-secondary">QR Okutuldu</div>
              </div>
              <div className="space-y-2 mb-3">
                {["Karışık Pizza", "Adana Kebap", "Ayran"].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2"
                  >
                    <span className="text-[10px] font-medium text-secondary">{item}</span>
                    <div className="w-4 h-4 rounded bg-primary/10 flex items-center justify-center">
                      <PlusCircle className="h-3 w-3 text-primary" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-primary to-primary-dark rounded-lg py-2 text-center">
                <span className="text-[10px] font-bold text-white">Sipariş Ver</span>
              </div>
            </div>
          </div>

          {/* Mod 2 — Menü Görüntüleme */}
          <div className="group relative glass-dark rounded-2xl p-8 border border-white/10 overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Menü Görüntüleme Modu</h3>
                <p className="text-sm text-white/40">Müşteri QR okut → Menüyü incele</p>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Müşteri QR kodu okutarak dijital menüyü inceler, fotoğrafları ve
              fiyatları görür. Sipariş yine garson üzerinden alınır. Basılı menü
              maliyetinden kurtulun.
            </p>

            {/* Mini Phone Mockup */}
            <div className="bg-white rounded-2xl p-4 max-w-[220px] mx-auto shadow-xl shadow-black/10">
              <div className="bg-blue-50 rounded-lg p-3 mb-3 text-center">
                <QrCode className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                <div className="text-[10px] font-bold text-secondary">Dijital Menü</div>
              </div>
              <div className="space-y-2 mb-3">
                {[
                  { name: "Karışık Pizza", price: "₺180" },
                  { name: "Adana Kebap", price: "₺220" },
                  { name: "Ayran", price: "₺25" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2"
                  >
                    <span className="text-[10px] font-medium text-secondary">{item.name}</span>
                    <span className="text-[10px] font-bold text-secondary">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 rounded-lg py-2 text-center">
                <span className="text-[10px] font-bold text-blue-600">Menüyü İncele</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Sipariş Türleri ─────────── */
function OrderTypes() {
  const types = [
    {
      icon: Utensils,
      title: "Masa Siparişi",
      desc: "Müşteri masasından QR kodu okutup sipariş verir. Sipariş direkt masa numarasına bağlanır.",
      gradient: "from-primary to-primary-dark",
      shadow: "shadow-primary/20",
    },
    {
      icon: Truck,
      title: "Paket Sipariş",
      desc: "Müşteri adres bilgilerini girerek paket sipariş oluşturur. Bölgeye göre minimum tutar kontrolü uygulanır.",
      gradient: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20",
    },
    {
      icon: ShoppingBag,
      title: "Gel-Al Sipariş",
      desc: "Müşteri siparişini verir, hazır olduğunda gelip teslim alır. Bekleme süresi otomatik bildirilir.",
      gradient: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 section-gradient" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Sipariş Türleri
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Masa, Paket veya Gel-Al{" "}
            <span className="gradient-text">— Hepsi Tek Platformda</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Müşteriniz istediği sipariş türünü seçsin. Masa ve paket fiyatları
            farklı olabilir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="group relative bg-white rounded-2xl p-8 card-hover border border-border/50 text-center overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg ${t.shadow} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Farklı Fiyatlandırma Vurgusu */}
        <div className="mt-12 bg-white rounded-2xl border border-primary/20 ring-1 ring-primary/10 p-8 shadow-lg shadow-primary/5">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 justify-center">
            <DollarSign className="h-8 w-8 text-primary flex-shrink-0" />
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-secondary mb-1">
                Farklı Fiyatlandırma Desteği
              </h3>
              <p className="text-sm text-muted-foreground">
                Masa siparişi ve paket sipariş için farklı fiyatlar belirleyebilirsiniz.
                Örneğin masada Adana Kebap ₺220, pakette ₺200 olabilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Akıllı Kontroller ─────────── */
function SmartControls() {
  const controls = [
    {
      icon: Clock,
      title: "Sipariş Saati Kontrolü",
      desc: "Belirlediğiniz çalışma saatleri dışında gelen siparişler otomatik olarak reddedilir. Gece veya tatil günlerinde gereksiz sipariş girişi engellenir.",
      mockup: (
        <div className="bg-white rounded-xl border border-border/50 p-4 mt-4">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-[11px] font-bold text-secondary">Sipariş Saatleri</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-2.5 text-center">
              <div className="text-[10px] text-muted-foreground">Açılış</div>
              <div className="text-sm font-bold text-green-600">10:00</div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-2.5 text-center">
              <div className="text-[10px] text-muted-foreground">Kapanış</div>
              <div className="text-sm font-bold text-red-500">23:00</div>
            </div>
          </div>
          <div className="mt-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-[10px] text-red-500 font-medium">
              23:00 sonrası siparişler otomatik reddedilir
            </span>
          </div>
        </div>
      ),
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: MapPin,
      title: "Bölgeye Göre Minimum Tutar",
      desc: "Paket siparişlerde teslimat bölgesine göre minimum sipariş tutarı belirleyin. Uzak bölgeler için farklı, yakın bölgeler için farklı limitler koyun.",
      mockup: (
        <div className="bg-white rounded-xl border border-border/50 p-4 mt-4">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span className="text-[11px] font-bold text-secondary">Bölge Limitleri</span>
          </div>
          <div className="space-y-2">
            {[
              { zone: "Bölge 1 (0-3 km)", min: "₺150", color: "bg-green-50 border-green-200 text-green-600" },
              { zone: "Bölge 2 (3-7 km)", min: "₺250", color: "bg-amber-50 border-amber-200 text-amber-600" },
              { zone: "Bölge 3 (7-12 km)", min: "₺400", color: "bg-red-50 border-red-200 text-red-500" },
            ].map((b) => (
              <div
                key={b.zone}
                className={`flex items-center justify-between rounded-lg border px-3 py-2 ${b.color}`}
              >
                <span className="text-[10px] font-medium">{b.zone}</span>
                <span className="text-xs font-bold">Min. {b.min}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: RefreshCw,
      title: "Anlık Sipariş Durumu",
      desc: "Müşteri siparişinin hangi aşamada olduğunu anlık olarak görebilir: Alındı → Hazırlanıyor → Yola Çıktı → Teslim Edildi.",
      mockup: (
        <div className="bg-white rounded-xl border border-border/50 p-4 mt-4">
          <div className="flex items-center gap-2 mb-3">
            <RefreshCw className="h-4 w-4 text-emerald-600" />
            <span className="text-[11px] font-bold text-secondary">Sipariş #1042</span>
          </div>
          <div className="space-y-2">
            {[
              { step: "Sipariş Alındı", icon: CheckCircle, done: true },
              { step: "Hazırlanıyor", icon: ChefHat, done: true },
              { step: "Yola Çıktı", icon: Truck, done: false, active: true },
              { step: "Teslim Edildi", icon: PackageCheck, done: false },
            ].map((s) => {
              const StepIcon = s.icon;
              return (
                <div
                  key={s.step}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    s.done
                      ? "bg-green-50"
                      : s.active
                      ? "bg-primary/5 border border-primary/20"
                      : "bg-muted/30"
                  }`}
                >
                  <StepIcon
                    className={`h-4 w-4 ${
                      s.done ? "text-green-500" : s.active ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <span
                    className={`text-[10px] font-medium ${
                      s.done ? "text-green-600" : s.active ? "text-primary font-bold" : "text-muted-foreground"
                    }`}
                  >
                    {s.step}
                  </span>
                  {s.active && (
                    <Loader className="h-3 w-3 text-primary ml-auto animate-spin" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ),
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary via-secondary to-secondary-light" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
            Akıllı Kontroller
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Her Şey{" "}
            <span className="gradient-text">Kontrol Altında</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Sipariş saati, bölge limitleri ve anlık durum takibi — otomatik
            kurallarla işletmenizi yönetin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {controls.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="glass-dark rounded-2xl p-6 border border-white/5">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{c.desc}</p>
                {c.mockup}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Menü Yönetimi ─────────── */
function MenuManagement() {
  const features = [
    {
      icon: Layers,
      title: "Sınırsız Menü & Kategori",
      desc: "İstediğiniz kadar menü, kategori ve ürün ekleyin. Kahvaltı menüsü, öğle menüsü, akşam menüsü — ayrı ayrı yönetin.",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: Ruler,
      title: "Ürün Boyutu Oluşturma",
      desc: "Küçük – Orta – Büyük veya 90gr – 120gr – 180gr gibi boyut seçenekleri ve her boyut için farklı fiyat tanımlayın.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: PlusCircle,
      title: "Ek Malzeme & Profesyonel Menü",
      desc: "Ek malzeme, çıkartılacak malzeme, pişme seçeneği — ürünlerinizi profesyonel seviyede özelleştirin.",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Settings,
      title: "Logo & İşletme Bilgileri",
      desc: "Logo, işletme adı, adres, telefon ve sosyal medya bilgilerinizi panelden kolayca güncelleyin. Menünüze yansısın.",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 section-gradient" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Sol — Özellikler */}
          <div>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              Menü Yönetimi
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary leading-tight mb-6">
              Profesyonel{" "}
              <span className="gradient-text">Menü Yönetimi</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Sınırsız menü, kategori ve ürün. Boyutlandırma, ek malzeme ve
              işletme bilgileri — her şeyi yönetim panelinden kontrol edin.
            </p>

            <div className="space-y-6">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-4 group">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-secondary mb-1">{f.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sağ — CRUD Mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl border border-border/50 p-6 shadow-xl shadow-black/5">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-muted-foreground">
                  Ürün Yönetimi — QR Menü Paneli
                </span>
              </div>

              {/* Toolbar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-secondary">Ürünler</span>
                  <span className="text-[10px] bg-muted rounded-full px-2 py-0.5 text-muted-foreground">
                    24 ürün
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="bg-gradient-to-r from-primary to-primary-dark rounded-lg px-3 py-1.5 flex items-center gap-1">
                    <PlusCircle className="h-3 w-3 text-white" />
                    <span className="text-[10px] font-bold text-white">Yeni Ürün</span>
                  </div>
                </div>
              </div>

              {/* Product List */}
              <div className="space-y-2">
                {[
                  { name: "Karışık Pizza", cat: "Pizzalar", price: "₺180", status: "active" },
                  { name: "Adana Kebap", cat: "Kebaplar", price: "₺220", status: "active" },
                  { name: "Caesar Salata", cat: "Salatalar", price: "₺95", status: "passive" },
                  { name: "Künefe", cat: "Tatlılar", price: "₺110", status: "active" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between bg-muted/50 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Image className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-secondary">{p.name}</div>
                        <div className="text-[10px] text-muted-foreground">{p.cat}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-secondary">{p.price}</span>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          p.status === "active" ? "bg-green-500" : "bg-gray-300"
                        }`}
                      />
                      <div className="flex items-center gap-1">
                        <button className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center">
                          <Pencil className="h-3 w-3 text-blue-600" />
                        </button>
                        <button className="w-6 h-6 rounded-md bg-red-50 flex items-center justify-center">
                          <Trash2 className="h-3 w-3 text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Logo & Settings bar */}
              <div className="mt-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-xs font-bold text-secondary">İşletme Ayarları</div>
                    <div className="text-[10px] text-muted-foreground">
                      Logo, işletme adı, adres, telefon, sosyal medya
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary ml-auto" />
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

/* ─────────── Performans Göstergeleri ─────────── */
function PerformanceMetrics() {
  const metrics = [
    { value: "∞", label: "Sınırsız Ürün & Kategori", icon: Layers },
    { value: "%100", label: "Anlık Güncelleme", icon: RefreshCw },
    { value: "0", label: "Donma & Kesinti", icon: Zap },
    { value: "30dk", label: "Sorun Giderme Garantisi", icon: Timer },
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
export default function QrMenuContent() {
  return (
    <>
      <WorkingModes />
      <OrderTypes />
      <SmartControls />
      <MenuManagement />
      <PerformanceMetrics />
    </>
  );
}
