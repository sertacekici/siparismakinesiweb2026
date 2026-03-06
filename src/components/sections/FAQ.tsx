"use client";

import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="sss"
      className="py-20 sm:py-28 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            SSS
          </div>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight"
          >
            Sıkça Sorulan <span className="gradient-text">Sorular</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Restoran otomasyon sistemi hakkında merak ettikleriniz.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-primary/20 shadow-lg shadow-primary/5"
                  : "border-border/50 hover:border-primary/10"
              }`}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-7 py-5 text-left transition-colors"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-secondary pr-4">
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === index
                    ? "bg-primary text-white rotate-180"
                    : "bg-muted text-muted-foreground"
                }`}>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-7 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
