import React, { Component } from 'react';
import Parking from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Acerca.css';
import Hellen from '../img/Cañas.jpeg';
import Allison from '../img/Florez.jpeg';
import Daniela from '../img/Argotti.png';
import Alejandro from '../img/Soto.png';

class Acerca extends Component {
    render () {
        return(
        
            
                <div className="botonn">
                 <button className="boton6"><Link to='/Menu'className="bot"> Volver </Link></button>
                 <div className=" icono ">
                <img src={ Parking } alt="Responsive image" />
               </div>
               <div className=" Ac ">
                <h9> ACERCA DE  </h9>
                </div>
                <div className=" Qu ">
                <p> ¿Quiénes somos? </p>
                </div>
                <div className=" So ">
                <h8> Somos 4 estudiantes de la institución educativa Félix de Bedout Moreno del grado undécimo; decidimos crear una app para ayudar con el problema de movilidad que se viene prsentando en el sector de la comuna 5. </h8>
                </div>
                <img src={ Hellen }  alt="Responsive image"/>
                <img src={ Allison }  alt="Responsive image"/>
                <img src={ Daniela } alt="Responsive image" />
                <img src={ Alejandro } alt="Responsive image"/>
                </div>
                
        )};
    };

export default Acerca;