import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Button,
} from 'react-bootstrap'

function Navbar() {
  return (
    <BootstrapNavbar expand="lg" bg="dark" variant="dark">
      <Container>
        <BootstrapNavbar.Brand href="#inicio">
          Pilar Tecno
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="main-navbar" />

        <BootstrapNavbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#eventos">Eventos</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>

            <Button
              variant="outline-light"
              href="#eventos"
              className="mt-2 mt-lg-0"
            >
              Ver eventos
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar