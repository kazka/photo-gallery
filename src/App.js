import React from 'react'
import Gallery from './classes/Gallery'
//import logo from './logo.svg';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <ion-icon name="images"></ion-icon>
        <h1>Photo Gallery</h1>
      </header>

      <Gallery />
    </div>
  )
}

export default App
