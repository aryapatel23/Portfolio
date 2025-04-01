// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Github, ExternalLink, FileCode, Figma } from 'lucide-react';

// const Projects = () => {
//   const [filter, setFilter] = useState('all');

//     const projects = [
//       {
//         title: 'Convict - Job & Internship Portal',
//         description: 'A comprehensive job and internship portal that connects job seekers with opportunities. The platform allows companies to post job listings, edit them, and manage applications. It features authentication with Auth0, a structured backend with Node.js and Express, and a database powered by MongoDB.',
//         tech: ['React', 'Node.js', 'MongoDB'],
//         category: 'fullstack',
//         links: {
//           github: 'https://github.com/aryapatel23/Convict',
//           live: '#',
//           docs: 'https://documenter.getpostman.com/view/39193097/2sAYX5JhHE',
//           figma: 'https://www.figma.com/design/lgKV6f2QeXEJLsNeTOmfEM/project?node-id=0-1&t=we4BvWQcL2NWQM7E-1',
//           video: 'https://drive.google.com/file/d/1tNGJP6azgfnNupqGEpj01i4eO3U-WreZ/view?usp=sharing'
//         }
//       },
//       {
//         title: 'YouTube Clone',
//         description: 'A React-based YouTube clone that mimics the user interface and core functionalities of .YouTube. It dynamically fetches video content using the YouTube API, provides a responsive layout, and includes a sleek modern design for an intuitive user experience.',
//         tech: ['React'],
//         category: 'react',
//         links: {
//           github: 'https://github.com/aryapatel23/react_youtube',
//           live: 'http://react-youtubeav.netlify.app/'
//         },
//         media: 'https://res.cloudinary.com/dkombksnu/image/upload/v1740938531/dp9ctqqszgkdhvkhb4uu.jpg'
//       },
//       {
//         title: 'Amazon Clone',
//         description: 'A static e-commerce clone of Amazon that replicates the product listing, categories, and homepage layout. It is built with pure HTML and CSS to showcase a clean, structured design.',
//         tech: ['HTML', 'CSS'],
//         category: 'static',
//         links: {
//           github: 'https://github.com/aryapatel23/Amazon-clone',
//           live: 'https://amazo-nclone.netlify.app/'
//         },
//         media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742797071/pbux5amuxno1l3igdm5p.png'
//       },
//       {
//         title: 'Spotify Clone',
//         description: 'A fully responsive Spotify clone that features an interactive music player UI. Built with React, it aims to replicate the music browsing experience of Spotify while integrating smooth transitions and dynamic UI elements.',
//         tech: ['React'],
//         category: 'static',
//         links: {
//           github: 'https://github.com/aryapatel23/react_spotify'
//         },
//         media: 'https://res.cloudinary.com/dkombksnu/image/upload/v1740938530/w0lgprhoxfwjrwd0k8nr.jpg'
//       },
//       {
//         title: 'Instagram Clone (UI Design)',
//         description: 'A Figma-based UI/UX design for an Instagram clone. This design focuses on user experience, modern UI elements, and mobile responsiveness, making it an ideal reference for social media applications.',
//         tech: ['Figma'],
//         category: 'figma',
//         links: {
//           figma: 'https://www.figma.com/design/5OVYFlXAszrMxpf5dGtDoW/Instagram-Clone-(Community)?node-id=0-1&t=xXL38OBk1Oc8s6oV-1',
//         },
//         media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742796980/riyklvmabpv1o7s5omvl.png'
//       },
//       {
//         title: 'Flipkart One-Page Clone',
//         description: 'A single-page UI replica of Flipkart’s e-commerce website, designed with Figma. The design captures the essential elements of Flipkart’s user interface, including product sections, navigation bars, and banners.',
//         tech: ['Figma'],
//         category: 'figma',
//         links: {
//           figma: 'https://www.figma.com/design/iQ0pmlDv14Sy1gRBMCh5Zn/FLIPKART?node-id=0-1&t=pYMfJ0zRAR9aWWYO-1',
//         },
//         media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742796792/piskotkyaqcy0afytpil.png'
//       },
//       {
//         title: 'Coding Gita',
//         description: 'A UI/UX design concept for an educational platform that provides coding tutorials and programming resources. The design is focused on clarity, easy navigation, and an engaging learning experience.',
//         tech: ['Figma'],
//         category: 'figma',
//         links: {
//           figma: 'https://www.figma.com/design/HYqNDSEKgDosVPeIz5Qwoa/codinggita-clone?node-id=0-1&t=YuKllJgkLspl6vYM-1',
//         },
//         media: 'https://res.cloudinary.com/dkombksnu/image/upload/v1740294386/fmdmrma0oi9g3ifcmrje.png'
//       },
//       {
//         title: 'Games UI/UX Designs',
//         description: 'A collection of UI/UX design concepts for gaming applications. Each design showcases unique visual aesthetics and interactive components tailored for a seamless gaming experience.',
//         tech: ['Figma'],
//         category: 'figma',
//         links: {
//           figma: 'https://www.figma.com/design/GuZJWC9w9IFImuqG4wuvpg/Untitled?node-id=0-1&t=JexzIcNkYTLWmXDb-1',
//         },
//         media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742796601/lvzbggrq9hvjafwrwfil.png'
//       },
//       {
//         title: 'SIH Design',
//         description: 'A UI/UX design prototype created for Smart India Hackathon (SIH). It showcases an innovative and user-friendly layout for a project submission platform.',
//         tech: ['Figma'],
//         category: 'figma',
//         links: {
//           figma: 'https://www.figma.com/design/Z3MD449weH8aKg2BI0rdtL/SIH?node-id=0-1&t=mG1rF3AkEVSIz9ft-1',
//         },
//         media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742796429/okpw575nkhsvzo7slm1o.png'
//       },
//       {
//         title: 'Apna.co Clone',
//         description: 'A simple static job portal website inspired by Apna.co. Built with HTML and CSS, it features a modern design and structured job listing layout.',
//         tech: ['HTML', 'CSS'],
//         category: 'static',
//         links: {
//           github: 'https://github.com/aryapatel23/Apna_clone',
//           live: 'https://apnaco.netlify.app/'
//         },
//         media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742796196/ryfuplybwsc8jobzw7of.png'
//       }
//     ];
  

//   const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

//   return (
//     <section id="projects" className="py-20 mx-5">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="space-y-12"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold text-center">
//           My <span className="text-green-600">Projects</span>
//         </h2>

//         {/* 🔹 Filter Section with New Design */}
//         <motion.div
//           className="flex flex-wrap justify-center gap-3 pb-6"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {["all", "figma", "static", "react", "fullstack"].map((category) => (
//             <motion.button
//               key={category}
//               onClick={() => setFilter(category)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md ${
//                 filter === category
//                   ? "bg-green-600 text-white scale-105 shadow-lg"
//                   : "bg-gray-200 text-black hover:bg-gray-300"
//               }`}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* 🔹 Project Cards Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
//               }}
//               viewport={{ once: true }}
//               className="bg-white rounded-lg shadow-md border hover:border-green-500 transition-shadow flex flex-col h-full p-4"
//             >
//               {/* Title */}
//               <motion.h3
//                 className="text-xl font-semibold text-center border-b pb-2"
//                 initial={{ opacity: 0, y: -10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//               >
//                 {project.title}
//               </motion.h3>

//               {/* Description */}
//               <p className="text-gray-600 text-center pt-2 flex-grow">
//                 {project.description}
//               </p>

//               {/* Tech Stack Section */}
//               <motion.div
//                 className="grid grid-cols-3 gap-2 justify-center py-2"
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.2 }}
//               >
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-3 py-3 bg-gray-800 text-white rounded-full text-xs text-center"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </motion.div>

//               {/* Video/Image */}
//               <motion.div
//                 className="mt-4 w-full h-56"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.3 }}
//               >
//                 {project.links.video ? (
//                   <iframe
//                     src={`https://drive.google.com/file/d/${project.links.video.split("/d/")[1].split("/")[0]}/preview`}
//                     title={project.title}
//                     allow="autoplay"
//                     className="w-full h-full rounded-lg"
//                   ></iframe>
//                 ) : (
//                   <img
//                     src={project.media}
//                     alt={project.title}
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                 )}
//               </motion.div>

//               {/* Project Links */}
//               <motion.div
//                 className="flex justify-center gap-4 py-4  mt-auto"
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.4 }}
//               >
//                 {project.links.github && (
//                   <a
//                     href={project.links.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-black hover:text-green-500 transition-colors"
//                   >
//                     <Github className="h-5 w-5" />
//                     <span>Code</span>
//                   </a>
//                 )}
//                 {project.links.live && (
//                   <a
//                     href={project.links.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-black hover:text-green-500 transition-colors"
//                   >
//                     <ExternalLink className="h-5 w-5" />
//                     <span>Live Demo</span>
//                   </a>
//                 )}
//                 {project.links.docs && (
//                   <a
//                     href={project.links.docs}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-black hover:text-green-500 transition-colors"
//                   >
//                     <FileCode className="h-5 w-5" />
//                     <span>Docs</span>
//                   </a>
//                 )}
//                 {project.links.figma && (
//                   <a
//                     href={project.links.figma}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-black hover:text-green-500 transition-colors"
//                   >
//                     <Figma className="h-5 w-5" />
//                     <span>Figma</span>
//                   </a>
//                 )}
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Projects;



// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Github, ExternalLink, FileCode, Figma } from 'lucide-react';

// const Projects = () => {
//   const [filter, setFilter] = useState('all');
  
//   const projects = [
//           {
//             title: 'Convict - Job & Internship Portal',
//             description: 'A comprehensive job and internship portal that connects job seekers with opportunities. The platform allows companies to post job listings, edit them, and manage applications. It features authentication with Auth0, a structured backend with Node.js and Express, and a database powered by MongoDB.',
//             tech: ['React', 'Node.js', 'MongoDB'],
//             category: 'fullstack',
//             links: {
//               github: 'https://github.com/aryapatel23/Convict',
//               live: '#',
//               docs: 'https://documenter.getpostman.com/view/39193097/2sAYX5JhHE',
//               figma: 'https://www.figma.com/design/lgKV6f2QeXEJLsNeTOmfEM/project?node-id=0-1&t=we4BvWQcL2NWQM7E-1',
//               video: 'https://drive.google.com/file/d/1tNGJP6azgfnNupqGEpj01i4eO3U-WreZ/view?usp=sharing'
//             }
//           },
//           {
//             title: 'YouTube Clone',
//             description: 'A React-based YouTube clone that mimics the user interface and core functionalities of .YouTube. It dynamically fetches video content using the YouTube API, provides a responsive layout, and includes a sleek modern design for an intuitive user experience.',
//             tech: ['React'],
//             category: 'react',
//             links: {
//               github: 'https://github.com/aryapatel23/react_youtube',
//               live: 'http://react-youtubeav.netlify.app/'
//             },
//             media: 'https://res.cloudinary.com/dkombksnu/image/upload/v1740938531/dp9ctqqszgkdhvkhb4uu.jpg'
//           },
//           {
//             title: 'Amazon Clone',
//             description: 'A static e-commerce clone of Amazon that replicates the product listing, categories, and homepage layout. It is built with pure HTML and CSS to showcase a clean, structured design.',
//             tech: ['HTML', 'CSS'],
//             category: 'static',
//             links: {
//               github: 'https://github.com/aryapatel23/Amazon-clone',
//               live: 'https://amazo-nclone.netlify.app/'
//             },
//             media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742797071/pbux5amuxno1l3igdm5p.png'
//           },
//           {
//             title: 'Spotify Clone',
//             description: 'A fully responsive Spotify clone that features an interactive music player UI. Built with React, it aims to replicate the music browsing experience of Spotify while integrating smooth transitions and dynamic UI elements.',
//             tech: ['React'],
//             category: 'static',
//             links: {
//               github: 'https://github.com/aryapatel23/react_spotify'
//             },
//             media: 'https://res.cloudinary.com/dkombksnu/image/upload/v1740938530/w0lgprhoxfwjrwd0k8nr.jpg'
//           },
//           {
//             title: 'Instagram Clone (UI Design)',
//             description: 'A Figma-based UI/UX design for an Instagram clone. This design focuses on user experience, modern UI elements, and mobile responsiveness, making it an ideal reference for social media applications.',
//             tech: ['Figma'],
//             category: 'figma',
//             links: {
//               figma: 'https://www.figma.com/design/5OVYFlXAszrMxpf5dGtDoW/Instagram-Clone-(Community)?node-id=0-1&t=xXL38OBk1Oc8s6oV-1',
//             },
//             media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742796980/riyklvmabpv1o7s5omvl.png'
//           },
//           {
//             title: 'Flipkart One-Page Clone',
//             description: 'A single-page UI replica of Flipkart’s e-commerce website, designed with Figma. The design captures the essential elements of Flipkart’s user interface, including product sections, navigation bars, and banners.',
//             tech: ['Figma'],
//             category: 'figma',
//             links: {
//               figma: 'https://www.figma.com/design/iQ0pmlDv14Sy1gRBMCh5Zn/FLIPKART?node-id=0-1&t=pYMfJ0zRAR9aWWYO-1',
//             },
//             media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742796792/piskotkyaqcy0afytpil.png'
//           },
//           {
//             title: 'Coding Gita',
//             description: 'A UI/UX design concept for an educational platform that provides coding tutorials and programming resources. The design is focused on clarity, easy navigation, and an engaging learning experience.',
//             tech: ['Figma'],
//             category: 'figma',
//             links: {
//               figma: 'https://www.figma.com/design/HYqNDSEKgDosVPeIz5Qwoa/codinggita-clone?node-id=0-1&t=YuKllJgkLspl6vYM-1',
//             },
//             media: 'https://res.cloudinary.com/dkombksnu/image/upload/v1740294386/fmdmrma0oi9g3ifcmrje.png'
//           },
//           {
//             title: 'Games UI/UX Designs',
//             description: 'A collection of UI/UX design concepts for gaming applications. Each design showcases unique visual aesthetics and interactive components tailored for a seamless gaming experience.',
//             tech: ['Figma'],
//             category: 'figma',
//             links: {
//               figma: 'https://www.figma.com/design/GuZJWC9w9IFImuqG4wuvpg/Untitled?node-id=0-1&t=JexzIcNkYTLWmXDb-1',
//             },
//             media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742796601/lvzbggrq9hvjafwrwfil.png'
//           },
//           {
//             title: 'SIH Design',
//             description: 'A UI/UX design prototype created for Smart India Hackathon (SIH). It showcases an innovative and user-friendly layout for a project submission platform.',
//             tech: ['Figma'],
//             category: 'figma',
//             links: {
//               figma: 'https://www.figma.com/design/Z3MD449weH8aKg2BI0rdtL/SIH?node-id=0-1&t=mG1rF3AkEVSIz9ft-1',
//             },
//             media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742796429/okpw575nkhsvzo7slm1o.png'
//           },
//           {
//             title: 'Apna.co Clone',
//             description: 'A simple static job portal website inspired by Apna.co. Built with HTML and CSS, it features a modern design and structured job listing layout.',
//             tech: ['HTML', 'CSS'],
//             category: 'static',
//             links: {
//               github: 'https://github.com/aryapatel23/Apna_clone',
//               live: 'https://apnaco.netlify.app/'
//             },
//             media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742796196/ryfuplybwsc8jobzw7of.png'
//           }
//         ];

//   const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

//   return (
//     <section id="projects" className="py-20 bg-black text-white relative overflow-hidden">
//       {/* Floating Particles Background */}
//       <div className="absolute inset-0 w-full h-full pointer-events-none">
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

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="space-y-12 text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 leading-tight">
//             My Projects
//           </h2>
//         </motion.div>

//         {/* Filter Buttons */}
//         <motion.div
//           className="flex flex-wrap justify-center gap-3 pb-12"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {["all", "figma", "static", "react", "fullstack"].map((category) => (
//             <motion.button
//               key={category}
//               onClick={() => setFilter(category)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md ${
//                 filter === category
//                   ? "bg-green-600 text-white scale-105 shadow-lg"
//                   : "bg-gray-800 text-white hover:bg-gray-700"
//               }`}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Project Cards - New Style */}
//         <div className="space-y-24">
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
//             >
//               {/* Project Image */}
//               <div className="w-full lg:w-1/2">
//                 <motion.div
//                   className="rounded-lg overflow-hidden shadow-xl bg-gray-900 border border-gray-800"
//                   whileHover={{ scale: 1.03 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <img
//                     src={project.media}
//                     alt={project.title}
//                     className="w-full h-auto object-cover"
//                   />
//                 </motion.div>
//               </div>

//               {/* Project Details */}
//               <div className="w-full lg:w-1/2 space-y-6">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500 mb-2">
//                     {project.title}
//                   </h3>
                  
//                   <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800 mb-4">
//                     <p className="text-gray-300 text-lg leading-relaxed mb-4">
//                       {project.description}
//                     </p>
                    
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {project.tech.map((tech) => (
//                         <span
//                           key={tech}
//                           className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm border border-green-800"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
                    
//                     <div className="flex flex-wrap gap-4">
//                       {project.links.github && (
//                         <a
//                           href={project.links.github}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
//                         >
//                           <Github className="h-5 w-5" />
//                           <span>Code</span>
//                         </a>
//                       )}
//                       {project.links.live && (
//                         <a
//                           href={project.links.live}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
//                         >
//                           <ExternalLink className="h-5 w-5" />
//                           <span>Live Demo</span>
//                         </a>
//                       )}
//                       {project.links.docs && (
//                         <a
//                           href={project.links.docs}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
//                         >
//                           <FileCode className="h-5 w-5" />
//                           <span>Docs</span>
//                         </a>
//                       )}
//                       {project.links.figma && (
//                         <a
//                           href={project.links.figma}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
//                         >
//                           <Figma className="h-5 w-5" />
//                           <span>Figma</span>
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;






import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FileCode, Figma } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
          {
            title: 'Convict - Job & Internship Portal',
            description: 'A comprehensive job and internship portal that connects job seekers with opportunities. The platform allows companies to post job listings, edit them, and manage applications. It features authentication with Auth0, a structured backend with Node.js and Express, and a database powered by MongoDB.',
            tech: ['React', 'Node.js', 'MongoDB'],
            category: 'fullstack',
            links: {
              github: 'https://github.com/aryapatel23/Convict',
              live: '#',
              docs: 'https://documenter.getpostman.com/view/39193097/2sAYX5JhHE',
              figma: 'https://www.figma.com/design/lgKV6f2QeXEJLsNeTOmfEM/project?node-id=0-1&t=we4BvWQcL2NWQM7E-1',
              video: 'https://drive.google.com/file/d/1tNGJP6azgfnNupqGEpj01i4eO3U-WreZ/view?usp=sharing'
            }
          },
          {
            title: 'YouTube Clone',
            description: 'A React-based YouTube clone that mimics the user interface and core functionalities of .YouTube. It dynamically fetches video content using the YouTube API, provides a responsive layout, and includes a sleek modern design for an intuitive user experience.',
            tech: ['React'],
            category: 'react',
            links: {
              github: 'https://github.com/aryapatel23/react_youtube',
              live: 'http://react-youtubeav.netlify.app/'
            },
            media: 'https://res.cloudinary.com/dkombksnu/image/upload/v1740938531/dp9ctqqszgkdhvkhb4uu.jpg'
          },
          {
            title: 'Amazon Clone',
            description: 'A static e-commerce clone of Amazon that replicates the product listing, categories, and homepage layout. It is built with pure HTML and CSS to showcase a clean, structured design.',
            tech: ['HTML', 'CSS'],
            category: 'static',
            links: {
              github: 'https://github.com/aryapatel23/Amazon-clone',
              live: 'https://amazo-nclone.netlify.app/'
            },
            media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742797071/pbux5amuxno1l3igdm5p.png'
          },
          {
            title: 'Spotify Clone',
            description: 'A fully responsive Spotify clone that features an interactive music player UI. Built with React, it aims to replicate the music browsing experience of Spotify while integrating smooth transitions and dynamic UI elements.',
            tech: ['React'],
            category: 'static',
            links: {
              github: 'https://github.com/aryapatel23/react_spotify'
            },
            media: 'https://res.cloudinary.com/dkombksnu/image/upload/v1740938530/w0lgprhoxfwjrwd0k8nr.jpg'
          },
          {
            title: 'Instagram Clone (UI Design)',
            description: 'A Figma-based UI/UX design for an Instagram clone. This design focuses on user experience, modern UI elements, and mobile responsiveness, making it an ideal reference for social media applications.',
            tech: ['Figma'],
            category: 'figma',
            links: {
              figma: 'https://www.figma.com/design/5OVYFlXAszrMxpf5dGtDoW/Instagram-Clone-(Community)?node-id=0-1&t=xXL38OBk1Oc8s6oV-1',
            },
            media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742796980/riyklvmabpv1o7s5omvl.png'
          },
          {
            title: 'Flipkart One-Page Clone',
            description: 'A single-page UI replica of Flipkart’s e-commerce website, designed with Figma. The design captures the essential elements of Flipkart’s user interface, including product sections, navigation bars, and banners.',
            tech: ['Figma'],
            category: 'figma',
            links: {
              figma: 'https://www.figma.com/design/iQ0pmlDv14Sy1gRBMCh5Zn/FLIPKART?node-id=0-1&t=pYMfJ0zRAR9aWWYO-1',
            },
            media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742796792/piskotkyaqcy0afytpil.png'
          },
          {
            title: 'Coding Gita',
            description: 'A UI/UX design concept for an educational platform that provides coding tutorials and programming resources. The design is focused on clarity, easy navigation, and an engaging learning experience.',
            tech: ['Figma'],
            category: 'figma',
            links: {
              figma: 'https://www.figma.com/design/HYqNDSEKgDosVPeIz5Qwoa/codinggita-clone?node-id=0-1&t=YuKllJgkLspl6vYM-1',
            },
            media: 'https://res.cloudinary.com/dkombksnu/image/upload/v1740294386/fmdmrma0oi9g3ifcmrje.png'
          },
          {
            title: 'Games UI/UX Designs',
            description: 'A collection of UI/UX design concepts for gaming applications. Each design showcases unique visual aesthetics and interactive components tailored for a seamless gaming experience.',
            tech: ['Figma'],
            category: 'figma',
            links: {
              figma: 'https://www.figma.com/design/GuZJWC9w9IFImuqG4wuvpg/Untitled?node-id=0-1&t=JexzIcNkYTLWmXDb-1',
            },
            media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742796601/lvzbggrq9hvjafwrwfil.png'
          },
          {
            title: 'SIH Design',
            description: 'A UI/UX design prototype created for Smart India Hackathon (SIH). It showcases an innovative and user-friendly layout for a project submission platform.',
            tech: ['Figma'],
            category: 'figma',
            links: {
              figma: 'https://www.figma.com/design/Z3MD449weH8aKg2BI0rdtL/SIH?node-id=0-1&t=mG1rF3AkEVSIz9ft-1',
            },
            media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742796429/okpw575nkhsvzo7slm1o.png'
          },
          {
            title: 'Apna.co Clone',
            description: 'A simple static job portal website inspired by Apna.co. Built with HTML and CSS, it features a modern design and structured job listing layout.',
            tech: ['HTML', 'CSS'],
            category: 'static',
            links: {
              github: 'https://github.com/aryapatel23/Apna_clone',
              live: 'https://apnaco.netlify.app/'
            },
            media: 'https://res.cloudinary.com/dzsvjyg2c/image/upload/v1742796196/ryfuplybwsc8jobzw7of.png'
          }
        ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white text-black relative overflow-hidden">
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
          className="space-y-12 text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            My Projects
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 pb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {['all', 'figma', 'static', 'react', 'fullstack'].map(category => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md ${
                filter === category
                  ? 'bg-green-600 text-white scale-105 shadow-lg'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-24">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  className="rounded-lg overflow-hidden shadow-xl bg-white border border-gray-300"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.media}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-4">
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-200 text-gray-900 rounded-full text-sm border border-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-md transition-colors duration-300"
                        >
                          <Github className="h-5 w-5" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md transition-colors duration-300"
                        >
                          <ExternalLink className="h-5 w-5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;