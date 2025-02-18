import React from 'react'
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center bg-[#F9F9F9]">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-green-600">Arya Patel</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-black-300">
            Computer Science Engineer | Web Developer | Problem Solver
          </h2>
          <div className="space-y-4 text-black-300">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-green-600" />
              <span>aryapatel.cg@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-green-600" />
              <span>+91 9727659973</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-600" />
              <span>Gujarat, India</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/aryapatel23" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-green-500 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/arya-patel-profile/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-green-500 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-20"></div>
            <img
              src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1739790416/jhuq3g3vbp42bdkapdxs.jpg"
              alt="Arya Patel"
              className="rounded-full w-full h-full object-cover relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>

  )
}

export default Hero
