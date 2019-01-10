import React from 'react';
import '../styles/navbar.scss';

const Navbar = () => {
    return ( 
        <div id='navbar'>
            <span> &lt;Kenny Zhou/></span>
            <nav>
                <a href="#"> Home </a>
                <a href="#"> About Me </a>
                <a href="#"> Contact </a>
                <a href="#"> Services </a>
            </nav>
        </div>
     );
}
 
export default Navbar;