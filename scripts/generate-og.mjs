import { chromium } from 'playwright'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const logoBuf = readFileSync(resolve(root, 'src/assets/original/logo-1-1024x625.png'))
const logoB64 = `data:image/png;base64,${logoBuf.toString('base64')}`

const html = `<!doctype html>
<html><head><meta charset="utf-8" />
<style>
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html,body{width:1200px;height:630px;overflow:hidden;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased}
  .card{
    position:relative;width:1200px;height:630px;
    background:
      radial-gradient(900px 500px at 78% 18%, rgba(95,133,46,0.32) 0%, transparent 60%),
      radial-gradient(700px 400px at 12% 88%, rgba(178,87,53,0.18) 0%, transparent 65%),
      linear-gradient(140deg,#1b2a20 0%, #243a2c 55%, #2c4a22 100%);
    color:#f3efe2;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    padding:64px;
    overflow:hidden;
  }
  .card::before{
    content:"";position:absolute;inset:24px;border:1px solid rgba(243,239,226,0.10);border-radius:28px;pointer-events:none;
  }
  .badge{
    display:inline-flex;align-items:center;gap:10px;
    height:36px;padding:0 16px;border-radius:999px;
    background:rgba(243,239,226,0.08);border:1px solid rgba(243,239,226,0.22);
    color:rgba(243,239,226,0.86);font-size:12px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;
    margin-bottom:42px;
  }
  .logo-pill{
    background:#fbf9f2;border-radius:24px;padding:36px 56px;
    box-shadow:0 24px 56px rgba(0,0,0,0.32);
    margin-bottom:44px;
  }
  .logo-pill img{height:160px;width:auto;display:block}
  .tagline{
    font-size:30px;font-weight:600;letter-spacing:-0.01em;color:#fff;
    text-align:center;line-height:1.18;max-width:880px;
  }
  .meta{
    margin-top:18px;font-size:18px;letter-spacing:0.18em;text-transform:uppercase;
    color:rgba(243,239,226,0.62);font-weight:500;
  }
  .dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#5f852e;margin:0 12px;vertical-align:middle}
  .corner{
    position:absolute;bottom:36px;right:48px;
    font-size:14px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(243,239,226,0.55);
  }
</style></head>
<body>
  <div class="card">
    <span class="badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5f852e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      Cheshire's conservatory roof specialists
    </span>
    <div class="logo-pill"><img src="${logoB64}" alt="Cheshire Conservatory Roofs" /></div>
    <div class="tagline">Transform your conservatory into a year-round living space.</div>
    <div class="meta">Tiled roofs<span class="dot"></span>Warm roof extensions<span class="dot"></span>Insulated systems</div>
    <div class="corner">cheshireconservatoryroofs.com</div>
  </div>
</body></html>`

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
await page.setContent(html, { waitUntil: 'networkidle' })
const png = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1200, height: 630 } })
writeFileSync(resolve(root, 'public/og-image.png'), png)
const jpg = await page.screenshot({ type: 'jpeg', quality: 92, clip: { x: 0, y: 0, width: 1200, height: 630 } })
writeFileSync(resolve(root, 'public/og-image.jpg'), jpg)
await browser.close()
console.log('OG image generated: public/og-image.jpg + public/og-image.png (1200x630)')
