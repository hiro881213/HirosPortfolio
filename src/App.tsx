import React from 'react';
import type { VFC } from "react";
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import { BaseApp } from './components/BaseArea/BaseApp';
import { ScriptMain } from './components/Script/ScriptMain';
import { GraphicMain } from './components/Graphic/GraphicMain';
import { ReadScenarioMain } from './components/ReadScenario/ReadScenarioMain';

export const App : VFC = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<BaseApp />} ></Route>
        <Route path='script' element={<ScriptMain />} ></Route>
        <Route path='graphic' element={<GraphicMain />} ></Route>
        <Route path='detailScenario' element={<ReadScenarioMain />} ></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );

};

const NotFoundPage = () => {
  return(<><p>Not Found</p></>);
};

export default App;
