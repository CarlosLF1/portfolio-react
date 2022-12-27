import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home';
import Summary from './components/Summary/Summary';

const App = () => {
  return (
    <>
      <div className="container">
        <Navigation />
        <Home />
        <Summary />
      </div>
    </>
  )
}

export default App
