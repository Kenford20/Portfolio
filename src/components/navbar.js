import React from 'react';
import '../styles/navbar.scss';

const Navbar = () => {
    return ( 
        <div id='navbar'>
            <span> &lt;Kenny Zhou/></span>
            <nav>
                <a href="#hero-container">Home</a>
                <a href="#about-container">About Me</a>
                <a href="#contact-container">Contact</a>
                <a href="#portfolio-container">Portfolio</a>
                <a href="#codepen">Codepen</a>
            </nav>
        </div>
     );
}
 
export default Navbar;