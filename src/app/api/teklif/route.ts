import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      cozumTuru,
      bilgisayarVar,
      termalYaziciVar,
      sabitTelefon,
      sabitTelefonAdet,
      cepTelefonu,
      cepTelefonuAndroid,
      internetSiparis,
      platformlar,
      markaSayisi,
      kendiKurye,
      kuryeAdet,
      yazarkasaEntegrasyon,
      bolumler,
      masaSayisi,
      garsonCihaz,
      anaKasa,
      garsonBilgisayar,
      garsonBilgisayarAdet,
      termalYaziciAdet,
      kablolar,
      uzaktanTakip,
      subeSayisi,
      qrSiparis,
      kuryeTakipSistemi,
      adSoyad,
      isletmeAdi,
      telefon,
    } = body;

    /* ---------- Telefon doğrulama ---------- */
    const cleanPhone = (telefon || "").replace(/\D/g, "");
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      return NextResponse.json(
        { error: "Geçerli bir cep telefonu numarası giriniz." },
        { status: 400 }
      );
    }

    /* ---------- Çözüm türü etiketi ---------- */
    const cozumLabel =
      cozumTuru === "paket"
        ? "Paket Servis"
        : cozumTuru === "salon"
        ? "Salon Servis"
        : "Paket + Salon Servis";

    const needPaket = cozumTuru === "paket" || cozumTuru === "both";
    const needSalon = cozumTuru === "salon" || cozumTuru === "both";

    /* ---------- HTML e-posta içeriği ---------- */
    let html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <h2 style="color:#e74c3c;border-bottom:2px solid #e74c3c;padding-bottom:10px;">
          Yeni Teklif Talebi
        </h2>

        <h3 style="color:#333;">Müşteri Bilgileri</h3>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          <tr><td style="padding:6px 10px;font-weight:bold;width:180px;">Ad Soyad:</td><td style="padding:6px 10px;">${adSoyad}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:6px 10px;font-weight:bold;">İşletme Adı:</td><td style="padding:6px 10px;">${isletmeAdi}</td></tr>
          <tr><td style="padding:6px 10px;font-weight:bold;">Cep Telefonu:</td><td style="padding:6px 10px;">${telefon}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:6px 10px;font-weight:bold;">Çözüm Türü:</td><td style="padding:6px 10px;">${cozumLabel}</td></tr>
        </table>

        <h3 style="color:#333;">Ortak Bilgiler</h3>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          <tr><td style="padding:6px 10px;font-weight:bold;width:180px;">Bilgisayar:</td><td style="padding:6px 10px;">${bilgisayarVar === "var" ? "Mevcut" : "Yok"}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:6px 10px;font-weight:bold;">Termal Yazıcı:</td><td style="padding:6px 10px;">${termalYaziciVar === "var" ? "Mevcut" : "Yok"}</td></tr>
          ${termalYaziciAdet ? `<tr><td style="padding:6px 10px;font-weight:bold;">Termal Yazıcı Adet:</td><td style="padding:6px 10px;">${termalYaziciAdet}</td></tr>` : ""}
          <tr style="background:#f9f9f9;"><td style="padding:6px 10px;font-weight:bold;">Yazarkasa Entegrasyon:</td><td style="padding:6px 10px;">${yazarkasaEntegrasyon === "evet" ? "Evet" : "Hayır"}</td></tr>
          <tr><td style="padding:6px 10px;font-weight:bold;">Uzaktan Takip:</td><td style="padding:6px 10px;">${uzaktanTakip === "evet" ? "Evet" : "Hayır"}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:6px 10px;font-weight:bold;">Şube Sayısı:</td><td style="padding:6px 10px;">${subeSayisi}</td></tr>
          <tr><td style="padding:6px 10px;font-weight:bold;">QR Sipariş:</td><td style="padding:6px 10px;">${qrSiparis === "evet" ? "Evet" : "Hayır"}</td></tr>
          ${kuryeTakipSistemi ? `<tr style="background:#f9f9f9;"><td style="padding:6px 10px;font-weight:bold;">Kurye Takip Sistemi:</td><td style="padding:6px 10px;">${kuryeTakipSistemi === "kartli" ? "Dokunmatik Ekran ile Kartlı Sistem" : kuryeTakipSistemi === "mobil" ? "Mobil Uygulama Sistemi" : "Standart"}</td></tr>` : ""}
        </table>`;

    if (needPaket) {
      html += `
        <h3 style="color:#333;">Paket Servis Detayları</h3>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          <tr><td style="padding:6px 10px;font-weight:bold;width:180px;">Sabit Telefon:</td><td style="padding:6px 10px;">${sabitTelefon === "evet" ? `Evet — ${sabitTelefonAdet} adet` : "Hayır"}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:6px 10px;font-weight:bold;">Cep Telefonu:</td><td style="padding:6px 10px;">${cepTelefonu === "evet" ? `Evet (Android: ${cepTelefonuAndroid === "evet" ? "Evet" : "Hayır"})` : "Hayır"}</td></tr>
          <tr><td style="padding:6px 10px;font-weight:bold;">İnternet Sipariş:</td><td style="padding:6px 10px;">${internetSiparis === "evet" ? `Evet` : "Hayır"}</td></tr>
          ${internetSiparis === "evet" ? `<tr style="background:#f9f9f9;"><td style="padding:6px 10px;font-weight:bold;">Platformlar:</td><td style="padding:6px 10px;">${(platformlar || []).join(", ")}</td></tr>
          <tr><td style="padding:6px 10px;font-weight:bold;">Marka Sayısı:</td><td style="padding:6px 10px;">${markaSayisi}</td></tr>` : ""}
          <tr style="background:#f9f9f9;"><td style="padding:6px 10px;font-weight:bold;">Kendi Kurye:</td><td style="padding:6px 10px;">${kendiKurye === "evet" ? `Evet — ${kuryeAdet} kurye` : "Hayır"}</td></tr>
        </table>`;
    }

    if (needSalon) {
      html += `
        <h3 style="color:#333;">Salon Servis Detayları</h3>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          <tr><td style="padding:6px 10px;font-weight:bold;width:180px;">Bölümler:</td><td style="padding:6px 10px;">${bolumler}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:6px 10px;font-weight:bold;">Masa Sayısı:</td><td style="padding:6px 10px;">${masaSayisi}</td></tr>
          <tr><td style="padding:6px 10px;font-weight:bold;">Garson Cihazı:</td><td style="padding:6px 10px;">${garsonCihaz === "mobil" ? "Mobil Cihaz (Telefon/Tablet)" : garsonCihaz === "pc" ? "Dokunmatik PC" : "Her İkisi de (Mobil + PC)"}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:6px 10px;font-weight:bold;">Ana Kasa Bilgisayar:</td><td style="padding:6px 10px;">${anaKasa === "evet" ? "Evet" : "Hayır"}</td></tr>
          <tr><td style="padding:6px 10px;font-weight:bold;">Garson Bilgisayar:</td><td style="padding:6px 10px;">${garsonBilgisayar === "evet" ? `Evet — ${garsonBilgisayarAdet} adet` : "Hayır"}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:6px 10px;font-weight:bold;">Kablolar:</td><td style="padding:6px 10px;">${kablolar === "evet" ? "Çekilmiş / Hazır" : "Henüz Hazır Değil"}</td></tr>
        </table>`;
    }

    html += `
        <p style="color:#999;font-size:12px;margin-top:20px;">Bu e-posta siparismakinesi.com teklif formundan otomatik gönderilmiştir.</p>
      </div>`;

    /* ---------- E-posta gönderimi (Resend) ---------- */
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "Sipariş Makinesi Teklif <onboarding@resend.dev>",
        to: "info@adelsoft.co.uk",
        subject: `Yeni Teklif Talebi — ${isletmeAdi} (${adSoyad})`,
        html,
      });
    } else {
      console.warn("RESEND_API_KEY tanımlı değil. E-posta gönderilemedi.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Teklif API hatası:", error);
    return NextResponse.json(
      { error: "Teklif gönderilirken bir hata oluştu." },
      { status: 500 }
    );
  }
}
