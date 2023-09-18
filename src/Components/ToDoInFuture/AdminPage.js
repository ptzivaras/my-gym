// import React from 'react';
import React, { useState } from 'react';
import MemberPage from './MemberPage';
import TrainerPage from '../Pages/Trainers/TrainerPage';


const AdminPage = () => {
  const [activeTool, setActiveTool] = useState('members');

  const handleToolChange = (tool) => {
    setActiveTool(tool);
  };

  const renderToolContent = () => {
    switch (activeTool) {
      case 'members':
        return <MemberPage />;
      case 'trainers':
        return <TrainerPage />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-page-container">
      <div className="sidebar">
        <div
          className={`sidebar-item ${activeTool === 'members' ? 'active' : ''}`}
          onClick={() => handleToolChange('members')}
        >
          Members
        </div>
        <div
          className={`sidebar-item ${activeTool === 'trainers' ? 'active' : ''}`}
          onClick={() => handleToolChange('trainers')}
        >
          Trainers
        </div>
      </div>
      <div className="main-content">
        {renderToolContent()}
      </div>
    </div>
  );
};

export default AdminPage;
