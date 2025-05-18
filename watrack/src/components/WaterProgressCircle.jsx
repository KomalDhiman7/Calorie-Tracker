import React from 'react';
import './WaterProgressCircle.css';

const radius = 70;
const circumference = 2 * Math.PI * radius;

function WaterProgressCircle({ current, goal }) {
  const progress = Math.min(current / goal, 1);
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="water-progress-wrapper">
      <svg
        className="water-progress-ring"
        width="180"
        height="180"
        viewBox="0 0 180 180"
      >
        <defs>
          <linearGradient id="grad" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a9eff" />
            <stop offset="100%" stopColor="#0066cc" />
          </linearGradient>
          <filter id="glow" height="200%" width="200%" x="-50%" y="-50%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="8"
              floodColor="#3a9eff"
              floodOpacity="0.7"
            />
          </filter>
        </defs>

        {/* Background circle */}
        <circle
          className="progress-bg"
          cx="90"
          cy="90"
          r={radius}
          stroke="#002f5b"
          strokeWidth="16"
          fill="none"
        />

        {/* Progress circle */}
        <circle
          className="progress-bar"
          cx="90"
          cy="90"
          r={radius}
          stroke="url(#grad)"
          strokeWidth="16"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Water drop behind */}
        <path
          className="water-drop"
          d="M90 135 C80 110, 100 80, 90 55 C80 80, 100 110, 90 135 Z"
          fill="#3a9eff"
          opacity="0.15"
        />

        {/* Total water amount */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="water-amount"
        >
          {current} ml
        </text>
      </svg>
    </div>
  );
}

export default WaterProgressCircle;
