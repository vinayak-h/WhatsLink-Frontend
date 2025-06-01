// File: src/components/PhoneEditModal.jsx
import React, { useState } from 'react';
import '../styles/phoneEditModal.css';

const PhoneEditModal = ({ onClose }) => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const handleOtpChange = (value, index) => {
    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h3>Edit Phone Number</h3>
        <input
          type="text"
          placeholder="Enter Your Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button className="get-otp-btn">GET OTP</button>
        <p>Enter the OTP we shared</p>
        <div className="otp-inputs">
          {otp.map((digit, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, i)}
            />
          ))}
        </div>
        <button className="submit-btn">SUBMIT</button>
        <p>Didn’t receive OTP? <span className="resend">Resend</span></p>
        <span className="close-btn" onClick={onClose}>×</span>
      </div>
    </div>
  );
};

export default PhoneEditModal;