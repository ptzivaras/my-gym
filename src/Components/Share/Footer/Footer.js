import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Top Gym Fitness Club</p>
    </footer>
  );
};

export default Footer;
