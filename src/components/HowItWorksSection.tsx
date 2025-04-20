
import { User, Users, Camera, Check } from "lucide-react";

const steps = [
  {
    icon: <User className="h-6 w-6" />,
    title: "Student Registers with Photo",
    description: "Students create profiles with facial data securely stored in the database.",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Teacher Starts Attendance",
    description: "Teachers initiate the attendance process for a specific class or event.",
    color: "from-purple-500 to-purple-700"
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: "Camera Detects & Matches Face",
    description: "Our system scans and matches faces with registered profiles in real-time.",
    color: "from-violet-500 to-violet-700"
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "Attendance is Marked Automatically",
    description: "The system records attendance instantly, eliminating manual entry errors.",
    color: "from-indigo-500 to-indigo-700"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-tech-purple via-tech-violet to-tech-blue bg-clip-text text-transparent mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our attendance system simplifies the process with automated facial recognition
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-violet transform -translate-y-1/2 opacity-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative bg-white rounded-xl shadow-lg p-8 z-10 group hover:shadow-2xl transition-all duration-300"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                {/* Step number with gradient background */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} text-white flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {index + 1}
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-6 mx-auto shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center group-hover:text-tech-purple transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Decorative gradient bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-violet transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
