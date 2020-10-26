import React, { Component } from 'react';
import Logo from '../img/LOGO.jpg';
import '../styles/Registro.css';

class Registro extends Component {
    render (){
        return(
            <div>
               <main>
                   <img className="Avatar" src={Logo} alt=""/>
                   <div className="contenedor">
                       <div className="formulario">
                           <h2>Registrarse</h2>
                           <from>
                               <input type="text" placeholder="Nombre"/>
                               <input type="text" placeholder="Apellido"/>
                               <input type="text" placeholder="Correo"/>
                               <input type="text" placeholder="Contraseñ1"/>
                               <input type="submit" placeholder="Ingresar"/>
                           </from>
                       </div>
                   </div>
               </main>

            </div>
        );
    }

}
export default Registro;