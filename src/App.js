import React, { Component } from 'react';
import './App.css';
import VolumeSlider from './Slider/Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VolumeSlider/>
      </div>
    );
  }
}

export default App;
