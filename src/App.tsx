import React from 'react';
import './App.scss';
import { HomeParticles } from './components/Home/HomeParticles';


export const App = () => {


  return (
    <>
      <HomeParticles />

      <div className="App">
        <span className="fontRound" >HIRO'S PORTFOLIO</span>
      </div>  
    </>
  );

};

export default App;
