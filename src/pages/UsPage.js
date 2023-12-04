import React from "react";
import '../styles/components/pages/UsPage.css';

const UsPage = (prompt) =>{
    return(
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit assumenda rerum voluptates odio explicabo repudiandae quasi? Sunt nisi consectetur molestias optio commodi! Modi voluptates, laboriosam pariatur ab at ullam.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti fugiat veritatis est minima minus ea veniam fuga eveniet beatae perferendis assumenda, provident, voluptatum ut quam! Consequatur ullam repudiandae facilis!</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="img/us/nosotros1.jpg" alt=""/>
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illo cum dolorem maiores sapiente vero illum molestias. Eligendi eius possimus enim, molestias consequuntur architecto voluptatum! Eveniet eius ullam repellendus odio.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default UsPage;