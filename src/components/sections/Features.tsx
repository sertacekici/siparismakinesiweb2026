import { FEATURES } from "@/lib/constants";

export default function Features() {
  return (
    <section
      id="ozellikler"
      className="py-20 sm:py-28 relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 section-gradient" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Özellikler
          </div>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight"
          >
            Restoran Yönetiminde{" "}
            <span className="gradient-text">İhtiyacınız Olan Her Şey</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Sipariş Makinesi restoran otomasyon sistemi ile işletmenizi
            uçtan uca dijitalleştirin.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white rounded-2xl p-7 card-hover border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary group-hover:to-primary-dark transition-all duration-300">
                  <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
