import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Parqueaderos.css'

class Parqueaderos extends Component {
    render () {
        return(
         <div>
         <div className="Todo">
            <div className="botonn">
            <button className="boton50"><Link to='/Menu'className="bot"> Volver </Link></button>
            <div className=" icono ">
           <img src={ Parking } alt=" " />
           <div className=" Pagina50">
               <h14> PARQUEADEROS </h14>
               </div>
          
            <div className=" Pagina60">
               <h14> Opciones: </h14>
               </div>  
               <div className="botonn">
            <button className="boton51"><Link to='/Parqueadero1'className="bot"> Parqueadero 1 </Link></button>
            <div className="botonn">
            <button className="boton53"><Link to='/Parqueadero2'className="bot"> Parqueadero 2 </Link></button>
            <div className="botonn">
            <button className="boton52"><Link to='/Parqueadero3'className="bot"> Parqueadero 3 </Link></button>
            <div className="botonn">
            <button className="boton54"><Link to='/Parqueadero4'className="bot"> Parqueadero 4 </Link></button>
                
                </div>

          </div>
          </div>
                </div>
                     
                </div>

          </div>
          </div>
                </div>

        )};
    };

export default Parqueaderos;