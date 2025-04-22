
import { Link } from "react-router-dom";
import { Github, Linkedin, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import BackToTop from "./BackToTop";

const developers = [
  {
    name: "John Doe",
    rollNo: "12345A0123",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Jane Smith",
    rollNo: "12345A0124",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Mike Johnson",
    rollNo: "12345A0125",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
];

const Footer = () => {
  return (
    <>
      <BackToTop />
      <footer className="relative bg-gray-900 text-white pt-16 pb-6">
        {/* Wave Divider */}
        <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="rgb(17, 24, 39)"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
            {/* College Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                Vignan's Institute of Information Technology
              </h3>
              <p className="text-gray-400">
                Duvvada, Visakhapatnam
                <br />
                Andhra Pradesh, India – 530049
              </p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/viit-college"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/company/viit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://youtube.com/viit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="space-y-3">
                <Link to="/" className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                  Home
                </Link>
                <Link to="/register" className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                  Register
                </Link>
                <Link to="/take-attendance" className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                  Take Attendance
                </Link>
                <Link to="/view-attendance" className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                  View Attendance
                </Link>
                <Link to="/about" className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                  About
                </Link>
              </nav>
            </div>

            {/* Development Team */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Development Team</h3>
              <div className="space-y-4">
                {developers.map((dev, index) => (
                  <div key={index} className="group">
                    <p className="text-white font-medium group-hover:text-tech-purple transition-colors duration-300">
                      {dev.name}
                    </p>
                    <p className="text-sm text-gray-400">{dev.rollNo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Separator className="bg-gray-800 my-6" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vignan's Institute of Information Technology. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Developed with ❤️ by VIIT Students
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
