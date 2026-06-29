/* DEEPSANTA — schermata Ex Voto Vivente.
   Tre kit per costruire a mano un ex voto contemporaneo che continua a vivere nel reef.
   Render reali: cartella uploads (grafiche scatole + render ex voto). */

const U = "./img/";

const KITS = {
  buonvento: {
    id: "buonvento", name: "Buon Vento", tagline: "Il tuo gesto, il nostro reef.",
    cover: U + "graficabuonvento-01.png", bg: "#EDEBDD", accent: "var(--ds-oro)",
    simboli: "Simboli del buon viaggio — la stella di navigazione, il vento, la rotta.",
  },
  mareunisce: {
    id: "mareunisce", name: "Il Mare ci Unisce", tagline: "Il reef si costruisce insieme.",
    cover: U + "graficailmareciunisce-01.png", bg: "#003060", accent: "var(--ds-turchese)",
    simboli: "Simboli del legame — i nodi, le mani, i frammenti condivisi.",
  },
  gratitudine: {
    id: "gratitudine", name: "Gratitudine", tagline: "Un gesto che resta nel reef.",
    cover: U + "graficagratitudine-01.png", bg: "#001012", accent: "var(--ds-turchese)",
    simboli: "Simboli della cura — il cuore, la conchiglia, la luna.",
  },
};

const KIT_CONTENUTO = ["Oblò", "Medaglione", "Rivetto", "Rete a tombolo", "Pizzo fatto a mano", "Perline di vetro riciclato", "Fili di cotone cerato", "Anelli di ottone", "Token NFC"];

const KIT_STEPS = [
  ["01", "Scegli il telaio", "La base in formelle — oblò, medaglione o rivetto — che regge il tuo ex voto."],
  ["02", "Scegli i simboli", "Pesca tra i simboli della devozione, della cura e del fondale."],
  ["03", "Intreccia il tombolo", "Componi i frammenti di pizzo al tombolo fatto a mano."],
  ["04", "Intreccia i fili", "Fili di cotone cerato e perline di vetro riciclato."],
  ["05", "Personalizza e colora", "L'ultimo gesto: il tuo segno. L'ex voto è pronto."],
];

function KitFrame({ kit }) {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1.414 / 1", borderRadius: "var(--radius-md)", overflow: "hidden", background: kit.bg, boxShadow: "var(--shadow-card)" }}>
      <img src={kit.cover} alt={"Kit " + kit.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
    </div>
  );
}

function ExVoto({ go }) {
  const vw = useViewport();
  const narrow = vw <= 900;
  const kitCols = vw <= 560 ? "1fr" : vw <= 900 ? "repeat(2, 1fr)" : "repeat(3, 1fr)";
  return (
    <div style={{ background: "var(--ds-sabbia)", color: "var(--ds-inchiostro)", minHeight: "100vh" }}>
      {/* Hero — registro mare */}
      <div className="registro-mare" data-registro="mare">
        <Nav go={go} current="exvoto" light />
      </div>
      <header className="registro-abisso" data-registro="abisso" style={{ position: "relative", overflow: "hidden", background: "var(--gradient-discesa)", color: "var(--ds-osso)", padding: "clamp(40px, 6vw, 88px) clamp(20px, 5vw, 64px) clamp(48px, 7vw, 96px)" }}>
        <Rays opacity={0.5} />
        <Veil />
        <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto", display: "flex", flexDirection: "column", gap: 22 }}>
          <Eyebrow mark="dot" color="var(--ds-turchese)">Ex Voto Vivente</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--type-monument)", textTransform: "uppercase", lineHeight: 0.92, letterSpacing: "0.01em", margin: 0, color: "var(--ds-osso)" }}>Ex Voto</h1>
          <p style={{ fontFamily: "var(--font-poetic)", fontStyle: "italic", fontSize: "var(--type-poetic)", color: "var(--ds-su-blu)", margin: 0, maxWidth: 560 }}>
            un voto al mare che continua a vivere sott'acqua
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--type-body-lg)", lineHeight: 1.62, color: "var(--ds-su-blu)", margin: "6px 0 0", maxWidth: "56ch" }}>
            Da Santa Margherita i marinai partivano lasciando a terra un ex voto di buon auspicio. DeepSanta riprende quel gesto: un ex voto contemporaneo, costruito a mano, che viene affidato al reef artificiale e ne diventa parte. Devozione e cura dell'ecosistema, nello stesso oggetto.
          </p>
        </div>
      </header>

      {/* Concept + collezione */}
      <section style={{ padding: "clamp(48px, 7vw, 96px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1.05fr", gap: "clamp(32px, 6vw, 72px)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Eyebrow mark="dot">Cosa è</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--type-statement)", lineHeight: 1.05, margin: 0 }}>
              Una cassa toracica che protegge la speranza e cura il mare.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--type-body)", lineHeight: 1.62, color: "var(--ds-inchiostro)", margin: 0, opacity: 0.88, maxWidth: "52ch" }}>
              Ogni kit è una borsa in rete a tombolo a forma di cuore, ispirata al significato dell'ex voto. Dentro, i simboli della devozione e del fondale, perline di vetro riciclato e un token che ti lega al reef. Lo costruisci tu, e poi lo lasci al mare.
            </p>
          </div>
          <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-card)", background: "var(--ds-osso)" }}>
            <img src={U + "kit2.png"} alt="I tre kit DeepSanta Ex Voto" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
        <div style={{ maxWidth: 1100, margin: "36px auto 0", display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
          <Eyebrow color="var(--ds-terra-muted)" style={{ marginRight: 6 }}>Nel kit</Eyebrow>
          {KIT_CONTENUTO.map((c) => (
            <span key={c} style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ds-blu)", background: "color-mix(in srgb, var(--ds-turchese) 12%, transparent)", padding: "7px 12px", borderRadius: "var(--radius-pill)" }}>{c}</span>
          ))}
        </div>
      </section>

      {/* I tre kit */}
      <section style={{ padding: "0 clamp(20px, 5vw, 64px) clamp(48px, 7vw, 96px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 30 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--type-monument)", textTransform: "uppercase", lineHeight: 0.94, margin: 0 }}>Tre kit</h2>
            <Eyebrow color="var(--ds-terra-muted)">Una collezione, tre devozioni</Eyebrow>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: kitCols, gap: "clamp(18px, 2.4vw, 28px)" }}>
            {Object.values(KITS).map((kit) => (
              <div key={kit.id} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <KitFrame kit={kit} />
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-mono)", fontSize: "var(--type-technical)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ds-terra-muted)" }}>
                    <i style={{ width: 9, height: 9, background: kit.accent, display: "block" }} />{kit.name}
                  </span>
                  <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--type-small)", lineHeight: 1.5, color: "var(--ds-inchiostro)", opacity: 0.8 }}>{kit.simboli}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dentro il kit */}
      <section style={{ background: "var(--ds-osso)", padding: "clamp(48px, 7vw, 96px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: narrow ? "1fr" : "1.1fr 0.9fr", gap: "clamp(32px, 6vw, 72px)", alignItems: "center" }}>
          <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-card)", background: "var(--ds-blu)" }}>
            <img src={U + "kit1.png"} alt="Dentro il kit Ex Voto" style={{ width: "100%", display: "block" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Eyebrow mark="dot">Dentro la scatola</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--type-statement)", lineHeight: 1.05, margin: 0 }}>
              Tutto pronto, in ordine come un piccolo altare.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--type-body)", lineHeight: 1.6, color: "var(--ds-inchiostro)", margin: 0, opacity: 0.86, maxWidth: "46ch" }}>
              Il telaio — oblò, medaglione, rivetto — il pizzo al tombolo fatto a mano, i fili di cotone cerato, le perline di vetro riciclato, gli anelli di ottone e i simboli stampati. Ogni elemento ha il suo posto, pronto da intrecciare.
            </p>
          </div>
        </div>
      </section>

      {/* Come si costruisce */}
      <section style={{ padding: "clamp(48px, 7vw, 96px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 0.85fr", gap: "clamp(32px, 6vw, 72px)", alignItems: "start" }}>
          <div>
            <Eyebrow mark="dot">Come si costruisce</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--type-statement)", lineHeight: 1.05, margin: "16px 0 30px" }}>
              Cinque gesti, e l'ex voto è tuo.
            </h2>
            <div style={{ borderTop: "2px solid var(--ds-inchiostro)" }}>
              {KIT_STEPS.map(([n, t, d]) => (
                <div key={n} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(16px,3vw,32px)", alignItems: "baseline", padding: "20px 4px", borderBottom: "1px solid var(--ds-hairline-terra)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "1.4rem", color: "var(--ds-corallo)" }}>{n}</span>
                  <span style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem", textTransform: "uppercase", lineHeight: 1 }}>{t}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--type-body)", color: "var(--ds-terra-muted)", lineHeight: 1.5 }}>{d}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-card)", position: narrow ? "static" : "sticky", top: 88, background: "#2A2520" }}>
            <img src={U + "exvoto1.png"} alt="Il banco di lavoro dell'ex voto" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </section>

      {/* Galleria digitale — registro abisso */}
      <section className="registro-abisso" data-registro="abisso" style={{ position: "relative", overflow: "hidden", background: "var(--ds-abisso)", color: "var(--ds-su-abisso)", padding: "clamp(48px, 7vw, 96px) clamp(20px, 5vw, 64px)" }}>
        <Rays opacity={0.32} />
        <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: narrow ? "1fr" : "0.95fr 1.05fr", gap: "clamp(32px, 6vw, 72px)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Eyebrow mark="dot" color="var(--ds-turchese)">Galleria digitale</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--type-statement)", lineHeight: 1.04, margin: 0, color: "var(--ds-osso)" }}>
              Il tuo voto resta nel reef. Tu lo segui da casa.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--type-body)", lineHeight: 1.6, margin: 0 }}>
              Ogni ex voto porta un token NFC: avvicinalo al telefono e si apre la webcam puntata sul reef. Una foto entra nella galleria digitale di DeepSanta — un muro condiviso di voti che, sott'acqua, diventano vita.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
              <Button variant="primary" onClick={() => go("reef")}>Guarda il reef live →</Button>
              <Button variant="outline" onClick={() => go("info")} style={{ color: "var(--ds-osso)", borderColor: "var(--ds-osso)" }}>Prenota</Button>
            </div>
          </div>
          <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-card-mare)", background: "var(--ds-blu)" }}>
            <img src={U + "exvoto3.png"} alt="Ex voto con medaglione DeepSanta" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

Object.assign(window, { KITS, KIT_CONTENUTO, KIT_STEPS, KitFrame, ExVoto });
