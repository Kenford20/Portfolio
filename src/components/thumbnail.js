import React from 'react';
import '../styles/thumbnail.scss';

class Thumbnail extends React.Component {
    render(){
        let path = this.props.path;
        let imgPaths = {
            cajewelers: require('../images/portfolio/cajewelers.png'),
            codenames: require('../images/portfolio/codenames.png'),
            typingWebsite: require("../images/portfolio/typing-website.png")
        };
        return ( 
            <div id="thumbnail-laptop">
                <div id="screen">
                    <span id="camera"></span>
                    <div id="tool-bar">
                        <span className="toolbar-btns"></span>
                        <span className="toolbar-btns"></span>
                        <span className="toolbar-btns"></span>
                        <div id="address-bar"></div>
                    </div>
                    <div id="portfolio-img">
                    <img className="portfolio-item-img" alt={ this.props.altTag } src={ imgPaths[path] }/>
                    </div>
                </div>
                <div id="keyboard">
                    <div id="keys"></div>
                </div>
                <div id="keyboard-base"></div>
                    
                <div id="thumbnail-mobile">
                    <div id="mobile-top">
                        <span id="camera"></span>
                        <span id="speaker"></span>
                    </div>
                    <div id="mobile-bottom">
                        <span id="home-btn"></span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Thumbnail;