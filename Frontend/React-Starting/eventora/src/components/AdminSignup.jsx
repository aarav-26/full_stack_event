import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminSignup.css';

const AdminSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [idCardPhoto, setIdCardPhoto] = useState(null);
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password || !age || !role || !company || !idCardPhoto) {
      alert('Please fill out all fields.');
      return;
    }

    const newAdmin = {
      adminid: Math.floor(Math.random() * 1000),
      email,
      password,
      age,
      role,
      company,
      idCardPhoto
    };

    // Retrieve existing admins from local storage
    const existingAdmins = JSON.parse(localStorage.getItem('admins')) || [];
    existingAdmins.push(newAdmin);

    // Save updated admins to local storage
    localStorage.setItem('admins', JSON.stringify(existingAdmins));

    console.log('Admin signed up:', newAdmin);
    alert('Admin signed up successfully!');

    // Optionally, navigate to a different page or clear the form
  };

  const switchToUserSignup = () => {
    navigate('/user-signup');
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Admin Signup</h2>
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
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="file"
          placeholder="ID Card Photo"
          onChange={(e) => setIdCardPhoto(e.target.files[0])}
        />
        <button onClick={handleSignup}>Signup</button>
        <button className="switch-btn" onClick={switchToUserSignup}>
          Switch to User Signup
        </button>
      </div>
    </div>
  );
};

export default AdminSignup;
