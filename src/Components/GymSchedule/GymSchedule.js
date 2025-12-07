import React, { useState } from "react";
import "./GymSchedule.css"; // You can create a CSS file for styling

const GymSchedule = () => {
  // Dummy data for the schedule
  const scheduleData = [
    {
        day: "Monday",
        classes: [
          { class: "CrossFit", time: "6:00", trainer: "Thomas" },
          { class: "Yoga", time: "8:00", trainer: "Jessica" },
          { class: "Boxing", time: "10:00", trainer: "George" },
          { class: "MMA", time: "12:00", trainer: "Thomas" },
          { class: "KickBoxing", time: "02:00", trainer: "George" },
          { class: "Pilates", time: "04:00", trainer: "Jessica" },
          { class: "CrossFit", time: "06:00", trainer: "Kostas" },
          { class: "Boxing", time: "08:00", trainer: "Thomas" },
          { class: "Yoga", time: "09:30", trainer: "Alice" },
        ],
      },
      {
        day: "Tuesday",
        classes: [
          { class: "Yoga", time: "7:00", trainer: "Alice" },
          { class: "MMA", time: "9:00", trainer: "George" },
          { class: "CrossFit", time: "11:00", trainer: "Thomas" },
          { class: "KickBoxing", time: "01:00", trainer: "Kostas" },
          { class: "Boxing", time: "03:00", trainer: "George" },
          { class: "Pilates", time: "05:00", trainer: "Jessica" },
          { class: "MMA", time: "07:00", trainer: "Thomas" },
          { class: "CrossFit", time: "08:30", trainer: "Kostas" },
          { class: "Yoga", time: "10:00", trainer: "Alice" },
        ],
      },
      {
        day: "Wednesday",
        classes: [
          { class: "Boxing", time: "6:00", trainer: "George" },
          { class: "Pilates", time: "8:00", trainer: "Jessica" },
          { class: "KickBoxing", time: "10:00", trainer: "Kostas" },
          { class: "Yoga", time: "12:00", trainer: "Alice" },
          { class: "CrossFit", time: "02:00", trainer: "Thomas" },
          { class: "MMA", time: "04:00", trainer: "George" },
          { class: "Boxing", time: "06:00", trainer: "Kostas" },
          { class: "Yoga", time: "08:00", trainer: "Jessica" },
          { class: "KickBoxing", time: "09:30", trainer: "Thomas" },
        ],
      },
      {
        day: "Thursday",
        classes: [
          { class: "MMA", time: "6:30", trainer: "Thomas" },
          { class: "Yoga", time: "8:30", trainer: "Alice" },
          { class: "CrossFit", time: "10:30", trainer: "Kostas" },
          { class: "Boxing", time: "12:30", trainer: "George" },
          { class: "Pilates", time: "02:30", trainer: "Jessica" },
          { class: "KickBoxing", time: "04:30", trainer: "Thomas" },
          { class: "MMA", time: "06:30", trainer: "Kostas" },
          { class: "CrossFit", time: "08:00", trainer: "George" },
          { class: "Yoga", time: "09:30", trainer: "Jessica" },
        ],
      },
      {
        day: "Friday",
        classes: [
          { class: "CrossFit", time: "6:00", trainer: "Kostas" },
          { class: "KickBoxing", time: "8:00", trainer: "George" },
          { class: "Yoga", time: "10:00", trainer: "Jessica" },
          { class: "MMA", time: "12:00", trainer: "Thomas" },
          { class: "Boxing", time: "02:00", trainer: "Kostas" },
          { class: "Pilates", time: "04:00", trainer: "Alice" },
          { class: "CrossFit", time: "06:00", trainer: "Thomas" },
          { class: "KickBoxing", time: "08:00", trainer: "George" },
          { class: "Yoga", time: "09:30", trainer: "Jessica" },
        ],
      },
      {
        day: "Saturday",
        classes: [
          { class: "Yoga", time: "8:00", trainer: "Alice" },
          { class: "CrossFit", time: "10:00", trainer: "Thomas" },
          { class: "Boxing", time: "12:00", trainer: "George" },
          { class: "Pilates", time: "02:00", trainer: "Jessica" },
          { class: "KickBoxing", time: "04:00", trainer: "Kostas" },
          { class: "MMA", time: "06:00", trainer: "Thomas" },
          { class: "CrossFit", time: "07:30", trainer: "George" },
          { class: "Boxing", time: "09:00", trainer: "Kostas" },
          { class: "Yoga", time: "10:30", trainer: "Alice" },
        ],
      },
      {
        day: "Sunday",
        classes: [
          { class: "Yoga", time: "9:00", trainer: "Jessica" },
          { class: "Pilates", time: "11:00", trainer: "Alice" },
          { class: "CrossFit", time: "01:00", trainer: "Kostas" },
          { class: "Boxing", time: "03:00", trainer: "George" },
          { class: "KickBoxing", time: "05:00", trainer: "Thomas" },
          { class: "Yoga", time: "07:00", trainer: "Jessica" },
          { class: "MMA", time: "08:30", trainer: "Kostas" },
          { class: "CrossFit", time: "10:00", trainer: "Thomas" },
          { class: "Pilates", time: "11:30", trainer: "Alice" },
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
