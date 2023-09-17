import React from "react";
import "./gymInfo.css"; // You can create a CSS file for styling
import HistoryIcon from '@mui/icons-material/History';
import FitnessCenterSharpIcon from '@mui/icons-material/FitnessCenterSharp';
import LocalDiningSharpIcon from '@mui/icons-material/LocalDiningSharp';

const gymInfo = () => {
  return (
    <div className="box-row">

      <div className="box">
        <div className="box-icon">
          <HistoryIcon style={{ fontSize: 70, color: "red" }} />
        </div>
        <h3 className="box-title">Progression</h3>
        <p className="box-text">
        Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.
        </p>
      </div>

      <div className="box">
        <div className="box-icon">
        <FitnessCenterSharpIcon fontSize="large" color="secondary" />
        </div>
        <h3>WorkOut</h3>
        <p className="box-text">
        With a variety of workouts to choose from, you ll have everything you need to get into the best shape of your life.
        </p>
      </div>

      <div className="box">
        <div className="box-icon">
        <LocalDiningSharpIcon fontSize="large" color="secondary" />
        </div>
        <h3>Nutritions</h3>
        <p className="box-text">
        Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.
        </p>
      </div>
    </div>
  );
};

export default gymInfo;
