// import React from 'react';
// import { motion } from 'framer-motion';
// import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiFigma, SiGit, SiGithub, SiC } from 'react-icons/si';

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: 'Frontend Development',
//       skills: [
//         { name: 'HTML', icon: <SiHtml5 className="text-orange-500 w-8 h-8" /> },
//         { name: 'CSS', icon: <SiCss3 className="text-blue-500 w-8 h-8" /> },
//         { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500 w-8 h-8" /> },
//         { name: 'React', icon: <SiReact className="text-blue-400 w-8 h-8" /> },
//         { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-500 w-8 h-8" /> }
//       ]
//     },
//     {
//       title: 'Backend Development',
//       skills: [
//         { name: 'Node.js', icon: <SiNodedotjs className="text-green-500 w-8 h-8" /> },
//         { name: 'Express.js', icon: <SiExpress className="text-gray-500 w-8 h-8" /> }
//       ]
//     },
//     {
//       title: 'Database',
//       skills: [
//         { name: 'MongoDB', icon: <SiMongodb className="text-green-700 w-8 h-8" /> }
//       ]
//     },
//     {
//       title: 'UI/UX Design',
//       skills: [
//         { name: 'Figma', icon: <SiFigma className="text-purple-500 w-8 h-8" /> }
//       ]
//     },
//     {
//       title: 'Version Control',
//       skills: [
//         { name: 'Git', icon: <SiGit className="text-red-500 w-8 h-8" /> },
//         { name: 'GitHub', icon: <SiGithub className="text-black w-8 h-8" /> }
//       ]
//     },
//     {
//       title: 'Programming',
//       skills: [
//         { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500 w-8 h-8" /> },
//         { name: 'C', icon: <SiC className="text-blue-600 w-8 h-8" /> }
//       ]
//     }
//   ];

//   return (
//     <section id="skills" className="py-20 mx-5">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="space-y-12"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold text-center">
//           My <span className="text-green-500">Skills</span>
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105"
//             >
//               <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
//               <ul className="space-y-3">
//                 {category.skills.map((skill) => (
//                   <li key={skill.name} className="flex items-center gap-3 text-gray-700">
//                     {skill.icon}
//                     {skill.name}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;


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
      { icon: <SiHtml5 className="text-orange-500 w-16 h-16" /> },
      { icon: <SiCss3 className="text-blue-500 w-16 h-16" /> },
      { icon: <SiJavascript className="text-yellow-500 w-16 h-16" /> },
      { icon: <SiReact className="text-blue-400 w-16 h-16" /> },
      { icon: <SiTailwindcss className="text-teal-500 w-16 h-16" /> }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { icon: <SiNodedotjs className="text-green-500 w-16 h-16" /> },
      { icon: <SiExpress className="text-gray-500 w-16 h-16" /> }
    ]
  },
  {
    title: 'Database',
    skills: [
      { icon: <SiMongodb className="text-green-700 w-16 h-16" /> }
    ]
  },
  {
    title: 'UI/UX Design',
    skills: [
      { icon: <SiFigma className="text-purple-500 w-16 h-16" /> }
    ]
  },
  {
    title: 'Version Control',
    skills: [
      { icon: <SiGit className="text-red-500 w-16 h-16" /> },
      { icon: <SiGithub className="text-black w-16 h-16" /> }
    ]
  },
  {
    title: 'Programming',
    skills: [
      { icon: <SiJavascript className="text-yellow-500 w-16 h-16" /> },
      { icon: <SiC className="text-blue-600 w-16 h-16" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 mx-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          My <span className="text-green-500">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="bg-white p-6 shadow-lg rounded-xl flex flex-col items-center text-center transition-transform transform hover:scale-105 border-2 border-transparent hover:border-black-400 hover:shadow-black-300"
            >
              <motion.h3 
                className="text-xl font-semibold mb-4"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {category.title}
              </motion.h3>

              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 120, delay: i * 0.1 }}
                  >
                    {skill.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

