export default function About() {
  return (
    <section id="about" className="py-24 bg-ios-gray-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get to know the developer behind the apps</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-ios-gray-5">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm Pradip Kikani, a passionate iOS developer with over 8 years of experience in mobile app development. My journey began in 2016 when I discovered my love for creating intuitive and powerful mobile applications.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With a strong foundation in computer science and a Master's degree in Information Technology (MSC-IT) with a 7.4 CGPA, I've continuously evolved my skills to stay at the forefront of iOS development.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I specialize in Swift, SwiftUI, and modern iOS frameworks, delivering high-quality applications that combine beautiful design with robust functionality. My expertise spans from small utility apps to complex enterprise solutions.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-ios-gray-5">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education & Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Master of Science in Information Technology</h4>
                    <p className="text-gray-600">CGPA: 7.4/10</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">8+ Years of iOS Development</h4>
                    <p className="text-gray-600">Since 2016</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">50+ Apps Developed</h4>
                    <p className="text-gray-600">Across various industries</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-ios-gray-5">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-ios-gray-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900">Quality</h4>
                  <p className="text-sm text-gray-600">Clean, maintainable code</p>
                </div>
                <div className="text-center p-4 bg-ios-gray-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900">Innovation</h4>
                  <p className="text-sm text-gray-600">Latest technologies</p>
                </div>
                <div className="text-center p-4 bg-ios-gray-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900">Collaboration</h4>
                  <p className="text-sm text-gray-600">Open communication</p>
                </div>
                <div className="text-center p-4 bg-ios-gray-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900">Excellence</h4>
                  <p className="text-sm text-gray-600">Exceeding expectations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
