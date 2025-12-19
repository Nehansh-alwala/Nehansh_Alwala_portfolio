import React, { useEffect, useState } from 'react';
import './IntroScreen.css';

function IntroScreen({ onEnter }) {
  const [leftText, setLeftText] = useState('N');
  const [rightText, setRightText] = useState('A');
  const [fontSize, setFontSize] = useState(10);
  const [phase, setPhase] = useState('entry');

  useEffect(() => {
    const entryTimeout = setTimeout(() => setPhase('pause'), 1200);
    return () => clearTimeout(entryTimeout);
  }, []);

  useEffect(() => {
    if (phase !== 'pause') return;

    const pauseBeforeExpand = setTimeout(() => setPhase('expand'), 1300);
    return () => clearTimeout(pauseBeforeExpand);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'expand') return;

    const leftFull = 'Nehansh';
    const rightFull = 'Alwala';

    let l = 1, r = 1;
    let currentFontSize = 10;

    const interval = setInterval(() => {
      if (l < leftFull.length) {
        setLeftText(leftFull.slice(0, l + 1));
        l++;
      } else if (r < rightFull.length) {
        setRightText(rightFull.slice(0, r + 1));
        r++;
      }

      if (currentFontSize > 5) {
        currentFontSize -= 0.3;
        setFontSize(currentFontSize);
      }

      if (l >= leftFull.length && r >= rightFull.length) {
        clearInterval(interval);
        setPhase('ready');
      }
    }, 200);

    return () => clearInterval(interval);
  }, [phase]);

  const handleClick = () => {
    if (phase === 'ready') {
      setPhase('exit');
      setTimeout(() => onEnter(), 1200);
    }
  };

  return (
    <div className={`intro-container ${phase}`} onClick={handleClick}>
      <div
        className={`expanding-name ${phase}`}
        style={{ fontSize: `${fontSize}rem` }}
      >
        <span className={`letter-part left  ${phase}`}>{leftText}</span>
        <span style={{ width: '40px' }} />
        <span className={`letter-part right ${phase}`}>{rightText}</span>
      </div>
    </div>
  );
}

export default IntroScreen;
