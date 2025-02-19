import React from 'react'
import { motion } from 'framer-motion';
import { GraduationCap, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 ml-5 mr-5 bg-[#F9F9F9]">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        About <span className="text-green-600">Me</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-green-600">
            <Code className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Passionate Web Developer</h3>
          </div>
          <p className="text-black-300 leading-relaxed">
            I am a dedicated Computer Science student with a passion for creating innovative web solutions. 
            My journey in tech has equipped me with both frontend and backend development skills, 
            allowing me to build complete, user-centric applications.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-green-600">
            <GraduationCap className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <div className="bg-white border-2 border-black-500 p-4 rounded-lg hover:shadow-md hover:shadow-green-500 transition-shadow">
            <h4 className="font-semibold">Rai University</h4>
            <p className="text-black-100">Computer Science Engineering</p>
            <p className="text-green-600">CGPA: 9.76 (1st Semester)</p>
          </div>
          
    
          </div>
        </div>
  
    </motion.div>
  </section>
  )
}

export default About
