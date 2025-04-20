
import { Suspense, lazy } from "react";
import AnimationInit from "@/components/AnimationInit";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load components for better performance
const Navbar = lazy(() => import("@/components/Navbar"));
const HeroSection = lazy(() => import("@/components/HeroSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const AuthenticationSection = lazy(() => import("@/components/AuthenticationSection"));
const CareerSection = lazy(() => import("@/components/CareerSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <AnimationInit />
        <Navbar />
        <div className="animate-fade-in">
          <HeroSection />
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/5 via-tech-purple/5 to-transparent pointer-events-none" />
            <FeaturesSection />
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-tech-blue/5 via-tech-purple/5 to-transparent pointer-events-none" />
            <HowItWorksSection />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tech-purple/10 via-transparent to-transparent pointer-events-none" />
            <AuthenticationSection />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/5 via-tech-purple/5 to-transparent pointer-events-none" />
            <CareerSection />
          </div>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default Index;
