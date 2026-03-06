"use client";

export default function CookiePreferencesButton() {
  const openCookiePreferences = () => {
    window.dispatchEvent(new Event("open-cookie-preferences"));
  };

  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className="text-xs text-muted-foreground transition-colors duration-200 hover:text-secondary"
    >
      Çerez Tercihleri
    </button>
  );
}