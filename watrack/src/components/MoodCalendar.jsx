import React, { useState, useEffect } from 'react';
import './MoodTracker.css';

const moods = [
  { emoji: '😄', label: 'Happy' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '😔', label: 'Sad' },
  { emoji: '😡', label: 'Angry' },
  { emoji: '😴', label: 'Tired' },
];

function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const today = new Date().toDateString();

  useEffect(() => {
    const moodData = JSON.parse(localStorage.getItem('moodHistory')) || {};
    if (moodData[today]) {
      setSelectedMood(moodData[today]);
    }
  }, [today]);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    const moodData = JSON.parse(localStorage.getItem('moodHistory')) || {};
    moodData[today] = mood;
    localStorage.setItem('moodHistory', JSON.stringify(moodData));
  };

  return (
    <div className="mood-card">
      <h3>How do you feel?</h3>
      <div className="mood-options">
        {moods.map((m) => (
          <button
            key={m.label}
            className={`mood-btn ${selectedMood === m.label ? 'active' : ''}`}
            onClick={() => handleMoodSelect(m.label)}
          >
            <span role="img" aria-label={m.label}>{m.emoji}</span>
          </button>
        ))}
      </div>
      {selectedMood && <p className="mood-status">You’re feeling <strong>{selectedMood}</strong> today</p>}
    </div>
  );
}

export default MoodTracker;
