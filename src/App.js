// src/App.js
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import IntroScreen from './components/IntroScreen';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleEnter = () => {
    const introEl = document.querySelector('.intro-container');
    introEl.classList.add('exit');
    setTimeout(() => setShowIntro(false), 1200); 
  };

  return (
    <div style={{ position: 'relative' }}>
      <Home />
      {showIntro && <IntroScreen onEnter={handleEnter} />}
    </div>
  );
}

export default App;
