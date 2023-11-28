import React from "react";

const HomePage = (prompt) =>{
    return(
        <main className="holder">
            <div className="home_img">
                <img src="img/home/img_01.png" alt="Pantalla"/>
            </div>
            <div className="columns">
                <div className="welcome">
                    <h2>Bienvenidos</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit assumenda rerum voluptates odio explicabo repudiandae quasi? Sunt nisi consectetur molestias optio commodi! Modi voluptates, laboriosam pariatur ab at ullam.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit assumenda rerum voluptates odio explicabo repudiandae quasi? Sunt nisi consectetur molestias optio commodi! Modi voluptates, laboriosam pariatur ab at ullam.</p>
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
