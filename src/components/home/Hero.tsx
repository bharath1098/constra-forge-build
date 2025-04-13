
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-construction-navy min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-construction-navy/70"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Building Excellence, <br />
            <span className="text-construction-gold">Constructing the Future</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-xl">
            With over 50 years of experience in the industry, we deliver exceptional construction services that transform visions into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-construction-gold hover:bg-amber-600 text-white font-medium text-lg"
            >
              Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 font-medium text-lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Diagonal Bottom Shape */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
      }}></div>
    </div>
  );
};

export default Hero;
