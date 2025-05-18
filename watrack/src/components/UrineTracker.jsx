import React, { useState } from 'react';
import './UrineTracker.css';

const urineLevels = [
  { color: '#F5F5DC', label: 'Clear', status: 'Optimal' },
  { color: '#FFFF99', label: 'Pale Yellow', status: 'Good' },
  { color: '#FFD700', label: 'Yellow', status: 'Mild dehydration' },
  { color: '#FFA500', label: 'Dark Yellow', status: 'Dehydrated' },
  { color: '#8B4513', label: 'Amber/Brown', status: 'Severe dehydration' },
];

function UrineTracker() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="urine-tracker">
      <h3>💧 Urine Color Tracker</h3>
      <div className="urine-options">
        {urineLevels.map((level, index) => (
          <div
            key={index}
            className={`urine-circle ${selected === index ? 'active' : ''}`}
            style={{ backgroundColor: level.color }}
            onClick={() => setSelected(index)}
            title={level.label}
          />
        ))}
      </div>
      {selected !== null && (
        <p className="urine-status">
          {urineLevels[selected].label}: <strong>{urineLevels[selected].status}</strong>
        </p>
      )}
    </div>
  );
}

export default UrineTracker;
