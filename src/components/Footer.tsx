
import { Link } from "react-router-dom";
import { Facebook, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import BackToTop from "./BackToTop";

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

const contactInfo = {
  email: "info@vignaniit.edu.in",
  phone: "+91-891-234-5678",
  officeHours: "9:00 AM – 5:00 PM IST"
};

const Footer = () => {
  return (
    <>
      <BackToTop />
      <footer className="bg-gray-900 text-white pt-16 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
            {/* Institution Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                Vignan's Institute of Information Technology
              </h3>
              <p className="text-gray-400">
                Duvvada, Visakhapatnam
                <br />
                Andhra Pradesh, India – 530049
              </p>
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <p className="text-gray-400">Office Hours: {contactInfo.officeHours}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="space-y-3">
                <Link to="/" className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                  Home
                </Link>
                <Link to="/dashboard" className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                  Attendance Dashboard
                </Link>
                <Link to="/faculty" className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                  Faculty Login
                </Link>
                <Link to="/student" className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                  Student Portal
                </Link>
                <Link to="/support" className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                  Help / Support
                </Link>
              </nav>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/viit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/school/viit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com/viit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
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
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-400">{dev.rollNo}</p>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={dev.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        <a
                          href={dev.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Separator className="bg-gray-800 my-6" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vignan's Institute of Information Technology, Duvvada. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

