
import { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import { Camera, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WebcamCaptureProps {
  onCapture: (imageSrc: string) => void;
  showControls?: boolean;
}

const WebcamCapture = ({ onCapture, showControls = true }: WebcamCaptureProps) => {
  const webcamRef = useRef<Webcam>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const videoConstraints = {
    width: 720,
    height: 480,
    facingMode: "user"
  };

  const handleUserMedia = useCallback(() => {
    setIsCameraReady(true);
  }, []);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setCapturedImage(imageSrc);
        if (onCapture) {
          onCapture(imageSrc);
        }
      }
    }
  }, [webcamRef, onCapture]);

  const retake = useCallback(() => {
    setCapturedImage(null);
  }, []);

  const confirm = useCallback(() => {
    if (capturedImage && onCapture) {
      onCapture(capturedImage);
    }
  }, [capturedImage, onCapture]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full rounded-lg overflow-hidden bg-gray-100">
        {!capturedImage ? (
          <div className="aspect-video flex items-center justify-center">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              onUserMedia={handleUserMedia}
              className="w-full"
            />
            {!isCameraReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-2"></div>
                  <p>Initializing camera...</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="aspect-video flex items-center justify-center">
            <img src={capturedImage} alt="Captured" className="w-full" />
          </div>
        )}
      </div>
      
      {showControls && (
        <div className="flex justify-center mt-4 space-x-4">
          {!capturedImage ? (
            <Button
              onClick={capture}
              disabled={!isCameraReady}
              className="bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue"
            >
              <Camera className="mr-2 h-4 w-4" />
              Capture Photo
            </Button>
          ) : (
            <>
              <Button variant="outline" onClick={retake}>
                <X className="mr-2 h-4 w-4" />
                Retake
              </Button>
              <Button 
                onClick={confirm}
                className="bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue"
              >
                <Check className="mr-2 h-4 w-4" />
                Confirm
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
