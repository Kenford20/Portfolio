import React from 'react';
import '../styles/navbar.scss';

const Navbar = () => {
    return ( 
        <div id='navbar'>
            <span> &lt;Kenny Zhou/></span>
            <nav>
                <a href="#">Home</a>
                <a href="#">About Me</a>
                <a href="#">Contact</a>
                <a href="#">Portfolio</a>
                <a href="#">Codepen</a>
            </nav>
        </div>
     );
}
 
export default Navbar;