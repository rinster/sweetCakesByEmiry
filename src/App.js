import React, { Component } from 'react';
import './resources/css/styles.css';
import './resources/css/daFont.css';

class App extends Component {
  render() {
    return (
      <div className="App" 
          style={{
            fontFamily:"AutumnInNovember",
            fontSize: "100px",
            backgroundImage: "linear-gradient(to right, #E493CB, #6774DE)",
            textAlign: "center",
            webkitBackgroundClip: "text",
            color: "transparent",
          }}>
        Hello World
      </div>
    );
  }
}

export default App;
