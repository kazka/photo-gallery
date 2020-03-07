import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import List from './classes/List'
//import logo from './logo.svg';

const App = () => {
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

export default App
