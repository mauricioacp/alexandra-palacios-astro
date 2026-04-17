#!/usr/bin/env bun
// Regenerate public/og-image.jpg and public/apple-touch-icon.png from the hero.
// Run once after hero changes: `bun scripts/gen-og.mjs`
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SRC = resolve(ROOT, "src/assets/hero-image-new.jpeg");
const OG_OUT = resolve(ROOT, "public/og-image.jpg");
const ICON_OUT = resolve(ROOT, "public/apple-touch-icon.png");

const OG_W = 1200;
const OG_H = 630;

const textSVG = Buffer.from(`
<svg width="${OG_W}" height="${OG_H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="veil" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0f0a1a" stop-opacity="0.0"/>
      <stop offset="0.45" stop-color="#0f0a1a" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#0f0a1a" stop-opacity="0.82"/>
    </linearGradient>
    <linearGradient id="violet" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#a78bfa"/>
      <stop offset="1" stop-color="#c4b5fd"/>
    </linearGradient>
  </defs>
  <rect width="${OG_W}" height="${OG_H}" fill="url(#veil)"/>
  <g font-family="-apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif">
    <text x="64" y="470" fill="url(#violet)" font-size="44" font-weight="600" letter-spacing="2">LOGOPEDA · SEGOVIA</text>
    <text x="64" y="550" fill="#ffffff" font-size="72" font-weight="700">Alexandra Palacios</text>
    <text x="64" y="600" fill="#e9d5ff" font-size="32" font-weight="400">Terapia miofuncional · Voz · Habla</text>
  </g>
</svg>
`);

async function buildOg() {
  await sharp(SRC)
    .resize(OG_W, OG_H, { fit: "cover", position: "attention" })
    .composite([{ input: textSVG, top: 0, left: 0 }])
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(OG_OUT);
  console.log(`wrote ${OG_OUT}`);
}

async function buildAppleIcon() {
  // Apple touch icon — 180x180, square crop from the hero, no text.
  await sharp(SRC)
    .resize(180, 180, { fit: "cover", position: "attention" })
    .png({ compressionLevel: 9 })
    .toFile(ICON_OUT);
  console.log(`wrote ${ICON_OUT}`);
}

await Promise.all([buildOg(), buildAppleIcon()]);
