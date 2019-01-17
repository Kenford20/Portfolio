import React from 'react';
import '../styles/main-content.scss';

const Main = () => {
    return ( 
        <div id="main-content">
            <div className="main-item">
                <i className="fab fa-html5"></i>
                <h2> Web Development </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <a href="#portfolio-container"> Go to portfolio > </a>
            </div>
            <div className="main-item">
                <i className="fab fa-codepen"></i>
                <h2> Codepen Work </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <a href="#codepen"> browse projects > </a>
            </div>
            <div className="main-item">
                <i className="fas fa-code"></i>
                <h2> WordPress </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <a href="#"> Go to portfolio > </a>
            </div>
        </div>
     );
}
 
export default Main;