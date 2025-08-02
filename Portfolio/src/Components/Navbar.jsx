import { FaHome, FaCode, FaProjectDiagram, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-white text-green-600 flex flex-col justify-between items-center py-6 shadow-lg">
      
      {/* 🔵 Logo / Initials */}
      <div className="text-3xl font-bold tracking-wide">AP</div>

      {/* 🔵 Menu Options */}
      <div className="flex flex-col gap-8 mt-8">
        <div className="group relative flex items-center justify-center">
          <a href="#home" className="hover:text-black">
            <FaHome size={22} />
          </a>
          <span className="absolute left-16 px-2 py-1 rounded bg-gray-700 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap">
            Home
          </span>
        </div>

        <div className="group relative flex items-center justify-center">
          <a href="#skills" className="hover:text-black">
            <FaCode size={22} />
          </a>
          <span className="absolute left-16 px-2 py-1 rounded bg-gray-700 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap">
            Skills
          </span>
        </div>

        <div className="group relative flex items-center justify-center">
          <a href="#projects" className="hover:text-black">
            <FaProjectDiagram size={22} />
          </a>
          <span className="absolute left-16 px-2 py-1 rounded bg-gray-700 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap">
            Projects
          </span>
        </div>

        <div className="group relative flex items-center justify-center">
          <a href="#contact" className="hover:text-black">
            <FaEnvelope size={22} />
          </a>
          <span className="absolute left-16 px-2 py-1 rounded bg-white-700 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap">
            Contact
          </span>
        </div>
      </div>

      {/* 🔵 Social Media Icons */}
      <div className="flex flex-col gap-5">
        <div className="group relative flex items-center justify-center">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={20} />
          </a>
          <span className="absolute left-16 px-2 py-1 rounded bg-gray-700 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap">
            GitHub
          </span>
        </div>

        <div className="group relative flex items-center justify-center">
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedin size={20} />
          </a>
          <span className="absolute left-16 px-2 py-1 rounded bg-gray-700 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap">
            LinkedIn
          </span>
        </div>

        <div className="group relative flex items-center justify-center">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram size={20} />
          </a>
          <span className="absolute left-16 px-2 py-1 rounded bg-gray-700 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap">
            Instagram
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
