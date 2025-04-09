import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, BookOpen, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(20)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute inline-block w-1 h-1 rounded-full bg-white opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.8, 0.7],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 4 + 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8 text-center md:text-left"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Me</span>
          </h2>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
            {/* Left Column: Passionate Web Developer */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-green-600" aria-label="Passionate Web Developer Section">
                <Code className="h-8 w-8" aria-hidden="true" />
                <h3 className="text-xl md:text-2xl font-bold text-white">Passionate Web Developer</h3>
              </div>
              <p className="text-white leading-relaxed">
                I am a dedicated Computer Science student with a passion for creating innovative web solutions. 
                My journey in tech has equipped me with both frontend and backend development skills, 
                allowing me to build complete, user-centric applications.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-white">
                <li>Proficient in HTML, CSS, JavaScript, and React</li>
                <li>Experienced with backend technologies like Node.js and Express</li>
                <li>Skilled in database management using MongoDB and SQL</li>
              </ul>
            </motion.div>

            {/* Right Column: Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-green-600" aria-label="Education Section">
                <GraduationCap className="h-8 w-8" aria-hidden="true" />
                <h3 className="text-xl md:text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h4 className="font-semibold text-xl text-gray-800">Rai University X CodingGita</h4>
                <p className="text-gray-600">Computer Science Engineering</p>
                <p className="text-green-600 font-medium">CGPA: 9.76 (1st Semester)</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 group">
                  <Award className="h-5 w-5 text-green-500" />
                  <span>Recipient of Academic Excellence Award</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600 group">
                  <BookOpen className="h-5 w-5 text-green-500" />
                  <span>Active participant in coding workshops and hackathons</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 group">
                  <Sparkles className="h-5 w-5 text-green-500" />
                  <span>Published technical blogs on web development</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;