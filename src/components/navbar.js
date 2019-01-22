import React from 'react';
import '../styles/navbar.scss';

const Navbar = ({ isActive, toggle }) => {
    return ( 
        <div id='navbar'>
            <span> &lt;Kenny Zhou/></span>
            <nav style={{ display: isActive ? 'block' : 'none' }}>
                <a href="#hero-container">Home</a>
                <a href="#about-container">About Me</a>
                <a href="#contact-container">Contact</a>
                <a href="#portfolio-container">Portfolio</a>
                <a href="#codepen">Codepen</a>
            </nav>
            <div id="hamburger-menu" onClick={ toggle }><span></span></div>
        </div>
     );
}
 
export default Navbar;