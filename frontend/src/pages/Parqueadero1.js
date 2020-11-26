import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Parqueadero1.css'

class Parqueadero1 extends Component {
    render () {
        return(
         <div>
         <div className="Todo">
            <div className="botonn">
            <button className="boton60"><Link to='/Parqueaderos'className="bot"> Volver </Link></button>
            <div className=" icono ">
           <img src={ Parking } alt=" " />
           <div className=" Pagina61">
               <h14> PARQUEADERO 1</h14>
               </div>
               <div className=" Pagina62">
               <h14> Parqueadero la 95 (001) </h14>
               </div>
               <div className=" Pagina67">
               <h14> Tipo de vehículo: Motos y carros </h14>
               </div>
               <div className=" Pagina63">
               <h14> Precio por hora: $ 3.200 moto; $5.000 carro </h14>
               </div>
               <div className=" Pagina64">
               <h14> Dirección: Cll 95 #68-37 </h14>
               </div>
               <div className=" Pagina65">
               <h14> Teléfono: (4)5885028 </h14>
               </div>
               <div className=" Pagina66">
               <h14> Capacidad del parqueadero: 20 cupos entre motos(10) y carros(10) </h14>
               </div>
          </div>
          </div>
                </div>
                </div>
                )};
    };

export default Parqueadero1;