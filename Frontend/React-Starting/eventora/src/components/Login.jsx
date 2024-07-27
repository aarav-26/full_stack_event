import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import data from '../data.json';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = data.users;
    const admins = data.admins;
    
    const user = users.find(user => user.email === username && user.password === password);
    const admin = admins.find(admin => admin.email === username && admin.password === password);

    if (isAdmin && admin) {
      navigate('/admin-dashboard', { state: { role: 'admin', username: admin.username } });
    } else if (!isAdmin && user) {
      navigate('/user-dashboard', { state: { role: 'user', username: user.username } });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{isAdmin ? 'Admin Login' : 'User Login'}</h2>
        <input
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button className="switch-btn" onClick={() => setIsAdmin(!isAdmin)}>
          Switch to {isAdmin ? 'User' : 'Admin'} Login
        </button>
        <p className="navtosign">New user? <Link to="/user-signup">Sign up here</Link></p>
      </div>
    </div>
  );
};

export default Login;
