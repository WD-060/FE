import { NavLink } from "react-router-dom";
import Logout from "./Logout";

function Navbar() {
  return (
    <nav className="navbar bg-neutral-100 shadow-md">
      <ul className="navbar-center flex justify-center gap-16 w-full">
        <li className="btn btn-ghost text-xl"><NavLink to="/" style={({isActive}) => isActive ? {color: "red"} : {color: "#646cff"}}>Home</NavLink></li>
        <li className="btn btn-ghost text-xl"><NavLink to="/about" style={({isActive}) => isActive ? {color: "red"} : {color: "#646cff"}}>About</NavLink></li>
        <li className="btn btn-ghost text-xl"><NavLink to="/contact" style={({isActive}) => isActive ? {color: "red"} : {color: "#646cff"}}>Contact</NavLink></li>
        <li className="btn btn-ghost text-xl"><NavLink to="/students" style={({isActive}) => isActive ? {color: "red"} : {color: "#646cff"}}>Students</NavLink></li>
        <li className="btn btn-ghost text-xl"><Logout /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
