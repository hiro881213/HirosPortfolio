import React from 'react';
import type { VFC } from "react";
import './App.scss';
import { HomeParticles } from './components/Home/HomeParticles';
import { HeaderArea } from './components/Home/Header'


export const App : VFC = () => {


  return (
    <>
      <HomeParticles />

      <div className="App">
        <header>
          <HeaderArea />
        </header>
      </div>  
    </>
  );

};

export default App;
