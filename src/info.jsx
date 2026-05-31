/* ============================================================
   ARKANO STORE — ¿CÓMO FUNCIONA? (/como-funciona) + CONTACTO (/contacto)
   ============================================================ */

// ---- Big step illustration helpers ----
function MiniProductCard() {
  return (
    <div className="rounded-[10px] bg-surface border border-gold/40 p-5 max-w-[300px]" style={{ borderTop: '3px solid #E0413B', borderTopWidth: '3px', borderTopColor: '#E0413B' }}>
      <span className="inline-flex text-[11px] font-semibold tracking-[0.1em] uppercase rounded-full px-2.5 py-1" style={{ color: '#E0413B', background: 'rgba(224,65,59,0.1)', border: '1px solid rgba(224,65,59,0.4)' }}>Blood Strike</span>
      <div className="mt-3 font-head font-bold text-warm uppercase text-[22px] tracking-wide">5,000 + 800 Oro</div>
      <div className="mt-2"><Pill color="amber" className="!text-[10px]">⚡ Incluye +800 Bonus</Pill></div>
      <div className="mt-4 text-[14px] font-medium" style={{ color: '#FF4444' }}><span className="line-through">$49.99</span></div>
      <div className="font-head font-bold text-gold text-[30px] leading-none">$40.50</div>
      <div className="mt-4 rounded-md text-void text-center font-head font-bold uppercase text-[13px] py-2.5" style={{ background: 'linear-gradient(135deg,#43AABE,#2A8A9E)' }}>⚡ Pedir ahora</div>
    </div>
  );
}

function MiniChat() {
  return (
    <div className="rounded-[22px] bg-void border-2 border-borderd p-3 max-w-[280px] mx-auto" style={{ boxShadow: '0 18px 50px rgba(0,0,0,0.5)' }}>
      <div className="rounded-t-[14px] px-4 py-3 flex items-center gap-2.5" style={{ background: '#075E54' }}>
        <span className="grid place-items-center rounded-full bg-wa" style={{ width: 30, height: 30 }}><WAGlyph size={18} /></span>
        <div className="leading-tight"><div className="text-white text-[13px] font-semibold">Arkano Store</div><div className="text-[10px] text-white/70">en línea</div></div>
      </div>
      <div className="px-3 py-4 space-y-2.5" style={{ background: '#0d1418' }}>
        <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-sm bg-elevated px-3 py-2 text-[12px] text-warm">Hola! Quiero recargar Blood Strike 🎮</div>
        <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-elevated px-3 py-2 text-[12px] text-warm">Mi ID es <span className="text-gold font-semibold">8842 1190</span> · Pase Elite</div>
        <div className="mr-auto max-w-[85%] rounded-lg rounded-tl-sm px-3 py-2 text-[12px] text-white" style={{ background: '#056162' }}>¡Listo! Transfiere $4.20 y mándame el comprobante ⚡</div>
        <div className="mr-auto max-w-[70%] rounded-lg rounded-tl-sm px-3 py-2 text-[12px] text-white" style={{ background: '#056162' }}>✅ Recarga acreditada. ¡A jugar! 🔥</div>
      </div>
    </div>
  );
}

function GuaranteeViz() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid place-items-center rounded-full" style={{ width: 110, height: 110, background: 'rgba(76,175,80,0.12)', border: '2px solid rgba(76,175,80,0.5)' }}>
        <span style={{ color: '#4CAF50' }}><Icon.Check size={56} /></span>
      </div>
      <Pill color="green" className="!text-[12px] !px-4 !py-2">✓ Compra 100% garantizada</Pill>
      <div className="font-head font-bold uppercase text-warm text-[20px] tracking-wide">En menos de 5 minutos</div>
    </div>
  );
}

function BigStep({ n, color, stroke, title, body, children, flip }) {
  return (
    <div className={'grid lg:grid-cols-2 gap-10 items-center ' + (flip ? '' : '')}>
      <div className={flip ? 'lg:order-2' : ''}>
        <div className="font-head font-bold leading-none" style={{ fontSize: 'clamp(80px,14vw,130px)', WebkitTextStroke: '2px ' + (stroke === 'gold' ? '#DFBC60' : stroke === 'blue' ? '#43AABE' : stroke === 'amber' ? '#FFB800' : '#DFBC60'), color: stroke === 'fill' ? '#DFBC60' : 'transparent' }}>{n}</div>
        <h3 className="mt-2 font-head font-bold uppercase tracking-[0.04em] text-warm leading-tight" style={{ fontSize: 'clamp(26px,4.2vw,38px)' }}>{title}</h3>
        <p className="mt-4 text-off text-[16px] leading-relaxed max-w-[480px]">{body}</p>
        {children}
      </div>
      <div className={'flex justify-center ' + (flip ? 'lg:order-1' : '')}>{/* illustration set per step via children2 */}</div>
    </div>
  );
}

function StepRow({ n, stroke, title, body, illo, flip, extra }) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div className={flip ? 'lg:order-2' : ''}>
        <div className="font-head font-bold leading-none" style={{ fontSize: 'clamp(80px,14vw,130px)', WebkitTextStroke: '2px ' + ({ gold: '#DFBC60', blue: '#43AABE', amber: '#FFB800' }[stroke] || '#DFBC60'), color: stroke === 'fill' ? '#DFBC60' : 'transparent' }}>{n}</div>
        <h3 className="mt-2 font-head font-bold uppercase tracking-[0.04em] text-warm leading-tight" style={{ fontSize: 'clamp(26px,4.2vw,38px)' }}>{title}</h3>
        <p className="mt-4 text-off text-[16px] leading-relaxed max-w-[480px]">{body}</p>
        {extra}
      </div>
      <div className={'flex justify-center ' + (flip ? 'lg:order-1' : '')}>{illo}</div>
    </div>
  );
}

function FAQItem({ q, a, open, onClick }) {
  return (
    <div className="rounded-[8px] bg-surface border border-borderd overflow-hidden">
      <button onClick={onClick} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
        <span className="font-head font-bold uppercase tracking-wide text-warm text-[16px]">{q}</span>
        <span className={'text-gold shrink-0 transition-transform duration-300 ' + (open ? 'rotate-180' : '')}><Icon.Chevron size={22} /></span>
      </button>
      <div className={'acc-body ' + (open ? 'open' : '')}>
        <div><p className="px-5 pb-5 text-off text-[15px] leading-relaxed">{a}</p></div>
      </div>
    </div>
  );
}

function ComoHero() {
  const quick = [
    { icon: <Icon.Gamepad size={22} />, t: 'Elige', c: '#DFBC60' },
    { icon: <Icon.Message size={22} />, t: 'Escríbenos', c: '#43AABE' },
    { icon: <Icon.Card size={22} />, t: 'Paga', c: '#DFBC60' },
    { icon: <Icon.Zap size={22} />, t: '¡Juega!', c: '#FFB800' },
  ];
  return (
    <section className="relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 50% 0%,#1A1508 0%,#0B0C11 65%)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 25%,rgba(223,188,96,0.12),transparent 70%)' }}></div>
      <ParticleField />
      <HexGrid opacity={0.12} />
      <LightningWatermark className="w-[280px] h-[280px] left-[3%] top-[16%]" />
      <MascotImg className="hidden lg:block absolute right-[1%] bottom-0 h-[98%] w-auto pointer-events-none" style={{ opacity: 0.15, maskImage: 'linear-gradient(90deg,transparent,#000 46%)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 46%)' }} />
      <div className="relative mx-auto max-w-[1040px] px-4 md:px-6 pt-12 pb-16 text-center">
        <div className="flex items-center justify-center gap-2 text-[12px] text-goldmut mb-5 uppercase tracking-[0.1em]">
          <L to="#/" className="hover:text-gold transition">Inicio</L><span>/</span><span className="text-goldsoft">¿Cómo funciona?</span>
        </div>
        <div className="flex justify-center mb-4"><Pill color="gold">Rápido y simple</Pill></div>
        <h1 className="font-head font-bold uppercase tracking-[0.04em] shimmer leading-[0.92]" style={{ fontSize: 'clamp(42px,7.5vw,72px)' }}>¿Cómo funciona?</h1>
        <p className="mt-4 text-[17px] text-off max-w-[600px] mx-auto leading-relaxed">Recargar nunca fue tan fácil. En <span className="text-goldsoft font-semibold">4 pasos</span> y menos de 5 minutos ya estás jugando.</p>

        {/* quick overview strip */}
        <div className="mt-11 relative max-w-[640px] mx-auto">
          <div className="hidden sm:block absolute top-7 left-[11%] right-[11%] h-px" style={{ backgroundImage: 'repeating-linear-gradient(90deg,#DFBC60 0 10px,transparent 10px 20px)', opacity: 0.4 }}></div>
          <div className="relative grid grid-cols-4 gap-2">
            {quick.map((q, i) => (
              <div key={i} className="flex flex-col items-center gap-2.5">
                <span className="grid place-items-center rounded-full bg-void border-2 transition-transform" style={{ width: 56, height: 56, borderColor: q.c, color: q.c, boxShadow: '0 0 22px ' + q.c + '33' }}>{q.icon}</span>
                <span className="font-head font-bold uppercase tracking-wide text-warm text-[12px] sm:text-[15px]">{q.t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* stats */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          <Pill color="amber">⚡ Menos de 5 min</Pill>
          <OpenBadge />
          <Pill color="green">🛡️ 100% garantizado</Pill>
          <Pill color="blue">💬 Todo por WhatsApp</Pill>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <BtnWA href={waLink()} big>Empezar ahora</BtnWA>
          <BtnGold to="#/paquetes" big className="shrink-0">Ver paquetes</BtnGold>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-2.5 text-[14.5px] text-off">
      <span className="mt-0.5 shrink-0 grid place-items-center rounded-full" style={{ width: 20, height: 20, background: 'rgba(76,175,80,0.14)', color: '#4CAF50' }}><Icon.Check size={13} /></span>
      <span>{children}</span>
    </li>
  );
}

function StepBlock({ n, stroke, icon, kicker, title, body, bullets, illo, flip }) {
  const sc = { gold: '#DFBC60', blue: '#43AABE', amber: '#FFB800' }[stroke] || '#DFBC60';
  return (
    <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className={'relative ' + (flip ? 'lg:order-2' : '')}>
        <div className="font-head font-bold leading-none absolute -top-7 -left-1 select-none pointer-events-none" style={{ fontSize: 'clamp(90px,13vw,150px)', WebkitTextStroke: '2px ' + sc, color: stroke === 'fill' ? '#DFBC60' : 'transparent', opacity: stroke === 'fill' ? 0.16 : 0.45 }}>{n}</div>
        <div className="relative pt-12">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center rounded-xl shrink-0" style={{ width: 50, height: 50, background: 'linear-gradient(135deg,' + sc + '22,' + sc + '08)', border: '1px solid ' + sc + '55', color: stroke === 'fill' ? '#DFBC60' : sc }}>{icon}</span>
            <span className="font-head font-bold uppercase tracking-[0.14em] text-goldmut text-[13px]">{kicker}</span>
          </div>
          <h3 className="mt-4 font-head font-bold uppercase tracking-[0.04em] text-warm leading-tight" style={{ fontSize: 'clamp(26px,4vw,38px)' }}>{title}</h3>
          <p className="mt-3 text-off text-[16px] leading-relaxed max-w-[480px]">{body}</p>
          <ul className="mt-5 space-y-2.5">{bullets.map((b, i) => <Bullet key={i}>{b}</Bullet>)}</ul>
        </div>
      </div>
      <div className={'flex justify-center ' + (flip ? 'lg:order-1' : '')}>{illo}</div>
    </div>
  );
}

function ComoFuncionaPage() {
  const [open, setOpen] = React.useState(0);
  return (
    <div className="page-enter">
      <ComoHero />

      <section className="py-16" style={{ background: '#0B0C11' }}>
        <div className="mx-auto max-w-[1180px] px-4 md:px-6 space-y-16 lg:space-y-24">
          <StepBlock n="01" stroke="gold" icon={<Icon.Gamepad size={24} />} kicker="Paso 01" title="Elige tu paquete"
            body="Navega nuestro catálogo de juegos y elige el paquete que necesitas. Si tienes dudas, escríbenos y te asesoramos sin costo."
            bullets={['Catálogo con todos los juegos y precios', 'Asesoría gratis si no sabes cuál elegir', 'Precios actualizados todos los días']}
            illo={<MiniProductCard />} />
          <Divider />
          <StepBlock n="02" stroke="blue" flip icon={<Icon.Message size={24} />} kicker="Paso 02" title="Escríbenos por WhatsApp"
            body="Envíanos por WhatsApp tu ID de jugador, el paquete elegido y el juego. Nada más, sin complicaciones."
            bullets={['Solo tu ID de jugador y el paquete', 'Respuesta en menos de 5 minutos', 'Nunca te pediremos tu contraseña']}
            illo={<MiniChat />} />
          <Divider />
          <StepBlock n="03" stroke="amber" icon={<Icon.Card size={24} />} kicker="Paso 03" title="Realiza el pago"
            body="Transfiere el monto exacto a nuestra cuenta bancaria y envíanos el comprobante. Así de fácil."
            bullets={['Banco Guayaquil, Internacional o del Austro', 'Transferencia o depósito en efectivo', 'Disponible las 24 horas del día']}
            illo={<div className="grid gap-3 w-full max-w-[330px]">{BANKS.map((b) => <BankBadge key={b} name={b} big />)}</div>} />
          <Divider />
          <StepBlock n="04" stroke="fill" flip icon={<Icon.Zap size={24} />} kicker="Paso 04" title="Recibe en segundos"
            body="Confirmamos tu pago y acreditamos la recarga inmediatamente. ⚡ En menos de 5 minutos estás jugando."
            bullets={['Acreditación inmediata tras confirmar', 'Compra 100% garantizada', 'Soporte 24h, los 7 días de la semana']}
            illo={<GuaranteeViz />} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-[820px] px-4 md:px-6">
          <SectionTitle kicker="Dudas frecuentes">Preguntas frecuentes</SectionTitle>
          <div className="mt-10 space-y-3">
            {FAQS.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />)}
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}

/* ---------------------------- CONTACTO ---------------------------- */

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[12px] font-semibold tracking-[0.1em] uppercase text-goldsoft mb-2">{label}</span>
      {children}
    </label>
  );
}

const inputCls = 'w-full rounded-md bg-void border border-borderd focus:border-gold focus:outline-none text-warm text-[15px] px-4 py-3 transition-colors placeholder:text-goldmut';

function ContactoPage() {
  const [f, setF] = React.useState({ nombre: '', juego: 'Blood Strike', id: '', paquete: '', motivo: 'Hacer una recarga', msg: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const games = ['Blood Strike', 'EA Play', 'Forza Horizon 6', 'Free Fire', 'Mobile Legends', 'Otro'];
  const motivos = ['Hacer una recarga', 'Consulta sobre precio', 'Problema con recarga', 'Otro'];
  const pkgOptions = PACKAGES.filter((p) => f.juego === 'Otro' || p.game === f.juego);

  const built = '¡Hola Arkano Store! 🎮\n' +
    'Nombre/Tag: ' + (f.nombre || '—') + '\n' +
    'Juego: ' + f.juego + '\n' +
    'ID de jugador: ' + (f.id || '—') + '\n' +
    'Paquete: ' + (f.paquete || '—') + '\n' +
    'Motivo: ' + f.motivo + (f.msg ? '\n' + f.msg : '');

  return (
    <div className="page-enter">
      <PageHero crumb="Contacto" kicker="Atención 24h" title="Contáctanos" subtitle="Atención inmediata las 24 horas. Tiempo de respuesta: menos de 5 minutos." />

      <section className="py-14" style={{ background: '#0B0C11' }}>
        <div className="mx-auto max-w-[1240px] px-4 md:px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          {/* FORM */}
          <div className="rounded-[12px] bg-surface border border-borderd p-7 md:p-9">
            <h2 className="font-head font-bold uppercase tracking-[0.04em] text-warm text-[24px]">Envíanos tu pedido</h2>
            <p className="mt-1.5 text-off text-[14px]">Completa y te respondemos al instante por WhatsApp.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              <Field label="Tu nombre / gamer tag"><input className={inputCls} placeholder="Ej: @KrakenGYE" value={f.nombre} onChange={set('nombre')} /></Field>
              <Field label="Juego">
                <select className={inputCls} value={f.juego} onChange={(e) => setF({ ...f, juego: e.target.value, paquete: '' })}>
                  {games.map((g) => <option key={g}>{g}</option>)}
                </select>
              </Field>
              <Field label="ID de jugador (requerido)"><input className={inputCls} placeholder="Ej: 8842 1190" value={f.id} onChange={set('id')} /></Field>
              <Field label="Paquete de interés">
                <select className={inputCls} value={f.paquete} onChange={set('paquete')}>
                  <option value="">Selecciona…</option>
                  {pkgOptions.map((p, i) => <option key={i} value={p.game + ' — ' + p.name + ' ($' + p.price + ')'}>{p.name} — ${p.price}</option>)}
                  <option value="Otro / no estoy seguro">Otro / no estoy seguro</option>
                </select>
              </Field>
              <Field label="Motivo">
                <select className={inputCls} value={f.motivo} onChange={set('motivo')}>{motivos.map((m) => <option key={m}>{m}</option>)}</select>
              </Field>
              <div className="sm:col-span-1"></div>
              <div className="sm:col-span-2">
                <Field label="Mensaje adicional"><textarea rows="3" className={inputCls + ' resize-none'} placeholder="Cuéntanos cualquier detalle extra…" value={f.msg} onChange={set('msg')} /></Field>
              </div>
            </div>
            <BtnWA href={waLink(built)} big className="mt-6 w-full">⚡ Enviar por WhatsApp</BtnWA>
            <p className="mt-3 text-[12px] text-goldmut text-center">No compartimos tus datos. Nunca pedimos tu contraseña.</p>
          </div>

          {/* PANEL */}
          <div className="rounded-[12px] bg-surface p-7 md:p-8" style={{ borderTop: '3px solid #DFBC60', border: '1px solid #2A2B38', borderTopWidth: '3px', borderTopColor: '#DFBC60' }}>
            <h3 className="font-head font-bold uppercase tracking-[0.05em] text-gold text-[20px]">Canales de atención</h3>
            <BtnWA href={waLink()} big className="mt-5 w-full">Escríbenos directo</BtnWA>
            <div className="mt-4"><OpenBadge /></div>

            <div className="mt-6 pt-6 space-y-4" style={{ borderTop: '1px solid #2A2B38' }}>
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5 shrink-0"><Icon.Pin size={20} /></span>
                <div className="text-[14px] text-off leading-relaxed">Riocentro Ceibos, Calle 14 NO,<br />Guayaquil, Ecuador</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold shrink-0"><Icon.Clock size={20} /></span>
                <div className="text-[14px] text-off">Abierto 24 horas · 7 días</div>
              </div>
              <div className="flex items-center gap-3">
                <a href="#" className="grid place-items-center rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition" style={{ width: 38, height: 38 }}><Icon.Facebook size={18} /></a>
                <a href="#" className="grid place-items-center rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition" style={{ width: 38, height: 38 }}><Icon.Instagram size={18} /></a>
                <div className="text-[13px] text-goldmut leading-tight">facebook.com/arkanotop<br />@arkanostore</div>
              </div>
            </div>

            <div className="mt-6 pt-6" style={{ borderTop: '1px solid #2A2B38' }}>
              <div className="text-[12px] font-semibold tracking-[0.1em] uppercase text-goldsoft mb-3">Pagos aceptados</div>
              <div className="grid gap-2.5">{BANKS.map((b) => <BankBadge key={b} name={b} />)}</div>
            </div>

            <div className="mt-6"><Pill color="amber" className="!text-[11px] !px-4 !py-2">⚡ Respuesta en menos de 5 minutos</Pill></div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ComoFuncionaPage, ContactoPage });
