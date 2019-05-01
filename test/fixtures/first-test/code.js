import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: 'src/App.js',
    };
    this.thisHardcodedString = 'Another string';
  }

  render() {
    const { stuff } = this.state;
    const hardCodedString = 'Some string';
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <p>{hardCodedString}</p>
          <p>{this.thisHardcodedString}</p>
        </div>
        <p className="App-intro">
          To get started, edit
          {' '}
          <code>{stuff}</code>
          {' '}
          and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
