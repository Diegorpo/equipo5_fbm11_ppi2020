import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Parqueaderos.css'

class Parqueaderos extends Component {
    render () {
        return(
            <div className="botonn">
            <button className="boton40"><Link to='/Menu'className="bot"> Volver </Link></button>
            <div className=" icono ">
           <img src={ Parking } />
           <div className=" Pagina40">
               <h14> PARQUEADEROS </h14>
               </div>
            <div className=" Pagina41">
               <h14> Elige tu tipo de vehículo </h14>
               </div>
            <div className=" Pagina42">
               <h14> Opciones: </h14>
               </div>  
            <div className=" Pagina43">
               <h14> Precio por hora </h14>
               </div>    
            <div className=" Pagina44">
               <h14> Ubicación </h14>
               </div>
                
                </div>

          </div>

        )};
    };

export default Parqueaderos;