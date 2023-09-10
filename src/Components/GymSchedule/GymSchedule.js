import React, { useState } from "react";
import "./GymSchedule.css"; // You can create a CSS file for styling

const GymSchedule = () => {
  // Dummy data for the schedule
  const scheduleData = [
    {
        day: "Monday",
        classes: [
          { class: "monday", time: "8:00", trainer: "George" },
          { class: "KickBoxing", time: "9:30", trainer: "Alice" },
          { class: "MMA", time: "11:00", trainer: "Alice" },
          { class: "Yoga", time: "12:30", trainer: "Alice" },
          { class: "Yoga", time: "02:00", trainer: "Alice" },
          { class: "Boxing", time: "05:30", trainer: "Alice" },
          { class: "Yoga", time: "07:00", trainer: "Alice" },
          { class: "Boxing", time: "08:30", trainer: "Alice" },
          { class: "Yoga", time: "10:00", trainer: "Alice" },
        ],
      },
      {
        day: "Tuesday",
        classes: [
          { class: "tuesday", time: "8:00", trainer: "George" },
          { class: "KickBoxing", time: "9:30", trainer: "Alice" },
          { class: "MMA", time: "11:00", trainer: "Alice" },
          { class: "Yoga", time: "12:30", trainer: "Alice" },
          { class: "Yoga", time: "02:00", trainer: "Alice" },
          { class: "Boxing", time: "05:30", trainer: "Alice" },
          { class: "Yoga", time: "07:00", trainer: "Alice" },
          { class: "Boxing", time: "08:30", trainer: "Alice" },
          { class: "Yoga", time: "10:00", trainer: "Alice" },
        ],
      },
      {
        day: "Wednesday",
        classes: [
          { class: "wednesday", time: "8:00", trainer: "George" },
          { class: "KickBoxing", time: "9:30", trainer: "Alice" },
          { class: "MMA", time: "11:00", trainer: "Alice" },
          { class: "Yoga", time: "12:30", trainer: "Alice" },
          { class: "Yoga", time: "02:00", trainer: "Alice" },
          { class: "Boxing", time: "05:30", trainer: "Alice" },
          { class: "Yoga", time: "07:00", trainer: "Alice" },
          { class: "Boxing", time: "08:30", trainer: "Alice" },
          { class: "Yoga", time: "10:00", trainer: "Alice" },
        ],
      },
      {
        day: "Thursday",
        classes: [
          { class: "thursday", time: "8:00", trainer: "George" },
          { class: "KickBoxing", time: "9:30", trainer: "Alice" },
          { class: "MMA", time: "11:00", trainer: "Alice" },
          { class: "Yoga", time: "12:30", trainer: "Alice" },
          { class: "Yoga", time: "02:00", trainer: "Alice" },
          { class: "Boxing", time: "05:30", trainer: "Alice" },
          { class: "Yoga", time: "07:00", trainer: "Alice" },
          { class: "Boxing", time: "08:30", trainer: "Alice" },
          { class: "Yoga", time: "10:00", trainer: "Alice" },
        ],
      },
      {
        day: "Friday",
        classes: [
          { class: "friday", time: "8:00", trainer: "George" },
          { class: "KickBoxing", time: "9:30", trainer: "Alice" },
          { class: "MMA", time: "11:00", trainer: "Alice" },
          { class: "Yoga", time: "12:30", trainer: "Alice" },
          { class: "Yoga", time: "02:00", trainer: "Alice" },
          { class: "Boxing", time: "05:30", trainer: "Alice" },
          { class: "Yoga", time: "07:00", trainer: "Alice" },
          { class: "Boxing", time: "08:30", trainer: "Alice" },
          { class: "Yoga", time: "10:00", trainer: "Alice" },
        ],
      },
      {
        day: "Saturday",
        classes: [
          { class: "saturday", time: "8:00", trainer: "George" },
          { class: "KickBoxing", time: "9:30", trainer: "Alice" },
          { class: "MMA", time: "11:00", trainer: "Alice" },
          { class: "Yoga", time: "12:30", trainer: "Alice" },
          { class: "Yoga", time: "02:00", trainer: "Alice" },
          { class: "Boxing", time: "05:30", trainer: "Alice" },
          { class: "Yoga", time: "07:00", trainer: "Alice" },
          { class: "Boxing", time: "08:30", trainer: "Alice" },
          { class: "Yoga", time: "10:00", trainer: "Alice" },
        ],
      },
      {
        day: "Sunday",
        classes: [
          { class: "sunday", time: "8:00", trainer: "George" },
          { class: "KickBoxing", time: "9:30", trainer: "Alice" },
          { class: "MMA", time: "11:00", trainer: "Alice" },
          { class: "Yoga", time: "12:30", trainer: "Alice" },
          { class: "Yoga", time: "02:00", trainer: "Alice" },
          { class: "Boxing", time: "05:30", trainer: "Alice" },
          { class: "Yoga", time: "07:00", trainer: "Alice" },
          { class: "Boxing", time: "08:30", trainer: "Alice" },
          { class: "Yoga", time: "10:00", trainer: "Alice" },
        ],
      },
  ];

  // State to keep track of the selected day
  const [selectedDay, setSelectedDay] = useState(0); // Default to Monday (index 0)

  const handleDayClick = (index) => {
    setSelectedDay(index);
  };

  return (
    <div className="gym-schedule">
      <div className="day-buttons">
        {scheduleData.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDayClick(index)}
            className={selectedDay === index ? "selected" : ""}
          >
            {day.day}
          </button>
        ))}
      </div>

      <div className="schedule-table">
        <div className="table-row header">
          <div className="table-cell">Class</div>
          <div className="table-cell">Time</div>
          <div className="table-cell">Trainer</div>
        </div>

        {scheduleData[selectedDay].classes.map((schedule, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">
              <p className="class">{schedule.class}</p>
            </div>
            <div className="table-cell">
              <p className="time">{schedule.time}</p>
            </div>
            <div className="table-cell">
              <p className="trainer">{schedule.trainer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymSchedule;
