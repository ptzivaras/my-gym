import React from 'react';
import Membership from '../../Components/MemberShip/Membership';
import ImageWithTitle from '../../Components/ImageWithTitle/ImageWithTitle';

function PricePage() {
  return (
    <div>
            <ImageWithTitle imageUrl="https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=1600" title="Enjoy Our MemberShip" />

      <h2> Exclusive Pricing Plan</h2>
      <p>At Top Gym Fitness Club you can check our pricing chart here or you can meet us at the Location Provided in About Page to discuss your goals. Check out our pricing  plans here.</p>
      <Membership/> 
    </div>
  );
}

export default PricePage;
