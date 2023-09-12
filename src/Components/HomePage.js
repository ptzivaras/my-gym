import React from 'react';

// import Home from './Pages/Home';
import Header from './Header';
import AboutMessage from './Share/TextMessages/Message01';
// import Trainers from './Pages/Trainers';
import CardRow from './TextInfo/gymInfo';
import WhatWeOffer from './ProgramsMessage/WhatWeOffer';


// Define a functional component
function HomePage() {
  return (
    <div>
      <Header/>

      {/* 3 CardLike boxes displaying some info under Header */}
      <CardRow/>

      {/* Message with button to Classes-Programs */}
      <WhatWeOffer/>   

      {/* TODO: make this look good */}
      <AboutMessage></AboutMessage>

      {/* TODO: make this look good and a button to go to trainer page*/}
      <div className="">
        <h2 className="header-title">Meet Our Trainers</h2>
        <h3 className="header-subtitle">
          Our team of dedicated trainers is here to help you achieve your fitness goals.
          With years of experience and expertise in various disciplines, our trainers are committed
          to providing personalized guidance and support on your fitness journey.
        </h3>
      </div>

      {/* TODO: make a text look good click somewhere and go to classes*/}


      {/* TODO: Testimonials */}


      {/* TODO: Image Gallery of Gym */}

      {/*Newsletter Signup*/}

      {/* ΒΜΙ calculator  */}

    </div>
  );
}

export default HomePage;