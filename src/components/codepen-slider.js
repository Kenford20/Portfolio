import React from 'react';
import Slider from 'react-slick';
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
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 765,
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
                    <div className="codepen-item">
                        <img src={require("../images/codepen/piano.png")} alt="piano pen thumbnail"></img>
                        <p>Princess</p>
                    </div>
                    <div className="codepen-item">
                        <img src={require("../images/codepen/pomodoro-clock.png")} alt="pomodoro clock pen thumbnail"></img>
                        <p>Pear</p>
                    </div>
                    <div className="codepen-item">
                        <img src={require("../images/codepen/quote-machine.png")} alt="quote machine pen thumbnail"></img>
                        <p>Emerald</p>
                    </div>
                    <div className="codepen-item">
                        <img src={require("../images/codepen/markdown-previewer.png")} alt="markdown previewer pen thumbnail"></img>
                        <p>Emerald</p>
                    </div>
                    <div className="codepen-item">
                        <img src={require("../images/codepen/calculator.png")} alt="calculator pen thumbnail"></img>
                        <p>Round</p>
                    </div>
                </Slider>
            </div>
         );
    }
}
 
export default Codepen;