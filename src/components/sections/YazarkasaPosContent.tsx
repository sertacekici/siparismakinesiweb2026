"use client";

import {
  CreditCard,
  CheckCircle,
  ArrowRight,
  Zap,
  ShieldCheck,
  Monitor,
  Printer,
  Receipt,
  Globe,
  Settings,
  RefreshCw,
  FileText,
  Calculator,
  Banknote,
  Wallet,
  Ban,
  Clock,
  ShoppingCart,
  HelpCircle,
  AlertTriangle,
  Wifi,
  WifiOff,
} from "lucide-react";

/* ─────────── Hero — Pavo & Inpos ─────────── */
function YazarkasaHero() {
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
            Mali Onaylı — ÖKC Uyumlu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Yazarkasa POS{" "}
            <span className="gradient-text">Entegrasyonu</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Sipariş Makinesi yazılımı, Pavo ve Inpos Yeni Nesil ÖKC cihazları
            ile tam entegre çalışır. Online sipariş fişi, iptal gider pusulası,
            hızlı satış ve adisyon kapama — tüm süreçler otomatik ve mali onaylı.
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            {
              name: "Inpos",
              desc: "Inpos Yeni Nesil ÖKC cihazları ile tam entegrasyon. Kurulum ve entegrasyon işlemleri 1 gün içinde tamamlanır.",
              duration: "1 Gün",
              durationDesc: "Kurulum Süresi",
              color: "from-blue-500 to-indigo-600",
              shadow: "shadow-blue-500/20",
              badgeColor: "bg-blue-500",
            },
            {
              name: "Pavo",
              desc: "Pavo Yeni Nesil ÖKC cihazları ile tam entegrasyon. Kurulum ve entegrasyon işlemleri 2 gün içinde tamamlanır.",
              duration: "2 Gün",
              durationDesc: "Kurulum Süresi",
              color: "from-emerald-500 to-teal-600",
              shadow: "shadow-emerald-500/20",
              badgeColor: "bg-emerald-500",
            },
          ].map((brand) => (
            <div
              key={brand.name}
              className="group glass-dark rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center ${brand.shadow} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <div className="text-right">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${brand.badgeColor} text-white text-xs font-bold`}>
                    <Clock className="h-3 w-3" />
                    {brand.duration}
                  </div>
                  <div className="text-[10px] text-white/30 mt-1">{brand.durationDesc}</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{brand.name}</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-6">{brand.desc}</p>
              <div className="space-y-2">
                {[
                  "Yeni Nesil ÖKC tam entegrasyon",
                  "Mali onaylı fiş & fatura",
                  "GİB otomatik bildirim",
                  "e-Arşiv & e-Fatura desteği",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-white/60">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Flow Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              step: "01",
              title: "Sipariş Tamamlanır",
              desc: "Adisyon kapatılır veya online sipariş onaylanır.",
              color: "from-blue-500 to-indigo-600",
              shadow: "shadow-blue-500/20",
            },
            {
              step: "02",
              title: "Yazarkasaya İletilir",
              desc: "Ürün, tutar ve ödeme bilgileri ÖKC cihazına otomatik gönderilir.",
              color: "from-primary to-primary-dark",
              shadow: "shadow-primary/20",
            },
            {
              step: "03",
              title: "Fiş / Fatura Basılır",
              desc: "Mali onaylı fiş veya e-Arşiv fatura ÖKC cihazından otomatik basılır.",
              color: "from-emerald-500 to-teal-600",
              shadow: "shadow-emerald-500/20",
            },
            {
              step: "04",
              title: "GİB'e Bildirilir",
              desc: "Satış bilgileri Gelir İdaresi Başkanlığı sistemine anlık iletilir.",
              color: "from-violet-500 to-purple-600",
              shadow: "shadow-violet-500/20",
            },
          ].map((s, i) => (
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
    </section>
  );
}

/* ─────────── Temel Özellikler — 4 Ana Çözüm ─────────── */
function TemelOzellikler() {
  const solutions = [
    {
      icon: Globe,
      title: "Online Sipariş Otomatik Fiş",
      desc: "Yemeksepeti, Getir, Trendyol ve diğer platformlardan gelen online siparişler için yazarkasa fişi veya e-Arşiv faturası otomatik olarak kesilir. Manuel işlem gerekmez, her online sipariş mali kayıt altında.",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20",
      features: [
        "Online siparişlerde otomatik fiş kesimi",
        "e-Arşiv fatura otomatik oluşturma",
        "Tüm entegrasyon platformları desteklenir",
        "Manuel müdahale gerektirmez",
      ],
    },
    {
      icon: Ban,
      title: "İptal — Gider Pusulası",
      desc: "İptal edilen siparişlerde otomatik olarak Gider Pusulası (İptal Fişi) oluşturulur. İptal işlemi yazarkasaya bildirilir ve GİB sistemine anlık iletilir. Kayıt dışı risk sıfır.",
      color: "from-red-500 to-rose-600",
      shadow: "shadow-red-500/20",
      features: [
        "İptalde otomatik Gider Pusulası oluşturma",
        "İptal fişi yazarkasadan basılır",
        "GİB'e anlık iptal bildirimi",
        "Kayıt dışı risk sıfır",
      ],
    },
    {
      icon: Zap,
      title: "Hızlı Satış Ekranı",
      desc: "Hızlı satış ekranından yazarkasaya tutar gönderimi yapılır, ödeme onayı alındığında adisyon otomatik olarak kapanır. Kasiyerin işlemi tek adımda tamamlaması yeterli.",
      color: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/20",
      features: [
        "Yazarkasaya otomatik tutar gönderimi",
        "Ödeme onayı sonrası adisyon otomatik kapanır",
        "Tek adımda işlem tamamlama",
        "Nakit ve kart ödemelerinde tam destek",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Mali Onaylı Tam Entegrasyon",
      desc: "GİB (Gelir İdaresi Başkanlığı) ve ÖKC yönetmeliklerine tam uyumlu, mali onaylı çözüm. Yapılan her satış anlık olarak GİB sistemine iletilir, vergi yükümlülükleri eksiksiz karşılanır.",
      color: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20",
      features: [
        "GİB ve ÖKC yönetmeliklerine tam uyum",
        "Mali onaylı fiş ve fatura",
        "Anlık GİB bildirimi",
        "Vergi uyumluluk garantisi",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Temel Özellikler
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Sipariş Makinesi ile{" "}
            <span className="gradient-text">Yazarkasa Bir Bütün</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/50">
            Online sipariş fişinden iptal gider pusulasına, hızlı satıştan tam
            mali uyumluluğa kadar eksiksiz yazarkasa entegrasyonu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 ${s.shadow} shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <s.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-foreground/50 leading-relaxed mb-6">
                {s.desc}
              </p>
              <div className="space-y-3">
                {s.features.map((f) => (
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

/* ─────────── Ödeme Türleri & Fiş Mockup ─────────── */
function OdemeTurleriVeFis() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Ödeme Türleri */}
          <div>
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
              Ödeme Yönetimi
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Tüm Ödeme Türleri{" "}
              <span className="gradient-text">Desteklenir</span>
            </h2>
            <p className="text-lg text-white/50 mb-8">
              Nakit, kredi kartı, yemek kartı, çoklu ödeme ve daha fazlası.
              Her ödeme türü yazarkasaya otomatik aktarılır ve mali fiş kesilir.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Banknote, label: "Nakit Ödeme", color: "from-green-500 to-emerald-600" },
                { icon: CreditCard, label: "Kredi Kartı", color: "from-blue-500 to-indigo-600" },
                { icon: Wallet, label: "Yemek Kartı", color: "from-orange-500 to-amber-600" },
                { icon: RefreshCw, label: "Çoklu Ödeme", color: "from-violet-500 to-purple-600" },
                { icon: Receipt, label: "Veresiye", color: "from-pink-500 to-rose-600" },
                { icon: Globe, label: "Online Ödeme", color: "from-cyan-500 to-blue-600" },
              ].map((p) => (
                <div
                  key={p.label}
                  className="group glass-dark rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all flex items-center gap-3"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <p.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-white/80">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Fiş & Fatura Çıktısı */}
          <div>
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
              Otomatik Çıktı
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Fiş & Fatura{" "}
              <span className="gradient-text">Otomatik Basılır</span>
            </h2>
            <p className="text-lg text-white/50 mb-8">
              Adisyon kapatıldığında veya online sipariş onaylandığında mali onaylı
              fiş ya da e-Arşiv fatura ÖKC cihazından otomatik basılır.
            </p>

            {/* Receipt Mockup */}
            <div className="glass-dark rounded-2xl p-6 border border-white/5">
              <div className="bg-white rounded-xl p-5 text-secondary max-w-xs mx-auto font-mono text-xs space-y-2">
                <div className="text-center border-b border-dashed border-gray-300 pb-2">
                  <div className="font-bold text-sm">SİPARİŞ MAKİNESİ</div>
                  <div className="text-[10px] text-foreground/40">
                    Örnek Restoran — İstanbul
                  </div>
                  <div className="text-[9px] text-foreground/30 mt-0.5">
                    MALİ ONAYLI FİŞ — YN ÖKC
                  </div>
                </div>
                <div className="space-y-1 border-b border-dashed border-gray-300 pb-2">
                  <div className="flex justify-between">
                    <span>1x Izgara Köfte</span>
                    <span>₺180,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2x Ayran</span>
                    <span>₺40,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1x Künefe</span>
                    <span>₺90,00</span>
                  </div>
                </div>
                <div className="border-b border-dashed border-gray-300 pb-2">
                  <div className="flex justify-between font-bold">
                    <span>TOPLAM</span>
                    <span>₺310,00</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-foreground/40">
                    <span>KDV (%10)</span>
                    <span>₺28,18</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Ödeme: Kredi Kartı</span>
                  <span>✓</span>
                </div>
                <div className="text-center text-[9px] text-foreground/30 pt-1">
                  FİŞ NO: 004821 — 06.03.2026 14:32
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── YN ÖKC Nedir? Bilgilendirme ─────────── */
function OkcBilgilendirme() {
  const faqs = [
    {
      icon: HelpCircle,
      question: "Yeni Nesil ÖKC Nedir?",
      answer:
        "Yeni Nesil Ödeme Kaydedici Cihazlar (YN ÖKC), satışları güvenli ve verimli bir şekilde kayıt altına almak için geliştirilmiş cihazlardır. POS ve yazar kasa özelliklerini tek cihazda birleştirerek, yapılan satışları anlık olarak Gelir İdaresi Başkanlığı (GİB) sistemine iletir.",
    },
    {
      icon: AlertTriangle,
      question: "ÖKC Kullanmak Zorunlu mu?",
      answer:
        "Evet. 3100 Sayılı Kanun çerçevesinde, birinci ve ikinci sınıf tüccarların satışlarını GİB'e bildirmek amacıyla ÖKC kullanması zorunludur. ÖKC almayan işletmelere Vergi Usul Kanunu uyarınca özel usulsüzlük cezası uygulanır.",
    },
    {
      icon: Ban,
      question: "İptal / İade Durumunda Ne Olur?",
      answer:
        "İptal veya iade işlemi, satışın yapıldığı ÖKC cihazı üzerinden ilgili fiş seçilerek gerçekleştirilir. Sipariş Makinesi bu işlemi otomatik yapar ve Gider Pusulası (İptal Fişi) oluşturur. İşlem anında GİB'e iletilir, kayıt dışı risk oluşmaz.",
    },
    {
      icon: WifiOff,
      question: "İnternet Kesilirse Ne Olur?",
      answer:
        "Bağlantı kopsa da YN ÖKC cihazı, yapılan satışları hafızasında tutar. İnternet sağlandığında tüm işlemler otomatik olarak GİB'e iletilir. Hizmette kesinti yaşanmaz.",
    },
    {
      icon: FileText,
      question: "Z Raporu Otomatik Gönderilir mi?",
      answer:
        "Evet. YN ÖKC cihazları her gün sonunda Z raporunu otomatik olarak GİB'e gönderir. Manuel rapor alınmak istenirse cihaz menüsünden tek tuşla işlem yapılabilir.",
    },
    {
      icon: ShoppingCart,
      question: "Çok Kasalı İşletmelerde Nasıl Çalışır?",
      answer:
        "Çok kasalı restoran ve kafelerde bilgisayar bağlantılı YN ÖKC modelleri kullanılır. Sipariş Makinesi yazılımı, birden fazla kasa ve ÖKC cihazını merkezi olarak yönetir.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Sıkça Sorulanlar
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            YN ÖKC Hakkında{" "}
            <span className="gradient-text">Bilmeniz Gerekenler</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/50">
            Yeni Nesil Ödeme Kaydedici Cihaz entegrasyonu hakkında merak
            edilenler ve Sipariş Makinesi&apos;nin farkı.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <faq.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-secondary mb-3">
                {faq.question}
              </h3>
              <p className="text-xs text-foreground/50 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Teknik Özellikler ─────────── */
function TeknikOzellikler() {
  const features = [
    {
      icon: Zap,
      title: "Anlık Veri Aktarımı",
      desc: "Adisyon kapatıldığı anda ürün, tutar ve ödeme bilgileri ÖKC cihazına milisaniyeler içinde aktarılır.",
      color: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/20",
    },
    {
      icon: Calculator,
      title: "Otomatik KDV Hesaplama",
      desc: "Departman bazlı KDV oranları tanımlanır, her ürün doğru KDV grubuyla yazarkasaya iletilir.",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20",
    },
    {
      icon: FileText,
      title: "Z ve X Raporu",
      desc: "Gün sonu Z raporu GİB'e otomatik gönderilir. Anlık X raporu cihazdan veya yazılımdan alınabilir.",
      color: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20",
    },
    {
      icon: RefreshCw,
      title: "İade & İptal Yönetimi",
      desc: "İptal ve iade işlemlerinde otomatik Gider Pusulası oluşturulur, tutarlar güncellenir ve GİB'e bildirilir.",
      color: "from-red-500 to-rose-600",
      shadow: "shadow-red-500/20",
    },
    {
      icon: Settings,
      title: "Departman Eşleştirme",
      desc: "Ürün kategorileri ile yazarkasa departmanları esnek şekilde eşleştirilebilir.",
      color: "from-violet-500 to-purple-600",
      shadow: "shadow-violet-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Mali Uyumluluk",
      desc: "GİB ve ÖKC yönetmeliklerine tam uyumlu. 3100 Sayılı Kanun gerekliliklerini eksiksiz karşılar.",
      color: "from-primary to-primary-dark",
      shadow: "shadow-primary/20",
    },
    {
      icon: Printer,
      title: "Çoklu Yazıcı Desteği",
      desc: "Mutfak yazıcısı, müşteri fişi ve yazarkasa mali fişi ayrı ayrı yönetilebilir.",
      color: "from-cyan-500 to-blue-600",
      shadow: "shadow-cyan-500/20",
    },
    {
      icon: Wifi,
      title: "Çevrimdışı Destek",
      desc: "İnternet kesilse bile ÖKC cihazı satışları hafızasında tutar, bağlantı geldiğinde otomatik iletir.",
      color: "from-pink-500 to-rose-600",
      shadow: "shadow-pink-500/20",
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
            Teknik Detaylar
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Güçlü Altyapı,{" "}
            <span className="gradient-text">Sorunsuz Entegrasyon</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Anlık veri aktarımından KDV yönetimine, departman eşleştirmeden
            mali uyumluluğa kadar eksiksiz teknik altyapı.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <h3 className="text-sm font-bold text-white mb-2">
                {f.title}
              </h3>
              <p className="text-xs text-white/40 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Ana Export ─────────── */
export default function YazarkasaPosContent() {
  return (
    <>
      <YazarkasaHero />
      <TemelOzellikler />
      <OdemeTurleriVeFis />
      <OkcBilgilendirme />
      <TeknikOzellikler />
    </>
  );
}
