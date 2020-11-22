import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Perfil.css';

class Perfil extends Component {
    render () {
        return(
            <div className="botonn">
                <button className="boton29"><Link to='/Menu'className="bot"> Volver </Link></button>
            <div className="icono ">
                <img src={Parking } />
                <div className=" Pagina22">
               <h14> PERFIL </h14>
                <div className="botonn">
                <button className="boton30"><Link to='/Inicio'className="bot"> Edición de parqueaderos </Link></button>
                <div className="botonn">
                <button className="boton31"><Link to='/Registro'className="bot"> Visualización de quejas y sugrencias  </Link></button>
                </div>
                </div>
                </div>
                </div>
                </div>
        )};
};
export default Perfil;