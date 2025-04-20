
import { useState } from "react";
import { User, Book } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const AuthenticationSection = () => {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <section id="authentication" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Authentication & Access
          </h2>
          <p className="text-xl text-gray-600">
            Secure role-based access ensures the right people have the right permissions
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <Tabs defaultValue="student" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger 
                  value="student"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-tech-blue data-[state=active]:to-tech-purple data-[state=active]:text-white"
                  onClick={() => setActiveTab("student")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Student
                </TabsTrigger>
                <TabsTrigger 
                  value="teacher"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-tech-purple data-[state=active]:to-tech-violet data-[state=active]:text-white"
                  onClick={() => setActiveTab("teacher")}
                >
                  <Book className="mr-2 h-4 w-4" />
                  Teacher
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-500">
              <TabsContent value="student" className="space-y-6 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <h3 className="text-lg font-semibold text-tech-blue mb-4 flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      Registration Process
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-tech-blue/10 text-tech-blue rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                        <span>Create a student account with your institutional email</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-tech-blue/10 text-tech-blue rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                        <span>Complete profile with roll number and personal details</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-tech-blue/10 text-tech-blue rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                        <span>Take facial recognition photos in good lighting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-tech-blue/10 text-tech-blue rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                        <span>Receive confirmation email once approved</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <h3 className="text-lg font-semibold text-tech-purple mb-4 flex items-center">
                      <Book className="mr-2 h-5 w-5" />
                      View Attendance
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-tech-purple/10 text-tech-purple rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                        <span>Log in with your student credentials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-tech-purple/10 text-tech-purple rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                        <span>Access your personal dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-tech-purple/10 text-tech-purple rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                        <span>View attendance records by course and date</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-tech-purple/10 text-tech-purple rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                        <span>Download attendance reports as needed</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <Button
                    className="bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue text-white shadow-lg"
                  >
                    Student Registration
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="teacher" className="space-y-6 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <h3 className="text-lg font-semibold text-tech-purple mb-4 flex items-center">
                      <Book className="mr-2 h-5 w-5" />
                      Take Attendance
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-tech-purple/10 text-tech-purple rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                        <span>Log in with faculty credentials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-tech-purple/10 text-tech-purple rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                        <span>Select course and session date</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-tech-purple/10 text-tech-purple rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                        <span>Start attendance capture session</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-tech-purple/10 text-tech-purple rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                        <span>Review and confirm attendance list</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <h3 className="text-lg font-semibold text-tech-violet mb-4 flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      View Class Reports
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-tech-violet/10 text-tech-violet rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                        <span>Access faculty dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-tech-violet/10 text-tech-violet rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                        <span>View attendance statistics by class</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-tech-violet/10 text-tech-violet rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                        <span>Generate detailed attendance reports</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-tech-violet/10 text-tech-violet rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                        <span>Export reports to Excel or PDF format</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <Button
                    className="bg-gradient-to-r from-tech-purple to-tech-violet hover:from-tech-violet hover:to-tech-purple text-white shadow-lg"
                  >
                    Faculty Login
                  </Button>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AuthenticationSection;
