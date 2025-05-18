import React from 'react';
import WaterProgressBar from './WaterProgressBar';
import MoodTracker from './MoodTracker';
import SupplementCard from './SupplementCard';
import BMICard from './BMICard';
import './DashboardLayout.css';

function DashboardLayout() {
  return (
    <div className="dashboard-grid">
      <WaterProgressBar />
      <SupplementCard />
      <MoodTracker />
      <BMICard />
    </div>
  );
}

export default DashboardLayout;
