import React, { useState, useRef, useEffect } from 'react';
import './LoginPage.css';
import whatslinkLogo from '/whatslinklogo.png';
import potterlogo from '/potterlogo.png';

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [showOtpInputs, setShowOtpInputs] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  const otpRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 1500); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  const handleMobileChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, '');
    if (onlyNums.length <= 10) {
      setMobileNumber(onlyNums);
    }
  };

  const handleSendOtp = () => {
    if (mobileNumber.length === 10) {
      setIsSendingOtp(true);
      setTimeout(() => {
        setShowOtpInputs(true);
        setIsSendingOtp(false);
      }, 1500); // Simulate network delay
    }
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, '');
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value[0]; // Only one digit
    setOtp(newOtp);

    if (index < 5 && value) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];

      if (otp[index]) {
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        otpRefs.current[index - 1].focus();
        newOtp[index - 1] = '';
        setOtp(newOtp);
      }
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');
    alert(`Verifying mobile: ${mobileNumber}, OTP: ${otpValue}`);
  };

  if (isPageLoading) {
    return (
      <div className="loader-screen">
        <div className="spiral-loader" />
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={potterlogo} alt="Pottery House Logo" className="store-logo" />
        <h2 className="store-name">Pottery House</h2>
        <p className="login-title">Login/Register</p>

        <input
          type="text"
          value={mobileNumber}
          onChange={handleMobileChange}
          className="mobile-input"
          placeholder="Enter Mobile Number"
        />

        {!showOtpInputs && (
          <button
            className="submit-button"
            onClick={handleSendOtp}
            disabled={mobileNumber.length !== 10}
          >
            Send OTP
          </button>
        )}

        {isSendingOtp && <div className="spiral-loader small" />}

        {showOtpInputs && (
          <>
            <p className="otp-label">Enter the OTP we shared</p>
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (otpRefs.current[index] = el)}
                  className="otp-box"
                />
              ))}
            </div>
            <button className="submit-button" onClick={handleSubmit}>
              SUBMIT
            </button>
          </>
        )}

        <p className="resend-text">
          Didn’t receive OTP? <span className="resend-link">Resend</span>
        </p>

        <div className="built-with">
          <p>This store is built with</p>
          <img src={whatslinkLogo} alt="WhatsLink Logo" className="whatslink-logo" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
