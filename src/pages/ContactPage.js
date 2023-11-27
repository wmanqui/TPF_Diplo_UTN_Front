/*
import React from "react";

const ContactPage = (prompt) =>{
    return(
        <div>ContactPage</div>
    );
}

export default ContactPage;
*/

import React from "react";

const ContactPage = (props) => {
    return(
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form>
                    <p>
                        <label for = 'nombre'>Nombre</label>
                        <input type = 'text' name=''/>
                    </p>
                    <p>
                        <label for = 'email'>Email</label>
                        <input type = 'text' name=''/>
                    </p>
                    <p>
                        <label for = 'telefono'>Telefono</label>
                        <input type = 'text' name=''/>
                    </p>
                    <p>
                        <label for = 'mensaje'>Mensaje</label>
                        <textarea name=''></textarea>
                    </p>
                    <p class="acciones">
                        <input type='submit' value='Enviar'/>

                    </p>
                </form>
            </div>
        </main>
    )
}

export default ContactPage;
