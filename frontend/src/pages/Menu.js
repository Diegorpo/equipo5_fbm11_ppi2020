import React, { Component } from 'react';
import Logo from '../img/Parking.jpg';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

class Menu extends Component {
    render () {
        return(
            <div className="contenedor">
                <img src={ Logo } />
                <div className="botonn">
                <button className="boton1"><Link className="bot"> Acerca </Link></button>
                </div>
                <div className="botonn1">
                <button className="boton2"><Link className="bot"> Ir a los parqueaderos</Link></button>
                </div>
            <div className="botonn2">
            <button className="boton3"><Link className="bot"> Ayuda </Link></button>
            </div>
            <div className="botonn3">
            <button className="boton4"><Link className="bot"> Quejas y sugerencias </Link></button>
            </div>
            <div className="botonn4">
            <button className="boton5"><Link className="bot"> Ingresar como administrador  </Link></button>
            </div>
        </div>
        )};
    };

export default Menu;