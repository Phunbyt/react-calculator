import React, { useState } from 'react'

import './App.css'
import Calculator from './components/Calculator'
import Display from './components/Display';
import { GlobalContextProvider } from './contexts/GlobalContext'

function App() {


  return (
    <GlobalContextProvider>
      <div className="App">
        <Display/>
        <Calculator/>
      </div>
    </GlobalContextProvider>
  );
}

export default App
