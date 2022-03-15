import React from 'react';
import type { VFC } from "react";
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import { HomeMain } from './components/Home/HomeMain';
import { ScriptMain } from './components/Script/ScriptMain';

export const App : VFC = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomeMain />} ></Route>
        <Route path='script' element={<ScriptMain />} ></Route>
      </Routes>
    </>
  );

};

export default App;
