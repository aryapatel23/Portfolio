import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-50 via-white to-green-100"
      >
        {/* Cubes Pattern Overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-70"
        />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute inline-block w-1 h-1 rounded-full bg-green-300 opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0], // Moves up and down smoothly
              x: [0, Math.random() * 100 - 50, 0], // Moves left and right smoothly
              scale: [1, 1.5, 1], // Scales up and down
              opacity: [0.7, 0.9, 0.7], // Fades in and out
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 5 + 3, // Randomized duration for variety
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10 px-6 max-w-7xl mx-auto">
        {/* Left Section with Typing Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              Arya Patel
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
            <Typewriter
              options={{
                strings: ['Web Developer', 'Problem Solver', 'UI/UX Enthusiast'],
                autoStart: true,
                loop: true,
                cursor: '|',
              }}
            />
          </h2>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-green-500" />
              <span className="text-sm md:text-base">aryapatel.cg@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-500" />
              <span className="text-sm md:text-base">Gujarat, India</span>
            </div>
          </div>
          {/* Social Icons with Hover Effects */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/aryapatel23"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <Github className="h-6 w-6 text-green-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/arya-patel-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-green-500" />
            </a>
          </div>
          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1oTLgFgCSCTNbQDZWGE9C9zubD2VRIry6"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>

        </motion.div>

        {/* Right Section - Floating 3D Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative rounded-full overflow-hidden shadow-2xl border-4 border-green-500">
            <img
              src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1739790416/jhuq3g3vbp42bdkapdxs.jpg"
              alt="Arya Patel"
              className="rounded-full w-full h-full object-cover"
            />
            {/* Glowing Border Animation */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-green-500 opacity-50"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;