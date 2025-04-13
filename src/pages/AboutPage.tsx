
import { Award, CheckCircle, Users } from "lucide-react";
import ContactCTA from "@/components/cta/ContactCTA";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Update document title
    document.title = "About Us | ConstraBuild";
  }, []);

  const timelineEvents = [
    {
      year: "1975",
      title: "Company Founded",
      description: "ConstraBuild was established with a vision to transform the construction industry."
    },
    {
      year: "1985",
      title: "First Major Project",
      description: "Completed our first landmark skyscraper, establishing our reputation for quality."
    },
    {
      year: "1995",
      title: "International Expansion",
      description: "Expanded operations internationally, opening offices in Europe and Asia."
    },
    {
      year: "2005",
      title: "Sustainability Initiative",
      description: "Launched our comprehensive sustainability program, committing to eco-friendly practices."
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description: "Integrated cutting-edge technology into our construction processes."
    },
    {
      year: "2023",
      title: "Industry Leadership",
      description: "Recognized as an industry leader with over 500 successful projects globally."
    }
  ];

  const coreValues = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Quality Excellence",
      description: "We are committed to delivering the highest quality in every project, exceeding client expectations."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client Partnership",
      description: "We build lasting relationships with our clients, understanding their needs and goals."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace new technologies and methodologies to stay at the forefront of the industry."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Safety First",
      description: "The safety of our workers and the public is our highest priority on every project."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Employee Development",
      description: "We invest in our people, providing opportunities for growth and advancement."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Sustainability",
      description: "We are committed to environmentally responsible construction practices."
    }
  ];

  const leadershipTeam = [
    {
      name: "Robert Smith",
      position: "Chief Executive Officer",
      bio: "With over 30 years of experience in the construction industry, Robert has led ConstraBuild to new heights since becoming CEO in 2010.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Sarah Johnson",
      position: "Chief Operating Officer",
      bio: "Sarah oversees all operations, ensuring projects are completed on time, within budget, and to the highest standards of quality.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    {
      name: "Michael Chen",
      position: "Chief Technical Officer",
      bio: "Michael leads our technical team, spearheading innovation and the integration of cutting-edge technology in our construction processes.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Jessica Rodriguez",
      position: "Chief Financial Officer",
      bio: "Jessica manages our financial strategy, ensuring the company's long-term growth and stability through sound financial management.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-construction-navy text-white relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-construction-gold">ConstraBuild</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              For over 45 years, we've been building landmarks that define skylines and infrastructure that connects communities. Our story is one of innovation, quality, and dedication to excellence.
            </p>
          </div>
        </div>
        {/* Diagonal Bottom Shape */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
        }}></div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-on-scroll">
            <div>
              <h2 className="text-3xl font-bold text-construction-navy mb-6">
                Our <span className="text-construction-gold">Story</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 1975, ConstraBuild began as a small regional contractor and has grown into a global construction leader. Our journey has been defined by a relentless pursuit of excellence and innovation.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Today, we operate in over 20 countries, with a diverse portfolio of projects that includes iconic skyscrapers, critical infrastructure, and sustainable developments. Our team of over 5,000 professionals brings expertise, passion, and creativity to every project.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What sets us apart is our unique approach that combines traditional construction values with cutting-edge technology and sustainable practices. We don't just build structures; we create landmarks that stand the test of time.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Construction site" 
                className="rounded-lg shadow-lg h-48 object-cover object-center"
              />
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Office building" 
                className="rounded-lg shadow-lg h-48 object-cover object-center"
              />
              <img 
                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Team meeting" 
                className="rounded-lg shadow-lg h-48 object-cover object-center"
              />
              <img 
                src="https://images.unsplash.com/photo-1515510621228-30de609bbd60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Architecture plans" 
                className="rounded-lg shadow-lg h-48 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">
              Our <span className="text-construction-gold">Journey</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the key milestones that have shaped our company's history and established us as a leader in the construction industry.
            </p>
          </div>

          <div className="relative animate-on-scroll">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {/* Timeline Events */}
            <div className="relative z-10">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className={`bg-white p-6 rounded-lg shadow-md border-t-4 border-construction-gold ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <span className="text-lg font-bold text-construction-gold">{event.year}</span>
                      <h3 className="text-xl font-bold text-construction-navy mt-2 mb-3">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-construction-gold border-4 border-white flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">
              Our <span className="text-construction-gold">Core Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our decisions, shape our culture, and define our approach to every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-construction-gold mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-construction-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">
              Our <span className="text-construction-gold">Leadership Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who guide our company's strategic direction and ensure our continued success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-construction-navy mb-1">{leader.name}</h3>
                  <p className="text-construction-gold font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">
              Global <span className="text-construction-gold">Presence</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With offices and projects across the globe, we bring our expertise to diverse markets and communities.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg animate-on-scroll">
            <div className="aspect-[16/9] bg-construction-navy rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-center">Interactive World Map Placeholder</p>
                <p className="text-white text-sm text-center absolute bottom-4">
                  (In a real implementation, this would be an interactive map showing office locations)
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="World Map" 
                className="w-full h-full object-cover object-center opacity-30"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 animate-on-scroll">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-construction-navy mb-3">North America</h3>
              <ul className="text-gray-600 space-y-2">
                <li>New York, USA (Headquarters)</li>
                <li>Chicago, USA</li>
                <li>Toronto, Canada</li>
                <li>Mexico City, Mexico</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-construction-navy mb-3">Europe</h3>
              <ul className="text-gray-600 space-y-2">
                <li>London, UK</li>
                <li>Paris, France</li>
                <li>Berlin, Germany</li>
                <li>Madrid, Spain</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-construction-navy mb-3">Asia</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Tokyo, Japan</li>
                <li>Singapore</li>
                <li>Dubai, UAE</li>
                <li>Shanghai, China</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-construction-navy mb-3">Australia</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Sydney, Australia</li>
                <li>Melbourne, Australia</li>
                <li>Auckland, New Zealand</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default AboutPage;
