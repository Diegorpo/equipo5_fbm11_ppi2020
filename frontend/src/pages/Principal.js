import React, { Component } from 'react';
import Logo from '../img/LOGO.jpg';
import { Link } from 'react-router-dom';
import '../styles/Principal.css';


class Principal extends Component {
    render () {
        return(
            <div className="contenedor">
                <img src={Logo} />
                <div className="botonn">
                <button className="boton"><Link className="bot"> Siguiente </Link></button>
                </div>
                
            </div>
        );
    }
}
export default App;