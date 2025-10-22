import './App.css'
import AnimeCard from './components/Animecard';
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import {Routes, Route} from "react-router-dom" 
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Footer from './components/Footer';

function App() {

  return (
    <div>
    <Navbar />
    <main className='main-content'>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    <Footer />
    </div>
  
  );
}

export default App
