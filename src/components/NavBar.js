import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/fire-favicon.png';
import styles from '../styles/styles.css'
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <div>
        <nav>
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="nav-logo d-inline-block align-top"
          />
        </nav>
      </div>
      <Navbar.Brand className="navbar-title" href="#home">Fire | E-Commerce</Navbar.Brand>
      <div>
      </div>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#remeras">Remeras</Nav.Link>
            <Nav.Link href="#abrigos">Abrigos</Nav.Link>
            <Nav.Link href="#pantalones">Pantalones</Nav.Link>
            <Nav.Link href="#accesorios">Accesorios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>

    </Navbar>
  );
}

export default NavBar;