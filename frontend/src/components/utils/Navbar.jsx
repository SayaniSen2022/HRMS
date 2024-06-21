import { NavLink } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
        <nav className="nav-cont">
            <ul>
                <li><NavLink to="/" style={({isActive})=>({color: isActive ? "deeppink": '', opacity: isActive ? 1 : ""})}>Home</NavLink></li>
                {/* <li><NavLink to="/signup" style={({isActive})=>({color: isActive ? "deeppink": '', opacity: isActive ? 1 : ""})}>Sign Up</NavLink></li> */}
                <li><NavLink to="/adminlogin" style={({isActive})=>({color: isActive ? "deeppink": '', opacity: isActive ? 1 : ""})}>Login</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar