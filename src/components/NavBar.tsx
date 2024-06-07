import { Link, Outlet } from "react-router-dom"

const NavBar = () => {
  return (
  <nav>
    <ul className="nav-bar">
        <li>
            <Link to="/home">HOME 🏠</Link>
        </li>
        <li>
            <Link to="/todo">APP 👾</Link>
        </li>
    </ul>
    <Outlet/>
  </nav>
)
}
export default NavBar
