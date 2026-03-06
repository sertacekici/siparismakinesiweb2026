"use client";

import {
  Globe,
  ArrowRight,
  CheckCircle,
  Printer,
  Smartphone,
  Users,
  TrendingUp,
  ShieldCheck,
  Zap,
  Award,
  Clock,
  Ban,
  Package,
  CreditCard,
  Truck,
  Monitor,
  Phone,
  ExternalLink,
} from "lucide-react";

/* ─────────── Sipariş Robotu Nedir? — Akış Diyagramı ─────────── */
function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Sipariş Gelir",
      desc: "Yemeksepeti, Getir, Trendyol veya diğer platformlardan sipariş düşer.",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20",
    },
    {
      step: "02",
      title: "Otomatik Onay",
      desc: "Sipariş Robotu siparişi anında otomatik olarak onaylar.",
      color: "from-primary to-primary-dark",
      shadow: "shadow-primary/20",
    },
    {
      step: "03",
      title: "Yazıcıdan Çıktı",
      desc: "Sipariş fişi otomatik olarak yazıcınızdan çıkar, mutfağa iletilir.",
      color: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20",
    },
    {
      step: "04",
      title: "Sisteme Kayıt",
      desc: "Sipariş ve müşteri bilgileri Sipariş Makinesi yazılımına otomatik kaydolur.",
      color: "from-violet-500 to-purple-600",
      shadow: "shadow-violet-500/20",
    },
    {
      step: "05",
      title: "Yola Çık & Teslim",
      desc: "Hazırlandı, yola çıktı ve teslim edildi bilgileri otomatik gönderilir.",
      color: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/20",
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
            Sipariş Robotu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Zamanınız{" "}
            <span className="gradient-text">Size Kalsın!</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Onaylama, yazdırma, hazırlama, yola çıkarma, teslim etme, kaydetme,
            hesaplama… Tüm bu işlemleri Sipariş Robotu otomatik yapsın,
            siz işinize odaklanın!
          </p>
        </div>

        {/* Flow Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
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
              {/* Arrow between steps (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <ArrowRight className="h-5 w-5 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Flow diagram mockup */}
        <div className="mt-16 glass-dark rounded-2xl p-8 border border-white/5">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left — Platform Logos */}
            <div className="flex-1 w-full">
              <h3 className="text-lg font-bold text-white mb-6 text-center lg:text-left">
                Entegre Platformlar
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: "Yemeksepeti", color: "bg-red-500/10 text-red-400 border-red-500/20" },
                  { name: "Getir Yemek", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
                  { name: "Trendyol Yemek", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
                  { name: "Migros Yemek", color: "bg-green-500/10 text-green-400 border-green-500/20" },
                  { name: "Fuudy", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
                  { name: "GoFody", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className={`rounded-xl border px-4 py-3 text-center text-sm font-semibold ${p.color}`}
                  >
                    {p.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Center — Arrow */}
            <div className="flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-xl shadow-primary/30 animate-pulse-glow">
                <Zap className="h-9 w-9 text-white" />
              </div>
            </div>

            {/* Right — Result */}
            <div className="flex-1 w-full">
              <h3 className="text-lg font-bold text-white mb-6 text-center lg:text-left">
                Tek Merkez Çıktı
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Printer, label: "Yazıcıdan otomatik fiş çıktısı" },
                  { icon: Monitor, label: "Sipariş Makinesi'ne otomatik kayıt" },
                  { icon: Users, label: "Müşteri bilgisi otomatik kayıt" },
                  { icon: TrendingUp, label: "Entegrasyona özel ciro hesaplama" },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 border border-white/5"
                  >
                    <r.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-white/70">{r.label}</span>
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

/* ─────────── Entegrasyon Platformları ─────────── */
function IntegrationPlatforms() {
  const platforms = [
    {
      name: "Yemeksepeti",
      desc: "Sipariş verildiği anda restoranın yazıcısından çıkar, onaya gönderilir ve yazılıma kaydedilir. Kara liste uygulaması ile art niyetli müşterileri engelleyin.",
      color: "from-red-500 to-rose-600",
      shadow: "shadow-red-500/20",
      features: ["Otomatik onay", "Kara liste", "Ciro hesaplama", "Fiş çıktısı"],
    },
    {
      name: "Getir Yemek",
      desc: "Siparişler elinizi sürmeden otomatik onaylanır, yazıcıdan çıkar ve sisteme kaydolur. Onay, hazır, yola çıktı ve teslim işlemleri tamamen otomatik.",
      color: "from-purple-500 to-violet-600",
      shadow: "shadow-purple-500/20",
      features: ["Otomatik süreç", "Sesli bildirim", "Ciro takibi", "Kayıt"],
    },
    {
      name: "Trendyol Yemek",
      desc: "Siparişler anında otomatik onaylanır, hazır – yola çıktı – teslim edildi işlemleri otomatik gerçekleştirilir ve yazıcıdan çıktı alınır.",
      color: "from-orange-500 to-amber-600",
      shadow: "shadow-orange-500/20",
      features: ["Otomatik onay", "Otomatik teslim", "Ciro raporu", "Fiş çıktısı"],
    },
    {
      name: "Migros Yemek",
      desc: "Migros Yemek siparişleriniz otomatik onaylanır, yazdırılır ve sisteminize kaydedilir. Kolay ciro hesaplama ve müşteri takibi.",
      color: "from-green-500 to-emerald-600",
      shadow: "shadow-green-500/20",
      features: ["Otomatik onay", "Sesli bildirim", "Müşteri kayıt", "Ciro"],
    },
    {
      name: "Fuudy",
      desc: "Fuudy üzerinden gelen siparişleriniz entegrasyonumuz ile otomatik olarak onaylanır, yazdırılır ve sisteminize kaydedilir.",
      color: "from-cyan-500 to-teal-600",
      shadow: "shadow-cyan-500/20",
      features: ["Otomatik onay", "Fiş çıktısı", "Müşteri kayıt", "Ciro"],
    },
    {
      name: "GoFody",
      desc: "GoFody entegrasyonu ile siparişleriniz otomatik onaylanır, yazdırılır ve Sipariş Makinesi yazılımınıza otomatik kaydedilir.",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20",
      features: ["Otomatik onay", "Fiş çıktısı", "Müşteri kayıt", "Ciro"],
    },
    {
      name: "Web Sitesi",
      desc: "Online sipariş aldığınız kendi web sitenizin entegrasyonunu gerçekleştiriyoruz. Web sitenizden gelen siparişler de aynı sisteme akar.",
      color: "from-indigo-500 to-blue-600",
      shadow: "shadow-indigo-500/20",
      features: ["Site entegrasyonu", "Otomatik onay", "Fiş çıktısı", "Kayıt"],
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            7 Farklı Platform
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Tüm Siparişleriniz İçin{" "}
            <span className="gradient-text">Tek Uygulama</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/50">
            Hangi platformdan gelirse gelsin — tüm internet siparişlerinizi
            Sipariş Robotu ile otomatik yönetin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5 ${p.shadow} shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <Globe className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">{p.name}</h3>
              <p className="text-sm text-foreground/50 leading-relaxed mb-4">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-foreground/60"
                  >
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Telefon Siparişleri bonus card */}
          <div className="group bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-primary-dark px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                Bonus
              </div>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-5 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
              <Phone className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-secondary mb-2">
              Telefon Siparişleri
            </h3>
            <p className="text-sm text-foreground/50 leading-relaxed mb-4">
              İnternet siparişleri dışında telefonla gelen siparişleri de takip
              edin. Caller ID ile arayanın bilgileri ekranda görünsün.
              Sipariş Makinesi ile tam entegrasyon.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Caller ID", "Müşteri tanıma", "Adres gösterme", "Entegrasyon"].map(
                (f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary"
                  >
                    <CheckCircle className="h-3 w-3 text-primary" />
                    {f}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Otomasyon Özellikleri ─────────── */
function AutomationFeatures() {
  const features = [
    {
      icon: CheckCircle,
      title: "Otomatik Sipariş Onayı",
      desc: "Gelen siparişler anında otomatik onaylanır. Gecikme ve kaçırma riski sıfır.",
      color: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20",
    },
    {
      icon: Printer,
      title: "Otomatik Fiş Yazdırma",
      desc: "Sipariş geldiğinde 80mm termal yazıcınızdan otomatik fiş çıkar. Kağıt tasarrufu 3'te 1 oranına düşer.",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20",
    },
    {
      icon: Truck,
      title: "Otomatik Yola Çıkarma & Teslim",
      desc: "Hazırlandı, yola çıktı ve teslim edildi bilgileri platformlara otomatik iletilir.",
      color: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/20",
    },
    {
      icon: Users,
      title: "Müşteri Kayıt Sistemi",
      desc: "Gelen siparişlerden müşteri bilgileri otomatik kaydedilir. Tekrarlayan müşteriler anında tanınır.",
      color: "from-violet-500 to-purple-600",
      shadow: "shadow-violet-500/20",
    },
    {
      icon: TrendingUp,
      title: "Entegrasyona Özel Ciro Hesaplama",
      desc: "Her platform için ayrı ayrı ciro hesaplayın. Kurye hesaplarını tek bakışta görün.",
      color: "from-pink-500 to-rose-600",
      shadow: "shadow-pink-500/20",
    },
    {
      icon: Ban,
      title: "Kara Liste Yönetimi",
      desc: "Art niyetli veya yanlış bölgeden sipariş veren müşterileri kara listeye alarak engelleyin.",
      color: "from-red-500 to-rose-600",
      shadow: "shadow-red-500/20",
    },
    {
      icon: Smartphone,
      title: "Caller ID Entegrasyonu",
      desc: "Cep telefonunuza gelen sipariş aramalarında arayanın adres bilgisi ekranda görünsün.",
      color: "from-cyan-500 to-teal-600",
      shadow: "shadow-cyan-500/20",
    },
    {
      icon: CreditCard,
      title: "Kurye Hesap Takibi",
      desc: "Kuryelerden hesap toplarken tek rapor üzerinden sipariş toplamlarını anında görün.",
      color: "from-indigo-500 to-blue-600",
      shadow: "shadow-indigo-500/20",
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
            Tam Otomasyon
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Her Şey{" "}
            <span className="gradient-text">Otomatik</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Siparişin gelişinden teslimine kadar tüm süreç otomatik.
            Siz sadece siparişi hazırlayın, gerisini Sipariş Robotu halleder.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-dark rounded-2xl p-6 border border-white/5 group hover:border-primary/20 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 ${f.shadow} shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{f.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Gerekli Donanım ─────────── */
function RequiredHardware() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Kolay Kurulum
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Başlamak İçin{" "}
            <span className="gradient-text">Ne Gerekli?</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/50">
            Sipariş Robotu çalışmak için sadece bir bilgisayar ve bir termal yazıcıya ihtiyaç duyar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Bilgisayar */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
              <Monitor className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">
              Dokunmatik POS PC
            </h3>
            <p className="text-sm text-foreground/50 leading-relaxed mb-4">
              Sipariş Robotu, restoranınızdaki dokunmatik POS bilgisayarınızda
              arka planda çalışır. Mevcut bilgisayarınızı kullanabilirsiniz.
            </p>
            <ul className="text-left space-y-2">
              {["Windows uyumlu", "Arka planda sessiz çalışır", "Mevcut PC yeterli"].map(
                (f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/60">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    {f}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Yazıcı */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
              <Printer className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">
              80mm Termal Yazıcı
            </h3>
            <p className="text-sm text-foreground/50 leading-relaxed mb-4">
              Sipariş fişleri otomatik olarak termal yazıcıdan çıkar.
              Uygun maliyetli yazıcımız ile kağıt masrafınız 3'te 1'e düşer.
            </p>
            <ul className="text-left space-y-2">
              {["80mm termal fiş", "3x kağıt tasarrufu", "Otomatik kesim"].map(
                (f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/60">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    {f}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Sipariş Robotu CTA ─────────── */
function SiparisRobotuCTA() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary via-secondary to-secondary-light" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="glass-dark rounded-3xl p-10 sm:p-14 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-[100px]" />

          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/30">
              <Globe className="h-10 w-10 text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Sipariş Robotu Hakkında{" "}
              <span className="gradient-text">Detaylı Bilgi</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto mb-8 leading-relaxed">
              Sipariş Robotu, Adelsoft&apos;un restoran entegrasyon çözümüdür.
              Yüzlerce restoran tarafından aktif olarak kullanılmaktadır.
              Detaylı bilgi, fiyatlandırma ve destek için Sipariş Robotu web
              sitesini ziyaret edin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.siparisrobotu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                siparisrobotu.com
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.siparisrobotu.com/siparis-robotu-fiyati/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all duration-300"
              >
                Fiyatlandırma
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Quick Links */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Nedir?", href: "https://www.siparisrobotu.com/nedir-detay/" },
                { label: "Ürünler", href: "https://www.siparisrobotu.com/entegrasyon-urunlerimiz/" },
                { label: "Destek", href: "https://www.siparisrobotu.com/destek/" },
                { label: "İletişim", href: "https://www.siparisrobotu.com/kurumsal/iletisim/" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs font-semibold text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  {l.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Performans Metrikleri ─────────── */
function PerformanceMetrics() {
  const metrics = [
    {
      icon: Package,
      value: "7+",
      label: "Platform Entegrasyonu",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Zap,
      value: "%100",
      label: "Otomatik Süreç",
      color: "from-primary to-primary-dark",
    },
    {
      icon: Award,
      value: "∞",
      label: "Yazılım Garantisi",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Clock,
      value: "30dk",
      label: "Sorun Giderme",
      color: "from-violet-500 to-purple-600",
    },
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="relative bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <m.icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-3xl font-black text-secondary mb-1">
                {m.value}
              </div>
              <div className="text-xs text-foreground/50 font-medium">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Ana Bileşen ─────────── */
export default function OnlineSiparisContent() {
  return (
    <>
      <HowItWorks />
      <IntegrationPlatforms />
      <AutomationFeatures />
      <RequiredHardware />
      <SiparisRobotuCTA />
      <PerformanceMetrics />
    </>
  );
}
