import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Menu,
  X,
  Bot,
  Smartphone,
  Palette,
  ShoppingBag,
  ArrowRight,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
      },
    ],
  }),
});

// ============================================================================
//  CONTACTS
// ============================================================================
const TELEGRAM_URL = "https://t.me/vgfox";
const MAX_PROFILE_URL = "https://max.ru/+79066001705"; // ← замените на точную ссылку
const EMAIL = "info@vgfox.ru";
const EMAIL_URL = `mailto:${EMAIL}`;

// ============================================================================
//  PROJECTS_DATA
// ============================================================================
type Category = "all" | "web" | "bots" | "apps" | "design";

const PROJECTS_DATA: {
  id: number;
  title: string;
  category: Exclude<Category, "all">;
  categoryLabel: string;
  task: string;
  result: string;
  image: string;
  link?: string;
}[] = [
  {
    id: 1,
    title: "LUXE",
    category: "web",
    categoryLabel: "E-commerce",
    task: "Интернет-магазин премиум-бренда одежды с каталогом, фильтрами и быстрой корзиной.",
    result: "Конверсия в заказ +32%",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80",
  },
  {
    id: 2,
    title: "FinTap",
    category: "apps",
    categoryLabel: "Android · Финтех",
    task: "Мобильное приложение банка: переводы, аналитика расходов, биометрия.",
    result: "Оценка 4.8★ в Google Play",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80",
  },
  {
    id: 3,
    title: "MedBot",
    category: "bots",
    categoryLabel: "Telegram-бот",
    task: "AI-ассистент клиники: запись, напоминания, ответы пациентам 24/7.",
    result: "40 часов работы администратора / неделю",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1600&q=80",
  },
  {
    id: 4,
    title: "NORDEN",
    category: "design",
    categoryLabel: "Брендинг",
    task: "Ребрендинг: логотип, брендбук, ключевые визуалы, UI-кит.",
    result: "Премиум-позиционирование бренда",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1600&q=80",
  },
];

const FILTERS: { id: Category; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "web", label: "Сайты" },
  { id: "bots", label: "Боты" },
  { id: "apps", label: "Приложения" },
  { id: "design", label: "Дизайн" },
];

// ============================================================================

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <WhySolo />
      <Contact />
      <Footer />
    </div>
  );
}

/* ------------------------------- HEADER --------------------------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const nav = [
    { href: "#services", label: "Услуги" },
    { href: "#portfolio", label: "Работы" },
    { href: "#why", label: "Подход" },
    { href: "#contact", label: "Контакты" },
  ];

  const scrollTo = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/70 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md hairline grid place-items-center text-mono text-sm font-semibold">
              V
            </div>
            <span className="font-mono font-medium tracking-tight text-sm">
              VGFOX<span className="text-muted-foreground">.dev</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <button
                key={n.href}
                onClick={() => scrollTo(n.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 h-9 rounded-md bg-foreground text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              Связаться
            </a>

            <button
              className="md:hidden w-9 h-9 grid place-items-center rounded-md hairline"
              onClick={() => setOpen((v) => !v)}
              aria-label="Меню"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl pt-14"
          >
            <div className="px-6 py-8 flex flex-col gap-1">
              {nav.map((n, i) => (
                <motion.button
                  key={n.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(n.href)}
                  className="text-left text-2xl font-medium py-3 border-b border-border"
                >
                  {n.label}
                </motion.button>
              ))}
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 px-4 h-12 rounded-md bg-foreground text-primary-foreground font-medium"
              >
                <Send className="w-4 h-4" /> Написать в Telegram
              </a>
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
    <section id="top" className="relative min-h-[100svh] flex items-end sm:items-center pt-24 pb-16 sm:pb-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=2400&q=85"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dense gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/75 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 h-7 rounded-full hairline text-mono text-[11px] sm:text-xs text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Доступен для новых проектов
          </div>

          <h1 className="text-[2.25rem] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gradient-silver">
            Цифровые продукты<br />
            для бизнеса,<br />
            которые приносят<br />
            <span className="italic font-normal text-foreground">прибыль.</span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Меня зовут Вадим Лисицин. Я — Fullstack-разработчик и дизайнер.
            Проектирую и запускаю сайты, мобильные приложения, Telegram-ботов и брендинг
            от идеи до релиза. Один эксперт вместо целой студии.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3">
            <motion.a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 px-6 h-12 rounded-md bg-foreground text-primary-foreground font-medium transition hover:bg-silver"
            >
              Обсудить проект в Telegram
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-md hairline text-foreground font-medium hover:bg-white/[0.04] transition"
            >
              Мои услуги
            </a>
          </div>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 sm:mt-24 grid grid-cols-3 gap-4 sm:gap-10 max-w-2xl border-t border-border pt-8"
        >
          {[
            { v: "7+", l: "лет опыта" },
            { v: "50+", l: "проектов" },
            { v: "100%", l: "лично" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl sm:text-4xl font-semibold text-mono tracking-tight">
                {s.v}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ SERVICES -------------------------------- */
function Services() {
  const items = [
    {
      icon: ShoppingBag,
      title: "Сайты и магазины",
      desc: "Быстрые лендинги и e-commerce, готовые к запуску контекстной и таргет-рекламы. Чистый код, SEO, аналитика.",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      icon: Bot,
      title: "Telegram-боты",
      desc: "Автоматизация процессов, воронки продаж и поддержка 24/7.",
    },
    {
      icon: Smartphone,
      title: "Android-приложения",
      desc: "Проектирование, разработка и публикация в сторы.",
    },
    {
      icon: Palette,
      title: "Дизайн любого уровня",
      desc: "Графика, логотипы, брендбуки, UX/UI для компаний любого масштаба.",
      className: "md:col-span-2",
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Услуги"
          title={<>Что я делаю —<br />и какую пользу это приносит бизнесу</>}
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 md:auto-rows-[200px] gap-3 sm:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-xl p-6 sm:p-8 glass glass-hover flex flex-col justify-between min-h-[200px] ${it.className ?? ""}`}
            >
              <div className="w-10 h-10 rounded-lg hairline grid place-items-center text-silver">
                <it.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {it.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PORTFOLIO ------------------------------- */
function Portfolio() {
  const [filter, setFilter] = useState<Category>("all");
  const visible =
    filter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Работы"
          title={<>Избранные концепты<br />и реальные кейсы</>}
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 h-9 rounded-full text-sm font-medium transition-all ${
                  active
                    ? "bg-foreground text-primary-foreground"
                    : "hairline text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.a
                key={p.id}
                href={p.link ?? "#contact"}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group block rounded-xl overflow-hidden glass glass-hover"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="text-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {p.categoryLabel}
                  </div>
                  <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2">
                    {p.title}
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" strokeWidth={1.5} />
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.task}
                  </p>
                  <div className="mt-5 pt-5 border-t border-border text-sm text-silver">
                    {p.result}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------- WHY SOLO ------------------------------- */
function WhySolo() {
  const items = [
    {
      n: "01",
      title: "Прямая связь",
      desc: "Общаемся напрямую, без менеджеров и цепочек согласований.",
    },
    {
      n: "02",
      title: "Экономия бюджета",
      desc: "Вы платите за работу, а не за офис студии и наценки посредников.",
    },
    {
      n: "03",
      title: "Высокая скорость",
      desc: "Решения принимаю сам — до релиза проходит в 2–3 раза меньше времени.",
    },
    {
      n: "04",
      title: "Единая ответственность",
      desc: "Дизайн, фронт, бэк и запуск — на одном человеке. Ничего не теряется.",
    },
  ];

  return (
    <section id="why" className="relative py-24 sm:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Подход"
          title={<>Почему один разработчик<br />лучше целой студии</>}
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-6 sm:p-7 rounded-xl glass glass-hover"
            >
              <div className="text-mono text-xs text-muted-foreground">
                {it.n}
              </div>
              <h3 className="mt-6 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- CONTACT -------------------------------- */
function Contact() {
  const buttons = [
    {
      href: TELEGRAM_URL,
      title: "Telegram",
      sub: "@vgfox",
      icon: Send,
      external: true,
    },
    {
      href: MAX_PROFILE_URL,
      title: "МАКС",
      sub: "Российский мессенджер",
      icon: MessageSquare,
      external: true,
    },
    {
      href: EMAIL_URL,
      title: "Email",
      sub: EMAIL,
      icon: Mail,
      external: false,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Контакты"
          title={<>Начать проект —<br />в один шаг</>}
        />
        <p className="mt-6 text-base text-muted-foreground max-w-xl">
          Опишите задачу удобным способом. Отвечу лично, оценю сроки и бюджет —
          без ботов, звонков и колл-центров.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {buttons.map((b, i) => (
            <motion.a
              key={b.title}
              href={b.href}
              target={b.external ? "_blank" : undefined}
              rel={b.external ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl p-6 sm:p-8 glass glass-hover flex flex-col justify-between min-h-[180px]"
            >
              <b.icon className="w-6 h-6 text-silver" strokeWidth={1.5} />
              <div>
                <div className="text-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {b.sub}
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-2xl font-semibold tracking-tight">
                    {b.title}
                  </span>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FOOTER -------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md hairline grid place-items-center text-mono text-sm font-semibold">
            V
          </div>
          <span className="font-mono font-medium text-sm">
            VGFOX<span className="text-muted-foreground">.dev</span>
          </span>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">
          © 2026 Вадим Георгиевич Лисицин · VGFOX DEV. Все права защищены.
        </p>
        <a
          href="https://vgfox.ru"
          className="text-xs text-mono text-muted-foreground hover:text-foreground transition inline-flex items-center gap-1"
        >
          vgfox.ru <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </footer>
  );
}

/* ------------------------------- HELPERS -------------------------------- */
function SectionHeader({
  label,
  title,
}: {
  label: string;
  title: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        — {label}
      </div>
      <h2 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-gradient-silver">
        {title}
      </h2>
    </div>
  );
}
