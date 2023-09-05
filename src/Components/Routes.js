import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Classes from './Components/Pages/ClassesPage';
import TrainerPage from './Components/Pages/TrainerPage';
import PricePage from './Components/Pages/PricePage';
import AboutPage from './Components/Pages/AboutPage';

export default function Routes() {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/trainers" element={<TrainerPage />} />
      <Route path="/price" element={<PricePage />} />
      <Route path="/about" element={<AboutPage />} />
    </>
  );
}
