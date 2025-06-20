import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import Contact from './pages/Contact';
import Rental from './pages/Rental';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
