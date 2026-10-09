import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#C6F24E",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 32 32">
          <path
            d="M9.5 16.5l4.2 4.2L22.5 11.5"
            fill="none"
            stroke="#0B0F00"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
