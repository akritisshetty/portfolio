import React from 'react';
import './CaptainsLog.css';

const CaptainsLog = ({ title }) => {
  return (
    <div className="log-container">
        <h2 className="log-title">{title}</h2>
    </div>
  );
};

export default CaptainsLog;