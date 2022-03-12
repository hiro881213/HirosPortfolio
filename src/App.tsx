import React from 'react';
import type { VFC } from "react";
import './App.scss';
import { HomeParticles } from './components/Home/HomeParticles';
import { HeaderArea } from './components/Home/Header';
import { Menu } from './components/Home/Menu';

export const App : VFC = () => {


  return (
    <>
      <HomeParticles />

      <div className="App">
        <header>
          <HeaderArea />
        </header>
      
        <main>
          <Menu />
        </main>
      </div>

      
    </>
  );

};

export default App;
