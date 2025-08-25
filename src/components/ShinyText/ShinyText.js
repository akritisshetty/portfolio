import React from 'react';
import './ShinyText.css'; // Make sure this import line exists and is correct

const ShinyText = ({ text }) => {
  return (
    <h1 className="shiny-text-effect">{text}</h1>
  );
};

export default ShinyText;