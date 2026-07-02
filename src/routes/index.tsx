import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ArrowDown } from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=1200&q=85",
      },
    ],
  }),
});

// ============================================================================
//  CONTACTS
// ============================================================================
const TELEGRAM_URL = "https://t.me/vgfox";
const MAX_PROFILE_URL = "https://max.ru/+79066001705"; // ← точная ссылка на профиль MAX
const EMAIL = "info@vgfox.ru";
const EMAIL_URL = `mailto:${EMAIL}`;

// ============================================================================
//  PROJECTS_DATA — редактируется здесь, рендерится через .map()
// ============================================================================
const PROJECTS_DATA: {
  id: number;
  title: string;
  subtitle: string;
  result: string;
  image: string;
  link?: string;
}[] = [
  {
    id: 1,
    title: "LUXE — интернет-магазин одежды",
    subtitle: "E-commerce · Next-gen retail",
    result: "Конверсия в заказ +32%",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=2200&q=85",
  },
  {
    id: 2,
    title: "FinTap — Android-приложение банка",
    subtitle: "Финтех · Мобильная разработка",
    result: "Средняя оценка 4.8★ в Google Play",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=2200&q=85",
  },
  {
    id: 3,
    title: "MedBot — AI-ассистент клиники",
    subtitle: "Telegram-бот · Автоматизация",
    result: "Экономия 40 часов работы администратора / неделю",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=2200&q=85",
  },
  {
    id: 4,
    title: "NORDEN — редизайн фирменного стиля",
    subtitle: "Брендинг · Айдентика",
    result: "Премиум-позиционирование и рост узнаваемости",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=2200&q=85",
  },
];

// ============================================================================

function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
}

/* -------------------------------- NAV ----------------------------------- */
function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#services", label: "Услуги" },
    { href: "#portfolio", label: "Портфолио" },
    { href: "#philosophy", label: "Подход" },
    { href: "#contact", label: "Контакты" },
  ];

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document
        .querySelector(href)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto h-11 sm:h-12 px-4 sm:px-6 flex items-center justify-between text-[13px]">
          <a
            href="#top"
            className="apple-link tracking-widest uppercase text-[12px] font-normal"
          >
            vgfox.ru
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="apple-link text-[12px] text-white/80"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block w-16" />

          <button
            className="md:hidden apple-link -mr-2 p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-black pt-11"
          >
            <div className="px-6 py-6 flex flex-col divide-y divide-white/[0.06]">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  onClick={() => go(l.href)}
                  className="text-left py-5 text-[22px] font-medium tracking-tight"
                >
                  {l.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* -------------------------------- HERO ---------------------------------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=2400&q=90"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="px-4 sm:px-6 pt-16"
      >
        <h1 className="h-display text-2xl sm:text-4xl lg:text-5xl text-white">
          VGFOX DEV
        </h1>
        <p className="mt-3 sm:mt-4 mx-auto max-w-[640px] text-[17px] sm:text-[22px] lg:text-[26px] leading-tight font-medium tracking-tight text-white/90">
          Цифровые продукты для бизнеса,
          <br className="hidden sm:block" />
          которые приносят прибыль.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-[15px] sm:text-[17px]">
          <AppleLink href={TELEGRAM_URL} external>
            Обсудить проект в Telegram
          </AppleLink>
          <button
            onClick={() =>
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="apple-link inline-flex items-center gap-1.5 text-white"
          >
            Мои услуги <ArrowDown className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}


/* ------------------------------ SERVICES -------------------------------- */
function Services() {
  const items = [
    {
      title: "Telegram-боты.",
      desc: "Автоматизация сложных бизнес-процессов, умные воронки продаж и поддержка клиентов 24/7.",
      image:
        "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=2000&q=85",
    },
    {
      title: "Android-приложения.",
      desc: "Проектирование интерфейсов, разработка логики и публикация в сторы под ключ.",
      image:
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=2000&q=85",
    },
    {
      title: "Сайты и e-commerce.",
      desc: "Быстрые, технологичные интернет-магазины и лендинги, полностью готовые к запуску рекламы.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=2000&q=85",
    },
    {
      title: "Дизайн чего угодно.",
      desc: "Графика, фирменный стиль, логотипы и глубокий UX/UI для компаний любого масштаба.",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=2000&q=85",
    },
  ];

  return (
    <section id="services" className="relative pt-32 sm:pt-48">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-16 sm:mb-24 text-center">
        <p className="text-apple-gray text-[15px] sm:text-[17px] uppercase tracking-[0.2em]">
          Услуги
        </p>
        <h2 className="h-display mt-4 text-[40px] sm:text-[72px] lg:text-[88px]">
          Один эксперт.
          <br />
          Четыре направления.
        </h2>
      </div>

      <div className="flex flex-col">
        {items.map((it, i) => (
          <ServiceBlock key={it.title} {...it} index={i} />
        ))}
      </div>
    </section>
  );
}

function ServiceBlock({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
  index: number;
}) {
  return (
    <section className="pt-24 sm:pt-40 pb-8 sm:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center"
      >
        <h3 className="h-display text-[44px] sm:text-[80px] lg:text-[104px] text-white">
          {title}
        </h3>
        <p className="mt-5 sm:mt-6 mx-auto max-w-[720px] text-[18px] sm:text-[24px] lg:text-[28px] leading-snug text-apple-gray tracking-tight">
          {desc}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-14 sm:mt-20 mx-auto max-w-[1400px] px-4 sm:px-6"
      >
        <div className="relative">
          <img
            src={image}
            alt=""
            loading="lazy"
            className="w-full aspect-[16/10] sm:aspect-[16/8] object-cover rounded-xl sm:rounded-2xl mask-fade-edges"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-b from-transparent to-black" />
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------ PORTFOLIO ------------------------------- */
function Portfolio() {
  return (
    <section id="portfolio" className="relative pt-32 sm:pt-56">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-16 sm:mb-24 text-center">
        <p className="text-apple-gray text-[15px] sm:text-[17px] uppercase tracking-[0.2em]">
          Работы
        </p>
        <h2 className="h-display mt-4 text-[40px] sm:text-[72px] lg:text-[88px]">
          Избранные концепты.
        </h2>
      </div>

      <div className="flex flex-col gap-24 sm:gap-40">
        {PROJECTS_DATA.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof PROJECTS_DATA)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-[1400px] w-full px-4 sm:px-6"
    >
      <a
        href={project.link ?? "#contact"}
        className="block group"
      >
        <div className="relative overflow-hidden rounded-xl sm:rounded-3xl">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full aspect-[16/10] sm:aspect-[16/9] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
          />
        </div>

        <div className="mt-8 sm:mt-10 max-w-[1000px] mx-auto text-center px-2">
          <p className="text-apple-gray text-[13px] sm:text-[15px] uppercase tracking-[0.18em]">
            {String(index + 1).padStart(2, "0")} · {project.subtitle}
          </p>
          <h3 className="h-display mt-4 text-[32px] sm:text-[56px] lg:text-[72px]">
            {project.title}
          </h3>
          <p className="mt-4 text-[18px] sm:text-[22px] text-apple-gray tracking-tight">
            {project.result}
          </p>
        </div>
      </a>
    </motion.article>
  );
}

/* ------------------------------ PHILOSOPHY ------------------------------ */
function Philosophy() {
  const items = [
    {
      title: "Прямая связь.",
      desc: "Без менеджеров, координаторов и цепочек согласований. Пишете лично мне — получаете ответ и правки в тот же день.",
    },
    {
      title: "Экономия бюджета.",
      desc: "Вы платите за реальную работу, а не за офис студии, лишний штат и наценки посредников.",
    },
    {
      title: "Высокая скорость.",
      desc: "Все решения принимаю сам. Проект от идеи до релиза проходит в 2–3 раза быстрее, чем у агентств.",
    },
    {
      title: "Единая ответственность.",
      desc: "Дизайн, фронтенд, бэкенд и запуск — на одном человеке. Никто ничего никому не перекидывает.",
    },
  ];

  return (
    <section id="philosophy" className="relative pt-32 sm:pt-56 pb-24 sm:pb-40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        <p className="text-apple-gray text-[15px] sm:text-[17px] uppercase tracking-[0.2em]">
          Подход
        </p>
        <h2 className="h-display mt-4 text-[40px] sm:text-[72px] lg:text-[88px]">
          Один эксперт вместо
          <br />
          целой студии.
        </h2>
      </div>

      <div className="mt-20 sm:mt-32 max-w-[1000px] mx-auto px-4 sm:px-6 flex flex-col gap-20 sm:gap-32">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-apple-gray text-mono text-[13px] tracking-widest">
              — 0{i + 1}
            </p>
            <h3 className="h-display mt-4 text-[36px] sm:text-[64px] lg:text-[80px]">
              {it.title}
            </h3>
            <p className="mt-5 mx-auto max-w-[680px] text-[18px] sm:text-[22px] text-apple-gray tracking-tight leading-snug">
              {it.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- CONTACT -------------------------------- */
function Contact() {
  const rows = [
    { label: "Telegram", value: "@vgfox", href: TELEGRAM_URL, external: true },
    {
      label: "Мессенджер МАКС",
      value: "написать в MAX",
      href: MAX_PROFILE_URL,
      external: true,
    },
    { label: "Email", value: EMAIL, href: EMAIL_URL, external: false },
  ];

  return (
    <section
      id="contact"
      className="relative pt-32 sm:pt-56 pb-24 sm:pb-40"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        <p className="text-apple-gray text-[15px] sm:text-[17px] uppercase tracking-[0.2em]">
          Контакты
        </p>
        <h2 className="h-display mt-4 text-[40px] sm:text-[72px] lg:text-[88px]">
          Начать проект
          <br />
          на <span className="text-apple-gray">vgfox.ru</span>
        </h2>
        <p className="mt-6 mx-auto max-w-[560px] text-[18px] sm:text-[22px] text-apple-gray tracking-tight">
          Опишите задачу удобным способом. Отвечу лично, оценю сроки и бюджет.
        </p>
      </div>

      <div className="mt-16 sm:mt-24 max-w-[900px] mx-auto px-4 sm:px-6">
        <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {rows.map((r) => (
            <li key={r.label}>
              <a
                href={r.href}
                target={r.external ? "_blank" : undefined}
                rel={r.external ? "noreferrer" : undefined}
                className="group flex items-center justify-between py-7 sm:py-10"
              >
                <div className="flex flex-col text-left">
                  <span className="text-apple-gray text-[13px] sm:text-[15px] uppercase tracking-[0.18em]">
                    {r.label}
                  </span>
                  <span className="mt-2 h-display text-[26px] sm:text-[44px] lg:text-[52px] text-white transition-opacity group-hover:opacity-70">
                    {r.value}
                  </span>
                </div>
                <ArrowRight
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-transform group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------- FOOTER -------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 sm:py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center text-apple-gray text-[12px] leading-relaxed">
        © 2026 Вадим Георгиевич Лисицин | vgfox.ru. Все права защищены.
      </div>
    </footer>
  );
}

/* ------------------------------- HELPERS -------------------------------- */
function AppleLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="apple-link inline-flex items-center gap-1.5 text-white"
    >
      {children}
      <ArrowRight className="w-4 h-4" strokeWidth={2} />
    </a>
  );
}
