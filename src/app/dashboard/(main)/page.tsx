"use client";

import { useFirestore } from "@/hooks/useFirestore";
import StatsCard from "@/components/dashboard/StatsCard";
import {
  ShoppingCart,
  Package,
  Handshake,
  Mail,
  Clock,
  CheckCircle,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardOverview() {
  const { data: requests, loading: loadingReq } =
    useFirestore("purchaseRequests");
  const { data: products, loading: loadingProd } = useFirestore("products");
  const { data: partners, loading: loadingPart } = useFirestore("partners");
  const { data: contacts, loading: loadingCont } = useFirestore("contacts");

  const loading = loadingReq || loadingProd || loadingPart || loadingCont;

  // Son 7 gün trend verisi
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const dateStr = d.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "short",
    });
    const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const dayEnd = new Date(dayStart.getTime() + 86400000);
    const count = requests.filter((r) => {
      const ca = r.createdAt as { toDate?: () => Date } | undefined;
      const created = ca?.toDate?.() || new Date(r.createdAt as string);
      return created >= dayStart && created < dayEnd;
    }).length;
    return { name: dateStr, talepler: count };
  });

  const newRequests = requests.filter((r) => r.status === "yeni").length;

  const recentRequests = [...requests]
    .sort((a, b) => {
      const caA = a.createdAt as { toDate?: () => Date } | undefined;
      const caB = b.createdAt as { toDate?: () => Date } | undefined;
      const dateA = caA?.toDate?.() || new Date(a.createdAt as string);
      const dateB = caB?.toDate?.() || new Date(b.createdAt as string);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 5);

  const statusLabels: Record<string, { label: string; color: string }> = {
    yeni: { label: "Yeni", color: "bg-blue-100 text-blue-700" },
    okundu: { label: "Okundu", color: "bg-yellow-100 text-yellow-700" },
    cevaplandi: {
      label: "Cevaplandı",
      color: "bg-green-100 text-green-700",
    },
    kapatildi: { label: "Kapatıldı", color: "bg-gray-100 text-gray-600" },
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Genel Bakış</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Toplam Talep"
          value={requests.length}
          icon={<ShoppingCart className="h-5 w-5" />}
        />
        <StatsCard
          title="Yeni Talepler"
          value={newRequests}
          icon={<Clock className="h-5 w-5" />}
          trend={newRequests > 0 ? "up" : undefined}
        />
        <StatsCard
          title="Ürünler"
          value={products.length}
          icon={<Package className="h-5 w-5" />}
        />
        <StatsCard
          title="Ortaklar"
          value={partners.length}
          icon={<Handshake className="h-5 w-5" />}
        />
      </div>

      {/* Chart + Recent */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            Son 7 Gün — Talepler
          </h2>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={last7Days}>
              <defs>
                <linearGradient id="colorTalepler" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#FF6B35" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="talepler"
                stroke="#FF6B35"
                fillOpacity={1}
                fill="url(#colorTalepler)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Requests */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            Son Talepler
          </h2>
          {recentRequests.length === 0 ? (
            <p className="text-sm text-gray-400">Henüz talep yok.</p>
          ) : (
            <ul className="space-y-3">
              {recentRequests.map((r) => {
                const st = statusLabels[r.status as string] || statusLabels.yeni;
                return (
                  <li
                    key={r.id}
                    className="flex items-start justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {r.name as string}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {(r.restaurantName as string) || (r.email as string)}
                      </p>
                    </div>
                    <span
                      className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${st.color}`}
                    >
                      {st.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      {/* Quick Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-4">
          <Mail className="h-5 w-5 text-primary" />
          <div>
            <p className="text-sm text-gray-500">İletişim Kayıtları</p>
            <p className="text-lg font-bold text-gray-900">
              {contacts.length}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-4">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Cevaplanan Talepler</p>
            <p className="text-lg font-bold text-gray-900">
              {requests.filter((r) => r.status === "cevaplandi").length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
