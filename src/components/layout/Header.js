import React from "react";
import '../../styles/components/layout/Header.css'

const Header = (prompt) =>{
    return(
        <header>
            <div className="holder">
                <img src="img/logo.png" width="300" alt="Kreen Tecnology"/>
                <h1>Empresa de Soluciones Tecnologicas</h1>
            </div>
        </header>

    );
}

export default Header;