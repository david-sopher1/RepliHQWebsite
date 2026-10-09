// Regenerates src/app/favicon.ico (16/32/48px) from src/app/icon.svg.
// Run with: npm run favicon
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const svg = await readFile(new URL("../src/app/icon.svg", import.meta.url));
const sizes = [16, 32, 48];
const pngs = await Promise.all(sizes.map((s) => sharp(svg, { density: 384 }).resize(s, s).png().toBuffer()));

// ICO container with embedded PNGs.
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
const entries = [];
let offset = 6 + 16 * sizes.length;
sizes.forEach((s, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(s, 0);
  e.writeUInt8(s, 1);
  e.writeUInt8(0, 2);
  e.writeUInt8(0, 3);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(pngs[i].length, 8);
  e.writeUInt32LE(offset, 12);
  offset += pngs[i].length;
  entries.push(e);
});
await writeFile(new URL("../src/app/favicon.ico", import.meta.url), Buffer.concat([header, ...entries, ...pngs]));
console.log("favicon.ico written");
