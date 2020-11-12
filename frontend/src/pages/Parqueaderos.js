import React, { Component } from 'react';
import Zone  from '../img/Parking.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Parqueaderos.css'

class Principal extends Component {
    render () {
        return(
            <div className="contenedor">
                <img src={Logo} />
                <div className="botonn">
                <button className="boton"><Link to='/Menu'className="bot"> SIGUIENTE </Link></button>
    
                </div>
                </div>
        )};
    };

export default Parqueaderos;