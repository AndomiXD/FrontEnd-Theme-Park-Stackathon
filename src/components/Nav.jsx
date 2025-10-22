import { NavLink } from "react-router-dom"
import Nav from "react-bootstrap/Nav"

const Navigation = () => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/">Home</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <NavLink to="/new">Add Roller Coaster</NavLink>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}
export default Navigation
