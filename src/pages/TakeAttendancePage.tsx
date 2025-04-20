
import { Suspense, lazy, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Camera, Check, Lock, User, X } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import LoadingSpinner from "@/components/LoadingSpinner";
import WebcamCapture from "@/components/WebcamCapture";

const Navbar = lazy(() => import("@/components/Navbar"));
const Footer = lazy(() => import("@/components/Footer"));

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const attendanceSchema = z.object({
  course: z.string().min(1, "Please select a course"),
  section: z.string().min(1, "Please select a section"),
  session: z.string().min(1, "Please select a session"),
});

const mockedStudents = [
  { id: 1, name: "John Doe", rollNumber: "12345A0100", status: "present" },
  { id: 2, name: "Jane Smith", rollNumber: "12345A0101", status: "present" },
  { id: 3, name: "Mike Johnson", rollNumber: "12345A0102", status: "absent" },
  { id: 4, name: "Sarah Williams", rollNumber: "12345A0103", status: "present" },
  { id: 5, name: "David Brown", rollNumber: "12345A0104", status: "present" },
];

const TakeAttendancePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [attendanceStarted, setAttendanceStarted] = useState(false);
  const [detectedStudents, setDetectedStudents] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const attendanceForm = useForm<z.infer<typeof attendanceSchema>>({
    resolver: zodResolver(attendanceSchema),
    defaultValues: {
      course: "",
      section: "",
      session: "",
    },
  });

  const handleLogin = (values: z.infer<typeof loginSchema>) => {
    // Simulate authentication
    setTimeout(() => {
      setIsAuthenticated(true);
      toast.success("Authentication successful!");
    }, 1500);
  };

  const startAttendance = (values: z.infer<typeof attendanceSchema>) => {
    setAttendanceStarted(true);
    setIsCameraActive(true);
  };

  const handleDetection = () => {
    setIsScanning(true);
    
    // Simulate facial recognition with a delay
    setTimeout(() => {
      setDetectedStudents(mockedStudents);
      setIsScanning(false);
      setIsCameraActive(false);
      toast.success("Facial recognition completed successfully!");
    }, 3000);
  };

  const submitAttendance = () => {
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Attendance submitted successfully!");
      setAttendanceStarted(false);
      setDetectedStudents([]);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-16">
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {!isAuthenticated ? (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-up">
                <div className="bg-gradient-to-r from-tech-purple to-tech-violet p-6">
                  <h1 className="text-3xl font-bold text-white">Teacher Authentication</h1>
                  <p className="text-white/80 mt-2">Login to take attendance for your class</p>
                </div>

                <div className="p-6">
                  <Form {...loginForm}>
                    <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4 max-w-md mx-auto">
                      <FormField
                        control={loginForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={loginForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Enter your password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="pt-2">
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-tech-purple to-tech-violet hover:from-tech-violet hover:to-tech-purple"
                        >
                          <Lock className="mr-2 h-4 w-4" />
                          Login as Teacher
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            ) : (
              <div data-aos="fade-up">
                {!attendanceStarted ? (
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-tech-purple to-tech-violet p-6">
                      <h1 className="text-3xl font-bold text-white">Take Attendance</h1>
                      <p className="text-white/80 mt-2">Configure and start the attendance session</p>
                    </div>

                    <div className="p-6">
                      <Form {...attendanceForm}>
                        <form onSubmit={attendanceForm.handleSubmit(startAttendance)} className="space-y-4 max-w-md mx-auto">
                          <FormField
                            control={attendanceForm.control}
                            name="course"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Course</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a course" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="CS101">CS101 - Introduction to Computer Science</SelectItem>
                                    <SelectItem value="CS201">CS201 - Data Structures</SelectItem>
                                    <SelectItem value="CS301">CS301 - Database Systems</SelectItem>
                                    <SelectItem value="CS401">CS401 - Machine Learning</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={attendanceForm.control}
                            name="section"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Section</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a section" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="A">Section A</SelectItem>
                                    <SelectItem value="B">Section B</SelectItem>
                                    <SelectItem value="C">Section C</SelectItem>
                                    <SelectItem value="D">Section D</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={attendanceForm.control}
                            name="session"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Session</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a session" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="1">Session 1 (8:00 AM - 9:00 AM)</SelectItem>
                                    <SelectItem value="2">Session 2 (9:00 AM - 10:00 AM)</SelectItem>
                                    <SelectItem value="3">Session 3 (10:00 AM - 11:00 AM)</SelectItem>
                                    <SelectItem value="4">Session 4 (11:00 AM - 12:00 PM)</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="pt-2">
                            <Button 
                              type="submit" 
                              className="w-full bg-gradient-to-r from-tech-purple to-tech-violet hover:from-tech-violet hover:to-tech-purple"
                            >
                              <Camera className="mr-2 h-4 w-4" />
                              Start Attendance
                            </Button>
                          </div>
                        </form>
                      </Form>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {isCameraActive ? (
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-tech-purple to-tech-violet p-6">
                          <h1 className="text-3xl font-bold text-white">Facial Recognition</h1>
                          <p className="text-white/80 mt-2">Position the camera to capture all students</p>
                        </div>

                        <div className="p-6">
                          <div className="max-w-2xl mx-auto">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6">
                              <WebcamCapture onCapture={() => {}} showControls={false} />
                            </div>

                            <div className="flex justify-center">
                              <Button 
                                className="bg-gradient-to-r from-tech-purple to-tech-violet hover:from-tech-violet hover:to-tech-purple"
                                onClick={handleDetection}
                                disabled={isScanning}
                              >
                                {isScanning ? (
                                  <>
                                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                                    Scanning...
                                  </>
                                ) : (
                                  <>
                                    <Camera className="mr-2 h-4 w-4" />
                                    Scan for Students
                                  </>
                                )}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {detectedStudents.length > 0 && (
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in">
                        <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-6">
                          <h1 className="text-3xl font-bold text-white">Attendance Results</h1>
                          <p className="text-white/80 mt-2">Review and submit the attendance</p>
                        </div>

                        <div className="p-6">
                          <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-lg overflow-hidden">
                              <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                  <th className="py-3 px-4 text-left">Roll Number</th>
                                  <th className="py-3 px-4 text-left">Name</th>
                                  <th className="py-3 px-4 text-left">Status</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200">
                                {detectedStudents.map((student) => (
                                  <tr key={student.id} className="hover:bg-gray-50">
                                    <td className="py-3 px-4">{student.rollNumber}</td>
                                    <td className="py-3 px-4">{student.name}</td>
                                    <td className="py-3 px-4">
                                      {student.status === "present" ? (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                          <Check className="mr-1 h-3 w-3" /> Present
                                        </span>
                                      ) : (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                          <X className="mr-1 h-3 w-3" /> Absent
                                        </span>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          <div className="mt-6 flex justify-center gap-4">
                            <Button 
                              variant="outline"
                              onClick={() => {
                                setIsCameraActive(true);
                                setDetectedStudents([]);
                              }}
                            >
                              <Camera className="mr-2 h-4 w-4" />
                              Rescan
                            </Button>
                            <Button 
                              className="bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue"
                              onClick={submitAttendance}
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? (
                                <>
                                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                                  Submitting...
                                </>
                              ) : (
                                <>
                                  <Check className="mr-2 h-4 w-4" />
                                  Submit Attendance
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default TakeAttendancePage;
