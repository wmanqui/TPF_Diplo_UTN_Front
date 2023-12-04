import React from "react";
import '../../styles/components/layout/Header.css'

const Header = (prompt) =>{
    return(
        <header>
            <div className="holder">
                <img src="img/logo.png" width="100" alt="logo-fusion-rg"/>
                <h1>FUSION</h1>
                <div>
                    <h5>Instalaciones para tu obra</h5> 
                </div>    
             </div>
        </header>

    );
}

export default Header;