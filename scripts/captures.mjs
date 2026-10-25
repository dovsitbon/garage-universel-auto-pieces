// Captures pleine page de chaque page à 390 px et 1440 px.
// Usage : npm run build && npm run captures
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const PORT = 4402;
const BASE = `http://localhost:${PORT}`;
const pages = [
  ['accueil', '/'],
  ['pieces', '/pieces-auto-occasion/'],
  ['epave', '/enlevement-epave-vhu/'],
  ['acces', '/acces-horaires/'],
  ['faq', '/faq/'],
  ['mentions-legales', '/mentions-legales/'],
  ['confidentialite', '/confidentialite/'],
  ['404', '/page-inexistante/'],
];
const sizes = [
  ['mobile', 390, 844],
  ['desktop', 1440, 900],
];

async function waitFor(url, tries = 60) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url);
      if (r.status < 500) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error('Serveur preview injoignable');
}

const server = spawn(`npx astro preview --port ${PORT}`, { shell: true, stdio: 'ignore' });
try {
  await waitFor(BASE + '/');
  await mkdir('captures', { recursive: true });
  const browser = await chromium.launch();
  for (const [name, w, h] of sizes) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, reducedMotion: 'reduce', locale: 'fr-FR', timezoneId: 'Europe/Paris' });
    const page = await ctx.newPage();
    for (const [slug, path] of pages) {
      await page.goto(BASE + path, { waitUntil: 'networkidle' });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (overflow > 0) console.warn(`! débordement horizontal ${overflow}px sur ${path} (${name})`);
      await page.screenshot({ path: `captures/${slug}-${name}.png`, fullPage: true });
      console.log(`captures/${slug}-${name}.png`);
    }
    await ctx.close();
  }
  await browser.close();
} finally {
  if (process.platform === 'win32') spawn('taskkill', ['/pid', String(server.pid), '/T', '/F'], { stdio: 'ignore' });
  else server.kill();
}
