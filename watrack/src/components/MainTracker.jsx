import React, { useState, useEffect } from 'react';
import './MainTracker.css';
import WaterProgressCircle from './WaterProgressCircle';
import MoodCalendar from './MoodCalendar';
import Toast from './Toast';
import UrineTracker from './UrineTracker';

function MainTracker() {
  const [waterDrank, setWaterDrank] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date().toDateString());
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const dailyGoal = 2000; // daily goal in ml

  const audio = new Audio('/sounds/blip.mp3');

  const logWater = (amount) => {
    setWaterDrank(prev => {
      const updated = Math.min(prev + amount, dailyGoal);
      saveToHistory(updated);
      triggerToast(`✅ ${amount}ml logged!`);
      playSound();
      return updated;
    });
  };

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const playSound = () => {
    audio.currentTime = 0;
    audio.play().catch(e => console.log("Sound error", e));
  };

  const saveToHistory = (amount) => {
    const today = new Date().toDateString();
    const history = JSON.parse(localStorage.getItem('waterHistory')) || {};
    history[today] = amount;
    localStorage.setItem('waterHistory', JSON.stringify(history));
  };

  const resetTracker = () => setWaterDrank(0);

  useEffect(() => {
    const checkDateChange = setInterval(() => {
      const now = new Date().toDateString();
      if (now !== currentDate) {
        setWaterDrank(0);
        setCurrentDate(now);
        console.log("⏰ New day detected — Water reset!");
      }
    }, 60000); // check every 60 seconds

    return () => clearInterval(checkDateChange);
  }, [currentDate]);

  return (
    <div className="tracker-container">
      <h2>Welcome back, Komzzz! 🧃</h2>

      <div className="buttons">
        <button onClick={() => logWater(100)}>🥤 100ml</button>
        <button onClick={() => logWater(200)}>🥛 200ml</button>
        <button onClick={() => logWater(500)}>🚰 500ml</button>
      </div>

      <WaterProgressCircle current={waterDrank} goal={dailyGoal} />

      <MoodCalendar /> 
      <UrineTracker />

      <p>You’ve had <strong>{waterDrank}ml</strong> out of {dailyGoal}ml today.</p>

      <button className="reset-btn" onClick={resetTracker}>Reset</button>

      <Toast message={toastMsg} visible={showToast} />
    </div>
  );
}

export default MainTracker;
