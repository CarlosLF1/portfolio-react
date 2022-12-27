import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home';

const App = () => {
  return (
    <>
      <div className="container">
        <Navigation />
        <Home />
      </div>
    </>
  )
}

export default App
