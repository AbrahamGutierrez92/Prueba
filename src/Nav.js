import React from 'react';
import './Nav.css';

function NavBar(){

    function btn(){
        const burger = document.getElementById('burger');
        const ul = document.querySelector('nav ul');

        burger.addEventListener('click',() => {
           ul.classList.toggle('show');
        });
    }
    return(
    <nav>
        <p>AbrahamLogo</p>
        
        <button onClick={btn} id="burger" className="burger">
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