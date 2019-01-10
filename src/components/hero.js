import React from 'react';
import '../styles/hero.scss';

const Hero = () => {
    return ( 
        <div id="hero-section">
            <h2> Hi, My name is Kenny! </h2>
            <h3> I am a self taught web developer and designer. Take a look at some of <a href="#"> my work. </a></h3>
            <button className="contact-btn"> Work with me <i className="fa fa-envelope"></i></button>
            <a href="#" id="github-link"><i className="fa fa-github"></i></a>
            <a href="#" id="linkedin-link"><i className="fa fa-linkedin"></i></a>
            <img id="hero-img" src={require("../images/hero3.png")} alt="hero"/>
        </div>
     );
}
 
export default Hero;