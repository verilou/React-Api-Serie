import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Routes.js'


const axios = require('axios');
class App extends Component {
  constructor(props){
    super(props)
    this.my_header = new Headers();
    this.data = {
      mode: "cors", // or without this line
      method : 'GET',
      header : this.my_header
    }
    console.log(this.data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Navigation></Navigation>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
