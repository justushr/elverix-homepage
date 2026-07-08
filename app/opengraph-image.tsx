import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#070B18",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow orbs */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,200,255,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: 300,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
          <div
            style={{
              width: 52,
              height: 52,
              background: "#00C8FF",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              color: "#070B18",
            }}
          >
            E
          </div>
          <span style={{ color: "#EEF2FF", fontSize: 32, fontWeight: 600, letterSpacing: -0.5 }}>
            Elverix
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#EEF2FF",
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 760,
            marginBottom: 28,
          }}
        >
          Moderne Websites für lokale Betriebe.
        </div>

        {/* Industries */}
        <div style={{ display: "flex", gap: 12, marginBottom: 48 }}>
          {["Handwerk", "Gastronomie", "Praxen", "Einzelhandel"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(0,200,255,0.1)",
                border: "1px solid rgba(0,200,255,0.25)",
                borderRadius: 100,
                padding: "8px 20px",
                color: "#00C8FF",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00C8FF" }} />
          <span style={{ color: "#8B9CC7", fontSize: 20 }}>
            Arnsberg · Sauerland · NRW
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
