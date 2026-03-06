"use client";

import { useState } from "react";
import { useFirestore } from "@/hooks/useFirestore";
import DataTable from "@/components/dashboard/DataTable";
import CrudModal from "@/components/dashboard/CrudModal";
import { Plus } from "lucide-react";

const fields = [
  { name: "name", label: "Ad Soyad", type: "text" as const, required: true },
  {
    name: "email",
    label: "E-posta",
    type: "email" as const,
    required: true,
  },
  { name: "phone", label: "Telefon", type: "tel" as const },
  { name: "company", label: "Şirket", type: "text" as const },
  {
    name: "role",
    label: "Rol",
    type: "select" as const,
    options: [
      { value: "musteri", label: "Müşteri" },
      { value: "tedarikci", label: "Tedarikçi" },
      { value: "ortak", label: "Ortak" },
      { value: "diger", label: "Diğer" },
    ],
  },
  { name: "note", label: "Not", type: "textarea" as const },
];

const roleLabels: Record<string, string> = {
  musteri: "Müşteri",
  tedarikci: "Tedarikçi",
  ortak: "Ortak",
  diger: "Diğer",
};

export default function IletisimYonetimiPage() {
  const { data, loading, add, update, remove } = useFirestore("contacts");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Record<string, unknown> | null>(null);
  const [saving, setSaving] = useState(false);

  const columns = [
    { key: "name", label: "Ad Soyad" },
    { key: "email", label: "E-posta" },
    { key: "phone", label: "Telefon", render: (v: unknown) => (v as string) || "-" },
    { key: "company", label: "Şirket", render: (v: unknown) => (v as string) || "-" },
    {
      key: "role",
      label: "Rol",
      render: (v: unknown) => roleLabels[v as string] || (v as string) || "-",
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
        <h1 className="text-2xl font-bold text-gray-900">İletişim Yönetimi</h1>
        <button
          onClick={() => {
            setEditing(null);
            setModalOpen(true);
          }}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
        >
          <Plus className="h-4 w-4" /> Yeni Kişi
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
          if (confirm("Bu kişiyi silmek istediğinize emin misiniz?")) {
            remove(row.id as string);
          }
        }}
      />

      {modalOpen && (
        <CrudModal
          title={editing ? "Kişiyi Düzenle" : "Yeni Kişi"}
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
