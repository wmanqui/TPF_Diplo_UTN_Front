import React from "react";
import '../styles/components/pages/UsPage.css';

const UsPage = (prompt) =>{
    return(
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Nuestra travesía comenzó hace décadas, cuando decidimos emprender este camino como familia, inspirados por la visión de ofrecer soluciones completas a nuestros clientes. Fusion nació con la convicción de que cada proyecto, grande o pequeño, merece atención personalizada y un enfoque integral desde su concepción hasta su implementación</p>
                <p>Lo que nos distingue de otras empresas es nuestra capacidad para materializar ideas desde cero. Nos enorgullece asumir el desafío de crear proyectos llave en mano, un compromiso que abarca el diseño, la instalación y la puesta en marcha. Este enfoque integral nos permite brindar a nuestros clientes la tranquilidad de saber que cada detalle está cuidadosamente planificado y ejecutado por nuestro equipo de expertos.</p>
                <p>En Fusion, entendemos que la calefacción, el suministro de agua y el gas son aspectos fundamentales en la comodidad y funcionalidad de cualquier espacio, ya sea un hogar acogedor, una empresa en crecimiento o un proyecto industrial. Nuestra misión es asegurarnos de que estos elementos esenciales no solo sean funcionales, sino también eficientes y adaptados a las necesidades específicas de cada cliente.</p>
                <p>A lo largo de los años, hemos construido relaciones sólidas con nuestros clientes, basadas en la confianza y la satisfacción. Cada proyecto es una oportunidad para nosotros de superar las expectativas y demostrar nuestro compromiso con la calidad y la atención al detalle.</p>           
                <p>En Fusion, no solo ofrecemos productos y servicios, sino que brindamos soluciones que perduran en el tiempo. Nuestra historia es una continuación de éxitos y aprendizajes, y esperamos con entusiasmo seguir siendo su socio de confianza en la creación y ejecución de proyectos que marcan la diferencia. ¡Bienvenidos a la familia Fusion, donde convertimos sus ideas en realidad!</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="img/us/nosotros1.png" alt=""/>
                        <h5>Javier Marin</h5>
                        <h6>Ventas y Atención al Público</h6>
                        <p>¡Hola! Soy javier, tu experto en ventas y atención al cliente. Mi pasión es ofrecerte una experiencia única y personalizada, porque para mí, cada cliente es especial. Con una sonrisa en el rostro y una actitud positiva, estoy aquí para hacer que tu día sea aún mejor.</p>
                    </div>
                    <div className="persona">
                        <img src="img/us/nosotros2.png" alt=""/>
                        <h5>Ruben Gutierrez</h5>
                        <h6>Compras y Presupuestos</h6>
                        <p>¡Hola, soy Ruben, tu especialista en compras y presupuestos! Mi misión es hacerte sentir seguro y emocionado al navegar por nuestras opciones. Siempre estoy aquí para encontrar las mejores soluciones que se adapten a tus necesidades y presupuesto. ¿Listo para explorar juntos?</p>
                    </div>
                    <div className="persona">
                        <img src="img/us/nosotros3.png" alt=""/>
                        <h5>Patricio Gimenez</h5>
                        <h6>Envios e Instalación</h6>
                        <p>¡Hola, soy Pato!, tu experto en envíos e instalación! Mi objetivo es llevar la comodidad directamente a tu puerta y asegurarme de que todo esté listo para que disfrutes al máximo. Estoy aquí para hacer que todo el proceso sea lo más fácil y agradable posible. ¿Listo para transformar tu espacio?</p>
                    </div>
                    <div className="persona">
                        <img src="img/us/nosotros4.png" alt=""/>
                        <h5>Cristina Paez</h5>
                        <h6>Administración y Pagos</h6>
                        <p>¡Hola, soy Cris!, tu aliada en administración y pagos! Mi enfoque es hacer que todo el proceso sea suave y sin estrés para que puedas centrarte en lo que realmente importa. Estoy aquí para manejar los detalles y garantizar que tus transacciones sean fáciles y seguras. ¿Preparado para una administración sin complicaciones?</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default UsPage;