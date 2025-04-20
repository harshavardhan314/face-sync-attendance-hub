import { useState } from "react";
import { Menu, X, Github, Linkedin, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/lovable-uploads/aef5a4b8-1a47-4588-9435-cd1fe0a0ed55.png"
                alt="VIIT Logo"
                className="h-10 w-10"
              />
              <span className="hidden sm:block font-bold text-tech-blue">
                Vignan's Institute of Information Technology
              </span>
              <span className="sm:hidden font-bold text-tech-blue">VIIT</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-tech-purple transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              to="/register"
              className="text-gray-700 hover:text-tech-purple transition-colors duration-300 font-medium"
            >
              Register
            </Link>
            <Link
              to="/take-attendance"
              className="text-gray-700 hover:text-tech-purple transition-colors duration-300 font-medium"
            >
              Take Attendance
            </Link>
            <Link
              to="/view-attendance"
              className="text-gray-700 hover:text-tech-purple transition-colors duration-300 font-medium"
            >
              View Attendance
            </Link>
          </div>

          {/* About Dropdown */}
          <div className="hidden md:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-tech-purple transition-colors duration-300 font-medium">
                <User className="h-4 w-4" />
                <span>About</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="text-sm font-medium">
                  <Link to="/about" className="w-full">Dev Team</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-between">
                  <span>John Doe (12345A0123)</span>
                  <div className="flex space-x-2">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-between">
                  <span>Jane Smith (12345A0124)</span>
                  <div className="flex space-x-2">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-tech-purple hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tech-purple"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg animate-fade-in">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-purple hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/register"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-purple hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Register
            </Link>
            <Link
              to="/take-attendance"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-purple hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Take Attendance
            </Link>
            <Link
              to="/view-attendance"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-purple hover:bg-gray-50"
              onClick={toggleMenu}
            >
              View Attendance
            </Link>
            <div className="px-3 py-2">
              <h3 className="text-sm font-medium text-gray-500">About</h3>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between items-center">
                  <Link to="/about" className="text-sm" onClick={toggleMenu}>
                    View Development Team
                  </Link>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">John Doe (12345A0123)</span>
                  <div className="flex space-x-2">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Jane Smith (12345A0124)</span>
                  <div className="flex space-x-2">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
