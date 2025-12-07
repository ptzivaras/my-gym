import React from "react";
import { Link } from 'react-router-dom';
import './Message01.css';

const AboutMessage = () => {
  return (
    <div className="horizontal-section">
      <div className="column column-left">
        <h2>Make Every Breath Count</h2>
      </div>
      <div className="column column-right">
        <p>
          Top Gym Fitness Club combines a holistic approach to exercise programs with the highest standards of hygiene and safety, in a space with a special design that turns daily training into an exclusive experience.
        </p>
        <p>
          Our purpose is to redefine the concept of the gym. In addition to the ideal selection of programs and advanced equipment, we have paid special attention to the design and functionality of the gyms, the relaxation areas as well as the integration of new technologies in the infrastructure as well as in the training process.
        </p>
        <div style={{ textAlign:'left' }}>
          <Link to='/about' className='btn btn-outline-light btn-lg' role='button'>
                Learn More
          </Link>        
        </div>
      </div>
    </div>
  );
};

export default AboutMessage;
