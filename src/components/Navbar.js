// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/shorten">Shorten URL</Link>
    <Link to="/urls">URL List</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    <Link to="/forgot-password">Forgot Password</Link>
  </nav>
);

export default Navbar;
