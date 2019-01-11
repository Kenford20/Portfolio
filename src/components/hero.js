import React from 'react';
import '../styles/hero.scss';

const Hero = () => {
    return ( 
        <div id="hero-section">
            <h2> Hi, My name is Kenny! </h2>
            <h3> I am a self taught <span>web developer</span> and <span>designer.</span> Take a look at some of <a href="#"> my work. </a></h3>
            <button className="contact-btn"> Work with me <i className="fa fa-envelope"></i></button>
            <a href="#" id="github-link"><i className="fab fa-github"></i></a>
            <a href="#" id="linkedin-link"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" id="resume-link"><i className="fas fa-file"></i></a>
            <img id="hero-img" src={require("../images/hero3.png")} alt="hero"/>
        </div>
     );
}
 
export default Hero;