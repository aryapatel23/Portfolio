import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: <FaHome size={22} />, label: "Home" },
    { to: "/skills", icon: <FaCode size={22} />, label: "Skills" },
    { to: "/projects", icon: <FaProjectDiagram size={22} />, label: "Projects" },
    { to: "/contact", icon: <FaEnvelope size={22} />, label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/",
      icon: <FaGithub size={20} />,
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      href: "https://linkedin.com/",
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      href: "https://instagram.com/",
      icon: <FaInstagram size={20} />,
      label: "Instagram",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-white text-green-600 flex flex-col justify-between items-center py-6 shadow-lg z-50">
      {/* Initials */}
      <div className="text-3xl font-bold tracking-wide">AP</div>

      {/* Navigation */}
      <div className="flex flex-col gap-8 mt-8">
        {navItems.map(({ to, icon, label }) => (
          <div key={label} className="group relative flex items-center justify-center">
            <Link
              to={to}
              className={`${
                location.pathname === to ? "text-black" : "hover:text-black"
              }`}
            >
              {icon}
            </Link>
            <span className="absolute left-16 px-2 py-1 rounded bg-gray-700 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Social Media */}
      <div className="flex flex-col gap-5">
        {socialLinks.map(({ href, icon, label, color }) => (
          <div key={label} className="group relative flex items-center justify-center">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${color}`}
            >
              {icon}
            </a>
            <span className="absolute left-16 px-2 py-1 rounded bg-gray-700 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
