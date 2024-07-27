import React from 'react';
import './HostedEvents.css';

const events = [
  {
    id: 1,
    name: 'Annual Tech Conference',
    date: '2024-08-15',
    description: 'A conference featuring the latest in technology and innovation.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    name: 'Music Festival',
    date: '2024-09-10',
    description: 'An exciting music festival with performances by top artists.',
    image: 'https://via.placeholder.com/300',
  },
  // Add more event objects as needed
];

const HostedEvents = () => {
  return (
    <div className="hosted-events-container">
      <h1>Hosted Events</h1>
      <div className="event-cards-container">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-details">
              <h2 className="event-name">{event.name}</h2>
              <p className="event-date">{new Date(event.date).toLocaleDateString()}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostedEvents;
