/* ============================================================
   ARKANO STORE — HOME (/)
   ============================================================ */

// ---- Featured deal card (10,000 GOLDS) — loot box on hover ----
function FeaturedDeal({ className = '' }) {
  return (
    <div className={'loot group relative rounded-[12px] bg-surface overflow-hidden transition-all duration-300 hover:-translate-y-1 ' + className}
      style={{ border: '2px solid #DFBC60', boxShadow: '0 0 50px rgba(223,188,96,0.22)' }}>
      {/* diagonal ribbon */}
      <div className="absolute -right-12 top-6 rotate-45 z-20 px-12 py-1.5 text-[11px] font-bold tracking-[0.14em] uppercase text-white flash"
        style={{ background: '#FF4444', boxShadow: '0 4px 14px rgba(255,68,68,0.4)' }}>Oferta destacada</div>
      <HexGrid opacity={0.1} />
      <div className="relative p-7 sm:p-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="font-head font-bold uppercase tracking-[0.05em] text-[19px]" style={{ color: '#E0413B', textShadow: '0 0 18px rgba(224,65,59,0.5)' }}>Blood Strike</span>
        </div>
        <div className="text-[12px] tracking-[0.16em] uppercase text-goldmut mb-5">Tienda oficial Arkano</div>

        <div className="relative inline-block transition-transform duration-300 group-hover:scale-105">
          <div className="font-head font-bold uppercase leading-[0.85] shimmer" style={{ fontSize: 'clamp(46px,9vw,72px)' }}>10,000</div>
          <div className="font-head font-bold uppercase tracking-[0.18em] text-gold text-[22px] -mt-1">Golds</div>
        </div>
        <div className="mt-3"><Pill color="amber" className="!text-[11px]">⚡ Incluye +1500 BONUS</Pill></div>

        <div className="mt-6 flex flex-col items-center">
          <div className="text-[16px] font-medium" style={{ color: '#FF4444' }}><span className="text-[11px] tracking-[0.12em] uppercase mr-1.5">Antes</span><span className="line-through">$99.99</span></div>
          <div className="text-[12px] tracking-[0.16em] uppercase text-goldsoft mt-2">Por solo</div>
          <div className="font-head font-bold leading-none text-gold mt-0.5" style={{ fontSize: 'clamp(40px,8vw,54px)', textShadow: '0 0 30px rgba(223,188,96,0.35)' }}>$79.99</div>
          <div className="mt-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase" style={{ color: '#43AABE' }}>Solo en Arkano Store</div>
        </div>

        <BtnBlue href={waLink(orderMsg('Blood Strike', '10,000 Golds', '79.99'))} big className="mt-6 w-full">Pedir ahora</BtnBlue>
      </div>
    </div>
  );
}

function Collapse({ open, children }) {
  return (
    <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: open ? '1fr' : '0fr', opacity: open ? 1 : 0 }}>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

// Collapsible hero deal — peeks translucent so the mascot shows through,
// expands on hover/approach (or tap on mobile) to reveal the full offer.
function HeroDeal() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative w-full max-w-[400px]"
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onClick={() => setOpen(true)}>
      <div className={'loot relative rounded-[14px] overflow-hidden cursor-pointer transition-all duration-300 ' + (open ? '-translate-y-1' : '')}
        style={{
          border: '2px solid ' + (open ? '#DFBC60' : 'rgba(223,188,96,0.5)'),
          background: open ? '#15161E' : 'rgba(15,16,24,0.42)',
          backdropFilter: 'blur(7px)', WebkitBackdropFilter: 'blur(7px)',
          boxShadow: open ? '0 0 55px rgba(223,188,96,0.3)' : '0 12px 40px rgba(0,0,0,0.45)',
        }}>
        {open && <HexGrid opacity={0.1} />}
        <div className="relative px-6 pt-5 pb-5 text-center">
          <div className="flex justify-center mb-3"><Pill color="red" className="flash !text-[10px]">🔥 Oferta destacada</Pill></div>
          <div className="font-head font-bold uppercase tracking-[0.04em] text-[18px]" style={{ color: '#E0413B', textShadow: '0 0 16px rgba(224,65,59,0.45)' }}>Blood Strike</div>
          <div className="text-[10px] tracking-[0.16em] uppercase text-goldmut">Tienda oficial Arkano</div>

          <div className="mt-3 font-head font-bold uppercase leading-[0.85] shimmer whitespace-nowrap" style={{ fontSize: 'clamp(40px,6.5vw,54px)' }}>10,000</div>
          <div className="font-head font-bold uppercase tracking-[0.18em] text-gold text-[17px] -mt-0.5">Golds</div>

          {/* revealed on approach: bonus + antes */}
          <Collapse open={open}>
            <div className="pt-3 flex flex-col items-center gap-2">
              <Pill color="amber" className="!text-[10px]">⚡ Incluye +1500 Bonus</Pill>
              <div className="text-[15px] font-medium" style={{ color: '#FF4444' }}><span className="text-[10px] tracking-[0.12em] uppercase mr-1.5">Antes</span><span className="line-through">$99.99</span></div>
            </div>
          </Collapse>

          <div className="mt-3 text-[11px] tracking-[0.16em] uppercase text-goldsoft">Por solo</div>
          <div className="font-head font-bold leading-none text-gold" style={{ fontSize: 'clamp(38px,7vw,50px)', textShadow: '0 0 26px rgba(223,188,96,0.35)' }}>$79.99</div>

          {/* revealed on approach: brand line + CTA */}
          <Collapse open={open}>
            <div className="pt-3">
              <div className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-3" style={{ color: '#43AABE' }}>Solo en Arkano Store</div>
              <BtnBlue href={waLink(orderMsg('Blood Strike', '10,000 Golds', '79.99'))} className="w-full">Pedir ahora</BtnBlue>
            </div>
          </Collapse>

          {/* hint when collapsed */}
          <Collapse open={!open}>
            <div className="pt-3 flex items-center justify-center gap-1.5 text-[11px] tracking-[0.08em] uppercase text-goldmut">
              <span className="animate-bounce">↑</span> Acércate para ver la oferta
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 50% 0%,#1A1508 0%,#0B0C11 60%)' }}>
      {/* gold glow + particles + mascot */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 28%,rgba(223,188,96,0.12) 0%,transparent 70%)' }}></div>
      <ParticleField />
      <MascotImg className="hidden lg:block absolute right-[1%] bottom-0 h-[98%] w-auto pointer-events-none select-none" style={{ opacity: 0.15, maskImage: 'linear-gradient(90deg,transparent,#000 46%)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 46%)' }} />

      <div className="relative mx-auto max-w-[1240px] px-4 md:px-6 py-16 lg:py-24 grid lg:grid-cols-[1.18fr_0.82fr] gap-10 items-center">
        {/* LEFT */}
        <div className="text-center lg:text-left">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
            <Pill color="amber">Abierto 24h</Pill>
            <OpenBadge />
          </div>
          <h1 className="font-head font-bold uppercase tracking-[0.04em] leading-[0.95]">
            <span className="shimmer block" style={{ fontSize: 'clamp(42px,6.4vw,70px)' }}>Recarga tu juego</span>
            <span className="shimmer block" style={{ fontSize: 'clamp(42px,6.4vw,70px)' }}>en segundos.</span>
          </h1>
          <p className="mt-5 text-[16px] md:text-[17px] text-off leading-relaxed max-w-[560px] mx-auto lg:mx-0">
            Blood Strike, EA Play, Forza y más — al mejor precio, entrega inmediata y compra 100% garantizada. <span className="text-goldsoft font-semibold">Solo en Arkano Store.</span>
          </p>
          <div className="mt-7 flex justify-center lg:justify-start"><TrustMicro /></div>
          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center lg:justify-start">
            <BtnBlue to="#/juegos" big className="shrink-0">⚡ Recargar ahora</BtnBlue>
            <BtnGold to="#/paquetes" big className="shrink-0">Ver paquetes</BtnGold>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full flex justify-center lg:justify-end items-end min-h-[420px] lg:min-h-[480px]">
          <HeroDeal />
        </div>
      </div>
    </section>
  );
}

function GamesStrip() {
  return (
    <section className="relative bg-surface py-14" style={{ borderTop: '1px solid rgba(223,188,96,0.25)', borderBottom: '1px solid rgba(223,188,96,0.25)' }}>
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <div className="flex items-end justify-between gap-4 mb-7">
          <h2 className="font-head font-bold uppercase tracking-[0.04em] shimmer" style={{ fontSize: 'clamp(28px,4.5vw,44px)' }}>Juegos disponibles</h2>
          <L to="#/juegos" className="hidden sm:inline-flex items-center gap-1.5 text-[14px] font-semibold text-goldmut hover:text-gold transition shrink-0">Ver todos <Icon.Arrow size={16} /></L>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 snap-x">
          {GAMES.slice(0, 6).map((g) => (
            <div key={g.id} className="snap-start shrink-0 w-[230px]"><GameCard game={g} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BloodStrikeSpotlight() {
  return (
    <section className="relative overflow-hidden py-20" style={{ background: '#0B0C11' }}>
      <HexGrid opacity={0.16} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 25% 40%,rgba(180,20,20,0.07),transparent 60%)' }}></div>
      <div className="relative mx-auto max-w-[1240px] px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: pricing */}
        <div>
          <Pill color="gold">Tienda oficial</Pill>
          <h2 className="mt-3 font-head font-bold uppercase tracking-[0.04em] shimmer leading-[1]" style={{ fontSize: 'clamp(36px,5.5vw,54px)' }}>Blood Strike</h2>
          <p className="mt-2 text-off text-[15px]">Ofertas exclusivas de oro y pases — <span className="text-goldsoft">¡Hasta agotar stock!</span></p>
          <div className="mt-6"><BSPriceTable /></div>
          <L to="#/bloodstrike" className="mt-5 inline-flex items-center gap-2 font-head font-bold uppercase tracking-wide text-gold hover:text-warm transition">
            Ver página completa de Blood Strike <Icon.Arrow size={18} />
          </L>
        </div>
        {/* RIGHT: art + bonus chart */}
        <div className="space-y-5">
          <div className="relative rounded-[10px] overflow-hidden border border-borderd" style={{ background: 'radial-gradient(ellipse at 50% 30%,#1A0808,#0B0C11)', minHeight: 240 }}>
            <HexGrid opacity={0.1} />
            <div className="relative p-8 flex flex-col items-center justify-center text-center h-full" style={{ minHeight: 240 }}>
              <span className="font-head font-bold uppercase leading-[0.85] text-center" style={{ fontSize: 'clamp(40px,7vw,64px)', color: '#E0413B', textShadow: '0 0 30px rgba(224,65,59,0.5)', transform: 'skewX(-6deg)' }}>Blood<br />Strike</span>
              <div className="mt-3 font-head font-bold uppercase tracking-[0.1em] text-warm text-[20px] italic">¡Locuraaa!!</div>
            </div>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg,transparent 40%,rgba(11,12,17,0.6))' }}></div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span style={{ color: '#FFB800' }}>⚡</span>
              <h3 className="font-head font-bold uppercase tracking-[0.05em] text-warm text-[17px]">Striker — Obtén más oro al recargar</h3>
            </div>
            <BSBonusTable />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ steps }) {
  const data = steps || [
    { n: '1', icon: <Icon.Gamepad size={26} />, color: '#DFBC60', t: 'Elige tu recarga', d: 'Selecciona el juego y el paquete que necesitas.' },
    { n: '2', icon: <Icon.Message size={26} />, color: '#43AABE', t: 'Escríbenos', d: 'Envíanos tu pedido por WhatsApp con tu ID de jugador.' },
    { n: '3', icon: <Icon.Card size={26} />, color: '#DFBC60', t: 'Realiza el pago', d: 'Transfiere por Banco Guayaquil, Internacional o del Austro.' },
    { n: '4', icon: <Icon.Zap size={26} />, color: '#FFB800', t: 'Recibe en segundos', d: 'Confirmamos el pago y acreditamos tu recarga al instante.' },
  ];
  return (
    <section className="relative overflow-hidden py-20" style={{ background: '#0B0C11' }}>
      <LightningWatermark className="w-[340px] h-[340px] right-[4%] top-[10%]" />
      <div className="relative mx-auto max-w-[1240px] px-4 md:px-6">
        <SectionTitle kicker="Rápido y simple">¿Cómo funciona?</SectionTitle>
        <div className="relative mt-14 grid gap-6 md:grid-cols-4">
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px" style={{ backgroundImage: 'repeating-linear-gradient(90deg,#DFBC60 0 10px,transparent 10px 20px)', opacity: 0.4 }}></div>
          {data.map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="mx-auto grid place-items-center rounded-full font-head font-bold text-void text-[24px] relative z-10" style={{ width: 56, height: 56, background: 'linear-gradient(135deg,#DFBC60,#AE733B)' }}>{s.n}</div>
              <div className="mt-4 mx-auto grid place-items-center" style={{ color: s.color }}>{s.icon}</div>
              <h3 className="mt-3 font-head font-bold uppercase tracking-wide text-warm text-[18px]">{s.t}</h3>
              <p className="mt-2 text-[14px] text-off leading-relaxed max-w-[230px] mx-auto">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center"><Pill color="green" className="!text-[12px] !px-4 !py-1.5">🟢 Abierto 24 horas — pedidos a cualquier hora</Pill></div>
      </div>
    </section>
  );
}

function TrustSection() {
  const cards = [
    { e: '⚡', t: 'Recargas en Segundos', d: 'Acreditamos tu recarga en menos de 5 minutos tras confirmar el pago.' },
    { e: '🔑', t: 'Juegos al Mejor Precio', d: 'Precios más bajos del mercado. Compara y compruébalo tú mismo.' },
    { e: '🔥', t: 'Precios Imbatibles', d: 'Ofertas semanales exclusivas. Síguenos en redes para no perderte nada.' },
    { e: '🛡️', t: 'Compra 100% Garantizada', d: 'Si hay algún problema, te devolvemos tu dinero o lo resolvemos de inmediato.' },
  ];
  return (
    <section className="relative overflow-hidden py-20 bg-surface">
      <HexGrid opacity={0.14} />
      <div className="relative mx-auto max-w-[1240px] px-4 md:px-6">
        <SectionTitle kicker="¿Por qué Arkano?">Somos los mejores</SectionTitle>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.t} className="loot rounded-[8px] bg-void p-6 transition-all duration-200 hover:-translate-y-1 hover:[box-shadow:0_14px_40px_rgba(223,188,96,0.14)]" style={{ borderTop: '2px solid #DFBC60', border: '1px solid #2A2B38', borderTopWidth: '2px', borderTopColor: '#DFBC60' }}>
              <div className="text-[34px] leading-none">{c.e}</div>
              <h3 className="mt-4 font-head font-bold uppercase tracking-wide text-warm text-[19px] leading-tight">{c.t}</h3>
              <p className="mt-2.5 text-[14px] text-off leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PaymentSection() {
  return (
    <section className="relative py-20" style={{ background: '#0B0C11' }}>
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <div className="rounded-[14px] bg-surface border border-borderd p-8 md:p-12">
          <div className="text-center">
            <h3 className="font-head font-bold uppercase tracking-[0.05em] text-gold" style={{ fontSize: 'clamp(24px,4vw,34px)' }}>Métodos de pago aceptados</h3>
            <p className="mt-2 text-off text-[15px]">Transfiere o deposita desde cualquiera de estos bancos.</p>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {BANKS.map((b) => (
              <div key={b} className="rounded-[10px] bg-elevated border border-gold/30 p-6 text-center">
                <span className="mx-auto grid place-items-center rounded-lg text-gold" style={{ width: 56, height: 56, background: 'rgba(223,188,96,0.08)' }}><Icon.Bank size={30} /></span>
                <div className="mt-4 font-head font-bold uppercase tracking-wide text-warm text-[19px]">{b}</div>
                <div className="mt-2 text-[13px] text-off">Transferencia bancaria</div>
                <div className="text-[13px] text-off">Depósito en efectivo</div>
                <div className="mt-4 flex justify-center"><Pill color="amber" className="!text-[10px]">Disponible 24h</Pill></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars({ n = 5 }) {
  return (
    <div className="flex gap-0.5" style={{ color: '#DFBC60' }}>
      {Array.from({ length: n }).map((_, i) => <Icon.Star key={i} size={15} fill="#DFBC60" />)}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="relative py-20 bg-surface">
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <SectionTitle kicker="Comunidad gamer">Lo que dicen los gamers</SectionTitle>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.tag} className="rounded-[8px] bg-void p-6" style={{ borderLeft: '3px solid #43AABE', border: '1px solid #2A2B38', borderLeftWidth: '3px', borderLeftColor: '#43AABE' }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-head font-bold text-warm text-[17px] tracking-wide">{t.tag}</div>
                  <div className="text-[12px] text-goldmut uppercase tracking-[0.08em]">{t.game}</div>
                </div>
                <Stars />
              </div>
              <p className="mt-4 text-[14.5px] text-off leading-relaxed">“{t.text}”</p>
              <div className="mt-4 flex items-center justify-between text-[12px]">
                <Pill color="gold" className="!text-[10px]">Recargó {t.bought}</Pill>
                <span className="text-goldmut">Hace {t.days} día{t.days > 1 ? 's' : ''}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(135deg,#1A1000,#2A1800)' }}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.06 }} aria-hidden="true">
        <defs><pattern id="diag" width="34" height="34" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="34" stroke="#DFBC60" strokeWidth="6" /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>
      <MascotImg className="hidden md:block absolute right-[3%] bottom-0 h-[120%] w-auto pointer-events-none" style={{ opacity: 0.14 }} />
      <div className="relative mx-auto max-w-[1240px] px-4 md:px-6 text-center">
        <h2 className="font-head font-bold uppercase tracking-[0.03em] shimmer leading-[0.95]" style={{ fontSize: 'clamp(40px,7vw,72px)' }}>¿Listo para recargar?</h2>
        <p className="mt-4 text-[17px] text-warm">Escríbenos ahora — atención inmediata las 24 horas.</p>
        <div className="mt-8 flex justify-center"><BtnWA href={waLink()} big>Escribir por WhatsApp</BtnWA></div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="page-enter">
      <Hero />
      <LiveTicker />
      <GamesStrip />
      <BloodStrikeSpotlight />
      <Divider />
      <HowItWorks />
      <TrustSection />
      <PaymentSection />
      <Testimonials />
      <CTABanner />
    </div>
  );
}

Object.assign(window, { HomePage, FeaturedDeal, HowItWorks, Stars, PaymentSection });
