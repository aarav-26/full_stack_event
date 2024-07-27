import React, { useState } from 'react';
import './Support.css';

const Support = () => {
  const [email, setEmail] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://script.google.com/macros/s/AKfycbxE2uuojR0hrNptqWmIEtMUVIUWEYWlAREBYsH1a-tCMogjLlAmfahPOd7gbGze5Bw/exec', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, complaint }),
    });
    if (response.ok) {
      alert('Complaint submitted successfully!');
      setEmail('');
      setComplaint('');
    } else {
      alert('Error submitting complaint. Please try again.');
    }
  };

  return (
    <div className="support-container">
      <h1>Support</h1>
      <p>If you have any issues or concerns, please let us know. We are here to help you.</p>
      <form onSubmit={handleSubmit} className="support-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="complaint">Complaint</label>
          <textarea
            id="complaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
            placeholder="Describe your issue or feedback"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Support;
