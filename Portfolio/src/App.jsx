import { useState } from 'react';
import './App.css';

// import CustomCursor from './Components/CustomCursor/CustomCursor';
import Loader from './Components/Loader/Loader';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>


      {/* Loader shown while loading */}
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <div className="app-content">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;