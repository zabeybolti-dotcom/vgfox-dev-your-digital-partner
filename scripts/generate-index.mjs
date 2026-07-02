import { readdirSync, writeFileSync, cpSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", ".output", "public");
const assetsDir = join(publicDir, "assets");

if (!existsSync(assetsDir)) {
  console.error("assets dir not found, skipping index generation");
  process.exit(0);
}

const files = readdirSync(assetsDir);

const js = files.filter((f) => f.endsWith(".js") && !f.includes("service-worker"));
const css = files.filter((f) => f.endsWith(".css"));

const html = `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>VGFOX DEV — Сайты, приложения, боты и дизайн под ключ</title>
    <meta name="description" content="Вадим Лисицин — Fullstack-разработчик. Создаю сайты, интернет-магазины, Android-приложения, Telegram-ботов и дизайн." />
    <meta property="og:title" content="VGFOX DEV — Цифровые решения для бизнеса" />
    <meta property="og:description" content="Сайты, приложения, Telegram-боты и дизайн под ключ. От идеи до запуска." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" href="/vgfox-dev-your-digital-partner/favicon.ico" type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" />
    ${css.map((f) => `<link rel="stylesheet" href="/vgfox-dev-your-digital-partner/assets/${f}" />`).join("\n    ")}
  </head>
  <body>
    <div id="root"></div>
    ${js.map((f) => `<script type="module" src="/vgfox-dev-your-digital-partner/assets/${f}"></script>`).join("\n    ")}
  </body>
</html>`;

writeFileSync(join(publicDir, "index.html"), html);
cpSync(join(publicDir, "index.html"), join(publicDir, "404.html"));
console.log("index.html and 404.html generated in .output/public/");
