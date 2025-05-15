// import React, { useState } from 'react';
// import { Menu, X, Code2 } from 'lucide-react';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

//   return (
//     <nav className="fixed w-full bg-[#F9F9F9] backdrop-blur-lg shadow-md z-50">
//       {/* Floating Particles Background */}
//       <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
//         {[...Array(30)].map((_, index) => (
//           <motion.span
//             key={index}
//             className="absolute inline-block w-1 h-1 rounded-full bg-green-300 opacity-70"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, Math.random() * 100 - 50, 0],
//               x: [0, Math.random() * 100 - 50, 0],
//               scale: [1, 1.5, 1],
//               opacity: [0.7, 0.9, 0.7],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: Math.random() * 5 + 3,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo Section */}
//           <div className="flex items-center space-x-2">
//             <Code2 className="h-8 w-8 text-green-500" />
//             <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
//               Arya Patel
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-baseline space-x-4">
//             {navItems.map((item, index) => (
//               <motion.a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="relative px-3 py-2 rounded-md font-medium text-gray-800 transition-all hover:text-white hover:bg-black group"
//               >
//                 {item}
//                 {/* Underline Animation */}
//                 <motion.span
//                   className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"
//                   layoutId="underline"
//                 />
//               </motion.a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-green-500 focus:outline-none transition-transform duration-300 hover:scale-110"
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.3 }}
//           className="md:hidden relative z-10"
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <motion.a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 transition-all hover:text-white hover:bg-black hover:shadow-lg hover:scale-105"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item}
//               </motion.a>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import GooeyNav from './GooeyNav.jsx'; // Ensure this is mobile-friendly or use fallback

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navItems = [
//     { label: "Home", href: "#home" },
//     { label: "About", href: "#about" },
//     { label: "Skills", href: "#skills" },
//     { label: "Projects", href: "#projects" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
//       {/* Container */}
//       <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"
//         >
//           AP
//         </motion.div>

//         {/* Desktop GooeyNav */}
//         <div className="hidden md:block">
//           <GooeyNav
//             items={navItems}
//             animationTime={800}
//             particleCount={20}
//             particleDistances={[100, 20]}
//             particleR={150}
//             timeVariance={400}
//             colors={[1, 2, 3, 4]}
//             initialActiveIndex={0}
//           />
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             className="text-white focus:outline-none"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {/* Hamburger icon */}
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Items */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-black px-6 pb-4">
//           <ul className="flex flex-col space-y-4">
//             {navItems.map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={item.href}
//                   className="block text-white hover:text-green-400 transition-colors"
//                   onClick={() => setIsMobileMenuOpen(false)} // close menu after click
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GooeyNav from './GooeyNav.jsx'; // Import the GooeyNav component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
      {/* Container for Navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"
        >
          MyPortfolio
        </motion.div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} absolute lg:static top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent`}>
          <GooeyNav
            items={navItems}
            animationTime={800}
            particleCount={20}
            particleDistances={[100, 20]}
            particleR={150}
            timeVariance={400}
            colors={[1, 2, 3, 4]}
            initialActiveIndex={0}
            className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto py-4 lg:py-0 space-y-4 lg:space-y-0 lg:space-x-6"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;