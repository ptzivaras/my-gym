// import './App.css';
// import Home from './Components/Pages/Home';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import NavBar from './Components/NavBar';

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Link, Route, Routes } from 'react-router-dom';



// import Classes from './Components/Pages/ClassesPage'; // Your Classes component
// import TrainerPage from './Components/Pages/TrainerPage'; // Your Trainers component
// import PricePage from './Components/Pages/PricePage'; // Your Price component
// import AboutPage from './Components/Pages/AboutPage'; // Your About component

//first code no router
// function App() {
//   return (
//     <div className="App">
//       <main>
//         <NavBar/>
//         <Header/>
//         <Home/>
//         <Footer/>
//       </main>
//     </div>
//   );
// }


//router code old not working
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <main>
//           <NavBar />
//           <Header />
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/classes" component={Classes} />
//             <Route path="/trainers" component={TrainerPage} />
//             <Route path="/price" component={PricePage} />
//             <Route path="/about" component={AboutPage} />
//           </Switch>
//           <Footer />
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

//--------------------- router 6
import React from 'react';
import { Link, Route, Outlet } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Classes from './Components/Pages/ClassesPage';
import TrainerPage from './Components/Pages/TrainerPage';
import PricePage from './Components/Pages/PricePage';
import AboutPage from './Components/Pages/AboutPage';

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default App;

