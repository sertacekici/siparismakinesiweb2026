import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
  type WhereFilterOp,
  type QueryConstraint,
} from "firebase/firestore";
import { db } from "./firebase";

export interface FirestoreDoc {
  id: string;
  [key: string]: unknown;
}

export async function getDocuments(
  collectionName: string,
  orderField?: string,
  orderDirection: "asc" | "desc" = "asc"
): Promise<FirestoreDoc[]> {
  const ref = collection(db, collectionName);
  const q = orderField
    ? query(ref, orderBy(orderField, orderDirection))
    : query(ref);
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getDocument(
  collectionName: string,
  docId: string
): Promise<FirestoreDoc | null> {
  const docRef = doc(db, collectionName, docId);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
}

export async function addDocument(
  collectionName: string,
  data: Record<string, unknown>
): Promise<string> {
  const ref = collection(db, collectionName);
  const docRef = await addDoc(ref, {
    ...data,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
}

export async function updateDocument(
  collectionName: string,
  docId: string,
  data: Record<string, unknown>
): Promise<void> {
  const docRef = doc(db, collectionName, docId);
  await updateDoc(docRef, {
    ...data,
    updatedAt: Timestamp.now(),
  });
}

export async function deleteDocument(
  collectionName: string,
  docId: string
): Promise<void> {
  const docRef = doc(db, collectionName, docId);
  await deleteDoc(docRef);
}

export async function queryDocuments(
  collectionName: string,
  field: string,
  operator: WhereFilterOp,
  value: unknown,
  orderField?: string,
  orderDirection: "asc" | "desc" = "asc"
): Promise<FirestoreDoc[]> {
  const ref = collection(db, collectionName);
  const constraints: QueryConstraint[] = [where(field, operator, value)];
  if (orderField) {
    constraints.push(orderBy(orderField, orderDirection));
  }
  const q = query(ref, ...constraints);
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
