import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// want to fecth all of the beers (state will be null)
// want the fetched data in the state
// want the fecthed data in the state
// feed the updated state to the render

// Things we will need
// 1. state 
// 2. compentntDidMount (fetch data when ready)
// 3. Fetch the data (first up using fetch then switch to axios)
// 4. Set the state

class App extends Component {                            // Extends component inherits all of the methods

  state = {
    beers: null,                                         // Null is assigned initially because we don't have any data

  }

  componentDidMount() {                                 // Step 2. ComponentDidMount()  is a promise needs then and catch
    const beerURL = 'http://localhost:3000/beers'
    fetch(beerURL)
      .then(response => response.json())               // Step 3. fetching the data
      .then(beersData =>{
        
        // Make the json info coming in shorter
        const beers = beersData.map(function(beer){
          return {
            name: beer.name,
            description: beer.description,
            imageUrl: beer.image_url
          }
        })

        this.setState({                               // Turn our JS 
          beers                              // Sets the 
        })                               
     })
     .catch(err => console.err(err))     
  }



  render() {

    if(!this.state.beers) {
      return <div>Loading beers.....</div>  // This function will look for beers and if there aren't any it will show loading, or while it is looking for beers
    }
    console.info(this.state.beers)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Beer App</h1>
        </header>
        
      </div>
    );
  }
}

export default App;
