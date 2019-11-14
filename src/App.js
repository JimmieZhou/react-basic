/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-13 15:52:24
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-14 13:56:37
 */
import React from 'react';
import Clock from './components/clock/Clock'
import Main from './components/children/Main'
import Index from './components/dynamicImport/Index'
import Route from './components/route/Index'
import Ctx from './components/context/Index'
import './App.css';

function App() {
  return (
    <div className="App">
      <Clock></Clock>
      ----------------------------
        <Main></Main>
      ----------------------------
        <Index></Index>
      ----------------------------
      <Route></Route>
      ----------------------------
      <Ctx></Ctx>
    </div>
  );
}

export default App;
