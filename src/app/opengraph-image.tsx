import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { hero, site } from "@/content/site";

export const alt = `${site.name} — ${hero.headline.lead} ${hero.headline.prefix}${hero.headline.emphasis}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read at module scope so the image is prerendered at build time.
const fonts = join(process.cwd(), "src/assets/fonts");
const [geistSemiBold, geistRegular, instrumentItalic] = await Promise.all([
  readFile(join(fonts, "Geist-SemiBold.ttf")),
  readFile(join(fonts, "Geist-Regular.ttf")),
  readFile(join(fonts, "InstrumentSerif-Italic.ttf")),
]);

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#08090a",
          backgroundImage:
            "radial-gradient(ellipse 60% 70% at 85% 110%, rgba(198,242,78,0.28), transparent 70%), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 56px 56px, 56px 56px",
          color: "#f4f5f2",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="48" height="48" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="9" fill="#C6F24E" />
            <path
              d="M9.5 16.5l4.2 4.2L22.5 11.5"
              fill="none"
              stroke="#0B0F00"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 600, letterSpacing: "-0.03em" }}>
            Repli<span style={{ color: "#8e938f" }}>HQ</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1 }}>
            {hero.headline.lead}
          </div>
          <div style={{ display: "flex", alignItems: "baseline", marginTop: 8, lineHeight: 1 }}>
            <span style={{ fontSize: 92, fontWeight: 600, letterSpacing: "-0.045em" }}>
              {hero.headline.prefix.trim()}
            </span>
            <span
              style={{
                fontFamily: "Instrument Serif",
                fontStyle: "italic",
                fontSize: 104,
                color: "#c6f24e",
                marginLeft: 24,
                letterSpacing: "-0.02em",
              }}
            >
              {hero.headline.emphasis}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 26, color: "#8e938f", fontWeight: 400 }}>
            {site.og.tagline}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 20px",
              borderRadius: 999,
              background: "#c6f24e",
              color: "#0b0f00",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            {site.og.badge}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistSemiBold, weight: 600, style: "normal" },
        { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
        { name: "Instrument Serif", data: instrumentItalic, weight: 400, style: "italic" },
      ],
    },
  );
}
