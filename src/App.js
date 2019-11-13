/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-13 15:52:24
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-13 17:21:44
 */
import React from 'react';
import Clock from './components/clock/Clock'
import Main from './components/children/Main'
import './App.css';

function App() {
  return (
    <div className="App">
      <Clock></Clock>
      -------
      <Main></Main>
    </div>
  );
}

export default App;
