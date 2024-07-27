import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserSignup.css';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [preferredEvent, setPreferredEvent] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password || !age || !preferredEvent || !phoneNumber) {
      alert('Please fill out all fields.');
      return;
    }

    const newUser = {
      userid: Math.floor(Math.random() * 1000),
      email,
      password,
      age,
      preferredEvent,
      phoneNumber
    };

    // Retrieve existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push(newUser);

    // Save updated users to local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    console.log('User signed up:', newUser);
    alert('User signed up successfully!');

    // Optionally, navigate to a different page or clear the form
  };

  const switchToAdminSignup = () => {
    navigate('/admin-signup');
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>User Signup</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Preferred Event"
          value={preferredEvent}
          onChange={(e) => setPreferredEvent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={handleSignup}>Signup</button>
        <button className="switch-btn" onClick={switchToAdminSignup}>
          Switch to Admin Signup
        </button>
      </div>
    </div>
  );
};

export default UserSignup;
