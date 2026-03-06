import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { generateSEOMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateSEOMetadata({
  path: "/cerez-politikasi",
  title: "Çerez Politikası | Sipariş Makinesi",
  description:
    "Sipariş Makinesi çerez politikası: zorunlu, analiz ve pazarlama çerezlerinin kullanım amaçları ile tercih yönetimi bilgileri.",
});

export default function CerezPolitikasiPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 pb-20">
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-secondary sm:text-4xl">
            Çerez Politikası
          </h1>
          <div className="mt-8 space-y-8 text-foreground/70 leading-7">
            <section>
              <h2 className="text-xl font-semibold text-secondary">Çerez Nedir?</h2>
              <p className="mt-3">
                Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza
                kaydedilen küçük veri dosyalarıdır. Site güvenliği, oturum yönetimi,
                performans analizi ve reklam ölçümlemesi gibi amaçlarla kullanılabilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary">Kullandığımız Çerez Türleri</h2>
              <p className="mt-3">
                Zorunlu çerezler sitenin düzgün çalışması için gereklidir. Analiz
                çerezleri ziyaretçi davranışlarını anlamak ve kullanıcı deneyimini
                geliştirmek için kullanılabilir. Pazarlama çerezleri ise reklam
                kampanyalarının ölçümü, yeniden pazarlama ve dönüşüm takibi amacıyla
                devreye alınabilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary">Reklam ve Pazarlama Çerezleri</h2>
              <p className="mt-3">
                Pazarlama çerezleri yalnızca onay vermeniz halinde etkinleştirilmelidir.
                Bu kategori; reklam platformlarının dönüşüm atfı, hedef kitle
                eşleştirmesi ve yeniden pazarlama senaryolarında kullanılabilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary">Tercihlerinizi Nasıl Yönetebilirsiniz?</h2>
              <p className="mt-3">
                Site üzerinde gösterilen çerez bildirimi üzerinden analiz ve pazarlama
                çerezlerini kabul edebilir, reddedebilir veya daha sonra tercihlerinizi
                güncelleyebilirsiniz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary">İletişim</h2>
              <p className="mt-3">
                Çerez kullanımı ve kişisel veri işleme süreçleri hakkında sorularınız için
                info@adelsoft.co.uk adresine ulaşabilirsiniz.
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}