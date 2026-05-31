/* ============================================================
   ARKANO STORE — SHARED COMPONENTS
   ============================================================ */

// ---------- Navigation link (hash router) ----------
function L({ to, children, className = '', style, onClick }) {
  return (
    <a href={to} className={className} style={style}
      onClick={(e) => { if (onClick) onClick(e); window.scrollTo({ top: 0 }); }}>
      {children}
    </a>
  );
}

// ---------- Buttons ----------
function BtnBlue({ children, href, to, className = '', big = false }) {
  const cls = 'group inline-flex items-center justify-center gap-2 whitespace-nowrap font-head font-bold tracking-[0.04em] uppercase rounded-md ' +
    'text-void transition-all duration-200 hover:brightness-110 hover:scale-[1.02] ' +
    (big ? 'text-lg px-7 py-4 ' : 'text-sm px-5 py-3 ') + className;
  const st = { background: 'linear-gradient(135deg,#43AABE,#2A8A9E)', boxShadow: '0 6px 22px rgba(67,170,190,0.28)' };
  if (to) return <L to={to} className={cls} style={st}>{children}</L>;
  return <a href={href} target={href ? '_blank' : undefined} rel="noreferrer" className={cls} style={st}>{children}</a>;
}

function BtnGold({ children, href, to, className = '', big = false }) {
  const cls = 'inline-flex items-center justify-center gap-2 whitespace-nowrap font-head font-bold tracking-[0.04em] uppercase rounded-md ' +
    'text-gold border border-gold/60 bg-transparent transition-all duration-200 hover:bg-gold/10 hover:border-gold ' +
    (big ? 'text-lg px-7 py-4 ' : 'text-sm px-5 py-3 ') + className;
  if (to) return <L to={to} className={cls}>{children}</L>;
  return <a href={href} target={href ? '_blank' : undefined} rel="noreferrer" className={cls}>{children}</a>;
}

function BtnWA({ children, href, className = '', big = false }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className={'inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-head font-bold tracking-[0.04em] uppercase rounded-md text-white transition-all duration-200 hover:brightness-110 hover:scale-[1.02] ' + (big ? 'text-lg px-7 py-4 ' : 'text-sm px-5 py-3 ') + className}
      style={{ background: '#25D366', boxShadow: '0 6px 22px rgba(37,211,102,0.3)' }}>
      <WAGlyph size={big ? 24 : 19} /> {children}
    </a>
  );
}

// ---------- Badges ----------
function Pill({ children, color = 'amber', className = '', icon }) {
  const map = {
    amber: { c: '#FFB800', bg: 'rgba(255,184,0,0.12)', b: 'rgba(255,184,0,0.4)' },
    green: { c: '#4CAF50', bg: 'rgba(76,175,80,0.12)', b: 'rgba(76,175,80,0.4)' },
    blue: { c: '#43AABE', bg: 'rgba(67,170,190,0.12)', b: 'rgba(67,170,190,0.4)' },
    gold: { c: '#DFBC60', bg: 'rgba(223,188,96,0.1)', b: 'rgba(223,188,96,0.4)' },
    red: { c: '#FF4444', bg: 'rgba(255,68,68,0.12)', b: 'rgba(255,68,68,0.45)' },
  }[color];
  return (
    <span className={'inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase ' + className}
      style={{ color: map.c, background: map.bg, border: '1px solid ' + map.b }}>
      {icon}{children}
    </span>
  );
}

function OpenBadge({ className = '' }) {
  return (
    <span className={'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.1em] uppercase ' + className}
      style={{ color: '#4CAF50', background: 'rgba(76,175,80,0.1)', border: '1px solid rgba(76,175,80,0.4)' }}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#4CAF50' }}></span>
        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#4CAF50' }}></span>
      </span>
      Abierto 24h
    </span>
  );
}

// ---------- Section title (shimmer H2 + triangle motif) ----------
function SectionTitle({ kicker, children, center = true, motif = true }) {
  return (
    <div className={'relative ' + (center ? 'text-center' : '')}>
      {motif && <TriangleMotif className={'w-48 h-40 -top-10 ' + (center ? 'left-1/2 -translate-x-1/2' : '-left-6')} opacity={0.08} />}
      {kicker && <div className="mb-3"><Pill color="gold">{kicker}</Pill></div>}
      <h2 className="relative font-head font-bold uppercase tracking-[0.04em] shimmer leading-[1.02]"
        style={{ fontSize: 'clamp(32px,5vw,50px)' }}>{children}</h2>
      <div className={'mt-4 h-px ' + (center ? 'mx-auto w-24' : 'w-24')}
        style={{ background: 'linear-gradient(90deg,#DFBC60,transparent)' }}></div>
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full" style={{ background: 'linear-gradient(90deg,transparent,rgba(223,188,96,0.4),transparent)' }}></div>;
}

// ---------- Price block (ANTES / POR SOLO) ----------
function PriceBlock({ antes, price, size = 'md', align = 'left' }) {
  const ps = { sm: 26, md: 32, lg: 40, xl: 52 }[size];
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      {antes && (
        <div className="text-[15px] font-medium" style={{ color: '#FF4444' }}>
          <span className="text-[11px] tracking-[0.12em] uppercase mr-1.5 align-middle">Antes</span>
          <span className="line-through">${antes}</span>
        </div>
      )}
      <div className="text-[11px] tracking-[0.14em] uppercase text-goldsoft mb-0.5">Por solo</div>
      <div className="font-head font-bold leading-none text-gold" style={{ fontSize: ps }}>${price}</div>
    </div>
  );
}

// ---------- Game tile artwork (placeholder, per-game tint) ----------
function GameArt({ game, h = 130 }) {
  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: h, background: 'radial-gradient(ellipse at 50% 40%,' + game.tint + ',#0B0C11)' }}>
      <HexGrid opacity={0.12} />
      <span className="font-head font-bold uppercase tracking-tight text-center px-3 leading-[0.92] relative"
        style={{ fontSize: Math.min(34, 360 / game.name.length), color: game.accent, opacity: 0.92, textShadow: '0 0 24px ' + game.accent + '55' }}>
        {game.name}
      </span>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,transparent 35%,rgba(11,12,17,0.92) 100%)' }}></div>
      <span className="absolute top-2 right-2 font-head font-bold text-[40px] opacity-[0.08]" style={{ color: game.accent }}>{game.abbr}</span>
    </div>
  );
}

// ---------- Game card (catalog) ----------
function GameCard({ game }) {
  const to = game.route || '#/paquetes';
  return (
    <L to={to} className="loot group block rounded-[10px] overflow-hidden bg-surface border border-borderd transition-all duration-200 hover:-translate-y-1 hover:border-gold"
      style={{ '--tw-shadow': '0 0 0' }}>
      <div className="group-hover:[box-shadow:0_14px_40px_rgba(223,188,96,0.18)] rounded-[10px]">
        <GameArt game={game} />
        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-head font-bold text-warm text-[18px] uppercase tracking-wide leading-tight">{game.name}</h3>
          </div>
          <div className="mt-2 flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase rounded-full px-2.5 py-0.5 text-goldmut border border-borderd">{game.genre}</span>
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase" style={{ color: '#FFB800' }}>{game.packs} paquetes</span>
          </div>
          <div className="mt-3 flex items-end justify-between">
            <div>
              <div className="text-[10px] tracking-[0.12em] uppercase text-goldmut">Desde</div>
              <div className="font-head font-bold text-gold text-[24px] leading-none">{game.from}</div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[13px] font-head font-bold uppercase tracking-wide text-void rounded-md px-3.5 py-2"
              style={{ background: 'linear-gradient(135deg,#43AABE,#2A8A9E)' }}>
              Ver <Icon.Arrow size={15} />
            </span>
          </div>
        </div>
      </div>
    </L>
  );
}

// ---------- Package deal card (loot box) ----------
function PackageCard({ pk }) {
  const g = (window.GAMES || []).find((x) => x.id === pk.gameId) || {};
  const off = pk.antes ? Math.round((1 - parseFloat(pk.price) / parseFloat(pk.antes)) * 100) : null;
  const showBonus = pk.bonus && /bonus/i.test(pk.bonus);
  return (
    <div className="loot group relative rounded-[12px] overflow-hidden border border-borderd transition-all duration-200 hover:-translate-y-1.5 hover:border-gold hover:[box-shadow:0_18px_50px_rgba(223,188,96,0.18)] flex flex-col"
      style={{ background: 'linear-gradient(165deg,#1C1D28,#13141C)' }}>
      {/* accent top line */}
      <div className="h-[3px] w-full shrink-0" style={{ background: 'linear-gradient(90deg,' + pk.accent + ',' + pk.accent + '55)' }}></div>

      {/* header zone: game tint + abbr watermark */}
      <div className="relative px-5 pt-5 pb-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 85% 0%,' + (g.tint || '#1A0808') + ',transparent 72%)' }}></div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.12]"><HexGrid opacity={1} /></div>
        <span className="absolute -right-1 -top-4 font-head font-bold uppercase pointer-events-none leading-none" style={{ fontSize: 84, color: pk.accent, opacity: 0.12 }}>{g.abbr || ''}</span>

        <div className="relative flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase rounded-full px-2.5 py-1 whitespace-nowrap"
            style={{ color: pk.accent, background: pk.accent + '1A', border: '1px solid ' + pk.accent + '55' }}>
            <span className="grid place-items-center rounded-sm font-head text-[9px] text-void" style={{ width: 16, height: 16, background: pk.accent }}>{g.abbr ? g.abbr[0] : 'A'}</span>
            {pk.game}
          </span>
          {off ? <Pill color="red" className="flash !text-[10px]">🔥 -{off}%</Pill> : (pk.hot ? <Pill color="red" className="flash !text-[10px]">🔥 Oferta</Pill> : null)}
        </div>

        <h3 className="relative mt-3 font-head font-bold text-warm uppercase tracking-wide leading-[1.05]" style={{ fontSize: 23 }}>{pk.name}</h3>
        {showBonus && <div className="relative mt-2"><Pill color="amber" className="!text-[10px]">⚡ Incluye {pk.bonus}</Pill></div>}
      </div>

      {/* price + cta */}
      <div className="px-5 pb-5 pt-2 mt-auto">
        <div className="h-px w-full mb-4" style={{ background: 'linear-gradient(90deg,' + pk.accent + '44,transparent)' }}></div>
        <PriceBlock antes={pk.antes} price={pk.price} size="md" />
        <BtnBlue href={waLink(orderMsg(pk.game, pk.name, pk.price))} className="mt-4 w-full">⚡ Pedir ahora</BtnBlue>
      </div>
    </div>
  );
}

// ---------- Bank badge ----------
function BankBadge({ name, big = false }) {
  return (
    <div className={'flex items-center gap-3 rounded-[10px] bg-elevated border border-gold/30 ' + (big ? 'px-5 py-4' : 'px-4 py-2.5')}>
      <span className="grid place-items-center rounded-md text-gold shrink-0" style={{ width: big ? 44 : 34, height: big ? 44 : 34, background: 'rgba(223,188,96,0.08)' }}>
        <Icon.Bank size={big ? 24 : 19} />
      </span>
      <div className="leading-tight">
        <div className={'font-head font-bold text-warm uppercase tracking-wide ' + (big ? 'text-[17px]' : 'text-[13px]')}>{name}</div>
        {big && <div className="text-[12px] text-goldmut mt-0.5">Transferencia · Depósito</div>}
      </div>
    </div>
  );
}

// ---------- Trust micro badges row ----------
function TrustMicro() {
  const items = [['⚡', 'Recarga instantánea'], ['💎', 'Precios imbatibles'], ['🛡️', 'Compra garantizada'], ['🎮', 'Todos los juegos']];
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2.5">
      {items.map(([e, t], i) => (
        <span key={i} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-off">
          <span className="text-base">{e}</span>{t}
        </span>
      ))}
    </div>
  );
}

// ---------- Live order ticker ----------
function LiveTicker() {
  const feed = [...LIVE_FEED, ...LIVE_FEED];
  return (
    <div className="ticker-wrap relative w-full overflow-hidden border-y border-borderd bg-surface">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{ background: 'linear-gradient(90deg,#15161E,transparent)' }}></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{ background: 'linear-gradient(270deg,#15161E,transparent)' }}></div>
      <div className="ticker-track py-2.5">
        {feed.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-6 text-[13px] text-off">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#4CAF50' }}></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: '#4CAF50' }}></span>
            </span>
            <span className="text-confirm font-semibold">{t.split(' recargó ')[0]}</span>
            recargó <span className="text-goldsoft">{t.split(' recargó ')[1]}</span>
            <span className="text-goldmut text-[11px]">· hace {1 + (i % 9)} min</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------- Blood Strike price table (reusable) ----------
function BSPriceTable({ compact = false }) {
  return (
    <div className="rounded-[10px] overflow-hidden border border-gold/40 bg-elevated">
      <div className="grid grid-cols-[1fr_auto] items-center px-5 py-3 font-head font-bold uppercase tracking-[0.08em] text-void text-[13px]"
        style={{ background: 'linear-gradient(135deg,#DFBC60,#AE733B)' }}>
        <span>Paquete</span><span>Precio</span>
      </div>
      <div className="divide-y divide-borderd">
        {BS_PRICES.map((p, i) => (
          <div key={i} className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-3 hover:bg-surface transition-colors" style={{ background: i % 2 ? '#15161E' : 'transparent' }}>
            <div className="flex items-center gap-2 min-w-0">
              {p.bolt && <span style={{ color: '#FFB800' }}>⚡</span>}
              <span className="font-medium text-warm truncate">{p.name}</span>
              {p.fire && <span className="text-sm shrink-0">🔥</span>}
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-head font-bold text-gold text-[20px] tabular-nums">${p.price}</span>
              <a href={waLink(orderMsg('Blood Strike', p.name, p.price))} target="_blank" rel="noreferrer"
                className="font-head font-bold uppercase text-[12px] tracking-wide text-void rounded-md px-3 py-1.5 hover:brightness-110 transition"
                style={{ background: 'linear-gradient(135deg,#43AABE,#2A8A9E)' }}>Pedir</a>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 py-3 text-[12px] text-goldmut border-t border-borderd bg-surface flex items-center gap-2 flex-wrap">
        <span className="font-semibold tracking-[0.06em] uppercase text-goldsoft">Método de pago:</span>
        🏦 Banco Guayaquil · Banco Internacional · Banco del Austro
      </div>
    </div>
  );
}

// ---------- Blood Strike bonus table ----------
function BSBonusTable() {
  return (
    <div className="rounded-[10px] overflow-hidden border border-gold/40 bg-elevated">
      <div className="grid grid-cols-[1fr_auto_auto] gap-3 items-center px-4 py-2.5 font-head font-bold uppercase tracking-[0.06em] text-void text-[12px]"
        style={{ background: 'linear-gradient(135deg,#DFBC60,#AE733B)' }}>
        <span>Oro</span><span>Bonus</span><span>Precio</span>
      </div>
      {BS_BONUS.map((b, i) => (
        <div key={i} className="grid grid-cols-[1fr_auto_auto] gap-3 items-center px-4 py-2.5 border-t border-borderd" style={{ background: i % 2 ? '#15161E' : 'transparent' }}>
          <span className="font-head font-bold text-warm text-[15px] tracking-wide">{b.gold}</span>
          <span className="text-[12px] font-semibold" style={{ color: '#FFB800' }}>{b.bonus}</span>
          <span className="font-head font-bold text-gold text-[17px] tabular-nums">${b.price}</span>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  L, BtnBlue, BtnGold, BtnWA, Pill, OpenBadge, SectionTitle, Divider, PriceBlock,
  GameArt, GameCard, PackageCard, BankBadge, TrustMicro, LiveTicker, BSPriceTable, BSBonusTable,
});
