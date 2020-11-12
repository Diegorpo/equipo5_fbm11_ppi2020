import React, { Component } from 'react';
import Zone  from '../img/Parking.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Ayuda.css';

class Ayuda extends Component {
    render () {
        return(
            <div className="Zone">
                <img src={Logo} />
                <div className="bott">
                <button className="boton"><Link to='/Menu'className="bot"> SIGUIENTE </Link></button>
    
                </div>
                </div>
        )};
    };

export default Ayuda;