import { HOW_IT_WORKS } from "@/lib/constants";
import { Check } from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="nasil-calisir"
      className="py-20 sm:py-28 relative overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary via-secondary to-secondary-light" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
            Nasıl Çalışır
          </div>
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            <span className="gradient-text">4 Adımda</span>{" "}
            <span className="text-white">Başlayın</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Sipariş Makinesi restoran yazılımını kurmak ve kullanmaya başlamak
            çok kolay.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map((item, index) => (
            <div key={item.step} className="relative text-center group">
              {/* Connector line (desktop) */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/40 to-primary/10" />
              )}

              {/* Step number */}
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white text-2xl font-bold flex items-center justify-center mx-auto relative z-10 shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-primary/20 blur-xl" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-[220px] mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
