
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "ConstraBuild transformed our vision into reality with expert precision and attention to detail. Their team was professional from start to finish.",
    author: "John Richardson",
    position: "CEO, TechSpace Inc.",
    company: "TechSpace",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 2,
    content: "Working with ConstraBuild was a seamless experience. Their expertise in infrastructure projects is unmatched, delivering our bridge project ahead of schedule.",
    author: "Sarah Johnson",
    position: "Director",
    company: "Metro Transport Authority",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
  },
  {
    id: 3,
    content: "The ConstraBuild team demonstrated exceptional problem-solving skills during our complex industrial facility construction. Their innovation saved us time and resources.",
    author: "Michael Chang",
    position: "Operations Manager",
    company: "Global Manufacturing Co.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    // Reset animation flag after transition
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <section className="py-20 bg-construction-navy text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-construction-gold">Clients</span> Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our satisfied clients have to say about our work.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          <Quote className="absolute text-construction-gold/20 h-24 w-24 -top-10 -left-10 rotate-180" />
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10">
                    <p className="text-xl md:text-2xl italic mb-8 text-gray-200">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">{testimonial.author}</h4>
                        <p className="text-gray-300">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10 space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              disabled={isAnimating}
              className="border-gray-600 text-white hover:border-construction-gold hover:text-construction-gold"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              disabled={isAnimating}
              className="border-gray-600 text-white hover:border-construction-gold hover:text-construction-gold"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </Button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-construction-gold" : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
