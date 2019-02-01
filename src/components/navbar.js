import React from 'react';

const Navbar = ({ isActive, toggle }) => {
    return ( 
        <div id='navbar'>
            <span> &lt;Kenny Zhou/></span>
            <nav style={{ opacity: isActive ? '1' : null, zIndex: isActive ? '100' : '-5' , transitionDelay: isActive ? '0.5s' : '0s' }}>
                <a href="#hero-container">Home</a>
                <a href="#about-container">About Me</a>
                <a href="#contact-container">Contact</a>
                <a href="#portfolio-container">Portfolio</a>
                <a href="#codepen">Codepen</a>
            </nav>
            <div id="hamburger-menu" onClick={ toggle }>
                <span style={{ background: isActive ? 'transparent' : 'white' }} className={ isActive ? 'spin spin2' : null }></span>
            </div>
        </div>
     );
}
 
export default Navbar;