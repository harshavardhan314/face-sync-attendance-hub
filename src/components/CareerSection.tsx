
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Career {
  title: string;
  emoji: string;
  description: string;
  skills: string[];
  tools: string[];
  roles: string[];
}

const careers: Career[] = [
  {
    title: "Software Developer",
    emoji: "👨‍💻",
    description: "Build applications, websites, and software systems that power modern technologies.",
    skills: ["Programming Languages (Python, Java, JavaScript)", "Data Structures & Algorithms", "Web Development", "Software Architecture"],
    tools: ["Git", "VS Code", "Docker", "Jira"],
    roles: ["Full Stack Developer", "Mobile App Developer", "Backend Engineer"]
  },
  {
    title: "Data Scientist",
    emoji: "📊",
    description: "Extract insights from complex data to drive business decisions and innovations.",
    skills: ["Statistics & Mathematics", "Machine Learning", "Data Visualization", "SQL & Big Data"],
    tools: ["Python (NumPy, Pandas)", "R", "Tableau", "Hadoop"],
    roles: ["Machine Learning Engineer", "Business Analyst", "Data Engineer"]
  },
  {
    title: "AI & Machine Learning Engineer",
    emoji: "🤖",
    description: "Develop intelligent systems that can learn from data and make decisions.",
    skills: ["Deep Learning", "Neural Networks", "Python", "Math & Statistics"],
    tools: ["TensorFlow", "PyTorch", "Jupyter", "Google Cloud AI"],
    roles: ["AI Research Scientist", "Computer Vision Engineer", "NLP Specialist"]
  },
  {
    title: "Cybersecurity Analyst",
    emoji: "🛡️",
    description: "Protect systems and networks from digital threats and vulnerabilities.",
    skills: ["Network Security", "Ethical Hacking", "Security Protocols", "Risk Assessment"],
    tools: ["Wireshark", "Metasploit", "Nmap", "Snort"],
    roles: ["Security Engineer", "Penetration Tester", "Security Consultant"]
  },
  {
    title: "Web & Mobile Developer",
    emoji: "🌐",
    description: "Create responsive, user-friendly interfaces for websites and mobile applications.",
    skills: ["HTML/CSS", "JavaScript Frameworks", "UI/UX Design", "Responsive Design"],
    tools: ["React/Vue/Angular", "Flutter", "Figma", "Firebase"],
    roles: ["Frontend Developer", "React Native Developer", "UX Engineer"]
  },
  {
    title: "Cloud & DevOps Engineer",
    emoji: "☁️",
    description: "Build and maintain the infrastructure that powers modern applications.",
    skills: ["Cloud Services", "Continuous Integration", "System Administration", "Automation"],
    tools: ["AWS/Azure/Google Cloud", "Docker", "Kubernetes", "Jenkins"],
    roles: ["DevOps Specialist", "Site Reliability Engineer", "Cloud Architect"]
  },
  {
    title: "Research & Higher Studies",
    emoji: "🧪",
    description: "Advance your knowledge through specialized research and academic pursuits.",
    skills: ["Research Methodology", "Academic Writing", "Specialized Domain Knowledge", "Critical Thinking"],
    tools: ["Research Databases", "LaTeX", "Statistical Software", "Laboratory Equipment"],
    roles: ["PhD Student", "Research Associate", "University Professor"]
  },
  {
    title: "Tech Entrepreneur",
    emoji: "💼",
    description: "Launch and grow innovative technology startups and new ventures.",
    skills: ["Business Strategy", "Product Management", "Leadership", "Fundraising"],
    tools: ["Business Model Canvas", "Pitch Decks", "CRM Systems", "Analytics Tools"],
    roles: ["Startup Founder", "Product Manager", "Innovation Consultant"]
  }
];

const CareerCard = ({ career, index }: { career: Career, index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const animationDirection = index % 2 === 0 ? "fade-right" : "fade-left";

  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 ${isExpanded ? 'scale-[1.02]' : ''}`}
      data-aos={animationDirection}
      data-aos-delay={index * 100}
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={toggleExpand}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{career.emoji}</div>
            <h3 className="text-xl font-semibold text-gray-900">{career.title}</h3>
          </div>
          <button 
            className="text-gray-500 hover:text-tech-purple transition-colors"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>
        
        <p className="mt-3 text-gray-600">{career.description}</p>
        
        {isExpanded && (
          <div className="mt-4 space-y-4 animate-fade-in">
            <div>
              <h4 className="font-medium text-tech-blue mb-1">Key Skills</h4>
              <div className="flex flex-wrap gap-2">
                {career.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 bg-tech-blue/10 text-tech-blue text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-tech-purple mb-1">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {career.tools.map((tool, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 bg-tech-purple/10 text-tech-purple text-sm rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-tech-violet mb-1">Example Roles</h4>
              <ul className="list-disc list-inside text-gray-600 pl-2">
                {career.roles.map((role, idx) => (
                  <li key={idx}>{role}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CareerSection = () => {
  return (
    <section id="careers" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🚀 Explore Your Future in Tech
          </h2>
          <p className="text-xl text-gray-600">
            Discover exciting career paths and opportunities in the technology sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, index) => (
            <CareerCard 
              key={index}
              career={career}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
