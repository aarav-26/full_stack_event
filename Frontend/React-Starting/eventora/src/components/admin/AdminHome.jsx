import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./AdminNavbar.css";
const AdminHome = () => {
  const location = useLocation();
  const { username } = location.state || { username: "Admin" };

  return (
    <div className="info-section">
      <h1>Welcome, {username}!</h1>
      <p>Welcome to the admin dashboard. Here you can manage all the events, view statistics, and create new events.</p>
      <p>Use the navigation on the left to access different sections.</p>
      <div className="create-button-section">
        <button className="create-button"><Link to="/admin-dashboard/create-event" >Create Event</Link></button>
      </div>
    </div>
  );
};

export default AdminHome;
