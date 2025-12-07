import React, { useState } from 'react';
import './CalculateBMI.css';

const CalculateBMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();

    if (height && weight) {
      // Convert height from cm to meters
      const heightInMeters = height / 100;
      // Calculate BMI
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      // Determine category and message
      if (bmiValue < 18.5) {
        setCategory('Underweight');
        setMessage('You may need to gain weight. Consult with a nutritionist for a proper diet plan.');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Normal');
        setMessage('Great! You have a healthy weight. Keep maintaining your fitness routine!');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Overweight');
        setMessage('Consider a balanced diet and regular exercise. Our trainers can help you!');
      } else {
        setCategory('Obese');
        setMessage('We recommend consulting with our fitness experts for a personalized program.');
      }
    }
  };

  const resetCalculator = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setCategory('');
    setMessage('');
  };

  const getCategoryClass = () => {
    switch (category) {
      case 'Underweight':
        return 'underweight';
      case 'Normal':
        return 'normal';
      case 'Overweight':
        return 'overweight';
      case 'Obese':
        return 'obese';
      default:
        return '';
    }
  };

  return (
    <div className="bmi-calculator">
      <div className="bmi-container">
        <h2 className="bmi-title">BMI Calculator</h2>
        <p className="bmi-subtitle">Calculate your Body Mass Index</p>

        <form onSubmit={calculateBMI} className="bmi-form">
          <div className="input-group">
            <label htmlFor="height">Height (cm)</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height in cm"
              min="50"
              max="250"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight in kg"
              min="20"
              max="300"
              step="0.1"
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="calculate-btn">
              Calculate BMI
            </button>
            <button type="button" onClick={resetCalculator} className="reset-btn">
              Reset
            </button>
          </div>
        </form>

        {bmi && (
          <div className={`bmi-result ${getCategoryClass()}`}>
            <div className="result-content">
              <h3>Your BMI</h3>
              <div className="bmi-value">{bmi}</div>
              <div className="bmi-category">{category}</div>
              <p className="bmi-message">{message}</p>
            </div>

            <div className="bmi-scale">
              <div className="scale-item">
                <div className="scale-color underweight"></div>
                <span>Underweight<br/>&lt; 18.5</span>
              </div>
              <div className="scale-item">
                <div className="scale-color normal"></div>
                <span>Normal<br/>18.5 - 24.9</span>
              </div>
              <div className="scale-item">
                <div className="scale-color overweight"></div>
                <span>Overweight<br/>25 - 29.9</span>
              </div>
              <div className="scale-item">
                <div className="scale-color obese"></div>
                <span>Obese<br/>≥ 30</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculateBMI;
