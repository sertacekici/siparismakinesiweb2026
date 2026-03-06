"use client";

import { useState, useEffect, useCallback } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  order: number;
  isActive?: boolean;
}

export default function Slider() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ref = collection(db, "slides");
    const q = query(ref, orderBy("order", "asc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const items = snapshot.docs
          .map((doc) => {
            const data = doc.data() as Omit<Slide, "id">;
            return { id: doc.id, ...data };
          })
          .filter((s) => s.isActive);
        setSlides(items);
        setLoading(false);
      },
      (error) => {
        console.error("Slider veri çekme hatası:", error);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-play
  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, slides.length]);

  if (loading) {
    return (
      <section className="relative w-full h-[500px] sm:h-[600px] bg-gray-100 animate-pulse" />
    );
  }

  if (slides.length === 0) return null;

  return (
    <section className="relative w-full h-[500px] sm:h-[600px] overflow-hidden" aria-label="Slider">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight drop-shadow-lg">
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl drop-shadow">
                {slide.subtitle}
              </p>
            )}
            <Link
              href={slide.buttonLink}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-colors shadow-lg"
            >
              {slide.buttonText || "Detaylı Bilgi Al"}
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors flex items-center justify-center"
            aria-label="Önceki slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors flex items-center justify-center"
            aria-label="Sonraki slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </>
      )}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current
                  ? "bg-primary w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
