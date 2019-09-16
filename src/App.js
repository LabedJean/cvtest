import React from 'react';
import './App.css';
import Sliders from './components/Home'
import Header from './components/Header'
import Animation from './components/animation/animation'
import Background from './components/background/background'
import Accordeon from './components/accordeon/accordeon'

function App() {
  return (
    <div>
      <Background/>
      <Animation/>
      <Header/>
      <Sliders/>
      <Accordeon/>
    </div>
  );
}

export default App;
