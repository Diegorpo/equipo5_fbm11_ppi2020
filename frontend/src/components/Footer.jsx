import React from 'react';
import '../styles/Footer.css'


function Footer(props) {
    return (
        <footer>
             <div className="icon-text-text">
                <ul className="social">
                    <li>
                        <a href="Correo:Londonoargottidaniela@gmail.com" target="_blank">
                            <i className="fa fa-envelope-o"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100009101424333" target="_blank">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/argotti_15?igshid=qbvcuoryqylt" target="_blank">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <p className="text"><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, voluptas.</em></p>


            </div>
            <div className="segundo-footer">
                <p>
                     <a href="index.html" target="_blank">Parking Zone</a>
                </p>
            </div>
        </footer>

    );
    
}
export default Footer;