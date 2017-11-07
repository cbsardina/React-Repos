import React, { Component } from 'react';
import './App.css';

//Component imports
import Navigation from './Components/navigation';
import MainBody from './Components/mainbody';
import MurrayForm from './Components/murrayform';
import FamousAstroPhysicists from './Components/physicists';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <MainBody/>
        <MurrayForm/>
        <FamousAstroPhysicists/>
      </div>
    );
  }
}

export default App;
