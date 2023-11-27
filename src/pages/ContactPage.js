import React from "react";
//Se utiliza estas dependencias para controlar el formulario,
//el feedback del mismo y realizar el envio de los datos cargados
//por el usuario hacia la api.
import { useState } from "react";
import axios from "axios";

const ContactPage = (props) => {

 //Inicializo las variables del formulario con todos sus valores vacios. 
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false); //encargada de mostrar o no al usuario el estado de "enviando..."
    const [msg, setMsg] = useState(''); //almacena y muestra el msj recibido por la API para indicar al usuario que su información fue enviada
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e =>{
        const { name, value } = e.target;
        setFormData(oldData =>({
               oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => { //Controla el envio de los datos y la actualización de las variables de estado que controlan el feedback que el usuario recibe.
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false){
            setFormData(initialForm)
        }
    }

    return(
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label>Nombre</label>
                        <input type='text' name='nombre' value={formData.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type='text' name='email' value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type='text' name='telefono' value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name='mensaje' value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    {sending? <p>Enviando...</p>: null}
                    {msg? <p>{msg}</p> : null}
                        <p className="centrar">
                        <input type='submit' value='Enviar'/>
                        </p>
                </form>
            </div>
        </main>
    )
}

export default ContactPage;
