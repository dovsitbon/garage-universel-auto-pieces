// Génère public/og.png (1200x630) à partir d'un gabarit HTML simple.
import { chromium } from 'playwright';
import { readFile } from 'node:fs/promises';

const font = (await readFile('node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-600-normal.woff2')).toString('base64');
const mono = (await readFile('node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2')).toString('base64');
const html = `<!doctype html><html><head><style>
@font-face{font-family:P;src:url(data:font/woff2;base64,${font})}
@font-face{font-family:M;src:url(data:font/woff2;base64,${mono})}
body{margin:0;width:1200px;height:630px;display:grid;grid-template-columns:1fr 1fr;font-family:P;background:#4b5c66;gap:10px;padding:10px;box-sizing:border-box}
.d{padding:56px 48px;position:relative}
.k{background:#cdae7e;color:#123522}.g{background:#1f5c3a;color:#fff}
h1{font-size:58px;line-height:1.05;margin:28px 0 0;font-weight:600}
p{font-family:M;font-size:24px;margin:0}
.pl{display:inline-block;background:#4b5c66;padding:6px 12px;border-radius:3px}
.pl span{background:#cdae7e;color:#123522;font-family:M;font-size:20px;padding:3px 10px}
.h{position:absolute;top:50%;width:10px;height:120px;background:#c2461a;transform:translateY(-50%)}
.foot{position:absolute;left:48px;bottom:48px}
</style></head><body>
<div class="d k"><span class="pl"><span>Comptoir pièces</span></span><h1>Pièces auto d'occasion</h1><div class="h" style="right:18px"></div><div class="foot"><p>Garage Universel Auto Pièces</p></div></div>
<div class="d g"><span class="pl"><span>Entrée véhicules</span></span><h1>Centre VHU agréé à Groslay</h1><div class="h" style="left:18px"></div><div class="foot"><p>8 route de Calais · 01 39 83 10 56</p></div></div>
</body></html>`;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(html);
await p.screenshot({ path: 'public/og.png' });
await b.close();
console.log('public/og.png');
