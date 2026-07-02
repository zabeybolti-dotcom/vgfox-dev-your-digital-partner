import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as FileText, c as ArrowRight, i as Mail, l as ArrowDown, n as Send, o as EllipsisVertical, r as Menu, s as ChevronRight, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-PyXCggXB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TELEGRAM_URL = "https://t.me/vgfox";
var MAX_PROFILE_URL = "https://max.ru/+79066001705";
var EMAIL = "info@vgfox.ru";
var EMAIL_URL = `mailto:${EMAIL}`;
var PROJECTS_DATA = [
	{
		id: 1,
		title: "OmniAI — кроссплатформенная ИИ-экосистема для бизнеса",
		subtitle: "Enterprise / AI",
		result: "Разработка закрытой Enterprise-платформы (Web / iOS / Android) для автоматизации аналитики и внутренних процессов компании на базе LLM-моделей.",
		image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=2200&q=85"
	},
	{
		id: 2,
		title: "ПРИБОР-Т1 — хроматический тюнер",
		subtitle: "Android · Музыка",
		result: "Высокоточный музыкальный настройщик для Android с живой неоновой аудио-волной и эталонной точностью.",
		image: "/pribor.jpg"
	},
	{
		id: 3,
		title: "MedBot — AI-ассистент клиники",
		subtitle: "Telegram-бот · Автоматизация",
		result: "Экономия 40 часов работы администратора / неделю",
		image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=2200&q=85"
	},
	{
		id: 4,
		title: "Редизайн и цифровая айдентика бренда",
		subtitle: "Брендинг · Айдентика",
		result: "Разработка премиального визуального стиля, шрифтовой системы и гайдлайнов для технологичных ИИ-продуктов.",
		image: "/2.jpg"
	}
];
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-black text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Philosophy, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		]
	});
}
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const links = [
		{
			href: "#services",
			label: "Услуги"
		},
		{
			href: "#portfolio",
			label: "Портфолио"
		},
		{
			href: "#philosophy",
			label: "Подход"
		},
		{
			href: "#contact",
			label: "Контакты"
		}
	];
	const go = (href) => {
		setOpen(false);
		setTimeout(() => {
			document.querySelector(href)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 60);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 inset-x-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/[0.06]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1200px] mx-auto h-11 sm:h-12 px-4 sm:px-6 flex items-center justify-between text-[13px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "apple-link tracking-widest uppercase text-[12px] font-normal",
					children: "vgfox.ru"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => window.scrollTo({
							top: 0,
							behavior: "smooth"
						}),
						className: "apple-link text-[12px] text-white/80 hover:text-white transition-colors duration-300",
						children: "Главная"
					}), links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go(l.href),
						className: "apple-link text-[12px] text-white/80",
						children: l.label
					}, l.href))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block w-16" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden apple-link -mr-2 p-2",
					onClick: () => setOpen((v) => !v),
					"aria-label": "Меню",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-4 h-4" })
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .2 },
		className: "fixed inset-0 z-40 md:hidden bg-black pt-11",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-6 py-6 flex flex-col divide-y divide-white/[0.06]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				initial: {
					opacity: 0,
					y: 6
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .05 },
				onClick: () => {
					setOpen(false);
					setTimeout(() => window.scrollTo({
						top: 0,
						behavior: "smooth"
					}), 60);
				},
				className: "text-left py-5 text-[22px] font-medium tracking-tight",
				children: "Главная"
			}), links.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				initial: {
					opacity: 0,
					y: 6
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .05 + (i + 1) * .04 },
				onClick: () => go(l.href),
				className: "text-left py-5 text-[22px] font-medium tracking-tight",
				children: l.label
			}, l.href))]
		})
	}) })] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-[100dvh] flex items-center justify-center text-center bg-black overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/11.jpg",
				alt: "AI Waves",
				className: "absolute inset-0 w-full h-full object-cover object-center z-0 opacity-80"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .8,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "relative z-20 px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono uppercase tracking-[0.24em] text-[11px] sm:text-[13px] text-apple-gray",
						children: "VGFOX DEV"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "h-display mt-3 sm:mt-4 text-[32px] sm:text-[56px] lg:text-[72px] text-white",
						children: [
							"Цифровые решения",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							" для бизнеса."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 sm:mt-5 mx-auto max-w-[640px] text-[16px] sm:text-[20px] lg:text-[22px] leading-snug tracking-tight text-apple-gray",
						children: "Разрабатываю сайты под ключ, мобильные приложения и Telegram-ботов, которые приносят прибыль."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-[15px] sm:text-[17px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppleLink, {
							href: TELEGRAM_URL,
							external: true,
							children: "Обсудить проект в Telegram"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }),
							className: "apple-link inline-flex items-center gap-1.5 text-white",
							children: ["Мои услуги ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
								className: "w-4 h-4",
								strokeWidth: 2
							})]
						})]
					})
				]
			})
		]
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "bg-black",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6 py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-4xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center",
				children: "Один эксперт. Четыре направления."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-6",
				children: [
					{
						title: "Telegram-боты",
						desc: "Автоматизация сложных бизнес-процессов, умные воронки продаж и поддержка клиентов 24/7."
					},
					{
						title: "Android-приложения",
						desc: "Проектирование интерфейсов, разработка логики и публикация в сторы под ключ."
					},
					{
						title: "Сайты и e-commerce",
						desc: "Быстрые, технологичные интернет-магазины и лендинги, готовые к запуску рекламы."
					},
					{
						title: "Дизайн чего угодно",
						desc: "Графика, фирменный стиль, логотипы и глубокий UX/UI для компаний любого масштаба."
					}
				].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .6,
						delay: i * .1,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "bg-neutral-900/50 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/[0.05] hover:border-white/20 transition-all duration-300",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-semibold mb-3 text-white",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[#86868b] text-base leading-relaxed",
						children: item.desc
					})]
				}, item.title))
			})]
		})
	});
}
function Portfolio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "portfolio",
		className: "bg-black py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-4xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center",
				children: "Избранные концепты."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-8",
				children: PROJECTS_DATA.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .6,
						delay: i * .1,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: p.id === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "block group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.title,
								loading: "lazy",
								className: "w-full h-[240px] md:h-[280px] object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block bg-white/10 backdrop-blur-md text-white rounded-full px-3 py-1 text-xs",
								children: p.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl md:text-2xl font-bold text-white mt-3 mb-2",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-neutral-300",
								children: p.result
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.rustore.ru/catalog/app/com.wavestudio.pribort1",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-[#0066cc] hover:text-[#0077ed] text-sm font-medium inline-flex items-center gap-1 mt-2 transition-colors",
								children: "Смотреть в RuStore >"
							})
						] })]
					}) : p.id === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "block group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl mb-4 w-full h-[240px] md:h-[280px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full h-full bg-[#182533] font-sans flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full h-12 bg-[#24303f] flex items-center justify-between px-3 border-b border-black/10 shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xs",
											children: "M"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold text-white leading-tight",
											children: "MedBot 🤖"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-[#7da3c5] leading-tight",
											children: "бот"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "w-4 h-4 text-neutral-400" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 p-3 flex flex-col justify-end gap-2 overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-[#2b5278] text-white rounded-2xl rounded-tr-none p-3 text-[11px] max-w-[80%] self-end relative shadow-sm",
										children: ["Привет! Помоги расшифровать общий анализ крови. Гемоглобин 110, это нормально?", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[9px] text-[#7da3c5] absolute bottom-1 right-2 flex items-center gap-0.5",
											children: ["14:20", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-3 h-3",
												viewBox: "0 0 16 11",
												fill: "none",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													d: "M11.071 10.142l4.605-4.605-1.41-1.41-3.195 3.195-3.195-3.195-1.41 1.41 4.605 4.605z",
													fill: "#7da3c5"
												})
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-[#202b36] text-white border border-white/5 rounded-2xl rounded-tl-none p-3 text-[11px] max-w-[85%] self-start relative shadow-sm",
										children: ["Гемоглобин 110 г/л ниже нормы для взрослых. Это может указывать на легкую анемию. Рекомендую проконсультироваться с терапевтом для подбора витаминов или железа.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[9px] text-neutral-500 absolute bottom-1 right-2",
											children: "14:21"
										})]
									})]
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block bg-white/10 backdrop-blur-md text-white rounded-full px-3 py-1 text-xs",
								children: p.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl md:text-2xl font-bold text-white mt-3 mb-2",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-neutral-300",
								children: p.result
							})
						] })]
					}) : p.id === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "block group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-2xl mb-4 w-full h-[240px] md:h-[280px] bg-[#12131a] relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0",
								style: {
									backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
									backgroundSize: "20px 20px"
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative w-48 h-36",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-2 left-0 right-0 h-1.5 bg-white/5 rounded-full" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-7 left-0 right-0 h-1.5 bg-white/5 rounded-full" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-7 left-0 w-3/5 h-1.5 bg-gradient-to-r from-purple-500/40 to-transparent rounded-full" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-12 left-0 right-0 h-0.5 bg-white/[0.03] rounded-full" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-16 left-0 right-2/3 h-1 bg-white/5 rounded-full" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-20 left-0 right-1/4 h-1 bg-white/5 rounded-full" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-24 left-0 right-1/2 h-1 bg-gradient-to-r from-blue-500/30 to-transparent rounded-full" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-28 left-1/3 right-0 h-1 bg-white/5 rounded-full" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[56px] left-[60%] w-14 h-14 rounded-full bg-purple-600/20 blur-xl" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[52px] left-[58%] w-12 h-12 rounded-full bg-blue-500/20 blur-xl" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-14 left-[62%] w-8 h-8 rounded-full border border-white/[0.06] backdrop-blur-sm flex items-center justify-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 blur-[1px]" })
										})
									]
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block bg-white/10 backdrop-blur-md text-white rounded-full px-3 py-1 text-xs",
								children: p.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl md:text-2xl font-bold text-white mt-3 mb-2",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-neutral-300",
								children: p.result
							})
						] })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: p.link ?? "#contact",
						className: "block group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.title,
								loading: "lazy",
								className: "w-full h-[240px] md:h-[280px] object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block bg-white/10 backdrop-blur-md text-white rounded-full px-3 py-1 text-xs",
								children: p.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl md:text-2xl font-bold text-white mt-3 mb-2",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-neutral-300",
								children: p.result
							})
						] })]
					})
				}, p.id))
			})]
		})
	});
}
function Philosophy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "philosophy",
		className: "bg-black py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-4xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center",
				children: "Один эксперт вместо целой студии."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .6,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "md:col-span-2 bg-[#161617] rounded-3xl border border-white/[0.05] p-8 flex flex-col md:flex-row items-center gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold text-white mb-2",
								children: "Прямая связь"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[#86868b] text-sm leading-relaxed",
								children: "Коммуникация напрямую без менеджеров и испорченного телефона."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 shrink-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-[10px] font-bold text-white",
									children: "Э"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-16 h-px bg-gradient-to-r from-purple-500/60 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white",
									children: "К"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .6,
							delay: .1,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "bg-[#161617] rounded-3xl border border-white/[0.05] p-8 flex flex-col items-center justify-center text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-6xl md:text-7xl font-extrabold text-white tracking-tighter mb-4",
							children: "−40%"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-neutral-400",
							children: "Экономия бюджета. Никаких переплат за аренду офиса, налоги и раздутый штат студии."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .6,
							delay: .2,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "bg-[#161617] rounded-3xl border border-white/[0.05] p-8 flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							className: "w-full h-20 mb-4",
							viewBox: "0 0 200 60",
							fill: "none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
								points: "0,50 30,45 60,35 90,40 120,25 150,15 200,8",
								stroke: "url(#speedGrad)",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								fill: "none"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "speedGrad",
								x1: "0",
								y1: "0",
								x2: "1",
								y2: "0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#6366f1",
									stopOpacity: "0.3"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#6366f1",
									stopOpacity: "1"
								})]
							}) })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-neutral-400",
							children: "Высокая скорость. Быстрый запуск благодаря отсутствию цепочки согласований."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .6,
							delay: .3,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "md:col-span-2 bg-[#161617] rounded-3xl border border-white/[0.05] p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col md:flex-row gap-8 mb-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4",
										children: "Студия"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-col gap-3",
										children: [
											"Дизайнер задерживает макеты",
											"Кодер ждёт ТЗ",
											"Менеджер переводит стрелки"
										].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-sm text-neutral-500",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-4 h-4 text-red-400/60 shrink-0",
												viewBox: "0 0 24 24",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6L6 18M6 6l12 12" })
											}), item]
										}, item))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px bg-white/[0.06] hidden md:block" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4",
										children: "Эксперт"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm text-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											className: "w-4 h-4 text-green-400 shrink-0",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 6L9 17l-5-5" })
										}), "Один человек отвечает за всё"]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[#86868b] text-sm",
							children: "Единая ответственность. Один человек отвечает за результат от идеи до релиза."
						})]
					})
				]
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "bg-black py-28 max-w-4xl mx-auto px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-4xl md:text-5xl font-bold tracking-tight text-white mb-4",
				children: "Связаться со мной."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[#86868b] text-lg max-w-xl mx-auto mb-12",
				children: "Обсудите ваш проект напрямую с разработчиком — без посредников и долгих согласований."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col sm:flex-row items-center justify-center gap-4",
				children: [
					{
						label: "Написать в Telegram",
						href: TELEGRAM_URL,
						external: true,
						icon: Send
					},
					{
						label: "Открыть резюме на МАКС",
						href: MAX_PROFILE_URL,
						external: true,
						icon: FileText
					},
					{
						label: `Отправить Email (${EMAIL})`,
						href: EMAIL_URL,
						external: false,
						icon: Mail
					}
				].map((b) => {
					const Icon = b.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: b.href,
						target: b.external ? "_blank" : void 0,
						rel: b.external ? "noreferrer" : void 0,
						className: "inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-full px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.label }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4 text-neutral-500 transition-transform duration-300 group-hover:translate-x-0.5" })
						]
					}, b.label);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-white/[0.05] mt-20 pt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-neutral-500",
					children: "© 2026 Вадим Георгиевич Лисицин | vgfox.ru. Все права защищены."
				})
			})
		]
	});
}
function AppleLink({ href, children, external }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: external ? "_blank" : void 0,
		rel: external ? "noreferrer" : void 0,
		className: "apple-link inline-flex items-center gap-1.5 text-white",
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
			className: "w-4 h-4",
			strokeWidth: 2
		})]
	});
}
//#endregion
export { LandingPage as component };
