/* ============================================================
   ARKANO STORE — BRAND: icons, logo, mascot, decorative motifs
   ============================================================ */

// ---- Icon set (lucide-style inline SVG, stroke-based) ----
function Ic({ d, fill, size = 22, sw = 2, children, vb = 24, style }) {
  return (
    <svg width={size} height={size} viewBox={'0 0 ' + vb + ' ' + vb} fill={fill || 'none'}
      stroke={fill ? 'none' : 'currentColor'} strokeWidth={sw} strokeLinecap="round"
      strokeLinejoin="round" style={style}>
      {children || <path d={d} />}
    </svg>
  );
}

const Icon = {
  Gamepad: (p) => <Ic {...p}><line x1="6" y1="12" x2="10" y2="12" /><line x1="8" y1="10" x2="8" y2="14" /><line x1="15" y1="13" x2="15.01" y2="13" /><line x1="18" y1="11" x2="18.01" y2="11" /><rect x="2" y="6" width="20" height="12" rx="4" /></Ic>,
  Message: (p) => <Ic {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></Ic>,
  Card: (p) => <Ic {...p}><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></Ic>,
  Zap: (p) => <Ic {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></Ic>,
  Shield: (p) => <Ic {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></Ic>,
  Gem: (p) => <Ic {...p}><path d="M6 3h12l4 6-10 12L2 9z" /><path d="M2 9h20" /><path d="M12 3 8 9l4 12 4-12-4-6" /></Ic>,
  Flame: (p) => <Ic {...p}><path d="M12 2c1 3 4 4 4 8a4 4 0 0 1-8 0c0-1 .5-2 1-2.5C8 9 8 6 12 2z" /><path d="M9 14a3 3 0 0 0 6 0c0-2-2-2.5-3-4-1 1.5-3 2-3 4z" /></Ic>,
  Key: (p) => <Ic {...p}><circle cx="7.5" cy="15.5" r="4.5" /><path d="m10.5 12.5 7-7" /><path d="m16 6 3 3" /><path d="m18.5 3.5 3 3" /></Ic>,
  Pin: (p) => <Ic {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></Ic>,
  Phone: (p) => <Ic {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></Ic>,
  Facebook: (p) => <Ic {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></Ic>,
  Instagram: (p) => <Ic {...p}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></Ic>,
  Tiktok: (p) => <Ic {...p}><path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 4.8" /></Ic>,
  Chevron: (p) => <Ic {...p}><polyline points="6 9 12 15 18 9" /></Ic>,
  Menu: (p) => <Ic {...p}><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></Ic>,
  X: (p) => <Ic {...p}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></Ic>,
  Star: (p) => <Ic {...p}><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9 12 2" /></Ic>,
  Check: (p) => <Ic {...p}><polyline points="20 6 9 17 4 12" /></Ic>,
  Bank: (p) => <Ic {...p}><path d="M3 21h18" /><path d="M3 10h18" /><path d="m12 3 9 5H3z" /><path d="M5 10v11M9 10v11M15 10v11M19 10v11" /></Ic>,
  Clock: (p) => <Ic {...p}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></Ic>,
  Globe: (p) => <Ic {...p}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20" /></Ic>,
  Arrow: (p) => <Ic {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></Ic>,
  Coins: (p) => <Ic {...p}><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4M16.71 13.88l.7.71-2.82 2.82" /></Ic>,
  Tag: (p) => <Ic {...p}><path d="M20.59 13.41 13.42 20.59a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></Ic>,
};

// ---- WhatsApp glyph ----
function WAGlyph({ size = 28, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill={color}>
      <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.3.7 4.5 1.9 6.4L4 29l7-1.8c1.8 1 3.9 1.5 6 1.5 6.6 0 12-5.3 12-11.9C29 8.3 23.6 3 16 3zm0 21.7c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.9 1 1-3.8-.2-.4a9.7 9.7 0 0 1-1.5-5.2c0-5.4 4.5-9.8 10-9.8s10 4.4 10 9.8-4.5 9.8-9.2 9.8zm5.5-7.3c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.4 4.7 2 .9 2.8.9 3.8.8.6-.1 1.8-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
    </svg>
  );
}

// ---- A-circle logo mark (recreated from brand banner) ----
function LogoMark({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="21" stroke="#DFBC60" strokeWidth="2.4" />
      {/* slash through ring (brand swoosh) */}
      <path d="M30 9 C 39 13, 43 26, 36 36" stroke="#DFBC60" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      {/* A letterform */}
      <path d="M16.5 34 L24 14 L31.5 34" stroke="#DFBC60" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="19.5" y1="27.5" x2="28.5" y2="27.5" stroke="#DFBC60" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

function Logo({ size = 38, stacked = false }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <LogoMark size={size} />
      <div className="leading-[0.82]">
        <div className="font-head font-bold tracking-[0.06em] text-warm italic"
          style={{ fontSize: size * 0.46, fontStyle: 'italic', transform: 'skewX(-6deg)' }}>ARKANO</div>
        <div className="font-head font-bold tracking-[0.18em] text-blue italic"
          style={{ fontSize: size * 0.34, fontStyle: 'italic', transform: 'skewX(-6deg)' }}>STORE</div>
      </div>
    </div>
  );
}

// ---- Decorative motifs ----
function HexGrid({ opacity = 0.2, className = '' }) {
  return (
    <svg className={'absolute inset-0 w-full h-full pointer-events-none ' + className} style={{ opacity }} aria-hidden="true">
      <defs>
        <pattern id="hexp" width="56" height="48" patternUnits="userSpaceOnUse" patternTransform="scale(1.4)">
          <path d="M14 0 L42 0 L56 24 L42 48 L14 48 L0 24 Z" fill="none" stroke="#2A2B38" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexp)" />
    </svg>
  );
}

function ParticleField() {
  const pts = React.useMemo(() => Array.from({ length: 34 }, () => ({
    x: Math.random() * 100, y: Math.random() * 100, s: 2 + Math.random() * 5, o: 0.03 + Math.random() * 0.08,
  })), []);
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      {pts.map((p, i) => (
        <rect key={i} x={p.x + '%'} y={p.y + '%'} width={p.s} height={p.s}
          fill="#DFBC60" opacity={p.o} transform={'rotate(45 ' + p.x + ' ' + p.y + ')'} />
      ))}
    </svg>
  );
}

function LightningWatermark({ className = '' }) {
  return (
    <svg className={'absolute pointer-events-none ' + className} viewBox="0 0 100 100" style={{ opacity: 0.06 }} aria-hidden="true">
      <polygon points="55 5 25 55 48 55 42 95 78 40 52 40 60 5" fill="#DFBC60" />
    </svg>
  );
}

// Big downward triangle/arrow brand motif behind section titles
function TriangleMotif({ className = '', opacity = 0.1 }) {
  return (
    <svg className={'absolute pointer-events-none ' + className} viewBox="0 0 200 160" style={{ opacity }} aria-hidden="true">
      <path d="M20 10 L100 90 L180 10" fill="none" stroke="#DFBC60" strokeWidth="3" />
      <path d="M40 40 L100 100 L160 40" fill="none" stroke="#DFBC60" strokeWidth="2" />
      <path d="M70 80 L100 110 L130 80" fill="none" stroke="#DFBC60" strokeWidth="2" />
    </svg>
  );
}

// Mascot image used at chosen opacity
function MascotImg({ className = '', style }) {
  return <img src="assets/arkano-mascot.png" alt="Arkano mascot" className={className} style={style} draggable="false" />;
}

Object.assign(window, {
  Icon, WAGlyph, LogoMark, Logo, HexGrid, ParticleField, LightningWatermark, TriangleMotif, MascotImg,
});
