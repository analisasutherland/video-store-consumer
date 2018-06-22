import React, { Component } from 'react';
import './App.css';

import VideoStore from './components/VideoStore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VideoStore />
      </div>
    );
  }
}

export default App;
