import React from 'react';

const ProgressIndicator = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-container">
      <div className="progress-header">
        <span className="progress-label">Completion Status</span>
        <span className="progress-percentage">{percentage}%</span>
      </div>
      <div className="progress-bar-bg">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
