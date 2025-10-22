import { NavLink } from "react-router-dom"
import Nav from "react-bootstrap/Nav"

const Navigation = () => {
  return (
    <>
      <Nav
        className="justify-content-center"
        style={{
          backgroundColor: "#1e1f21",
          textDecoration: "none",
          color: "white",
          height: "40px",
        }}
      >
        <Nav.Item>
          <NavLink
            className="nav-link-style"
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Home
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className="nav-link-style"
            to="/new"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Add Roller Coaster
          </NavLink>
        </Nav.Item>
      </Nav>
    </>
  )
}
export default Navigation
