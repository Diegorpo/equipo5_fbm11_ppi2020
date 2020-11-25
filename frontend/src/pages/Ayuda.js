import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Ayuda.css';

class Ayuda extends Component {
    render () {
        return(
            <div className="botonn">
            <button className="boton7"><Link to='/Menu'className="bot"> Volver </Link></button>
            <div className=" icono ">
           <img src={ Parking } alt="Responsive image" />
           <div className=" A ">
           <h12> Ayuda </h12>
           </div>
           <div className="  E ">
                <h13> Botones: </h13>
                </div>
           <div className="botonn">
            <button className="boton8"><Link className="bot"> Volver </Link></button>
            <div className="  S ">
                <h10> Se utiliza para volver a la página del menú. </h10>
                </div>
                </div>
                <div className="botonn">
            <button className="boton9"><Link className="bot"> Ver más </Link></button>
            <div className=" L ">
            <h11> Los lleva a la información del título correspondiente. </h11>
            </div>
            </div>
                </div>
                </div>
        )};
    };

export default Ayuda;