import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-purple-600 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Pradip Kikani
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            iOS App Developer & Swift Expert
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/80">
            Crafting exceptional iOS applications since 2016. Specialized in Swift, SwiftUI, and modern iOS development practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="mt-16 animate-bounce-gentle">
          <ArrowDown className="w-6 h-6 mx-auto text-white/60" />
        </div>
      </div>
    </section>
  );
}
