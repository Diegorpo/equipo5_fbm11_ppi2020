import React from 'react';
import '../styles/Header.css';
import Logo from '../img/LOGO.jpg';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <nav>
                <img src={Logo}  width="50" height="50" alt="" loading="lazy" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food">
                    <i className="fa fa-bars"></i>
                </button>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/sesion">Registrarse</Link></li>
                    <li><Link to="/nosotros">Acerca de</Link></li>
                </ul>
            </nav>
            <section className="Texto-header">
                <h1>Parking Zone</h1>
                <h2>Mantén tu vehículo seguro</h2>
            </section>
            <div className="Wave" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" ><path d="M-14.39,80.42 C149.99,150.00 263.82,-13.31 499.15,56.73 L509.31,186.02 L-13.82,169.23 Z" ></path></svg></div>
        </header> 
    );
}
export default Header;