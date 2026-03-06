"use client";

import {
  Truck,
  CreditCard,
  Smartphone,
  Monitor,
  MapPin,
  Phone,
  CheckCircle,
  ArrowRight,
  Zap,
  Users,
  Globe,
  ShieldCheck,
  Package,
  Navigation,
  BarChart3,
} from "lucide-react";

/* ─────────── 3 Kurye Çözümü — Hero Kartları ─────────── */
function KuryeHeroCards() {
  const solutions = [
    {
      step: "01",
      icon: Monitor,
      title: "Dokunmatik Ekran & Kurye Kartı",
      desc: "Kurye siparişi görür, kartını okutarak siparişi kendi üzerine atar ve teslimat için yola çıkar. Hızlı, temassız ve hatasız atama.",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20",
      highlights: [
        "Sipariş ekranda görünür",
        "Kurye NFC/RFID kartını okuttur",
        "Sipariş otomatik atanır",
        "Kurye yola çıkar",
      ],
    },
    {
      step: "02",
      icon: Smartphone,
      title: "Kurye Mobil Uygulaması",
      desc: "Kuryeleriniz için özel geliştirdiğimiz mobil uygulama üzerinden siparişleri kendi üzerine alabilir, harita üzerinde adresi görebilir, müşteriyi arayabilir ve teslimat raporlarını inceleyebilirler.",
      color: "from-primary to-primary-dark",
      shadow: "shadow-primary/20",
      highlights: [
        "Siparişi kendi üzerine atma",
        "Harita üzerinde adres görme",
        "Müşteriyi tek tuşla arama",
        "Teslimat raporlarını görüntüleme",
      ],
    },
    {
      step: "03",
      icon: Globe,
      title: "Dış Kurye Entegrasyonları",
      desc: "Kendi kuryesi olmayan işletmeler için dış kurye şirketleri ile tam entegrasyon. Birçok kurye firmasıyla anlaşmalı çalışma imkânı.",
      color: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20",
      highlights: [
        "Birçok kurye şirketiyle entegrasyon",
        "Otomatik sipariş iletimi",
        "Anlık kurye takibi",
        "Kendi kurye gerekmez",
      ],
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
            3 Farklı Çözüm
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Her İşletmeye Uygun{" "}
            <span className="gradient-text">Kurye Yönetimi</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Kendi kuryeniz olsun ya da olmasın — işletmenize en uygun kurye
            çözümünü seçin ve teslimat sürecinizi optimize edin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div key={s.step} className="relative group">
              <div className="glass-dark rounded-2xl p-8 border border-white/5 h-full flex flex-col">
                {/* Step Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center ${s.shadow} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <s.icon className="h-7 w-7 text-white" />
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r ${s.color} text-white`}
                  >
                    Çözüm {s.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-6">
                  {s.desc}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mt-auto">
                  {s.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 border border-white/5"
                    >
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-white/70">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow between cards (desktop only) */}
              {i < solutions.length - 1 && (
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

/* ─────────── Çözüm 1: Dokunmatik Ekran & Kurye Kartı Detay ─────────── */
function DokunmatikEkranDetay() {
  const steps = [
    {
      step: "1",
      title: "Sipariş Hazır",
      desc: "Mutfakta hazırlanan sipariş, kurye ekranında görünür hale gelir.",
      icon: Package,
      color: "from-blue-500 to-indigo-600",
    },
    {
      step: "2",
      title: "Kartı Okut",
      desc: "Kurye, kendisine ait NFC/RFID kartını dokunmatik ekrandaki okuyucuya okuttur.",
      icon: CreditCard,
      color: "from-violet-500 to-purple-600",
    },
    {
      step: "3",
      title: "Sipariş Atandı",
      desc: "Sipariş otomatik olarak kurye üzerine atanır ve sistem kaydeder.",
      icon: CheckCircle,
      color: "from-primary to-primary-dark",
    },
    {
      step: "4",
      title: "Yola Çık",
      desc: "Kurye siparişi alıp teslimat adresine yola çıkar.",
      icon: Navigation,
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">
            Çözüm 01
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Dokunmatik Ekran &{" "}
            <span className="gradient-text">Kurye Kartı</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/50">
            Kurye, dokunmatik ekran üzerinden siparişi görür ve kartını okutarak
            siparişi kendi üzerine atar. Yönetici müdahalesine gerek kalmaz.
          </p>
        </div>

        {/* Flow Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full text-center">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <s.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-xs font-bold text-foreground/30 mb-2">
                  ADIM {s.step}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed">
                  {s.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                  <ArrowRight className="h-5 w-5 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              title: "Hızlı Atama",
              desc: "Kart okutma ile saniyeler içinde sipariş atanır. Zaman kaybı sıfır.",
            },
            {
              icon: ShieldCheck,
              title: "Hatasız Takip",
              desc: "Her sipariş hangi kuryeye atandığı otomatik kayıt altına alınır.",
            },
            {
              icon: Users,
              title: "Yönetici Bağımsız",
              desc: "Kuryeler kendi siparişlerini kart okutarak alır, yönetici müdahalesi gerekmez.",
            },
          ].map((adv) => (
            <div
              key={adv.title}
              className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <adv.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-1">{adv.title}</h4>
                <p className="text-sm text-foreground/50">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Çözüm 2: Kurye Mobil Uygulaması Detay ─────────── */
function MobilUygulamaDetay() {
  const features = [
    {
      icon: Package,
      title: "Sipariş Listesi",
      desc: "Bekleyen tüm siparişleri mobil uygulamada anlık olarak görüntüleyin.",
      color: "from-primary to-primary-dark",
      shadow: "shadow-primary/20",
    },
    {
      icon: CheckCircle,
      title: "Kendi Üzerine Atama",
      desc: "Kuryeler, uygun siparişi tek dokunuşla kendi üzerine atayabilir.",
      color: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20",
    },
    {
      icon: MapPin,
      title: "Harita Üzerinde Adres",
      desc: "Teslimat adresini harita üzerinde görün, en kısa rotayı belirleyin.",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20",
    },
    {
      icon: Phone,
      title: "Müşteriyi Arama",
      desc: "Uygulama içinden tek tuşla müşteriyi arayın, adres detaylarını sorun.",
      color: "from-violet-500 to-purple-600",
      shadow: "shadow-violet-500/20",
    },
    {
      icon: Navigation,
      title: "Navigasyon Desteği",
      desc: "Harita uygulamasına tek tuşla geçiş yaparak teslimat adresine navigasyon başlatın.",
      color: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/20",
    },
    {
      icon: BarChart3,
      title: "Teslimat Raporları",
      desc: "Kurye, götürdüğü siparişlerin raporlarını uygulama üzerinden görüntüleyebilir.",
      color: "from-cyan-500 to-blue-600",
      shadow: "shadow-cyan-500/20",
    },
    {
      icon: Zap,
      title: "Anlık Durum Güncelleme",
      desc: "Yola çıktı, teslim edildi gibi durumları anında sisteme bildirin.",
      color: "from-pink-500 to-rose-600",
      shadow: "shadow-pink-500/20",
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
            Çözüm 02
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Kurye{" "}
            <span className="gradient-text">Mobil Uygulaması</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Kuryeleriniz için özel geliştirdiğimiz mobil uygulama ile
            siparişleri kolayca yönetin. Harita, arama ve anlık durum
            güncelleme tek elde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* App Preview Mockup */}
        <div className="mt-16 glass-dark rounded-2xl p-8 border border-white/5">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left — Phone Mock */}
            <div className="flex-1 w-full flex justify-center">
              <div className="w-64 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl p-4 border border-white/10">
                <div className="bg-secondary-light rounded-2xl p-4 space-y-3">
                  <div className="text-center text-xs font-bold text-white/80 mb-4">
                    Kurye Uygulaması
                  </div>
                  {[
                    { addr: "Atatürk Mah. No:12", status: "Bekliyor", statusColor: "bg-amber-500" },
                    { addr: "Cumhuriyet Cad. No:45", status: "Yolda", statusColor: "bg-blue-500" },
                    { addr: "İstiklal Sok. No:8", status: "Teslim", statusColor: "bg-green-500" },
                  ].map((order, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2.5 border border-white/5"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        <span className="text-[11px] text-white/70">{order.addr}</span>
                      </div>
                      <span
                        className={`text-[9px] font-bold text-white px-2 py-0.5 rounded-full ${order.statusColor}`}
                      >
                        {order.status}
                      </span>
                    </div>
                  ))}
                  <div className="flex gap-2 pt-2">
                    <div className="flex-1 rounded-lg bg-primary/20 py-2 text-center text-[10px] font-semibold text-primary">
                      Haritada Gör
                    </div>
                    <div className="flex-1 rounded-lg bg-green-500/20 py-2 text-center text-[10px] font-semibold text-green-400">
                      Müşteriyi Ara
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 rounded-lg bg-cyan-500/20 py-2 text-center text-[10px] font-semibold text-cyan-400">
                      Raporlarım
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Key Features */}
            <div className="flex-1 w-full">
              <h3 className="text-xl font-bold text-white mb-6">
                Uygulama Özellikleri
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    label: "Sipariş adresini harita üzerinde görüntüleme",
                  },
                  {
                    icon: Phone,
                    label: "Müşteriyi uygulama içinden tek tuşla arama",
                  },
                  {
                    icon: Package,
                    label: "Bekleyen siparişleri listeleme ve üzerine alma",
                  },
                  {
                    icon: Navigation,
                    label: "Navigasyona tek tuşla yönlendirme",
                  },
                  {
                    icon: CheckCircle,
                    label: "Teslim edildi bildirimi gönderme",
                  },
                  {
                    icon: BarChart3,
                    label: "Götürdüğü siparişlerin raporlarını görüntüleme",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 border border-white/5"
                  >
                    <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-white/70">{item.label}</span>
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

/* ─────────── Çözüm 3: Dış Kurye Entegrasyonları ─────────── */
function DisKuryeEntegrasyonlari() {
  const companies = [
    { name: "Yemeksepeti Banabi Kurye", color: "bg-red-500/10 text-red-500 border-red-500/20" },
    { name: "Getir Kurye", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
    { name: "Trendyol Go Kurye", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
    { name: "Scotty", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    { name: "Bolt", color: "bg-green-500/10 text-green-500 border-green-500/20" },
    { name: "Aras Kurye", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-4">
            Çözüm 03
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Dış Kurye{" "}
            <span className="gradient-text">Entegrasyonları</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/50">
            Kendi kuryeniz yok mu? Sorun değil! Birçok kurye şirketi ile
            entegrasyonumuz sayesinde siparişlerinizi dış kuryelere
            otomatik iletebilirsiniz.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="glass rounded-2xl p-8 border border-gray-100 shadow-sm mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left — Your System */}
            <div className="flex-1 w-full text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/20">
                <Monitor className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                Sipariş Makinesi
              </h3>
              <p className="text-sm text-foreground/50">
                Siparişiniz sisteme düşer
              </p>
            </div>

            {/* Center Arrow */}
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-xl shadow-primary/30 animate-pulse-glow">
                <Zap className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Right — Courier Companies */}
            <div className="flex-1 w-full">
              <h3 className="text-lg font-bold text-secondary mb-4 text-center lg:text-left">
                Entegre Kurye Şirketleri
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {companies.map((c) => (
                  <div
                    key={c.name}
                    className={`rounded-xl border px-4 py-3 text-center text-sm font-semibold ${c.color}`}
                  >
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Truck,
              title: "Kurye Gerektirmez",
              desc: "Kendi kurye kadronuz olmadan profesyonel teslimat hizmeti sunun.",
              color: "from-emerald-500 to-teal-600",
            },
            {
              icon: Zap,
              title: "Otomatik İletim",
              desc: "Sipariş bilgileri kurye şirketine otomatik olarak iletilir.",
              color: "from-blue-500 to-indigo-600",
            },
            {
              icon: MapPin,
              title: "Anlık Takip",
              desc: "Kurye durumunu ve teslimat sürecini anlık olarak takip edin.",
              color: "from-violet-500 to-purple-600",
            },
            {
              icon: ShieldCheck,
              title: "Güvenli Teslimat",
              desc: "Profesyonel kurye şirketleri ile güvenilir ve hızlı teslimat.",
              color: "from-amber-500 to-orange-600",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${b.color} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <b.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">{b.title}</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Ana Export ─────────── */
export default function KuryeCozumleriContent() {
  return (
    <>
      <KuryeHeroCards />
      <DokunmatikEkranDetay />
      <MobilUygulamaDetay />
      <DisKuryeEntegrasyonlari />
    </>
  );
}
