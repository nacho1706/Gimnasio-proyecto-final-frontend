import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import icono from "../imagen/icono.png"

const NavbarP = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark">
      <Container fluid className="navbar px-5">
        <Navbar.Brand href="#home">
          <img
            src="src/assets/i_will_design_eye_catching_modern_sports__fitness_and_gym_logo-removebg-preview.png"
            alt=""
            width={120}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="/HomeUser"><img src={icono} alt="" width={90} /></Nav.Link>
          <Nav className="me-auto">
            <Nav.Link href="/Nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/Turnos">Turnos</Nav.Link>
          </Nav>
          <Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#link">Iniciar Sesion</Nav.Link>
              <Nav.Link href="#link">Registrarse</Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarP;
