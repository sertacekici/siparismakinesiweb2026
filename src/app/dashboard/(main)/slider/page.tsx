"use client";

import { useState, useRef } from "react";
import { useFirestore } from "@/hooks/useFirestore";
import DataTable from "@/components/dashboard/DataTable";
import CrudModal from "@/components/dashboard/CrudModal";
import {
  Plus,
  CheckCircle,
  XCircle,
  Image as ImageIcon,
  Upload,
  Loader2,
} from "lucide-react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";

const fields = [
  {
    name: "title",
    label: "Başlık",
    type: "text" as const,
    required: true,
    placeholder: "Slide başlığı",
  },
  {
    name: "subtitle",
    label: "Alt Başlık",
    type: "textarea" as const,
    placeholder: "Kısa açıklama",
  },
  {
    name: "buttonText",
    label: "Buton Metni",
    type: "text" as const,
    placeholder: "Detaylı Bilgi Al",
  },
  {
    name: "buttonLink",
    label: "Buton Linki",
    type: "text" as const,
    required: true,
    placeholder: "/urunler/siparis-yonetimi",
  },
  {
    name: "order",
    label: "Sıralama",
    type: "number" as const,
    placeholder: "1",
  },
  {
    name: "isActive",
    label: "Aktif",
    type: "toggle" as const,
  },
];

export default function SliderPage() {
  const { data, loading, add, update, remove } = useFirestore(
    "slides",
    "order",
    "asc"
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Record<string, unknown> | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadTargetId, setUploadTargetId] = useState<string | null>(null);

  const columns = [
    {
      key: "imageUrl",
      label: "Görsel",
      render: (val: unknown) =>
        val ? (
          <img
            src={val as string}
            alt="Slide"
            className="w-20 h-12 object-cover rounded"
          />
        ) : (
          <div className="w-20 h-12 bg-gray-100 rounded flex items-center justify-center">
            <ImageIcon className="h-5 w-5 text-gray-300" />
          </div>
        ),
    },
    { key: "title", label: "Başlık" },
    {
      key: "buttonLink",
      label: "Link",
      render: (val: unknown) => (
        <span className="text-xs text-gray-500 font-mono">
          {(val as string) || "-"}
        </span>
      ),
    },
    {
      key: "order",
      label: "Sıra",
      render: (val: unknown) => (
        <span className="text-xs font-medium">{(val as number) ?? "-"}</span>
      ),
    },
    {
      key: "isActive",
      label: "Durum",
      render: (val: unknown) =>
        val ? (
          <span className="inline-flex items-center gap-1 text-xs text-green-600">
            <CheckCircle className="h-3.5 w-3.5" /> Aktif
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs text-gray-400">
            <XCircle className="h-3.5 w-3.5" /> Pasif
          </span>
        ),
    },
  ];

  const handleSave = async (formData: Record<string, unknown>) => {
    setSaving(true);
    try {
      const saveData = {
        ...formData,
        order: Number(formData.order) || 0,
        buttonText: formData.buttonText || "Detaylı Bilgi Al",
      };
      if (editing) {
        await update(editing.id as string, saveData);
      } else {
        await add({ ...saveData, imageUrl: "" });
      }
      setModalOpen(false);
      setEditing(null);
    } catch (err) {
      console.error("Slide kaydetme hatası:", err);
      alert(
        "Kaydetme başarısız oldu. Firebase Console'dan Firestore güvenlik kurallarını kontrol edin.\n\nHata: " +
          (err instanceof Error ? err.message : String(err))
      );
    } finally {
      setSaving(false);
    }
  };

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    slideId: string
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file
    if (!file.type.startsWith("image/")) {
      alert("Lütfen bir görsel dosyası seçin.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("Dosya boyutu 5MB'dan küçük olmalıdır.");
      return;
    }

    setUploading(slideId);
    setUploadProgress(0);

    try {
      const storageRef = ref(
        storage,
        `slides/${slideId}_${Date.now()}.${file.name.split(".").pop()}`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(Math.round(progress));
        },
        () => {
          alert("Yükleme sırasında bir hata oluştu.");
          setUploading(null);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await update(slideId, { imageUrl: downloadURL });
          setUploading(null);
          setUploadProgress(0);
        }
      );
    } catch {
      alert("Yükleme başlatılamadı.");
      setUploading(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Slider Yönetimi</h1>
          <p className="text-sm text-gray-500 mt-1">
            Ana sayfa slider görsellerini ve linklerini yönetin.
          </p>
        </div>
        <button
          onClick={() => {
            setEditing(null);
            setModalOpen(true);
          }}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
        >
          <Plus className="h-4 w-4" /> Yeni Slide
        </button>
      </div>

      {/* Slide Cards — better UX for image management */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {loading ? (
          <div className="col-span-full text-center py-12">
            <div className="h-8 w-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
            <p className="mt-3 text-sm text-gray-500">Yükleniyor...</p>
          </div>
        ) : data.length === 0 ? (
          <div className="col-span-full text-center py-12 bg-white rounded-xl border border-gray-200">
            <ImageIcon className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-500">
              Henüz slide eklenmemiş. &quot;Yeni Slide&quot; butonuna basarak
              başlayın.
            </p>
          </div>
        ) : (
          data.map((slide) => (
            <div
              key={slide.id as string}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-44 bg-gray-100">
                {slide.imageUrl ? (
                  <img
                    src={slide.imageUrl as string}
                    alt={slide.title as string}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <ImageIcon className="h-10 w-10 text-gray-300" />
                  </div>
                )}

                {/* Upload overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors group flex items-center justify-center">
                  <button
                    onClick={() => {
                      setUploadTargetId(slide.id as string);
                      fileInputRef.current?.click();
                    }}
                    disabled={uploading === (slide.id as string)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center gap-2 hover:bg-white"
                  >
                    {uploading === (slide.id as string) ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {uploadProgress}%
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4" />
                        Görsel Yükle
                      </>
                    )}
                  </button>
                </div>

                {/* Status badge */}
                <div className="absolute top-2 right-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      slide.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {slide.isActive ? "Aktif" : "Pasif"}
                  </span>
                </div>

                {/* Order badge */}
                <div className="absolute top-2 left-2">
                  <span className="text-xs px-2 py-1 rounded-full font-medium bg-white/90 text-gray-700">
                    #{(slide.order as number) ?? 0}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm truncate">
                  {(slide.title as string) || "Başlık yok"}
                </h3>
                <p className="text-xs text-gray-500 mt-1 truncate">
                  {(slide.subtitle as string) || "Alt başlık yok"}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-xs text-gray-400">Link:</span>
                  <span className="text-xs font-mono text-primary truncate">
                    {(slide.buttonLink as string) || "-"}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs text-gray-400">Buton:</span>
                  <span className="text-xs text-gray-600">
                    {(slide.buttonText as string) || "Detaylı Bilgi Al"}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => {
                      setEditing(slide);
                      setModalOpen(true);
                    }}
                    className="flex-1 text-xs font-medium text-primary hover:bg-primary/5 py-1.5 rounded-lg transition-colors"
                  >
                    Düzenle
                  </button>
                  <button
                    onClick={() => {
                      if (
                        confirm("Bu slide'ı silmek istediğinize emin misiniz?")
                      ) {
                        remove(slide.id as string);
                      }
                    }}
                    className="flex-1 text-xs font-medium text-red-500 hover:bg-red-50 py-1.5 rounded-lg transition-colors"
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (uploadTargetId) {
            handleImageUpload(e, uploadTargetId);
          }
          e.target.value = "";
        }}
      />

      {modalOpen && (
        <CrudModal
          title={editing ? "Slide Düzenle" : "Yeni Slide"}
          fields={fields}
          initialData={editing || undefined}
          onSubmit={handleSave}
          onClose={() => {
            setModalOpen(false);
            setEditing(null);
          }}
          loading={saving}
        />
      )}
    </div>
  );
}
