import './App.css';
import React from 'react';
import ArtDevSection from './Components/ArtDevSection/ArtDevSection';
import MainSection from './Components/MainSection/MainSection'
import AboutMeSection from './Components/AboutMeSection/AboutMeSection.jsx';
import ProjectsSection from './Components/ProjectsSection/ProjectsSection.jsx'

function App() {

  return (
    <div className="App">
      <MainSection/>
      <AboutMeSection/>
      <ProjectsSection/>
    </div>
  );
}

export default App;
