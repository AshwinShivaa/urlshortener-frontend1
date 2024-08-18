// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      await axios.post('http://localhost:5000/forgot-password', { email });
      // Handle successful request
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={handleForgotPassword}>Send Reset Link</button>
    </div>
  );
};

export default ForgotPassword;
