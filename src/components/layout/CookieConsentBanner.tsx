"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  COOKIE_CONSENT_KEY,
  COOKIE_CONSENT_MAX_AGE,
  defaultCookieConsent,
  parseCookieConsent,
  serializeCookieConsent,
  type CookieConsentPreferences,
} from "@/lib/cookie-consent";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
  }
}

function persistConsent(preferences: CookieConsentPreferences) {
  const serialized = serializeCookieConsent(preferences);
  localStorage.setItem(COOKIE_CONSENT_KEY, serialized);
  document.cookie = `${COOKIE_CONSENT_KEY}=${serialized}; path=/; max-age=${COOKIE_CONSENT_MAX_AGE}; SameSite=Lax`;
  window.dispatchEvent(
    new CustomEvent("cookie-consent-updated", {
      detail: preferences,
    })
  );

  if (window.dataLayer) {
    window.dataLayer.push({
      event: "cookie_consent_updated",
      analytics_storage: preferences.analytics ? "granted" : "denied",
      ad_storage: preferences.marketing ? "granted" : "denied",
      ad_user_data: preferences.marketing ? "granted" : "denied",
      ad_personalization: preferences.marketing ? "granted" : "denied",
    });
  }
}

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [preferences, setPreferences] = useState<CookieConsentPreferences>(
    defaultCookieConsent
  );

  useEffect(() => {
    const stored = parseCookieConsent(localStorage.getItem(COOKIE_CONSENT_KEY));
    if (stored) {
      setPreferences(stored);
    }

    const openPreferences = () => {
      const nextStored = parseCookieConsent(localStorage.getItem(COOKIE_CONSENT_KEY));
      if (nextStored) {
        setPreferences(nextStored);
      }
      setIsVisible(true);
      setIsCustomizing(true);
    };

    if (!stored) {
      setIsVisible(true);
    }

    window.addEventListener("open-cookie-preferences", openPreferences);
    return () => {
      window.removeEventListener("open-cookie-preferences", openPreferences);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  const acceptAll = () => {
    const nextPreferences: CookieConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      updatedAt: new Date().toISOString(),
    };
    setPreferences(nextPreferences);
    persistConsent(nextPreferences);
    setIsVisible(false);
    setIsCustomizing(false);
  };

  const rejectOptional = () => {
    const nextPreferences: CookieConsentPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      updatedAt: new Date().toISOString(),
    };
    setPreferences(nextPreferences);
    persistConsent(nextPreferences);
    setIsVisible(false);
    setIsCustomizing(false);
  };

  const savePreferences = () => {
    const nextPreferences: CookieConsentPreferences = {
      ...preferences,
      updatedAt: new Date().toISOString(),
    };
    setPreferences(nextPreferences);
    persistConsent(nextPreferences);
    setIsVisible(false);
    setIsCustomizing(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-secondary text-white shadow-2xl shadow-black/20">
        <div className="grid gap-6 px-6 py-5 sm:px-8 sm:py-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-end">
          <div>
            <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Çerez Tercihleri
            </div>
            <h2 className="mt-3 text-xl font-bold sm:text-2xl">
              Reklam, analiz ve performans çerezleri için onayınızı yönetebilirsiniz.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70 sm:text-[15px]">
              Sitemizde zorunlu çerezlere ek olarak analiz ve pazarlama çerezleri de
              kullanılabilir. Bu çerezler reklam kampanyalarının ölçümlenmesi,
              yeniden pazarlama ve dönüşüm takibi için kullanılabilir.
              Ayrıntılar için <Link href="/cerez-politikasi" className="font-semibold text-white underline underline-offset-4">Çerez Politikası</Link> sayfasını inceleyin.
            </p>
          </div>

          <div className="space-y-3">
            {isCustomizing && (
              <div className="space-y-3 rounded-2xl bg-white/5 p-4">
                <label className="flex items-start justify-between gap-4 rounded-xl border border-white/10 px-4 py-3">
                  <div>
                    <div className="text-sm font-semibold">Zorunlu Çerezler</div>
                    <div className="mt-1 text-xs leading-5 text-white/60">
                      Güvenlik, form oturumu ve temel site işlevleri için gereklidir.
                    </div>
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-white/80">
                    Her zaman açık
                  </span>
                </label>

                <label className="flex items-start justify-between gap-4 rounded-xl border border-white/10 px-4 py-3">
                  <div>
                    <div className="text-sm font-semibold">Analiz Çerezleri</div>
                    <div className="mt-1 text-xs leading-5 text-white/60">
                      Trafik analizi, sayfa performansı ve kampanya ölçümü için kullanılır.
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 accent-[var(--primary-light)]"
                    checked={preferences.analytics}
                    onChange={(event) =>
                      setPreferences((current) => ({
                        ...current,
                        analytics: event.target.checked,
                      }))
                    }
                  />
                </label>

                <label className="flex items-start justify-between gap-4 rounded-xl border border-white/10 px-4 py-3">
                  <div>
                    <div className="text-sm font-semibold">Pazarlama Çerezleri</div>
                    <div className="mt-1 text-xs leading-5 text-white/60">
                      Reklam hedefleme, yeniden pazarlama ve dönüşüm atfı için kullanılır.
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 accent-[var(--primary-light)]"
                    checked={preferences.marketing}
                    onChange={(event) =>
                      setPreferences((current) => ({
                        ...current,
                        marketing: event.target.checked,
                      }))
                    }
                  />
                </label>
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
              {!isCustomizing && (
                <button
                  type="button"
                  onClick={() => setIsCustomizing(true)}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Tercihleri Yönet
                </button>
              )}
              {isCustomizing ? (
                <button
                  type="button"
                  onClick={savePreferences}
                  className="inline-flex items-center justify-center rounded-xl bg-primary-light px-5 py-3 text-sm font-semibold text-secondary transition hover:brightness-105"
                >
                  Tercihleri Kaydet
                </button>
              ) : (
                <button
                  type="button"
                  onClick={rejectOptional}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Sadece Zorunlu
                </button>
              )}
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-secondary transition hover:bg-white/90"
              >
                Tümünü Kabul Et
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}