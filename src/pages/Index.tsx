
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
      <div className="min-h-screen">
        <AnimationInit />
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <AuthenticationSection />
        <CareerSection />
        <Footer />
      </div>
    </Suspense>
  );
};

export default Index;
