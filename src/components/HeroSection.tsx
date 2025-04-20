
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/10 via-tech-purple/5 to-tech-violet/10 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjUiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIyOCAwIDIuMTgtLjk4NiAyLjE4LTIuMjE0IDAtMS4yMjgtLjk1Mi0yLjIxNC0yLjE4LTIuMjE0UzMzLjgyIDEyLjU1OCAzMy44MiAxMy43ODZjMCAxLjIyOC45NTIgMi4yMTQgMi4xOCAyLjIxNHpNMzAgMThIMTh2LTJoMTJ2MnptMCAySDEwdjJoMTh2LTJ6bTAgNEgxNnYyaDE0di0yek0wIDBoNjB2NjBIMHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 animate-fade-in">
              <span className="block">Automate Attendance</span>
              <span className="block bg-gradient-to-r from-tech-blue via-tech-purple to-tech-violet text-transparent bg-clip-text">
                with Facial Recognition
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Secure and smart attendance management system using real-time face detection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button
                asChild
                className="bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                <a href="#register">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="border-tech-blue text-tech-blue hover:bg-tech-blue/5 hover:text-tech-purple w-full sm:w-auto"
              >
                <a href="#features">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in-right">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300 animate-scale-in">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                  alt="Facial Recognition Technology"
                  className="w-full h-auto rounded-lg"
                />
                {/* Overlay with facial recognition grid effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue/40 to-tech-purple/20 mix-blend-overlay">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSI+PHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBkPSJNMCAwaDIwdjIwSDB6Ii8+PC9nPjwvc3ZnPg==')]"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-tech-cyan/10 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-tech-purple/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
