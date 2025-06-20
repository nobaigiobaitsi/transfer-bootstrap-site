import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import Contact from './pages/Contact';
import Rental from './pages/Rental';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Carousel />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}


export default App;
