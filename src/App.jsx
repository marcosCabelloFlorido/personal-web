import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Historia from './components/Historia.jsx'
import Proyectos from './components/Proyectos.jsx'
import Stack from './components/Stack.jsx'
import Social from './components/Social.jsx'
import Contacto from './components/Contacto.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Historia />
        <Proyectos />
        <Stack />
        <Contacto />
      </main>
      <footer className="footer container">
        <span>© 2026 Marcos Cabello Florido</span>
        <Social />
      </footer>
    </>
  )
}
