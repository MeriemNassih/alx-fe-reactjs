import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';  // Importer le composant Navbar
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';  // Si tu as un Footer

function App() {
  return (
    <Router>
      <div>
        {/* Afficher la barre de navigation sur toutes les pages */}
        <Navbar />

        {/* Définir les routes pour chaque page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Si tu as un footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
