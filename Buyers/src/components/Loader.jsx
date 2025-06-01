import React from 'react';
import "../styles/Loader.css";


const Loader = ({ size = 'default' }) => {
  return <div className={`spiral-loader ${size === 'small' ? 'small' : ''}`} />;
};


export default Loader;
