import { Card, Button } from 'react-bootstrap'

export interface Evento {
  id: number
  nombre: string
  descripcion: string
  fecha: string
  lugar: string
}

interface EventoCardProps {
  evento: Evento
  onVerDetalle: (evento: Evento) => void
}

function EventoCard({ evento, onVerDetalle }: EventoCardProps) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{evento.nombre}</Card.Title>

        <Card.Text>{evento.descripcion}</Card.Text>

        <p>
          <strong>Fecha:</strong> {evento.fecha}
        </p>

        <p>
          <strong>Lugar:</strong> {evento.lugar}
        </p>

        <Button
          variant="primary"
          className="mt-auto"
          onClick={() => onVerDetalle(evento)}
        >
          Ver detalles
        </Button>
      </Card.Body>
    </Card>
  )
}

export default EventoCard