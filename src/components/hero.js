import React from 'react';
import '../styles/hero.scss';

const Hero = ({ showNav }) => {
    return ( 
        <div id="hero-section" style={{ opacity: showNav ? '0' : null, zIndex: showNav ? '100' : '-5' , transitionDelay: showNav ? '0s' : '0.5s' }}>
            <div id="hero-content" data-aos="fade-right" data-aos-delay="1000">
                <h2> Hi, my name is Kenny! </h2>
                <h3> I am a self taught <span>web developer</span> and <span>designer.</span> Take a look at some of <a href="#"> my work. </a></h3>
                <button className="contact-btn"> Work with me <i className="fa fa-envelope"></i></button>
                <a href="https://github.com/kenford20" target="_blank" id="github-link"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/kenny-zhou-35a039177/" target="_blank" id="linkedin-link"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" id="resume-link"><i className="fas fa-file"></i></a>
            </div>
            <img id="hero-img" data-aos="fade-in" src={require("../images/hero3.png")} alt="hero"/>
        </div>
     );
}
 
export default Hero;