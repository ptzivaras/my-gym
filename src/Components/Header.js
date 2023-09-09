import React from 'react';
import myImage from './Assets/headerbg.jpg'; 
import './Header.css'; // Import your CSS file


export default function BgImageWithNavbar() {
  return (
    <header style={{ paddingLeft: 0, margin: 0, height: '90vh' }}>
      <div
        style={{
          backgroundImage: `url(${myImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          width: '100%'
        }}
      >
        {/* <div className="header-mask"> */}
          <div className="header-content">
            <div className='header-wrapper'>
              <h1 className='header-title'>Gym Fitness Club</h1>
              <h4 className='header-subtitle'>Work Harder, Get Stronger</h4>
              <a className='btn btn-outline-light btn-lg header-btn' href='#!' role='button'>
                Join Us
              </a>
            </div>
            </div>
        {/* </div> */}
      </div>
    </header>
  );
}




