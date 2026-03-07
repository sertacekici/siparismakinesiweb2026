# Siparis Makinesi Web

Next.js tabanli kurumsal web sitesi, urun sayfalari, teklif formu, iletisim formu ve dashboard arayuzu icerir.

## Gelistirme

```bash
npm install
npm run dev
```

Uygulama varsayilan olarak `http://localhost:3000` adresinde calisir.

## Ortam Degiskenleri

`.env.example` dosyasindaki alanlari doldurup `.env.local` olusturun.

Gerekli degiskenler:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_TO_EMAIL`

Opsiyonel, sadece teklif taleplerinin sunucu tarafindan Firestore'a da kaydedilmesi isteniyorsa:

- `FIREBASE_ADMIN_PROJECT_ID`
- `FIREBASE_ADMIN_CLIENT_EMAIL`
- `FIREBASE_ADMIN_PRIVATE_KEY`

## Netlify Deploy

Bu repo `netlify.toml` ile Netlify deploy icin hazirlandi.

Netlify panelinde su ayarlari kullanin:

- Build command: `npm run build`
- Node version: `20`

Netlify site ayarlari icinde Environment Variables alanina `.env.example` dosyasindaki degiskenleri ekleyin.

`NEXT_PUBLIC_SITE_URL` degerini Netlify uzerindeki canli alan adiniz olacak sekilde ayarlayin.

Form gonderimlerinin calismasi icin `RESEND_API_KEY` tanimli olmalidir.

`RESEND_FROM_EMAIL` degerinin Resend uzerinde dogrulanmis bir domain kullanmasi gerekir. `onboarding@resend.dev` yalnizca hesap sahibinin kendi adresine test maili gonderebilir; canli iletisim ve teklif formlari icin yeterli degildir.

Teklif formu kullanici tarafindan Firestore'a yazmaz. Firestore kaydinin da otomatik olusmasi isteniyorsa Netlify tarafina `FIREBASE_ADMIN_PROJECT_ID`, `FIREBASE_ADMIN_CLIENT_EMAIL` ve `FIREBASE_ADMIN_PRIVATE_KEY` degerleri eklenmelidir.
