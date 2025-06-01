import React from "react";
import TopBar from "../components/TopBar";
import "../styles/buyerProfile.css";


const BuyerProfile = () => {
  return (
    <div className="buyer-profile-container">
      <TopBar />
      <div className="buyer-profile-header">Your Profile</div>

      <div className="buyer-profile-section">
        <div className="phone-number-box">
          +91 9876543210
          <span className="phone-edit-icon">✏️</span>
        </div>
      </div>

      <div className="buyer-profile-section">
        <button className="orders-btn">Your Orders</button>
      </div>

      <div className="address-section">
        <div className="address-list">
          {/* Address cards here */}
        </div>
      </div>
    </div>
  );
};

export default BuyerProfile;
