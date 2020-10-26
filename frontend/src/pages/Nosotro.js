import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Guis from '../img/elguis.jpg';
import Icon from '../img/icono1.png';
import Valle from '../img/Elvalle.jpg';
import Brayan from '../img/Elbrayan.jpg';
import Timo from '../img/eltimo.jpg';

import '../styles/Nosotros.css';



function Nosotros (props){
    return (
        <div>
             <Header/>
             <section className="sepcion-uno">
                 <div className="colum-uno">
                     <h2 className="til">Conoce un Poco de Nosotros</h2>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas quas ratione itaque. Sunt itaque, reprehenderit adipisci minima quasi, quaerat quo id, molestiae voluptas dolorum architecto tempora officia facere nihil.</p>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quisquam, officiis reprehenderit maiores ipsam incidunt!</p>
                 </div>
                 <div className="colum-dos">
                    
                 </div>
             </section>
             
             <section className="seccion-dos">
                 <div className="contenedor">
                     <div className="galeria-equi">
                         <img src={Guis} alt=""/>
                         <div className="hover-galeria">
                             <img src={Icon} alt=""/>
                             <p>Hellen Dayana Ramírez Cañas</p>
                             <p>Programadora</p>
                         </div>
                     </div>
                    </div>
                    <div className="contenedor">
                     <div className="galeria-equi">
                         <img src={Valle} alt=""/>
                         <div className="hover-galeria">
                             <img src={Icon} alt=""/>
                             <p>Hellen Dayana Ramírez Cañas</p>
                             <p>Programadora</p>
                         </div>
                     </div>
                    </div>
                    <div className="contenedor">
                     <div className="galeria-equi">
                         <img src={Brayan} alt=""/>
                         <div className="hover-galeria">
                             <img src={Icon} alt=""/>
                             <p>Hellen Dayana Ramírez Cañas</p>
                             <p>Programadora</p>
                         </div>
                     </div>
                    </div>
                    <div className="contenedor">
                     <div className="galeria-equi">
                         <img src={Timo} alt=""/>
                         <div className="hover-galeria">
                             <img src={Icon} alt=""/>
                             <p> Hellen Dayana Ramírez Cañas </p>
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