import React from 'react';

const About = ({ isResumeOpen }) => {
    return ( 
        <div id="about-section" style={{ zIndex: isResumeOpen ? '-1' : '1' }}>
            <div id="about-header">
                <span><i className="fas fa-user-circle"></i></span>
                <h2 className="section-headers"> About me </h2>
            </div>
            <div id="about-main">
                <div id="about-summary">
                    <h1> Web developer and graphical designer </h1>
                    <h2> My name is Kenny Zhou. I live in Chicago, Illinois. I am passionate about web development and UI/UX design. </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <h3> Education: </h3>
                    <p> B.S. Computer Engineering: University of Illinois at Chicago (2013 - 2018) </p>
                </div>
                <div id="about-description">
                    <img id="about-img" alt="Kenny at a mural" src={require("../images/profile2.png")} />
                    <h1> Kenny Zhou </h1>
                    <h2> Chicago, Illinois </h2>
                    <h3> Web Developer </h3>
                    <h3> UI/UX Designer </h3>
                    <p> Hobbies: <br/>
                     Interests: </p>
                    <a href="#contact-container"><button className="contact-btn"> Contact Me <i className="fa fa-envelope"></i></button></a>
                </div>
            </div>
        </div>
     );
}
 
export default About;