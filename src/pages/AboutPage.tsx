
import { Suspense, lazy } from "react";
import { Github, Linkedin } from "lucide-react";
import LoadingSpinner from "@/components/LoadingSpinner";

const Navbar = lazy(() => import("@/components/Navbar"));
const Footer = lazy(() => import("@/components/Footer"));

const developers = [
  {
    name: "John Doe",
    rollNo: "12345A0123",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    position: "Frontend Developer",
    bio: "Specialized in React and Tailwind CSS, focusing on responsive design and user experience.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Jane Smith",
    rollNo: "12345A0124",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    position: "Machine Learning Engineer",
    bio: "Implemented the facial recognition algorithm using TensorFlow and OpenCV.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Mike Johnson",
    rollNo: "12345A0125",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    position: "Backend Developer",
    bio: "Built the API endpoints and database architecture using Node.js and MongoDB.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Sarah Williams",
    rollNo: "12345A0126",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    position: "UI/UX Designer",
    bio: "Created wireframes and design prototypes for intuitive user interfaces.",
    avatar: "/placeholder.svg"
  },
  {
    name: "David Brown",
    rollNo: "12345A0127",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    position: "DevOps Engineer",
    bio: "Managed deployment pipelines and infrastructure using Docker and AWS.",
    avatar: "/placeholder.svg"
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A group of dedicated students from Vignan's Institute of Information Technology who designed and developed this facial recognition attendance system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developers.map((dev, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="h-24 bg-gradient-to-r from-tech-blue to-tech-purple flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-white overflow-hidden">
                      <img 
                        src={dev.avatar} 
                        alt={dev.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{dev.name}</h3>
                    <p className="text-tech-purple font-medium mb-2">{dev.position}</p>
                    <p className="text-gray-500 text-sm mb-4">{dev.rollNo}</p>
                    
                    <p className="text-gray-600 mb-6">{dev.bio}</p>
                    
                    <div className="flex justify-center space-x-4">
                      <a 
                        href={dev.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-gray-800 hover:text-white p-2 rounded-full transition-colors duration-300"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a 
                        href={dev.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-blue-600 hover:text-white p-2 rounded-full transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Details</h2>
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto" data-aos="fade-up">
                <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {["React", "TypeScript", "Tailwind CSS", "TensorFlow.js", "Face-API.js", "Node.js", "MongoDB"].map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Academic Guides</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-gray-700">Dr. P. Venkata Krishna - Project Guide</p>
                  <p className="text-gray-700">Dr. V. Kamakshi Prasad - Head of Department</p>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Timeline</h3>
                <p className="text-gray-700 mb-6">January 2025 - April 2025</p>
                
                <h3 className="text-xl font-semibold mb-3">Acknowledgements</h3>
                <p className="text-gray-700">
                  Special thanks to all the faculty members of Vignan's Institute of Information Technology who supported and encouraged us throughout the development of this project.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default AboutPage;
