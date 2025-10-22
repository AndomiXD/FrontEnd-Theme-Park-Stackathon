import { NavLink } from "react-router-dom"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

const Navigation = () => {
  return (
    <Navbar
      expand="lg"
      className="main-navbar shadow-sm py-2"
      sticky="top"
      variant="dark"
    >
      <Container className="justify-content-between">
        <Navbar.Brand className="fw-bold fs-4 text-gradient">
          <NavLink to="/">🎢 CrazyCoasters</NavLink>
        </Navbar.Brand>

        <Nav className="gap-4">
          <NavLink to="/" className="nav-link-custom">
            Home
          </NavLink>
          <NavLink to="/new" className="nav-link-custom">
            Add Roller Coaster
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
