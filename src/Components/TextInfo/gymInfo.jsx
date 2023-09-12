import React from "react";
import "./gymInfo.css"; // You can create a CSS file for styling

const gymInfo = () => {
  return (
    <div className="box-row">
      <div className="box">
        <div className="box-icon">
          <i className="fa fa-clock" id="animated-icon"></i>
        </div>
        <p className="box-text">
          Our team of experts will work with you to create a customized plan
          that helps you achieve success one step at a time.
        </p>
      </div>

      <div className="box">
        <div className="box-icon">
          <img src="icon2.png" alt="Icon 2" />
        </div>
        <p className="box-text">
        With a variety of workouts to choose from, you ll have everything you need to get into the best shape of your life.
        </p>
      </div>

      <div className="box">
        <div className="box-icon">
          <img src="icon3.png" alt="Icon 3" />
        </div>
        <p className="box-text">
        Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.
        </p>
      </div>
    </div>
  );
};

export default gymInfo;
