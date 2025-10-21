import { NavLink } from "react-router-dom"
const Nav=()=>{
  return(<nav>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/new">New</NavLink>
      </div>

  </nav>)
}
export default Nav
