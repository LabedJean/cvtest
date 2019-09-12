import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sliders from './components/Home'
import Header from './components/Header'
import Animation from './components/animation/animation'
import Background from './components/background/background'

function App() {
  return (
    <div>
      <Background/>
      <Animation/>
      <Header/>
      <Sliders/>
    </div>
  );
}

export default App;
