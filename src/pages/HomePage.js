import React from "react";
import '../styles/components/pages/HomePage.css';

const HomePage = (prompt) =>{
    return(
        <main className="holder">
            <div className="home_img">
                <img src="img/home/img_01.png" alt="constructor"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Bienvenidos a Fusion, tu aliado integral en soluciones de calefacción, agua y gas!.</p>
                    <p>En Fusion, somos más que una empresa, somos una familia apasionada por hacer que tu hogar sea el lugar más cómodo y seguro posible. Nos destacamos en la venta y distribución de insumos esenciales para calefacción, agua y gas, pero lo que realmente nos distingue es nuestra capacidad para crear proyectos desde cero, bajo la modalidad llave en mano.</p>
                    <p>Imagina tener la libertad de soñar y nosotros nos encargamos de convertir esos sueños en realidad. En Fusion, no solo suministramos los mejores productos del mercado, sino que también ofrecemos un servicio completo que abarca diseño, instalación y puesta en marcha de proyectos personalizados. Ya sea que estés buscando renovar tu sistema de calefacción, asegurar un suministro eficiente de agua o implementar medidas de seguridad en el uso del gas, estamos aquí para hacerlo posible.</p>
                    <p>Nuestra dedicación va más allá de simplemente ofrecer productos; nos comprometemos a crear soluciones completas que se adapten perfectamente a tus necesidades y estilo de vida. En Fusion, cada proyecto es único y diseñado con atención a cada detalle, garantizando que recibas exactamente lo que buscas.</p>
                    <p>Gracias por elegir a Fusion, donde la innovación y el compromiso se encuentran en cada paso del camino. Descubre la diferencia que marca la excelencia en proyectos llave en mano. ¡Bienvenidos a la familia Fusion, donde tus ideas se convierten en realidad!</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor"> Juan Perez</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
