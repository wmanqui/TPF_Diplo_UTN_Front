import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css'

const Nav = (prompt) =>{
    return(
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to = "/" className = {({ isActive }) => isActive ? "activo" : undefined}>Home</ NavLink ></li>
                    <li><NavLink to = "/us" className = {({ isActive }) => isActive ? "activo" : undefined}>Nosotros</NavLink></li>
                    <li><NavLink to = "/novedades" className = {({ isActive }) => isActive ? "activo" : undefined}>Productos/Servicios</NavLink></li>
                    <li><NavLink to = "/contact" className = {({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
       );
}

export default Nav;