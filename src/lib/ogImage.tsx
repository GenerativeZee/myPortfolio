export const OG_IMAGE_SIZE = { width: 1200, height: 630 };
export const OG_IMAGE_ALT = "MD Zaid — Agentic AI Engineer";

export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0f",
        backgroundImage:
          "radial-gradient(circle at 22% 20%, rgba(99,102,241,0.35), transparent 55%), radial-gradient(circle at 82% 75%, rgba(6,182,212,0.25), transparent 50%), radial-gradient(circle at 50% 100%, rgba(139,92,246,0.25), transparent 55%)",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          display: "flex",
        }}
      />

      {/* Logo mark */}
      <div
        style={{
          display: "flex",
          width: 72,
          height: 72,
          borderRadius: 20,
          marginBottom: 36,
          background:
            "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 34,
          fontWeight: 700,
          color: "white",
        }}
      >
        Z
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: -2,
          color: "white",
        }}
      >
        MD&nbsp;
        <span
          style={{
            backgroundImage:
              "linear-gradient(90deg, #818cf8, #a78bfa, #22d3ee)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
          }}
        >
          ZAID
        </span>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 34,
          fontWeight: 500,
          color: "#a5b4fc",
          marginTop: 18,
          letterSpacing: 1,
        }}
      >
        Agentic AI Engineer
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 24,
          color: "#71717a",
          marginTop: 28,
          gap: 14,
        }}
      >
        <span style={{ display: "flex" }}>LangGraph</span>
        <span style={{ display: "flex", color: "#3f3f46" }}>·</span>
        <span style={{ display: "flex" }}>Multi-Agent Systems</span>
        <span style={{ display: "flex", color: "#3f3f46" }}>·</span>
        <span style={{ display: "flex" }}>RAG</span>
        <span style={{ display: "flex", color: "#3f3f46" }}>·</span>
        <span style={{ display: "flex" }}>Agent Evals</span>
      </div>
    </div>
  );
}
