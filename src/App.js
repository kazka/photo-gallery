import React, { Component } from 'react'
import List from './classes/List'
//import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
        <ion-icon name="images"></ion-icon>
          <h1>Photo Gallery</h1>
        </header>

        <List />
      </div>
    )
  }
}

export default App
