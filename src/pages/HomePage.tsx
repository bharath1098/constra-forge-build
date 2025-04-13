
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import ContactCTA from "@/components/cta/ContactCTA";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Update document title
    document.title = "ConstraBuild - Building Excellence, Constructing the Future";
  }, []);

  return (
    <>
      <Hero />
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-on-scroll">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-6">
                Leading the Construction Industry with <span className="text-construction-gold">Innovation and Excellence</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Since 1975, ConstraBuild has been at the forefront of the construction industry, 
                delivering high-quality projects across various sectors. Our unwavering commitment 
                to excellence, innovation, and sustainability has established us as a trusted partner 
                for the most challenging construction projects.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With a team of experienced professionals and state-of-the-art technology, 
                we transform architectural visions into reality, ensuring that every project 
                meets the highest standards of quality, safety, and sustainability.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-construction-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Quality Excellence</span>
                </div>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-construction-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Safety First</span>
                </div>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-construction-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Sustainable Practices</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Construction workers on site" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-construction-gold text-white p-6 rounded-lg shadow-lg md:max-w-xs">
                <p className="text-lg font-bold mb-2">Safety First Approach</p>
                <p className="text-sm">Our commitment to safety has resulted in an exceptional safety record across all our projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stats />
      <Services />
      <FeaturedProjects />
      <TestimonialCarousel />
      <ContactCTA />
    </>
  );
};

export default HomePage;
