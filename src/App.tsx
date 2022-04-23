import React from 'react';
import type { VFC } from "react";
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import { AboutMain } from './components/About/AboutMain';
import { BaseApp } from './components/BaseArea/BaseApp';
import { WorkMain } from './components/Works/WorkMain';
import { ScriptMain } from './components/Script/ScriptMain';
import { ReadScenarioMain } from './components/ReadScenario/ReadScenarioMain';

export const App : VFC = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<BaseApp />}></Route>
        <Route path='about' element={<AboutMain />} ></Route>
        <Route path='work' element={<WorkMain />} ></Route>
        <Route path='script' element={<ScriptMain />} ></Route>
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
