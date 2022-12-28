import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home';
import Summary from './components/Summary/Summary';
import Languages from './components/Languages/Languages';
import Process from './components/Process/Process';
import Projects from './components/Projects/Projects';
import Career from './components/Career/Career';

const App = () => {
  return (
    <>
      <div className="container">
        <Navigation />
        <Home />
        <Summary />
        <Languages />
        <Process />
        <Projects />
        <Career />
      </div>
    </>
  )
}

export default App
