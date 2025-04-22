
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const developers = [
  {
    name: "T. Harsha Vardhan",
    rollNo: "23L31A05N8",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "T. Jaswanth",
    rollNo: "23L31A05N7",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "S. Hemanth",
    rollNo: "23L31A05M6",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "S. Hrishi",
    rollNo: "23L31A05M5",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Y. Vivek",
    rollNo: "23L31A05Q2",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "S. Abhiram",
    rollNo: "23L31A05L5",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Face-Sync Attendance Hub</h3>
            <p className="text-gray-400 max-w-md">
              A modern facial recognition-based attendance management system
              developed by students of Vignan's Institute of Information Technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-white transition-colors">Register</Link>
              </li>
              <li>
                <Link to="/take-attendance" className="text-gray-400 hover:text-white transition-colors">Take Attendance</Link>
              </li>
              <li>
                <Link to="/view-attendance" className="text-gray-400 hover:text-white transition-colors">View Attendance</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">Development Team</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <h3 className="text-xl font-bold mb-4 text-center">Development Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {developers.map((dev, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-lg p-4 flex flex-col items-center text-center hover:bg-gray-700 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full flex items-center justify-center text-white text-xl mb-3">
                  {dev.name.charAt(0)}
                </div>
                <h4 className="font-medium">{dev.name}</h4>
                <p className="text-gray-400 text-sm mb-3">{dev.rollNo}</p>
                <div className="flex space-x-3">
                  <a 
                    href={dev.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href={dev.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Face-Sync Attendance Hub. All rights reserved.</p>
          <p className="mt-1">Developed at Vignan's Institute of Information Technology</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
