"use client";

import { useState } from "react";
import { useFirestore } from "@/hooks/useFirestore";
import DataTable from "@/components/dashboard/DataTable";
import { Eye, Trash2, Filter } from "lucide-react";

type Status = "yeni" | "okundu" | "cevaplandi" | "kapatildi";

const statusOptions: { value: Status | "all"; label: string }[] = [
  { value: "all", label: "Tümü" },
  { value: "yeni", label: "Yeni" },
  { value: "okundu", label: "Okundu" },
  { value: "cevaplandi", label: "Cevaplandı" },
  { value: "kapatildi", label: "Kapatıldı" },
];

const statusColors: Record<string, string> = {
  yeni: "bg-blue-100 text-blue-700",
  okundu: "bg-yellow-100 text-yellow-700",
  cevaplandi: "bg-green-100 text-green-700",
  kapatildi: "bg-gray-100 text-gray-600",
};

const statusLabels: Record<string, string> = {
  yeni: "Yeni",
  okundu: "Okundu",
  cevaplandi: "Cevaplandı",
  kapatildi: "Kapatıldı",
};

export default function TaleplerPage() {
  const { data, loading, update, remove } = useFirestore("purchaseRequests");
  const [filter, setFilter] = useState<Status | "all">("all");
  const [detail, setDetail] = useState<Record<string, unknown> | null>(null);

  const filtered =
    filter === "all" ? data : data.filter((d) => d.status === filter);

  const columns = [
    { key: "name", label: "Ad Soyad" },
    { key: "email", label: "E-posta" },
    { key: "restaurantName", label: "Restoran" },
    {
      key: "status",
      label: "Durum",
      render: (val: unknown) => {
        const s = val as string;
        return (
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[s] || ""}`}
          >
            {statusLabels[s] || s}
          </span>
        );
      },
    },
    {
      key: "createdAt",
      label: "Tarih",
      render: (val: unknown) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const v = val as any;
        const d = v?.toDate?.() || new Date(v);
        return (
          <span className="text-xs text-gray-500">
            {d.toLocaleDateString("tr-TR")}
          </span>
        );
      },
    },
  ];

  const handleStatusChange = async (id: string, newStatus: Status) => {
    await update(id, { status: newStatus });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-2xl font-bold text-gray-900">
          Satın Alma Talepleri
        </h1>

        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as Status | "all")}
            className="rounded-lg border border-gray-300 text-sm px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            {statusOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={filtered}
        loading={loading}
        actions={(row) => (
          <div className="flex items-center gap-1">
            <button
              onClick={() => setDetail(row)}
              className="p-1.5 text-gray-400 hover:text-primary rounded transition-colors"
              title="Detay"
            >
              <Eye className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                if (confirm("Bu talebi silmek istediğinize emin misiniz?")) {
                  remove(row.id as string);
                }
              }}
              className="p-1.5 text-gray-400 hover:text-red-500 rounded transition-colors"
              title="Sil"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        )}
      />

      {/* Detail Modal */}
      {detail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <h2 className="text-lg font-bold text-gray-900">Talep Detayı</h2>

            <div className="grid grid-cols-1 gap-3 text-sm">
              <div>
                <span className="font-medium text-gray-700">Ad Soyad:</span>{" "}
                {detail.name as string}
              </div>
              <div>
                <span className="font-medium text-gray-700">E-posta:</span>{" "}
                {detail.email as string}
              </div>
              <div>
                <span className="font-medium text-gray-700">Telefon:</span>{" "}
                {(detail.phone as string) || "-"}
              </div>
              <div>
                <span className="font-medium text-gray-700">Restoran:</span>{" "}
                {(detail.restaurantName as string) || "-"}
              </div>
              <div>
                <span className="font-medium text-gray-700">Mesaj:</span>
                <p className="mt-1 text-gray-600 whitespace-pre-wrap">
                  {(detail.message as string) || "-"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Durum:</span>
                <select
                  value={detail.status as string}
                  onChange={(e) => {
                    const newStatus = e.target.value as Status;
                    handleStatusChange(detail.id as string, newStatus);
                    setDetail({ ...detail, status: newStatus });
                  }}
                  className="rounded-lg border border-gray-300 text-sm px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {statusOptions
                    .filter((o) => o.value !== "all")
                    .map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setDetail(null)}
                className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
