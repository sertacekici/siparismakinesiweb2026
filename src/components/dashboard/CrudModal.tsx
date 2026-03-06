"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "number" | "url" | "toggle";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
}

interface CrudModalProps {
  title: string;
  fields: Field[];
  initialData?: Record<string, unknown>;
  onSubmit: (data: Record<string, unknown>) => void;
  onClose: () => void;
  loading?: boolean;
}

export default function CrudModal({
  title,
  fields,
  initialData,
  onSubmit,
  onClose,
  loading,
}: CrudModalProps) {
  const [values, setValues] = useState<Record<string, unknown>>({});

  useEffect(() => {
    if (initialData) {
      setValues({ ...initialData });
    } else {
      const defaults: Record<string, unknown> = {};
      fields.forEach((f) => {
        defaults[f.name] = f.type === "toggle" ? false : "";
      });
      setValues(defaults);
    }
  }, [initialData, fields]);

  const handleChange = (name: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Kapat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit}>
          <div className="px-6 py-4 space-y-4">
            {fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                    placeholder={field.placeholder}
                    required={field.required}
                    value={(values[field.name] as string) || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                ) : field.type === "select" ? (
                  <select
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    required={field.required}
                    value={(values[field.name] as string) || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  >
                    <option value="">Seçiniz</option>
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : field.type === "toggle" ? (
                  <button
                    type="button"
                    onClick={() => handleChange(field.name, !values[field.name])}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      values[field.name] ? "bg-primary" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        values[field.name] ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                ) : (
                  <input
                    type={field.type}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    placeholder={field.placeholder}
                    required={field.required}
                    value={(values[field.name] as string) || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors disabled:opacity-50"
            >
              {loading ? "Kaydediliyor..." : "Kaydet"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
