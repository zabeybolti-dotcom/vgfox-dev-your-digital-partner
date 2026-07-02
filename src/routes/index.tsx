import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  MessageCircle,
  Menu,
  X,
  Bot,
  Smartphone,
  Palette,
  ShoppingBag,
  Zap,
  Wallet,
  User,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { property: "og:image", content: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80" },
    ],
  }),
});

// ============================================================================
//  ⚙️  CONTACT & BRAND CONSTANTS — измени только здесь, если сменятся ссылки
// ============================================================================
const TELEGRAM_URL = "https://t.me/vgfox";
const MAX_PROFILE_URL = "https://max.ru/+79066001705"; // ← вставь свою точную ссылку MAX
const EMAIL = "info@vgfox.ru";
const EMAIL_URL = `mailto:${EMAIL}`;

// ============================================================================
//  🖼️  PROJECTS_DATA — легко заменяется на реальные работы (title, image, link)
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
    title: "LUXE — интернет-магазин одежды",
    category: "web",
    categoryLabel: "Сайты / Магазины",
    task: "E-commerce платформа премиум-бренда с каталогом, фильтрами и быстрой корзиной.",
    result: "Конверсия в заказ +32% после запуска",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
  },
  {
    id: 2,
    title: "FinTap — Android-приложение банка",
    category: "apps",
    categoryLabel: "Приложения",
    task: "Финтех-приложение с переводами, аналитикой расходов и биометрией.",
    result: "Средняя оценка 4.8★ в Google Play",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
  },
  {
    id: 3,
    title: "MedBot — AI-ассистент клиники",
    category: "bots",
    categoryLabel: "Telegram-боты",
    task: "Автоматическая запись, напоминания и ответы на вопросы пациентов 24/7.",
    result: "Экономия 40 часов работы администратора в неделю",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&q=80",
  },
  {
    id: 4,
    title: "NORDEN — редизайн фирменного стиля",
    category: "design",
    categoryLabel: "Дизайн",
    task: "Полный ребрендинг: логотип, брендбук, ключевые визуалы и UI-кит.",
    result: "Рост узнаваемости бренда и премиум-позиционирование",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1200&q=80",
  },
];

const FILTERS: { id: Category; label: string }[] = [
  { id: "all", label: "Все проекты" },
  { id: "web", label: "Сайты / Магазины" },
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "#services", label: "Услуги" },
    { href: "#portfolio", label: "Портфолио" },
    { href: "#why", label: "Почему я" },
    { href: "#contact", label: "Контакты" },
  ];

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-emerald-400 grid place-items-center text-primary-foreground font-bold text-mono shadow-[var(--shadow-neon)]">
            V
          </div>
          <span className="font-mono font-semibold tracking-tight text-sm sm:text-base">
            VGFOX<span className="text-primary">.DEV</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <button
              key={n.href}
              onClick={() => scrollTo(n.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
        >
          <Send className="w-4 h-4" />
          Написать
        </a>

        <button
          className="md:hidden p-2 rounded-lg neon-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {nav.map((n) => (
                <button
                  key={n.href}
                  onClick={() => scrollTo(n.href)}
                  className="text-left text-base py-2 text-foreground hover:text-primary transition"
                >
                  {n.label}
                </button>
              ))}
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium"
              >
                <Send className="w-4 h-4" /> Обсудить проект
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* -------------------------------- HERO ---------------------------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=2000&q=80"
          alt="Абстрактный техно-фон"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full neon-border text-mono text-xs sm:text-sm text-primary mb-6 sm:mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            Fullstack Developer · Москва / РФ
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="text-mono text-primary">VGFOX DEV</span> — <br className="hidden sm:block" />
            цифровые решения<br />
            <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
              которые приносят прибыль
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Создаю сайты под ключ, мобильные приложения, дизайн интерфейсов и Telegram-ботов.
            Проектирую и программирую всё сам — от идеи до запуска.
          </p>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-[var(--shadow-neon)] hover:shadow-[0_0_60px_var(--neon-soft)] transition-all"
            >
              <Send className="w-5 h-5" />
              Обсудить проект в Telegram
              <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </motion.a>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl neon-border text-foreground font-semibold hover:bg-surface transition-all"
            >
              Мои услуги
            </a>
          </div>

          <div className="mt-14 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl">
            {[
              { v: "7+", l: "лет в разработке" },
              { v: "50+", l: "проектов запущено" },
              { v: "1", l: "эксперт вместо студии" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl sm:text-4xl font-bold text-primary text-mono">
                  {s.v}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
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
      title: "Сайты & Магазины",
      desc: "Быстрые, продающие, полностью готовые к запуску контекстной и таргет-рекламы. От лендинга до сложного e-commerce.",
      className: "md:col-span-2 md:row-span-2",
      accent: true,
    },
    {
      icon: Bot,
      title: "Telegram-боты",
      desc: "Автоматизация бизнес-процессов, воронки продаж и поддержка клиентов 24/7.",
      className: "",
    },
    {
      icon: Smartphone,
      title: "Android-приложения",
      desc: "Проектирование интерфейса, разработка логики и публикация в сторы.",
      className: "",
    },
    {
      icon: Palette,
      title: "Дизайн чего угодно",
      desc: "Графика, логотипы, брендбуки и UX/UI интерфейсы для компаний любого масштаба.",
      className: "md:col-span-2",
    },
  ];

  return (
    <section id="services" className="relative py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionLabel>Что я делаю</SectionLabel>
        <SectionTitle>
          Мои направления —<br />
          <span className="text-primary">выгоды для вашего бизнеса</span>
        </SectionTitle>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 md:auto-rows-[180px] gap-4 sm:gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl p-6 sm:p-8 neon-border glow-hover bg-surface flex flex-col justify-between ${it.className} ${
                it.accent ? "bg-gradient-to-br from-surface via-surface-elevated to-surface" : ""
              }`}
            >
              {it.accent && (
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
              )}
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 neon-border grid place-items-center text-primary mb-4">
                  <it.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {it.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {it.desc}
                </p>
              </div>
              <div className="relative mt-6 text-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                Подробнее <ArrowRight className="w-3 h-3" />
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
    <section id="portfolio" className="relative py-20 sm:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionLabel>Портфолио</SectionLabel>
        <SectionTitle>
          Концепты и <span className="text-primary">реальные кейсы</span>
        </SectionTitle>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2 sm:gap-3">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-neon)]"
                    : "neon-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-2xl neon-border bg-surface glow-hover"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/70 backdrop-blur text-mono text-xs text-primary neon-border">
                    {p.categoryLabel}
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.task}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-mono text-sm text-primary">
                      <Zap className="w-4 h-4" />
                      {p.result}
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
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
      icon: MessageCircle,
      title: "Прямая связь",
      desc: "Общаемся напрямую, без менеджеров и цепочки согласований. Ответы и правки — мгновенно.",
    },
    {
      icon: Wallet,
      title: "Экономия бюджета",
      desc: "Вы платите за работу, а не за офис студии, штат и наценки посредников.",
    },
    {
      icon: Zap,
      title: "Высокая скорость",
      desc: "Все решения принимаю сам — от идеи до релиза проходит в 2-3 раза меньше времени.",
    },
    {
      icon: User,
      title: "Единая ответственность",
      desc: "Дизайн, фронт, бэк и запуск — на одном человеке. Никто ничего не 'перекидывает'.",
    },
  ];

  return (
    <section id="why" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 -z-10" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionLabel>Почему я</SectionLabel>
        <SectionTitle>
          Один разработчик <br />
          <span className="text-primary">лучше целой студии</span>
        </SectionTitle>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-6 sm:p-7 rounded-2xl neon-border bg-surface glow-hover"
            >
              <div className="text-mono text-xs text-primary/60 mb-4">
                0{i + 1}
              </div>
              <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center text-primary mb-4">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">{it.title}</h3>
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
      title: "Написать в Telegram",
      sub: "@vgfox · ответ в течение часа",
      icon: <Send className="w-6 h-6" />,
      accent: true,
      external: true,
    },
    {
      href: MAX_PROFILE_URL,
      title: "Связаться в мессенджере МАКС",
      sub: "Российский мессенджер · безопасно",
      icon: (
        <div className="w-6 h-6 grid place-items-center font-bold text-mono">
          M
        </div>
      ),
      external: true,
    },
    {
      href: EMAIL_URL,
      title: "Написать на почту",
      sub: EMAIL,
      icon: <Mail className="w-6 h-6" />,
      external: false,
    },
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionLabel>Контакты</SectionLabel>
        <SectionTitle>
          Начать проект — <span className="text-primary">в один клик</span>
        </SectionTitle>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Расскажите задачу удобным способом. Отвечу лично, оценю сроки и бюджет — без ботов и колл-центров.
        </p>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {buttons.map((b, i) => (
            <motion.a
              key={b.title}
              href={b.href}
              target={b.external ? "_blank" : undefined}
              rel={b.external ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[200px] transition-all ${
                b.accent
                  ? "bg-gradient-to-br from-primary to-emerald-400 text-primary-foreground shadow-[var(--shadow-neon)]"
                  : "neon-border bg-surface hover:border-primary/60"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl grid place-items-center ${
                  b.accent
                    ? "bg-primary-foreground/10 text-primary-foreground"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {b.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                  {b.title}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    b.accent
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {b.sub}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-mono opacity-80 group-hover:opacity-100">
                  Открыть <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
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
    <footer className="border-t border-border py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-emerald-400 grid place-items-center text-primary-foreground font-bold text-mono">
            V
          </div>
          <span className="font-mono font-semibold text-sm">
            VGFOX<span className="text-primary">.DEV</span>
          </span>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">
          © 2026 Вадим Георгиевич Лисицин | VGFOX DEV. Все права защищены.
        </p>
        <a
          href="https://vgfox.ru"
          className="text-xs text-mono text-muted-foreground hover:text-primary transition"
        >
          vgfox.ru
        </a>
      </div>
    </footer>
  );
}

/* ------------------------------- HELPERS -------------------------------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-mono text-xs text-primary uppercase tracking-widest">
      <div className="w-8 h-px bg-primary/60" />
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
      {children}
    </h2>
  );
}
