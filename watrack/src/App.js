import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader';
import Welcome from './components/Welcome';
import MainTracker from './components/MainTracker'; // rename this to DashboardLayout if needed

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => setIsLoggedIn(true);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isLoggedIn ? (
        <MainTracker /> // or <DashboardLayout /> if you built that separately
      ) : (
        <Welcome onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
