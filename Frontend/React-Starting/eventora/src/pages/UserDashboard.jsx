import React from 'react';
import { useLocation } from 'react-router-dom';
import './UserDashboard.css';
import data from '../data.json';
import UserNavbar from '../components/user/UserNavbar';

const UserDashboard = () => {
  const location = useLocation();
  const { username } = location.state || { username: "User" };
  const events = data.events;

  return (
    <div className="dashboard-container">
      <UserNavbar />
      <div className="welcome-section">
        <h1>Welcome, {username}!</h1>
        <p className="quote">"The best way to predict the future is to create it." - Peter Drucker</p>
      </div>
      <div className="events-section">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.eventimage} alt={event.eventname} className="event-image" />
            <div className="event-details">
              <h2>{event.eventname}</h2>
              <p>{event.date} at {event.time}</p>
              <p>{event.description}</p>
              <p>Guest: {event.guest}</p>
              <p>Category: {event.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
