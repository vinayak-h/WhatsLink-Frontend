const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const { login } = useAuth();

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleGetOtp = () => {
    if (mobile.length === 10) {
      setOtpSent(true);
      // Simulate OTP send here
    } else {
      alert("Enter a valid 10-digit mobile number");
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleSubmit = () => {
    if (otp.join('').length === 6) {
      login(mobile); // ✅ trigger context login
      if (onLoginSuccess) onLoginSuccess(); // ✅ notify parent
      onClose(); // ✅ close modal
    } else {
      alert("Please enter all 6 digits of the OTP");
    }
  };

  return (
    <div className="login-modal-backdrop">
      <div className="login-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h3>Please Login Before You Order</h3>

        <input
          className="mobile-input"
          type="tel"
          placeholder="Enter Your Mobile Number"
          value={mobile}
          onChange={handleMobileChange}
        />

        <button className="get-otp-button" onClick={handleGetOtp}>GET OTP</button>

        {otpSent && (
          <>
            <p className="otp-label">Enter the OTP we shared</p>
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                />
              ))}
            </div>

            <button className="submit-button" onClick={handleSubmit}>SUBMIT</button>
            <p className="resend-link">Didn't receive OTP? <span>Resend</span></p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
