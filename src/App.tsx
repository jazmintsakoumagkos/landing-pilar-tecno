
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from './components/Navbar'
import Contador from './components/Contador'
import EventoCard, { type Evento } from './components/EventoCard'

const eventos: Evento[] = [
  {
    id: 1,
    nombre: 'Introducción al desarrollo web',
    descripcion: 'Conocé los fundamentos de HTML, CSS y JavaScript.',
    fecha: '20/10/2026',
    lugar: 'Aula tecnológica',
  },
  {
    id: 2,
    nombre: 'Taller de React',
    descripcion: 'Aprendé a crear interfaces con componentes.',
    fecha: '25/10/2026',
    lugar: 'Laboratorio de informática',
  },
  {
    id: 3,
    nombre: 'Encuentro de tecnología',
    descripcion: 'Compartí ideas y proyectos con otros estudiantes.',
    fecha: '30/10/2026',
    lugar: 'Auditorio principal',
  },
]

function App() {
  const [eventoSeleccionado, setEventoSeleccionado] =
    useState<Evento | null>(null)

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

        <section id="eventos" className="bg-light">
          <Container className="py-5">
            <h2 className="mb-4">Próximos eventos</h2>

            <Row className="g-4">
              {eventos.map((evento) => (
                <Col key={evento.id} xs={12} md={6} lg={4}>
                  <EventoCard
                    evento={evento}
                    onVerDetalle={setEventoSeleccionado}
                  />
                </Col>
              ))}
            </Row>

            {eventoSeleccionado && (
              <p className="mt-4" role="status">
                Seleccionaste: {eventoSeleccionado.nombre}
              </p>
            )}
          </Container>
        </section>

        <section id="nosotros">
          <Container className="py-5">
            <h2>Sobre nosotros</h2>
            <p>
              Un espacio para descubrir y compartir experiencias.
            </p>
          </Container>
        </section>
      </main>
    </>
  )
}

export default App
