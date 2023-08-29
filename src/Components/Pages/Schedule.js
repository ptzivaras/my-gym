import React from "react";

const scheduleData = [
  { day: "Monday", hours: "6:00 AM - 10:00 PM" },
  { day: "Tuesday", hours: "6:00 AM - 10:00 PM" },
  { day: "Wednesday", hours: "6:00 AM - 10:00 PM" },
  { day: "Thursday", hours: "6:00 AM - 10:00 PM" },
  { day: "Friday", hours: "6:00 AM - 10:00 PM" },
  { day: "Sunday", hours: "8:00 AM - 10:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 10:00 PM" }
];

const Schedule = () => {
  return (
    <div className="schedule">
      <h3>Opening Hours</h3>
      <ul>
        {scheduleData.map((day, index) => (
          <li key={index}>
            {day.day}: {day.hours}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
