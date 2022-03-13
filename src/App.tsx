import React from 'react';
import type { VFC } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import { HomeMain } from './components/Home/HomeMain';

export const App : VFC = () => {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMain />} ></Route>
        </Routes>
        </BrowserRouter>
    </>
  );

};

export default App;
