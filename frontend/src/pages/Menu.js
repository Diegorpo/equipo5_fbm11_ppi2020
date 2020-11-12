import React, { Component } from 'react';
import Zone  from '../img/Parking.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

class Menu extends Component {
    render () {
        return(
            <div className="fondo">
                <img src={ Zone } />

                <div class="card" >
                <div class="card-body">
                  <h1 class="card-title1"> Ir a los parqueaderos  </h1>
                  <button className="boton1"><Link to='/Parqueaderos'className="bot"> Ver más </Link></button>
                </div>
                </div>
                <div class="card" >
                <div class="card-body">
                  <h2 class="card-title2"> Ayuda </h2>
                  <button className="boton2"><Link to='/Ayuda'className="bot"> Ver más </Link></button>
                </div>
                </div>
                <div class="card" >
                <div class="card-body">
                  <h3 class="card-title3"> Quejas y sugerencias  </h3>
                  <button className="boton3"><Link to='/Quejas'className="bot"> Ver más </Link></button>
                </div>
                </div>
                <div class="card" >
                <div class="card-body">
                  <h4 class="card-title4"> Acerca de  </h4>
                  <button className="boton4"><Link to='/Acerca'className="bot"> Ver más </Link></button>
                </div>
                </div>
                <div class="card" >
                <div class="card-body">
                  <h5 class="card-title5"> Ingresar como administrador </h5>
                  <button className="boton5"><Link to='/Ingreso'className="bot"> Ver más </Link></button>
                </div>
                </div>
            </div>
        
        )};
    };

export default Menu;