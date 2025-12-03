"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { useLanguage } from "@/lib/i18n";

const content = {
  ru: {
    title: "Творческое заявление",
    subtitle: "Кульжахан Онгаровой",
    paragraphs: [
      "Практика Кульжахан Онгаровой формируется на границе текстиля, живописи и пространственного мышления. Основой её художественного языка становится нить — материал, который одновременно хранит природную фактуру и обладает выразительной силой цвета. В её произведениях нить выполняет роль живописного жеста, а натуральное волокно приобретает смысл символа внутренней гармонии в эпоху преобладания искусственного.",
      "В основе работ лежат мгновенные впечатления и состояния, проходящие путь от наблюдения и памяти к эскизу и затем — к гобелену. Темы человеческой связи с природой, материнства, света, тепла и внутренней тишины становятся эмоциональным каркасом её произведений. Художница стремится к созданию пространств, в которых материальное и духовное достигают тонкого равновесия.",
      "Структура гобелена у Онгаровой строится на взаимодействии линий, форм и тактильных ощущений. Материал и идея вступают в живой диалог, формируя пластическую среду, наполненную ритмом, светом и внутренним движением. Войлочные и тканые работы раскрывают «музыку» цвета и фактуры — систему вибраций, создающих собственное пространство.",
      "В производственном процессе важную роль играет профессиональная станковая техника и тщательная работа с эскизом. Однако в ходе создания произведения материал сохраняет способность к импровизации, влияя на динамику формы. Нить здесь подобна слову, которое задаёт образу смысловое звучание.",
      "Техническая точность, ремесленная глубина и цельность композиции определяют эстетику работ Онгаровой. Её искусство соединяет ответственность изобретательства и дисциплину, опираясь на гармонию природного материала и интуитивного восприятия. Каждый гобелен становится новым пластическим существом — результатом сосредоточенной ремесленной работы и внутреннего художественного пути.",
      "В произведениях художницы отсутствуют случайные элементы: ритм цвета, движение нити и натяжение основы формируют эмоциональную структуру, отражающую состояние внутреннего пространства. Творчество Кульжахан Онгаровой можно рассматривать как непрерывный процесс трансформации, где каждый гобелен открывает новый горизонт её художественного мира.",
    ],
  },
  en: {
    title: "Artist Statement",
    subtitle: "Kulzhakhan Ongarova",
    paragraphs: [
      "The artistic practice of Kulzhakhan Ongarova emerges at the intersection of textile, painting, and spatial thinking. The core of her visual language is the thread — a material that simultaneously preserves natural texture and carries the expressive power of color. In her works, the thread functions as a painterly gesture, while natural fiber becomes a symbol of inner harmony in an era dominated by the artificial.",
      "Her works are rooted in momentary impressions and states of mind that travel a path from observation and memory to sketch and finally — to tapestry. Themes of the human connection with nature, motherhood, light, warmth, and inner stillness form the emotional framework of her art. Ongarova strives to create spaces in which the material and the spiritual achieve a delicate equilibrium.",
      "The structure of her tapestries is built on the interplay of lines, forms, and tactile sensations. Material and idea enter into a living dialogue, forming a plastic environment filled with rhythm, light, and inner movement. Her felted and woven works reveal the 'music' of color and texture — a system of vibrations that generates its own space.",
      "In the production process, professional loom techniques and meticulous work with sketches play a significant role. Yet throughout the creation of each piece, the material retains its capacity for improvisation, influencing the dynamics of form. Here, the thread becomes akin to a word that gives the image its semantic resonance.",
      "Technical precision, artisanal depth, and compositional integrity define the aesthetic of Ongarova's works. Her art unites inventive responsibility with discipline, grounded in the harmony of natural materials and intuitive perception. Each tapestry becomes a new plastic organism — the result of focused craftsmanship and an inner artistic journey.",
      "There are no accidental elements in the artist's compositions: the rhythm of color, the movement of the thread, and the tension of the warp form an emotional structure that reflects the state of the inner space. The work of Kulzhakhan Ongarova can be seen as a continuous process of transformation, where each tapestry opens a new horizon of her artistic world.",
    ],
  },
  kz: {
    title: "Шығармашылық мәлімдеме",
    subtitle: "Күлжахан Оңғарова",
    paragraphs: [
      "Мәтін қазақ тілінде қосылады...",
    ],
  },
};

export default function StatementPage() {
  const { lang } = useLanguage();
  const currentContent = content[lang];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero Section with Artist Photo */}
      <section className="relative h-[50vh] min-h-[350px] w-full overflow-hidden sm:h-[60vh] sm:min-h-[400px] md:h-[70vh] md:min-h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/artist-hero.jpg"
            alt="Кульжахан Онгарова"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/30 to-transparent" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 sm:pb-12 md:pb-16">
          <div className="mx-auto max-w-4xl">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-stone-500 sm:mb-3 sm:text-sm sm:tracking-[0.25em]">
              {currentContent.subtitle}
            </p>
            <h1 className="text-2xl font-light tracking-tight text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl">
              {currentContent.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        {/* Mobile: Single column, Desktop: Two columns */}
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text Column */}
          <article className="space-y-6 text-base leading-relaxed text-stone-600 sm:space-y-8 sm:text-lg sm:leading-8 lg:col-span-7">
            {/* First 3 paragraphs */}
            {currentContent.paragraphs.slice(0, 3).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>

          {/* Side Image - Hidden on mobile, shown on lg */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-32">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/artist-portrait.jpg"
                  alt="Кульжахан Онгарова"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-center text-xs text-stone-400">
                {lang === "ru" ? "В мастерской" : lang === "en" ? "In the studio" : "Шеберханада"}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Portrait Image */}
        <div className="my-10 sm:my-12 lg:hidden">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-xl">
            <Image
              src="/images/artist-portrait.jpg"
              alt="Кульжахан Онгарова"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-center text-xs text-stone-400">
            {lang === "ru" ? "В мастерской" : lang === "en" ? "In the studio" : "Шеберханада"}
          </p>
        </div>

        {/* Full Width Quote Section */}
        <div className="my-12 border-y border-stone-200 py-10 sm:my-16 sm:py-12 md:my-24 md:py-16">
          <blockquote className="mx-auto max-w-2xl text-center">
            <p className="text-xl font-light leading-relaxed text-stone-700 sm:text-2xl md:text-3xl">
              {lang === "ru" 
                ? "«Нить подобна слову, которое задаёт образу смысловое звучание»"
                : lang === "en"
                ? "'The thread becomes akin to a word that gives the image its semantic resonance'"
                : "«Жіп — бейнеге мағыналық үн беретін сөзге ұқсас»"
              }
            </p>
          </blockquote>
        </div>

        {/* Remaining Text with Inline Image */}
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Inline Image */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-xl lg:max-w-none lg:rounded-2xl">
              <Image
                src="/images/tapestry-detail.jpg"
                alt="Детали гобелена"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <article className="order-1 space-y-6 text-base leading-relaxed text-stone-600 sm:space-y-8 sm:text-lg sm:leading-8 lg:order-2 lg:col-span-7">
            {/* Remaining paragraphs */}
            {currentContent.paragraphs.slice(3).map((paragraph, index) => (
              <p key={index + 3}>{paragraph}</p>
            ))}
          </article>
        </div>

        {/* Decorative Element */}
        <div className="mt-16 flex items-center justify-center gap-4 sm:mt-24 md:mt-32">
          <div className="h-px w-12 bg-stone-200 sm:w-16" />
          <div className="flex gap-1">
            <div className="h-1 w-1 rounded-full bg-stone-300" />
            <div className="h-1 w-1 rounded-full bg-stone-400" />
            <div className="h-1 w-1 rounded-full bg-stone-300" />
          </div>
          <div className="h-px w-12 bg-stone-200 sm:w-16" />
        </div>
      </main>
    </div>
  );
}
