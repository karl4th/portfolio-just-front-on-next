"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLanguage, Language } from "@/lib/i18n";

const navLabels = {
  kz: {
    name: "Күлжахан Оңғарова",
    subtitle: "Текстиль суретшісі",
    portfolio: "Портфолио",
    statement: "Мәлімдеме",
    contact: "Байланыс",
  },
  ru: {
    name: "Кульжахан Онгарова",
    subtitle: "Художник по текстилю",
    portfolio: "Портфолио",
    statement: "Statement",
    contact: "Контакты",
  },
  en: {
    name: "Kulzhakhan Ongarova",
    subtitle: "Textile Artist",
    portfolio: "Portfolio",
    statement: "Statement",
    contact: "Contact",
  },
};

const languages: { code: Language; label: string }[] = [
  { code: "kz", label: "ҚАЗ" },
  { code: "ru", label: "РУС" },
  { code: "en", label: "ENG" },
];

export function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const labels = navLabels[lang];
  const currentLang = languages.find((l) => l.code === lang);

  const navItems = [
    { href: "/portfolio", label: labels.portfolio },
    { href: "/statement", label: labels.statement },
    { href: "/contact", label: labels.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-stone-50/60 backdrop-blur-md" />
      <nav className="relative mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        {/* Logo / Name */}
        <Link 
          href="/" 
          className="group flex flex-col"
        >
          <span className="text-sm font-medium tracking-wide text-stone-900 transition-colors group-hover:text-stone-600 sm:text-base">
            {labels.name}
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.2em] text-stone-400 sm:block">
            {labels.subtitle}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm transition-colors ${
                  isActive 
                    ? "text-stone-900" 
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-stone-900" />
                )}
              </Link>
            );
          })}

          {/* Language Dropdown */}
          <div className="relative ml-4">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              onBlur={() => setTimeout(() => setIsLangOpen(false), 150)}
              className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium tracking-wide text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
            >
              {currentLang?.label}
              <ChevronDown 
                className={`h-3.5 w-3.5 transition-transform ${isLangOpen ? "rotate-180" : ""}`} 
              />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 top-full mt-2 min-w-[100px] overflow-hidden rounded-xl border border-stone-200 bg-white py-1 shadow-lg">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      setLang(language.code);
                      setIsLangOpen(false);
                    }}
                    className={`flex w-full items-center px-4 py-2 text-xs font-medium tracking-wide transition-colors ${
                      lang === language.code
                        ? "bg-stone-100 text-stone-900"
                        : "text-stone-500 hover:bg-stone-50 hover:text-stone-900"
                    }`}
                  >
                    {language.label}
                    {lang === language.code && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-stone-900" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-50 p-2 text-stone-700 md:hidden"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-stone-50 md:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-light transition-colors ${
                    isActive ? "text-stone-900" : "text-stone-500"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile Language Switcher */}
            <div className="mt-8 flex items-center gap-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    setLang(language.code);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    lang === language.code
                      ? "bg-stone-900 text-white"
                      : "text-stone-500"
                  }`}
                >
                  {language.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
