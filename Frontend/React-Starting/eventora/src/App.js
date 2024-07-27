import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import UserSignup from './components/UserSignup'; // Assuming you have a signup page
import Support from './pages/Support';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/user-signup" element={<UserSignup />} />

        {/* User Routes */}
        <Route path="/user-dashboard" element={<UserDashboard />} />
        
        {/* Admin Routes */}
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
        {/* Note: The /* is used to match nested routes inside AdminDashboard */}

        {/* Logout Route */}
        <Route path="/support" element={<Support/>}/>
        <Route path="/logout" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
