import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

  const animationDirection = index % 2 === 0 ? "translate-x-[-100px]" : "translate-x-[100px]";
  const finalPosition = "translate-x-0";

  return (
    <Card 
      className={`transform transition-all duration-700 ease-out hover:scale-105 ${
        isExpanded ? 'scale-[1.02] shadow-xl' : 'opacity-90'
      } ${animationDirection} hover:${finalPosition}`}
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-delay={index * 150}
      data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
    >
      <CardContent className="p-6">
        <div 
          className="cursor-pointer space-y-4"
          onClick={toggleExpand}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="text-4xl bg-gradient-to-br from-tech-blue to-tech-purple p-3 rounded-full text-white shadow-lg">
                {career.emoji}
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                {career.title}
              </h3>
            </div>
            <button 
              className="text-tech-purple hover:text-tech-blue transition-colors"
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </button>
          </div>
          
          <p className="text-gray-600 leading-relaxed text-lg">
            {career.description}
          </p>
          
          <div className={`space-y-6 transition-all duration-500 ease-in-out ${
            isExpanded ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'
          }`}>
            <div>
              <h4 className="font-semibold text-tech-blue mb-3 text-lg">Key Skills</h4>
              <div className="flex flex-wrap gap-2">
                {career.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-medium hover:bg-tech-blue/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-tech-purple mb-3 text-lg">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {career.tools.map((tool, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-tech-purple/10 text-tech-purple rounded-full text-sm font-medium hover:bg-tech-purple/20 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-tech-violet mb-3 text-lg">Career Paths</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {career.roles.map((role, idx) => (
                  <div 
                    key={idx}
                    className="p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CareerSection = () => {
  return (
    <section id="careers" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-tech-blue via-tech-purple to-tech-violet bg-clip-text text-transparent mb-6">
            🚀 Explore Your Future in Tech
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover exciting career paths and opportunities in the technology sector
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
