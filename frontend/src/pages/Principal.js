import React, { Component } from 'react';
import Logo from '../img/LOGO.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Principal.css';


class Principal extends Component {
    render () {
        return(
            <div>
            <div className="Todo">
            <div className="contenedor">
                <img src={Logo}  alt=" "/>
                <div className="botonn">
                <button className="boton"><Link to='/Menu'className="bot"> SIGUIENTE </Link></button>
    
                </div>
                </div>
                </div>
                </div>
                
        )};
    };

export default Principal;