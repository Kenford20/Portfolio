import React from 'react';
import Thumbnail from './thumbnail';
import '../styles/portfolio.scss';

const Portfolio = () => {
    return ( 
        <div id="portfolio-container">
            <div id="portfolio-header">
                <span><i class="fab fa-html5"></i></span>
                <h2 className="section-headers"> My Best Work </h2>
            </div>

            <div className="portfolio-item-wrapper">
                <div className="portfolio-item-info" data-aos="fade-right">
                    <h1 className="portfolio-item-title"> Website Name </h1>
                    <h2 className="portfolio-item-type"> Website </h2>
                    <hr />
                    <p className="portfolio-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <span className="portfolio-item-tech"> HTML </span>
                    <span className="portfolio-item-tech"> Javascript </span>
                    <span className="portfolio-item-tech"> React </span>
                </div>
                <Thumbnail 
                    altTag = "Cajewelers Thumbnail"
                    altTagMobile = "Cajewelers Mobile View Thumbnail"
                    path = "cajewelers"
                    pathMobile = "cajewelersM"
                    animation = "fade-left"
                    animationDelay = { 1000 }
                />
            </div>

            <div className="portfolio-item-wrapper">
                <Thumbnail 
                    altTag = "Codenames Thumbnail"
                    altTagMobile = "Cajewelers Mobile View Thumbnail"
                    path = "codenames"
                    pathMobile = "cajewelersM"
                    animation = "fade-right"
                    animationDelay = { 1000 }
                />
                <div className="portfolio-item-info" data-aos="fade-left">
                    <h1 className="portfolio-item-title"> Website Name </h1>
                    <h2 className="portfolio-item-type"> Website </h2>
                    <hr />
                    <p className="portfolio-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <span className="portfolio-item-tech"> HTML </span>
                    <span className="portfolio-item-tech"> Javascript </span>
                    <span className="portfolio-item-tech"> React </span>
                </div>
            </div>

            <div className="portfolio-item-wrapper">
                <div className="portfolio-item-info" data-aos="fade-right">
                    <h1 className="portfolio-item-title"> Website Name </h1>
                    <h2 className="portfolio-item-type"> Website </h2>
                    <hr />
                    <p className="portfolio-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <span className="portfolio-item-tech"> HTML </span>
                    <span className="portfolio-item-tech"> Javascript </span>
                    <span className="portfolio-item-tech"> React </span>
                </div>
                <Thumbnail 
                    altTag = "Typing Website Thumbnail"
                    altTagMobile = "Cajewelers Mobile View Thumbnail"
                    path = "typingWebsite"
                    pathMobile = "cajewelersM"
                    animation = "fade-left"
                    animationDelay = { 1000 }
                />
            </div>
        </div>
     );
}
 
export default Portfolio;