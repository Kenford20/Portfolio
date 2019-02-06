import React from 'react';
import { PropTypes } from 'prop-types';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.showText = this.showText.bind(this);
        this.hideText = this.hideText.bind(this);

        this.state = {
            showText: false
        };
    }

    showText() {
        this.setState({ showText: true });
    }
    hideText() {
        this.setState({ showText: false });
    }

    render() {
        const imgUrls = {
            'piano': require("../images/codepen/piano.png"),
            'pomodoroClock': require("../images/codepen/pomodoro-clock.png"),
            'quoteMachine': require("../images/codepen/quote-machine.png"),
            'markdownPreviewer': require("../images/codepen/markdown-previewer.png"),
            'calculator': require("../images/codepen/calculator.png")
        }
        let imgUrl = imgUrls[this.props.imgUrl];
        const { altTag, title, description, projectUrl } = this.props;

    return ( 
        <div className="codepen-item">
            <div className="project-img-wrapper" onMouseOver={ this.showText } onMouseLeave={ this.hideText }>
                <img 
                    src={ imgUrl } 
                    alt={ altTag } 
                    style={{ opacity: this.state.showText ? '0.1' : '1' }}>
                </img>
            </div>
            <div 
                className="project-description" 
                onMouseOver={ this.showText } 
                onMouseLeave={ this.hideText }
                style={{ opacity: this.state.showText ? '1' : '0' }}
                >
                <h2>{ title }</h2>
                <p>{ description }</p>
                <a href={ projectUrl } target="_blank" rel="noopener noreferrer">View Pen</a>
            </div>
        </div>
     );
    }
}
 
export default Project;

Project.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    altTag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired
};