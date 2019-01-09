import React, { Component } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Main from './components/main-content';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';

import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <section><Hero /></section>
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 -100 650 320" >
            <path d="M-344, 207 C5, 404 200, 200 312, 339" fill="none" stroke="white" stroke-width="250" stroke-linecap="round"/>
          </svg>
        </header>

        <main><Main /></main>
        <section><About /></section>
    
        <section className="skills-container" style={{ zIndex: -2 }}>
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 -100 650 320" >
            <path d="M-344, 207 C5, 404 200, 200 312, 339" fill="none" stroke="white" stroke-width="250" stroke-linecap="round"/>
          </svg>
          <Skills />
        </section>

        <section id="portfolio-container">
          <div className="portfolio-item">
            <Portfolio />
          </div>
        </section>

      </div>
    );
  }
}

export default App;
