import React from 'react';
import './CircularText.css';

const CircularText = ({ text }) => {
  const characters = text.split('');
  const degree = 360 / characters.length;

  return (
    <div className="circular-text-container">
      <div className="circular-text">
        {characters.map((char, i) => (
          <span
            key={i}
            style={{ transform: `rotate(${i * degree}deg)` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CircularText;