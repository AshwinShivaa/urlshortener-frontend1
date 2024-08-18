import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Shorten from './pages/Shorten';
import UrlList from './pages/UrlList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/login" element={<Login />} /> {/* Use element instead of component */}
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shorten" element={<Shorten />} />
        <Route path="/urls" element={<UrlList />} />
        <Route path="/" element={<Login />} /> {/* Default route */}
      </Routes>
    </div>
  );
}

export default App;
