import React from 'react';

import Header from '../../Components/Header/Header';
import AboutMessage from '../../Components/TextMessages/Message01';
// import Trainers from './Pages/Trainers';
import CardRow from '../../Components/TextInfo/gymInfo';
import TrainerMessage from '../../Components/TrainersMessage/TrainerMessage';
import TrainerMessage2 from '../../Components/TrainersMessage/TrainerMessage2';

import Testimonials from  '../../Components/Testimonials/Testimonials';
import TextImageSplitter from '../../Components/TextImageSplitter/TextImageSplitter';
import ClassMessage from '../../Components/ClassMessage/ClassMessage';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Gallery from '../../Components/Gallery/Gallery';

// Define a functional component
function HomePage() {
  return (
    <div>
      <Header/>

      {/* 3 CardLike boxes displaying some info under Header */}
      <CardRow/>

      <SectionTitle
        title="Visit Our Gym"
        paragraph="Join us for an exclusive visit to our gym! We're excited to share the fantastic opportunities and services we offer to help you reach your fitness goals. During your visit, our team will provide a personalized consultation, discussing how we can tailor our programs to meet your unique needs.

        As a special welcome, we're pleased to offer you a complimentary two-week access pass to experience all that our gym has to offer. It's the perfect opportunity to explore our diverse range of programs and amenities.
        
        We can't wait to welcome you to our gym and embark on this fitness journey together!"
      />

      {/* Split Panel*/}
      <TextImageSplitter
        leftContent={<ClassMessage />}
        rightContent={<img src="https://images.pexels.com/photos/6389867/pexels-photo-6389867.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Your Image" />}
      />

      {/* TODO: make this look good */}
      <AboutMessage></AboutMessage>

      <SectionTitle
        title="Meet Our Trainers"
        paragraph="Our team of dedicated trainers is here to help you achieve your fitness goals.
        With years of experience and expertise in various disciplines, our trainers are committed
        to providing personalized guidance and support on your fitness journey."
      />

      {/* Meet Trainers*/}
      <TextImageSplitter
        leftContent={<img src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTk1MTQyMTYwMTQyNTc1MzMw/best-online-personal-trainers_hero.png" alt="Your Image" />}
        rightContent={<TrainerMessage2 />}
      />

      <SectionTitle
        title="Check Our Testimonials"
      />
      <Testimonials/> 

      <Gallery />

      {/* ΒΜΙ calculator  */}

    </div>
  );
}

export default HomePage;