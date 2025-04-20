
import { Suspense, lazy, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Eye, Lock, User } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoadingSpinner from "@/components/LoadingSpinner";

const Navbar = lazy(() => import("@/components/Navbar"));
const Footer = lazy(() => import("@/components/Footer"));

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Mock attendance data
const studentAttendanceData = [
  { date: "2025-04-15", course: "CS101", status: "Present" },
  { date: "2025-04-14", course: "CS201", status: "Present" },
  { date: "2025-04-13", course: "CS301", status: "Absent" },
  { date: "2025-04-12", course: "CS401", status: "Present" },
  { date: "2025-04-11", course: "CS101", status: "Present" },
  { date: "2025-04-10", course: "CS201", status: "Absent" },
  { date: "2025-04-09", course: "CS301", status: "Present" },
  { date: "2025-04-08", course: "CS401", status: "Present" },
];

const classSummaryData = [
  { date: "2025-04-15", course: "CS101", section: "A", present: 42, total: 45 },
  { date: "2025-04-14", course: "CS201", section: "B", present: 38, total: 40 },
  { date: "2025-04-13", course: "CS301", section: "C", present: 35, total: 38 },
  { date: "2025-04-12", course: "CS401", section: "D", present: 28, total: 30 },
];

const calculateAttendancePercentage = (present: number, total: number) => {
  return ((present / total) * 100).toFixed(1);
};

const ViewAttendancePage = () => {
  const [activeTab, setActiveTab] = useState("student");
  const [studentAuthenticated, setStudentAuthenticated] = useState(false);
  const [teacherAuthenticated, setTeacherAuthenticated] = useState(false);

  const studentForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const teacherForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleStudentLogin = (values: z.infer<typeof loginSchema>) => {
    // Simulate authentication
    setTimeout(() => {
      setStudentAuthenticated(true);
      toast.success("Student authentication successful!");
    }, 1500);
  };

  const handleTeacherLogin = (values: z.infer<typeof loginSchema>) => {
    // Simulate authentication
    setTimeout(() => {
      setTeacherAuthenticated(true);
      toast.success("Teacher authentication successful!");
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-16">
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <Tabs defaultValue="student" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger 
                    value="student"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-tech-blue data-[state=active]:to-tech-purple data-[state=active]:text-white"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Student
                  </TabsTrigger>
                  <TabsTrigger 
                    value="teacher"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-tech-purple data-[state=active]:to-tech-violet data-[state=active]:text-white"
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Teacher
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <TabsContent value="student" className="animate-fade-in p-0">
                  {!studentAuthenticated ? (
                    <div>
                      <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-6">
                        <h1 className="text-3xl font-bold text-white">Student Login</h1>
                        <p className="text-white/80 mt-2">Login to view your attendance records</p>
                      </div>

                      <div className="p-6">
                        <Form {...studentForm}>
                          <form onSubmit={studentForm.handleSubmit(handleStudentLogin)} className="space-y-4 max-w-md mx-auto">
                            <FormField
                              control={studentForm.control}
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
                              control={studentForm.control}
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
                                className="w-full bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue"
                              >
                                <User className="mr-2 h-4 w-4" />
                                Login as Student
                              </Button>
                            </div>
                          </form>
                        </Form>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-6">
                        <h1 className="text-3xl font-bold text-white">Your Attendance Records</h1>
                        <p className="text-white/80 mt-2">View your attendance history and statistics</p>
                      </div>

                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                            <div className="text-lg font-semibold text-blue-700">Overall Attendance</div>
                            <div className="mt-2 text-3xl font-bold">85.7%</div>
                            <div className="mt-1 text-sm text-blue-600">36/42 classes attended</div>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                            <div className="text-lg font-semibold text-purple-700">Current Month</div>
                            <div className="mt-2 text-3xl font-bold">75.0%</div>
                            <div className="mt-1 text-sm text-purple-600">6/8 classes attended</div>
                          </div>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="min-w-full bg-white rounded-lg overflow-hidden">
                            <thead className="bg-gray-100 text-gray-700">
                              <tr>
                                <th className="py-3 px-4 text-left">Date</th>
                                <th className="py-3 px-4 text-left">Course</th>
                                <th className="py-3 px-4 text-left">Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {studentAttendanceData.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                  <td className="py-3 px-4">{item.date}</td>
                                  <td className="py-3 px-4">{item.course}</td>
                                  <td className="py-3 px-4">
                                    {item.status === "Present" ? (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Present
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                        Absent
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="teacher" className="animate-fade-in p-0">
                  {!teacherAuthenticated ? (
                    <div>
                      <div className="bg-gradient-to-r from-tech-purple to-tech-violet p-6">
                        <h1 className="text-3xl font-bold text-white">Teacher Login</h1>
                        <p className="text-white/80 mt-2">Login to view class attendance records</p>
                      </div>

                      <div className="p-6">
                        <Form {...teacherForm}>
                          <form onSubmit={teacherForm.handleSubmit(handleTeacherLogin)} className="space-y-4 max-w-md mx-auto">
                            <FormField
                              control={teacherForm.control}
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
                              control={teacherForm.control}
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
                    <div>
                      <div className="bg-gradient-to-r from-tech-purple to-tech-violet p-6">
                        <h1 className="text-3xl font-bold text-white">Class Attendance Overview</h1>
                        <p className="text-white/80 mt-2">View attendance statistics for all your classes</p>
                      </div>

                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                            <div className="text-lg font-semibold text-purple-700">Average Attendance</div>
                            <div className="mt-2 text-3xl font-bold">89.5%</div>
                            <div className="mt-1 text-sm text-purple-600">Across all courses</div>
                          </div>
                          <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                            <div className="text-lg font-semibold text-indigo-700">Total Classes</div>
                            <div className="mt-2 text-3xl font-bold">42</div>
                            <div className="mt-1 text-sm text-indigo-600">This semester</div>
                          </div>
                          <div className="bg-violet-50 rounded-lg p-4 border border-violet-100">
                            <div className="text-lg font-semibold text-violet-700">Students</div>
                            <div className="mt-2 text-3xl font-bold">153</div>
                            <div className="mt-1 text-sm text-violet-600">Across all sections</div>
                          </div>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="min-w-full bg-white rounded-lg overflow-hidden">
                            <thead className="bg-gray-100 text-gray-700">
                              <tr>
                                <th className="py-3 px-4 text-left">Date</th>
                                <th className="py-3 px-4 text-left">Course</th>
                                <th className="py-3 px-4 text-left">Section</th>
                                <th className="py-3 px-4 text-left">Attendance</th>
                                <th className="py-3 px-4 text-left">Details</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {classSummaryData.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                  <td className="py-3 px-4">{item.date}</td>
                                  <td className="py-3 px-4">{item.course}</td>
                                  <td className="py-3 px-4">{item.section}</td>
                                  <td className="py-3 px-4">
                                    <div className="flex items-center">
                                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                        <div 
                                          className="bg-green-600 h-2.5 rounded-full" 
                                          style={{ width: `${calculateAttendancePercentage(item.present, item.total)}%` }}
                                        ></div>
                                      </div>
                                      <span>{item.present}/{item.total}</span>
                                    </div>
                                  </td>
                                  <td className="py-3 px-4">
                                    <Button 
                                      size="sm" 
                                      variant="outline"
                                      className="text-tech-purple hover:text-white hover:bg-tech-purple"
                                    >
                                      <Eye className="h-3 w-3 mr-1" />
                                      View
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default ViewAttendancePage;
