import React from 'react';
import TopBar from '../components/TopBar';
import "../styles/storefrontHome.css";


const StorefrontHome = () => {
  return (
    <div className="storefront-container">
      <TopBar />
      <div className="most-selling-section">
        <h2>Most Selling</h2>
        <div className="most-selling-list">
          {/* Most selling products */}
        </div>
      </div>
      <div className="all-products-section">
        <h2>All Products</h2>
        <div className="all-products-list">
          {/* All products */}
        </div>
      </div>
    </div>
  );
};

export default StorefrontHome;
