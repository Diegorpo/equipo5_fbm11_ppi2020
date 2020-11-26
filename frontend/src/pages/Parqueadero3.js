import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Parqueadero3.css'

class Parqueadero3 extends Component {
    render () {
        return(
         <div>
         <div className="Todo">
            <div className="botonn">
            <button className="boton80"><Link to='/Parqueaderos'className="bot"> Volver </Link></button>
            <div className=" icono ">
           <img src={ Parking } alt=" " />
           <div className=" Pagina81">
               <h14> PARQUEADERO 3</h14>
               </div>
               <div className=" Pagina82">
               <h14> Parqueadero el paisa (003) </h14>
               </div>
               <div className=" Pagina83">
               <h14> Tipo de vehículo: Motos  </h14>
               </div>
               <div className=" Pagina84">
               <h14> Precio por hora: $ 4.000 moto </h14>
               </div>
               <div className=" Pagina85">
               <h14> Dirección: Cll 108 #75-28 </h14>
               </div>
               <div className=" Pagina86">
               <h14> Teléfono: (4)2377179 </h14>
               </div>
               <div className=" Pagina87">
               <h14> Capacidad del parqueadero: 20 cupos solo Motos </h14>
               </div>
          </div>
          </div>
                </div>
                </div>
                )};
    };

export default Parqueadero3;