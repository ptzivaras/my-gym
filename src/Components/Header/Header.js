import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../Assets/headerbg.jpg'; 
import './Header.css'; // Import your CSS file


export default function BgImageWithNavbar() {
  return (
    <header style={{ paddingLeft: 0, margin: 0, height: '110vh' }}>
      <div
        style={{
          backgroundImage: `url(${myImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '110vh',
          width: '100%'
        }}
      >
        {/* <div className="header-mask"> */}
          <div className="header-content">
            <div className='header-wrapper'>
              <h1 className='header-title'>Gym Fitness Club</h1>
              <h4 className='header-subtitle'>Work Harder, Get Stronger</h4>
              <Link to='/price' className='btn btn-outline-light btn-lg header-btn' role='button'>
                Join Us
              </Link>
            </div>
            </div>
        {/* </div> */}
      </div>
    </header>
  );
}




