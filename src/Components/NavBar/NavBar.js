import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function Navigation() {
  return (
    <div className="navbar">
      <NavLink to="/" className='text-bold fs-5'>Home</NavLink>
      <NavLink to="/classes" className='text-bold fs-5'>Classes</NavLink>
      <NavLink to="/trainers" className='text-bold fs-5'>Trainers</NavLink>
      <NavLink to="/price" className='text-bold fs-5'>Price</NavLink>
      <NavLink to="/about" className='text-bold fs-5'>About</NavLink>
      <NavLink to="/contact" className='text-bold fs-5'>Contact</NavLink>
    </div>
  );
}
