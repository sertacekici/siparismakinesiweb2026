import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { generateSEOMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateSEOMetadata({
  path: "/gizlilik",
  title: "Gizlilik Politikası | Sipariş Makinesi",
  description:
    "Sipariş Makinesi web sitesi üzerinden toplanan kişisel verilerin işlenmesi, saklanması ve korunmasına ilişkin gizlilik politikası.",
});

export default function GizlilikPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 pb-20">
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary">
            Gizlilik Politikası
          </h1>
          <div className="mt-8 space-y-8 text-foreground/70 leading-7">
            <section>
              <h2 className="text-xl font-semibold text-secondary">Kapsam</h2>
              <p className="mt-3">
                Bu politika, Sipariş Makinesi web sitesi üzerinden paylaşılan iletişim,
                teklif ve kullanım verilerinin hangi amaçlarla işlendiğini açıklar.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary">Toplanan Veriler</h2>
              <p className="mt-3">
                Formlar aracılığıyla ad soyad, telefon numarası, e-posta adresi,
                işletme bilgileri ve mesaj içerikleri toplanabilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary">İşleme Amaçları</h2>
              <p className="mt-3">
                Veriler; teklif hazırlama, iletişim taleplerine dönüş yapma, ürün ve
                hizmet uygunluğunu değerlendirme ve müşteri desteği sunma amaçlarıyla
                kullanılabilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary">Saklama ve Güvenlik</h2>
              <p className="mt-3">
                Veriler uygun teknik ve idari tedbirlerle korunur. Yasal zorunluluklar,
                sözleşmesel yükümlülükler ve hizmet süreçleri kapsamında gerekli süre
                boyunca saklanabilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary">İletişim</h2>
              <p className="mt-3">
                Gizlilik ve veri işleme süreçleri hakkında bilgi almak için
                info@adelsoft.co.uk adresine e-posta gönderebilirsiniz.
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}