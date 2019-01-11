import React from 'react';
import '../styles/skills.scss';

const Skills = () => {
    return ( 
        <div id="skills-section">

            <div id="skills-header">
                <i className="fas fa-desktop"></i>
                <h2> Technologies I Use </h2>
            </div>
            <div id="skills-items-wrapper">
                <div className="skills-item">
                    <i className="fab fa-html5"></i>
                    <h5>HTML</h5>
                </div>
                <div className="skills-item">
                    <i className="fab fa-css3"></i>
                    <h5>CSS</h5>
                </div>
                <div className="skills-item">
                    <i className="fab fa-js"></i>
                    <h5>Javascript</h5>
                </div>
                <div className="skills-item">
                    <i className="fab fa-node"></i>
                    <h5>NodeJS</h5>
                </div>
                <div className="skills-item">
                    <i className="fab fa-react"></i>
                    <h5>ReactJS</h5>
                </div>
                <div className="skills-item">
                <i className="icon-mongodb"></i> 
        
                    <h5>MongoDB</h5>
                </div>
                <div className="skills-item">
                <i className="icon-bootstrap"></i> 
        
                    <h5>Bootstrap</h5>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;