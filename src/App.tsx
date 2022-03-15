import React from 'react';
import type { VFC } from "react";
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import { HomeMain } from './components/Home/HomeMain';
import { ScriptMain } from './components/Script/ScriptMain';
import { GraphicMain } from './components/Graphic/GraphicMain';

export const App : VFC = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomeMain />} ></Route>
        <Route path='script' element={<ScriptMain />} ></Route>
        <Route path='graphic' element={<GraphicMain />} ></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );

};

const NotFoundPage = () => {
  return(<><p>AAAA</p></>);
};

export default App;
