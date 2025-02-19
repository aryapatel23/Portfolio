import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Github as Git, Code2, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS']
    },
    {
      title: 'Backend Development',
      icon: <Server />,
      skills: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      title: 'UI/UX Design',
      icon: <Palette />,
      skills: ['Figma', 'Responsive Design', 'User Experience']
    },
    {
      title: 'Database',
      icon: <Database />,
      skills: ['MongoDB', 'Database Design']
    },
    {
      title: 'Version Control',
      icon: <Git />,
      skills: ['Git', 'GitHub']
    },
    {
      title: 'Programming',
      icon: <Code2 />,
      skills: ['JavaScript', 'C', 'Problem Solving']
    }
  ];

  return (
    <section id="skills" className="py-20 ml-5 mr-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          My <span className="text-purple-500">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white-800/50 p-6 border-1 rounded-lg  transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-green-500">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-black-300">
                    • {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;