import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { generateSEOMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateSEOMetadata({
  path: "/kvkk",
  title: "KVKK Aydınlatma Metni | Sipariş Makinesi",
  description:
    "Sipariş Makinesi KVKK aydınlatma metni: kişisel verilerin işlenme amaçları, hukuki sebepler, aktarım süreçleri ve başvuru hakları.",
});

export default function KvkkPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 pb-20">
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary">
            KVKK Aydınlatma Metni
          </h1>
          <div className="mt-8 space-y-8 text-foreground/70 leading-7">
            <section>
              <h2 className="text-xl font-semibold text-secondary">Veri Sorumlusu</h2>
              <p className="mt-3">
                Sipariş Makinesi, bu web sitesi üzerinden toplanan kişisel veriler bakımından
                veri sorumlusu sıfatıyla hareket eder.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary">İşlenen Kişisel Veriler</h2>
              <p className="mt-3">
                Kimlik, iletişim, işletme bilgileri ve talep içerikleri; kullanıcı tarafından
                açıkça paylaşıldığı ölçüde işlenebilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary">İşleme Amaçları ve Hukuki Sebep</h2>
              <p className="mt-3">
                Kişisel veriler; iletişim kurulması, teklif süreçlerinin yürütülmesi,
                hizmet sunumu ve meşru menfaatlerin korunması amaçlarıyla işlenebilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-secondary">Haklarınız</h2>
              <p className="mt-3">
                KVKK kapsamında verilerinize erişim, düzeltme, silme, işleme itiraz ve
                bilgi talep etme haklarına sahipsiniz. Başvurularınızı info@adelsoft.co.uk
                üzerinden iletebilirsiniz.
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}