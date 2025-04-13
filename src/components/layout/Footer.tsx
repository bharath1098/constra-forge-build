
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      form.reset();
    }
  };

  return (
    <footer className="bg-construction-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-bold mb-6 inline-block">
              <span className="text-construction-gold">Constra</span>Build
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building tomorrow's landmarks with today's expertise. Quality, safety, and innovation in every project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-construction-gold" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-construction-gold" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-construction-gold" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-construction-gold" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-construction-gold"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-construction-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-construction-gold transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-construction-gold transition-colors">Recent Projects</Link></li>
              <li><Link to="/careers" className="hover:text-construction-gold transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-construction-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-construction-gold"></span>
            </h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p>123 Construction Blvd, <br />New York, NY 10001</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@constrabuild.com</p>
              <p>Hours: Mon-Fri 8:00 AM - 5:00 PM</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-construction-gold"></span>
            </h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex">
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Your email" 
                  className="bg-gray-800 border-gray-700 text-white" 
                  required
                />
                <Button type="submit" className="bg-construction-gold hover:bg-amber-600 ml-2">
                  <ArrowRight size={18} />
                </Button>
              </div>
            </form>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ConstraBuild. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
