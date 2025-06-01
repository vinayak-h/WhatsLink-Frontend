import React from 'react';

const AddressItem = ({ address, selected, onSelect }) => (
  <div className={`address-item ${selected ? 'selected' : ''}`} onClick={onSelect}>
 
    <div>
      <strong>{address.name}</strong><br />
      {address.line1}<br />
      {address.line2}<br />
      {address.city}, {address.pincode}<br />
      Ph: {address.phone}
    </div>
  </div>
);

export default AddressItem;
