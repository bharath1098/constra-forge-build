
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "../projects/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Skyline Tower",
    category: "Commercial",
    location: "New York, USA",
    year: 2023,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    title: "Riverside Bridge",
    category: "Infrastructure",
    location: "Chicago, USA",
    year: 2022,
    image: "https://images.unsplash.com/photo-1545296664-39db72996d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    title: "Green Valley Residences",
    category: "Residential",
    location: "San Francisco, USA",
    year: 2023,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 4,
    title: "Industrial Complex Alpha",
    category: "Industrial",
    location: "Houston, USA",
    year: 2021,
    image: "https://images.unsplash.com/photo-1587582345426-bf07d528f926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 5,
    title: "Coastal Highway",
    category: "Infrastructure",
    location: "Miami, USA",
    year: 2022,
    image: "https://images.unsplash.com/photo-1621947081720-86970823b77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 6,
    title: "Medical Center",
    category: "Healthcare",
    location: "Boston, USA",
    year: 2023,
    image: "https://images.unsplash.com/photo-1504232295968-539d8a7f8efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const FeaturedProjects = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesToShow = 3;
  const totalSlides = Math.ceil(projects.length / slidesToShow);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleProjects = () => {
    const start = activeSlide * slidesToShow;
    return projects.slice(start, start + slidesToShow);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 animate-on-scroll">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">
              Featured <span className="text-construction-gold">Projects</span>
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Our portfolio showcases a diverse range of successful projects, from towering skyscrapers to intricate bridges, each demonstrating our commitment to excellence.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="border-gray-300 hover:border-construction-gold hover:text-construction-gold"
              aria-label="Previous projects"
            >
              <ArrowLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              className="border-gray-300 hover:border-construction-gold hover:text-construction-gold"
              aria-label="Next projects"
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
          {visibleProjects().map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-construction-gold text-construction-gold hover:bg-construction-gold hover:text-white font-medium"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
