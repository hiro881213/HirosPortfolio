import React from 'react';
import type { VFC } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import { getUrl } from './CommonUtil';

import { HomeMain } from './components/Home/HomeMain';
import { ScriptMain } from './components/Script/ScriptMain';

export const App : VFC = () => {

  const baseURL = getUrl();

  return (
    <>

    <BrowserRouter basename={baseURL}>
        <Routes>
          <Route path='/' element={<HomeMain />} ></Route>
          <Route path='script' element={<ScriptMain />} ></Route>
        </Routes>
        </BrowserRouter>
    </>
  );

};

export default App;
