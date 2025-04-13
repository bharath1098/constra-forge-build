import { Building, Factory, School, Home, HardHat, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceItem = ({ icon, title, description }: ServiceItemProps) => {
  return (
    <div className="service-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="text-construction-gold mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-construction-navy mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to="/services" 
        className="inline-flex items-center text-construction-gold font-medium hover:underline"
      >
        Learn More
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Building size={36} />,
      title: "Commercial Buildings",
      description: "From office towers to retail spaces, we deliver commercial buildings that balance functionality, aesthetics, and sustainability."
    },
    {
      icon: <Building2 size={36} />,
      title: "Civil Infrastructure",
      description: "We build bridges, highways, and tunnels that connect communities and withstand the test of time."
    },
    {
      icon: <Factory size={36} />,
      title: "Industrial Facilities",
      description: "Our industrial construction services include manufacturing plants, warehouses, and specialized facilities."
    },
    {
      icon: <School size={36} />,
      title: "Institutional Buildings",
      description: "We construct educational, healthcare, and government facilities that serve the public good."
    },
    {
      icon: <Home size={36} />,
      title: "Residential Projects",
      description: "From luxury high-rises to affordable housing, we create living spaces that enhance quality of life."
    },
    {
      icon: <HardHat size={36} />,
      title: "Restoration & Renovation",
      description: "We breathe new life into existing structures while preserving their historical and architectural integrity."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">
            Our <span className="text-construction-gold">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of construction services to meet the diverse needs of our clients across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-construction-gold hover:bg-amber-600 text-white font-medium">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
