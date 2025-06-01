import React from 'react';
import { useNavigate } from 'react-router-dom';
import potterlogo from '/potterlogo.png';
import '../styles/TopBar.css';

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <header className="top-bar">
      <div className="store-info" onClick={() => navigate('/store')}>
        <img src={potterlogo} alt="Pottery House" className="store-logo" />
        <h2 className="store-title">Pottery House</h2>
      </div>

      <div className="top-buttons">
        <button onClick={() => window.open('https://wa.me/919999999999')} title="Chat">🟢</button>
        <button title="Cart" onClick={() => navigate('/cart')}>🛒</button>
        <button title="Profile" onClick={() => navigate('/buyer-profile')}>👤</button>
      </div>
    </header>
  );
};

export default TopBar;
