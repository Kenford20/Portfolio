import React from 'react';
import '../styles/about.scss';

const About = () => {
    return ( 
        <div id="about-section">
            <div id="about-header">
                <h2> About me </h2>
                <span><i class="fas fa-user"></i></span>
            </div>
            <div id="about-main">
                <div id="about-summary">
                    <h1> Web developer and graphical designer </h1>
                    <h2> My name is Kenny Zhou. I live in Chicago, Illinois. I am passionate about web development and UI/UX design. </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <h3> Education: </h3>

                </div>
                <div id="about-description">
                    {/* <img id="about-img" alt="Picture of Kenny" src={require()} /> */}
                    <h1> Kenny Zhou </h1>
                    <h2> Chicago, Illinois </h2>
                    <h3> Web Developer </h3>
                    <h3> UI/UX Designer </h3>
                    <p> Hobbies: </p>
                    <p> Interests: </p>
                    <button> Contact Me </button>
                </div>
            </div>
        </div>
     );
}
 
export default About;