export default function Experience() {
  const experiences = [
    {
      title: "Senior iOS Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Leading iOS development for enterprise applications serving 100K+ users. Architected scalable solutions using SwiftUI and modern iOS frameworks.",
      side: "right"
    },
    {
      title: "iOS Developer",
      company: "InnovateTech",
      period: "2020 - 2022",
      description: "Developed and maintained multiple iOS applications with focus on performance optimization and user experience. Implemented Firebase integration and push notifications.",
      side: "left"
    },
    {
      title: "Mobile App Developer",
      company: "StartupHub",
      period: "2018 - 2020",
      description: "Built iOS applications for various startup clients, focusing on rapid prototyping and MVP development. Expertise in Swift and Objective-C.",
      side: "right"
    },
    {
      title: "Junior iOS Developer",
      company: "MobileTech Solutions",
      period: "2016 - 2018",
      description: "Started my iOS development journey, working on various client projects and learning advanced iOS frameworks. Contributed to multiple successful app launches.",
      side: "left"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-ios-gray-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">8+ years of iOS development expertise across various industries</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-center">
                  {exp.side === "right" ? (
                    <>
                      <div className="flex-1 pr-8 text-right">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-ios-gray-5">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                          <p className="text-primary font-semibold mb-2">{exp.company}</p>
                          <p className="text-gray-600 mb-4">{exp.period}</p>
                          <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm z-10 flex-shrink-0"></div>
                      <div className="flex-1 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 pr-8"></div>
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm z-10 flex-shrink-0"></div>
                      <div className="flex-1 pl-8">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-ios-gray-5">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                          <p className="text-primary font-semibold mb-2">{exp.company}</p>
                          <p className="text-gray-600 mb-4">{exp.period}</p>
                          <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
