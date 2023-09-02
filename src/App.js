import './App.css';
import Home from './Components/Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <Header/>
        <Home/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
