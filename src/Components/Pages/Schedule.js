import React from "react";
import "./Schedule.css"; // Make sure to adjust the path to the CSS file

const Schedule = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const timeSlots = [
    "10 AM - 11:30 AM",
    "12 PM - 1:30 PM",
    "2 PM - 3:30 PM",
    "4 PM - 5:30 PM",
    "6 PM - 7:30 PM",
    "8 PM - 9:30 PM",
  ];

  return (
    <div className="schedule">

        <div className="header">
          <h1 className="header-title">Classes Schedule</h1>
          <h3 className="header-subtitle">
            This does not affect classic WorkOut. 
          </h3>
        </div>

      <div className="schedule-grid">
        {/* Day headers */}
        <div className="schedule-grid-day-header"></div>
        {days.map((day, index) => (
          <div key={index} className="schedule-grid-day-header">
            {day}
          </div>
        ))}

        {/* Time slot rows */}
        {timeSlots.map((timeSlot, slotIndex) => (
          <React.Fragment key={slotIndex}>
            <div className="schedule-grid-time-slot">{timeSlot}</div>
            {days.map((_, dayIndex) => (
              <div key={dayIndex} className="schedule-grid-cell">
                {/* Class info */}
                <div className="class-info">Class: Example Class</div>
                <div className="trainer-info">Trainer: John Doe</div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
