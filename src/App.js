import "./App.css";

import Header from './Components/Header';
import Home from "./Components/Home";
import React from 'react'

const App = () => {
  return (
    <>
    <Header/>
    <main className="main">
      <Home/>
    </main>
    </>
      
      
  )
}

export default App