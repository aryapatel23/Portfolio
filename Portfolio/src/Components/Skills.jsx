import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FileCode , Figma } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Convict - Job & Internship Portal',
      description: 'A comprehensive platform connecting job seekers with opportunities.',
      tech: ['React', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      links: {
        github: 'https://github.com/aryapatel23/Convict',
        live: '#',
        docs: 'https://documenter.getpostman.com/view/39193097/2sAYX5JhHE'
      }
    },
    {
      title: 'Youtube',
      description: 'A faithful recreation of youtube UI with modern web technologies.',
      tech: ['React', 'Firebase'],
      category: 'react',
      links: {
        github: 'https://github.com/aryapatel23/react_youtube',
        live: 'http://react-youtubeav.netlify.app/'
      }
    },
    {
      title: 'Amazon Clone',
      description: 'E-commerce platform with full shopping functionality.',
      tech: ['React', 'Node.js', 'Stripe'],
      category: 'fullstack',
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Spotify Clone',
      description: 'A music streaming web app inspired by Spotify, built with React.',
      tech: ['React', 'Node.js', 'Spotify API'],
      category: 'fullstack',
      links: {
        github: '#',
        docs: '#'
      }
    },
    {
      title: 'Figma Website',
      description: 'A UI/UX design prototype created using Figma.',
      tech: ['Figma'],
      category: 'figma',
      links: {
        live: 'https://www.figma.com/file/example',
        figma: 'https://www.figma.com/file/example'  
      }
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 ml-5 mr-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          My <span className="text-green-600">Projects</span>
        </h2>
        
        <div className="flex justify-center gap-4 pb-6">
          {['all', 'figma', 'static', 'react', 'fullstack'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === category ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden hover:shadow-md hover:shadow-balck-600 hover:border-2 transition-shadow"
            >
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-black">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-black text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black hover:text-green-500 transition-colors"
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
                      className="flex items-center gap-2 text-balck hover:text-green-500 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.links.docs && (
                    <a
                      href={project.links.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black hover:text-green-500 transition-colors"
                    >
                      <FileCode className="h-5 w-5" />
                      <span>Docs</span>
                    </a>
                  )}
                  {project.links.figma && (
                    <a
                      href={project.links.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-balck hover:text-green-500 transition-colors"
                    >
                      <Figma className="h-5 w-5" />
                      <span>Figma</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
