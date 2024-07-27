import React from 'react';
import './Statistics.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register components needed for the chart
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Events Held',
      data: [10, 20, 15, 25, 30, 40, 35],
      borderColor: '#28a745',
      backgroundColor: 'rgba(40, 167, 69, 0.2)',
      borderWidth: 2,
      pointRadius: 5,  // Adjust as needed
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.dataset.label}: ${context.raw}`;
        },
      },
    },
  },
};

const Statistics = () => {
  return (
    <div className="statistics-container">
      <h1>Statistics</h1>
      <div className="statistics-cards">
        <div className="statistics-card">
          <h2>Total Events</h2>
          <p>150</p>
        </div>
        <div className="statistics-card">
          <h2>Active Events</h2>
          <p>45</p>
        </div>
        <div className="statistics-card">
          <h2>Upcoming Events</h2>
          <p>25</p>
        </div>
      </div>
      <div className="statistics-chart">
        <h2>Monthly Event Trends</h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Statistics;
