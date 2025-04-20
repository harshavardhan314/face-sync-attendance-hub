
import { FC } from "react";

const LoadingSpinner: FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-tech-blue/30 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-tech-purple rounded-full animate-spin"></div>
      </div>
      <p className="ml-4 text-lg font-medium text-tech-blue">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
