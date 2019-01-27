import React, { Component } from 'react';
import './resources/css/styles.css';
import './resources/css/daFont.css';

import LandingPage from './components/LandingPage/landingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage/>
      </div>
    );
  }
}

export default App;
