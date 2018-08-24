import React, { Component } from 'react';
import './App.css';
import Navigation from './Routes.js'


class App extends Component {
  render() {
    return (
        <div>
          <Navigation></Navigation>
          <p>Page Acceuil</p>
        </div>
    );
  }
}

export default App;
