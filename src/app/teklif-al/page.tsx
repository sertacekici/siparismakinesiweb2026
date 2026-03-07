"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Send,
  Loader2,
  AlertTriangle,
  Monitor,
  Printer,
  PhoneCall,
  Smartphone,
  Globe,
  Truck,
  CreditCard,
  Store,
  Users,
  Utensils,
  Cable,
  LayoutGrid,
  Eye,
  Building2,
  QrCode,
  Navigation,
} from "lucide-react";

/* ================================================================ */
/*  Veri Tipleri                                                    */
/* ================================================================ */

interface FormData {
  cozumTuru: string;
  bilgisayarVar: string;
  termalYaziciVar: string;
  sabitTelefon: string;
  sabitTelefonAdet: string;
  cepTelefonu: string;
  cepTelefonuAndroid: string;
  internetSiparis: string;
  platformlar: string[];
  markaSayisi: string;
  kendiKurye: string;
  kuryeAdet: string;
  yazarkasaEntegrasyon: string;
  bolumler: string;
  masaSayisi: string;
  garsonCihaz: string;
  anaKasa: string;
  garsonBilgisayar: string;
  garsonBilgisayarAdet: string;
  termalYaziciAdet: string;
  kablolar: string;
  uzaktanTakip: string;
  subeSayisi: string;
  qrSiparis: string;
  kuryeTakipSistemi: string;
  adSoyad: string;
  isletmeAdi: string;
  telefon: string;
}

const emptyForm: FormData = {
  cozumTuru: "",
  bilgisayarVar: "",
  termalYaziciVar: "",
  sabitTelefon: "",
  sabitTelefonAdet: "",
  cepTelefonu: "",
  cepTelefonuAndroid: "",
  internetSiparis: "",
  platformlar: [],
  markaSayisi: "",
  kendiKurye: "",
  kuryeAdet: "",
  yazarkasaEntegrasyon: "",
  bolumler: "",
  masaSayisi: "",
  garsonCihaz: "",
  anaKasa: "",
  garsonBilgisayar: "",
  garsonBilgisayarAdet: "",
  termalYaziciAdet: "",
  kablolar: "",
  uzaktanTakip: "",
  subeSayisi: "",
  qrSiparis: "",
  kuryeTakipSistemi: "",
  adSoyad: "",
  isletmeAdi: "",
  telefon: "",
};

const PLATFORMS = ["Yemek Sepeti", "Getir", "Trendyol", "Migros Yemek"];

/* ================================================================ */
/*  Adım Akışı                                                     */
/* ================================================================ */

function buildSteps(d: FormData): string[] {
  const s: string[] = ["cozumTuru"];
  if (!d.cozumTuru) return s;

  const pkt = d.cozumTuru === "paket" || d.cozumTuru === "both";
  const sal = d.cozumTuru === "salon" || d.cozumTuru === "both";

  /* Paket veya Her İkisi: paylaşılan + paket soruları */
  if (pkt) {
    s.push("bilgisayarVar", "termalYaziciVar");
    s.push("sabitTelefon");
    if (d.sabitTelefon === "evet") s.push("sabitTelefonAdet");
    s.push("cepTelefonu");
    if (d.cepTelefonu === "evet") s.push("cepTelefonuAndroid");
    s.push("internetSiparis");
    if (d.internetSiparis === "evet") s.push("platformlar");
    s.push("kendiKurye");
    if (d.kendiKurye === "evet") s.push("kuryeAdet");
  }

  /* Salon veya Her İkisi: salon soruları */
  if (sal) {
    s.push("bolumler", "masaSayisi", "garsonCihaz");
    if (!pkt) s.push("bilgisayarVar");
    s.push("anaKasa", "garsonBilgisayar");
    if (d.garsonBilgisayar === "evet") s.push("garsonBilgisayarAdet");
    if (!pkt) s.push("termalYaziciVar");
    s.push("termalYaziciAdet", "kablolar");
  }

  /* Ortak ek sorular */
  s.push("uzaktanTakip", "subeSayisi", "qrSiparis");

  /* Kurye takip sistemi: sadece paket veya her ikisi */
  if (pkt) s.push("kuryeTakipSistemi");

  s.push("yazarkasaEntegrasyon", "contact");
  return s;
}

/* ================================================================ */
/*  Telefon Doğrulama                                               */
/* ================================================================ */

function isPhoneValid(tel: string): boolean {
  const digits = tel.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 11;
}

/* ================================================================ */
/*  UI Yardımcı Bileşenler                                        */
/* ================================================================ */

function Q({
  title,
  sub,
  icon,
  children,
}: {
  title: string;
  sub?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        {icon && (
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            {icon}
          </div>
        )}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-secondary leading-tight">
            {title}
          </h2>
          {sub && <p className="text-sm text-foreground/50 mt-1">{sub}</p>}
        </div>
      </div>
      {children}
    </div>
  );
}

function Opt({
  label,
  desc,
  selected,
  onClick,
}: {
  label: string;
  desc?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 ${
        selected
          ? "border-primary bg-primary/5 ring-2 ring-primary/20"
          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <div
            className={`text-base font-semibold ${
              selected ? "text-primary" : "text-secondary"
            }`}
          >
            {label}
          </div>
          {desc && (
            <div className="text-sm text-foreground/50 mt-0.5">{desc}</div>
          )}
        </div>
        {selected && (
          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
        )}
      </div>
    </button>
  );
}

function OptGrid({
  field,
  options,
  data,
  set,
}: {
  field: keyof FormData;
  options: { value: string; label: string; desc?: string }[];
  data: FormData;
  set: (field: keyof FormData, value: string, autoAdvance?: boolean) => void;
}) {
  return (
    <div
      className={`grid gap-3 ${
        options.length === 2 ? "grid-cols-2" : "grid-cols-1"
      }`}
    >
      {options.map((o) => (
        <Opt
          key={o.value}
          label={o.label}
          desc={o.desc}
          selected={data[field] === o.value}
          onClick={() => set(field, o.value, options.length === 2)}
        />
      ))}
    </div>
  );
}

function NumInput({
  field,
  placeholder,
  label,
  data,
  set,
}: {
  field: keyof FormData;
  placeholder: string;
  label?: string;
  data: FormData;
  set: (field: keyof FormData, value: string, autoAdvance?: boolean) => void;
}) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-secondary mb-1.5">
          {label}
        </label>
      )}
      <input
        type="number"
        min="1"
        value={data[field] as string}
        onChange={(e) => set(field, e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
      />
    </div>
  );
}

/* ================================================================ */
/*  Sayfa Bileşeni                                                  */
/* ================================================================ */

export default function TeklifAlPage() {
  const [data, setData] = useState<FormData>(emptyForm);
  const [stepIdx, setStepIdx] = useState(0);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [phoneErr, setPhoneErr] = useState("");

  const steps = buildSteps(data);
  const safeIdx = Math.min(stepIdx, steps.length - 1);
  const cur = steps[safeIdx];
  const pct =
    steps.length > 1 ? Math.round((safeIdx / (steps.length - 1)) * 100) : 0;

  /* --- Veri güncelleme --- */
  const set = (
    field: keyof FormData,
    value: string,
    autoAdvance = false
  ) => {
    if (!autoAdvance) {
      setData((prev) => ({ ...prev, [field]: value }));
      return;
    }

    const nextData = { ...data, [field]: value };
    const nextSteps = buildSteps(nextData);
    const currentIndex = nextSteps.indexOf(cur);

    setData(nextData);

    if (currentIndex >= 0 && currentIndex < nextSteps.length - 1) {
      setStepIdx(currentIndex + 1);
    }
  };

  const setCozumTuru = (val: string) => {
    if (val !== data.cozumTuru) setData({ ...emptyForm, cozumTuru: val });
    else set("cozumTuru", val);
  };

  const togglePlatform = (p: string) =>
    setData((prev) => ({
      ...prev,
      platformlar: prev.platformlar.includes(p)
        ? prev.platformlar.filter((x) => x !== p)
        : [...prev.platformlar, p],
    }));

  /* --- Doğrulama --- */
  const canNext = (): boolean => {
    const v = (f: keyof FormData) => !!(data[f] as string);
    switch (cur) {
      case "cozumTuru":
        return v("cozumTuru");
      case "bilgisayarVar":
        return v("bilgisayarVar");
      case "termalYaziciVar":
        return v("termalYaziciVar");
      case "sabitTelefon":
        return v("sabitTelefon");
      case "sabitTelefonAdet":
        return v("sabitTelefonAdet");
      case "cepTelefonu":
        return v("cepTelefonu");
      case "cepTelefonuAndroid":
        return v("cepTelefonuAndroid");
      case "internetSiparis":
        return v("internetSiparis");
      case "platformlar":
        return data.platformlar.length > 0 && v("markaSayisi");
      case "kendiKurye":
        return v("kendiKurye");
      case "kuryeAdet":
        return v("kuryeAdet");
      case "yazarkasaEntegrasyon":
        return v("yazarkasaEntegrasyon");
      case "bolumler":
        return !!data.bolumler.trim();
      case "masaSayisi":
        return v("masaSayisi");
      case "garsonCihaz":
        return v("garsonCihaz");
      case "anaKasa":
        return v("anaKasa");
      case "garsonBilgisayar":
        return v("garsonBilgisayar");
      case "garsonBilgisayarAdet":
        return v("garsonBilgisayarAdet");
      case "termalYaziciAdet":
        return v("termalYaziciAdet");
      case "kablolar":
        return v("kablolar");
      case "uzaktanTakip":
        return v("uzaktanTakip");
      case "subeSayisi":
        return !!data.subeSayisi.trim();
      case "qrSiparis":
        return v("qrSiparis");
      case "kuryeTakipSistemi":
        return v("kuryeTakipSistemi");
      case "contact":
        return (
          !!data.adSoyad.trim() &&
          !!data.isletmeAdi.trim() &&
          isPhoneValid(data.telefon)
        );
      default:
        return false;
    }
  };

  const goNext = () => {
    if (canNext() && safeIdx < steps.length - 1) setStepIdx(safeIdx + 1);
  };
  const goBack = () => {
    if (safeIdx > 0) setStepIdx(safeIdx - 1);
  };

  const handleSubmit = async () => {
    if (!isPhoneValid(data.telefon)) {
      setPhoneErr(
        "Lütfen geçerli bir cep telefonu numarası giriniz (05XX XXX XX XX)"
      );
      return;
    }
    setPhoneErr("");
    setLoading(true);
    try {
      await addDoc(collection(db, "teklifTalepleri"), {
        ...data,
        status: "yeni",
        createdAt: Timestamp.now(),
      });
      const response = await fetch("/api/teklif", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          payload?.error || "Teklif e-postasi gonderilemedi. Lutfen tekrar deneyin."
        );
      }

      setDone(true);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Bir hata olustu. Lutfen tekrar deneyin."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ============================================================== */
  /*  Adım İçerikleri                                                */
  /* ============================================================== */

  const isBoth = data.cozumTuru === "both";

  const renderStep = () => {
    switch (cur) {
      /* ---------- Çözüm Türü ---------- */
      case "cozumTuru":
        return (
          <Q
            title="Hangi yazılım çözümüne ihtiyacınız var?"
            icon={<Store className="h-5 w-5 text-primary" />}
          >
            <div className="space-y-3">
              <Opt
                label="Sade Paket Servis"
                desc="Pazaryeri Entegrasyonları İçin"
                selected={data.cozumTuru === "paket"}
                onClick={() => setCozumTuru("paket")}
              />
              <Opt
                label="Sade Salon Servis"
                desc="Selfservis İçin"
                selected={data.cozumTuru === "salon"}
                onClick={() => setCozumTuru("salon")}
              />
              <Opt
                label="Her İkisi de"
                desc="Paket + Salon Servis"
                selected={data.cozumTuru === "both"}
                onClick={() => setCozumTuru("both")}
              />
            </div>
          </Q>
        );

      /* ---------- Bilgisayar ---------- */
      case "bilgisayarVar":
        return (
          <Q
            title="Bilgisayarınız var mı?"
            icon={<Monitor className="h-5 w-5 text-primary" />}
          >
            <OptGrid
              data={data} set={set}
              field="bilgisayarVar"
              options={[
                { value: "var", label: "Var" },
                { value: "yok", label: "Yok" },
              ]}
            />
          </Q>
        );

      /* ---------- Termal Yazıcı ---------- */
      case "termalYaziciVar":
        return (
          <Q
            title="Termal Yazıcınız var mı?"
            icon={<Printer className="h-5 w-5 text-primary" />}
          >
            <OptGrid
              data={data} set={set}
              field="termalYaziciVar"
              options={[
                { value: "var", label: "Var" },
                { value: "yok", label: "Yok" },
              ]}
            />
          </Q>
        );

      /* ---------- Sabit Telefon ---------- */
      case "sabitTelefon":
        return (
          <Q
            title="Sabit telefon ile sipariş alıyor musunuz?"
            icon={<PhoneCall className="h-5 w-5 text-primary" />}
          >
            <OptGrid
              data={data} set={set}
              field="sabitTelefon"
              options={[
                { value: "evet", label: "Evet" },
                { value: "hayir", label: "Hayır" },
              ]}
            />
          </Q>
        );

      case "sabitTelefonAdet":
        return (
          <Q
            title="Kaç adet sabit telefonunuz var?"
            icon={<PhoneCall className="h-5 w-5 text-primary" />}
          >
            <NumInput data={data} set={set} field="sabitTelefonAdet" placeholder="Örn: 2" />
          </Q>
        );

      /* ---------- Cep Telefonu ---------- */
      case "cepTelefonu":
        return (
          <Q
            title="Sipariş alırken cep telefonu kullanıyor musunuz?"
            icon={<Smartphone className="h-5 w-5 text-primary" />}
          >
            <OptGrid
              data={data} set={set}
              field="cepTelefonu"
              options={[
                { value: "evet", label: "Evet" },
                { value: "hayir", label: "Hayır" },
              ]}
            />
          </Q>
        );

      case "cepTelefonuAndroid":
        return (
          <Q
            title="Sipariş aldığınız cep telefonunuz Android mi?"
            icon={<Smartphone className="h-5 w-5 text-primary" />}
          >
            <OptGrid
              data={data} set={set}
              field="cepTelefonuAndroid"
              options={[
                { value: "evet", label: "Evet" },
                { value: "hayir", label: "Hayır" },
              ]}
            />
            {data.cepTelefonuAndroid === "hayir" && (
              <div className="flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-200 p-4">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-800">
                    Android cep telefonu gerekmektedir.
                  </p>
                  <p className="text-xs text-amber-700 mt-1">
                    Sipariş Makinesi mobil uygulaması yalnızca Android
                    cihazlarda çalışmaktadır. Kurulum aşamasında sizin için
                    uygun bir cihaz önerebiliriz.
                  </p>
                </div>
              </div>
            )}
          </Q>
        );

      /* ---------- İnternet Sipariş ---------- */
      case "internetSiparis":
        return (
          <Q
            title="İnternetten sipariş alıyor musunuz?"
            icon={<Globe className="h-5 w-5 text-primary" />}
          >
            <OptGrid
              data={data} set={set}
              field="internetSiparis"
              options={[
                { value: "evet", label: "Evet" },
                { value: "hayir", label: "Hayır" },
              ]}
            />
          </Q>
        );

      case "platformlar":
        return (
          <Q
            title="Hangi platformlardan sipariş alıyorsunuz?"
            sub="Birden fazla seçebilirsiniz."
            icon={<Globe className="h-5 w-5 text-primary" />}
          >
            <div className="grid grid-cols-2 gap-3">
              {PLATFORMS.map((p) => {
                const sel = data.platformlar.includes(p);
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => togglePlatform(p)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all ${
                      sel
                        ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm font-semibold ${
                          sel ? "text-primary" : "text-secondary"
                        }`}
                      >
                        {p}
                      </span>
                      {sel && (
                        <CheckCircle className="h-4 w-4 text-primary" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
            <NumInput
              data={data} set={set}
              field="markaSayisi"
              placeholder="Örn: 1"
              label="Kaç adet markanız var?"
            />
          </Q>
        );

      /* ---------- Kurye ---------- */
      case "kendiKurye":
        return (
          <Q
            title="Kendi kuryeniz ile mi çalışıyorsunuz?"
            icon={<Truck className="h-5 w-5 text-primary" />}
          >
            <OptGrid
              data={data} set={set}
              field="kendiKurye"
              options={[
                { value: "evet", label: "Evet" },
                { value: "hayir", label: "Hayır" },
              ]}
            />
          </Q>
        );

      case "kuryeAdet":
        return (
          <Q
            title="Kaç adet kurye çalışıyor?"
            icon={<Truck className="h-5 w-5 text-primary" />}
          >
            <NumInput data={data} set={set} field="kuryeAdet" placeholder="Örn: 3" />
          </Q>
        );

      /* ========== SALON SORULARI ========== */

      case "bolumler":
        return (
          <Q
            title="Sipariş aldığınız kaç bölüm var restoranınızda?"
            sub="Örneğin: Salon, Bahçe, Üst Kat gibi"
            icon={<LayoutGrid className="h-5 w-5 text-primary" />}
          >
            {isBoth && (
              <div className="rounded-xl bg-blue-50 border border-blue-200 px-4 py-3">
                <p className="text-sm font-medium text-blue-700">
                  Şimdi Salon Servis bilgilerinize geçelim.
                </p>
              </div>
            )}
            <input
              type="text"
              value={data.bolumler}
              onChange={(e) => set("bolumler", e.target.value)}
              placeholder="Örn: Salon, Bahçe, Üst Kat"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </Q>
        );

      case "masaSayisi":
        return (
          <Q
            title="Kaç tane masanız var?"
            icon={<Utensils className="h-5 w-5 text-primary" />}
          >
            <NumInput data={data} set={set} field="masaSayisi" placeholder="Örn: 25" />
          </Q>
        );

      case "garsonCihaz":
        return (
          <Q
            title="Garsonlar sipariş girerken hangi cihazı kullansın?"
            sub="Mobil cihaz (telefon/tablet) veya dokunmatik PC"
            icon={<Users className="h-5 w-5 text-primary" />}
          >
            <OptGrid
              data={data} set={set}
              field="garsonCihaz"
              options={[
                {
                  value: "mobil",
                  label: "Mobil Cihaz",
                  desc: "Telefon veya Tablet",
                },
                {
                  value: "pc",
                  label: "Dokunmatik PC",
                  desc: "Sabit dokunmatik ekran",
                },
                {
                  value: "both",
                  label: "Her İkisi de",
                  desc: "Mobil Cihaz + Dokunmatik PC",
                },
              ]}
            />
          </Q>
        );

      case "anaKasa":
        return (
          <Q
            title="Ana Kasa Bilgisayarına ihtiyacınız var mı?"
            icon={<Monitor className="h-5 w-5 text-primary" />}
          >
            <OptGrid
              data={data} set={set}
              field="anaKasa"
              options={[
                { value: "evet", label: "Evet" },
                { value: "hayir", label: "Hayır" },
              ]}
            />
          </Q>
        );

      case "garsonBilgisayar":
        return (
          <Q
            title="Garson Bilgisayarına ihtiyacınız var mı?"
            icon={<Monitor className="h-5 w-5 text-primary" />}
          >
            <OptGrid
              data={data} set={set}
              field="garsonBilgisayar"
              options={[
                { value: "evet", label: "Evet" },
                { value: "hayir", label: "Hayır" },
              ]}
            />
          </Q>
        );

      case "garsonBilgisayarAdet":
        return (
          <Q
            title="Kaç adet garson bilgisayarına ihtiyacınız var?"
            icon={<Monitor className="h-5 w-5 text-primary" />}
          >
            <NumInput data={data} set={set} field="garsonBilgisayarAdet" placeholder="Örn: 2" />
          </Q>
        );

      case "termalYaziciAdet":
        return (
          <Q
            title="Kaç adet termal yazıcıya ihtiyacınız var?"
            sub="Mutfak, bar, kasa gibi bölümler için gereken toplam yazıcı sayısı"
            icon={<Printer className="h-5 w-5 text-primary" />}
          >
            <NumInput data={data} set={set} field="termalYaziciAdet" placeholder="Örn: 3" />
          </Q>
        );

      case "kablolar":
        return (
          <Q
            title="Şuan dükkanda kablolar çekildi mi?"
            sub="Kurulum için hazır durumda mı?"
            icon={<Cable className="h-5 w-5 text-primary" />}
          >
            <OptGrid
              data={data} set={set}
              field="kablolar"
              options={[
                { value: "evet", label: "Evet, Hazır" },
                { value: "hayir", label: "Henüz Hazır Değil" },
              ]}
            />
          </Q>
        );

      /* ---------- Uzaktan Takip ---------- */
      case "uzaktanTakip":
        return (
          <Q
            title="Restoranınızı uzaktan takip etmek istiyor musunuz?"
            sub="Nerede olursanız olun işletmenizi anlık takip edin."
            icon={<Eye className="h-5 w-5 text-primary" />}
          >
            <OptGrid
              data={data} set={set}
              field="uzaktanTakip"
              options={[
                { value: "evet", label: "Evet" },
                { value: "hayir", label: "Hayır" },
              ]}
            />
          </Q>
        );

      /* ---------- Şube Sayısı ---------- */
      case "subeSayisi":
        return (
          <Q
            title="Kaç adet şubeniz var?"
            icon={<Building2 className="h-5 w-5 text-primary" />}
          >
            <NumInput data={data} set={set} field="subeSayisi" placeholder="Örn: 1" />
          </Q>
        );

      /* ---------- QR Code Sipariş ---------- */
      case "qrSiparis":
        return (
          <Q
            title="QR Code ile sipariş almak istiyor musunuz?"
            sub="Müşteriler masadaki QR kodu okutarak sipariş verebilir."
            icon={<QrCode className="h-5 w-5 text-primary" />}
          >
            <OptGrid
              data={data} set={set}
              field="qrSiparis"
              options={[
                { value: "evet", label: "Evet" },
                { value: "hayir", label: "Hayır" },
              ]}
            />
          </Q>
        );

      /* ---------- Kurye Takip Sistemi ---------- */
      case "kuryeTakipSistemi":
        return (
          <Q
            title="Kurye Sipariş Takip Sistemi"
            sub="Kuryelerinizin siparişleri nasıl takip etmesini istersiniz?"
            icon={<Navigation className="h-5 w-5 text-primary" />}
          >
            <div className="space-y-3">
              <Opt
                label="Standart"
                desc="Temel kurye sipariş takibi"
                selected={data.kuryeTakipSistemi === "standart"}
                onClick={() => set("kuryeTakipSistemi", "standart")}
              />
              <Opt
                label="Dokunmatik Ekran ile Kartlı Sistem"
                desc="Kuryeler kart basarak sipariş alır/teslim eder"
                selected={data.kuryeTakipSistemi === "kartli"}
                onClick={() => set("kuryeTakipSistemi", "kartli")}
              />
              <Opt
                label="Mobil Uygulama Sistemi"
                desc="Kuryeler mobil uygulama üzerinden takip eder"
                selected={data.kuryeTakipSistemi === "mobil"}
                onClick={() => set("kuryeTakipSistemi", "mobil")}
              />
            </div>
          </Q>
        );

      /* ---------- Yazarkasa (Ortak) ---------- */
      case "yazarkasaEntegrasyon":
        return (
          <Q
            title="Yazarkasa Entegrasyonuna ihtiyacınız var mı?"
            icon={<CreditCard className="h-5 w-5 text-primary" />}
          >
            <OptGrid
              data={data} set={set}
              field="yazarkasaEntegrasyon"
              options={[
                { value: "evet", label: "Evet" },
                { value: "hayir", label: "Hayır" },
              ]}
            />
          </Q>
        );

      /* ---------- İletişim ---------- */
      case "contact":
        return (
          <Q
            title="İletişim Bilgileriniz"
            sub="Size en kısa sürede teklif iletebilmemiz için bilgilerinizi girin."
            icon={<Send className="h-5 w-5 text-primary" />}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary mb-1.5">
                  Ad Soyad <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={data.adSoyad}
                  onChange={(e) => set("adSoyad", e.target.value)}
                  placeholder="Adınız ve soyadınız"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-1.5">
                  İşletme Adı <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={data.isletmeAdi}
                  onChange={(e) => set("isletmeAdi", e.target.value)}
                  placeholder="Örn: Lezzet Restoran"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-1.5">
                  Cep Telefonu <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={data.telefon}
                  onChange={(e) => {
                    set("telefon", e.target.value);
                    setPhoneErr("");
                  }}
                  placeholder="05XX XXX XX XX"
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${
                    phoneErr
                      ? "border-red-400 focus:ring-red-200 focus:border-red-500"
                      : "border-gray-200 focus:ring-primary/30 focus:border-primary"
                  }`}
                />
                {phoneErr && (
                  <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" />
                    {phoneErr}
                  </p>
                )}
              </div>
            </div>
          </Q>
        );

      default:
        return null;
    }
  };

  /* ============================================================== */
  /*  Sayfa Render                                                   */
  /* ============================================================== */

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Başlık */}
        <section className="pt-28 pb-4">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              Ücretsiz Teklif
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-2">
              İşletmenize Özel{" "}
              <span className="gradient-text">Teklif Alın</span>
            </h1>
            <p className="text-foreground/60">
              Birkaç soruyu yanıtlayın, 5 dakika içinde teklifinizi
              hazırlayalım.
            </p>
          </div>
        </section>

        {/* İlerleme Çubuğu */}
        {!done && (
          <section className="pb-6">
            <div className="mx-auto max-w-2xl px-4 sm:px-6">
              <div className="flex items-center justify-between text-xs text-foreground/40 mb-2">
                <span>
                  Soru {safeIdx + 1} / {steps.length}
                </span>
                <span>%{pct}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary rounded-full h-2 transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          </section>
        )}

        {/* İçerik */}
        {!done ? (
          <section className="pb-20">
            <div className="mx-auto max-w-2xl px-4 sm:px-6">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
                {renderStep()}

                {/* Navigasyon */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                  {safeIdx > 0 ? (
                    <button
                      type="button"
                      onClick={goBack}
                      className="flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Geri
                    </button>
                  ) : (
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Ana Sayfa
                    </Link>
                  )}

                  {cur === "contact" ? (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!canNext() || loading}
                      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-sm font-semibold text-white hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Gönder
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={!canNext()}
                      className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      İleri
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              <p className="text-center text-xs text-foreground/40 mt-6">
                Bilgileriniz gizli tutulur ve yalnızca teklif hazırlamak
                amacıyla kullanılır.
              </p>
            </div>
          </section>
        ) : (
          /* ============ Başarı Ekranı ============ */
          <section className="pb-20">
            <div className="mx-auto max-w-lg px-4 sm:px-6">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary mb-3">
                  Talebiniz Alındı!
                </h2>
                <p className="text-foreground/60 mb-8 text-lg">
                  <span className="font-semibold text-primary">5 Dakika</span>{" "}
                  içinde teklifiniz size iletilecektir.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-secondary hover:bg-gray-50 transition-colors flex-1"
                  >
                    Ana Sayfaya Dön
                  </Link>
                  <a
                    href="https://wa.me/905327985436"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1fb855] transition-colors flex-1"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp ile Yazın
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
