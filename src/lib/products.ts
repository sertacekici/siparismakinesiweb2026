import {
  ShoppingCart,
  QrCode,
  BarChart3,
  Globe,
  Truck,
  Building2,
  Monitor,
  Printer,
  CreditCard,
  UtensilsCrossed,
  Package,
  type LucideIcon,
} from "lucide-react";

export interface Product {
  slug: string;
  category: "yazilim" | "donanim";
  name: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  image?: string;
}

export const SOFTWARE_PRODUCTS: Product[] = [
  {
    slug: "siparis-yonetimi",
    category: "yazilim",
    name: "Sipariş Yönetimi",
    shortDescription:
      "Masa, paket ve gel-al siparişlerini tek ekrandan yönetin. İsteğe göre yapılandırılabilir modüler sistem.",
    description:
      "İster küçük ister çok şubeli bir işletme olun, tüm sipariş kanallarınızı tek bir ekrandan kontrol altında tutun. Masa siparişi, paket servis, gel-al ve online siparişleri anlık takip edin. %100'e yakın kayıp-kaçak kontrolü ile her işlem kayıt altına alınır. Müşteri siparişinden teslimata kadar kusursuz işleyiş. Ömür boyu yazılım garantisi ve donma yapmayan performansıyla güvenle kullanın.",
    icon: ShoppingCart,
    features: [
      "Sade Masa Servis, Sade Paket Servis veya ikisi birden",
      "%100'e yakın kayıp-kaçak kontrolü",
      "Müşteri siparişinden teslimata kusursuz akış",
      "İsteğe göre yapılandırılabilir modüler sistem",
      "Ömür boyu yazılım sorunlarına karşı garanti",
      "Hiçbir zaman donma yapmaz",
      "Garson bazlı sipariş atama ve takip",
      "Otomatik mutfak bildirimi ve fiş çıktısı",
    ],
  },
  {
    slug: "masa-siparisi",
    category: "yazilim",
    name: "Masa Sipariş Sistemi",
    shortDescription:
      "Masa bazlı sipariş yönetimi, hesap bölme, indirim işlemleri ve yazarkasa entegrasyonu tek ekranda.",
    description:
      "Masalarınızı görsel haritada takip edin, garson bazlı sipariş atayın, hesap bölme ve birleştirme işlemlerini kolayca yapın. Yüzdelik veya tutar bazlı indirimler uygulayın, yazarkasa ile tam entegre çalışın. Fiş, fatura ve e-Arşiv çıktıları otomatik.",
    icon: UtensilsCrossed,
    features: [
      "Görsel masa haritası ve anlık durum takibi",
      "Garson bazlı sipariş atama ve performans izleme",
      "Hesap bölme, birleştirme ve masa transfer",
      "Yüzdelik ve tutar bazlı indirim işlemleri",
      "Yazarkasa ile tam entegrasyon (ÖKC uyumlu)",
      "Fiş, fatura ve e-Arşiv otomatik çıktı",
      "Sipariş notu ve özel istek desteği",
      "Anlık mutfak bildirimi",
    ],
  },
  {
    slug: "qr-menu",
    category: "yazilim",
    name: "QR Menü",
    shortDescription:
      "QR kod ile dijital menü görüntüleme veya direkt sipariş verme — iki farklı çalışma prensibi.",
    description:
      "Müşterileriniz QR kodu okutarak menüyü incelesin veya doğrudan sipariş versin. Masa, paket ve gel-al siparişleri tek platformda. Farklı fiyatlandırma, bölgesel minimum tutar kontrolü, sipariş saati kısıtlaması ve anlık ürün yönetimi ile profesyonel QR menü deneyimi.",
    icon: QrCode,
    features: [
      "2 çalışma prensibi: Sipariş verme veya menü görüntüleme",
      "Masa, paket ve gel-al sipariş desteği",
      "Masa ve paket sipariş farklı fiyatlandırma",
      "Anlık ürün ekleme, düzenleme ve silme (CRUD)",
      "Sipariş saati dışında otomatik red",
      "Bölgeye göre minimum sipariş tutarı kontrolü",
      "Sınırsız menü, kategori ve ürün ekleme",
      "Yönetilebilir logo, işletme bilgileri ve menü tasarımı",
    ],
  },
  {
    slug: "raporlama",
    category: "yazilim",
    name: "Raporlama & Analiz",
    shortDescription:
      "Masa, paket, sipariş kaynağı, kurye, garson, ödeme türü ve daha fazlası — her açıdan detaylı raporlama.",
    description:
      "İşletmenizi her açıdan analiz edin. Masa ve paket raporlarını ayrı veya birlikte alın, sipariş kaynaklarına göre (telefon, internet, platform bazlı) detaylı analizler yapın. Kurye, garson, ürün, iptal, indirim ve performans raporları ile veriye dayalı kararlar verin.",
    icon: BarChart3,
    features: [
      "Masa ve paket ayrı/birlikte raporlama",
      "Sipariş kaynağına göre analiz (telefon, internet, platform)",
      "Ödeme türlerine göre toplamlar",
      "Kurye analizi ve hesap toplamları",
      "Ürün satış analizi",
      "İptal, indirim ve garson bazlı raporlar",
      "Performans ve masa/paket raporları",
      "Excel ve PDF dışa aktarma",
    ],
  },
  {
    slug: "online-siparis-entegrasyonu",
    category: "yazilim",
    name: "Online Sipariş Entegrasyonu",
    shortDescription:
      "Yemeksepeti, Getir, Trendyol, Migros ve daha fazlası — tüm siparişler tek ekranda.",
    description:
      "Sipariş Robotu ile tüm online sipariş platformlarınızı tek bir merkezden yönetin. Yemeksepeti, Getir Yemek, Trendyol Yemek, Migros Yemek, Fuudy, GoFody ve web sitenizden gelen siparişler otomatik onaylanır, yazdırılır ve sisteme kaydedilir.",
    icon: Globe,
    features: [
      "Yemeksepeti, Getir, Trendyol, Migros entegrasyonu",
      "Fuudy, GoFody ve web sitesi entegrasyonu",
      "Otomatik sipariş onayı ve yazdırma",
      "Otomatik yola çıkarma ve teslim işlemi",
      "Entegrasyona özel ciro hesaplama",
      "Müşteri kayıt ve kara liste yönetimi",
      "Sipariş Makinesi yazılımına otomatik kayıt",
      "Tek merkezden tüm platform raporlama",
    ],
  },
  {
    slug: "kurye-cozumleri",
    category: "yazilim",
    name: "Kurye Çözümleri",
    shortDescription:
      "Dokunmatik ekran & kart, mobil uygulama veya dış kurye entegrasyonu — 3 farklı kurye çözümü.",
    description:
      "Kendi kuryeniz olsun ya da olmasın, teslimat sürecinizi uçtan uca yönetin. Dokunmatik ekranda kart okutarak sipariş atama, kurye mobil uygulaması ile harita ve arama desteği veya dış kurye şirketleri ile entegrasyon — işletmenize en uygun çözümü seçin.",
    icon: Truck,
    features: [
      "Dokunmatik ekran & kurye kartı ile sipariş atama",
      "Kurye mobil uygulaması (harita + müşteri arama)",
      "Birçok dış kurye şirketi ile entegrasyon",
      "Kurye bazlı ciro ve hesap takibi",
      "Bölge bazlı teslimat yönetimi",
      "Otomatik yola çıkarma ve teslim",
      "Kurye performans raporları",
      "Sipariş atama ve takip",
    ],
  },
  {
    slug: "coklu-sube-yonetimi",
    category: "yazilim",
    name: "Çoklu Şube Yönetimi",
    shortDescription:
      "İster tek şubeniz, ister 300 şubeniz olsun — tümünü anlık takip edin.",
    description:
      "İster tek şubeniz ister 300 şubeniz olsun, tüm şubelerinizi anlık olarak takip edebilirsiniz. Gerçek zamanlı dashboard, 6 farklı kullanıcı rolü, masa ve sipariş takibi, ciro analizi, kurye yönetimi, gider takibi, şube sipariş sistemi ve API entegrasyonu ile merkezi yönetim.",
    icon: Building2,
    features: [
      "Gerçek zamanlı dashboard ve anlık istatistikler",
      "6 farklı rol: Şirket Yöneticisi, Şube Yöneticisi, Personel, Kurye, Muhasebe, Depo",
      "Şube oluşturma, düzenleme ve şube bazlı filtreleme",
      "Anlık masa durumları ve adisyon takibi",
      "Gerçek zamanlı sipariş izleme (tüm kaynaklar)",
      "Ciro & analiz raporu (6 farklı tab, grafikler)",
      "Kurye yönetimi, gider takibi, iptal raporları",
      "API & Cloud Functions entegrasyonu",
    ],
  },
  {
    slug: "yazarkasa-pos-entegrasyonu",
    category: "yazilim",
    name: "Yazarkasa POS Entegrasyonu",
    shortDescription:
      "Pavo ve Inpos YN ÖKC cihazları ile mali onaylı tam entegrasyon — online fiş, iptal pusulası, hızlı satış.",
    description:
      "Sipariş Makinesi yazılımı, Pavo ve Inpos Yeni Nesil ÖKC cihazları ile tam entegre çalışır. Online siparişlerde otomatik fiş/fatura kesimi, iptal durumlarında Gider Pusulası oluşturma, hızlı satış ekranından yazarkasaya tutar gönderimi ve ödeme onayıyla adisyon otomatik kapama. Mali onaylı, GİB uyumlu çözüm.",
    icon: CreditCard,
    features: [
      "Pavo ve Inpos YN ÖKC tam entegrasyon",
      "Online siparişlerde otomatik fiş / fatura kesimi",
      "İptal durumunda otomatik Gider Pusulası (İptal Fişi)",
      "Hızlı satış — yazarkasaya tutar gönderimi ve otomatik adisyon kapama",
      "Mali onaylı, GİB uyumlu çözüm",
      "e-Arşiv ve e-Fatura desteği",
      "Departman bazlı KDV yönetimi",
      "Tüm ödeme türleri desteği (Nakit, Kredi Kartı, Yemek Kartı)",
    ],
  },
];

export const HARDWARE_PRODUCTS: Product[] = [
  {
    slug: "pos-terminali",
    category: "donanim",
    name: "POS Terminali",
    shortDescription:
      "ADEL-7004 İ7 3. Nesil 18.5\" Dokunmatik POS — 8 GB RAM, 128 GB SSD, Wi-Fi, Bluetooth.",
    description:
      "ADEL-7004 İ7 3. Nesil 18.5 inç çoklu dokunuş kapasitif ekranlı POS terminali. 8 GB RAM ve 128 GB SSD ile yüksek performans, 6 USB, 2 COM, HDMI, VGA, Audio ve Ethernet bağlantı portları. Dahili Wi-Fi, Bluetooth ve hoparlör. Win 7, Win 10, Win 11 ve PosReady 7 yüklenebilir. Ticari işletmelerde kullanılmak üzere tasarlanmıştır. Sipariş Makinesi yazılımı ile tam entegre çalışır.",
    icon: Monitor,
    features: [
      '18.5\" Çoklu Dokunuş Kapasitif Ekran (1366×768)',
      "Intel İ7 3. Nesil İşlemci",
      "8 GB RAM — 128 GB SSD",
      "6 USB, 2 COM, 1 HDMI, 1 VGA, 1 Audio, 1 Ethernet",
      "Dahili Wi-Fi + Bluetooth + Hoparlör",
      "Win 7 / Win 10 / Win 11 / PosReady 7 desteği",
      "Ticari kullanıma özel dayanıklı tasarım",
      "Sipariş Makinesi yazılımı ile tam entegre",
    ],
  },

  {
    slug: "yazici",
    category: "donanim",
    name: "Termal Yazıcı",
    shortDescription:
      "Mutfak fişi ve adisyon için hızlı termal yazıcı.",
    description:
      "Yüksek hızlı termal baskı teknolojisi ile siparişleri anında yazdırın. Mutfak, bar ve kasa noktalarında kullanıma uygun, otomatik kesicili ve dayanıklı.",
    icon: Printer,
    features: [
      "Yüksek hızlı baskı (250mm/sn)",
      "Otomatik kağıt kesici",
      "USB, Ethernet ve Wi-Fi bağlantı",
      "80mm kağıt genişliği",
      "Sesli sipariş uyarısı",
      "Kolay kağıt değişimi",
    ],
  },
  {
    slug: "odeme-terminali",
    category: "donanim",
    name: "Ödeme Terminali",
    shortDescription:
      "inPOS M530 Yazarkasa POS ve Pavo N86 Android POS — temassız, çipli, QR ve mobil ödeme desteği.",
    description:
      "Sipariş Makinesi yazılımı ile tam entegre çalışan ödeme terminalleri. inPOS M530 ile yazarkasa ve EFT-POS özelliklerini tek cihazda birleştirin; Pavo N86 ile Android tabanlı geniş ekranlı mobil POS deneyimi yaşayın. Temassız, çipli, manyetik, QR kod ve cep telefonu ile ödeme — tüm bankalar ve yemek kartları desteklenir.",
    icon: CreditCard,
    features: [
      "inPOS M530 — Yazarkasa + EFT-POS tek cihazda",
      "Pavo N86 — Android Mobil POS Terminali",
      "Temassız, çipli, manyetik, QR kod ile ödeme",
      "Tüm bankalar ve yemek kartı uygulamaları destekli",
      "PCI v6.0 güvenlik standardı (inPOS)",
      "TÜBİTAK & GİB onaylı mali cihaz (inPOS)",
      "Dahili termal yazıcı ve QR kamera (Pavo N86)",
      "Sipariş Makinesi yazılımı ile tam entegre",
    ],
  },
  {
    slug: "diger-donanim-urunleri",
    category: "donanim",
    name: "Diğer Donanım Ürünleri",
    shortDescription:
      "RFID Kart Okuyucu, Kurye Anahtarlıkları, Metal Para Çekmecesi, Barkod Okuyucu, Gigabit Switch ve Caller ID Cihazı — işletmenizi tamamlayan aksesuar ve çevre birimleri.",
    description:
      "Sipariş Makinesi yazılımı ile uyumlu çalışan aksesuar ve çevre birimleri ile operasyonunuzu tamamlayın. RFID kart okuyucu ile garson ve kurye yetkilendirme, kurye anahtarlıkları ile hızlı sipariş atama, metal para çekmecesi ile güvenli nakit yönetimi, barkod okuyucu ile ürün takibi, gigabit switch ile güvenilir ağ altyapısı ve caller ID cihazı ile arayan müşteri tanıma — tüm donanım ihtiyaçlarınız tek çatı altında.",
    icon: Package,
    features: [
      "RFID Kart Okuyucu — garson ve kurye yetkilendirme",
      "Kurye Anahtarlıkları — dokunmatik ekranda sipariş atama",
      "Metal Para Çekmecesi — güvenli nakit yönetimi",
      "Barkod Okuyucu (Sabit) — kasa önü hızlı okutma",
      "Barkod Okuyucu (El Tipi) — depo ve stok sayımı",
      "Gigabit Switch — yüksek hızlı ağ bağlantısı",
      "Caller ID Cihazı — arayan müşteri tanıma",
      "Sipariş Makinesi yazılımı ile tam entegre",
    ],
  },
];

export const ALL_PRODUCTS = [...SOFTWARE_PRODUCTS, ...HARDWARE_PRODUCTS];
