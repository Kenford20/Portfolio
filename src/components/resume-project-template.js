import React from 'react';
import { PropTypes } from 'prop-types';

import '../styles/resume-project-template.scss';

class Project extends React.Component {
    render() {
        const { descriptions, title, technologies, liveLink, githubLink } = this.props;
        let projectDescriptions = <ul className="project-descriptions">
            { descriptions.map((description, index) => <li key={ index }>{ description }</li>) }
        </ul>
        return ( 
            <div id="project-container">
                <h3 className="project-titles"><strong>{ title }</strong></h3>
                <p className="project-technologies">{ technologies } </p>
                <div className="project-links">
                    <a href={ liveLink } target="__blank">Live</a>
                    <span> | </span>
                    <a href={ githubLink } target="__blank">Github</a>
                </div>
                { projectDescriptions }
            </div>
        );
    }
}
 
export default Project;

Project.propTypes = {
    descriptions: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired
}