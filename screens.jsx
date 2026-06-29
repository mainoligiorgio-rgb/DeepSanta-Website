/* DEEPSANTA — schermate del sito evento. */

const ATTI = {
  forma: { id: "forma", n: "I", title: "FORMA", date: "03—04 GIU", place: "WORKSHOP", time: "09:30", caption: "dare forma prima di scendere", registro: "terra",
    body: "Si comincia dalla forma. Due giorni di laboratorio: si dà corpo alla materia — ceramica, rete, sale, parola — con artigiani e artisti del territorio. La forma è ciò che costruiamo prima di immergerci, il primo gesto della discesa." },
  sole: { id: "sole", n: "II", title: "SOLE", date: "08 GIU", place: "PIAZZA DEL SOLE", time: "18:30", caption: "le voci prima della discesa", registro: "terra",
    body: "Un talk all'aperto, in Piazza del Sole. Voci, racconti e incontri sotto la luce della sera: il mare visto da chi lo abita e da chi lo studia. L'ultimo respiro in superficie prima di scendere." },
  mare: { id: "mare", n: "III", title: "MARE", date: "08 GIU", place: "STANZA MARINA", time: "21:00", caption: "senza bagnarti", registro: "abisso",
    body: "La discesa, e l'inaugurazione della Stanza Marina: una sala immersiva nella vecchia Pescheria, dove suono, luce e proiezione trasformano lo spazio in fondale. Si entra nel mare senza bagnarsi, lì dove — dicono i pescatori — la vita ricomincia." },
};

/* Calendario dell'evento — sviluppo orario per ogni atto (dalla foto del programma). */
const SCHEDULE = {
  forma: [
    { label: "Giorno 1", date: "03 Giugno", place: "Pescheria · Ingresso Workshop", rows: [
      ["09:30—10:15", "Benvenuto e introduzione al progetto"],
      ["10:15—11:30", "Le basi del modulo: materiali, connessioni, ecologia"],
      ["11:30—12:30", "Brainstorming collettivo facilitato"],
      ["12:30—14:00", "Pausa pranzo"],
      ["14:00—15:30", "Sessioni parallele di sketching (piccoli gruppi)"],
      ["15:30—17:30", "Convergenza: selezione delle idee"],
      ["17:30—18:00", "Sintesi della giornata"],
    ] },
    { label: "Giorno 2", date: "04 Giugno", place: "Pescheria · Ingresso Workshop", rows: [
      ["09:30—11:00", "Sviluppo del concept finale"],
      ["11:20—12:30", "Preparazione della presentazione"],
      ["12:30—13:30", "Pausa pranzo"],
      ["13:30—14:30", "Prove tecniche e ultime correzioni"],
      ["15:00—16:00", "Presentazione ufficiale del concept"],
      ["16:00—16:30", "Feedback e approvazione"],
      ["16:30—17:00", "Consegna ufficiale al team di costruzione"],
      ["17:00—17:30", "Chiusura e foto di gruppo"],
    ] },
  ],
  sole: [
    { label: "Giorno 3 · Talk pubblico", date: "08 Giugno", place: "Piazza del Sole", rows: [
      ["09:00—09:30", "Registrazione pubblica"],
      ["09:30—09:45", "Benvenuto e introduzione"],
      ["09:45—10:30", "Keynote: Material Ecology e il reef come promessa"],
      ["10:30—11:15", "Presentazione: la scienza del reef artificiale"],
      ["11:15—11:40", "Coffee break"],
      ["11:40—12:10", "Dialogo aperto con il pubblico"],
      ["12:10—12:30", "Racconto del workshop e presentazione del concept"],
      ["13:30—16:00", "Buffet & networking"],
    ] },
  ],
  mare: [
    { label: "Giorno 3 · Immersione", date: "08 Giugno", place: "Pescheria · Stanza Immersiva", rows: [
      ["17:00—20:00", "Apertura ufficiale della Stanza Immersiva"],
    ] },
  ],
};

/* ---------- HOME ---------- */
function Home({ go }) {
  const vw = useViewport();
  const narrow = vw <= 900;
  return (
    <div>
      <header className="registro-mare" data-registro="mare" style={{ position: "relative", overflow: "hidden", background: "var(--gradient-discesa)", minHeight: "92vh", display: "flex", flexDirection: "column" }}>
        <Rays opacity={0.6} />
        <Veil />
        <div style={{ position: "relative", zIndex: 5 }}>
          <Nav go={go} current="home" light />
        </div>
        <div style={{ position: "relative", zIndex: 5, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "40px clamp(20px, 5vw, 64px) 80px", gap: 26 }}>
          <Eyebrow mark="dot" color="var(--ds-osso)">Santa Margherita Ligure · 03—08 GIU 2026</Eyebrow>
          <WaterlineWordmark text="DEEPSANTA" width={Math.min(800, 0.88 * vw)} above="var(--ds-osso)" style={{ maxWidth: "92vw" }} />
          <p style={{ fontFamily: "var(--font-poetic)", fontStyle: "italic", fontSize: "var(--type-poetic)", color: "var(--ds-su-blu)", margin: "4px 0 0", maxWidth: 520 }}>
            una discesa in tre atti — scendi, dove rinasce la vita
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
            <Button variant="primary" size="lg" onClick={() => go("info")}>Prenota il rito</Button>
            <Button variant="outline" size="lg" onClick={() => go("programma")} style={{ color: "var(--ds-osso)", borderColor: "var(--ds-osso)" }}>Il programma ↓</Button>
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 5, display: "flex", justifyContent: "center", paddingBottom: 26 }}>
          <Eyebrow color="var(--ds-mare-muted)">Atto I · Forma&nbsp;&nbsp;—&nbsp;&nbsp;Atto II · Sole&nbsp;&nbsp;—&nbsp;&nbsp;Atto III · Mare</Eyebrow>
        </div>
      </header>

      {/* Banda intro — registro terra */}
      <section style={{ background: "var(--ds-sabbia)", color: "var(--ds-inchiostro)", padding: "clamp(56px, 8vw, 110px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.1fr 1fr", gap: "clamp(32px, 6vw, 80px)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <Eyebrow mark="dot">Il rito</Eyebrow>
            <h2 className="voce-statement" style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--type-statement)", lineHeight: 1.05 }}>
              Tre giorni per scendere insieme, dalla piazza al fondale.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--type-body)", lineHeight: 1.6, color: "var(--ds-inchiostro)", maxWidth: "52ch", margin: 0, opacity: 0.86 }}>
              DeepSanta trasforma la Pescheria Comunale di Santa Margherita in un'unica, lunga immersione. Sopra l'acqua la luce e la comunità; sotto, il buio dove la vita ricomincia. Un solo movimento: la discesa.
            </p>
            <div><Button variant="signature" onClick={() => go("programma")}>Scopri i tre atti</Button></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "2px solid var(--ds-inchiostro)" }}>
            {Object.values(ATTI).map((a) => (
              <button key={a.id} onClick={() => go("atto", a.id)}
                onMouseEnter={(e) => (e.currentTarget.style.background = "color-mix(in srgb, var(--ds-turchese) 9%, transparent)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                style={{ all: "unset", cursor: "pointer", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 18, padding: "20px 8px", borderBottom: "1px solid var(--ds-hairline-terra)", transition: "background var(--dur) var(--ease-tide)" }}>
                <span style={{ display: "flex", flexDirection: "column", gap: 4, textAlign: "left" }}>
                  <Eyebrow>{"Atto " + a.n + " · " + a.date}</Eyebrow>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.6rem", textTransform: "uppercase", lineHeight: 1 }}>{a.title}</span>
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.3rem", color: "var(--ds-blu)" }}>↓</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Teaser Ex Voto — registro abisso */}
      <section className="registro-abisso" data-registro="abisso" style={{ position: "relative", overflow: "hidden", background: "var(--ds-abisso)", color: "var(--ds-su-abisso)", padding: "clamp(48px, 7vw, 96px) clamp(20px, 5vw, 64px)" }}>
        <Rays opacity={0.3} />
        <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.05fr 0.95fr", gap: "clamp(28px, 5vw, 64px)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: "52ch" }}>
            <Eyebrow mark="dot" color="var(--ds-turchese)">Ex Voto Vivente</Eyebrow>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--type-statement)", lineHeight: 1.04, color: "var(--ds-osso)" }}>
              Lascia un voto al mare. Diventa parte del reef.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--type-body)", lineHeight: 1.6, margin: 0 }}>
              Tre kit per costruire a mano il tuo ex voto contemporaneo — rete a tombolo, simboli, un token che ti riporta al fondale. Un gesto di devozione che continua a vivere sott'acqua.
            </p>
            <div style={{ marginTop: 4 }}><Button variant="primary" size="lg" onClick={() => go("exvoto")}>Scopri i kit →</Button></div>
          </div>
          <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-card-mare)", background: "var(--ds-blu)" }}>
            <img src="./img/exvoto2.png" alt="Ex voto vivente DeepSanta" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

/* ---------- PROGRAMMA (atti espandibili → calendario) ---------- */
function DayBlock({ day, dark }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Eyebrow mark="dot" color={dark ? "var(--ds-turchese)" : "var(--ds-blu)"}>{day.label + " · " + day.date}</Eyebrow>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--type-technical)", letterSpacing: "0.08em", color: dark ? "var(--ds-mare-muted)" : "var(--ds-terra-muted)" }}>{day.place}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {day.rows.map(([t, act], i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "118px 1fr", gap: 18, alignItems: "baseline", padding: "11px 0", borderTop: "1px solid " + (dark ? "var(--ds-hairline-mare)" : "var(--ds-hairline-terra)") }}>
            <span style={{ fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "0.82rem", letterSpacing: "0.04em", color: dark ? "var(--ds-su-abisso)" : "var(--ds-terra-muted)", whiteSpace: "nowrap" }}>{t}</span>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "1rem", lineHeight: 1.4, color: dark ? "var(--ds-osso)" : "var(--ds-inchiostro)" }}>{act}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Programma({ go }) {
  const [open, setOpen] = React.useState("forma");
  const vw = useViewport();
  const narrow = vw <= 900;
  return (
    <div style={{ background: "var(--ds-sabbia)", color: "var(--ds-inchiostro)", minHeight: "100vh" }}>
      <Nav go={go} current="programma" />
      <section style={{ padding: "clamp(48px, 7vw, 96px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Eyebrow mark="dot">Programma · 03—08 Giugno 2026</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--type-monument)", textTransform: "uppercase", lineHeight: 0.94, letterSpacing: "0.01em", margin: "18px 0 8px" }}>
            Tre atti
          </h1>
          <p style={{ fontFamily: "var(--font-poetic)", fontStyle: "italic", fontSize: "var(--type-poetic)", color: "var(--ds-terra-muted)", margin: "0 0 14px" }}>
            una discesa, dalla luce al fondale
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--type-technical)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ds-terra-muted)", margin: "0 0 36px" }}>
            Tocca un atto per aprire il calendario
          </p>
          <div style={{ borderTop: "2px solid var(--ds-inchiostro)" }}>
            {Object.values(ATTI).map((a) => {
              const isOpen = open === a.id;
              return (
                <div key={a.id} style={{ borderBottom: "1px solid var(--ds-hairline-terra)" }}>
                  <button onClick={() => setOpen(isOpen ? null : a.id)}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "color-mix(in srgb, var(--ds-turchese) 8%, transparent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = isOpen ? "color-mix(in srgb, var(--ds-turchese) 6%, transparent)" : "transparent")}
                    style={{ all: "unset", cursor: "pointer", width: "100%", boxSizing: "border-box", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "clamp(16px,3vw,32px)", padding: "26px 10px", background: isOpen ? "color-mix(in srgb, var(--ds-turchese) 6%, transparent)" : "transparent", transition: "background var(--dur) var(--ease-tide)" }}>
                    <span style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
                      <Eyebrow mark="dot">{"Atto " + a.n + " · " + a.date + " · " + a.place}</Eyebrow>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem,5vw,3.2rem)", textTransform: "uppercase", lineHeight: 1 }}>{a.title}</span>
                      <span style={{ fontFamily: "var(--font-poetic)", fontStyle: "italic", fontSize: "1.3rem", color: "var(--ds-terra-muted)" }}>{a.caption}</span>
                    </span>
                    <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", border: "1.5px solid var(--ds-inchiostro)", fontFamily: "var(--font-mono)", fontSize: "1.4rem", lineHeight: 1, transform: isOpen ? "rotate(45deg)" : "none", transition: "transform var(--dur) var(--ease-tide)" }}>+</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "8px 10px 36px", display: "grid", gridTemplateColumns: (!narrow && SCHEDULE[a.id].length > 1) ? "1fr 1fr" : "1fr", gap: "clamp(28px, 5vw, 56px)" }}>
                      {SCHEDULE[a.id].map((day, i) => <DayBlock key={i} day={day} dark={false} />)}
                      <div style={{ gridColumn: "1 / -1", marginTop: 6 }}>
                        <button onClick={() => go("atto", a.id)} style={{ all: "unset", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: "0.78rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ds-blu)", borderBottom: "2px solid var(--ds-turchese)", paddingBottom: 3 }}>
                          Apri la pagina dell'atto →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

/* ---------- ATTO (dettaglio) ---------- */
function Atto({ go, attoId }) {
  const a = ATTI[attoId] || ATTI.sole;
  const dark = a.registro !== "terra";
  const vw = useViewport();
  const narrow = vw <= 900;
  const heroBg = a.id === "sole" ? "linear-gradient(180deg,#F4F2E9 0%, #E4E2D2 100%)"
    : a.id === "forma" ? "linear-gradient(180deg,#E9E7D8 0%, #E0DCC9 100%)"
    : "var(--gradient-discesa)";
  return (
    <div className={dark ? "registro-mare" : ""} data-registro={dark ? "mare" : undefined}
      style={{ background: dark ? "var(--ds-abisso)" : "var(--ds-sabbia)", color: dark ? "var(--ds-osso)" : "var(--ds-inchiostro)", minHeight: "100vh" }}>
      <div className={dark ? "registro-mare" : ""}>
        <Nav go={go} current="atto" light={dark} />
      </div>
      <header className={dark ? "registro-abisso" : ""} data-registro={dark ? "abisso" : undefined}
        style={{ position: "relative", overflow: "hidden", background: heroBg, padding: "clamp(40px, 6vw, 88px) clamp(20px, 5vw, 64px) clamp(48px, 7vw, 96px)" }}>
        {dark && <Rays opacity={0.55} />}
        <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto", display: "flex", flexDirection: "column", gap: 22 }}>
          <button onClick={() => go("programma")} style={{ all: "unset", cursor: "pointer" }}>
            <Eyebrow color={dark ? "var(--ds-turchese)" : "var(--ds-terra-muted)"}>← Programma</Eyebrow>
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
            <Eyebrow mark="dot" color={dark ? "var(--ds-su-blu)" : "var(--ds-inchiostro)"}>{"Atto " + a.n + " · " + a.date + " · " + a.place}</Eyebrow>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--type-monument)", textTransform: "uppercase", lineHeight: 0.92, letterSpacing: "0.01em", margin: 0, color: dark ? "var(--ds-osso)" : "var(--ds-inchiostro)" }}>{a.title}</h1>
          <p style={{ fontFamily: "var(--font-poetic)", fontStyle: "italic", fontSize: "var(--type-poetic)", color: dark ? "var(--ds-su-blu)" : "var(--ds-terra-muted)", margin: 0 }}>{a.caption}</p>
        </div>
      </header>
      <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.3fr 1fr", gap: "clamp(32px, 6vw, 72px)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--type-body-lg)", lineHeight: 1.66, margin: 0, color: dark ? "var(--ds-su-blu)" : "var(--ds-inchiostro)", maxWidth: "54ch" }}>{a.body}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <Eyebrow mark="dot" color={dark ? "var(--ds-turchese)" : "var(--ds-terra-muted)"}>Calendario</Eyebrow>
              {SCHEDULE[a.id].map((day, i) => <DayBlock key={i} day={day} dark={dark} />)}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, padding: "26px", borderRadius: "var(--radius-md)", background: dark ? "var(--surface-card)" : "var(--ds-osso)", boxShadow: dark ? "var(--shadow-card-mare)" : "var(--shadow-card)", borderTop: "2px solid var(--ds-turchese)", position: narrow ? "static" : "sticky", top: 88 }}>
            <Eyebrow color={dark ? "var(--ds-turchese)" : "var(--ds-terra-muted)"}>Dettagli</Eyebrow>
            {[["Data", a.date], ["Ora", a.time], ["Luogo", a.place], ["Ingresso", a.id === "forma" ? "Su iscrizione" : "Con prenotazione"]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16, paddingBottom: 12, borderBottom: "1px solid " + (dark ? "var(--ds-hairline-mare)" : "var(--ds-hairline-terra)") }}>
                <Eyebrow color={dark ? "var(--ds-mare-muted)" : "var(--ds-terra-muted)"}>{k}</Eyebrow>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "1rem", color: dark ? "var(--ds-osso)" : "var(--ds-inchiostro)" }}>{v}</span>
              </div>
            ))}
            <Button variant="primary" onClick={() => go("info")}>Prenota questo atto</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

/* ---------- INFO & BIGLIETTI ---------- */
function TicketButton({ onClick }) {
  const [hov, setHov] = React.useState(false);
  const notch = (side) => ({ position: "absolute", [side]: -13, top: "calc(50% - 13px)", width: 26, height: 26, borderRadius: "50%", background: "var(--ds-sabbia)", zIndex: 2 });
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ all: "unset", cursor: "pointer", display: "block", width: "100%", maxWidth: 520, position: "relative", filter: "drop-shadow(0 16px 30px rgba(0,48,96,0.20))", transform: hov ? "translateY(-3px)" : "none", transition: "transform var(--dur-fast) var(--ease-tide)" }}>
      <span style={notch("left")} />
      <span style={notch("right")} />
      <span style={{ display: "grid", gridTemplateColumns: "auto 1fr", minHeight: 152, borderRadius: 14, overflow: "hidden" }}>
        {/* tagliando */}
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 20px", background: "var(--ds-blu)", borderRight: "2px dashed color-mix(in srgb, var(--ds-osso) 50%, var(--ds-blu))" }}>
          <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.34em", textTransform: "uppercase", color: "var(--ds-osso)" }}>
            DEEPSANTA
          </span>
        </span>
        {/* corpo */}
        <span style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 10, padding: "26px 28px", background: "var(--ds-osso)", color: "var(--ds-inchiostro)" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "var(--type-technical)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ds-terra-muted)" }}>Ammissione · una discesa</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.9rem", lineHeight: 0.98, textTransform: "uppercase" }}>Prenota la tua immersione</span>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, marginTop: 4 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ds-blu)" }}>03—08 Giu 2026 · Pescheria</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.4rem", color: "var(--ds-corallo)", transform: hov ? "translateX(4px)" : "none", transition: "transform var(--dur-fast) var(--ease-tide)" }}>→</span>
          </span>
        </span>
      </span>
    </button>
  );
}

function InfoCard({ eyebrow, children, accent = "var(--ds-turchese)" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "24px", borderRadius: "var(--radius-md)", background: "var(--ds-osso)", boxShadow: "var(--shadow-card)", borderTop: "2px solid " + accent }}>
      <Eyebrow mark="dot" color="var(--ds-terra-muted)">{eyebrow}</Eyebrow>
      {children}
    </div>
  );
}

function Info({ go }) {
  const [sent, setSent] = React.useState(false);
  const vw = useViewport();
  const narrow = vw <= 900;
  return (
    <div style={{ background: "var(--ds-sabbia)", color: "var(--ds-inchiostro)", minHeight: "100vh" }}>
      <Nav go={go} current="info" />
      <section style={{ padding: "clamp(48px, 7vw, 96px) clamp(20px, 5vw, 64px) clamp(28px,4vw,44px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Eyebrow mark="dot">Info & biglietti</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--type-monument)", textTransform: "uppercase", lineHeight: 0.94, margin: "16px 0 0" }}>Entra</h1>
          <p style={{ fontFamily: "var(--font-poetic)", fontStyle: "italic", fontSize: "var(--type-poetic)", color: "var(--ds-terra-muted)", margin: "6px 0 0" }}>nel mare, senza bagnarti</p>
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px, 5vw, 64px) clamp(56px,8vw,110px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.05fr 0.95fr", gap: "clamp(32px,6vw,72px)", alignItems: "start" }}>
          {/* Colonna sinistra — prenotazione */}
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Eyebrow mark="dot">Prenota</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--type-statement)", lineHeight: 1.05, margin: 0 }}>Tieni il tuo posto nella discesa.</h2>
            </div>
            {sent ? (
              <div style={{ padding: "28px", borderRadius: "var(--radius-md)", background: "var(--ds-osso)", boxShadow: "var(--shadow-card)", borderTop: "2px solid var(--ds-turchese)", maxWidth: 520 }}>
                <Eyebrow mark="dot" color="var(--ds-turchese)">Ci siamo</Eyebrow>
                <p style={{ fontFamily: "var(--font-poetic)", fontStyle: "italic", fontSize: "1.6rem", margin: "10px 0 0" }}>Ti aspettiamo sotto la linea d'acqua.</p>
                <div style={{ marginTop: 18 }}><Button variant="outline" size="sm" onClick={() => setSent(false)}>Prenota un altro posto</Button></div>
              </div>
            ) : (
              <TicketButton onClick={() => setSent(true)} />
            )}

            <InfoCard eyebrow="Immersione guidata">
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[["Chi", "Solo adulti"], ["Profondità", "25 metri"], ["Accompagnamento", "Con guida certificata"]].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "11px 0", borderBottom: "1px solid var(--ds-hairline-terra)" }}>
                    <Eyebrow color="var(--ds-terra-muted)">{k}</Eyebrow>
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "1rem" }}>{v}</span>
                  </div>
                ))}
              </div>
            </InfoCard>

            <InfoCard eyebrow="Prenotazione scuole" accent="var(--ds-oro)">
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--type-body)", lineHeight: 1.55, color: "var(--ds-inchiostro)", margin: 0, opacity: 0.9 }}>
                Percorsi didattici dedicati alle classi: visita alla Stanza Marina, racconto del reef e laboratorio Ex Voto. Su prenotazione, con tariffe agevolate per gruppi.
              </p>
              <div style={{ marginTop: 4 }}><Button variant="signature" size="sm" onClick={() => setSent(true)}>Prenota per la classe</Button></div>
            </InfoCard>
          </div>

          {/* Colonna destra — logistica */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "2px solid var(--ds-inchiostro)" }}>
            {[["Dove", "Pescheria Comunale, Santa Margherita Ligure"], ["Quando", "03—08 Giugno 2026"], ["Atto I · Forma", "03—04 GIU · Workshop · Pescheria"], ["Atto II · Sole", "08 GIU · Talk · Piazza del Sole"], ["Atto III · Mare", "08 GIU · 17:00 · Stanza Marina"], ["Accessibilità", "Sala al piano terra, accesso libero"]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", flexDirection: "column", gap: 6, padding: "18px 4px", borderBottom: "1px solid var(--ds-hairline-terra)" }}>
                <Eyebrow color="var(--ds-terra-muted)">{k}</Eyebrow>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "1.05rem" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

Object.assign(window, { ATTI, SCHEDULE, DayBlock, Home, Programma, Atto, TicketButton, InfoCard, Info });
