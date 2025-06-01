import React from 'react';
import AddressItem from './AddressItem';
import '../styles/addressList.css';

const AddressList = ({ addresses, selectedId, onSelect }) => {
  return (
    <div className="address-list">
      {addresses.map((addr, index) => (
        <AddressItem
          key={index}
          address={addr}
          selected={selectedId === index}
          onSelect={() => onSelect(index)}
        />
      ))}
    </div>
  );
};

export default AddressList;
