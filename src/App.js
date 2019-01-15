import React, { Component } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Main from './components/main-content';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Codepen from './components/codepen-slider';
import Contact from './components/contact';
import Footer from './components/footer';

import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{ zIndex: 0 }}>
          <Navbar />
          <section><Hero /></section>
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 -100 650 320" style={{ zIndex: -100 }}>
            <path d="M-344, 207 C5, 404 200, 200 312, 339" fill="none" stroke="white" stroke-width="250" stroke-linecap="round"/>
          </svg>
        </header>

        <main><Main /></main>
        <section><About /></section>
    
        <section className="skills-container" style={{ zIndex: 0 }}>
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 -100 650 320" style={{ zIndex: -100 }}>
            <path d="M-344, 207 C5, 404 200, 200 312, 339" fill="none" stroke="white" stroke-width="250" stroke-linecap="round"/>
          </svg>
          <Skills />
        </section>

        <section id="portfolio-container">
          <div className="portfolio-item">
            <Portfolio />
          </div>
        </section>

        <section id="codepen">
          <span><i className="fab fa-codepen"></i></span>
          <h2 className="section-headers"> Codepen Work </h2>
          <Codepen />
        </section>

        <section id="contact-container" style={{ zIndex: 0 }}>
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 -100 650 320" style={{ zIndex: -100 }}>
            <path d="M-344, 207 C5, 404 200, 200 312, 339" fill="none" stroke="white" stroke-width="250" stroke-linecap="round"/>
          </svg>
          <Contact />
        </section>

        <footer id="footer-container">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
