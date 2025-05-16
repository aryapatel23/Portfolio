
import React, { useEffect } from 'react';
import './Loader.css'; // Make sure this CSS file exists

const Loader = ({ onFinish }) => {
  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      onFinish(); // This will set loading to false in App.jsx
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [onFinish]);

  return (
    <div className="loader-wrapper">
      {/* Background overlay */}
      <div className="loader-background"></div>

      {/* Loader content */}
      <div className="loader-content">
        {/* Namaste Icon SVG */}
        <svg
          className="loader-icon"
          viewBox="0 0 100 100"
          width="60"
          height="60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FF7F" />
              <stop offset="100%" stopColor="#00FFB3" />
            </linearGradient>
          </defs>

          {/* Head */}
          <circle cx="50" cy="30" r="18" fill="url(#gradient)" />
          {/* Body */}
          <rect x="45" y="50" width="10" height="20" fill="url(#gradient)" />
          {/* Hands */}
          <line x1="30" y1="50" x2="45" y2="40" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" />
          <line x1="70" y1="50" x2="55" y2="40" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" />
        </svg>

        {/* Loading Text */}
        <h2 className="loader-text">🙏 Namaste • Loading Portfolio</h2>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;



// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const Loader = ({ onFinish }) => {
//   const [typedText, setTypedText] = useState('');
//   const fullName = 'ARYA PATEL';

//   useEffect(() => {
//     let index = 0;

//     const interval = setInterval(() => {
//       if (index < fullName.length) {
//         setTypedText((prev) => prev + fullName[index]);
//         index++;
//       } else {
//         clearInterval(interval);
//         setTimeout(onFinish, 2000); // Fade out after delay
//       }
//     }, 150);

//     return () => clearInterval(interval);
//   }, [onFinish]);

//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1 }}
//       className="fixed inset-0 flex items-center justify-center bg-black text-white"
//     >
//       <h1 key={typedText} className="text-4xl md:text-6xl font-bold tracking-widest">
//         {typedText}
//         <span className="animate-pulse">|</span>
//       </h1>
//     </motion.div>
//   );
// };

// export default Loader;