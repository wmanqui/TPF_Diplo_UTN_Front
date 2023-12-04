import { Link } from "react-router-dom";
import '../../styles/components/layout/Nav.css'

const Nav = (prompt) =>{
    return(
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/us">Nosotros</Link></li>
                    <li><Link to="/novedades">Novedades</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
            </div>
        </nav>
       );
}

export default Nav;