// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const [stats, setStats] = useState({ daily: {}, monthly: {} });

  useEffect(() => {
    const fetchStats = async () => {
      const response = await axios.get('http://localhost:5000/stats');
      setStats(response.data);
    };
    fetchStats();
  }, []);

  const data = {
    labels: Object.keys(stats.daily),
    datasets: [
      {
        label: 'URLs Created',
        data: Object.values(stats.daily),
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <Line data={data} />
    </div>
  );
};

export default Dashboard;
