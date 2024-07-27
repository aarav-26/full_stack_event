import React from 'react';
import { Link } from 'react-router-dom';
import './UserNavbar.css';

const UserNavbar = () => {
  return (
    <nav className="user-navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/registered-events">Registered Events</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li class="islogin" ><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default UserNavbar;
