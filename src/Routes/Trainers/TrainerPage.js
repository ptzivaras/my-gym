import React from 'react';
import CardGrid from '../../Components/CardGrid/CardGrid';

const trainerCardData = [
  {
    title: "Thomas",
    image: "https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png",
    link: "http://localhost:3000/trainers"
  },
  {
    title: "Kostas",
    image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.thimble.com/wp-content/uploads/2022/05/Personal-Trainer-Salary-Guide-1200x800.jpg",
    link: "http://localhost:3000/trainers"
  },
  {
    title: "Jessica",
    image: "https://img.freepik.com/premium-photo/young-female-fitness-personal-trainer-with-notepad-standing-gym-with-thumb-up_146671-31568.jpg",
    link: "http://localhost:3000/trainers"
  },
  {
    title: "George",
    image: "https://healthguide.ng/wp-content/uploads/2022/02/Screenshot_2022-02-02-19-21-07-06.jpg",
    link: "http://localhost:3000/trainers"
  }
];

const TrainerPage = () => {
  return (
    <div>
      <CardGrid
        title="Classes Offered"
        description="Explore our fitness classes and schedules."
        cardData={trainerCardData}
      />
    </div>
  );
};

export default TrainerPage;
