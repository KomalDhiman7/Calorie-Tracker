import React from 'react';
import './Loader.css'; // animation styles

function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-bar"></div>
      <p>Loading Watrack...</p>
    </div>
  );
}

export default Loader;
