import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "../assets/Hero/slide1.png";
import heroSlide2 from "../assets/Hero/slide2.png";
import heroSlide3 from "../assets/Hero/slide3.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroSlide1,
      title: "Telangana's Largest Robotics Education Program in Government Schools",
      subtitle: "Promoting Innovation among students and communities",
    },
    {
      image: heroSlide2,
      title: "Hands-on Robotics Training for Young Innovators",
      subtitle: "Building tomorrow's engineers and problem solvers",
    },
    {
      image: heroSlide3,
      title: "Interactive Learning Through Robotics",
      subtitle: "Making STEM education engaging and accessible",
    },
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen  flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt="Robotics Education"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-medium text-[#00B7FF] mb-4 animate-fade-in-up tracking-wider">
            ROBOTICS IN ACADEMICS
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up animation-delay-200">
            {slides[currentSlide].title}
          </h1>

          <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-up animation-delay-400">
            {slides[currentSlide].subtitle}
          </p>

          <Button
            size="lg"
            className="tech-glow animate-fade-in-up animation-delay-600 "
            onClick={() => {
              const section = document.getElementById("video-section");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Discover More
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/80 hover:bg-card transition-colors tech-glow"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/80 hover:bg-card transition-colors tech-glow"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-primary/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
