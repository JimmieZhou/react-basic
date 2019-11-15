/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-13 15:52:24
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-15 15:25:12
 */
import React from 'react';
import Clock from './components/clock/Clock'
import Main from './components/children/Main'
import Index from './components/dynamicImport/Index'
import Route from './components/route/Index'
import Ctx from './components/context/App'
import Ctx2 from './components/context/App'
import ForwardRef from './components/forwardRef/App'
import PPHOC_basic from './components/hoc/ppHOC/App'
import PPHOC_state from './components/hoc/ppHOC/App2'
import Hooks from './components/hooks/App'
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
      ----------------------------
      <Ctx2></Ctx2>
      ----------------------------
      <ForwardRef></ForwardRef>
      ----------------------------
      <PPHOC_basic data={123}></PPHOC_basic>
      ----------------------------
      <PPHOC_state data={123}></PPHOC_state>
      ----------------------------
      <Hooks></Hooks>
    </div>
  );
}

export default App;
