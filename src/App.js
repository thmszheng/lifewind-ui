import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/Pages/HomePage';
import Footer from './components/Footer';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <HomePage/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
