import React from 'react';
import '../styles/portfolio.scss';

const Portfolio = () => {
    return ( 
        <div id="portfolio-container">
            <div id="portfolio-header">
                <span><i class="fas fa-code"></i></span>
                <h2 className="section-headers"> My Best Work </h2>
            </div>

            <div className="portfolio-item-wrapper">
                <div className="portfolio-item-info">
                    <h1 className="portfolio-item-title"> Website Name </h1>
                    <h2 className="portfolio-item-type"> Website </h2>
                    <hr />
                    <p className="portfolio-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <span className="portfolio-item-tech"> HTML </span>
                    <span className="portfolio-item-tech"> Javascript </span>
                    <span className="portfolio-item-tech"> React </span>
                </div>
                <img className="portfolio-item-img" alt="" src={ "https://s3.amazonaws.com/media-cajewelers.com/DiamondRubyBand.jpg" }/>
            </div>

            <div className="portfolio-item-wrapper">
                <div className="portfolio-item-info">
                    <h1 className="portfolio-item-title"> Website Name </h1>
                    <h2 className="portfolio-item-type"> Website </h2>
                    <hr />
                    <p className="portfolio-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <span className="portfolio-item-tech"> HTML </span>
                    <span className="portfolio-item-tech"> Javscript </span>
                    <span className="portfolio-item-tech"> React </span>
                </div>
                <img className="portfolio-item-img" alt="" src={ "https://s3.amazonaws.com/media-cajewelers.com/DiamondRubyBand.jpg" }/>
            </div>

            <div className="portfolio-item-wrapper">
                <div className="portfolio-item-info">
                    <h1 className="portfolio-item-title"> Website Name </h1>
                    <h2 className="portfolio-item-type"> Website </h2>
                    <hr />
                    <p className="portfolio-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <span className="portfolio-item-tech"> HTML </span>
                    <span className="portfolio-item-tech"> Javscript </span>
                    <span className="portfolio-item-tech"> React </span>
                </div>
                <img className="portfolio-item-img" alt="" src={ "https://s3.amazonaws.com/media-cajewelers.com/DiamondRubyBand.jpg" }/>
            </div>
        </div>
     );
}
 
export default Portfolio;