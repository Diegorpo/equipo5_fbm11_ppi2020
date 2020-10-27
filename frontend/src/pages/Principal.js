import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import '../styles/Principal.css';



function Principal(props){
    return(
        <div>
            <Header/>
            
            <main>

<h2 className="titulo "> Parqueaderos </h2>
<section className="sepcion-uno">
    <div className="contenedor-dos">
        <h3 className="titulo-cuatro"> Lugares aledaños </h3>
        <p> La mejor manera de tener tu vehículo a salvo
        </p>
    </div>
    <div className="contenedor-tres">
        <h3 className="titulo-cuatro">Motos </h3>
        <p>La manera más segura para tu vehículo 
        </p>
    </div>
</section>

<section className="sepcion-dos">
    <div className="imagen">
    </div>

    <div className="texto">
        <h2 className="tilulo-dos">Ayuda</h2>
        <p>Mantén tu vehículo seguro </p>
    </div>

</section>

<section className="sepcion-tres">
    <div className="columna-uno">
        <h3 className="titulo-tres">ubicación</h3>
        <p>Si tu carro a salvó deseas tener, con esta aplicación lo puedes obtener</p>
        <p>Acá tendremos tu carro seguro ¡Anímate!</p>
    </div>
    <div className="columna-dos">
        <h3 className="titulo-tres">Beneficios</h3>
        <p>La mejor opción para la seguridad de tu vehículo</p>
    </div>
    <div className="columna-tres">
        <h3 className="titulo-tres">Dificultades</h3>
        <p>Encontraras toda la seguridad que necesitas para  vehículo acá ¡Pruébala ya!.</p>
        
    </div>
</section>
</main>
<Footer/>

        </div>
    );
}
export default Principal;