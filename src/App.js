import React from 'react'
import Gallery from './components/Gallery'
//import logo from './logo.svg';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <ion-icon name="images"></ion-icon>
        <h1>Topias.pics</h1>
      </header>

      <Gallery />
    </div>
  )
}

export default App
