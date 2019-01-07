import React, { Component } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Main from './components/main-content';
import About from './components/about';

import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <section>
            <Hero />
          </section>
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 -100 650 350" >
            <path d="M-284,207 C5,404 200,200 212,339" fill="none" stroke="white" stroke-width="250" stroke-linecap="round"/>
          </svg>
        </header>

        <main>
          <Main />
        </main>

        <section>
          <About />
        </section>

      </div>
    );
  }
}

export default App;
