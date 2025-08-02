import React, { useState } from 'react';
import './App.css';


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

      {/* New loader shown during loading */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* Main content shown after loader finishes */}
      {/* {!loading && ( */}
        <>
            <div className="flex">

          <Navbar />
          <div className="flex-1 pl-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          </div>
          </div>
        </>
      {/* )} */}
    </>
  );
}

export default App;