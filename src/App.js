import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './Routes/Home/HomePage';
import AboutPage from './Routes/About/AboutPage';
import TrainerPage from './Routes/Trainers/TrainerPage';
import ClassesPage from './Routes/Classes/ClassesPage';
import PricePage from './Routes/Price/PricePage';
import ContactPage from './Routes/Contact/ContactPage';
import Footer from './Components/Footer/Footer';
import DarkModeToggle from './Components/DarkModeToggle/DarkModeToggle';
import './Components/Footer/Footer.css';

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
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </BrowserRouter>
      <div>
      <Footer/>
      </div>
      <DarkModeToggle />
    </div>
  );
}

export default App;

