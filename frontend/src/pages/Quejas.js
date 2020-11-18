import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Quejas.css';

class Quejas extends Component {
    render () {
        return(
            <div className="botonn">
            <button className="boton10"><Link to='/Menu'className="bot"> Volver </Link></button>
            <div className=" icono ">
           <img src={ Parking } />
           <div className=" Pagina">
               <h14> QUEJAS Y SUGERENCIAS </h14>
               <div className=" Pagina1">
               <h15> DE LOS PARQUEADEROS </h15>
               </div>
           <div class="form-group">
                <div class="Mb1">
                    <label for="validationTextarea"> Quejas </label>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Dejanos aquí tu queja.." required></textarea>
                    <div class="invalid-feedback">
                    Aún no has escrito un mensaje 
                    <div className="botonn">
                 <button className="Mb4"><Link className="bot"> Enviar </Link> </button>
                    </div>
                  </div>
            </div>
           
            </div>
            <div class="form-group">
                <div class="Mb2">
                    <label for="validationTextarea"> Sugerencias  </label>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Dejanos aquí tu sugerencia..." required></textarea>
                    <div class="invalid-feedback">
                      Aún no has escrito un mensaje 
                      <div className="botonn">
                 <button className="Mb4"><Link className="bot"> Enviar </Link> </button>
                    </div>
                  </div>
            </div>
            
            </div>
            </div>
                
                </div>
                </div>
              
        )};
    };

export default Quejas;