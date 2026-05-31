/* ============================================================
   ARKANO STORE — DATA (all hardcoded, no backend)
   ============================================================ */

// Swap this for the real WhatsApp number (country code + number, no +).
const WHATSAPP = '593990000000';

function waLink(msg) {
  return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg || '¡Hola Arkano Store! 🎮 Quiero hacer una recarga.');
}

// Per-product pre-filled order message
function orderMsg(game, pkg, price) {
  return '¡Hola Arkano Store! 🎮\nQuiero recargar ' + game + ': ' + pkg +
    (price ? ' por $' + price : '') + '.\nMi ID de jugador es: [pendiente de completar]';
}

// Game accent tints (dark card backgrounds per title)
const GAMES = [
  { id: 'blood-strike', name: 'Blood Strike', genre: 'FPS', cat: 'FPS', tint: '#1A0808', accent: '#E0413B', from: '$0.79', packs: 8, abbr: 'BS', route: '#/bloodstrike' },
  { id: 'ea-play', name: 'EA Play', genre: 'Sports', cat: 'Sports', tint: '#080C18', accent: '#E0413B', from: '$29.99', packs: 3, abbr: 'EA' },
  { id: 'forza', name: 'Forza Horizon 6', genre: 'Racing', cat: 'Racing', tint: '#081408', accent: '#3FBF6A', from: '$57.99', packs: 1, abbr: 'FZ' },
  { id: 'pragmata', name: 'Pragmata', genre: 'RPG', cat: 'RPG', tint: '#120818', accent: '#B06BE0', from: '$46.99', packs: 1, abbr: 'PR' },
  { id: 'free-fire', name: 'Free Fire', genre: 'Battle Royale', cat: 'Battle Royale', tint: '#181004', accent: '#FFB800', from: '$0.99', packs: 6, abbr: 'FF' },
  { id: 'mobile-legends', name: 'Mobile Legends', genre: 'RPG', cat: 'RPG', tint: '#0A0E1A', accent: '#43AABE', from: '$1.20', packs: 6, abbr: 'ML' },
  { id: 'cod-mobile', name: 'Call of Duty Mobile', genre: 'FPS', cat: 'FPS', tint: '#141414', accent: '#F5E0A0', from: '$1.50', packs: 5, abbr: 'COD' },
  { id: 'clash', name: 'Clash of Clans', genre: 'RPG', cat: 'RPG', tint: '#10140A', accent: '#FFB800', from: '$0.99', packs: 5, abbr: 'CoC' },
];

// Blood Strike full pricelist (the hero product)
const BS_PRICES = [
  { name: 'Pase Elite', bolt: true, price: '4.20', fire: true },
  { name: 'Pase Premium', bolt: true, price: '8.50', fire: true },
  { name: '100 Oro', price: '0.90', fire: true },
  { name: '300 + 20 Oro', price: '2.60', fire: true },
  { name: '500 + 40 Oro', price: '4.30', fire: true },
  { name: '1000 + 100 Oro', price: '8.50', fire: true },
  { name: '2000 + 260 Oro', price: '18.50', fire: true },
  { name: '5000 + 800 Oro', price: '40.50', fire: true },
];

// Blood Strike bonus chart (gold + bonus)
const BS_BONUS = [
  { gold: '100 GOLD', bonus: '+5 BONUS', price: '0.79' },
  { gold: '300 GOLD', bonus: '+20 BONUS', price: '2.99' },
  { gold: '1000 GOLD', bonus: '+100 BONUS', price: '7.99' },
  { gold: '2000 GOLD', bonus: '+260 BONUS', price: '15.99' },
  { gold: '5000 GOLD', bonus: '+800 BONUS', price: '39.99' },
];

// All packages across games (for /paquetes) — includes real prices from brand materials
const PACKAGES = [
  { game: 'Blood Strike', gameId: 'blood-strike', accent: '#E0413B', name: '10,000 Golds', antes: '99.99', price: '79.99', bonus: '+1500 BONUS', hot: true },
  { game: 'Blood Strike', gameId: 'blood-strike', accent: '#E0413B', name: 'Pase Elite', price: '4.20', bonus: null },
  { game: 'Blood Strike', gameId: 'blood-strike', accent: '#E0413B', name: '5,000 + 800 Oro', antes: '49.99', price: '40.50', bonus: '+800 BONUS' },
  { game: 'Blood Strike', gameId: 'blood-strike', accent: '#E0413B', name: '1,000 + 100 Oro', price: '8.50', bonus: '+100 BONUS' },
  { game: 'EA Play', gameId: 'ea-play', accent: '#43AABE', name: 'EA Play — 1 Mes', price: '4.99', bonus: null },
  { game: 'EA Play', gameId: 'ea-play', accent: '#43AABE', name: 'EA Play — 3 Meses', antes: '14.99', price: '11.99', bonus: null },
  { game: 'EA Play', gameId: 'ea-play', accent: '#43AABE', name: 'EA Play — 12 Meses', antes: '39.99', price: '29.99', bonus: null, hot: true },
  { game: 'Forza Horizon 6', gameId: 'forza', accent: '#3FBF6A', name: 'Standard Edition', antes: '69.99', price: '57.99', bonus: null, hot: true },
  { game: 'Free Fire', gameId: 'free-fire', accent: '#FFB800', name: '520 Diamonds', antes: '6.99', price: '4.99', bonus: '+50 BONUS' },
  { game: 'Free Fire', gameId: 'free-fire', accent: '#FFB800', name: '100 Diamonds', price: '0.99', bonus: null },
  { game: 'Mobile Legends', gameId: 'mobile-legends', accent: '#43AABE', name: '86 Diamonds', price: '1.20', bonus: null },
  { game: 'Mobile Legends', gameId: 'mobile-legends', accent: '#43AABE', name: '565 Diamonds', antes: '9.99', price: '7.50', bonus: '+50 BONUS' },
];

// Extra real-priced featured deals (from uploaded screenshot)
const HOT_DEALS = [
  { game: 'EA Play', name: '12 Meses de Suscripción', antes: '39.99', price: '29.99', off: '38%', accent: '#43AABE' },
  { game: 'Forza Horizon 6', name: 'Standard Edition', antes: '69.99', price: '57.99', off: '17%', accent: '#3FBF6A' },
  { game: 'Pragmata', name: 'Edición Deluxe', antes: '53.00', price: '46.99', off: '11%', accent: '#B06BE0' },
];

const TESTIMONIALS = [
  { tag: '@KrakenGYE', game: 'Blood Strike', bought: 'Pase Elite', text: 'Pedí a las 2am y en menos de 3 minutos ya tenía mi pase. Precios que no encuentras en otro lado. Crackssss 🔥', days: 2 },
  { tag: '@Laura_FF', game: 'Free Fire', bought: '520 Diamonds', text: 'Súper confiable, ya he recargado como 6 veces. Siempre responden al toque por WhatsApp. 100% recomendados.', days: 5 },
  { tag: '@MidLaneMrl', game: 'Mobile Legends', bought: '565 Diamonds', text: 'Los más baratos de Guayaquil y abiertos 24h. Transferí por Banco Guayaquil y al instante acreditado. LOCURAAA!!', days: 1 },
];

const FAQS = [
  { q: '¿Cuánto tiempo tarda la recarga?', a: 'En menos de 5 minutos tras confirmar tu pago. La mayoría de recargas se acreditan en segundos. Atendemos las 24 horas, así que pidas a la hora que pidas, te respondemos.' },
  { q: '¿Es seguro comprar aquí?', a: 'Totalmente. Trabajamos con métodos oficiales de recarga y miles de gamers en Guayaquil ya confían en nosotros. Tu compra está 100% garantizada: si algo falla, te devolvemos tu dinero o lo resolvemos al instante.' },
  { q: '¿Qué pasa si no recibo mi recarga?', a: 'No te preocupes. Si por algún motivo tu recarga no se acredita, te devolvemos el 100% de tu dinero o lo solucionamos de inmediato. Compra 100% garantizada, siempre.' },
  { q: '¿Necesito dar mi contraseña?', a: 'Nunca. Solo necesitamos tu ID de jugador (no tu contraseña). Jamás te pediremos datos de acceso a tu cuenta. Si alguien te los pide, no es Arkano Store.' },
  { q: '¿Qué métodos de pago aceptan?', a: 'Transferencia o depósito a Banco Guayaquil, Banco Internacional y Banco del Austro. Te enviamos los datos por WhatsApp y solo nos compartes el comprobante.' },
  { q: '¿Atienden los 7 días de la semana?', a: '¡Sí! Abierto 24 horas, los 7 días. Feriados incluidos. Recarga cuando quieras, nosotros estamos despiertos. 🟢' },
  { q: '¿Puedo recargar para otro jugador?', a: 'Claro. Solo necesitamos el ID de jugador de la persona para quien es la recarga. Perfecto para regalar a un amigo o a tu squad.' },
];

const NAV = [
  { label: 'Inicio', route: '#/' },
  { label: 'Juegos', route: '#/juegos' },
  { label: 'Blood Strike', route: '#/bloodstrike' },
  { label: 'Paquetes', route: '#/paquetes' },
  { label: '¿Cómo funciona?', route: '#/como-funciona' },
  { label: 'Contacto', route: '#/contacto' },
];

const BANKS = ['Banco Guayaquil', 'Banco Internacional', 'Banco del Austro'];

// Live order ticker fake feed
const LIVE_FEED = [
  'Carlos recargó Blood Strike · Pase Elite', 'Andrea recargó Free Fire · 520 Diamonds',
  'José recargó EA Play · 12 Meses', 'Mateo recargó Blood Strike · 1000 Oro',
  'Valeria recargó Mobile Legends · 565 Diamonds', 'Dylan recargó Forza Horizon 6',
  'Kevin recargó Blood Strike · Pase Premium', 'Sofía recargó Free Fire · 100 Diamonds',
];

Object.assign(window, {
  WHATSAPP, waLink, orderMsg, GAMES, BS_PRICES, BS_BONUS, PACKAGES, HOT_DEALS,
  TESTIMONIALS, FAQS, NAV, BANKS, LIVE_FEED,
});
