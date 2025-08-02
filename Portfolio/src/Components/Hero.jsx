import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Download, Github, Linkedin } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Unique Background */}

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute inline-block w-1 h-1 rounded-full bg-white/70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 4 + 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-20 grid md:grid-cols-2 gap-16 items-center px-6 max-w-7xl mx-auto">
        {/* Left Section: Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold black leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              Arya Patel
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-black font-medium">
            <Typewriter
              options={{
                strings: ['Web Developer', 'Problem Solver', 'UI/UX Enthusiast'],
                autoStart: true,
                loop: true,
                cursor: '|',
              }}
            />
          </h2>
          <div className="space-y-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-green-500" />
              <span className="text-sm md:text-black">aryapatel.cg@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-500" />
              <span className="text-sm md:text-black">Gujarat, India</span>
            </div>
            <div className="flex space-x-4 text-black">
                        <a href="https://github.com/aryapatel23" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-green-500 transition-colors">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/arya-patel-profile/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-green-500 transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/arya-patel-profile/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-green-500 transition-colors">
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
          </div>
          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1oTLgFgCSCTNbQDZWGE9C9zubD2VRIry6"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            download="Arya_Patel_Resume.pdf"
            aria-label="Download Arya Patel's resume"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>
        </motion.div>

        {/* Right Section: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileInView={{ translateY: [-20, 0] }}
          viewport={{ once: true }}
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

export default HeroSection;