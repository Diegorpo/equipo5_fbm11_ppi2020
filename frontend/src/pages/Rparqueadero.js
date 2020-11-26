import React, { Component } from 'react';
import Parking  from '../img/Zone.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Rparqueadero.css';

class Rparqueadero extends Component {
    render () {
        return(
            <div>
            <div className="Todo">
            <div className="botonn">
            <button className="boton20"><Link to='/Menu'className="bot"> Volver </Link></button>
            <div className=" icono ">
           <img src={ Parking }  alt=" " />
           <div className=" Pagina20">
               <h14> REGISTRO DEL PARQUEADERO </h14>
               <div class="form-group">
            <div class="Mb22">
                <label for="validationTextarea">Nombre del parqueadero </label>
                <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Nombre del parqueadero" required></textarea>
                <div class="invalid-feedback">
                Aún no has escrito un mensaje 
                
              </div>
        </div>
       
        </div>
        <div class="Mb23">
                <label for="validationTextarea">Dirección del parqueadero </label>
                <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Dirección del parqueadero" required></textarea>
                <div class="invalid-feedback">
                Aún no has escrito un mensaje 
                
              </div>
        </div>
       
        </div>
        <div class="Mb24">
                <label for="validationTextarea">Teléfono del parqueadero </label>
                <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Teléfono del parqueadero" required></textarea>
                <div class="invalid-feedback">
                Aún no has escrito un mensaje 
                
              </div>
        </div>
        <div class="Mb25">
                <label for="validationTextarea">Tipo de vehículo </label>
                <textarea class="form-control is-invalid" id="validationTextarea" placeholder=" Tipo de vehículo (ej:motos, carros, buses." required></textarea>
                <div class="invalid-feedback">
                Aún no has escrito un mensaje 
                
              </div>
        </div>
        <div class="Mb26">
                <label for="validationTextarea">Capacidad del parqueadero </label>
                <textarea class="form-control is-invalid" id="validationTextarea" placeholder=" Capacidad del parqueadero " required></textarea>
                <div class="invalid-feedback">
                Aún no has escrito un mensaje 
                
              </div>
        </div>
        <div class="Mb27">
                <label for="validationTextarea">Precio del parqueadero por hora </label>
                <textarea class="form-control is-invalid" id="validationTextarea" placeholder=" Precio del parqueadero por hora" required></textarea>
                <div class="invalid-feedback">
                Aún no has escrito un mensaje 
                <div className="botonn">
                 <button className="boton28"><Link to='/Perfil' className="bot"> Enviar </Link> </button>
                    </div>
              </div>
        </div>
        </div>
               </div>
               </div>
                </div>
            
         
        )};
        
    };
            export default Rparqueadero;