import React from "react";
import '../../styles/components/layout/Header.css'

const Header = (prompt) =>{
    return(
        <header>
            <div className="holder">
                <img src="img/logo.png" width="100" alt="logo-fusion-rg"/>
                <h1>FUSION</h1>
            </div>
        </header>

    );
}

export default Header;