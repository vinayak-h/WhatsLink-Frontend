import React, { useState } from 'react';
import '../styles/addAddressModal.css';

const AddAddressModal = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({
    name: '', house: '', street: '', line2: '', landmark: '',
    area: '', state: '', pin: '', phone: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

 const handleSubmit = () => {
  // Basic validation
  const {
    name, house, street, line2,
    landmark, area, state, pin, phone
  } = form;

  if (!name || !house || !street || !line2 || !area || !state || !pin || !phone) {
    alert("Please fill in all required fields.");
    return;
  }

  if (!/^\d{6}$/.test(pin)) {
    alert("PIN code must be 6 digits.");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be 10 digits.");
    return;
  }

  const newAddress = {
    name,
    line1: `${house}, ${street}`,
    line2: `${line2}, ${landmark}, ${area}`,
    city: state,
    pincode: pin,
    phone
  };

  onSubmit(newAddress);
  onClose();
};


  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <button className="close-button" onClick={onClose}>✖</button>
        <h3>Add Address</h3>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <div className="row">
          <input name="house" placeholder="House Number" onChange={handleChange} />
          <input name="street" placeholder="Road, Street (Address Line 1)" onChange={handleChange} />
        </div>
        <input name="line2" placeholder="Area, Locality (Address Line 2)" onChange={handleChange} />
        <div className="row">
          <input name="landmark" placeholder="Landmark" onChange={handleChange} />
          <input name="area" placeholder="Area" onChange={handleChange} />
        </div>
        <div className="row">
          <input name="state" placeholder="State" onChange={handleChange} />
          <input name="pin" placeholder="PIN" onChange={handleChange} />
        </div>
        <input name="phone" placeholder="Phone Number" onChange={handleChange} />
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AddAddressModal;
