
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-16 bg-construction-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-construction-gold rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-construction-gold rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Construction Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and quote. Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              as={Link}
              to="/contact"
              size="lg" 
              className="bg-construction-gold hover:bg-amber-600 text-white font-medium text-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              as={Link}
              to="/projects"
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 font-medium text-lg"
            >
              View Our Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
