
import { Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Camera, User, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import LoadingSpinner from "@/components/LoadingSpinner";
import WebcamCapture from "@/components/WebcamCapture";
import { useState } from "react";

const Navbar = lazy(() => import("@/components/Navbar"));
const Footer = lazy(() => import("@/components/Footer"));

const formSchema = z.object({
  rollNumber: z.string().min(5, "Roll number must be at least 5 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rollNumber: "",
      name: "",
      email: "",
      password: "",
    },
  });

  const handleCapture = (imageSrc: string) => {
    setCapturedImage(imageSrc);
    setShowWebcam(false);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!capturedImage) {
      toast.error("Please capture your photo for facial recognition");
      return;
    }

    setIsRegistering(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsRegistering(false);
      toast.success("Registration successful! Please check your email to verify your account.");
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-16">
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-up">
            <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-6">
              <h1 className="text-3xl font-bold text-white">Student Registration</h1>
              <p className="text-white/80 mt-2">Create your account to use the facial recognition attendance system</p>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="rollNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Roll Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your roll number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Create a password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue"
                        disabled={isRegistering}
                      >
                        {isRegistering ? (
                          <>
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            Registering...
                          </>
                        ) : (
                          <>
                            <User className="mr-2 h-4 w-4" />
                            Register
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
                
                <div className="md:w-1/2 flex flex-col items-center justify-center">
                  <div className="mb-4 text-center">
                    <h3 className="text-lg font-medium mb-2">Facial Recognition</h3>
                    <p className="text-sm text-gray-500 mb-4">Please capture a clear photo of your face in good lighting</p>
                  </div>

                  {showWebcam ? (
                    <div className="bg-gray-50 p-2 rounded-xl border border-gray-200 transition-all duration-300 animate-fade-in w-full">
                      <WebcamCapture onCapture={handleCapture} />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-4">
                      {capturedImage ? (
                        <div className="relative group">
                          <img 
                            src={capturedImage} 
                            alt="Captured" 
                            className="w-56 h-56 object-cover rounded-xl border-2 border-tech-purple"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-xl">
                            <Button
                              variant="outline"
                              className="bg-white text-tech-blue hover:bg-tech-blue hover:text-white"
                              onClick={() => setShowWebcam(true)}
                            >
                              <Camera className="mr-2 h-4 w-4" />
                              Retake
                            </Button>
                          </div>
                          <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                            <Check className="h-4 w-4" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-56 h-56 bg-gray-100 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                          <User className="h-16 w-16 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-500 mb-4 text-center px-4">No image captured</p>
                        </div>
                      )}
                      
                      {!showWebcam && (
                        <Button 
                          className="bg-gradient-to-r from-tech-purple to-tech-violet hover:from-tech-violet hover:to-tech-purple"
                          onClick={() => setShowWebcam(true)}
                        >
                          <Camera className="mr-2 h-4 w-4" />
                          {capturedImage ? "Retake Photo" : "Open Camera"}
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default RegisterPage;
