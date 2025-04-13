
import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "../components/projects/ProjectCard";
import ContactCTA from "../components/cta/ContactCTA";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: number;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Skyline Tower",
    category: "Commercial",
    location: "New York, USA",
    year: 2023,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Riverside Bridge",
    category: "Infrastructure",
    location: "Chicago, USA",
    year: 2022,
    image: "https://images.unsplash.com/photo-1545296664-39db72996d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Green Valley Residences",
    category: "Residential",
    location: "San Francisco, USA",
    year: 2023,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true
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
  {
    id: 7,
    title: "Urban Park Plaza",
    category: "Public",
    location: "Seattle, USA",
    year: 2021,
    image: "https://images.unsplash.com/photo-1615599228864-ca17ee2b63e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 8,
    title: "Lakefront Hotel & Resort",
    category: "Hospitality",
    location: "Denver, USA",
    year: 2022,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 9,
    title: "Oceanside Apartments",
    category: "Residential",
    location: "San Diego, USA",
    year: 2023,
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 10,
    title: "Tech Headquarters",
    category: "Commercial",
    location: "Austin, USA",
    year: 2022,
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2087&q=80",
  },
  {
    id: 11,
    title: "Highland Office Park",
    category: "Commercial",
    location: "Portland, USA",
    year: 2021,
    image: "https://images.unsplash.com/photo-1577491040662-0a9b1513204c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2136&q=80",
  },
  {
    id: 12,
    title: "Harbor Bridge",
    category: "Infrastructure",
    location: "Baltimore, USA",
    year: 2020,
    image: "https://images.unsplash.com/photo-1609749668998-33d340efd9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Update document title
    document.title = "Our Projects | ConstraBuild";
  }, []);

  useEffect(() => {
    let results = projects;
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== "all") {
      results = results.filter(project => project.category === selectedCategory);
    }
    
    // Filter by location
    if (selectedLocation !== "all") {
      results = results.filter(project => project.location.includes(selectedLocation));
    }
    
    // Filter by year
    if (selectedYear !== "all") {
      results = results.filter(project => project.year === parseInt(selectedYear));
    }
    
    setFilteredProjects(results);
  }, [searchTerm, selectedCategory, selectedLocation, selectedYear]);

  // Get unique categories, locations, and years for filter options
  const categories = ["all", ...new Set(projects.map(project => project.category))];
  const locations = ["all", ...new Set(projects.map(project => project.location.split(",")[1].trim()))];
  const years = ["all", ...new Set(projects.map(project => project.year.toString()))];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-construction-navy text-white relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-construction-gold">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Explore our diverse portfolio of successful projects, spanning commercial buildings, infrastructure, residential developments, and more. Each project reflects our commitment to quality, innovation, and client satisfaction.
            </p>
          </div>
        </div>
        {/* Diagonal Bottom Shape */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
        }}></div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">
              Featured <span className="text-construction-gold">Projects</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These landmark projects showcase our capabilities and commitment to excellence in construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            {projects.filter(project => project.featured).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">
              Project <span className="text-construction-gold">Gallery</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our complete portfolio and filter by project type, location, or year.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12 animate-on-scroll">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="lg:w-1/4">
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-construction-gold"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {categories.filter(c => c !== "all").map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="lg:w-1/4">
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-construction-gold"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="all">All Locations</option>
                  {locations.filter(l => l !== "all").map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              
              <div className="lg:w-1/4">
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-construction-gold"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="all">All Years</option>
                  {years.filter(y => y !== "all").sort((a, b) => parseInt(b) - parseInt(a)).map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex items-center">
              <Filter className="text-construction-gold mr-2" size={20} />
              <span className="text-gray-600">
                Showing {filteredProjects.length} projects 
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
                {selectedLocation !== "all" && ` from ${selectedLocation}`}
                {selectedYear !== "all" && ` completed in ${selectedYear}`}
              </span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="animate-on-scroll">
            <Tabs defaultValue="grid" className="mb-8">
              <TabsList className="mb-6">
                <TabsTrigger value="grid">Grid View</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>
              
              <TabsContent value="grid">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="list">
                <div className="space-y-4">
                  {filteredProjects.map((project) => (
                    <div key={project.id} className="flex flex-col md:flex-row border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="md:w-1/3 h-48">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-construction-navy mb-2">{project.title}</h3>
                            <p className="text-construction-gold font-medium mb-3">{project.category}</p>
                          </div>
                          <span className="text-gray-500">{project.year}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{project.location}</p>
                        <Button 
                          variant="outline" 
                          className="text-construction-gold border-construction-gold hover:bg-construction-gold hover:text-white"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12 bg-gray-100 rounded-lg">
                <h3 className="text-xl font-bold text-construction-navy mb-2">No Projects Found</h3>
                <p className="text-gray-600">Please try different search criteria or filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-on-scroll">
            <div>
              <span className="inline-block px-3 py-1 mb-4 bg-construction-gold/90 text-white text-sm font-medium rounded">
                Case Study
              </span>
              <h2 className="text-3xl font-bold text-construction-navy mb-6">
                Skyline Tower: Redefining Urban Architecture
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The Skyline Tower is a 50-story mixed-use development in the heart of New York City. This landmark project presented unique challenges that required innovative solutions.
              </p>
              <div className="mb-6 space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-construction-navy">Challenge</h4>
                  <p className="text-gray-600">Building in a dense urban environment with limited space for construction equipment and materials.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-construction-navy">Solution</h4>
                  <p className="text-gray-600">Implementation of just-in-time delivery systems and innovative crane positioning to optimize the construction process.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-construction-navy">Results</h4>
                  <p className="text-gray-600">Completed ahead of schedule and under budget, achieving LEED Platinum certification and setting new standards for sustainable high-rise construction.</p>
                </div>
              </div>
              <Button 
                className="bg-construction-gold hover:bg-amber-600 text-white font-medium"
              >
                Read Full Case Study
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Skyline Tower" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-construction-gold">94%</span>
                  <span className="text-gray-600">energy efficient</span>
                </div>
                <p className="text-gray-600 text-sm">Innovative building systems reduced energy consumption by 94% compared to similar buildings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default ProjectsPage;
