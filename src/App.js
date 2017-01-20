import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'
import About from './About.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-title">Learners' Hackathon</h2>
        </div>
          <p className="App-intro">
            Hackathon Theme: Oakland Against the World
          </p>
        <p className="App-intro2">
          Challenge Yourself ... to Win!
        </p>
        <About />
        <Form />
      </div>
    );
  }
}

export default App;
