import React, { useState } from 'react';
import './Welcome.css';

function Welcome({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    } else {
      alert('Yo, enter your name first!');
    }
  };

  return (
    <div className="welcome-container">
      <h1>Hey, Komzzz! 👋</h1>
      <p>Ready to track your water intake and stay hydrated?</p>

      <form onSubmit={handleSubmit} className="welcome-form">
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="welcome-input"
          autoFocus
        />
        <button type="submit" className="welcome-btn">Let’s Go!</button>
      </form>
    </div>
  );
}

export default Welcome;
