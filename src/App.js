import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import TrainerPage from './Components/Pages/Trainers/TrainerPage';
import ClassesPage from './Components/ClassesPage';
import PricePage from './Components/PricePage';
import Footer from './Components/Share/Footer/Footer';
import './Components/Share/Footer/Footer.css';

function App() {
  return (
    <div className="bg">
      <BrowserRouter>
        <main>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/trainers" element={<TrainerPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/price" element={<PricePage />} />
          </Routes>
        </main>
      </BrowserRouter>
      <div>
      <Footer/>
      </div>
      
    </div>
  );
}

export default App;

