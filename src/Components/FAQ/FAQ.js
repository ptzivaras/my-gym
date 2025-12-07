import React, { useState } from 'react';
import './FAQ.css';
import { IoChevronDown } from 'react-icons/io5';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are your gym opening hours?",
      answer: "We're open Monday to Friday from 8:00 AM to 10:00 PM, Saturday from 10:00 AM to 6:00 PM, and closed on Sundays."
    },
    {
      question: "Do I need to book classes in advance?",
      answer: "While walk-ins are welcome, we recommend booking classes in advance through our website or app to guarantee your spot, especially for popular classes like CrossFit and Muay Thai."
    },
    {
      question: "What equipment do I need to bring?",
      answer: "We provide all necessary equipment. Just bring a water bottle, towel, and your workout clothes. For specific classes like Boxing, we recommend bringing hand wraps."
    },
    {
      question: "Are personal trainers included in my membership?",
      answer: "Personal training sessions are separate from standard memberships. However, all memberships include access to group classes. Personal training packages are available at competitive rates."
    },
    {
      question: "Can I freeze my membership if I'm traveling?",
      answer: "Yes! Members can freeze their membership for up to 3 months per year. Contact our front desk at least 48 hours before your freeze date."
    },
    {
      question: "Do you offer student or senior discounts?",
      answer: "Yes, we offer 15% discount for students with valid ID and 20% discount for seniors (60+). These discounts apply to monthly and quarterly memberships."
    },
    {
      question: "Is there parking available?",
      answer: "We have a free parking lot with 50 spaces available for members. Street parking is also available nearby."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Monthly memberships require 30 days notice for cancellation. No-show fees apply if you miss a booked class without 24-hour notice."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>Got questions? We've got answers! Find everything you need to know about our gym.</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button 
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              <IoChevronDown className="faq-icon" />
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
