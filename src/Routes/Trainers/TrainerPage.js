import React from 'react';
import CardGrid from '../../Components/CardGrid/CardGrid';
import ImageWithTitle from '../../Components/ImageWithTitle/ImageWithTitle';


const trainerCardData = [
  {
    title: "Thomas",
    description: "Certified personal trainer with 10 years of experience.",
    image: "https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png",
    link: "http://localhost:3000/trainers"
  },
  {
    title: "Kostas",
    description: "Passionate fitness instructor dedicated to helping you achieve your goals.",
    image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.thimble.com/wp-content/uploads/2022/05/Personal-Trainer-Salary-Guide-1200x800.jpg",
    link: "http://localhost:3000/trainers"
  },
  {
    title: "Jessica",
    description: "Experienced female trainer specializing in strength and conditioning.",
    image: "https://img.freepik.com/premium-photo/young-female-fitness-personal-trainer-with-notepad-standing-gym-with-thumb-up_146671-31568.jpg",
    link: "http://localhost:3000/trainers"
  },
  {
    title: "George",
    description: "Fitness enthusiast and coach with a focus on overall health and wellness.",
    image: "https://healthguide.ng/wp-content/uploads/2022/02/Screenshot_2022-02-02-19-21-07-06.jpg",
    link: "http://localhost:3000/trainers"
  }
];

const TrainerPage = () => {
  return (
    <div>
      <ImageWithTitle imageUrl="https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=1600" title="Available Trainers" />

      <CardGrid
        cardData={trainerCardData}
      />
    </div>
  );
};

export default TrainerPage;
