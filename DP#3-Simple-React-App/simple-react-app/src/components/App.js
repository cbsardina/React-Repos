import React, { Component } from 'react';
import '../styles/App.css';
import EarthquakeInfo from "./EarthquakeInfo";
import EarthquakeList from "./EarthquakeList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
            <EarthquakeInfo/>
            <EarthquakeList/>
            <div className="my-header">
            </div>
        </div>
      </div>
    );
  }
}

export default App;
