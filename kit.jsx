/* DEEPSANTA — UI kit: componenti condivisi del sito evento.
   Versioni cosmetiche costruite sui token reali (styles.css).
   In produzione, usa le primitive del bundle (window.DEEPSANTADesignSystem_*). */

function Rays({ opacity = 0.5 }) {
  return (
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0, pointerEvents: "none",
      background: "var(--rays)", mixBlendMode: "screen", opacity,
    }} />
  );
}

function Veil() {
  return <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "var(--veil-deep)" }} />;
}

function ThreeSquares({ size = 13, gap = 5 }) {
  const c = ["var(--ds-blu)", "var(--ds-oro)", "var(--ds-turchese)"];
  return (
    <span style={{ display: "inline-flex", gap }} aria-hidden="true">
      {c.map((col, i) => <i key={i} style={{ width: size, height: size, background: col, display: "block" }} />)}
    </span>
  );
}

function Eyebrow({ children, mark = "none", color, style = {} }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.7em", fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "var(--type-technical)", letterSpacing: "0.16em", textTransform: "uppercase", color: color || "var(--text-mono)", ...style }}>
      {mark === "dot" && <i style={{ width: 8, height: 8, background: "var(--accent)", display: "block", flex: "none" }} />}
      {mark === "squares" && <ThreeSquares size={9} gap={4} />}
      {children}
    </span>
  );
}

function Button({ children, variant = "primary", size = "md", onClick, style = {} }) {
  const sizes = { sm: ["8px 14px", "0.78rem"], md: ["12px 22px", "0.86rem"], lg: ["16px 30px", "0.95rem"] };
  const v = {
    primary: { background: "var(--accent)", color: "var(--accent-on)", border: "1px solid transparent" },
    signature: { background: "var(--signature)", color: "var(--surface-page)", border: "1px solid transparent" },
    outline: { background: "transparent", color: "var(--text-strong)", border: "1px solid var(--text-strong)" },
    ghost: { background: "transparent", color: "var(--text-strong)", border: "1px solid transparent" },
  }[variant];
  const [px, fs] = sizes[size] || sizes.md;
  return (
    <button onClick={onClick}
      onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(1px)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.07)")}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.filter = "none"; }}
      style={{ fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: fs, letterSpacing: "0.14em", textTransform: "uppercase", padding: px, borderRadius: "var(--radius-pill)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.6em", whiteSpace: "nowrap", transition: "transform var(--dur-fast) var(--ease-tide), filter var(--dur-fast) var(--ease-tide)", ...v, ...style }}>
      {children}
    </button>
  );
}

function Tag({ children, tone = "neutral", variant = "soft" }) {
  const tones = {
    neutral: { solid: ["var(--signature)", "var(--surface-page)"], soft: ["color-mix(in srgb, var(--signature) 14%, transparent)", "var(--signature)"] },
    sole: { solid: ["var(--ds-oro)", "var(--ds-su-oro)"], soft: ["color-mix(in srgb, var(--ds-oro) 22%, transparent)", "var(--ds-su-oro)"] },
    mare: { solid: ["var(--ds-turchese)", "var(--ds-su-turchese)"], soft: ["color-mix(in srgb, var(--ds-turchese) 18%, transparent)", "var(--ds-turchese)"] },
    corallo: { solid: ["var(--ds-corallo)", "var(--ds-su-corallo)"], soft: ["color-mix(in srgb, var(--ds-corallo) 16%, transparent)", "var(--ds-corallo)"] },
  };
  const pair = (tones[tone] || tones.neutral)[variant];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5em", fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 12px", borderRadius: "var(--radius-pill)", background: pair[0], color: pair[1] }}>
      {children}
    </span>
  );
}

function AttoMark({ atto = "sole", size = 64 }) {
  const c = { width: size, height: size, viewBox: "0 0 64 64", style: { display: "block", flex: "none" } };
  if (atto === "forma") return (
    <svg {...c}><path d="M6,52 a26,26 0 0 1 52,0" fill="none" stroke="var(--ds-corallo)" strokeWidth="7" /><path d="M18,52 a14,14 0 0 1 28,0" fill="none" stroke="var(--ds-oro)" strokeWidth="7" /></svg>
  );
  if (atto === "mare") return (
    <svg {...c}><path d="M4,38 q10,-16 20,0 q10,16 20,0 q10,-16 16,-4" fill="none" stroke="var(--ds-turchese)" strokeWidth="8" strokeLinecap="round" /></svg>
  );
  return (
    <svg {...c}><circle cx="32" cy="32" r="30" fill="var(--ds-turchese)" /><circle cx="32" cy="32" r="18" fill="var(--ds-osso)" /><circle cx="32" cy="32" r="8" fill="var(--ds-turchese)" /></svg>
  );
}

function WaterlineWordmark({ text = "DEEPSANTA", width = 560, above = "var(--ds-blu)", below = "", line = "var(--ds-turchese)", style = {} }) {
  const uid = React.useId().replace(/:/g, "");
  const curve = "M6,72 C220,62 470,84 720,70 C830,64 905,74 950,68";
  const clip = curve + " L960,150 L0,150 Z";
  const fontStyle = { fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 96, letterSpacing: "1px" };
  return (
    <svg viewBox="0 0 960 150" width={width} role="img" aria-label={text} style={{ display: "block", overflow: "visible", ...style }}>
      <defs><clipPath id={"wl" + uid}><path d={clip} /></clipPath></defs>
      <text x="6" y="104" fill={above} style={fontStyle}>{text}</text>
      <text x="6" y="104" fill={below || above} clipPath={"url(#wl" + uid + ")"} style={fontStyle}>{text}</text>
    </svg>
  );
}

/* Marchio compatto: cavalluccio (immagine reale) + linea d'acqua sul nome */
function Lockup({ onClick, light = false }) {
  return (
    <button onClick={onClick} style={{ all: "unset", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 12 }}>
      <img src={"./assets/marks/" + (light ? "seahorse-osso.png" : "seahorse-primary.png")} alt="" style={{ height: 34, width: "auto", display: "block" }} />
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, letterSpacing: "0.04em", color: light ? "var(--ds-osso)" : "var(--ds-blu)" }}>
        DEEPSANTA
      </span>
    </button>
  );
}

Object.assign(window, { Rays, Veil, ThreeSquares, Eyebrow, Button, Tag, AttoMark, WaterlineWordmark, Lockup });
