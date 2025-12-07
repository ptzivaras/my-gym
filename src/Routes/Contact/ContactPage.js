import React from 'react';
import ImageWithTitle from '../../Components/ImageWithTitle/ImageWithTitle';
import ContactForm from '../../Components/ContactForm/ContactForm';

function ContactPage() {
  return (
    <div className="contact-page">
      <ImageWithTitle 
        imageUrl="https://images.pexels.com/photos/7432/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600" 
        title="Contact Us" 
      />
      <ContactForm />
    </div>
  );
}

export default ContactPage;
