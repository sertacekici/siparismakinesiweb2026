import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function getTrimmedEnv(name: string) {
  return process.env[name]?.trim();
}

function getFirebaseAdminConfig() {
  const projectId = getTrimmedEnv("FIREBASE_ADMIN_PROJECT_ID");
  const clientEmail = getTrimmedEnv("FIREBASE_ADMIN_CLIENT_EMAIL");
  const privateKey = getTrimmedEnv("FIREBASE_ADMIN_PRIVATE_KEY")?.replaceAll(
    "\\n",
    "\n"
  );

  if (!projectId || !clientEmail || !privateKey) {
    return null;
  }

  return { projectId, clientEmail, privateKey };
}

export function getAdminDb() {
  const config = getFirebaseAdminConfig();

  if (!config) {
    return null;
  }

  if (getApps().length === 0) {
    initializeApp({
      credential: cert(config),
    });
  }

  return getFirestore();
}