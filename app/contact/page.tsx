"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { useLanguage } from "@/lib/i18n";
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUpRight } from "lucide-react";

const content = {
  ru: {
    title: "Давайте создадим что-то вместе",
    subtitle: "Контакты",
    description: "Открыта для сотрудничества, заказов и новых проектов. Буду рада обсудить вашу идею.",
    email: "Электронная почта",
    phone: "Телефон",
    address: "Мастерская",
    social: "Социальные сети",
    followMe: "Следите за творчеством",
    addressValue: "г. Алматы, ул. Примерная, 123",
    country: "Казахстан",
    cta: "Написать письмо",
  },
  en: {
    title: "Let's create something together",
    subtitle: "Contact",
    description: "Open for collaboration, commissions, and new projects. I'd love to discuss your idea.",
    email: "Email",
    phone: "Phone",
    address: "Studio",
    social: "Social Media",
    followMe: "Follow my work",
    addressValue: "123 Example Street, Almaty",
    country: "Kazakhstan",
    cta: "Send an email",
  },
  kz: {
    title: "Бірге бірдеңе жасайық",
    subtitle: "Байланыс",
    description: "Ынтымақтастыққа, тапсырыстарға және жаңа жобаларға ашықпын. Сіздің идеяңызды талқылауға қуаныштымын.",
    email: "Электрондық пошта",
    phone: "Телефон",
    address: "Шеберхана",
    social: "Әлеуметтік желілер",
    followMe: "Шығармашылықты бақылаңыз",
    addressValue: "Алматы қ., Мысал көшесі, 123",
    country: "Қазақстан",
    cta: "Хат жазу",
  },
};

const contactInfo = {
  email: "artist@example.com",
  phone: "+7 (777) 123-45-67",
  instagram: "https://instagram.com/example",
  instagramHandle: "@kulzhakhan_art",
  facebook: "https://facebook.com/example",
  facebookName: "Kulzhakhan Ongarova",
  tiktok: "https://tiktok.com/@example",
  tiktokHandle: "@kulzhakhan_art",
};

// TikTok icon
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          {/* Left - Image */}
          <div className="relative h-[50vh] min-h-[350px] sm:h-[55vh] lg:h-auto lg:min-h-[600px]">
            <Image
              src="/images/artist-portrait-2.jpg"
              alt="Кульжахан Онгарова"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-stone-50" />
            
            {/* Mobile Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:hidden">
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-stone-300 sm:text-xs">
                {t.subtitle}
              </p>
              <h1 className="text-xl font-light text-white sm:text-2xl md:text-3xl">
                {t.title}
              </h1>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center px-4 py-8 sm:px-8 sm:py-12 lg:py-20 lg:pl-16 lg:pr-12">
            {/* Desktop Title */}
            <div className="mb-10 hidden lg:block">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-400">
                {t.subtitle}
              </p>
              <h1 className="text-4xl font-light tracking-tight text-stone-900 xl:text-5xl">
                {t.title}
              </h1>
              <p className="mt-6 max-w-md text-lg text-stone-500">
                {t.description}
              </p>
            </div>

            {/* Mobile Description */}
            <p className="mb-6 text-sm text-stone-500 sm:mb-8 sm:text-base lg:hidden">
              {t.description}
            </p>

            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              {/* Email - Primary CTA */}
              <a 
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center justify-between rounded-xl bg-stone-900 p-4 text-white transition-all hover:bg-stone-800 sm:rounded-2xl sm:p-5"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 sm:h-11 sm:w-11">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-stone-400 sm:text-sm">{t.email}</p>
                    <p className="truncate text-sm font-medium sm:text-base">{contactInfo.email}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              {/* Phone */}
              <a 
                href={`tel:${contactInfo.phone.replace(/[\s()-]/g, '')}`}
                className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md sm:gap-4 sm:rounded-2xl sm:p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors group-hover:bg-stone-900 group-hover:text-white sm:h-11 sm:w-11">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 sm:text-sm">{t.phone}</p>
                  <p className="text-sm font-medium text-stone-900 sm:text-base">{contactInfo.phone}</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm sm:gap-4 sm:rounded-2xl sm:p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 sm:h-11 sm:w-11">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 sm:text-sm">{t.address}</p>
                  <p className="text-sm font-medium text-stone-900 sm:text-base">{t.addressValue}</p>
                  <p className="text-xs text-stone-500 sm:text-sm">{t.country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16 md:py-20">
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-400 sm:text-sm">
              {t.followMe}
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-3 sm:gap-4">
            {/* Instagram */}
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 overflow-hidden rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-4 text-white transition-transform hover:scale-[1.02] sm:flex-col sm:items-start sm:rounded-2xl sm:p-6"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
              <Instagram className="h-6 w-6 sm:mb-6 sm:h-8 sm:w-8" />
              <div>
                <p className="font-medium sm:text-lg">Instagram</p>
                <p className="text-xs text-white/70 sm:text-sm">{contactInfo.instagramHandle}</p>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 sm:absolute sm:right-4 sm:top-4 sm:h-5 sm:w-5 sm:opacity-0 sm:transition-all sm:group-hover:opacity-100" />
            </a>

            {/* TikTok */}
            <a
              href={contactInfo.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 overflow-hidden rounded-xl bg-stone-900 p-4 text-white transition-transform hover:scale-[1.02] sm:flex-col sm:items-start sm:rounded-2xl sm:p-6"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan-500/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-pink-500/20 blur-2xl" />
              <TikTokIcon className="h-6 w-6 sm:mb-6 sm:h-8 sm:w-8" />
              <div>
                <p className="font-medium sm:text-lg">TikTok</p>
                <p className="text-xs text-white/70 sm:text-sm">{contactInfo.tiktokHandle}</p>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 sm:absolute sm:right-4 sm:top-4 sm:h-5 sm:w-5 sm:opacity-0 sm:transition-all sm:group-hover:opacity-100" />
            </a>

            {/* Facebook */}
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 overflow-hidden rounded-xl bg-blue-600 p-4 text-white transition-transform hover:scale-[1.02] sm:flex-col sm:items-start sm:rounded-2xl sm:p-6"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
              <Facebook className="h-6 w-6 sm:mb-6 sm:h-8 sm:w-8" />
              <div>
                <p className="font-medium sm:text-lg">Facebook</p>
                <p className="text-xs text-white/70 sm:text-sm">{contactInfo.facebookName}</p>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 sm:absolute sm:right-4 sm:top-4 sm:h-5 sm:w-5 sm:opacity-0 sm:transition-all sm:group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Image Strip */}
      <section className="relative h-48 sm:h-64 md:h-80">
        <Image
          src="/images/tapestry-detail.jpg"
          alt="Детали гобелена"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/30" />
      </section>
    </div>
  );
}
