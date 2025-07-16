import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      title: "CEO, RetailTech Inc.",
      initials: "JS",
      bgColor: "bg-primary",
      testimonial: "Pradip delivered an exceptional iOS app for our e-commerce business. His attention to detail and technical expertise exceeded our expectations. The app performs flawlessly and our customers love it!"
    },
    {
      name: "Maria Johnson",
      title: "Founder, HealthTech Solutions",
      initials: "MJ",
      bgColor: "bg-ios-green",
      testimonial: "Working with Pradip was a game-changer for our startup. He transformed our idea into a beautiful, functional iOS app that helped us secure funding. His expertise in SwiftUI is remarkable!"
    },
    {
      name: "David Lee",
      title: "CTO, FinanceApp Corp",
      initials: "DL",
      bgColor: "bg-purple-500",
      testimonial: "Pradip's iOS development skills are top-notch. He delivered our project on time and within budget, with clean code and excellent performance. I highly recommend him for any iOS project!"
    },
    {
      name: "Sarah Wilson",
      title: "Product Manager, TravelTech",
      initials: "SW",
      bgColor: "bg-orange-500",
      testimonial: "Outstanding work! Pradip helped us migrate our legacy app to SwiftUI with zero downtime. His deep understanding of iOS architecture made the transition seamless."
    },
    {
      name: "Robert Thompson",
      title: "Founder, SocialConnect",
      initials: "RT",
      bgColor: "bg-red-500",
      testimonial: "Pradip's expertise in Firebase integration and push notifications was exactly what we needed. He's professional, responsive, and delivers quality work consistently."
    },
    {
      name: "Anna Brown",
      title: "CEO, FoodieApp",
      initials: "AB",
      bgColor: "bg-indigo-500",
      testimonial: "Incredible attention to detail and user experience. Pradip created an iOS app that not only looks beautiful but performs exceptionally well. Highly recommended!"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">What my clients say about working with me</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-ios-gray-6 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="mb-6">
                <Star className="w-8 h-8 text-primary mb-4" fill="currentColor" />
                <p className="text-gray-700 leading-relaxed mb-4">{testimonial.testimonial}</p>
              </div>
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
