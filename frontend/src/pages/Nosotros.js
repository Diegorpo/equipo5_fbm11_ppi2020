import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hellen from '../img/Hellen.jpeg';
import Icon from '../img/icono1.png';
import Dani from '../img/Dani.jpg';
import Alejo from '../img/Alejo.jpg';
import Ali from '../img/Ali.jpg';

import '../styles/Nosotros.css';



function Nosotros (props){
    return (
        <div>
             <Header/>
             <section className="sepcion-uno">
                 <div className="colum-uno">
                     <h2 className="til">Acerca de nosotros</h2>
                     <p>La mejor manera de tener tu vehículo a salvo.</p>
                
                 </div>
                 <div className="colum-dos">
                    
                 </div>
             </section>
             
             <section className="seccion-dos">
                 <div className="contenedor">
                     <div className="galeria-equi">
                         <img src={Hellen} alt=""/>
                         <div className="hover-galeria">
                             <img src={Icon} alt=""/>
                             <p>Hellen Dayana Ramírez Cañas</p>
                             <p>Programadora</p>
                         </div>
                     </div>
                    </div>
                    <div className="contenedor">
                     <div className="galeria-equi">
                         <img src={Dani} alt=""/>
                         <div className="hover-galeria">
                             <img src={Icon} alt=""/>
                             <p>Daniela Londoño Argotti</p>
                             <p>Programadora</p>
                         </div>
                     </div>
                    </div>
                    <div className="contenedor">
                     <div className="galeria-equi">
                         <img src={Alejo} alt=""/>
                         <div className="hover-galeria">
                             <img src={Icon} alt=""/>
                             <p>Diego Alejandro Restrepo Soto </p>
                             <p>Programadora</p>
                         </div>
                     </div>
                    </div>
                    <div className="contenedor">
                     <div className="galeria-equi">
                         <img src={Ali} alt=""/>
                         <div className="hover-galeria">
                             <img src={Icon} alt=""/>
                             <p> Allison Gonzalez Flórez </p>
                             <p> Programadora </p>
                         </div>
                     </div>
                    </div>
             </section>
            <Footer/>
        </div>
        

    );
}
export default Nosotros;