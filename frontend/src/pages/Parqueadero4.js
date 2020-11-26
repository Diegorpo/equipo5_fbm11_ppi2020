import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Parqueadero4.css'

class Parqueadero4 extends Component {
    render () {
        return(
         <div>
         <div className="Todo">
            <div className="botonn">
            <button className="boton70"><Link to='/Parqueaderos'className="bot"> Volver </Link></button>
            <div className=" icono ">
           <img src={ Parking } alt=" " />
           <div className=" Pagina71">
               <h14> PARQUEADERO 4</h14>
               </div>
               <div className=" Pagina72">
               <h14> Parqueadero la 80 (004) </h14>
               </div>
               <div className=" Pagina73">
               <h14> Tipo de vehículo: Motos y carros  </h14>
               </div>
               <div className=" Pagina74">
               <h14> Precio por hora: $ 2.200 moto  y $3.000 carro</h14>
               </div>
               <div className=" Pagina75">
               <h14> Dirección: Av 80 #79c-95 </h14>
               </div>
               <div className=" Pagina76">
               <h14> Teléfono: 3147748499 </h14>
               </div>
               <div className=" Pagina77">
               <h14> Capacidad del parqueadero: 60 cupos motos(20) y carros(40) </h14>
               </div>
          </div>
          </div>
                </div>
                </div>
                )};
    };

export default Parqueadero4;