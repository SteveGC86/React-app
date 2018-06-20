import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// want to fecth all of the beers (state will be null)
// want the fetched data in the state
// want the fecthed data in the state
// feed the updated state to the render

// Things we will need
// 1. state
// 2. compentntDidMount (fetch data when ready)
// 3. Fetch the data (first up using fetch then switch to axios)

class App extends Component {

  state = {
    beers: null,   // Null is assigned initially because we don't have any data

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Beer App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
