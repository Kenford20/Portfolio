import React from 'react';
import '../styles/resume-project-template.scss';

class Project extends React.Component {
    render() {
        let projectDescriptions = <ul className="project-descriptions">
            { this.props.descriptions.map((description, index) => <li key={ index }>{ description }</li>) }
        </ul>
        return ( 
            <div id="project-container">
                <h3 className="project-titles"><strong>{ this.props.title }</strong></h3>
                <p className="project-technologies">{ this.props.technologies } </p>
                <div className="project-links">
                    <a href={ this.props.liveLink } target="__blank">Live</a>
                    <span> | </span>
                    <a href={ this.props.githubLink } target="__blank">Github</a>
                </div>
                { projectDescriptions }
            </div>
        );
    }
}
 
export default Project;