import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Perfil.css';

class Perfil extends Component {
    render () {
        return(
            <div>
            <div className="Todo">
            <div className="botonn">
                <button className="boton29"><Link to='/Menu'className="bot"> Volver </Link></button>
            <div className="icono ">
                <img src={Parking } alt=" " />
                <div className=" Pagina22">
               <h14> PERFIL </h14>
                <div className="botonn">
                <button className="boton30"><Link to='/Rparqueadero'className="bot"> Edición de parqueaderos </Link></button>
                <div className="botonn">
                <button className="boton31"><Link to='/Vcomentario'className="bot"> Visualización de quejas y sugerencias  </Link></button>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
        )};
};
export default Perfil;