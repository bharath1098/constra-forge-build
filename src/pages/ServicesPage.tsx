import { useState, useEffect } from "react";
import { Building, Building2, Factory, School, Home, HardHat, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactCTA from "@/components/cta/ContactCTA";
import { useToast } from "@/hooks/use-toast";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
  caseStudy?: {
    projectName: string;
    location: string;
    challenge: string;
    solution: string;
  };
}

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("buildings");
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services | ConstraBuild";
  }, []);

  const handleContact = (service: string) => {
    toast({
      title: "Service Inquiry",
      description: `Your inquiry for ${service} services has been received. We'll contact you shortly.`,
    });
  };

  const services: Record<string, Service> = {
    buildings: {
      id: "buildings",
      icon: <Building size={36} />,
      title: "Commercial Buildings",
      description: "We design and construct state-of-the-art commercial buildings that combine functionality, aesthetics, and sustainability. From office towers to retail complexes, our team delivers spaces that meet the unique needs of businesses and their customers.",
      features: [
        "Office Buildings & Corporate Headquarters",
        "Retail Centers & Shopping Malls",
        "Hotels & Hospitality Venues",
        "Mixed-Use Developments",
        "Sustainable Building Solutions"
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caseStudy: {
        projectName: "Skyline Tower",
        location: "New York, USA",
        challenge: "Creating a 50-story office tower with minimal environmental impact in a dense urban environment.",
        solution: "Implemented innovative green building technologies, achieving LEED Platinum certification while maximizing usable space and natural light."
      }
    },
    infrastructure: {
      id: "infrastructure",
      icon: <Building2 size={36} />,
      title: "Civil Infrastructure",
      description: "Our civil infrastructure services encompass the design and construction of the critical systems that connect communities and enable modern life. With expertise in bridges, highways, tunnels, and more, we deliver durable solutions that withstand the test of time.",
      features: [
        "Bridges & Overpasses",
        "Highways & Roads",
        "Tunnels & Underground Structures",
        "Airports & Aviation Facilities",
        "Water Treatment & Distribution Systems"
      ],
      image: "https://images.unsplash.com/photo-1545296664-39db72996d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caseStudy: {
        projectName: "Riverside Bridge",
        location: "Chicago, USA",
        challenge: "Building a 1,200-foot suspension bridge over a major waterway with minimal disruption to river traffic.",
        solution: "Utilized prefabricated components and innovative construction techniques to reduce on-site work and complete the project ahead of schedule."
      }
    },
    industrial: {
      id: "industrial",
      icon: <Factory size={36} />,
      title: "Industrial Facilities",
      description: "We specialize in constructing industrial facilities that optimize operational efficiency and productivity. From manufacturing plants to logistics centers, our designs integrate cutting-edge technology and sustainable practices to create facilities that drive business success.",
      features: [
        "Manufacturing Plants & Factories",
        "Warehouses & Distribution Centers",
        "Data Centers & Technology Facilities",
        "Energy & Power Plants",
        "Advanced Material Handling Systems"
      ],
      image: "https://images.unsplash.com/photo-1587582345426-bf07d528f926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caseStudy: {
        projectName: "TechManufacturing Complex",
        location: "Austin, USA",
        challenge: "Creating a highly automated manufacturing facility with strict environmental controls and energy efficiency requirements.",
        solution: "Implemented smart building systems and sustainable design principles, resulting in a 40% reduction in energy consumption compared to industry standards."
      }
    },
    institutional: {
      id: "institutional",
      icon: <School size={36} />,
      title: "Institutional Buildings",
      description: "Our institutional construction services focus on creating spaces that serve the public good. We build educational, healthcare, and government facilities that balance functionality, aesthetics, and community needs, creating environments where people can learn, heal, and connect.",
      features: [
        "Schools & Universities",
        "Hospitals & Healthcare Facilities",
        "Government Buildings",
        "Cultural & Community Centers",
        "Research & Laboratory Facilities"
      ],
      image: "https://images.unsplash.com/photo-1504232295968-539d8a7f8efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    residential: {
      id: "residential",
      icon: <Home size={36} />,
      title: "Residential Projects",
      description: "From luxury high-rises to affordable housing developments, our residential construction services create living spaces that enhance quality of life. We focus on building communities where people can thrive, with attention to detail, quality materials, and thoughtful design.",
      features: [
        "Luxury Apartments & Condominiums",
        "Single-Family Home Developments",
        "Affordable Housing Projects",
        "Senior Living Communities",
        "Student Housing"
      ],
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    renovation: {
      id: "renovation",
      icon: <HardHat size={36} />,
      title: "Restoration & Renovation",
      description: "Our restoration and renovation services breathe new life into existing structures while preserving their historical and architectural integrity. Whether modernizing a commercial space or restoring a historic landmark, we blend traditional craftsmanship with modern techniques.",
      features: [
        "Historic Building Restoration",
        "Commercial Space Renovation",
        "Adaptive Reuse Projects",
        "Facade Restoration",
        "Seismic Retrofitting"
      ],
      image: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  };

  const serviceKeys = Object.keys(services);

  return (
    <>
      <section className="pt-32 pb-20 bg-construction-navy text-white relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-construction-gold">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We offer a comprehensive range of construction services to meet the diverse needs of our clients. From commercial buildings to residential developments, we bring expertise and innovation to every project.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
        }}></div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-6">
              Comprehensive <span className="text-construction-gold">Construction Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From initial concept to final construction, we provide end-to-end services that transform visions into reality. Explore our core service areas below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
            {serviceKeys.map((key) => (
              <div 
                key={key} 
                className="service-card bg-white p-6 rounded-lg shadow-md border border-gray-100 cursor-pointer"
                onClick={() => setActiveTab(key)}
              >
                <div className="text-construction-gold mb-4">
                  {services[key].icon}
                </div>
                <h3 className="text-xl font-bold text-construction-navy mb-3">{services[key].title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{services[key].description}</p>
                <button 
                  className="inline-flex items-center text-construction-gold font-medium hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab(key);
                    document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service-details" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-6">
              Service <span className="text-construction-gold">Details</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Select a service category to learn more about our capabilities and approach.
            </p>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="animate-on-scroll"
          >
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-12">
              {serviceKeys.map((key) => (
                <TabsTrigger key={key} value={key} className="text-xs md:text-sm">
                  {services[key].title.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {serviceKeys.map((key) => (
              <TabsContent key={key} value={key} className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="mr-4 text-construction-gold">
                        {services[key].icon}
                      </div>
                      <h3 className="text-2xl font-bold text-construction-navy">
                        {services[key].title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {services[key].description}
                    </p>
                    
                    <h4 className="text-xl font-bold text-construction-navy mb-4">Our Capabilities</h4>
                    <ul className="mb-8 space-y-3">
                      {services[key].features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-6 w-6 text-construction-gold mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={() => handleContact(services[key].title)}
                      className="bg-construction-gold hover:bg-amber-600 text-white font-medium"
                    >
                      Inquire About This Service
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={services[key].image} 
                        alt={services[key].title} 
                        className="w-full h-64 object-cover object-center"
                      />
                    </div>
                    
                    {services[key].caseStudy && (
                      <div className="mt-8 bg-white p-6 rounded-lg shadow-md border-l-4 border-construction-gold">
                        <h4 className="text-xl font-bold text-construction-navy mb-3">
                          Case Study: {services[key].caseStudy.projectName}
                        </h4>
                        <p className="text-gray-600 mb-2">
                          <span className="font-medium text-construction-navy">Location:</span> {services[key].caseStudy.location}
                        </p>
                        <p className="text-gray-600 mb-2">
                          <span className="font-medium text-construction-navy">Challenge:</span> {services[key].caseStudy.challenge}
                        </p>
                        <p className="text-gray-600 mb-2">
                          <span className="font-medium text-construction-navy">Solution:</span> {services[key].caseStudy.solution}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-6">
              Our <span className="text-construction-gold">Process</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful project delivery, from initial consultation to final handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
            <div className="bg-gray-50 p-6 rounded-lg relative">
              <div className="absolute -top-4 -right-4 bg-construction-gold text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <h3 className="text-xl font-bold text-construction-navy mb-3">Consultation</h3>
              <p className="text-gray-600">We begin by understanding your vision, requirements, and objectives through detailed consultations.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg relative">
              <div className="absolute -top-4 -right-4 bg-construction-gold text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <h3 className="text-xl font-bold text-construction-navy mb-3">Planning & Design</h3>
              <p className="text-gray-600">Our team develops comprehensive plans and designs, incorporating your feedback and industry best practices.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg relative">
              <div className="absolute -top-4 -right-4 bg-construction-gold text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <h3 className="text-xl font-bold text-construction-navy mb-3">Construction</h3>
              <p className="text-gray-600">We execute the project with precision, maintaining regular communication and progress updates.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg relative">
              <div className="absolute -top-4 -right-4 bg-construction-gold text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <h3 className="text-xl font-bold text-construction-navy mb-3">Completion & Handover</h3>
              <p className="text-gray-600">We conduct final inspections, provide all necessary documentation, and ensure a smooth transition.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default ServicesPage;
