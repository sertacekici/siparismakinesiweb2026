import { NextResponse } from "next/server";
import { sendTransactionalEmail } from "@/lib/email";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const { adSoyad, telefon, email, konu, mesaj } = await request.json();

    if (!adSoyad?.trim() || !telefon?.trim() || !mesaj?.trim()) {
      return NextResponse.json({ error: "Zorunlu alanlar eksik." }, { status: 400 });
    }

    const digits = telefon.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 11) {
      return NextResponse.json({ error: "Geçersiz telefon numarası." }, { status: 400 });
    }

    const safeAdSoyad = escapeHtml(adSoyad.trim());
    const safeTelefon = escapeHtml(telefon.trim());
    const safeEmail = email?.trim() ? escapeHtml(email.trim()) : "";
    const safeKonu = konu?.trim() ? escapeHtml(konu.trim()) : "";
    const safeMesaj = escapeHtml(mesaj.trim());

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;padding:20px;border-radius:12px;">
        <div style="background:linear-gradient(135deg,#ff6b00,#ff8c00);padding:20px 24px;border-radius:10px 10px 0 0;">
          <h1 style="margin:0;color:#fff;font-size:20px;">📩 Yeni İletişim Formu</h1>
        </div>
        <div style="background:#fff;padding:24px;border-radius:0 0 10px 10px;border:1px solid #e5e7eb;border-top:none;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;width:130px;vertical-align:top;">Ad Soyad</td>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;">${safeAdSoyad}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;vertical-align:top;">Telefon</td>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;">${safeTelefon}</td>
            </tr>
            ${safeEmail ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;vertical-align:top;">E-posta</td>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;">${safeEmail}</td>
            </tr>` : ""}
            ${safeKonu ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;vertical-align:top;">Konu</td>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;">${safeKonu}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:10px 0;color:#6b7280;vertical-align:top;">Mesaj</td>
              <td style="padding:10px 0;white-space:pre-wrap;">${safeMesaj}</td>
            </tr>
          </table>
        </div>
        <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:16px;">
          Bu mesaj siparismakinesi.com iletişim formundan gönderilmiştir.
        </p>
      </div>
    `;

    await sendTransactionalEmail({
      fromName: "Sipariş Makinesi İletişim",
      subject: safeKonu
        ? `İletişim Formu: ${safeKonu}`
        : `İletişim Formu: ${safeAdSoyad}`,
      html,
      replyTo: email?.trim() || undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("İletişim API hatası:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "E-posta gönderilemedi.",
      },
      { status: 500 }
    );
  }
}
