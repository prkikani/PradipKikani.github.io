import { Code, CheckCircle, Zap, Palette, Star, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Custom iOS Development",
      description: "End-to-end iOS app development from concept to App Store launch, tailored to your specific requirements.",
      icon: <Code className="w-8 h-8 text-white" />,
      bgColor: "bg-primary",
      price: "Starting from $5,000",
      features: [
        "Native iOS apps in Swift",
        "SwiftUI modern interfaces",
        "App Store optimization"
      ]
    },
    {
      title: "iOS Consulting",
      description: "Strategic guidance for your iOS projects, architecture reviews, and technical decision-making support.",
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      bgColor: "bg-ios-green",
      price: "$150/hour",
      features: [
        "Architecture planning",
        "Code reviews",
        "Performance optimization"
      ]
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support for your iOS applications including updates, bug fixes, and feature enhancements.",
      icon: <Zap className="w-8 h-8 text-white" />,
      bgColor: "bg-purple-500",
      price: "$2,000/month",
      features: [
        "Bug fixes & updates",
        "iOS version compatibility",
        "Performance monitoring"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive iOS interface design following Apple's Human Interface Guidelines.",
      icon: <Palette className="w-8 h-8 text-white" />,
      bgColor: "bg-orange-500",
      price: "$100/hour",
      features: [
        "Wireframing & prototyping",
        "iOS design systems",
        "User experience optimization"
      ]
    },
    {
      title: "App Store Optimization",
      description: "Maximize your app's visibility and downloads with strategic App Store optimization services.",
      icon: <Star className="w-8 h-8 text-white" />,
      bgColor: "bg-red-500",
      price: "$1,500 one-time",
      features: [
        "Keyword optimization",
        "App Store listing",
        "Analytics & reporting"
      ]
    },
    {
      title: "Migration Services",
      description: "Migrate your existing apps to the latest iOS versions, SwiftUI, or modern architecture patterns.",
      icon: <Users className="w-8 h-8 text-white" />,
      bgColor: "bg-indigo-500",
      price: "$3,000+",
      features: [
        "SwiftUI migration",
        "iOS version updates",
        "Architecture modernization"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Services Offered</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive iOS development solutions for your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-ios-gray-6 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-200">
              <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="text-left space-y-2 text-gray-700 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className={`w-2 h-2 ${service.bgColor} rounded-full mr-3`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="font-semibold" style={{ color: service.bgColor.replace('bg-', '') }}>
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
