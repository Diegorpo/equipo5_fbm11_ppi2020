import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Vcomentario.css';

class Vcomentario extends Component{
    render () {
        return(
            <div className="botonn">
                <button className="boton29"><Link to='/Menu'className="bot"> Volver </Link></button>
            <div className="icono ">
                <img src={Parking } alt=" " />
                <div className=" Pagina30">
               <h15> VISUALIZACIÓN DE COMENTARIOS </h15>
                </div>
                </div>
                </div>
        )};
}
export default Vcomentario;