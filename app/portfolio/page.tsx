"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { useLanguage } from "@/lib/i18n";
import { X, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

type Language = "kz" | "ru" | "en";

interface Work {
  id: string;
  image: string;
  year: number;
  dimensions: string;
  technique: Record<Language, string>;
  title: Record<Language, string>;
  description: Record<Language, string>;
}

const content = {
  ru: {
    title: "Портфолио",
    subtitle: "Избранные работы",
    heroText: "Каждый гобелен — это история, сотканная из нитей памяти, традиций и современного видения.",
    viewWork: "Открыть",
    close: "Закрыть",
    year: "Год",
    dimensions: "Размер",
    technique: "Техника",
    explore: "Исследовать коллекцию",
    workNumber: "Работа",
  },
  en: {
    title: "Portfolio",
    subtitle: "Selected Works",
    heroText: "Each tapestry is a story woven from threads of memory, tradition, and contemporary vision.",
    viewWork: "View",
    close: "Close",
    year: "Year",
    dimensions: "Size",
    technique: "Technique",
    explore: "Explore collection",
    workNumber: "Work",
  },
  kz: {
    title: "Портфолио",
    subtitle: "Таңдаулы жұмыстар",
    heroText: "Әр гобелен — ес, дәстүр және заманауи көзқарас жіптерінен тоқылған тарих.",
    viewWork: "Ашу",
    close: "Жабу",
    year: "Жыл",
    dimensions: "Өлшем",
    technique: "Техника",
    explore: "Жинақты зерттеу",
    workNumber: "Жұмыс",
  },
};

const works: Work[] = portfolioData.works as Work[];

// Card heights - simpler on mobile
const getCardStyle = (index: number) => {
  const styles = ["sm:row-span-2", "", "sm:row-span-2"];
  return styles[index % styles.length];
};

export default function PortfolioPage() {
  const { lang } = useLanguage();
  const t = content[lang];
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const openLightbox = (work: Work, index: number) => {
    setSelectedWork(work);
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedWork(null);
    document.body.style.overflow = "auto";
  };

  const navigate = (direction: "prev" | "next") => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const newIndex = direction === "prev" 
      ? (selectedIndex === 0 ? works.length - 1 : selectedIndex - 1)
      : (selectedIndex === works.length - 1 ? 0 : selectedIndex + 1);
    
    setTimeout(() => {
      setSelectedIndex(newIndex);
      setSelectedWork(works[newIndex]);
      setIsAnimating(false);
    }, 150);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedWork) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate("prev");
      if (e.key === "ArrowRight") navigate("next");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedWork, selectedIndex]);

  return (
    <div className="min-h-screen bg-stone-100">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stone-900 pt-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,100,80,0.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(80,60,40,0.3),transparent_50%)]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-stone-400 sm:text-sm">
              {t.subtitle}
            </p>
            <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-stone-300 sm:mt-8 sm:text-xl">
              {t.heroText}
            </p>
            
            <div className="mt-10 flex items-center gap-4 sm:mt-12">
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-stone-500 to-transparent" />
              <span className="text-sm text-stone-400">{works.length} {t.workNumber.toLowerCase()}{works.length > 1 ? (lang === "en" ? "s" : "") : ""}</span>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-100 to-transparent" />
      </section>

      {/* Gallery */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 sm:auto-rows-[250px] sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {works.map((work, index) => (
            <article
              key={work.id}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-stone-200 aspect-[4/5] sm:aspect-auto ${getCardStyle(index)} sm:rounded-3xl`}
              onClick={() => openLightbox(work, index)}
            >
              {/* Placeholder gradient - replace with Image when ready */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-300 via-stone-200 to-stone-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-5xl opacity-30">✦</span>
                  </div>
                </div>
              </div>
              
              {/* Uncomment when you have real images */}
              {/* <Image
                src={work.image}
                alt={work.title[lang]}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              /> */}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 lg:p-8">
                {/* Year pill */}
                <div className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-stone-900 sm:right-5 sm:top-5">
                  {work.year}
                </div>

                {/* Title & Info */}
                <div className="sm:translate-y-4 sm:transition-transform sm:duration-500 sm:group-hover:translate-y-0">
                  <h3 className="text-lg font-medium text-white sm:text-2xl lg:text-3xl">
                    {work.title[lang]}
                  </h3>
                  <p className="mt-1 text-xs text-stone-300 sm:mt-2 sm:text-base">
                    {work.technique[lang]}
                  </p>
                  
                  {/* View button - appears on hover (desktop only) */}
                  <div className="mt-3 hidden items-center gap-2 text-sm font-medium text-white opacity-0 transition-all duration-500 group-hover:opacity-100 sm:flex">
                    <span>{t.viewWork}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Hover border effect */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-white/0 transition-all duration-500 group-hover:border-white/20 sm:rounded-3xl" />
            </article>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {selectedWork && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-stone-950"
          onClick={closeLightbox}
        >
          {/* Top bar - fixed */}
          <div className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between bg-gradient-to-b from-stone-950 to-transparent p-4 sm:p-6">
            <div className="text-sm text-stone-400">
              <span className="text-white">{String(selectedIndex + 1).padStart(2, "0")}</span>
              <span className="mx-2">/</span>
              <span>{String(works.length).padStart(2, "0")}</span>
            </div>
            
            <button
              onClick={closeLightbox}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all active:scale-95 sm:h-12 sm:w-12"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main content - scrollable */}
          <div 
            className={`min-h-full px-4 pb-24 pt-20 transition-opacity duration-150 sm:px-6 sm:pt-24 lg:flex lg:items-center lg:justify-center lg:px-8 lg:py-20 ${isAnimating ? "opacity-0" : "opacity-100"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:gap-12">
              {/* Image */}
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] shrink-0 overflow-hidden rounded-xl bg-stone-800 shadow-2xl sm:max-w-sm sm:rounded-2xl lg:max-w-md lg:flex-1">
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-700 to-stone-800">
                  <span className="text-5xl opacity-30 sm:text-6xl">✦</span>
                </div>
                
                {/* Uncomment when you have real images */}
                {/* <Image
                  src={selectedWork.image}
                  alt={selectedWork.title[lang]}
                  fill
                  className="object-cover"
                  priority
                /> */}
              </div>

              {/* Info */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 sm:text-xs">
                  {selectedWork.technique[lang]}
                </p>
                <h2 className="mt-2 text-2xl font-light text-white sm:mt-3 sm:text-3xl lg:text-4xl">
                  {selectedWork.title[lang]}
                </h2>
                
                <p className="mx-auto mt-4 max-w-md text-sm text-stone-400 sm:mt-6 sm:text-base lg:mx-0">
                  {selectedWork.description[lang]}
                </p>

                {/* Details */}
                <div className="mx-auto mt-6 flex max-w-xs justify-center gap-6 border-t border-stone-800 pt-6 sm:mt-8 sm:max-w-sm sm:gap-8 sm:pt-8 lg:mx-0 lg:justify-start">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-stone-500 sm:text-xs">{t.year}</p>
                    <p className="mt-1 text-base text-white sm:text-lg">{selectedWork.year}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-stone-500 sm:text-xs">{t.dimensions}</p>
                    <p className="mt-1 text-base text-white sm:text-lg">{selectedWork.dimensions}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation - fixed */}
          <div className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-center gap-3 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent p-4 sm:gap-4 sm:p-6">
            <button
              onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-700 text-white transition-all active:scale-95 sm:h-14 sm:w-14"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate("next"); }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-700 text-white transition-all active:scale-95 sm:h-14 sm:w-14"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
