"use client";

import { useEffect, useState, useCallback } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface FirestoreItem {
  id: string;
  [key: string]: unknown;
}

export function useFirestore(
  collectionName: string,
  orderField: string = "createdAt",
  orderDirection: "asc" | "desc" = "desc"
) {
  const [data, setData] = useState<FirestoreItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ref = collection(db, collectionName);
    const q = query(ref, orderBy(orderField, orderDirection));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(items);
      setLoading(false);
    });

    return unsubscribe;
  }, [collectionName, orderField, orderDirection]);

  const add = useCallback(
    async (item: Record<string, unknown>) => {
      const ref = collection(db, collectionName);
      await addDoc(ref, { ...item, createdAt: Timestamp.now() });
    },
    [collectionName]
  );

  const update = useCallback(
    async (id: string, item: Record<string, unknown>) => {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, { ...item, updatedAt: Timestamp.now() });
    },
    [collectionName]
  );

  const remove = useCallback(
    async (id: string) => {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
    },
    [collectionName]
  );

  return { data, loading, add, update, remove };
}
