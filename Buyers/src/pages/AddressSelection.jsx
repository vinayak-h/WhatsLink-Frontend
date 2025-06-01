import React from "react";
import TopBar from "../components/TopBar";
import "../styles/addressSelection.css";


const AddressSelection = () => {
  return (
    <div className="address-page">
      <TopBar />
      <h2 className="page-heading">Select Delivery Address</h2>
      <div className="address-section">
        <div className="address-list">
          {/* List of saved addresses */}
        </div>
        <div className="notes-section">
          <textarea placeholder="Seller Notes..." />
        </div>
      </div>
      <div className="button-row">
        <button className="add-address-btn">+ Add Address</button>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default AddressSelection;
