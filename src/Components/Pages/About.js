import React from "react";

const AboutPage = () => {
  return (
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
  );
};

export default AboutPage;