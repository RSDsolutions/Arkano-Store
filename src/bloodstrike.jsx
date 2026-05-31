/* ============================================================
   ARKANO STORE — BLOOD STRIKE (/bloodstrike) — hero product page
   ============================================================ */

function BSHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#0B0C11' }}>
      <HexGrid opacity={0.2} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 25%,rgba(180,20,20,0.1),transparent 60%)' }}></div>
      <div className="relative mx-auto max-w-[1240px] px-4 md:px-6 pt-12 pb-16 text-center">
        <div className="flex items-center justify-center gap-2 text-[12px] text-goldmut mb-5 uppercase tracking-[0.1em]">
          <L to="#/" className="hover:text-gold transition">Inicio</L><span>/</span>
          <L to="#/juegos" className="hover:text-gold transition">Juegos</L><span>/</span><span className="text-goldsoft">Blood Strike</span>
        </div>
        <div className="flex justify-center mb-4"><Pill color="gold">Tienda oficial</Pill></div>
        <h1 className="font-head font-bold uppercase tracking-[0.04em] shimmer leading-[0.9]" style={{ fontSize: 'clamp(50px,11vw,96px)' }}>Blood Strike</h1>
        <p className="mt-4 text-[17px] text-off max-w-[640px] mx-auto">Ofertas exclusivas de oro y pases — <span className="text-goldsoft">¡Hasta agotar stock!</span></p>
        <div className="mt-5 font-head font-bold uppercase italic text-warm tracking-[0.05em]" style={{ fontSize: 'clamp(30px,5.5vw,48px)', textShadow: '0 0 26px rgba(224,65,59,0.35)' }}>¡Locuraaa!!</div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <BtnBlue href={waLink(orderMsg('Blood Strike', '— quiero asesoría de paquetes', ''))} big>⚡ Pedir por WhatsApp</BtnBlue>
          <BtnGold href="#bs-precios" big>Ver lista de precios</BtnGold>
        </div>
      </div>
    </section>
  );
}

function BSBonusCard() {
  return (
    <section className="relative py-14" style={{ background: '#15161E' }}>
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <div className="rounded-[12px] bg-elevated p-7 md:p-9" style={{ border: '2px solid rgba(223,188,96,0.5)', boxShadow: '0 0 40px rgba(223,188,96,0.12)' }}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[26px]">⚡</span>
            <h2 className="font-head font-bold uppercase tracking-[0.04em] text-gold leading-tight" style={{ fontSize: 'clamp(22px,3.6vw,30px)' }}>Obtén más oro al recargar con Arkano Store</h2>
          </div>
          <p className="text-off text-[14px] mb-6">Cada recarga de oro incluye un bonus extra. Mientras más recargas, más bonus recibes.</p>
          <BSBonusTable />
        </div>
      </div>
    </section>
  );
}

function BSDealAndPrices() {
  return (
    <section id="bs-precios" className="relative overflow-hidden py-16" style={{ background: '#0B0C11' }}>
      <HexGrid opacity={0.14} />
      <div className="relative mx-auto max-w-[1240px] px-4 md:px-6 grid lg:grid-cols-[1fr_0.85fr] gap-10 items-start">
        <div>
          <SectionTitle kicker="Lista completa" center={false}>Todos los paquetes</SectionTitle>
          <p className="mt-4 text-off text-[15px] max-w-[520px]">Elige tu paquete y pídelo directo por WhatsApp con tu ID de jugador. Pago por Banco Guayaquil, Internacional o del Austro.</p>
          <div className="mt-7"><BSPriceTable /></div>
        </div>
        <div className="lg:pt-4">
          <FeaturedDeal />
        </div>
      </div>
    </section>
  );
}

function BSHowToOrder() {
  const steps = [
    { n: '1', icon: <Icon.Message size={26} />, color: '#43AABE', t: 'Envía tu ID', d: 'Mándanos por WhatsApp tu ID de jugador de Blood Strike.' },
    { n: '2', icon: <Icon.Gamepad size={26} />, color: '#DFBC60', t: 'Elige tu paquete', d: 'Dinos qué paquete de oro o pase quieres recargar.' },
    { n: '3', icon: <Icon.Card size={26} />, color: '#DFBC60', t: 'Realiza el pago', d: 'Transfiere a Banco Guayaquil, Internacional o del Austro.' },
    { n: '4', icon: <Icon.Zap size={26} />, color: '#FFB800', t: 'Recibe en segundos', d: 'Confirmamos y acreditamos tu oro al instante. ⚡' },
  ];
  return <HowItWorks steps={steps} />;
}

function BloodStrikePage() {
  return (
    <div className="page-enter">
      <BSHero />
      <LiveTicker />
      <BSBonusCard />
      <BSDealAndPrices />
      <Divider />
      <BSHowToOrder />
      <PaymentSection />
      <CTABanner />
    </div>
  );
}

Object.assign(window, { BloodStrikePage });
