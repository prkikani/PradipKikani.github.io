import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "ShopEase - E-commerce App",
      description: "A comprehensive shopping app with advanced search, wishlist, and secure payment integration.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["SwiftUI", "CoreData", "Firebase"],
      appStoreLink: "#",
      githubLink: "#"
    },
    {
      title: "FitTracker Pro",
      description: "Advanced fitness tracking with HealthKit integration, workout plans, and progress analytics.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["HealthKit", "Core ML", "SwiftUI"],
      appStoreLink: "#",
      githubLink: "#"
    },
    {
      title: "MoneyWise - Budget Tracker",
      description: "Smart budgeting app with expense tracking, financial insights, and goal setting features.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Charts", "Core Data", "Push Notifications"],
      appStoreLink: "#",
      githubLink: "#"
    },
    {
      title: "ConnectHub - Social Network",
      description: "Real-time social networking app with messaging, photo sharing, and community features.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Firebase", "Real-time DB", "Push Notifications"],
      appStoreLink: "#",
      githubLink: "#"
    },
    {
      title: "TaskMaster Pro",
      description: "Advanced task management with team collaboration, time tracking, and productivity analytics.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["MVVM", "Core Data", "CloudKit"],
      appStoreLink: "#",
      githubLink: "#"
    },
    {
      title: "TravelPlan - Trip Organizer",
      description: "Comprehensive travel planning app with itinerary management, booking, and offline maps.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["MapKit", "Core Location", "SwiftUI"],
      appStoreLink: "#",
      githubLink: "#"
    },
    {
      title: "LearnQuest - Education Platform",
      description: "Interactive learning platform with video courses, quizzes, and progress tracking.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["AVFoundation", "Core Animation", "Firebase"],
      appStoreLink: "#",
      githubLink: "#"
    },
    {
      title: "MusicStream - Audio Player",
      description: "High-quality music streaming app with offline playback, playlists, and social features.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["AVFoundation", "Media Player", "Core Audio"],
      appStoreLink: "#",
      githubLink: "#"
    },
    {
      title: "WeatherLive - Forecast App",
      description: "Beautiful weather app with detailed forecasts, radar maps, and location-based alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Core Location", "Weather API", "SwiftUI"],
      appStoreLink: "#",
      githubLink: "#"
    },
    {
      title: "FoodExpress - Delivery App",
      description: "On-demand food delivery with restaurant listings, order tracking, and payment integration.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["MapKit", "Payment Kit", "Real-time Tracking"],
      appStoreLink: "#",
      githubLink: "#"
    },
    {
      title: "PhotoArt - Creative Editor",
      description: "Professional photo editing app with filters, effects, and advanced editing tools.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Core Image", "Metal", "Vision"],
      appStoreLink: "#",
      githubLink: "#"
    },
    {
      title: "SecureBank - Mobile Banking",
      description: "Secure banking app with biometric authentication, transactions, and financial management.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Touch ID", "Keychain", "Security"],
      appStoreLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-ios-gray-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">A showcase of my iOS development expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-ios-gray-5 hover:shadow-lg transition-shadow duration-200">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
