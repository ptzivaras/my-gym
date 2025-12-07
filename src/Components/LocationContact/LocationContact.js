import React from 'react';
import './LocationContact.css';

const LocationContact = () => {
  return (
    <div className="location-contact-container">
      <div className="location-content">
        <div className="contact-info">
          <h2>Find Us</h2>
          <div className="info-section">
            <h3>Address</h3>
            <p>Spyrou Loui Avenue 1</p>
            <p>Maroussi, Athens 15123</p>
            <p>Greece</p>
          </div>
          
          <div className="info-section">
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 8:00 - 22:00</p>
            <p>Saturday: 10:00 - 18:00</p>
            <p>Sunday: Closed</p>
          </div>
          
          <div className="info-section">
            <h3>Contact</h3>
            <p>Tel: +30 210 123 4567</p>
            <p>Tel: +30 210 987 6543</p>
            <p>Email: info@topfitness.gr</p>
          </div>
        </div>
        
        <div className="map-container">
          <iframe
            title="Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.0858154742616!2d23.789625315199446!3d38.048988279718654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd06d4a9a71b%3A0x3e0b7e6f4c4c4c4c!2sMaroussi%2C%20Athens!5e0!3m2!1sen!2sgr!4v1234567890123!5m2!1sen!2sgr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationContact;
