/* DEEPSANTA — pagina Reef.
   Webcam "live" sul reef artificiale (GIF) + render reali della struttura sottomarina. */

const RU = "./img/";

function LiveClock() {
  const [t, setT] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const p = (n) => String(n).padStart(2, "0");
  return <span>{p(t.getHours()) + ":" + p(t.getMinutes()) + ":" + p(t.getSeconds())}</span>;
}

function WebcamViewer() {
  return (
    <div className="registro-abisso" data-registro="abisso" style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: "var(--radius-md)", overflow: "hidden", background: "#02222C", boxShadow: "var(--shadow-card-mare)" }}>
      <img src={RU + "reef-live.gif"} alt="Diretta dal reef DeepSanta" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      {/* scanline + vignette per leggibilità chrome */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,16,18,0.45) 0%, transparent 22% 78%, rgba(0,16,18,0.55) 100%)", pointerEvents: "none" }} />

      {/* chrome — LIVE */}
      <div style={{ position: "absolute", top: 16, left: 16, display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-mono)", fontSize: "0.74rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ds-osso)", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--ds-corallo)", boxShadow: "0 0 10px var(--ds-corallo)", animation: "ds-blink 1.4s steps(1) infinite" }} />Live
      </div>
      <div style={{ position: "absolute", top: 16, right: 16, fontFamily: "var(--font-mono)", fontSize: "0.74rem", letterSpacing: "0.1em", color: "var(--ds-osso)", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
        <LiveClock /> CET
      </div>

      {/* barra dati */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "12px 16px", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.08em", color: "var(--ds-osso)", textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}>
        <span>44°20′N · 9°13′E — AMP Portofino</span>
        <span style={{ color: "var(--ds-turchese)" }}>PROF. −25 m · 14 °C</span>
      </div>
    </div>
  );
}

function ReefFrame({ src, label }) {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1", borderRadius: "var(--radius-md)", overflow: "hidden", background: "#02222C", boxShadow: "var(--shadow-card-mare)" }}>
      <img src={src} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(0,16,18,0.7) 100%)" }} />
      <span style={{ position: "absolute", bottom: 14, left: 16, right: 16, fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.08em", color: "var(--ds-osso)", textShadow: "0 1px 5px rgba(0,0,0,0.6)" }}>{label}</span>
    </div>
  );
}

function ReefStat({ k, v }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "18px 4px", borderBottom: "1px solid var(--ds-hairline-mare)" }}>
      <Eyebrow color="var(--ds-turchese)">{k}</Eyebrow>
      <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "1.05rem", color: "var(--ds-osso)" }}>{v}</span>
    </div>
  );
}

function Reef({ go }) {
  const vw = useViewport();
  const narrow = vw <= 900;
  const galCols = vw <= 560 ? "minmax(0, 1fr)" : vw <= 900 ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))";
  return (
    <div className="registro-abisso" data-registro="abisso" style={{ background: "var(--ds-abisso)", color: "var(--ds-su-abisso)", minHeight: "100vh" }}>
      <Nav go={go} current="reef" light />

      {/* Webcam + intro */}
      <section style={{ position: "relative", overflow: "hidden", padding: "clamp(32px, 5vw, 72px) clamp(20px, 5vw, 64px) clamp(40px, 6vw, 72px)" }}>
        <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Eyebrow mark="dot" color="var(--ds-turchese)">Reef · diretta dal fondale</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--type-monument)", textTransform: "uppercase", lineHeight: 0.92, letterSpacing: "0.01em", margin: 0, color: "var(--ds-osso)" }}>Il Reef</h1>
            <p style={{ fontFamily: "var(--font-poetic)", fontStyle: "italic", fontSize: "var(--type-poetic)", color: "var(--ds-su-blu)", margin: 0 }}>lì dove i voti diventano vita</p>
          </div>
          <WebcamViewer />
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--type-body)", lineHeight: 1.62, color: "var(--ds-su-abisso)", margin: 0, maxWidth: "60ch" }}>
            Una telecamera puntata sul reef artificiale di DeepSanta, al largo di Santa Margherita Ligure. Le strutture modulari, posate sul fondale senza ancoraggi, diventano substrato per la vita marina: gorgonie, coralli, e gli ex voto affidati al mare.
          </p>
        </div>
      </section>

      {/* Dati del reef */}
      <section style={{ borderTop: "1px solid var(--ds-hairline-mare)", padding: "clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: narrow ? "minmax(0, 1fr)" : "1.1fr 0.9fr", gap: "clamp(32px, 6vw, 72px)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Eyebrow mark="dot" color="var(--ds-turchese)">Il sistema</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--type-statement)", lineHeight: 1.05, margin: 0, color: "var(--ds-osso)" }}>
              Pochi moduli ripetuti, posati sul fondale e recuperabili per intero.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--type-body)", lineHeight: 1.62, margin: 0, maxWidth: "52ch" }}>
              Volte e cupole nascono da una sola regola geometrica. Le superfici offrono appiglio, ombra e rifugio; la tenuta è affidata alla gravità, non al fissaggio. Un innesco reversibile per accelerare il ripopolamento, coerente con i vincoli dell'area protetta.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "2px solid var(--ds-hairline-mare)" }}>
            <ReefStat k="Dove" v="AMP Portofino · Santa Margherita Ligure" />
            <ReefStat k="Profondità" v="−25 metri" />
            <ReefStat k="Struttura" v="Telaio AISI 316L · superfici in ecoconcrete" />
            <ReefStat k="Posa" v="Senza ancoraggi, interamente recuperabile" />
          </div>
        </div>
      </section>

      {/* Banda immersiva */}
      <section style={{ padding: "0 clamp(20px, 5vw, 64px) clamp(40px, 6vw, 72px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-card-mare)", background: "#02222C" }}>
          <img src={RU + "reef-wide.png"} alt="Il reef DeepSanta colonizzato dalla vita marina" style={{ width: "100%", display: "block" }} />
        </div>
      </section>

      {/* Galleria render struttura */}
      <section style={{ borderTop: "1px solid var(--ds-hairline-mare)", padding: "clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px) clamp(48px, 7vw, 96px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 26 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--type-statement)", textTransform: "uppercase", lineHeight: 1, margin: 0, color: "var(--ds-osso)" }}>La vita sul reef</h2>
            <Eyebrow color="var(--ds-mare-muted)">Render dal progetto</Eyebrow>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: galCols, gap: "clamp(16px, 2.2vw, 24px)" }}>
            <ReefFrame src={RU + "dolphin.png"} label="I delfini tornano al reef" />
            <ReefFrame src={RU + "turtle.png"} label="La tartaruga tra le volte" />
            <ReefFrame src={RU + "seahorse.png"} label="Il cavalluccio sulle gorgonie" />
          </div>
          <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" onClick={() => go("exvoto")}>Lascia il tuo ex voto →</Button>
            <Button variant="outline" size="lg" onClick={() => go("info")} style={{ color: "var(--ds-osso)", borderColor: "var(--ds-osso)" }}>Prenota l'immersione</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

Object.assign(window, { LiveClock, WebcamViewer, ReefFrame, ReefStat, Reef });
