import { Code, Layers, Zap, Cloud, Wrench, Activity } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-white" />,
      bgColor: "bg-primary",
      skills: ["Swift", "Objective-C", "SwiftUI"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-6 h-6 text-white" />,
      bgColor: "bg-ios-green",
      skills: ["Cocoa Touch Framework", "Foundation", "UIKit", "Core Data"]
    },
    {
      title: "Architecture & Patterns",
      icon: <Zap className="w-6 h-6 text-white" />,
      bgColor: "bg-purple-500",
      skills: ["MVVM", "MVC", "Clean Architecture", "Dependency Injection"]
    },
    {
      title: "Backend & Services",
      icon: <Cloud className="w-6 h-6 text-white" />,
      bgColor: "bg-orange-500",
      skills: ["Firebase", "Push Notifications", "REST APIs", "Core Location"]
    },
    {
      title: "Development Tools",
      icon: <Wrench className="w-6 h-6 text-white" />,
      bgColor: "bg-red-500",
      skills: ["Xcode", "Git & GitHub", "Instruments", "TestFlight"]
    },
    {
      title: "Concurrency & Performance",
      icon: <Activity className="w-6 h-6 text-white" />,
      bgColor: "bg-indigo-500",
      skills: ["Grand Central Dispatch (GCD)", "Operation Queues", "Async/Await", "Memory Management"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Expertise in modern iOS development technologies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-ios-gray-6 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200">
              <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2 text-gray-700">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className={`w-2 h-2 ${category.bgColor} rounded-full mr-3`}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
