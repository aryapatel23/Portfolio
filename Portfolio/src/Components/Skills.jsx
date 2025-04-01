import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiFigma, SiGit, SiGithub, SiC 
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500 w-16 h-16" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500 w-16 h-16" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 w-16 h-16" /> },
      { name: "React", icon: <SiReact className="text-blue-400 w-16 h-16" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-500 w-16 h-16" /> }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500 w-16 h-16" /> },
      { name: "Express", icon: <SiExpress className="text-gray-500 w-16 h-16" /> }
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-700 w-16 h-16" /> }
    ]
  },
  {
    title: 'UI/UX Design',
    skills: [
      { name: "Figma", icon: <SiFigma className="text-purple-500 w-16 h-16" /> }
    ]
  },
  {
    title: 'Version Control',
    skills: [
      { name: "Git", icon: <SiGit className="text-red-500 w-16 h-16" /> },
      { name: "GitHub", icon: <SiGithub className="text-black w-16 h-16" /> }
    ]
  },
  {
    title: 'Programming',
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 w-16 h-16" /> },
      { name: "C", icon: <SiC className="text-blue-600 w-16 h-16" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#F9F9F9] relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute inline-block w-1 h-1 rounded-full bg-green-300 opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.5, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 5 + 3,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 leading-tight">
            My Skills
          </h2>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="bg-white p-6 shadow-lg rounded-xl flex flex-col items-center space-y-4 hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-green-500 relative group"
            >
              {/* Category Title */}
              <motion.h3 
                className="text-xl font-bold text-gray-800 relative"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {category.title}
                {/* Glowing Border Animation on Hover */}
                <motion.span
                  className="absolute inset-0 rounded-xl border-4 border-green-500 opacity-0 group-hover:opacity-50 filter blur-md transition-opacity duration-300"
                />
              </motion.h3>

              {/* Icons Grid */}
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, i) => (
                  <motion.div 
                    key={skill.name} 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 120, delay: i * 0.1 }}
                    className="transition-transform transform hover:scale-125 relative group"
                  >
                    <div className="relative">
                      {/* Icon Container with Hover Effect */}
                      <div className="p-3 rounded-full bg-white shadow-md group-hover:bg-green-50 group-hover:shadow-lg transition-all duration-300">
                        {skill.icon}
                      </div>
                      {/* Tooltip */}
                      <motion.div
                        className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 whitespace-nowrap"
                        style={{ pointerEvents: 'none' }} // Prevent tooltip from interfering with hover
                      >
                        {skill.name}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;  