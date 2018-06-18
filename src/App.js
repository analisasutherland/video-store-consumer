import React, { Component } from 'react';
import VideoStore from './components/VideoStore';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>VideoStore!!!!!</h1>
        </header>

        <p className="App-intro">
          We are connected
        </p>
        <VideoStore />
      </div>
    );
  }
}

export default App;
