import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Registro.css';

class Registro extends Component {
    render () {
        return(
            <div className="botonn">
            <button className="boton14"><Link to='/Menu'className="bot"> Volver </Link></button>
            <div className=" icono ">
           <img src={ Parking } />
           <div className=" Pagina4">
               <h14> REGISTRARSE </h14>
               
           <div class="form-group">
                <div class="Mb8">
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Nombre completo" required></textarea>
                    <div class="invalid-feedback">
                    Aún no has escrito un mensaje 
                    </div>
                
                </div>

          </div>


            <div class="form-group">
                <div class="Mb5">
                <label for="validationTextarea">Correo electronico</label>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Correo electrónico" required></textarea>
                    <div class="invalid-feedback">
                      Aún no has escrito un mensaje 
                      </div>
            </div>
                
                </div>
           

            <div class="form-group">
                <div class="Mb6">
                    <label for="validationTextarea"> Número de documento</label>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Número de documento" required></textarea>
                    <div class="invalid-feedback">
                      Aún no has escrito un mensaje 
                      
                      </div>
            </div>
                
                </div>

            <div class="form-group">
                <div class="Mb7">
                    <label for="validationTextarea"> Contraseña </label>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Contraseña" required></textarea>
                    <div class="invalid-feedback">
                      Aún no has escrito un mensaje 
                      <div className="botonn">
                 <button className="boton15"><Link to='/Perfil'className="bot"> Registrarse </Link> </button>
                   
            
            
            </div>
            </div>
                
                </div>
                </div>
                      </div>

                      </div>
          
                      </div>
           
              
        )};
    };

export default Registro;