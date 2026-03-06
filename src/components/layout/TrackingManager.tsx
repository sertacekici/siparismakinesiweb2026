"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  COOKIE_CONSENT_KEY,
  defaultCookieConsent,
  parseCookieConsent,
  type CookieConsentPreferences,
} from "@/lib/cookie-consent";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _smGoogleInitialized?: boolean;
    _smMetaInitialized?: boolean;
  }
}

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

function ensureGoogleBootstrap() {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }
}

function ensureGoogleScript(primaryId: string) {
  if (document.getElementById("sm-google-tag")) {
    return;
  }

  const script = document.createElement("script");
  script.id = "sm-google-tag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${primaryId}`;
  document.head.appendChild(script);
}

function ensureGoogleTrackingInitialized() {
  if (window._smGoogleInitialized) {
    return;
  }

  ensureGoogleBootstrap();
  window.gtag?.("js", new Date());
  window.gtag?.("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  if (gaMeasurementId) {
    window.gtag?.("config", gaMeasurementId, {
      anonymize_ip: true,
      send_page_view: false,
    });
  }

  if (googleAdsId) {
    window.gtag?.("config", googleAdsId, {
      send_page_view: false,
    });
  }

  window._smGoogleInitialized = true;
}

function updateGoogleConsent(preferences: CookieConsentPreferences) {
  if (!window.gtag) {
    return;
  }

  window.gtag("consent", "update", {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
  });
}

function ensureMetaScript(pixelId: string) {
  if (document.getElementById("sm-meta-pixel")) {
    return;
  }

  const script = document.createElement("script");
  script.id = "sm-meta-pixel";
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      (fbq as unknown as { queue?: unknown[][] }).queue =
        (fbq as unknown as { queue?: unknown[][] }).queue || [];
      (fbq as unknown as { queue?: unknown[][] }).queue?.push(args);
    };
    (fbq as unknown as { loaded?: boolean }).loaded = true;
    (fbq as unknown as { version?: string }).version = "2.0";
    (fbq as unknown as { queue?: unknown[][] }).queue = [];
    window.fbq = fbq;
  }

  if (!window._smMetaInitialized) {
    window.fbq?.("init", pixelId);
    window.fbq?.("consent", "revoke");
    window._smMetaInitialized = true;
  }
}

function updateMetaConsent(preferences: CookieConsentPreferences) {
  if (!window.fbq) {
    return;
  }

  window.fbq("consent", preferences.marketing ? "grant" : "revoke");
}

export default function TrackingManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [preferences, setPreferences] = useState<CookieConsentPreferences>(
    defaultCookieConsent
  );
  const lastTrackedPath = useRef<string>("");

  useEffect(() => {
    const stored = parseCookieConsent(localStorage.getItem(COOKIE_CONSENT_KEY));
    if (stored) {
      setPreferences(stored);
    }

    const handleConsentUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<CookieConsentPreferences>;
      if (customEvent.detail) {
        setPreferences(customEvent.detail);
        return;
      }

      const nextStored = parseCookieConsent(localStorage.getItem(COOKIE_CONSENT_KEY));
      if (nextStored) {
        setPreferences(nextStored);
      }
    };

    window.addEventListener(
      "cookie-consent-updated",
      handleConsentUpdate as EventListener
    );

    return () => {
      window.removeEventListener(
        "cookie-consent-updated",
        handleConsentUpdate as EventListener
      );
    };
  }, []);

  useEffect(() => {
    const shouldLoadGoogle = Boolean(
      (preferences.analytics || preferences.marketing) &&
        (gaMeasurementId || googleAdsId)
    );

    if (shouldLoadGoogle) {
      const primaryGoogleId = gaMeasurementId || googleAdsId;
      if (primaryGoogleId) {
        ensureGoogleScript(primaryGoogleId);
        ensureGoogleTrackingInitialized();
      }
    }

    if (gaMeasurementId || googleAdsId) {
      ensureGoogleBootstrap();
      updateGoogleConsent(preferences);
    }

    if (preferences.marketing && metaPixelId) {
      ensureMetaScript(metaPixelId);
    }

    if (metaPixelId) {
      updateMetaConsent(preferences);
    }
  }, [preferences]);

  useEffect(() => {
    const currentPath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    if (!currentPath || currentPath === lastTrackedPath.current) {
      return;
    }

    if (preferences.analytics && gaMeasurementId && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: currentPath,
        page_location: window.location.href,
        page_title: document.title,
      });
    }

    if (preferences.marketing && metaPixelId && window.fbq) {
      window.fbq("track", "PageView");
    }

    lastTrackedPath.current = currentPath;
  }, [pathname, preferences.analytics, preferences.marketing, searchParams]);

  return null;
}