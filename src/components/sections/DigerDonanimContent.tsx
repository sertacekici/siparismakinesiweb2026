"use client";

import {
  Nfc,
  KeyRound,
  Banknote,
  ScanBarcode,
  ShieldCheck,
  Zap,
  UserCheck,
  Truck,
  Lock,
  Receipt,
  ScanLine,
  Package,
  CheckCircle,
  ArrowRight,
  Monitor,
  Network,
  Phone,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  1 — Hero: 4 Ürün Kartı                                           */
/* ------------------------------------------------------------------ */
function DigerDonanimHero() {
  const products = [
    {
      icon: Nfc,
      title: "RFID Kart Okuyucu",
      description:
        "Garson ve kurye giriş çıkışlarını temassız kartla yetkilendirin.",
    },
    {
      icon: KeyRound,
      title: "Kurye Anahtarlıkları",
      description:
        "Dokunmatik ekranda kart okutarak kuryelere sipariş atayın.",
    },
    {
      icon: Banknote,
      title: "Metal Para Çekmecesi",
      description:
        "Kasa altı güvenli nakit saklama, otomatik açılma desteği.",
    },
    {
      icon: ScanBarcode,
      title: "Barkod Okuyucu",
      description:
        "Sabit veya el tipi modelleri ile ürün okutma ve stok takibi.",
    },
    {
      icon: Network,
      title: "Gigabit Switch",
      description:
        "Yüksek hızlı ağ bağlantısı ile tüm cihazlarınızı güvenle bağlayın.",
    },
    {
      icon: Phone,
      title: "Caller ID Cihazı",
      description:
        "Arayan müşteriyi otomatik tanıyın, sipariş geçmişini anında görün.",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-4">
            Aksesuar & Çevre Birimleri
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            İşletmenizi Tamamlayan Donanımlar
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Sipariş Makinesi yazılımı ile uyumlu çalışan aksesuar ve çevre
            birimleri ile operasyonel verimliliğinizi en üst düzeye çıkarın.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2 — RFID Kart Okuyucu Detay                                      */
/* ------------------------------------------------------------------ */
function RfidKartOkuyucu() {
  const features = [
    {
      icon: UserCheck,
      title: "Garson Yetkilendirme",
      description:
        "Her garson kendi RFID kartı ile sisteme giriş yapar, tüm işlemleri kişiye özel takip edilir.",
    },
    {
      icon: Truck,
      title: "Kurye Giriş-Çıkış Takibi",
      description:
        "Kuryeler kart okutarak sipariş alır ve teslim eder — çalışma saatleri otomatik kayıt altına alınır.",
    },
    {
      icon: ShieldCheck,
      title: "Güvenlik & Yetki Kontrolü",
      description:
        "Kasa açma, iptal, indirim gibi kritik işlemlerde yetkili kart doğrulaması ile güvenlik sağlanır.",
    },
    {
      icon: Zap,
      title: "Hızlı & Temassız",
      description:
        "Temassız okutma ile saniyeler içinde işlem yapılır. Şifre girmeye gerek kalmaz.",
    },
    {
      icon: Monitor,
      title: "Dokunmatik Ekran Entegrasyonu",
      description:
        "POS terminali üzerine monte edilir, dokunmatik ekranla birlikte kullanılır.",
    },
    {
      icon: Package,
      title: "Kolay Kurulum",
      description:
        "USB bağlantısı ile anında çalışmaya başlar. Ek sürücü veya yazılım gerektirmez.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol — Açıklama */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Nfc className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">
                RFID Kart Okuyucu
              </h3>
            </div>
            <p className="text-foreground/60 mb-8 leading-relaxed">
              Personel yetkilendirmesini fiziksel kartlara taşıyarak güvenliği
              artırın. Garson, kurye ve yönetici rolleri kart bazlı tanımlanır;
              her işlem kişisel hesaba kaydedilir.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <f.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary">
                      {f.title}
                    </p>
                    <p className="text-xs text-foreground/50 mt-0.5">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ — Mockup */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Nfc className="h-10 w-10 text-primary" />
              </div>
              <p className="text-sm font-semibold text-secondary">
                RFID Kart Okuyucu
              </p>
              <p className="text-xs text-foreground/40 mt-1">
                USB Bağlantı — Temassız Okuma
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: "Garson — Ahmet Y.", role: "Sipariş & Servis", color: "bg-blue-50 text-blue-600" },
                { label: "Kurye — Mehmet K.", role: "Paket Teslimat", color: "bg-green-50 text-green-600" },
                { label: "Yönetici — Admin", role: "Tam Yetki", color: "bg-purple-50 text-purple-600" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${item.color}`}>
                      {item.label.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        {item.label}
                      </p>
                      <p className="text-xs text-foreground/40">{item.role}</p>
                    </div>
                  </div>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3 — Kurye Anahtarlıkları                                         */
/* ------------------------------------------------------------------ */
function KuryeAnahtarliklari() {
  const steps = [
    {
      step: "1",
      title: "Kurye Kartını Okut",
      description: "Kurye, dokunmatik ekrandaki okuyucuya anahtarlığını temas ettirir.",
    },
    {
      step: "2",
      title: "Siparişler Listelenir",
      description: "O kuryeye atanabilecek hazır siparişler ekranda görüntülenir.",
    },
    {
      step: "3",
      title: "Sipariş Seçimi & Atama",
      description: "Kurye siparişi seçer, otomatik olarak yola çıkarılır.",
    },
    {
      step: "4",
      title: "Teslimat & Hesaplaşma",
      description: "Teslim sonrası yine kart okutarak tahsilatı tamamlar.",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <KeyRound className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-secondary">
              Kurye Anahtarlıkları
            </h3>
          </div>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Kurye anahtarlıkları, RFID teknolojisi ile çalışan minik NFC
            etiketleridir. Kuryeler dokunmatik ekrana anahtarlıklarını okutarak
            sipariş alır, yola çıkar ve teslim eder.
          </p>
        </div>

        {/* Akış Diyagramı */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 h-full hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mb-4">
                  {s.step}
                </div>
                <h4 className="text-base font-bold text-secondary mb-2">
                  {s.title}
                </h4>
                <p className="text-sm text-foreground/60">{s.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-5 w-5 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Avantajlar */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              title: "Hızlı İşlem",
              desc: "Saniyeler içinde sipariş atama — bekleme yok.",
            },
            {
              icon: ShieldCheck,
              title: "Güvenli Takip",
              desc: "Her kurye işlemi kişisel hesaba kayıt altında.",
            },
            {
              icon: KeyRound,
              title: "Kompakt Tasarım",
              desc: "Anahtarlık boyutunda, taşıması kolay NFC etiketi.",
            },
          ].map((a) => (
            <div
              key={a.title}
              className="flex items-start gap-3 bg-gray-50 rounded-xl p-4"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <a.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-secondary">
                  {a.title}
                </p>
                <p className="text-xs text-foreground/50">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  4 — Metal Para Çekmecesi                                         */
/* ------------------------------------------------------------------ */
function MetalParaCekmecesi() {
  const specs = [
    { label: "Malzeme", value: "Paslanmaz çelik gövde" },
    { label: "Bölmeler", value: "Kağıt para + Bozuk para bölmeleri" },
    { label: "Açılma", value: "Otomatik (yazılım komutu) + Manuel anahtar" },
    { label: "Bağlantı", value: "RJ11 (yazıcı üzerinden) veya USB" },
    { label: "Kilit", value: "3 konumlu güvenlik kilidi" },
    { label: "Uyumluluk", value: "Sipariş Makinesi yazılımı ile tam entegre" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol — Mockup */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                <Lock className="h-10 w-10 text-secondary" />
              </div>
              <p className="text-sm font-semibold text-secondary">
                Metal Para Çekmecesi
              </p>
              <p className="text-xs text-foreground/40 mt-1">
                Güvenli Nakit Saklama
              </p>
            </div>

            {/* Çekmece Görseli - İç Bölmeler */}
            <div className="bg-gray-100 rounded-xl p-4">
              <div className="grid grid-cols-5 gap-2 mb-3">
                {["Kağıt", "Kağıt", "Kağıt", "Kağıt", "Kağıt"].map(
                  (label, i) => (
                    <div
                      key={i}
                      className="bg-green-50 border border-green-200 rounded-lg p-2 text-center"
                    >
                      <Receipt className="h-4 w-4 text-green-600 mx-auto mb-1" />
                      <p className="text-[10px] text-green-700 font-medium">
                        {label}
                      </p>
                    </div>
                  )
                )}
              </div>
              <div className="grid grid-cols-8 gap-1.5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-yellow-50 border border-yellow-200 rounded-lg p-1.5 text-center"
                  >
                    <div className="w-5 h-5 rounded-full bg-yellow-300 mx-auto flex items-center justify-center">
                      <span className="text-[8px] font-bold text-yellow-800">
                        ₺
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ — Açıklama & Özellikler */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Banknote className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">
                Metal Para Çekmecesi
              </h3>
            </div>
            <p className="text-foreground/60 mb-8 leading-relaxed">
              Dayanıklı metal gövdesi ile kasa altına monte edilen para
              çekmecesi, Sipariş Makinesi yazılımından gelen komutla otomatik
              açılır. Kağıt para ve bozuk para bölmeleri ile nakit yönetimini
              kolaylaştırır.
            </p>

            <div className="space-y-3">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-4 bg-white rounded-lg border border-gray-100 px-4 py-3"
                >
                  <span className="text-sm font-semibold text-secondary w-28 flex-shrink-0">
                    {s.label}
                  </span>
                  <span className="text-sm text-foreground/60">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  5 — Barkod Okuyucu (Sabit & El Tipi)                             */
/* ------------------------------------------------------------------ */
function BarkodOkuyucu() {
  const types = [
    {
      title: "Sabit Barkod Okuyucu",
      icon: ScanLine,
      description:
        "Kasa önüne monte edilen sabit barkod okuyucu, ürünleri hızlıca okutmanızı sağlar. Eller serbest çalışma imkânı sunar.",
      features: [
        "Kasa tezgahına monte edilir",
        "Eller serbest çalışma — ürünü tutup geçirme",
        "1D ve 2D barkod desteği (QR dahil)",
        "Yüksek okuma hızı",
        "USB bağlantı, tak-çalıştır",
        "Market, kafe ve hızlı servis restoranları için ideal",
      ],
    },
    {
      title: "El Tipi Barkod Okuyucu",
      icon: ScanBarcode,
      description:
        "Taşınabilir el tipi barkod okuyucu, stok sayımı, depo yönetimi ve mobil satış noktalarında kullanılır.",
      features: [
        "Ergonomik tasarım, kolay kavrama",
        "Kablosuz (Bluetooth) veya USB bağlantı",
        "1D ve 2D barkod desteği",
        "Uzun menzil okuma",
        "Depo, stok sayımı ve raf kontrolü için ideal",
        "Dayanıklı gövde, düşmeye karşı dirençli",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <ScanBarcode className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-secondary">
              Barkod Okuyucu
            </h3>
          </div>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Sabit veya el tipi barkod okuyucu seçenekleri ile ürün okutma, stok
            takibi ve satış süreçlerini hızlandırın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {types.map((type) => (
            <div
              key={type.title}
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <type.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-secondary">
                  {type.title}
                </h4>
              </div>
              <p className="text-sm text-foreground/60 mb-6 leading-relaxed">
                {type.description}
              </p>
              <ul className="space-y-2.5">
                {type.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  6 — Gigabit Switch                                                */
/* ------------------------------------------------------------------ */
function GigabitSwitch() {
  const features = [
    {
      title: "Yüksek Hızlı Bağlantı",
      description:
        "Gigabit portları ile POS terminali, yazıcı, kart okuyucu ve diğer cihazlar arasında hızlı veri iletişimi.",
    },
    {
      title: "Çoklu Cihaz Desteği",
      description:
        "Birden fazla POS terminali, yazıcı ve aksesuar cihazını tek switch üzerinden bağlayın.",
    },
    {
      title: "Kompakt Metal Gövde",
      description:
        "Kasa altı veya tezgah arkasına sığan küçük boyut, dayanıklı metal kasa.",
    },
    {
      title: "Tak-Çalıştır",
      description:
        "Yapılandırma gerektirmez. Ethernet kablosunu takın, hemen çalışmaya başlasın.",
    },
    {
      title: "Kesintisiz İletişim",
      description:
        "Sipariş, fiş yazdırma ve ödeme işlemlerinde gecikme yaşanmaz — stabil ağ altyapısı.",
    },
    {
      title: "Enerji Verimli",
      description:
        "Düşük güç tüketimi ile 7/24 kesintisiz çalışma. Fanless (sessiz) tasarım.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol — Mockup */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Network className="h-10 w-10 text-primary" />
              </div>
              <p className="text-sm font-semibold text-secondary">
                Gigabit Switch
              </p>
              <p className="text-xs text-foreground/40 mt-1">
                Yüksek Hızlı Ağ Bağlantısı
              </p>
            </div>

            {/* Switch Port Görseli */}
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] text-gray-400 font-medium">
                  GIGABIT ETHERNET SWITCH
                </p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] text-green-400">PWR</span>
                </div>
              </div>
              <div className="grid grid-cols-8 gap-2">
                {[
                  { label: "POS 1", active: true },
                  { label: "POS 2", active: true },
                  { label: "Yazıcı", active: true },
                  { label: "Kasa", active: true },
                  { label: "RFID", active: true },
                  { label: "Modem", active: true },
                  { label: "Port 7", active: false },
                  { label: "Port 8", active: false },
                ].map((port, i) => (
                  <div key={i} className="text-center">
                    <div
                      className={`w-full aspect-square rounded border-2 flex items-center justify-center mb-1 ${
                        port.active
                          ? "border-green-500 bg-green-500/10"
                          : "border-gray-600 bg-gray-700"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          port.active
                            ? "bg-green-400 animate-pulse"
                            : "bg-gray-600"
                        }`}
                      />
                    </div>
                    <p
                      className={`text-[8px] ${
                        port.active ? "text-green-400" : "text-gray-600"
                      }`}
                    >
                      {port.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ — Açıklama & Özellikler */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Network className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">
                Gigabit Switch
              </h3>
            </div>
            <p className="text-foreground/60 mb-8 leading-relaxed">
              Restoranınızdaki tüm cihazları tek bir ağda buluşturan gigabit
              switch, yüksek hızlı ve kesintisiz iletişim sağlar. POS
              terminali, yazıcılar, kart okuyucular ve modeminizi güvenilir bir
              altyapı ile bağlayın.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-4"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-secondary">
                      {f.title}
                    </p>
                    <p className="text-xs text-foreground/50 mt-0.5">
                      {f.description}
                    </p>
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

/* ------------------------------------------------------------------ */
/*  7 — Caller ID Cihazı                                             */
/* ------------------------------------------------------------------ */
function CallerIdCihazi() {
  const models = [
    { model: "C811A", hatSayisi: "1 Hat", aciklama: "Tek telefon hattı olan küçük işletmeler için ideal." },
    { model: "C812A", hatSayisi: "2 Hat", aciklama: "Çift hatlı işletmeler için — en çok tercih edilen model." },
    { model: "C814A", hatSayisi: "4 Hat", aciklama: "Yoğun sipariş trafiği olan büyük işletmeler için." },
  ];

  const features = [
    {
      icon: Phone,
      title: "Arayan Müşteri Tanıma",
      description:
        "Telefon çaldığında arayan numara otomatik algılanır, müşteri bilgileri ve sipariş geçmişi ekranda belirir.",
    },
    {
      icon: Zap,
      title: "Hızlı Sipariş Alma",
      description:
        "Müşteri adres ve geçmiş siparişleri otomatik gelir — sipariş alma süresi kısalır, hata riski azalır.",
    },
    {
      icon: Monitor,
      title: "Çoklu Hat Desteği",
      description:
        "Tek, çift veya dört hatlı modeller aynı bilgisayara bağlanabilir. Birden fazla cihazla hat kapasitesi artırılır.",
    },
    {
      icon: ShieldCheck,
      title: "Tak-Çalıştır USB",
      description:
        "USB üzerinden güç alır ve otomatik tanınır. Ek sürücü veya güç adaptörü gerekmez.",
    },
    {
      icon: UserCheck,
      title: "Eş Zamanlı Algılama",
      description:
        "Birden fazla hatta aynı anda gelen çağrıların tamamı bağımsız algılanarak bilgisayara aktarılır.",
    },
    {
      icon: Package,
      title: "Yazılım Entegrasyonu",
      description:
        "Sipariş Makinesi yazılımı ile tam entegre çalışır. Çağrı geldiğinde müşteri kaydı otomatik açılır.",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol — Açıklama & Özellikler */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">
                Caller ID Cihazı
              </h3>
            </div>
            <p className="text-foreground/60 mb-6 leading-relaxed">
              Arayan numara gösterici (Caller ID) cihazı, telefon hattınıza
              bağlanarak gelen çağrıdaki numarayı USB üzerinden bilgisayara
              aktarır. Sipariş Makinesi yazılımı arayan müşteriyi otomatik
              tanır; adres, sipariş geçmişi ve notlar anında ekranda belirir.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <f.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary">
                      {f.title}
                    </p>
                    <p className="text-xs text-foreground/50 mt-0.5">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ — Mockup */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Phone className="h-10 w-10 text-primary" />
              </div>
              <p className="text-sm font-semibold text-secondary">
                Caller ID Sistemi
              </p>
              <p className="text-xs text-foreground/40 mt-1">
                USB Bağlantı — Otomatik Müşteri Tanıma
              </p>
            </div>

            {/* Çağrı Mockup */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center animate-pulse">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary">
                    Gelen Çağrı
                  </p>
                  <p className="text-xs text-foreground/40">
                    0532 *** ** 36
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-100 p-3 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-foreground/50">Müşteri</span>
                  <span className="font-medium text-secondary">Ali Yılmaz</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-foreground/50">Adres</span>
                  <span className="font-medium text-secondary">Atatürk Mah. No:12</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-foreground/50">Son Sipariş</span>
                  <span className="font-medium text-secondary">Karışık Pizza + Ayran</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-foreground/50">Toplam Sipariş</span>
                  <span className="font-medium text-green-600">23 sipariş</span>
                </div>
              </div>
            </div>

            {/* Model Seçenekleri */}
            <p className="text-xs font-semibold text-secondary mb-3">
              Model Seçenekleri
            </p>
            <div className="grid grid-cols-3 gap-2">
              {models.map((m) => (
                <div
                  key={m.model}
                  className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100 hover:border-primary/30 transition-colors"
                >
                  <p className="text-sm font-bold text-primary">{m.model}</p>
                  <p className="text-xs font-medium text-secondary mt-1">
                    {m.hatSayisi}
                  </p>
                  <p className="text-[10px] text-foreground/40 mt-0.5">
                    {m.aciklama}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  8 — Neden Sipariş Makinesi Aksesuarları                          */
/* ------------------------------------------------------------------ */
function NedenSiparisMakinesi() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Tam Entegrasyon",
      description:
        "Tüm aksesuar ve çevre birimleri Sipariş Makinesi yazılımı ile sorunsuz çalışacak şekilde test edilmiştir.",
    },
    {
      icon: Zap,
      title: "Tak-Çalıştır Kolaylığı",
      description:
        "USB veya RJ11 bağlantı ile hızlı kurulum. Ek yazılım veya sürücü gerekmez.",
    },
    {
      icon: Lock,
      title: "Güvenlik Öncelikli",
      description:
        "RFID yetkilendirme, kilitli para çekmecesi ve kişisel hesap takibi ile güvenliğiniz ön planda.",
    },
    {
      icon: Package,
      title: "Teknik Destek",
      description:
        "Kurulum, yapılandırma ve kullanım süreçlerinde yerinde teknik destek hizmeti.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
            Neden Sipariş Makinesi Aksesuarları?
          </h3>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Donanım çözümlerimiz, yazılımımızla birlikte en yüksek uyumu
            sağlamak üzere seçilmiş ve test edilmiştir.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="text-base font-bold text-secondary mb-2">
                {r.title}
              </h4>
              <p className="text-sm text-foreground/60">{r.description}</p>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl border border-gray-200 px-8 py-6">
            <p className="text-sm text-foreground/60">
              Aksesuar ve donanım ihtiyaçlarınız için bizimle iletişime geçin.
            </p>
            <a
              href="https://wa.me/905327985436"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1fb855] transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp İletişim
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Export                                                             */
/* ------------------------------------------------------------------ */
export default function DigerDonanimContent() {
  return (
    <>
      <DigerDonanimHero />
      <RfidKartOkuyucu />
      <KuryeAnahtarliklari />
      <MetalParaCekmecesi />
      <BarkodOkuyucu />
      <GigabitSwitch />
      <CallerIdCihazi />
      <NedenSiparisMakinesi />
    </>
  );
}
