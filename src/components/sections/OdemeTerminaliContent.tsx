"use client";

import {
  CreditCard,
  CheckCircle,
  ArrowRight,
  Zap,
  ShieldCheck,
  Monitor,
  Smartphone,
  Wifi,
  Bluetooth,
  Nfc,
  Fingerprint,
  Battery,
  Printer,
  Camera,
  Settings,
  Globe,
  QrCode,
} from "lucide-react";

/* ─────────── Hero — İki Ürün Karşılaştırma ─────────── */
function OdemeTerminaliHero() {
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
            Ödeme Terminalleri
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Güvenli &{" "}
            <span className="gradient-text">Hızlı Ödeme</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Sipariş Makinesi yazılımı ile tam entegre çalışan inPOS M530 ve
            Pavo N86 ödeme terminalleri. Temassız, çipli, manyetik ve QR kod
            ödeme — tüm ödeme yöntemlerini destekleyin.
          </p>
        </div>

        {/* İki Ürün Kartı */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* inPOS M530 */}
          <div className="group glass-dark rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-bold">
                  <ShieldCheck className="h-3 w-3" />
                  YN ÖKC
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">inPOS M530</h3>
              <p className="text-xs text-white/30 mb-4">Yazarkasa POS — Mobil & Masaüstü</p>
              <p className="text-sm text-white/40 leading-relaxed mb-6">
                Yazarkasa ve EFT-POS özelliklerinin bütünleşik olarak sunulduğu
                kompakt cihaz. Hem mobil hem masaüstü kullanıma uygun. PCI v6.0
                güvenlik standardı, TÜBİTAK ve GİB onaylı.
              </p>

              <div className="space-y-2">
                {[
                  "3.5\" Kapasitif Dokunmatik Renkli Ekran",
                  "4 Çekirdekli İşlemci — Yüksek Performans",
                  "4G / 2G ve Ethernet Bağlantısı",
                  "Temassız, Çipli, Manyetik, QR Ödeme",
                  "PCI v6.0 — TÜBİTAK & GİB Onaylı",
                  "Aydınlatmalı Tuş Takımı",
                  "Sınırsız EKÜ — 20 Yıl Mali Hafıza",
                  "Mobil & Masaüstü Kullanım",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span className="text-xs text-white/60">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pavo N86 */}
          <div className="group glass-dark rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold">
                  <Monitor className="h-3 w-3" />
                  Android POS
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Pavo N86</h3>
              <p className="text-xs text-white/30 mb-4">Mobil Android POS Terminali</p>
              <p className="text-sm text-white/40 leading-relaxed mb-6">
                Android tabanlı, geniş dokunmatik ekranlı mobil POS terminali.
                Dahili termal yazıcı, QR kamera, NFC temassız ödeme ve uzun pil
                ömrü ile her yerde ödeme alın.
              </p>

              <div className="space-y-2">
                {[
                  "5.5\" HD Kapasitif Dokunmatik Ekran",
                  "Android İşletim Sistemi",
                  "4 Çekirdekli ARM İşlemci",
                  "Wi-Fi, Bluetooth, 4G LTE, NFC",
                  "Dahili 80mm Termal Yazıcı",
                  "QR Kod Kamera ile Ödeme Okuma",
                  "Uzun Pil Ömrü — Gün Boyu Kullanım",
                  "Hafif ve Ergonomik Tasarım",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-xs text-white/60">{f}</span>
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

/* ─────────── Teknik Karşılaştırma ─────────── */
function TeknikKarsilastirma() {
  const specs = [
    { label: "Ekran", m530: '3.5" Kapasitif Dokunmatik', n86: '5.5" HD Dokunmatik (1280×720)' },
    { label: "İşlemci", m530: "4 Çekirdekli İşlemci", n86: "4 Çekirdekli ARM Cortex-A53" },
    { label: "İşletim Sistemi", m530: "Proprietary (Yazarkasa OS)", n86: "Android" },
    { label: "Bağlantı", m530: "4G / 2G, Ethernet", n86: "Wi-Fi, Bluetooth, 4G LTE" },
    { label: "NFC", m530: "Temassız Ödeme Destekli", n86: "Temassız Ödeme Destekli" },
    { label: "Kart Okuma", m530: "Temassız, Çipli, Manyetik, QR", n86: "EMV Chip, Manyetik, NFC, QR" },
    { label: "Yazıcı", m530: "Dahili Termal Yazıcı", n86: "80mm Termal Yazıcı" },
    { label: "Güvenlik", m530: "PCI v6.0 — TÜBİTAK & GİB", n86: "EMV Sertifikalı" },
    { label: "Kullanım", m530: "Mobil + Masaüstü", n86: "Mobil (Taşınabilir)" },
    { label: "Mali Özellik", m530: "YN ÖKC — Sınırsız EKÜ", n86: "Android POS (EFT-POS Değil)" },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Teknik Karşılaştırma
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            inPOS M530 vs{" "}
            <span className="gradient-text">Pavo N86</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/50">
            İşletmenizin ihtiyacına uygun ödeme terminalini seçin.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-secondary text-white">
            <div className="p-4 text-sm font-bold border-r border-white/10">
              Özellik
            </div>
            <div className="p-4 text-sm font-bold text-center border-r border-white/10">
              <span className="text-blue-300">inPOS M530</span>
            </div>
            <div className="p-4 text-sm font-bold text-center">
              <span className="text-emerald-300">Pavo N86</span>
            </div>
          </div>

          {/* Rows */}
          {specs.map((spec, i) => (
            <div
              key={spec.label}
              className={`grid grid-cols-3 ${
                i % 2 === 0 ? "bg-gray-50/50" : "bg-white"
              } ${i < specs.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              <div className="p-4 text-sm font-semibold text-secondary border-r border-gray-100">
                {spec.label}
              </div>
              <div className="p-4 text-xs text-foreground/60 text-center border-r border-gray-100">
                {spec.m530}
              </div>
              <div className="p-4 text-xs text-foreground/60 text-center">
                {spec.n86}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── inPOS M530 Detay ─────────── */
function InposM530Detay() {
  const features = [
    {
      icon: ShieldCheck,
      title: "PCI v6.0 Güvenlik",
      desc: "En yüksek seviye güvenlik standardı. Müşteri kartı bilgileri tam koruma altında.",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20",
    },
    {
      icon: Fingerprint,
      title: "TÜBİTAK & GİB Onaylı",
      desc: "TÜBİTAK tarafından test edilmiş, GİB tarafından onaylanmış mali cihaz.",
      color: "from-violet-500 to-purple-600",
      shadow: "shadow-violet-500/20",
    },
    {
      icon: Nfc,
      title: "Çoklu Ödeme Desteği",
      desc: "Temassız, çipli, manyetik kart, QR kod ve cep telefonu ile ödeme.",
      color: "from-primary to-primary-dark",
      shadow: "shadow-primary/20",
    },
    {
      icon: Globe,
      title: "4G / Ethernet Bağlantı",
      desc: "Mobil 4G/2G ile her yerde, Ethernet ile masaüstünde kesintisiz bağlantı.",
      color: "from-cyan-500 to-blue-600",
      shadow: "shadow-cyan-500/20",
    },
    {
      icon: Settings,
      title: "Sınırsız EKÜ & Mali Hafıza",
      desc: "Sınırsız elektronik kayıt ünitesi ve 20 yıl kapasiteli mali hafıza.",
      color: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/20",
    },
    {
      icon: Zap,
      title: "Yüksek Performanslı İşlemci",
      desc: "4 çekirdekli işlemci ile kesintisiz ve hızlı ödeme akışı.",
      color: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary via-secondary to-secondary-light" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[200px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1.5 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-4">
            inPOS M530
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Yazarkasa ve EFT-POS{" "}
            <span className="gradient-text">Tek Cihazda</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Yazarkasa ile ödeme terminalini birleştiren kompakt ve güvenli
            çözüm. Mali onaylı fiş kesimi ve EFT-POS ödemeleri tek cihazdan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group glass-dark rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-5 ${f.shadow} shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <f.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{f.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Desteklenen Ödeme Yöntemleri */}
        <div className="mt-16 glass-dark rounded-2xl p-8 border border-white/5">
          <h3 className="text-lg font-bold text-white mb-6 text-center">
            Desteklenen Ödeme Yöntemleri
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { icon: CreditCard, label: "Kredi Kartı", color: "from-blue-500 to-indigo-600" },
              { icon: Nfc, label: "Temassız (NFC)", color: "from-violet-500 to-purple-600" },
              { icon: Fingerprint, label: "Çipli Kart", color: "from-emerald-500 to-teal-600" },
              { icon: CreditCard, label: "Manyetik Kart", color: "from-amber-500 to-orange-600" },
              { icon: QrCode, label: "QR Kod", color: "from-primary to-primary-dark" },
              { icon: Smartphone, label: "Cep Telefonu", color: "from-pink-500 to-rose-600" },
            ].map((p) => (
              <div
                key={p.label}
                className="group rounded-xl bg-white/5 border border-white/5 p-4 text-center hover:bg-white/10 transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  <p.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-xs font-semibold text-white/60">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Pavo N86 Detay ─────────── */
function PavoN86Detay() {
  const specGroups = [
    {
      title: "Ekran & İşlemci",
      icon: Monitor,
      color: "from-emerald-500 to-teal-600",
      items: [
        { label: "Ekran", value: '5.5" HD Dokunmatik (1280×720)' },
        { label: "Panel", value: "Kapasitif Dokunmatik" },
        { label: "İşlemci", value: "4 Çekirdekli ARM Cortex-A53" },
        { label: "İşletim Sistemi", value: "Android" },
      ],
    },
    {
      title: "Bellek & Depolama",
      icon: Settings,
      color: "from-blue-500 to-indigo-600",
      items: [
        { label: "RAM", value: "Yüksek Kapasiteli RAM" },
        { label: "Dahili Depolama", value: "Geniş Depolama Alanı" },
        { label: "Genişleme", value: "MicroSD Kart Desteği" },
        { label: "Kapasite", value: "Büyük Veri Saklama" },
      ],
    },
    {
      title: "Bağlantı",
      icon: Wifi,
      color: "from-violet-500 to-purple-600",
      items: [
        { label: "Wi-Fi", value: "802.11 b/g/n" },
        { label: "Bluetooth", value: "Dahili Bluetooth" },
        { label: "Mobil İnternet", value: "4G LTE" },
        { label: "NFC", value: "Temassız Ödeme Desteği" },
      ],
    },
    {
      title: "Donanım",
      icon: Printer,
      color: "from-amber-500 to-orange-600",
      items: [
        { label: "Yazıcı", value: "80mm Hızlı Termal Yazıcı" },
        { label: "Kamera", value: "QR Kod & Belge Tarama" },
        { label: "Pil", value: "Gün Boyu Kullanım Kapasitesi" },
        { label: "Ağırlık", value: "Hafif ve Taşınabilir" },
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-4">
            Pavo N86
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Mobil Android{" "}
            <span className="gradient-text">POS Terminali</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/50">
            Android tabanlı, geniş ekranlı ve dahili yazıcılı mobil POS
            terminali. Restoran, kafe ve perakendede her yerde ödeme alın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {specGroups.map((group) => (
            <div
              key={group.title}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <group.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-secondary">
                  {group.title}
                </h3>
              </div>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                  >
                    <span className="text-sm text-foreground/50">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-secondary">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Kullanım Alanları */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-secondary mb-6 text-center">
            Pavo N86 Kullanım Alanları
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Restoran & Kafe", icon: "🍽️" },
              { label: "Perakende Mağaza", icon: "🏪" },
              { label: "Otel & Konaklama", icon: "🏨" },
              { label: "Etkinlik & Festival", icon: "🎪" },
              { label: "Mobil Satış", icon: "🚚" },
            ].map((area) => (
              <div
                key={area.label}
                className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-center hover:bg-primary/5 hover:border-primary/20 transition-all"
              >
                <div className="text-2xl mb-2">{area.icon}</div>
                <span className="text-xs font-semibold text-secondary">
                  {area.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Ödeme Akışı ─────────── */
function OdemeAkisi() {
  const steps = [
    {
      step: "01",
      title: "Sipariş Tamamlanır",
      desc: "Adisyon kapatılır veya hızlı satış ekranından ödeme başlatılır.",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20",
    },
    {
      step: "02",
      title: "Tutar Terminale İletilir",
      desc: "Sipariş tutarı ve ödeme bilgileri otomatik olarak ödeme terminaline gönderilir.",
      color: "from-primary to-primary-dark",
      shadow: "shadow-primary/20",
    },
    {
      step: "03",
      title: "Ödeme Alınır",
      desc: "Müşteri kartını okutarak veya temassız yaklaştırarak ödeme yapar.",
      color: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20",
    },
    {
      step: "04",
      title: "Fiş Otomatik Basılır",
      desc: "Ödeme onayı alındığında mali fiş otomatik basılır, adisyon kapanır.",
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
            Sipariş Makinesi Entegrasyonu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Siparişten Ödemeye{" "}
            <span className="gradient-text">Otomatik Akış</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Sipariş Makinesi yazılımı ile ödeme terminalleri tam entegre çalışır.
            Tutar aktarımı, ödeme onayı ve fiş basımı otomatik.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              <div className="glass-dark rounded-2xl p-6 border border-white/5 text-center group h-full">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-4 ${s.shadow} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-lg font-black text-white">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  {s.desc}
                </p>
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
    </section>
  );
}

/* ─────────── Yemek Kartı & Banka Desteği ─────────── */
function YemekKartiBankaDestegi() {
  const yemekKartlari = [
    "Ticket", "Sodexo", "Multinet", "Pluxee",
    "Edenred", "Setcard", "Metropol", "Tokenflex",
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Geniş Uyumluluk
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Tüm Bankalar &{" "}
            <span className="gradient-text">Yemek Kartları</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/50">
            Türkiye&apos;deki tüm bankalar ve yemek kartı uygulamaları
            desteklenir. QR kod ve mail order işlemleri dahil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Banka Desteği */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-secondary">
                Banka Desteği
              </h3>
            </div>
            <p className="text-sm text-foreground/50 mb-6">
              Türkiye&apos;deki tüm büyük bankalar desteklenir. Kredi kartı, banka
              kartı, temassız ödeme, QR ödeme ve mail order işlemleri yapılabilir.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Ziraat Bankası", "Vakıfbank", "Halkbank", "İş Bankası",
                "Garanti BBVA", "Akbank", "Yapı Kredi", "QNB",
                "Denizbank", "TEB", "Şekerbank", "Türkiye Finans",
              ].map((bank) => (
                <div key={bank} className="flex items-center gap-2 py-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                  <span className="text-xs text-foreground/60">{bank}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Yemek Kartları */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-secondary">
                Yemek Kartı Uygulamaları
              </h3>
            </div>
            <p className="text-sm text-foreground/50 mb-6">
              Tüm yaygın yemek kartı ve çalışan yan haklarını uygulamaları
              desteklenir.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {yemekKartlari.map((kart) => (
                <div
                  key={kart}
                  className="rounded-xl bg-gray-50 border border-gray-100 px-4 py-3 text-center text-sm font-semibold text-secondary hover:bg-primary/5 hover:border-primary/20 transition-all"
                >
                  {kart}
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
export default function OdemeTerminaliContent() {
  return (
    <>
      <OdemeTerminaliHero />
      <TeknikKarsilastirma />
      <InposM530Detay />
      <PavoN86Detay />
      <OdemeAkisi />
      <YemekKartiBankaDestegi />
    </>
  );
}
