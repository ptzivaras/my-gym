import React from 'react';
import Membership from '../../Components/MemberShip/Membership';
import ImageWithTitle from '../../Components/ImageWithTitle/ImageWithTitle';
import './PricePage.css';

function PricePage() {
  return (
    <div className="price-page">
      <ImageWithTitle 
        imageUrl="https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=1600" 
        title="Membership Plans" 
      />

      <div className="price-intro">
        <h2>Exclusive Pricing Plans</h2>
        <p>
          At Top Fitness Club you can check our pricing options below or visit us at the 
          location provided in the About Page to discuss your fitness goals with our team. 
          Choose the plan that fits your lifestyle and start your transformation today!
        </p>
      </div>
      
      <Membership/> 
    </div>
  );
}

export default PricePage;
