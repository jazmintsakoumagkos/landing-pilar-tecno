import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'
import Contador from './components/Contador'

function App() {
  return (
    <>
      <Navbar />

      <main id="inicio">
        <Container className="py-5">
          <h1>Bienvenido a Pilar Tecno</h1>
          
          <p>
            Descubrí eventos, conectá con personas y encontrá
            nuevas experiencias.
          </p>
          <Contador />
        </Container>

        <section id="eventos">
          <Container className="py-5">
            <h2>Próximos eventos</h2>
            <p>Muy pronto vas a encontrar nuestros próximos eventos.</p>
          </Container>
        </section>

        <section id="nosotros">
          <Container className="py-5">
            <h2>Sobre nosotros</h2>
            <p>Un espacio para descubrir y compartir experiencias.</p>
          </Container>
        </section>
      </main>
    </>
  )
}

export default App