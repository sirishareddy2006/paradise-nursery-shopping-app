
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery!
          Bring nature into your home with our
          beautiful collection of indoor plants.
        </p>

        <button
          className="get-started"
          onClick={() => window.location.href = '#plants'}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
