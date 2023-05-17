import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../img/fire-favicon-b.png";
import styles from "../styles/styles.css";
import CartWidget from "./CartWidget";
import { Link, Outlet } from "react-router-dom";
import { Home, Remeras, Abrigos, Pantalones, Accesorios } from "../pages";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">
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
      </Link>
      <Link to="/" className="navbar-title">
        <Navbar.Brand className="navbar-title">Fire | E-Commerce</Navbar.Brand>
      </Link>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/category/remeras" className="nav-link">
              Remeras
            </Link>
            <Link to="/category/abrigos" className="nav-link">
              Abrigos
            </Link>
            <Link to="/category/pantalones" className="nav-link">
              Pantalones
            </Link>
            <Link to="/category/accesorios" className="nav-link">
              Accesorios
            </Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
      <Outlet />
    </Navbar>
  );
}

export default NavBar;
