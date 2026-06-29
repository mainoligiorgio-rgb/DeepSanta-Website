/* DEEPSANTA — chrome: navigazione e footer del sito evento. */

function Nav({ go, current, light = false }) {
  const links = [["programma", "Programma"], ["exvoto", "Ex Voto"], ["reef", "Reef"], ["info", "Info & biglietti"]];
  const ink = light ? "var(--ds-osso)" : "var(--ds-inchiostro)";
  const muted = light ? "var(--ds-mare-muted)" : "var(--ds-terra-muted)";
  const isMobile = useIsMobile(820);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { if (!isMobile && open) setOpen(false); }, [isMobile]);

  const navStyle = { position: "sticky", top: 0, zIndex: 30, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "16px clamp(20px, 5vw, 64px)", background: light ? "transparent" : "color-mix(in srgb, var(--ds-sabbia) 86%, transparent)", backdropFilter: light ? "none" : "blur(8px)", borderBottom: light ? "none" : "1px solid var(--ds-hairline-terra)" };

  if (isMobile) {
    return (
      <nav style={navStyle}>
        <Lockup onClick={() => { setOpen(false); go("home"); }} light={light} />
        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}
          style={{ all: "unset", cursor: "pointer", display: "inline-flex", flexDirection: "column", justifyContent: "center", gap: 5, padding: 10, margin: -10 }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", width: 26, height: 2, background: ink, borderRadius: 2, transition: "transform var(--dur) var(--ease-tide), opacity var(--dur) var(--ease-tide)", transform: open ? (i === 0 ? "translateY(7px) rotate(45deg)" : i === 2 ? "translateY(-7px) rotate(-45deg)" : "none") : "none", opacity: open && i === 1 ? 0 : 1 }} />
          ))}
        </button>
        {open && (
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, display: "flex", flexDirection: "column", padding: "6px clamp(20px, 5vw, 64px) 22px", background: light ? "var(--ds-abisso)" : "var(--ds-sabbia)", borderBottom: "1px solid " + (light ? "var(--ds-hairline-mare)" : "var(--ds-hairline-terra)"), boxShadow: "0 20px 36px rgba(0,16,18,0.22)" }}>
            {links.map(([id, label]) => (
              <button key={id} onClick={() => { setOpen(false); go(id); }}
                style={{ all: "unset", cursor: "pointer", padding: "16px 2px", fontFamily: "var(--font-mono)", fontSize: "0.92rem", letterSpacing: "0.14em", textTransform: "uppercase", color: current === id ? "var(--ds-turchese)" : (light ? "var(--ds-osso)" : "var(--ds-inchiostro)"), borderBottom: "1px solid " + (light ? "var(--ds-hairline-mare)" : "var(--ds-hairline-terra)") }}>
                {label}
              </button>
            ))}
            <div style={{ marginTop: 18 }}>
              <Button variant="primary" size="lg" onClick={() => { setOpen(false); go("info"); }} style={{ width: "100%", justifyContent: "center" }}>Prenota</Button>
            </div>
          </div>
        )}
      </nav>
    );
  }

  return (
    <nav style={navStyle}>
      <Lockup onClick={() => go("home")} light={light} />
      <div style={{ display: "flex", alignItems: "center", gap: "clamp(14px, 2.4vw, 30px)" }}>
        {links.map(([id, label]) => (
          <button key={id} onClick={() => go(id)}
            style={{ all: "unset", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: "0.74rem", letterSpacing: "0.14em", textTransform: "uppercase", color: current === id ? "var(--ds-turchese)" : muted, borderBottom: current === id ? "2px solid var(--ds-turchese)" : "2px solid transparent", paddingBottom: 3, transition: "color var(--dur) var(--ease-tide)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ds-turchese)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = current === id ? "var(--ds-turchese)" : muted)}>
            {label}
          </button>
        ))}
        <Button variant="primary" size="sm" onClick={() => go("info")}>Prenota</Button>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="registro-abisso" data-registro="abisso" style={{ position: "relative", overflow: "hidden", background: "var(--ds-abisso)", color: "var(--ds-su-abisso)", padding: "clamp(40px, 6vw, 72px) clamp(20px, 5vw, 64px) 40px" }}>
      <Rays opacity={0.35} />
      <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ maxWidth: 460, display: "flex", flexDirection: "column", gap: 16 }}>
          <WaterlineWordmark text="DEEPSANTA" width={260} above="var(--ds-osso)" />
          <p style={{ fontFamily: "var(--font-poetic)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--ds-su-abisso)", margin: 0 }}>
            scendi, dove rinasce la vita
          </p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Eyebrow color="var(--ds-turchese)">Dove</Eyebrow>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "var(--ds-osso)", lineHeight: 1.6 }}>Pescheria Comunale<br />Santa Margherita Ligure</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Eyebrow color="var(--ds-turchese)">Quando</Eyebrow>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "var(--ds-osso)", lineHeight: 1.6 }}>03—08 Giugno<br />2026</span>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", marginTop: 48, paddingTop: 18, borderTop: "1px solid var(--ds-hairline-mare)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <Eyebrow color="var(--ds-mare-muted)">© 2026 DeepSanta · Una discesa in tre atti</Eyebrow>
        <Eyebrow color="var(--ds-mare-muted)">Instagram · Newsletter · Stampa</Eyebrow>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer });
