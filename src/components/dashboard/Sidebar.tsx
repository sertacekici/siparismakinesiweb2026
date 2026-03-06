"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Handshake,
  Phone,
  BarChart3,
  Settings,
  LogOut,
  UtensilsCrossed,
  X,
  Images,
} from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const menuItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Genel Bakış" },
  { href: "/dashboard/slider", icon: Images, label: "Slider" },
  { href: "/dashboard/talepler", icon: ShoppingCart, label: "Talepler" },
  { href: "/dashboard/urunler", icon: Package, label: "Ürünler" },
  { href: "/dashboard/ortaklar", icon: Handshake, label: "Çözüm Ortakları" },
  { href: "/dashboard/iletisim-yonetimi", icon: Phone, label: "İletişim" },
  { href: "/dashboard/ayarlar", icon: Settings, label: "Site Ayarları" },
  { href: "/dashboard/performans", icon: BarChart3, label: "Performans" },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/dashboard/login";
  };

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-secondary text-white z-50 transform transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-white/10">
          <Link href="/dashboard" className="flex items-center gap-2">
            <UtensilsCrossed className="h-6 w-6 text-primary" />
            <span className="font-bold text-sm">
              Sipariş <span className="text-primary">Makinesi</span>
            </span>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden text-white/70 hover:text-white"
            aria-label="Menüyü kapat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-colors w-full"
          >
            <LogOut className="h-5 w-5" />
            Çıkış Yap
          </button>
        </div>
      </aside>
    </>
  );
}
