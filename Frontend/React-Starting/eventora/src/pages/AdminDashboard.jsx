import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './AdminDashboard.css';
import AdminNavbar from '../components/admin/AdminNavbar';
import AdminHome from '../components/admin/AdminHome';
import CreateEvent from '../components/admin/CreateEvent';
import HostedEvents from '../components/admin/HostedEvents';
import Statistics from '../components/admin/Statistics';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <AdminNavbar />
      <div className="admin-content">
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/hosted-events" element={<HostedEvents />} />
          <Route path="/statistics" element={<Statistics />} />
          {/* Ensure that the path matches the links in AdminNavbar */}
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
