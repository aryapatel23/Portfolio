import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center justify-center bg-[#F9F9F9] relative overflow-hidden">
      {/* Animated Background Code Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
      />
      
      <div className="grid md:grid-cols-2 gap-30 items-center relative z-10 px-6">
        {/* Left Section with Typing Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-green-600">Arya Patel</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700">
            <Typewriter
              options={{
                strings: ['Web Developer', 'Problem Solver', 'UI/UX Enthusiast'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-green-600" />
              <span>aryapatel.cg@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-600" />
              <span>Gujarat, India</span>
            </div>
          </div>
          {/* Social Icons with Glow Effect */}
          <div className="flex gap-4">
            <a href="https://github.com/aryapatel23" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full hover:shadow-glow transition-all duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/arya-patel-profile/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full hover:shadow-glow transition-all duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          {/* Download Resume Button */}
          <a 
            href="https://drive.google.com/file/d/1oTLgFgCSCTNbQDZWGE9C9zubD2VRIry6/view" 
            download 
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>
        </motion.div>
        
        {/* Right Section - Floating 3D Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative rounded-full overflow-hidden shadow-xl">
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute inset-0"
            ></motion.div>
            <img
              src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1739790416/jhuq3g3vbp42bdkapdxs.jpg"
              alt="Arya Patel"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
