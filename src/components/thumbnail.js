import React from 'react';
import '../styles/thumbnail.scss';

class Thumbnail extends React.Component {
    constructor(props) {
        super(props);

        this.thumbnailHoverHandler = this.thumbnailHoverHandler.bind(this);
        this.buttonHandler = this.buttonHandler.bind(this);
        this.state = { showBtn: false };
    }

    thumbnailHoverHandler() {
        this.setState(prevState => { 
            return { showBtn: !prevState.showBtn }
        });
    }

    buttonHandler() {
        this.setState({ showBtn: true });
    }

    render(){
        const { animation, animationDelay, altTag, altTagMobile, path, pathMobile, btnPosition, siteUrl } = this.props;

        let imgPaths = {
            cajewelers: require('../images/portfolio/cajewelers.png'),
            cajewelersM: require('../images/portfolio/cajewelers-mobile.png'),
            codenames: require('../images/portfolio/codenames.png'),
            typingWebsite: require("../images/portfolio/typing-website.png")
        };
        let siteBtn = this.state.showBtn ? <button id="site-btn" onMouseEnter={ this.buttonHandler } onMouseLeave={ this.thumbnailHoverHandler } style={{ right: btnPosition }}>Visit Site</button> : '';

        return ( 
        <a href={ siteUrl } target="_blank">
            { siteBtn }
            <div id="thumbnail-laptop" data-aos={ animation } data-aos-delay={ animationDelay } onMouseEnter={ this.thumbnailHoverHandler } onMouseLeave={ this.thumbnailHoverHandler}>
                <div id="screen">
                    <span id="camera"></span>
                    <div id="tool-bar">
                        <span className="toolbar-btns"></span>
                        <span className="toolbar-btns"></span>
                        <span className="toolbar-btns"></span>
                        <div id="address-bar"></div>
                    </div>
                    <div id="portfolio-img">
                        <img alt={ altTag } src={ imgPaths[path] }/>
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
                    <div id="portfolio-img-mobile">
                        <img alt={ altTagMobile } src={ imgPaths[pathMobile] }/>
                    </div>
                    <div id="mobile-bottom">
                        <span id="home-btn"></span>
                    </div>
                </div>
            </div>
                </a>
        );
    }
}
 
export default Thumbnail;