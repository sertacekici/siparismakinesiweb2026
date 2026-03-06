"use client";

import { useFirestore } from "@/hooks/useFirestore";
import StatsCard from "@/components/dashboard/StatsCard";
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#FF6B35", "#1B2A4A", "#10b981", "#f59e0b", "#8b5cf6"];

export default function PerformansPage() {
  const { data: requests, loading: loadingReq } =
    useFirestore("purchaseRequests");
  const { data: products } = useFirestore("products");
  const { data: partners } = useFirestore("partners");
  const { data: contacts } = useFirestore("contacts");

  // Aylık talep dağılımı
  const monthlyData = (() => {
    const months: Record<string, number> = {};
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = d.toLocaleDateString("tr-TR", {
        month: "short",
        year: "2-digit",
      });
      months[key] = 0;
    }
    requests.forEach((r) => {
      const ca = r.createdAt as { toDate?: () => Date } | undefined;
      const created = ca?.toDate?.() || new Date(r.createdAt as string);
      const key = created.toLocaleDateString("tr-TR", {
        month: "short",
        year: "2-digit",
      });
      if (key in months) months[key]++;
    });
    return Object.entries(months).map(([name, value]) => ({ name, talepler: value }));
  })();

  // Durum dağılımı (pie)
  const statusDist = (() => {
    const counts: Record<string, number> = {
      Yeni: 0,
      Okundu: 0,
      Cevaplandı: 0,
      Kapatıldı: 0,
    };
    const statusMap: Record<string, string> = {
      yeni: "Yeni",
      okundu: "Okundu",
      cevaplandi: "Cevaplandı",
      kapatildi: "Kapatıldı",
    };
    requests.forEach((r) => {
      const label = statusMap[r.status as string] || "Yeni";
      counts[label]++;
    });
    return Object.entries(counts)
      .filter(([, v]) => v > 0)
      .map(([name, value]) => ({ name, value }));
  })();

  // Dönüşüm oranı
  const totalReq = requests.length;
  const answeredReq = requests.filter(
    (r) => r.status === "cevaplandi" || r.status === "kapatildi"
  ).length;
  const conversionRate = totalReq > 0 ? Math.round((answeredReq / totalReq) * 100) : 0;

  if (loadingReq) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Performans</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Toplam Talep"
          value={totalReq}
          icon={<BarChart3 className="h-5 w-5" />}
        />
        <StatsCard
          title="Dönüşüm Oranı"
          value={`%${conversionRate}`}
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <StatsCard
          title="Toplam İçerik"
          value={products.length + partners.length}
          icon={<Eye className="h-5 w-5" />}
        />
        <StatsCard
          title="Kişi Sayısı"
          value={contacts.length}
          icon={<Users className="h-5 w-5" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly bar chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            Aylık Talep Trendi
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="talepler" fill="#FF6B35" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Status pie chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            Durum Dağılımı
          </h2>
          {statusDist.length === 0 ? (
            <p className="text-sm text-gray-400 text-center mt-10">
              Henüz veri yok.
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={statusDist}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={90}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
                  }
                >
                  {statusDist.map((_, i) => (
                    <Cell
                      key={`cell-${i}`}
                      fill={COLORS[i % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
