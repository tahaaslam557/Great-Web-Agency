import { ImageResponse } from "next/og";
import { MARK_ARROW, MARK_G } from "@/components/brand/logo";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#0A1A27",
        backgroundImage:
          "radial-gradient(circle at 85% 20%, rgba(16,139,136,0.55), transparent 45%), radial-gradient(circle at 100% 100%, rgba(99,191,124,0.45), transparent 40%)",
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <svg width="72" height="72" viewBox="0 0 100 100">
          <path d={MARK_G} fill="#fff" />
          <path d={MARK_ARROW} fill="#63BF7C" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 26, fontWeight: 700, lineHeight: 1 }}>
          <span>GREAT WEB</span>
          <span style={{ display: "flex", alignItems: "flex-end" }}>
            AGENCY
            <span style={{ width: 8, height: 8, background: "#63BF7C", marginLeft: 3, marginBottom: 3 }} />
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 76,
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: -3,
          textTransform: "uppercase",
          maxWidth: 1000,
        }}
      >
        {site.ogHeadline}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, color: "rgba(255,255,255,0.7)" }}>
        <span style={{ width: 12, height: 12, borderRadius: 12, background: "#63BF7C" }} />
        Websites · Ecommerce · Software · Digital products
      </div>
    </div>,
    size,
  );
}
