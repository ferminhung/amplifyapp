import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Estamos codificando <code>src/App.js</code> en React, para crear el Nuevo site de ZF Crossfit.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React is the Max!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
