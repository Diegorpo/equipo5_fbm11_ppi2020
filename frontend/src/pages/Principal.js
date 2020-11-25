import React, { Component } from 'react';
import Logo from '../img/LOGO.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Principal.css';


class Principal extends Component {
    render () {
        return(
            <div className="contenedor">
                <img src={Logo}  alt="Responsive image"/>
                <div className="botonn">
                <button className="boton"><Link to='/Menu'className="bot"> SIGUIENTE </Link></button>
    
                </div>
                </div>
        )};
    };

export default Principal;