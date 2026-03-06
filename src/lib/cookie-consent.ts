export const COOKIE_CONSENT_KEY = "sm_cookie_consent";
export const COOKIE_CONSENT_MAX_AGE = 60 * 60 * 24 * 180;

export interface CookieConsentPreferences {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
}

export const defaultCookieConsent: CookieConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  updatedAt: "",
};

export function serializeCookieConsent(
  preferences: CookieConsentPreferences
) {
  return encodeURIComponent(JSON.stringify(preferences));
}

export function parseCookieConsent(value: string | null | undefined) {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(decodeURIComponent(value)) as Partial<CookieConsentPreferences>;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      updatedAt: parsed.updatedAt || "",
    } satisfies CookieConsentPreferences;
  } catch {
    return null;
  }
}