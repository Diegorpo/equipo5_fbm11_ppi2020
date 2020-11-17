import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Inicio.css';

class   Inicio extends Component {
    render () {
        return(
            <div className="botonn">
            <button className="boton16"><Link to='/Menu'className="bot"> Volver </Link></button>
            <div className=" icono ">
           <img src={ Parking } />
           <div className=" Pagina">
            <h20> Inicio de sesión </h20>
               
           <div class="form-group">
                <div class="Mb7">
                    <label for="validationTextarea"> Correo electrónico </label>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Correo electrónico" required></textarea>
                    <div class="invalid-feedback">
                    Aún no has escrito un mensaje 
                  </div>
            </div>
            </div>
            <div class="form-group">
                <div class="Mb8">
                    <label for="validationTextarea"> Contraseña </label>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Contraseña" required></textarea>
                    <div class="invalid-feedback">
                      Aún no has escrito un mensaje 
                      <div className="botonn">
                 <button className="boton17"><Link to='/Perfil' className="bot"> Iniciar sesión </Link> </button>
                    </div>
                  </div>
            </div>
            
            </div>
           
            
            </div>
            </div>
                
                </div>
            
              
        )};
    };

export default Inicio;