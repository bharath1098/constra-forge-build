
import { useState, useEffect } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Update document title
    document.title = "Contact Us | ConstraBuild";
  }, []);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Form is valid, proceed with submission
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const offices = [
    {
      city: "New York",
      address: "123 Construction Blvd, New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "newyork@constrabuild.com",
      hours: "Mon - Fri: 8:00 AM - 5:00 PM"
    },
    {
      city: "Chicago",
      address: "456 Builder Ave, Chicago, IL 60601",
      phone: "+1 (555) 234-5678",
      email: "chicago@constrabuild.com",
      hours: "Mon - Fri: 8:00 AM - 5:00 PM"
    },
    {
      city: "San Francisco",
      address: "789 Tower St, San Francisco, CA 94105",
      phone: "+1 (555) 345-6789",
      email: "sanfrancisco@constrabuild.com",
      hours: "Mon - Fri: 8:00 AM - 5:00 PM"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-construction-navy text-white relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-construction-gold">Us</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Have a question or ready to start your next project? Get in touch with our team. We're here to help you bring your vision to life.
            </p>
          </div>
        </div>
        {/* Diagonal Bottom Shape */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
        }}></div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-on-scroll">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-construction-navy mb-6">
                Send Us a <span className="text-construction-gold">Message</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={formErrors.name ? "border-red-500" : ""}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={formErrors.email ? "border-red-500" : ""}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className={formErrors.subject ? "border-red-500" : ""}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={formErrors.message ? "border-red-500" : ""}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  className="bg-construction-gold hover:bg-amber-600 text-white font-medium w-full md:w-auto"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-construction-navy mb-6">
                Get in <span className="text-construction-gold">Touch</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Have a question or ready to start your next project? Reach out to us through any of the following channels.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start">
                  <div className="mr-4 text-construction-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-construction-navy mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+15551234567" className="hover:text-construction-gold">
                        +1 (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-construction-gold">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-construction-navy mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@constrabuild.com" className="hover:text-construction-gold">
                        info@constrabuild.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-construction-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-construction-navy mb-2">Headquarters</h3>
                    <p className="text-gray-600">
                      123 Construction Blvd,<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-construction-gold">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-construction-navy mb-2">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday<br />
                      8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-construction-navy mb-4">Our Offices</h3>
                
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 text-construction-gold">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-construction-navy mb-1">{office.city}</h4>
                        <p className="text-gray-600 mb-2">{office.address}</p>
                        <p className="text-gray-600 mb-1">
                          <a href={`tel:${office.phone}`} className="hover:text-construction-gold">
                            {office.phone}
                          </a>
                        </p>
                        <p className="text-gray-600 mb-1">
                          <a href={`mailto:${office.email}`} className="hover:text-construction-gold">
                            {office.email}
                          </a>
                        </p>
                        <p className="text-gray-600">{office.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">
              Our <span className="text-construction-gold">Locations</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find our offices across the country. We're strategically located to serve clients nationwide.
            </p>
          </div>

          <div className="animate-on-scroll">
            <div className="bg-white p-2 rounded-lg shadow-md">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-construction-navy text-center">Interactive Map Placeholder</p>
                  <p className="text-gray-600 text-sm text-center absolute bottom-4">
                    (In a real implementation, this would be an interactive map showing office locations)
                  </p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Map" 
                  className="w-full h-full object-cover object-center opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">
              Frequently Asked <span className="text-construction-gold">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-construction-navy mb-3">How do I request a quote for my project?</h3>
              <p className="text-gray-600">
                You can request a quote by filling out our contact form, calling our main office, or emailing us directly. Please provide as much detail about your project as possible for the most accurate estimate.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-construction-navy mb-3">What types of projects do you handle?</h3>
              <p className="text-gray-600">
                We handle a wide range of construction projects, including commercial buildings, civil infrastructure, industrial facilities, institutional buildings, residential developments, and renovation projects.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-construction-navy mb-3">How long does a typical construction project take?</h3>
              <p className="text-gray-600">
                Project timelines vary significantly based on size, complexity, and scope. A small renovation might take weeks, while a large commercial building could take 12-24 months. We provide detailed timelines during the planning phase.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-construction-navy mb-3">Do you handle permits and approvals?</h3>
              <p className="text-gray-600">
                Yes, we manage the permitting process as part of our comprehensive service. Our team is experienced in navigating local regulations and securing the necessary approvals to keep your project on schedule.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-construction-navy mb-3">What sustainability practices do you implement?</h3>
              <p className="text-gray-600">
                We incorporate sustainable practices throughout our projects, including energy-efficient designs, responsible material sourcing, waste reduction strategies, and LEED certification when desired.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-construction-navy mb-3">How do you ensure quality and safety?</h3>
              <p className="text-gray-600">
                Quality and safety are our top priorities. We maintain rigorous quality control processes, regular inspections, and comprehensive safety programs that exceed industry standards and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
