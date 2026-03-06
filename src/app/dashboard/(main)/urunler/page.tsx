"use client";

import { useState } from "react";
import { useFirestore } from "@/hooks/useFirestore";
import DataTable from "@/components/dashboard/DataTable";
import CrudModal from "@/components/dashboard/CrudModal";
import { Plus, CheckCircle, XCircle } from "lucide-react";

const fields = [
  { name: "name", label: "Ürün Adı", type: "text" as const, required: true },
  {
    name: "description",
    label: "Açıklama",
    type: "textarea" as const,
    required: true,
  },
  {
    name: "category",
    label: "Kategori",
    type: "select" as const,
    options: [
      { value: "yazilim", label: "Yazılım" },
      { value: "donanim", label: "Donanım" },
      { value: "entegrasyon", label: "Entegrasyon" },
    ],
    required: true,
  },
  {
    name: "price",
    label: "Fiyat (₺)",
    type: "number" as const,
  },
  {
    name: "isActive",
    label: "Aktif",
    type: "toggle" as const,
  },
];

export default function UrunlerPage() {
  const { data, loading, add, update, remove } = useFirestore("products");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Record<string, unknown> | null>(null);
  const [saving, setSaving] = useState(false);

  const columns = [
    { key: "name", label: "Ürün Adı" },
    { key: "category", label: "Kategori" },
    {
      key: "price",
      label: "Fiyat",
      render: (val: unknown) =>
        val ? `₺${Number(val).toLocaleString("tr-TR")}` : "-",
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
      if (editing) {
        await update(editing.id as string, formData);
      } else {
        await add(formData);
      }
      setModalOpen(false);
      setEditing(null);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Ürünler</h1>
        <button
          onClick={() => {
            setEditing(null);
            setModalOpen(true);
          }}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
        >
          <Plus className="h-4 w-4" /> Yeni Ürün
        </button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        loading={loading}
        onEdit={(row) => {
          setEditing(row);
          setModalOpen(true);
        }}
        onDelete={(row) => {
          if (confirm("Bu ürünü silmek istediğinize emin misiniz?")) {
            remove(row.id as string);
          }
        }}
      />

      {modalOpen && (
        <CrudModal
          title={editing ? "Ürünü Düzenle" : "Yeni Ürün"}
          fields={fields}
          initialData={editing || undefined}
          loading={saving}
          onSubmit={handleSave}
          onClose={() => {
            setModalOpen(false);
            setEditing(null);
          }}
        />
      )}
    </div>
  );
}
