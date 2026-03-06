"use client";

import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Save, Loader2 } from "lucide-react";

interface SiteSettings {
  brand: {
    name: string;
    tagline: string;
    logoUrl: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    instagram: string;
    twitter: string;
    linkedin: string;
    youtube: string;
  };
  appearance: {
    primaryColor: string;
    secondaryColor: string;
  };
}

const defaultSettings: SiteSettings = {
  brand: { name: "Sipariş Makinesi", tagline: "Restoran Otomasyon Sistemi", logoUrl: "" },
  hero: {
    badge: "🚀 Türkiye'nin 1 Numaralı Restoran Yazılımı",
    title: "Restoranınızın Dijital Dönüşümü",
    subtitle: "Sipariş yönetiminden müşteri ilişkilerine, stok takibinden raporlamaya kadar tüm restoran operasyonlarınızı tek platformda yönetin.",
    ctaPrimary: "Ücretsiz Demo Al",
    ctaSecondary: "Fiyatları İncele",
  },
  seo: { title: "Sipariş Makinesi — Restoran Otomasyon Sistemi", description: "", keywords: "" },
  contact: { email: "info@adelsoft.co.uk", phone: "+90 212 000 00 00", address: "" },
  social: { instagram: "", twitter: "", linkedin: "", youtube: "" },
  appearance: { primaryColor: "#FF6B35", secondaryColor: "#1B2A4A" },
};

export default function AyarlarPage() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<keyof SiteSettings>("brand");

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const snap = await getDoc(doc(db, "siteSettings", "main"));
        if (snap.exists()) {
          setSettings({ ...defaultSettings, ...snap.data() } as SiteSettings);
        }
      } finally {
        setLoading(false);
      }
    };
    loadSettings();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      await setDoc(doc(db, "siteSettings", "main"), settings, { merge: true });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  const updateField = (section: keyof SiteSettings, key: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      [section]: { ...prev[section], [key]: value },
    }));
  };

  const tabs: { key: keyof SiteSettings; label: string }[] = [
    { key: "brand", label: "Marka" },
    { key: "hero", label: "Hero" },
    { key: "seo", label: "SEO" },
    { key: "contact", label: "İletişim" },
    { key: "social", label: "Sosyal Medya" },
    { key: "appearance", label: "Görünüm" },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  const renderFields = () => {
    const section = settings[activeTab];
    const fieldLabels: Record<string, Record<string, string>> = {
      brand: { name: "Site Adı", tagline: "Slogan", logoUrl: "Logo URL" },
      hero: { badge: "Rozet", title: "Başlık", subtitle: "Alt Başlık", ctaPrimary: "Birincil Buton", ctaSecondary: "İkincil Buton" },
      seo: { title: "Sayfa Başlığı", description: "Açıklama", keywords: "Anahtar Kelimeler" },
      contact: { email: "E-posta", phone: "Telefon", address: "Adres" },
      social: { instagram: "Instagram", twitter: "Twitter / X", linkedin: "LinkedIn", youtube: "YouTube" },
      appearance: { primaryColor: "Ana Renk", secondaryColor: "İkincil Renk" },
    };

    return Object.entries(section).map(([key, value]) => {
      const label = fieldLabels[activeTab]?.[key] || key;
      const isColor = key.toLowerCase().includes("color");
      const isTextarea = key === "subtitle" || key === "description" || key === "keywords";

      return (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
          {isColor ? (
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={value as string}
                onChange={(e) => updateField(activeTab, key, e.target.value)}
                className="h-10 w-14 rounded border border-gray-300 cursor-pointer"
              />
              <input
                type="text"
                value={value as string}
                onChange={(e) => updateField(activeTab, key, e.target.value)}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm w-32 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          ) : isTextarea ? (
            <textarea
              rows={3}
              value={value as string}
              onChange={(e) => updateField(activeTab, key, e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          ) : (
            <input
              type="text"
              value={value as string}
              onChange={(e) => updateField(activeTab, key, e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          )}
        </div>
      );
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Site Ayarları</h1>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors disabled:opacity-50"
        >
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          {saving ? "Kaydediliyor..." : saved ? "Kaydedildi ✓" : "Kaydet"}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-gray-200 pb-px">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
              activeTab === tab.key
                ? "bg-white text-primary border border-gray-200 border-b-white -mb-px"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Fields */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
        {renderFields()}
      </div>
    </div>
  );
}
