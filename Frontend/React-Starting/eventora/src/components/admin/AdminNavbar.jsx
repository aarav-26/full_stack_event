import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css';

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <ul className="nav-list">
        <li><Link to="/admin-dashboard">Home</Link></li>
        <li><Link to="/admin-dashboard/create-event">Create Event</Link></li>
        <li><Link to="/admin-dashboard/hosted-events">Hosted Events</Link></li>
        <li><Link to="/admin-dashboard/statistics">Statistics</Link></li>
      </ul>
      <ul className="logout-list">
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
