import React from "react";
import { Link } from 'react-router-dom';
import "./ClassMessage.css";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const ClassMessage = () => {
  return (
    <div className="custom-program-card">
      <h2 className="custom-title">Who We Are</h2>
      <h1 className="custom-subtitle">Take Your Health And Body To Next Level</h1>
      <p className="custom-paragraph">
        Take your health and body to the next level with our comprehensive
        program designed to help you reach your fitness goals.
      </p>
      <div className="custom-program-details">
        <div className="custom-program-item">
          <h3 className="custom-item-title">Professional Trainers</h3>
          <div className="box-icon">
            <DoneAllIcon fontSize="large" color="secondary" />
          </div>
        </div>
        <div className="custom-program-item">
          <h3 className="custom-item-title">Modern Equipment</h3>
          <div className="box-icon">
            <DoneOutlineIcon fontSize="large" color="primary" />
          </div>
        </div>
        <div className="custom-program-item">
          <h3 className="custom-item-title">Fancy Gym Design</h3>
          <div className="box-icon">
            <DoneAllIcon fontSize="large" color="secondary" />
          </div>
        </div>
      </div>
      <Link to='/classes'>
        <button className="custom-button">Check Our Classes</button>
      </Link>
    </div>
  );
};

export default ClassMessage;
