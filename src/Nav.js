import React from 'react';
import './Nav.css';

function NavBar(){
    return(
    <nav>
        <p>AbrahamLogo</p>
        
        <button id="burger" className="burger">
          <i className="fas fa-bars"></i>
        </button>
 
        <ul>
            <li><a href>Inicio</a></li>
            <li><a href>Blog</a></li>
            <li><a href>About</a></li>
            <li><a href>Nosotros</a></li>
            <li><a href>Contact</a></li>
        </ul>
    </nav>
    );
}

export default NavBar;