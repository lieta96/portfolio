import './App.css';
import React, {useState} from 'react';
import ArtDevSection from './Components/ArtDevSection/ArtDevSection';
import MainSection from './Components/MainSection/MainSection'
import AboutMeSection from './Components/AboutMeSection/AboutMeSection.jsx';

function App() {

  return (
    <div className="App">
      <MainSection/>
      <AboutMeSection/>
    </div>
  );
}

export default App;
