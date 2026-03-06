import {
  ShoppingCart,
  QrCode,
  UtensilsCrossed,
  BarChart3,
  Globe,
  Truck,
  Building2,
  CreditCard,
} from "lucide-react";

export const SITE_CONFIG = {
  name: "Sipariş Makinesi",
  tagline: "Restoran Otomasyon Sistemi",
  url: "https://siparismakinesi.com",
  email: "info@adelsoft.co.uk",
  phone: "0212 550 01 50",
  address: "Kağıthane - İstanbul",
};

export const FEATURES = [
  {
    icon: ShoppingCart,
    title: "Sipariş Yönetimi",
    description:
      "Masa, paket ve gel-al siparişlerini tek ekrandan yönetin. Modüler yapıyla ihtiyacınıza göre yapılandırın.",
  },
  {
    icon: UtensilsCrossed,
    title: "Masa Sipariş Sistemi",
    description:
      "Görsel masa haritası, garson bazlı atama, hesap bölme ve yazarkasa entegrasyonu tek ekranda.",
  },
  {
    icon: QrCode,
    title: "QR Menü",
    description:
      "QR kod ile dijital menü görüntüleme veya doğrudan sipariş verme. Masa ve paket siparişe tam destek.",
  },
  {
    icon: BarChart3,
    title: "Raporlama & Analiz",
    description:
      "Masa, paket, kurye, garson, ödeme türü ve sipariş kaynağına göre detaylı raporlama ve analiz.",
  },
  {
    icon: Globe,
    title: "Online Sipariş Entegrasyonu",
    description:
      "Yemeksepeti, Getir, Trendyol, Migros ve daha fazlası — tüm platform siparişleri tek ekranda.",
  },
  {
    icon: Truck,
    title: "Kurye Çözümleri",
    description:
      "Dokunmatik ekran & kart, mobil uygulama veya dış kurye entegrasyonu ile teslimat yönetimi.",
  },
  {
    icon: Building2,
    title: "Çoklu Şube Yönetimi",
    description:
      "Tek şubeden 300 şubeye kadar anlık takip. Merkezi dashboard, rol yönetimi ve ciro analizi.",
  },
  {
    icon: CreditCard,
    title: "Yazarkasa POS Entegrasyonu",
    description:
      "Pavo ve Inpos YN ÖKC cihazları ile mali onaylı tam entegrasyon. Otomatik fiş ve fatura kesimi.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Kurulum",
    description: "Sistemi dakikalar içinde kurun. Teknik bilgi gerektirmez.",
  },
  {
    step: 2,
    title: "Eğitim",
    description:
      "Ekibinize özel eğitim verilir. Herkes kolayca kullanmayı öğrenir.",
  },
  {
    step: 3,
    title: "Kullanım",
    description:
      "Siparişleri, stokları ve müşterilerinizi tek platformdan yönetin.",
  },
  {
    step: 4,
    title: "Anında Destek",
    description:
      "İhtiyacınız olduğunda yanınızdayız. Telefon, chat ve uzaktan destek.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ahmet Yılmaz",
    role: "Restoran Sahibi, Lezzet Durağı",
    content:
      "Sipariş Makinesi ile siparişlerimizi %40 daha hızlı karşılıyoruz. Mutfak ekranı hayat kurtardı.",
    rating: 5,
  },
  {
    name: "Elif Demir",
    role: "İşletme Müdürü, Cafe Blossom",
    content:
      "QR menü sayesinde garson ihtiyacımız azaldı, müşteri memnuniyeti arttı. Harika bir sistem.",
    rating: 5,
  },
  {
    name: "Mehmet Kaya",
    role: "Zincir Restoran Sahibi",
    content:
      "3 şubemizi tek panelden yönetiyoruz. Stok takibi ve raporlama özellikle çok işe yarıyor.",
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    question: "Sipariş Makinesi nedir?",
    answer:
      "Sipariş Makinesi, restoranlar için geliştirilmiş kapsamlı bir otomasyon sistemidir. Sipariş yönetimi, QR menü, mutfak ekranı, stok takibi, raporlama ve daha birçok özelliği tek platformda sunar.",
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer:
      "Temel kurulum ve eğitim süreci ortalama 1-2 iş günü içinde tamamlanır. Sisteminiz hemen kullanıma hazır hale gelir.",
  },
  {
    question: "Hangi cihazlarda çalışır?",
    answer:
      "Sipariş Makinesi web tabanlı olduğu için tablet, bilgisayar ve akıllı telefon dahil tüm cihazlarda çalışır. Özel donanım gerektirmez.",
  },
  {
    question: "Online sipariş platformlarıyla entegre çalışır mı?",
    answer:
      "Evet, Yemeksepeti, Getir Yemek ve Trendyol Yemek gibi popüler platformlarla tam entegrasyon sağlar. Tüm siparişleriniz tek ekranda toplanır.",
  },
  {
    question: "Teknik destek sunuyor musunuz?",
    answer:
      "Teknik destek ekibimiz telefon, e-posta ve uzaktan bağlantı ile anında yanınızdadır.",
  },
  {
    question: "Birden fazla şubeyi yönetebilir miyim?",
    answer:
      "Evet, çoklu şube yönetimi özelliğimizle tüm şubelerinizi tek bir panelden yönetebilirsiniz. Merkezi menü yönetimi, şube bazlı raporlama ve stok takibi yapabilirsiniz.",
  },
  {
    question: "Nasıl iletişime geçebilirim?",
    answer:
      "WhatsApp üzerinden +90 532 798 54 36 numarasına mesaj göndererek bize anında ulaşabilirsiniz. Size en uygun çözümü birlikte belirleyelim.",
  },
  {
    question: "Verilerim güvende mi?",
    answer:
      "Tüm verileriniz SSL şifreleme ile korunur ve güvenli bulut sunucularda saklanır. Düzenli yedekleme yapılır ve KVKK uyumlu altyapımızla verileriniz güvende.",
  },
];

export const STATS = [
  { value: "1500+", label: "Aktif Restoran" },
  { value: "20M+", label: "Aylık Sipariş" },
  { value: "Anında", label: "Destek" },
];
