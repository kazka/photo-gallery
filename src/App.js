import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import List from './classes/List'
//import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <ion-icon name="images"></ion-icon>
            <h1>Photo Gallery</h1>
          </header>

          <List />
        </div>
      </Router>
    )
  }
}

export default App
