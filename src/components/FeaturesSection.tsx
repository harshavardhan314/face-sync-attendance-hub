
import { Check, Shield, Camera, BarChart } from "lucide-react";

const features = [
  {
    icon: <Check className="h-6 w-6" />,
    title: "High Accuracy",
    description: "Advanced facial recognition algorithms ensure precise identification and matching for accurate attendance records."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Authentication",
    description: "Biometric data is encrypted and securely stored, ensuring student privacy and preventing attendance fraud."
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: "Instant Face Capture",
    description: "Quick and reliable face detection that works in various lighting conditions with minimal delay."
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Real-Time Records",
    description: "Attendance data is processed instantly and available for immediate viewing and reporting."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Attendance
          </h2>
          <p className="text-xl text-gray-600">
            Our system combines cutting-edge technology with an intuitive interface
            to streamline the attendance process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-tech-blue to-tech-purple flex items-center justify-center text-white mb-4 group-hover:rotate-6 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-tech-purple transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
