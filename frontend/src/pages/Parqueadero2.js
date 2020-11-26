import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Parqueadero2.css'

class Parqueadero2 extends Component {
    render () {
        return(
         <div>
         <div className="Todo">
            <div className="botonn">
            <button className="boton90"><Link to='/Parqueaderos'className="bot"> Volver </Link></button>
            <div className=" icono ">
           <img src={ Parking } alt=" " />
           <div className=" Pagina91">
               <h14> PARQUEADERO 2</h14>
               </div>
               <div className=" Pagina92">
               <h14> Parqueadero Quibdo (002) </h14>
               </div>
               <div className=" Pagina93">
               <h14> Tipo de vehículo: Carros </h14>
               </div>
               <div className=" Pagina94">
               <h14> Precio por hora:  $2.000 carro </h14>
               </div>
               <div className=" Pagina95">
               <h14> Dirección: Crra 66  #97-18 </h14>
               </div>
               <div className=" Pagina96">
               <h14> Teléfono: (4)4640404 </h14>
               </div>
               <div className=" Pagina97">
               <h14> Capacidad del parqueadero: 50 cupos solo carros </h14>
               </div>
          </div>
          </div>
                </div>
                </div>
                )};
    };

export default Parqueadero2;