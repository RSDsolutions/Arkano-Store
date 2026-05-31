/* ============================================================
   ARKANO STORE — APP SHELL + HASH ROUTER
   ============================================================ */

function useHashRoute() {
  const [route, setRoute] = React.useState(window.location.hash || '#/');
  React.useEffect(() => {
    const onHash = () => { setRoute(window.location.hash || '#/'); window.scrollTo({ top: 0 }); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}

function App() {
  const route = useHashRoute();
  const base = route.split('?')[0];

  let Page;
  if (base === '#/' || base === '' || base === '#') Page = <HomePage />;
  else if (base.indexOf('#/juegos') === 0) Page = <JuegosPage />;
  else if (base.indexOf('#/bloodstrike') === 0) Page = <BloodStrikePage />;
  else if (base.indexOf('#/paquetes') === 0) Page = <PaquetesPage />;
  else if (base.indexOf('#/como-funciona') === 0) Page = <ComoFuncionaPage />;
  else if (base.indexOf('#/contacto') === 0) Page = <ContactoPage />;
  else Page = <HomePage />;

  return (
    <div className="min-h-screen flex flex-col bg-void">
      <Navbar route={base} />
      <main className="flex-1">{Page}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
