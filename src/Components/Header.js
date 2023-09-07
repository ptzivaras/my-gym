import React from 'react';
import myImage from './Assets/headerbg.jpg'; 
import './Header.css'; // Import your CSS file


export default function BgImageWithNavbar() {
  return (
    <header style={{ paddingLeft: 0, margin: 0, height: '90vh' }}>
      <div
        className='p-5 text-center bg-image d-flex justify-content-center align-items-center'
        style={{
          backgroundImage: `url(${myImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          width: '100%',
          position: 'relative',
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', height: '90vh', position: 'absolute', top: 0, left: 0 }}>
          <div className='text-white text-center'>
            <h1 className='mb-3 Header-title' style={{ fontSize: '80px', fontWeight: 'bold' }}>Gym Fitness Club</h1>
            <h4 className='mb-3 Header-subtitle' style={{ fontSize: '40px' }}>Work Harder, Get Stronger</h4>
            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
              Join Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}




