import { Resend } from "resend";

const DEFAULT_TO_EMAIL = "info@adelsoft.co.uk";
const DEFAULT_TEST_FROM_EMAIL = "onboarding@resend.dev";

type SendEmailOptions = {
  fromName: string;
  subject: string;
  html: string;
  to?: string;
  replyTo?: string;
};

function getTrimmedEnv(name: string) {
  return process.env[name]?.trim();
}

function getFromEmail() {
  return getTrimmedEnv("RESEND_FROM_EMAIL") || DEFAULT_TEST_FROM_EMAIL;
}

function getToEmail(override?: string) {
  return override || getTrimmedEnv("RESEND_TO_EMAIL") || DEFAULT_TO_EMAIL;
}

function buildResendErrorMessage(errorMessage: string, fromEmail: string) {
  if (fromEmail === DEFAULT_TEST_FROM_EMAIL) {
    return "E-posta gönderilemedi. onboarding@resend.dev yalnızca Resend hesabının kendi adresine test e-postası gönderebilir. Resend üzerinde bir domain doğrulayıp RESEND_FROM_EMAIL ayarlayın.";
  }

  return `E-posta gönderilemedi. ${errorMessage}`;
}

export async function sendTransactionalEmail({
  fromName,
  subject,
  html,
  to,
  replyTo,
}: SendEmailOptions) {
  const apiKey = getTrimmedEnv("RESEND_API_KEY");

  if (!apiKey) {
    throw new Error(
      "E-posta gönderilemedi. RESEND_API_KEY tanımlı değil."
    );
  }

  const fromEmail = getFromEmail();
  const toEmail = getToEmail(to);
  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from: `${fromName} <${fromEmail}>`,
    to: toEmail,
    subject,
    html,
    replyTo,
  });

  if (error) {
    throw new Error(buildResendErrorMessage(error.message, fromEmail));
  }

  if (!data?.id) {
    throw new Error(
      "E-posta gönderilemedi. Resend geçerli bir mesaj kimliği döndürmedi."
    );
  }

  return data;
}