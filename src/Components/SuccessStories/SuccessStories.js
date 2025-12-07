import React from 'react';
import './SuccessStories.css';
import { IoTrophy, IoFitness, IoNutrition } from 'react-icons/io5';

const SuccessStories = () => {
  const stories = [
    {
      name: "Maria K.",
      age: 32,
      achievement: "Lost 25kg in 6 months",
      program: "Weight Loss + CrossFit",
      beforeImage: "https://images.pexels.com/photos/3768722/pexels-photo-3768722.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "I never thought I could transform my body like this. The trainers and community here made all the difference!",
      icon: <IoTrophy />
    },
    {
      name: "John D.",
      age: 28,
      achievement: "Gained 12kg muscle mass",
      program: "Personal Training + Nutrition",
      beforeImage: "https://images.pexels.com/photos/4753928/pexels-photo-4753928.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The personalized training program helped me achieve gains I never thought possible. Best investment ever!",
      icon: <IoFitness />
    },
    {
      name: "Sofia M.",
      age: 45,
      achievement: "Ran first marathon",
      program: "Cardio + Strength Training",
      beforeImage: "https://images.pexels.com/photos/3775164/pexels-photo-3775164.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/3768722/pexels-photo-3768722.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "At 45, I ran my first marathon! This gym gave me the strength and confidence to push my limits.",
      icon: <IoNutrition />
    }
  ];

  return (
    <div className="success-stories-container">
      <div className="success-header">
        <h2>Success Stories</h2>
        <p>Real people, real results. See how our members transformed their lives.</p>
      </div>

      <div className="stories-grid">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <div className="story-images">
              <div className="image-wrapper before">
                <img src={story.beforeImage} alt={`${story.name} before`} />
                <span className="image-label">Before</span>
              </div>
              <div className="vs-divider">
                <span>VS</span>
              </div>
              <div className="image-wrapper after">
                <img src={story.afterImage} alt={`${story.name} after`} />
                <span className="image-label">After</span>
              </div>
            </div>

            <div className="story-content">
              <div className="achievement-badge">
                <div className="badge-icon">{story.icon}</div>
                <div className="badge-text">{story.achievement}</div>
              </div>

              <h3>{story.name}, {story.age}</h3>
              <div className="program-tag">{story.program}</div>
              
              <blockquote className="story-quote">
                "{story.quote}"
              </blockquote>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h3>Ready to Write Your Success Story?</h3>
        <p>Join hundreds of members who transformed their lives at our gym</p>
        <button className="cta-button">Start Your Journey</button>
      </div>
    </div>
  );
};

export default SuccessStories;
