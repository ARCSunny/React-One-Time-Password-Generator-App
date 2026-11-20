const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [hasGenerated, setHasGenerated] = useState(false);

  useEffect(() => {
    // Stop the timer if it reaches 0
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup interval on unmount or before next effect run
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleGenerateOTP = () => {
    // Generate a random 6-digit number (100000 to 999999)
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(newOtp);
    setTimeLeft(5);
    setHasGenerated(true);
  };

  const isTimerActive = timeLeft > 0;

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      
      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>

      <p id="otp-timer" aria-live="polite">
        {!hasGenerated
          ? ""
          : isTimerActive
          ? `Expires in: ${timeLeft} seconds`
          : "OTP expired. Click the button to generate a new OTP."}
      </p>

      <button
        id="generate-otp-button"
        onClick={handleGenerateOTP}
        disabled={isTimerActive}
      >
        Generate OTP
      </button>
    </div>
  );
};
