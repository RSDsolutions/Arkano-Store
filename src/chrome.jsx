/* ============================================================
   ARKANO STORE — CHROME: Navbar, Footer, Floating WhatsApp
   ============================================================ */

function Navbar({ route }) {
  const [open, setOpen] = React.useState(false);
  const isActive = (r) => (r === '#/' ? route === '#/' || route === '' : route.indexOf(r) === 0);

  React.useEffect(() => { setOpen(false); }, [route]);

  return (
    <header className="sticky top-0 z-50">
      <div className="relative bg-void" style={{ borderBottom: '1px solid rgba(223,188,96,0.6)', boxShadow: '0 6px 24px -8px rgba(223,188,96,0.25)' }}>
        <div className="mx-auto max-w-[1240px] px-4 md:px-6 h-[68px] flex items-center justify-between gap-4">
          <L to="#/" className="shrink-0"><Logo size={38} /></L>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <L key={n.route} to={n.route}
                className={'relative px-3 py-2 text-[13.5px] font-semibold tracking-wide transition-colors ' + (isActive(n.route) ? 'text-warm' : 'text-goldmut hover:text-warm')}>
                {n.label}
                {isActive(n.route) && <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full" style={{ background: '#DFBC60' }}></span>}
              </L>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="hidden md:flex items-center gap-2.5">
            <OpenBadge />
            <BtnGold href={waLink('¡Hola Arkano Store! Necesito soporte.')} className="!px-4 !py-2.5">📞 Soporte</BtnGold>
            <BtnBlue to="#/juegos" className="!px-4 !py-2.5">⚡ Recargar</BtnBlue>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(true)} className="lg:hidden text-gold p-1.5" aria-label="Menú">
            <Icon.Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-void flex flex-col page-enter">
          <div className="h-[68px] px-4 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(223,188,96,0.6)' }}>
            <Logo size={36} />
            <button onClick={() => setOpen(false)} className="text-gold p-1.5" aria-label="Cerrar"><Icon.X size={28} /></button>
          </div>
          <nav className="flex-1 flex flex-col justify-center gap-1 px-6">
            {NAV.map((n) => (
              <L key={n.route} to={n.route} onClick={() => setOpen(false)}
                className={'font-head font-bold uppercase tracking-wide py-3 text-[30px] ' + (isActive(n.route) ? 'text-gold' : 'text-warm')}>
                {n.label}
              </L>
            ))}
          </nav>
          <div className="p-6 flex flex-col gap-3" style={{ borderTop: '1px solid rgba(223,188,96,0.3)' }}>
            <OpenBadge className="self-start" />
            <BtnBlue to="#/juegos" big className="w-full" onClick={() => setOpen(false)}>⚡ Recargar Ahora</BtnBlue>
          </div>
        </div>
      )}
    </header>
  );
}

function WhatsAppFloat() {
  return (
    <a href={waLink()} target="_blank" rel="noreferrer"
      className="group fixed z-50 bottom-5 right-5 md:bottom-7 md:right-7 flex items-center">
      <span className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-elevated border border-gold/40 px-3 py-2 text-[13px] font-semibold text-warm opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 hidden md:block">
        ¡Escríbenos! 💬
      </span>
      <span className="wa-ring relative grid place-items-center rounded-full transition-transform duration-200 group-hover:scale-105"
        style={{ width: 60, height: 60, background: '#25D366', border: '2px solid #DFBC60', boxShadow: '0 8px 26px rgba(37,211,102,0.4)' }}>
        <WAGlyph size={32} />
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="relative bg-void mt-0" style={{ borderTop: '1px solid transparent', borderImage: 'linear-gradient(90deg,transparent,#DFBC60,transparent) 1' }}>
      <div className="mx-auto max-w-[1240px] px-4 md:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Logo size={40} />
            <p className="mt-4 text-[14px] text-goldmut leading-relaxed max-w-[260px]">
              Recargas en segundos. Precios imbatibles. Tu tienda de recargas gamer.
            </p>
            <p className="mt-3 text-[13px] text-goldmut leading-relaxed flex items-start gap-2">
              <span className="text-gold mt-0.5"><Icon.Pin size={16} /></span>
              Guayaquil, Ecuador · Riocentro Ceibos · Abierto 24 horas.
            </p>
          </div>

          {/* Games */}
          <div>
            <h4 className="font-head font-bold uppercase tracking-[0.08em] text-warm text-[15px] mb-4">Juegos</h4>
            <ul className="space-y-2.5 text-[14px]">
              {[['Blood Strike', '#/bloodstrike'], ['EA Play', '#/juegos'], ['Forza Horizon 6', '#/juegos'], ['Más juegos', '#/juegos']].map(([t, r]) => (
                <li key={t}><L to={r} className="text-goldmut hover:text-gold transition-colors">{t}</L></li>
              ))}
            </ul>
          </div>

          {/* Store */}
          <div>
            <h4 className="font-head font-bold uppercase tracking-[0.08em] text-warm text-[15px] mb-4">Tienda</h4>
            <ul className="space-y-2.5 text-[14px]">
              {[['Cómo funciona', '#/como-funciona'], ['Paquetes', '#/paquetes'], ['Pagos', '#/como-funciona'], ['Contacto', '#/contacto']].map(([t, r]) => (
                <li key={t}><L to={r} className="text-goldmut hover:text-gold transition-colors">{t}</L></li>
              ))}
            </ul>
          </div>

          {/* Contact / social */}
          <div>
            <h4 className="font-head font-bold uppercase tracking-[0.08em] text-warm text-[15px] mb-4">Contáctanos</h4>
            <BtnWA href={waLink()} className="w-full mb-4">Escríbenos</BtnWA>
            <div className="flex items-center gap-2.5">
              {[Icon.Facebook, Icon.Instagram, Icon.Tiktok].map((I, i) => (
                <a key={i} href="#" className="grid place-items-center rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition" style={{ width: 38, height: 38 }}>
                  <I size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Payment methods row */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid #2A2B38' }}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[12px] font-semibold tracking-[0.1em] uppercase text-goldsoft">Métodos de pago:</span>
            <div className="flex flex-wrap gap-2.5">
              {BANKS.map((b) => <BankBadge key={b} name={b} />)}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{ background: '#080910' }}>
        <div className="mx-auto max-w-[1240px] px-4 md:px-6 py-5 text-[12.5px] text-goldmut flex flex-wrap items-center justify-between gap-2">
          <span>© 2025 Arkano Store · Guayaquil, Ecuador · Recargas de videojuegos.</span>
          <span className="flex items-center gap-1.5"><span style={{ color: '#4CAF50' }}>●</span> Abierto 24 horas</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Navbar, WhatsAppFloat, Footer });
