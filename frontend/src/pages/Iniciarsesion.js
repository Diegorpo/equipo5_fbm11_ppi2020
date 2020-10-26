import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/LOGO.jpg';
import '../styles/Iniciarsesion.css';



class Iniciarsesion extends Component {
    render () {
        return (
            <div>
                
                <main>
                    <section className="contenedor">
                        <div className="columna-uno">
                            <div className="COLUMNA">
                                <img className="Avatar" src={Logo} alt=""/>
                                <h2>
                                    Iniciar Sesion
                                </h2>
                                <from>
                                    <input type="text" placeholder="Correo"/>
                                    <input type="text" placeholder="Contraseña"/>
                                    <input type="submit" value="Ingresar"/>
                                    <div className="pregunta">
                                    <Link to="/registro">¿No te has Registrado?</Link>
                                    </div>
                                </from>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );

    }
   
}
export default Iniciarsesion;