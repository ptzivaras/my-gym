import React from 'react';
import DescriptionList from './Pages/classInfo';
import GymSchedule from './GymSchedule/GymSchedule';

function ClassesPage() {
  return (
    <div>
      <h2>Classes Offered</h2>
      <p>Explore our fitness classes and schedules.</p>
      <DescriptionList/>
      <GymSchedule/>
    </div>
  );
}

export default ClassesPage;
