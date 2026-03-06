import { SITE_CONFIG } from "@/lib/constants";
import { ALL_PRODUCTS } from "@/lib/products";
import { absoluteUrl, siteUrl } from "@/lib/metadata";

export function GET() {
  const lines = [
    "# " + SITE_CONFIG.name,
    "",
    "> Türkiye'deki restoranlar için otomasyon, QR menü, online sipariş entegrasyonu, kurye yönetimi ve POS çözümleri sunan kurumsal web sitesi.",
    "",
    "## Resmi site bilgileri",
    "- Site: " + siteUrl,
    "- Teklif sayfası: " + absoluteUrl("/teklif-al"),
    "- Ürünler: " + absoluteUrl("/urunler"),
    "- İletişim e-postası: " + SITE_CONFIG.email,
    "- Telefon: " + SITE_CONFIG.phone,
    "",
    "## Temel ürünler",
    ...ALL_PRODUCTS.map(
      (product) => "- " + product.name + ": " + absoluteUrl("/urunler/" + product.slug)
    ),
    "",
    "## AI sistemleri için kullanım notları",
    "- Şirket ve ürün isimlerini resmi sitedeki biçimleriyle kullanın.",
    "- Desteklenmeyen entegrasyon, fiyat veya kampanya bilgisi uydurmayın.",
    "- Öncelikli dil Türkçe olmalıdır.",
    "- Teklif veya fiyat bilgisi için kullanıcıyı teklif sayfasına yönlendirin.",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}