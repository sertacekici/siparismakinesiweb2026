"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  Loader2,
  CheckCircle,
  ArrowRight,
  User,
  Mail,
  MessageSquare,
  AlertTriangle,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/905327985436";

export default function Contact() {
  const [form, setForm] = useState({
    adSoyad: "",
    telefon: "",
    email: "",
    konu: "",
    mesaj: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const isPhoneValid = (tel: string) => {
    const digits = tel.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 11;
  };

  const canSubmit = Boolean(
    form.adSoyad.trim() &&
    isPhoneValid(form.telefon) &&
    form.mesaj.trim()
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/iletisim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(
          payload?.error || "Bir hata oluştu. Lütfen tekrar deneyin."
        );
      }

      setSent(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Bir hata oluştu. Lütfen tekrar deneyin."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="iletisim"
      className="py-20 sm:py-28 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-secondary to-secondary-light" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
            İletişim
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Bizimle{" "}
            <span className="gradient-text">İletişime Geçin</span>
          </h2>
          <p className="mt-5 text-lg text-white/50 max-w-2xl mx-auto">
            Sorularınızı yanıtlayalım ve restoranınıza en uygun çözümü birlikte
            belirleyelim.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sol: İletişim Bilgileri */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="bg-white rounded-2xl p-6 flex items-center justify-center shadow-lg">
              <Image
                src="/sipmaklogo.png"
                alt="Sipariş Makinesi Logo"
                width={200}
                height={60}
                className="h-auto w-auto max-h-14"
                priority
              />
            </div>

            {/* Adres */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Adres</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Kağıthane - İstanbul
                  </p>
                </div>
              </div>
            </div>

            {/* Telefon */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Telefon</h3>
                  <a
                    href="tel:02125500150"
                    className="text-sm text-primary font-semibold hover:underline block"
                  >
                    0212 550 01 50
                  </a>
                  <a
                    href="tel:05327985436"
                    className="text-sm text-primary font-semibold hover:underline block mt-1"
                  >
                    0532 798 54 36
                  </a>
                </div>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-2">
                    Çalışma Saatleri
                  </h3>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between gap-6">
                      <span className="text-muted-foreground">
                        Pazartesi – Cuma
                      </span>
                      <span className="font-semibold text-secondary">
                        10:30 – 18:30
                      </span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span className="text-muted-foreground">Cumartesi</span>
                      <span className="font-semibold text-secondary">
                        10:30 – 14:30
                      </span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span className="text-muted-foreground">Pazar</span>
                      <span className="font-medium text-red-500">Kapalı</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] px-6 py-4 text-base font-semibold text-white hover:shadow-xl hover:shadow-[#25D366]/25 transition-all duration-300 hover:scale-[1.02]"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp ile İletişime Geçin
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Sağ: İletişim Formu */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-gray-100">
              {!sent ? (
                <>
                  <h3 className="text-xl font-bold text-secondary mb-1">
                    Bize Yazın
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Formu doldurun, en kısa sürede size dönüş yapalım.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary mb-1.5">
                          Ad Soyad <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/30" />
                          <input
                            type="text"
                            value={form.adSoyad}
                            onChange={(e) =>
                              setForm({ ...form, adSoyad: e.target.value })
                            }
                            placeholder="Adınız ve soyadınız"
                            className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-secondary mb-1.5">
                          Telefon <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/30" />
                          <input
                            type="tel"
                            value={form.telefon}
                            onChange={(e) =>
                              setForm({ ...form, telefon: e.target.value })
                            }
                            placeholder="05XX XXX XX XX"
                            className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary mb-1.5">
                          E-posta
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/30" />
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                            placeholder="ornek@email.com"
                            className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-secondary mb-1.5">
                          Konu
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/30" />
                          <input
                            type="text"
                            name="konu"
                            autoComplete="off"
                            value={form.konu}
                            onChange={(e) =>
                              setForm({ ...form, konu: e.target.value })
                            }
                            placeholder="Örn: Fiyat bilgisi"
                            className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-3 text-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">
                        Mesajınız <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-foreground/30" />
                        <textarea
                          value={form.mesaj}
                          onChange={(e) =>
                            setForm({ ...form, mesaj: e.target.value })
                          }
                          rows={4}
                          placeholder="Mesajınızı yazın..."
                          className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 text-sm text-red-500">
                        <AlertTriangle className="h-4 w-4" />
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={!canSubmit || sending}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-6 py-3.5 text-sm font-semibold text-white hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {sending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Mesaj Gönder
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    Mesajınız Gönderildi!
                  </h3>
                  <p className="text-muted-foreground">
                    En kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
