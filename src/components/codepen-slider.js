import React from 'react';
import Slider from 'react-slick';
import Project from './codepen-project';

import '../styles/codepen-slider.scss';

class Codepen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "10px",
            slidesToShow: 3,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1331,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        centerPadding:'0px'
                    }
                }
            ]
        };
        return ( 
            <div id="codepen-container">
                <Slider {...settings}>
                <Project 
                        imgUrl = "calculator"
                        altTag = "calculator pen thumbnail"
                        title = "React Calculator"
                        description = "JavaScript calculator made with React that utilizes formula logic and observes order of operation precedence. Supports both keyboard/mouse inputs!"
                        projectUrl = "https://codepen.io/Kenford/pen/MzOqxm"
                    />
                    <Project 
                        imgUrl = "piano"
                        altTag = "piano pen thumbnail"
                        title = "HTML Piano"
                        description = "Musical keyboard made from HTML elements and CSS with audio functionality triggered by jQuery. Supports both keyboard/mouse inputs!"
                        projectUrl = "https://codepen.io/Kenford/pen/xQqvwe"
                    />
                    <Project 
                        imgUrl = "quoteMachine"
                        altTag = "quote machine pen thumbnail"
                        title = "Random Quote Machine"
                        description = "Pulls random quotes from a public API and is displayed onto the screen with a simple animation."
                        projectUrl = "https://codepen.io/Kenford/pen/ZmbPML"
                    />
                    <Project 
                        imgUrl = "markdownPreviewer"
                        altTag = "markdown previewer pen thumbnail"
                        title = "Markdown Previewer"
                        description = "Takes text in an HTML textarea box and converts it into markdown text in a separate box to be viewed. Useful for quick conversion for your .md files!"
                        projectUrl = "https://codepen.io/Kenford/pen/GPvLGv"
                    />
                    <Project 
                        imgUrl = "pomodoroClock"
                        altTag = "pomodoro clock pen thumbnail"
                        title = "Pomodoro Clock"
                        description = "Pomodoro clock app developed with React. Allows customization of break and session lengths to fit your needs as you get your work done while taking breaks!"
                        projectUrl = "https://codepen.io/Kenford/pen/eQrxQB"
                    />
                </Slider>
            </div>
         );
    }
}
 
export default Codepen;