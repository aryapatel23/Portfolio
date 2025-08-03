// import React, { useState } from 'react';
// import './App.css';


// import Loader from './Components/Loader/Loader';
// import Navbar from './Components/Navbar';
// import Hero from './Components/Hero';
// import About from './Components/About';
// import Skills from './Components/Skills';
// import Projects from './Components/Projects';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';

// function App() {
//   const [loading, setLoading] = useState(true);

//   return (
//     <>

//       {/* New loader shown during loading */}
//       {loading && <Loader onFinish={() => setLoading(false)} />}

//       {/* Main content shown after loader finishes */}
//       {/* {!loading && ( */}
//         <>
//             <div className="flex">

//           <Navbar />
//           <div className="flex-1 pl-20">
//           <Hero />
//           <About />
//           <Skills />
//           <Projects />
//           <Contact />
//           <Footer />
//           </div>
//           </div>
//         </>
//       {/* )} */}
//     </>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar stays on all pages */}
        <Sidebar />

        {/* Page Content (moves right of sidebar) */}
        <div className="flex-1 pl-20 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
