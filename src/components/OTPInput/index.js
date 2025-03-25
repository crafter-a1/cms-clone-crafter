
import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import './OTPInput.css';

const OTPInput = ({ 
  name, 
  value = '', 
  onChange, 
  label, 
  error, 
  description,
  required,
  length = 6,
  masked = false,
  autoFocus = true,
  expiresIn = 0, // seconds, 0 for no expiration
  onExpire = () => {},
  resendAction = null
}) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const [timeLeft, setTimeLeft] = useState(expiresIn);
  const inputRefs = useRef([]);
  
  // Initialize refs
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);
  
  // Handle expiration timer
  useEffect(() => {
    if (!expiresIn) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [expiresIn, onExpire]);
  
  // Format value into array of digits
  useEffect(() => {
    if (value) {
      const valueArray = value.toString().split('').slice(0, length);
      setOtp(valueArray.concat(Array(length - valueArray.length).fill('')));
    }
  }, [value, length]);
  
  const handleChange = (index, e) => {
    const newValue = e.target.value;
    
    if (newValue.length > 1) {
      // Handle paste
      const pastedValue = newValue.slice(0, length);
      const newOtp = Array(length).fill('');
      
      for (let i = 0; i < pastedValue.length; i++) {
        if (i < length) {
          newOtp[i] = pastedValue[i];
        }
      }
      
      setOtp(newOtp);
      onChange({ target: { name, value: newOtp.join('') } });
      if (pastedValue.length >= length && inputRefs.current[length - 1]) {
        inputRefs.current[length - 1].focus();
      }
    } else {
      // Handle single character input
      if (/^[0-9]$/.test(newValue) || newValue === '') {
        const newOtp = [...otp];
        newOtp[index] = newValue;
        setOtp(newOtp);
        
        onChange({ target: { name, value: newOtp.join('') } });
        
        // Move to next input if entering a digit
        if (newValue !== '' && index < length - 1 && inputRefs.current[index + 1]) {
          inputRefs.current[index + 1].focus();
        }
      }
    }
  };
  
  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace
    if (e.key === 'Backspace' && index > 0 && !otp[index] && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };
  
  const formatTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  const handleResend = () => {
    if (resendAction) {
      resendAction();
      setTimeLeft(expiresIn);
    }
  };
  
  return (
    <div className="p-field otp-input-container">
      <label htmlFor={name} className={required ? 'required-field' : ''}>
        {label}
      </label>
      
      <div className="otp-inputs">
        {Array(length).fill(0).map((_, index) => (
          <InputText
            key={index}
            ref={el => inputRefs.current[index] = el}
            value={otp[index]}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            maxLength={1}
            autoFocus={autoFocus && index === 0}
            className={error ? 'p-invalid' : ''}
            type={masked ? 'password' : 'text'}
            inputMode="numeric"
            pattern="[0-9]*"
          />
        ))}
      </div>
      
      {description && <small className="p-d-block">{description}</small>}
      {error && <Message severity="error" text={error} />}
      
      {expiresIn > 0 && (
        <div className="otp-timer">
          <span>Code expires in: {formatTimeLeft()}</span>
          {resendAction && timeLeft === 0 && (
            <Button 
              label="Resend" 
              onClick={handleResend} 
              className="p-button-text" 
            />
          )}
        </div>
      )}
    </div>
  );
};

export default OTPInput;
