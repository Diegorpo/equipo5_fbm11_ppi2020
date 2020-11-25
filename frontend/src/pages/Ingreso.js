import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Ingreso.css';

class Ingreso extends Component {
    render () {
        return(
            <div className="botonn">
                <button className="boton11"><Link to='/Menu'className="bot"> Volver </Link></button>
            <div className="icono ">
                <img src={Parking } alt=" " />
                
                <div className="botonn">
                <button className="boton12"><Link to='/Inicio'className="bot"> Iniciar sesión </Link></button>
                <div className="botonn">
                <button className="boton13"><Link to='/Registro'className="bot"> Registrarse  </Link></button>
                </div>
                </div>
                </div>
                </div>
                
        )};
    };

export default Ingreso;