/* ============================================================
   ARKANO STORE — CATÁLOGO (/juegos) + PAQUETES (/paquetes)
   ============================================================ */

// ---- Shared mini hero for inner pages ----
function PageHero({ kicker, title, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 50% 0%,#1A1508 0%,#0B0C11 70%)' }}>
      <ParticleField />
      <HexGrid opacity={0.1} />
      <div className="relative mx-auto max-w-[1240px] px-4 md:px-6 pt-12 pb-14 text-center">
        {crumb && (
          <div className="flex items-center justify-center gap-2 text-[12px] text-goldmut mb-5 uppercase tracking-[0.1em]">
            <L to="#/" className="hover:text-gold transition">Inicio</L><span>/</span><span className="text-goldsoft">{crumb}</span>
          </div>
        )}
        {kicker && <div className="mb-3 flex justify-center"><Pill color="gold">{kicker}</Pill></div>}
        <h1 className="font-head font-bold uppercase tracking-[0.04em] shimmer leading-[0.95]" style={{ fontSize: 'clamp(40px,7vw,68px)' }}>{title}</h1>
        {subtitle && <p className="mt-4 text-[16px] text-off max-w-[640px] mx-auto leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}

function JuegosPage() {
  const cats = ['Todos', 'Battle Royale', 'RPG', 'Racing', 'Sports', 'FPS'];
  const [cat, setCat] = React.useState('Todos');
  const list = cat === 'Todos' ? GAMES : GAMES.filter((g) => g.cat === cat);
  return (
    <div className="page-enter">
      <PageHero crumb="Catálogo" kicker="Todos los juegos" title="Catálogo de Juegos"
        subtitle="Elige tu juego favorito y recarga al mejor precio. Entrega inmediata, compra 100% garantizada." />
      <section className="py-12">
        <div className="mx-auto max-w-[1240px] px-4 md:px-6">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-10">
            {cats.map((c) => {
              const active = c === cat;
              return (
                <button key={c} onClick={() => setCat(c)}
                  className={'font-head font-bold uppercase tracking-[0.06em] text-[13px] rounded-full px-4 py-2 transition-all ' + (active ? 'text-void' : 'text-goldmut hover:text-warm border border-borderd hover:border-gold/50')}
                  style={active ? { background: 'linear-gradient(135deg,#DFBC60,#AE733B)' } : {}}>
                  {c}
                </button>
              );
            })}
          </div>
          {/* Grid */}
          <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
            {list.map((g) => <GameCard key={g.id} game={g} />)}
          </div>
        </div>
      </section>
      <Divider />
      <PaymentSection />
      <CTABanner />
    </div>
  );
}

// ---- Countdown timer ----
function useCountdown(targetMs) {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  let diff = Math.max(0, targetMs - now);
  const d = Math.floor(diff / 86400000); diff -= d * 86400000;
  const h = Math.floor(diff / 3600000); diff -= h * 3600000;
  const m = Math.floor(diff / 60000); diff -= m * 60000;
  const s = Math.floor(diff / 1000);
  return { d, h, m, s };
}

function CountdownBox({ targetMs }) {
  const { d, h, m, s } = useCountdown(targetMs);
  const pad = (n) => String(n).padStart(2, '0');
  const cells = [[d, 'Días'], [h, 'Hrs'], [m, 'Min'], [s, 'Seg']];
  return (
    <div className="flex gap-2.5">
      {cells.map(([v, l], i) => (
        <div key={i} className="rounded-md bg-void border border-gold/40 px-3 py-2 text-center min-w-[58px]">
          <div className="font-head font-bold text-gold text-[26px] leading-none tabular-nums">{pad(v)}</div>
          <div className="text-[10px] tracking-[0.12em] uppercase text-goldmut mt-1">{l}</div>
        </div>
      ))}
    </div>
  );
}

function WeeklyPromo() {
  // valid until ~5 days from a fixed reference for a stable demo
  const target = React.useMemo(() => Date.now() + 1000 * 60 * 60 * 53 + 1000 * 42, []);
  return (
    <section className="relative py-16" style={{ background: '#0B0C11' }}>
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[14px] p-8 md:p-12" style={{ background: 'linear-gradient(135deg,#1A1000,#2A1800)', border: '2px solid #DFBC60', boxShadow: '0 0 50px rgba(223,188,96,0.18)' }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.07 }} aria-hidden="true">
            <defs><pattern id="diagp" width="34" height="34" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="34" stroke="#DFBC60" strokeWidth="6" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#diagp)" />
          </svg>
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex"><Pill color="amber" className="flash !text-[12px] !px-4 !py-1.5">🔥 Promo de la semana</Pill></span>
              <h3 className="mt-4 font-head font-bold uppercase tracking-[0.03em] shimmer leading-[0.95]" style={{ fontSize: 'clamp(32px,5vw,50px)' }}>Blood Strike<br />10,000 Golds</h3>
              <div className="mt-4 flex items-end gap-4">
                <div className="text-[18px] font-medium" style={{ color: '#FF4444' }}><span className="line-through">$99.99</span></div>
                <div className="font-head font-bold leading-none text-gold" style={{ fontSize: 'clamp(44px,7vw,62px)' }}>$79.99</div>
              </div>
              <div className="mt-2"><Pill color="blue" className="!text-[11px]">Solo en Arkano Store · Incluye +1500 Bonus</Pill></div>
              <div className="mt-7"><BtnBlue href={waLink(orderMsg('Blood Strike', '10,000 Golds (Promo Semana)', '79.99'))} big>⚡ Pedir esta promo</BtnBlue></div>
            </div>
            <div className="lg:justify-self-end">
              <div className="text-[12px] tracking-[0.14em] uppercase text-goldsoft mb-3 text-center lg:text-right">⏳ Válido hasta agotar — termina en:</div>
              <div className="flex justify-center lg:justify-end"><CountdownBox targetMs={target} /></div>
              <div className="mt-6 hidden lg:block"><FeaturedDeal className="max-w-[360px] ml-auto scale-90 origin-right" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PaquetesPage() {
  return (
    <div className="page-enter">
      <PageHero crumb="Paquetes" kicker="Ofertas activas" title="Paquetes & Ofertas"
        subtitle="Todas nuestras recargas y promos en un solo lugar. Pricing al mejor precio del mercado, entrega inmediata." />
      <section className="py-12">
        <div className="mx-auto max-w-[1240px] px-4 md:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map((pk, i) => <PackageCard key={i} pk={pk} />)}
          </div>
        </div>
      </section>
      <WeeklyPromo />
      <CTABanner />
    </div>
  );
}

Object.assign(window, { PageHero, JuegosPage, PaquetesPage, WeeklyPromo, CountdownBox, useCountdown });
