import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;padding:20px;border-radius:12px;">
        <div style="background:linear-gradient(135deg,#ff6b00,#ff8c00);padding:20px 24px;border-radius:10px 10px 0 0;">
          <h1 style="margin:0;color:#fff;font-size:20px;">📩 Yeni İletişim Formu</h1>
        </div>
        <div style="background:#fff;padding:24px;border-radius:0 0 10px 10px;border:1px solid #e5e7eb;border-top:none;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;width:130px;vertical-align:top;">Ad Soyad</td>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;">${adSoyad}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;vertical-align:top;">Telefon</td>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;">${telefon}</td>
            </tr>
            ${email ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;vertical-align:top;">E-posta</td>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;">${email}</td>
            </tr>` : ""}
            ${konu ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;vertical-align:top;">Konu</td>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;">${konu}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:10px 0;color:#6b7280;vertical-align:top;">Mesaj</td>
              <td style="padding:10px 0;white-space:pre-wrap;">${mesaj}</td>
            </tr>
          </table>
        </div>
        <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:16px;">
          Bu mesaj siparismakinesi.com iletişim formundan gönderilmiştir.
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "Sipariş Makinesi İletişim <onboarding@resend.dev>",
      to: "info@adelsoft.co.uk",
      subject: konu
        ? `İletişim Formu: ${konu}`
        : `İletişim Formu: ${adSoyad}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "E‑posta gönderilemedi." },
      { status: 500 }
    );
  }
}
