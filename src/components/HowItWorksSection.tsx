
import { User, Users, Camera, Check } from "lucide-react";

const steps = [
  {
    icon: <User className="h-6 w-6" />,
    title: "Student Registers with Photo",
    description: "Students create profiles with facial data securely stored in the database.",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Teacher Starts Attendance",
    description: "Teachers initiate the attendance process for a specific class or event.",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: "Camera Detects & Matches Face",
    description: "Our system scans and matches faces with registered profiles in real-time.",
    color: "from-violet-400 to-violet-600"
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "Attendance is Marked Automatically",
    description: "The system records attendance instantly, eliminating manual entry errors.",
    color: "from-indigo-400 to-indigo-600"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Our attendance system simplifies the process with automated facial recognition
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-violet transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative bg-white rounded-xl shadow-md p-6 z-10"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                {/* Step number with gradient background */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center font-bold`}>
                    {index + 1}
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-4 mx-auto`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
