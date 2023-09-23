import React from 'react';
import ImageWithTitle from '../../Components/ImageWithTitle/ImageWithTitle';
// import MapComponent from '../../Components/WorldMap/MapComponent';

function AboutPage() {
  return (
    <div>
      <ImageWithTitle imageUrl="https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=1600" title="Learn About Us" />

     

      <h2 className="header-title">Visit Our Gym</h2>
      <h3 className="header-subtitle">We don't give promises. We give results.</h3>

      {/* <MapComponent /> */}

    </div>

    
  );
}

export default AboutPage;
