import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Inicio.css';

class   Inicio extends Component {
    render () {
        return(
            <div>
            <div className="Todo">
            <div className="botonn">
            <button className="boton16"><Link to='/Ingreso'className="bot"> Volver </Link></button>
            <div className=" icono ">
           <img src={ Parking } alt=" " />
           <div className=" Pagina6">
            <h20> Inicio de sesión </h20>
               
           <div class="form-group">
                <div class="Mb21">
                    <label for="validationTextarea"> Nombre de usuario </label>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Nombre de usuario" required></textarea>
                    <div class="invalid-feedback">
                    Aún no has escrito un mensaje 
                  </div>
            </div>
            </div>
            <div class="form-group">
                <div class="Mb9">
                    <label for="validationTextarea"> Correo electrónico </label>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Correo electrónico" required></textarea>
                    <div class="invalid-feedback">
                    Aún no has escrito un mensaje 
                  </div>
            </div>
            </div>
            <div class="form-group">
                <div class="Mb10">
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
                </div>
                
                </div>
            
              
        )};
    };

export default Inicio;