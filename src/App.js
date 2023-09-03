import './App.css';
import Home from './Components/Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <main>
        <NavBar/>
        <Header/>
        <Home/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
