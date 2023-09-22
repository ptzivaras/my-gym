import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
  return (
    <div className="custom-footer">
      <div className="custom-container">
        <div className="custom-newsletter">
          <p className="custom-signup-text">Sign up for our newsletter</p>
          <input type="text" className="custom-email" placeholder="Enter your email address" />
          <button className="custom-subscribe">Subscribe</button>
        </div>
        <div className="custom-icons">
          <a href="#" className="social-button">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social-button">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="social-button">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="social-button">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
      <div className="custom-copyright">
        &copy; {new Date().getFullYear()} Copyright: Top Fitness Gym
      </div>
    </div>
  );
}
