import React from 'react';
import './SkeletonLoader.css';

export const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
      </div>
    </div>
  );
};

export const SkeletonTrainerCard = () => {
  return (
    <div className="skeleton-trainer-card">
      <div className="skeleton-avatar"></div>
      <div className="skeleton-name"></div>
      <div className="skeleton-role"></div>
      <div className="skeleton-description"></div>
      <div className="skeleton-description short"></div>
    </div>
  );
};

export const SkeletonGallery = () => {
  return (
    <div className="skeleton-gallery-grid">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="skeleton-gallery-item"></div>
      ))}
    </div>
  );
};

export const SkeletonTestimonial = () => {
  return (
    <div className="skeleton-testimonial">
      <div className="skeleton-quote"></div>
      <div className="skeleton-quote short"></div>
      <div className="skeleton-author-section">
        <div className="skeleton-author-avatar"></div>
        <div className="skeleton-author-info">
          <div className="skeleton-author-name"></div>
          <div className="skeleton-author-rating"></div>
        </div>
      </div>
    </div>
  );
};

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      <SkeletonCard />
    </div>
  );
};

export default SkeletonLoader;
