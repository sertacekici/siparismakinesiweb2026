"use client";

import {
  Monitor,
  Cpu,
  HardDrive,
  Usb,
  Wifi,
  CheckCircle,
  ArrowRight,
  Volume2,
  Bluetooth,
  Layers,
  Maximize,
  Fingerprint,
  ShieldCheck,
  Settings,
  Zap,
} from "lucide-react";

/* ─────────── Hero — ADEL-7004 ─────────── */
function PosTerminaliHero() {
  const specs = [
    {
      icon: Maximize,
      label: '18.5" Ekran',
      value: "1366×768 Capasitive",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Cpu,
      label: "İşlemci",
      value: "Intel i7 3. Nesil",
      color: "from-primary to-primary-dark",
    },
    {
      icon: Layers,
      label: "RAM",
      value: "8 GB DDR3",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: HardDrive,
      label: "Depolama",
      value: "128 GB SSD",
      color: "from-violet-500 to-purple-600",
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
            Donanım — POS Terminali
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            ADEL-7004{" "}
            <span className="gradient-text">POS Terminali</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            İ7 3. Nesil işlemci, 18.5&quot; çoklu dokunuş kapasitif ekran, 8 GB
            RAM ve 128 GB SSD ile ticari işletmeler için tasarlanmış güçlü ve
            dayanıklı POS terminali.
          </p>
        </div>

        {/* Spec Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="group glass-dark rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 text-center"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${spec.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <spec.icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-xs text-white/40 mb-1">{spec.label}</div>
              <div className="text-sm font-bold text-white">{spec.value}</div>
            </div>
          ))}
        </div>

        {/* Product Visual Mockup */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-dark rounded-3xl border border-white/5 p-8">
            {/* Monitor frame */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-1 border border-gray-700">
              {/* Screen */}
              <div className="bg-gradient-to-br from-blue-950 to-gray-900 rounded-xl p-6 aspect-video flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <Monitor className="h-16 w-16 text-primary/40 mb-4" />
                <div className="text-sm font-bold text-white/60">ADEL-7004</div>
                <div className="text-xs text-white/30 mt-1">
                  18.5&quot; Çoklu Dokunuş Kapasitif Ekran
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1.5 text-[10px] text-white/20">
                    <Wifi className="h-3 w-3" /> Wi-Fi
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-white/20">
                    <Bluetooth className="h-3 w-3" /> BT
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-white/20">
                    <Volume2 className="h-3 w-3" /> Hoparlör
                  </div>
                </div>
              </div>
            </div>
            {/* Stand */}
            <div className="flex justify-center mt-2">
              <div className="w-24 h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg" />
            </div>
            <div className="flex justify-center">
              <div className="w-36 h-2 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Teknik Özellikler Detay ─────────── */
function TeknikDetaylar() {
  const detailGroups = [
    {
      title: "Ekran",
      icon: Maximize,
      color: "from-blue-500 to-indigo-600",
      items: [
        { label: "Ekran Boyutu", value: '18.5" (47 cm)' },
        { label: "Çözünürlük", value: "1366 × 768 piksel" },
        { label: "Dokunmatik", value: "Çoklu Dokunuş (Capasitive)" },
        { label: "Panel Tipi", value: "LED Backlight" },
      ],
    },
    {
      title: "İşlemci & Bellek",
      icon: Cpu,
      color: "from-primary to-primary-dark",
      items: [
        { label: "İşlemci", value: "Intel Core i7 3. Nesil" },
        { label: "RAM", value: "8 GB DDR3" },
        { label: "Depolama", value: "128 GB SSD" },
        { label: "Performans", value: "Yüksek hızlı işlem kapasitesi" },
      ],
    },
    {
      title: "Bağlantı Portları",
      icon: Usb,
      color: "from-emerald-500 to-teal-600",
      items: [
        { label: "USB", value: "6 adet USB port" },
        { label: "Seri Port", value: "2 adet (COM1 — COM2)" },
        { label: "Görüntü", value: "1 × HDMI, 1 × VGA" },
        { label: "Diğer", value: "1 × Audio, 1 × Ethernet" },
      ],
    },
    {
      title: "Kablosuz & Ek Özellikler",
      icon: Wifi,
      color: "from-violet-500 to-purple-600",
      items: [
        { label: "Wi-Fi", value: "Dahili kablosuz ağ" },
        { label: "Bluetooth", value: "Dahili Bluetooth" },
        { label: "Hoparlör", value: "Dahili hoparlör" },
        { label: "İşletim Sistemi", value: "Win 7 / 10 / 11 / PosReady 7" },
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Teknik Özellikler
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            ADEL-7004{" "}
            <span className="gradient-text">Donanım Detayları</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/50">
            Ticari işletmelerde kesintisiz kullanım için tasarlanmış güçlü
            donanım bileşenleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {detailGroups.map((group) => (
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
      </div>
    </section>
  );
}

/* ─────────── Port & Bağlantı Görseli ─────────── */
function BaglantiPortlari() {
  const ports = [
    {
      icon: Usb,
      name: "USB Port",
      count: "6 Adet",
      desc: "Yazıcı, terazi, barkod okuyucu ve diğer çevre birimleri bağlantısı.",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20",
    },
    {
      icon: Settings,
      name: "COM Port",
      count: "2 Adet",
      desc: "COM1 ve COM2 seri port — yazarkasa, terazi ve endüstriyel cihaz bağlantısı.",
      color: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20",
    },
    {
      icon: Monitor,
      name: "HDMI + VGA",
      count: "1+1 Adet",
      desc: "Müşteri ekranı veya ikinci monitör bağlantısı için çift görüntü çıkışı.",
      color: "from-violet-500 to-purple-600",
      shadow: "shadow-violet-500/20",
    },
    {
      icon: Volume2,
      name: "Audio",
      count: "1 Adet",
      desc: "Sipariş uyarı sesleri ve bildirimler için ses çıkışı.",
      color: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/20",
    },
    {
      icon: Wifi,
      name: "Ethernet",
      count: "1 Adet",
      desc: "Kablolu ağ bağlantısı — kararlı ve kesintisiz internet erişimi.",
      color: "from-cyan-500 to-blue-600",
      shadow: "shadow-cyan-500/20",
    },
    {
      icon: Bluetooth,
      name: "Bluetooth",
      count: "Dahili",
      desc: "Kablosuz çevre birimi bağlantısı — mobil yazıcı, el terminali entegrasyonu.",
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
            Bağlantı Seçenekleri
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Zengin Port &{" "}
            <span className="gradient-text">Bağlantı Yapısı</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            6 USB, 2 COM, HDMI, VGA, Audio, Ethernet, Wi-Fi ve Bluetooth
            — tüm çevre birimlerini sorunsuz bağlayın.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ports.map((port) => (
            <div
              key={port.name}
              className="group glass-dark rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${port.color} flex items-center justify-center flex-shrink-0 ${port.shadow} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <port.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-bold text-white">
                      {port.name}
                    </h3>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {port.count}
                    </span>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed">
                    {port.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── İşletim Sistemi Desteği ─────────── */
function IsletimSistemiDesteği() {
  const osList = [
    {
      name: "Windows 7",
      desc: "Klasik Windows arayüzü ve geniş uyumluluk.",
      supported: true,
    },
    {
      name: "Windows 10",
      desc: "Modern arayüz, güvenlik güncellemeleri ve geniş donanım desteği.",
      supported: true,
    },
    {
      name: "Windows 11",
      desc: "En güncel Windows deneyimi ve gelişmiş güvenlik.",
      supported: true,
    },
    {
      name: "PosReady 7",
      desc: "POS cihazlarına özel optimize edilmiş, hafif Windows sürümü.",
      supported: true,
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            İşletim Sistemi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Esnek İşletim Sistemi{" "}
            <span className="gradient-text">Desteği</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/50">
            Windows 7, 10, 11 ve PosReady 7 yüklenebilir. İşletmenizin
            ihtiyacına göre en uygun sistemi seçin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {osList.map((os) => (
            <div
              key={os.name}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Monitor className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-sm font-bold text-secondary mb-2">
                {os.name}
              </h3>
              <p className="text-xs text-foreground/50 leading-relaxed mb-3">
                {os.desc}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                <CheckCircle className="h-3 w-3" />
                Desteklenir
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Neden ADEL-7004 ─────────── */
function NedenAdel() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Ticari Kullanıma Özel Tasarım",
      desc: "Restoran, kafe, market ve perakende gibi ticari işletmelerde yoğun kullanım için özel olarak tasarlanmıştır.",
      color: "from-emerald-500 to-green-600",
      shadow: "shadow-emerald-500/20",
    },
    {
      icon: Zap,
      title: "Yüksek Performans",
      desc: "İ7 3. Nesil işlemci ve SSD disk ile sistem açılışından sipariş yönetimine kadar her işlem anlık.",
      color: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/20",
    },
    {
      icon: Fingerprint,
      title: "Kapasitif Dokunmatik Ekran",
      desc: "18.5 inç çoklu dokunuş kapasitif ekran — telefon gibi akıcı ve duyarlı kullanım deneyimi.",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20",
    },
    {
      icon: Usb,
      title: "Zengin Bağlantı",
      desc: "6 USB, 2 COM, HDMI, VGA, Audio, Ethernet — yazıcı, terazi, yazarkasa ve tüm çevre birimlerini bağlayın.",
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
            Neden ADEL-7004?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Güçlü Donanım,{" "}
            <span className="gradient-text">Güvenilir Performans</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Ticari işletmelere özel tasarım, yüksek performans ve zengin
            bağlantı seçenekleri ile fark yaratan POS terminali.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group glass-dark rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${r.color} flex items-center justify-center mb-6 ${r.shadow} shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <r.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{r.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Bilgilendirme Notu ─────────── */
function BilgilendirmeNotu() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 sm:p-10 text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
            <ShieldCheck className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-secondary mb-4">
            Donanım Bilgilendirmesi
          </h3>
          <p className="text-sm text-foreground/60 leading-relaxed max-w-2xl mx-auto mb-4">
            Bu sayfadaki donanım bilgileri devamlı güncellenmektedir. Size
            burada verdiğimiz donanım bilgileri <strong>minimum seviyede</strong>{" "}
            kullandığımız bilgisayarı temsil etmektedir.
          </p>
          <p className="text-sm text-foreground/60 leading-relaxed max-w-2xl mx-auto">
            Her geçen gün teknolojinin ilerlemesi ile hep daha iyisini size
            sunmaya devam ediyoruz. Güncel donanım bilgileri için bizimle
            iletişime geçmenizi öneririz.
          </p>
          <div className="mt-8">
            <a
              href="https://wa.me/905327985436"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1fb855] transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Güncel Bilgi İçin İletişime Geçin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Ana Export ─────────── */
export default function PosTerminaliContent() {
  return (
    <>
      <PosTerminaliHero />
      <TeknikDetaylar />
      <BaglantiPortlari />
      <IsletimSistemiDesteği />
      <NedenAdel />
      <BilgilendirmeNotu />
    </>
  );
}
