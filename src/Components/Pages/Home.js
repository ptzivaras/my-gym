import React from "react";
import "./Home.css";

const membershipOptions = [
  { label: "1 Month", price: "$50" },
  { label: "3 Months", price: "$120" },
  { label: "6 Months", price: "$220" },
  { label: "12 Months", price: "$400" },
];

const fitnessPrograms = [
  "Muay Thai",
  "TRX",
  "Cross Fit",
  "MMA",
  "Kick Box",
  "Personal Training",
  "Wight Loss",
  "Work Out"
];

const trainerCardData = [
  {
    title: "Thomas",
    image: "https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png",
    link: ""
  },
  {
    title: "Kostas",
    image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.thimble.com/wp-content/uploads/2022/05/Personal-Trainer-Salary-Guide-1200x800.jpg",
    link: ""
  },
  {
    title: "Jessica",
    image: "https://img.freepik.com/premium-photo/young-female-fitness-personal-trainer-with-notepad-standing-gym-with-thumb-up_146671-31568.jpg",
    link: ""
  },
  {
    title: "George",
    image: "https://healthguide.ng/wp-content/uploads/2022/02/Screenshot_2022-02-02-19-21-07-06.jpg",
    link: ""
  }
];

const cardData = [
  {
    title: "MUAY THAI",
    image: "https://img2.storyblok.com/1800x743/filters:focal():format(png)/f/115220/2400x990/4bd3c366bb/muay-thai-vs-kickboxing-whats-the-difference.png",
    link: ""
  },
  {
    title: "TRX",
    image: "https://hips.hearstapps.com/hmg-prod/images/suspension-exercise-with-straps-royalty-free-image-1683627077.jpg",
    link: ""
  },
  {
    title: "Cross Fit",
    image: "https://bfsacademy.gr/wp-content/uploads/2018/09/Cross-Training.jpg",
    link: ""
  },
  {
    title: "MMA",
    image: "https://eternalmma.com/wp-content/uploads/2021/02/About-The-Company.jpg",
    link: ""
  },
  {
    title: "Kick Box",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/USMC-050716-M-1837P-001.jpg",
    link: ""
  },
  {
    title: "Personal Training",
    image: "https://rwfitness.com/wp-content/uploads/2022/03/Best-Personal-Trainers-in-Edgewater-MD-1024x577.png",
    link: ""
  },
  {
    title: "Weight Loss",
    image: "https://hips.hearstapps.com/hmg-prod/images/gym-training-on-stationary-bikes-royalty-free-image-1127485222-1566915831.jpg?crop=0.780xw:0.587xh;0.220xw,0.154xh&resize=640:*",
    link: ""
  },
  {
    title: "WorkOut",
    image: "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
    link: ""
  },
  // ... other card data
];

function Home() {
  return (
    <div className="home">
      
      {/* Text */}
      <div className="header">
        <h1 className="header-title">Change Your Body, Change Your Mindset</h1>
        <h3 className="header-subtitle">If It Was Easy, Everyone Would Do It</h3>
      </div>

    
      {/* Video */}
      {/* { <video autoPlay loop muted className="background-video">
        <source src="https://www.youtube.com/watch?v=Yko3GMseY40" type="video/mp4" />
        Your browser does not support the video tag.
      </video> } */}

      {/* <div className="video-container">
      <source src="https://media4.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif?cid=ecf05e47jggnxbg4p1yelu2zwixjeerci330x2ci0wiu557i&ep=v1_gifs_search&rid=giphy.gif&ct=g"
       type="video/mp4" />
        Your browser does not support the video tag.
      </div> */}

      {/* GIF */}
      { <div className="top-image-container">
        <img
          className="top-image"
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGk3bmpuYm1vZzF5ZTI1NW5nam9nZnlmbDhudmdudDdlcm8xYzNoaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UOA7c30OGV7jgBye3U/giphy.gif"
          alt="Looping GIF"
        />
      </div> }

  {/* About Page */}
  <div className="horizontal-section">
        <div className="column column-left">
          <h2>Make Every Breath Count</h2>
        </div>
        <div className="column column-right">
          <p>
          Top Wolf Fitness Club combines a holistic approach to exercise programs with the highest standards of hygiene and safety, in a space with a special design that turns daily training into an exclusive experience.

          </p>
          <p>
          Our purpose is to redefine the concept of the gym. In addition to the ideal selection of programs and advanced equipment, we have paid special attention to the design and functionality of the gyms, the relaxation areas as well as the integration of new technologies in the infrastructure as well as in the training process.

          </p>
          <div className="button-container">
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </div>


      {/* Grid of cards */}
      <div className="card-grid container">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <div className="img-container">
              <img className="card-img-top" src={card.image} alt={`Image for ${card.title}`} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <a href={card.link} className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* YouTube Video */}
      {/* { <div className="youtube-container">
        <iframe
          src="https://www.youtube.com/watch?v=dWpujp-h2M8"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div> } */}

      {/* Meet Our Trainers */}
      <div className="meet-trainers-container">
        <h2 className="meet-trainers-title">Meet Our Trainers</h2>
        <p className="meet-trainers-description">
          Our team of dedicated trainers is here to help you achieve your fitness goals. 
          With years of experience and expertise in various disciplines, our trainers are committed to providing
          personalized guidance and support on your fitness journey.
        </p>
      </div>

      {/* Trainers Cards */}
      <div className="card-grid container">
        {trainerCardData.map((card, index) => (
          <div className="card" key={index}>
            <div className="img-container">
              <img className="card-img-top" src={card.image} alt={`Image for ${card.title}`} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <a href={card.link} className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Buy Programs */}
      <div className="membership-options-container">
        <h2 className="section-title">Choose Your Membership</h2>
        <div className="options-grid">
          {membershipOptions.map((option, index) => (
            <div className="option-card" key={index}>
              <h3>{option.label}</h3>
              <p>{option.price}</p>
              <button className="cta-button">Select</button>
            </div>
          ))}
        </div>
      </div>

      <div className="fitness-programs-container">
        <h2 className="section-title">Choose Your Fitness Program</h2>
        <div className="programs-grid">
          {fitnessPrograms.map((program, index) => (
            <div className="program-card" key={index}>
              <h3>{program}</h3>
              <div className="duration-options">
                {membershipOptions.map((option, index) => (
                  <button className="duration-button" key={index}>
                    {option.label}
                  </button>
                ))}
              </div>
              <button className="cta-button">Buy Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Links to facebook and location of Gym */}

    </div>
  );
}

export default Home;
