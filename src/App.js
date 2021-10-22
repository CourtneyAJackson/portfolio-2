import React from 'react'
import './App.css'
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Home from './PortfolioContainer/Home/Home/Home.jsx';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import Projects from './PortfolioContainer/Projects/Projects.jsx';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import Home2 from './PortfolioContainer/Home/Home2';

function App() {
  return (
    <div className="App">
      {/* <PortfolioContainer/> */}
      <Home2 />
      {/* <AboutMe />
      <Projects />
      <ContactMe/> */}
    </div>
  );
}

export default App;
