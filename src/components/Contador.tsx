
import { useState } from 'react'
import { Button } from 'react-bootstrap'

interface ContadorProps {
  titulo: string
}

function Contador({ titulo }: ContadorProps) {
  const [contador, setContador] = useState<number>(0)

  return (
    <section className="my-4">
      <h3>{titulo}</h3>
      <p>Valor actual: {contador}</p>

      <Button onClick={() => setContador(contador + 1)}>
        Sumar uno
      </Button>

      <Button
        variant="secondary"
        className="ms-2"
        onClick={() => setContador(0)}
      >
        Reiniciar
      </Button>
    </section>
  )
}

export default Contador
