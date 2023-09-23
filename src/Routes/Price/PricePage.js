import React from 'react';
import Membership from '../../Components/MemberShip/Membership';
import ImageWithTitle from '../../Components/ImageWithTitle/ImageWithTitle';

function PricePage() {
  return (
    <div>
            <ImageWithTitle imageUrl="https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=1600" title="Enjoy Our MemberShip" />

      <h2>Pricing</h2>
      <p>Check out our pricing  plans here.</p>
      <Membership/> 
    </div>
  );
}

export default PricePage;
