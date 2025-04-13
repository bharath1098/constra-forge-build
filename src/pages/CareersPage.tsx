
import { useState, useEffect } from "react";
import { Search, Briefcase, Users, ChevronRight, Heart, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactCTA from "@/components/cta/ContactCTA";
import { useToast } from "@/hooks/use-toast";

interface JobListing {
  id: number;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  description: string;
  responsibilities: string[];
  requirements: string[];
  posted: string;
}

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [filteredJobs, setFilteredJobs] = useState<JobListing[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Update document title
    document.title = "Careers | ConstraBuild";
  }, []);

  const jobListings: JobListing[] = [
    {
      id: 1,
      title: "Project Manager",
      department: "Operations",
      location: "New York, USA",
      type: "Full-time",
      description: "We are looking for an experienced Project Manager to lead our construction projects from inception to completion. The ideal candidate will have a strong background in construction management and excellent leadership skills.",
      responsibilities: [
        "Oversee all aspects of construction projects, ensuring they are completed on time, within budget, and to the highest quality standards",
        "Develop and maintain project schedules, budgets, and resource plans",
        "Coordinate with architects, engineers, subcontractors, and clients",
        "Identify and resolve project issues and risks",
        "Ensure compliance with safety standards and regulations"
      ],
      requirements: [
        "Bachelor's degree in Construction Management, Civil Engineering, or related field",
        "5+ years of experience in construction project management",
        "PMP certification preferred",
        "Strong knowledge of construction methods, materials, and regulations",
        "Excellent leadership, communication, and problem-solving skills"
      ],
      posted: "2023-03-15"
    },
    {
      id: 2,
      title: "Civil Engineer",
      department: "Engineering",
      location: "Chicago, USA",
      type: "Full-time",
      description: "We are seeking a skilled Civil Engineer to join our team and contribute to the design and execution of infrastructure projects. The ideal candidate will have experience in structural analysis and design.",
      responsibilities: [
        "Develop detailed engineering designs for infrastructure projects",
        "Perform structural analysis and calculations",
        "Create technical specifications and drawings",
        "Coordinate with project managers and construction teams",
        "Ensure designs comply with applicable codes and regulations"
      ],
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "3+ years of experience in civil engineering",
        "Professional Engineer (PE) license preferred",
        "Proficiency in CAD software and structural analysis tools",
        "Strong analytical and problem-solving skills"
      ],
      posted: "2023-04-02"
    },
    {
      id: 3,
      title: "Construction Superintendent",
      department: "Operations",
      location: "Houston, USA",
      type: "Full-time",
      description: "We are looking for a Construction Superintendent to oversee daily operations at our construction sites. The ideal candidate will have extensive experience in managing construction crews and ensuring project quality.",
      responsibilities: [
        "Supervise and coordinate construction activities and workers on site",
        "Ensure compliance with project plans, specifications, and schedules",
        "Implement safety protocols and ensure adherence to regulations",
        "Coordinate with subcontractors, suppliers, and project managers",
        "Address and resolve site issues and challenges"
      ],
      requirements: [
        "5+ years of experience as a Construction Superintendent",
        "Strong knowledge of construction methods and building codes",
        "OSHA certification",
        "Excellent leadership and communication skills",
        "Ability to read and interpret construction plans and specifications"
      ],
      posted: "2023-03-28"
    },
    {
      id: 4,
      title: "Estimator",
      department: "Preconstruction",
      location: "San Francisco, USA",
      type: "Full-time",
      description: "We are seeking an experienced Estimator to develop accurate cost estimates for construction projects. The ideal candidate will have a strong understanding of construction methods, materials, and pricing.",
      responsibilities: [
        "Prepare detailed cost estimates for construction projects",
        "Analyze project plans, specifications, and requirements",
        "Solicit and evaluate vendor and subcontractor quotes",
        "Identify potential cost savings opportunities",
        "Collaborate with project managers and business development teams"
      ],
      requirements: [
        "Bachelor's degree in Construction Management, Engineering, or related field",
        "3+ years of experience in construction estimating",
        "Proficiency in estimating software and Microsoft Excel",
        "Strong analytical and mathematical skills",
        "Detail-oriented with excellent organization and time management abilities"
      ],
      posted: "2023-04-10"
    },
    {
      id: 5,
      title: "Health & Safety Manager",
      department: "Safety",
      location: "Chicago, USA",
      type: "Full-time",
      description: "We are looking for a Health & Safety Manager to develop and implement safety programs across our construction sites. The ideal candidate will have a strong background in construction safety and regulatory compliance.",
      responsibilities: [
        "Develop and implement comprehensive safety programs and policies",
        "Conduct regular site inspections and safety audits",
        "Provide safety training to employees and subcontractors",
        "Investigate incidents and implement corrective measures",
        "Ensure compliance with OSHA regulations and industry safety standards"
      ],
      requirements: [
        "Bachelor's degree in Occupational Health and Safety or related field",
        "5+ years of experience in construction safety management",
        "CSP or CHST certification",
        "In-depth knowledge of OSHA regulations and industry safety standards",
        "Excellent communication and training skills"
      ],
      posted: "2023-03-20"
    },
    {
      id: 6,
      title: "BIM Coordinator",
      department: "Technical Services",
      location: "New York, USA",
      type: "Full-time",
      description: "We are seeking a BIM Coordinator to support our construction projects through effective use of Building Information Modeling. The ideal candidate will have experience in BIM coordination and a strong understanding of construction processes.",
      responsibilities: [
        "Coordinate BIM models across disciplines and stakeholders",
        "Perform clash detection and resolution",
        "Create and maintain BIM execution plans",
        "Provide technical support to project teams",
        "Train staff on BIM software and processes"
      ],
      requirements: [
        "Bachelor's degree in Architecture, Engineering, or related field",
        "3+ years of experience in BIM coordination",
        "Proficiency in Revit, Navisworks, and other BIM software",
        "Strong understanding of construction methods and processes",
        "Excellent problem-solving and communication skills"
      ],
      posted: "2023-04-05"
    },
    {
      id: 7,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "San Francisco, USA",
      type: "Full-time",
      description: "We are looking for a Marketing Specialist to support our marketing initiatives and help showcase our projects and capabilities. The ideal candidate will have experience in construction or AEC marketing.",
      responsibilities: [
        "Develop marketing materials, including brochures, presentations, and project case studies",
        "Manage social media accounts and digital marketing campaigns",
        "Coordinate and support proposal development",
        "Assist with event planning and execution",
        "Track and analyze marketing metrics"
      ],
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "2+ years of experience in marketing, preferably in the construction industry",
        "Proficiency in graphic design software and digital marketing tools",
        "Excellent writing and communication skills",
        "Creative mindset with strong attention to detail"
      ],
      posted: "2023-04-12"
    },
    {
      id: 8,
      title: "Project Engineer",
      department: "Operations",
      location: "Houston, USA",
      type: "Full-time",
      description: "We are seeking a Project Engineer to support our project management team in the planning and execution of construction projects. The ideal candidate will have a strong technical background and excellent analytical skills.",
      responsibilities: [
        "Assist with project planning, scheduling, and cost control",
        "Review submittals, RFIs, and change orders",
        "Coordinate with architects, engineers, and subcontractors",
        "Monitor project progress and prepare reports",
        "Support quality control and safety initiatives"
      ],
      requirements: [
        "Bachelor's degree in Civil Engineering, Construction Management, or related field",
        "1-3 years of experience in construction engineering",
        "Familiarity with construction documentation and processes",
        "Proficiency in Microsoft Office and project management software",
        "Strong analytical and problem-solving skills"
      ],
      posted: "2023-04-08"
    },
  ];

  useEffect(() => {
    let results = jobListings;
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by department
    if (selectedDepartment !== "all") {
      results = results.filter(job => job.department === selectedDepartment);
    }
    
    // Filter by location
    if (selectedLocation !== "all") {
      results = results.filter(job => job.location.includes(selectedLocation));
    }
    
    setFilteredJobs(results);
  }, [searchTerm, selectedDepartment, selectedLocation, jobListings]);

  // Get unique departments and locations for filter options
  const departments = ["all", ...new Set(jobListings.map(job => job.department))];
  const locations = ["all", ...new Set(jobListings.map(job => job.location.split(",")[0].trim()))];

  const handleApply = (jobTitle: string) => {
    toast({
      title: "Application Started",
      description: `You have started an application for ${jobTitle}. Complete the form to submit your application.`,
    });
  };

  const testimonials = [
    {
      quote: "Working at ConstraBuild has given me the opportunity to grow both professionally and personally. The collaborative environment and challenging projects have helped me develop my skills and advance my career.",
      author: "Michael Chen",
      position: "Project Manager",
      years: "5 years at ConstraBuild"
    },
    {
      quote: "What I appreciate most about working here is the emphasis on safety and quality. The company truly cares about its employees and provides the training and resources we need to excel in our roles.",
      author: "Sarah Johnson",
      position: "Civil Engineer",
      years: "3 years at ConstraBuild"
    },
    {
      quote: "ConstraBuild's commitment to innovation has allowed me to work with cutting-edge technology and methodologies. It's exciting to be part of a company that's shaping the future of construction.",
      author: "David Rodriguez",
      position: "BIM Coordinator",
      years: "2 years at ConstraBuild"
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
              Build Your <span className="text-construction-gold">Career</span> With Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our team of talented professionals and contribute to projects that shape the built environment. We offer challenging work, opportunities for growth, and a collaborative culture.
            </p>
            <Button 
              className="bg-construction-gold hover:bg-amber-600 text-white font-medium text-lg"
              onClick={() => document.getElementById('current-openings')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Current Openings
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        {/* Diagonal Bottom Shape */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
        }}></div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">
              Why Join <span className="text-construction-gold">ConstraBuild</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job – we provide a career with purpose, growth opportunities, and a supportive community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-construction-gold mb-4">
                <Award size={36} />
              </div>
              <h3 className="text-xl font-bold text-construction-navy mb-3">Challenging Projects</h3>
              <p className="text-gray-600">
                Work on landmark projects that push the boundaries of engineering and construction, from iconic skyscrapers to complex infrastructure.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-construction-gold mb-4">
                <Users size={36} />
              </div>
              <h3 className="text-xl font-bold text-construction-navy mb-3">Collaborative Culture</h3>
              <p className="text-gray-600">
                Join a team of talented professionals who work together to solve complex challenges and deliver exceptional results.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-construction-gold mb-4">
                <Heart size={36} />
              </div>
              <h3 className="text-xl font-bold text-construction-navy mb-3">Comprehensive Benefits</h3>
              <p className="text-gray-600">
                Enjoy competitive compensation, health insurance, retirement plans, paid time off, and other benefits that support your wellbeing.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-construction-gold mb-4">
                <Clock size={36} />
              </div>
              <h3 className="text-xl font-bold text-construction-navy mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">
                We value your time and understand the importance of balance. Enjoy flexible work arrangements and a supportive environment.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-construction-gold mb-4">
                <Award size={36} />
              </div>
              <h3 className="text-xl font-bold text-construction-navy mb-3">Career Development</h3>
              <p className="text-gray-600">
                Access training programs, mentorship opportunities, and a clear path for advancement to help you grow professionally.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-construction-gold mb-4">
                <Users size={36} />
              </div>
              <h3 className="text-xl font-bold text-construction-navy mb-3">Diverse & Inclusive</h3>
              <p className="text-gray-600">
                Be part of a diverse team where different perspectives are valued and everyone has the opportunity to contribute and succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-on-scroll">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-6">
                Our <span className="text-construction-gold">Culture</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At ConstraBuild, we foster a culture of excellence, innovation, and collaboration. We believe that our success is built on the talent, dedication, and diversity of our people.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are committed to creating an inclusive environment where everyone feels valued and empowered to contribute their best work. Our core values of integrity, quality, safety, and sustainability guide everything we do.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="h-6 w-6 text-construction-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-construction-navy">Team Collaboration</h4>
                    <p className="text-gray-600">We work together across disciplines to solve complex challenges and deliver exceptional results.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="h-6 w-6 text-construction-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-construction-navy">Innovation Mindset</h4>
                    <p className="text-gray-600">We embrace new ideas, technologies, and approaches to continuously improve our work.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="h-6 w-6 text-construction-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-construction-navy">Community Engagement</h4>
                    <p className="text-gray-600">We actively participate in community initiatives and volunteer opportunities to give back.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg h-48 md:h-64 object-cover object-center"
              />
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                alt="Team meeting" 
                className="rounded-lg shadow-lg h-48 md:h-64 object-cover object-center"
              />
              <img 
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1136&q=80" 
                alt="Construction site" 
                className="rounded-lg shadow-lg h-48 md:h-64 object-cover object-center"
              />
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Team celebration" 
                className="rounded-lg shadow-lg h-48 md:h-64 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">
              Employee <span className="text-construction-gold">Testimonials</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our team members about their experiences working at ConstraBuild.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-md">
                <div className="mb-6 text-construction-gold">
                  <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <h4 className="text-lg font-bold text-construction-navy">{testimonial.author}</h4>
                    <p className="text-gray-500">{testimonial.position}</p>
                    <p className="text-sm text-construction-gold">{testimonial.years}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="current-openings" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">
              Current <span className="text-construction-gold">Openings</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our open positions and find the right opportunity for your skills and career goals.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12 animate-on-scroll">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search job titles or keywords..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="md:w-1/4">
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-construction-gold"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option value="all">All Departments</option>
                  {departments.filter(d => d !== "all").map((department) => (
                    <option key={department} value={department}>{department}</option>
                  ))}
                </select>
              </div>
              
              <div className="md:w-1/4">
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
            </div>
          </div>

          {/* Job Listings */}
          <div className="animate-on-scroll">
            <Tabs defaultValue="list" className="mb-8">
              <TabsList className="mb-6">
                <TabsTrigger value="list">List View</TabsTrigger>
                <TabsTrigger value="detail">Detailed View</TabsTrigger>
              </TabsList>
              
              <TabsContent value="list">
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posted</th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredJobs.map((job) => (
                        <tr key={job.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-construction-navy">{job.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-600">{job.department}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-600">{job.location}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-construction-gold">
                              {job.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(job.posted).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button 
                              onClick={() => handleApply(job.title)}
                              className="bg-construction-gold hover:bg-amber-600 text-white font-medium"
                              size="sm"
                            >
                              Apply Now
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {filteredJobs.length === 0 && (
                  <div className="text-center py-12 bg-gray-100 rounded-lg">
                    <h3 className="text-xl font-bold text-construction-navy mb-2">No Jobs Found</h3>
                    <p className="text-gray-600">Please try different search criteria or filters.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="detail">
                <div className="space-y-8">
                  {filteredJobs.map((job) => (
                    <div key={job.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <div className="flex flex-col md:flex-row justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-construction-navy mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-3 mb-4">
                            <span className="flex items-center text-sm text-gray-600">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {job.department}
                            </span>
                            <span className="flex items-center text-sm text-gray-600">
                              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {job.location}
                            </span>
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-amber-100 text-construction-gold">
                              {job.type}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <span className="text-sm text-gray-500 block mb-2">
                            Posted: {new Date(job.posted).toLocaleDateString()}
                          </span>
                          <Button 
                            onClick={() => handleApply(job.title)}
                            className="bg-construction-gold hover:bg-amber-600 text-white font-medium w-full md:w-auto"
                          >
                            Apply Now
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-gray-600 mb-4">{job.description}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-construction-navy mb-3">Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {job.responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-gray-600">{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-construction-navy mb-3">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {job.requirements.map((requirement, index) => (
                            <li key={index} className="text-gray-600">{requirement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                  
                  {filteredJobs.length === 0 && (
                    <div className="text-center py-12 bg-gray-100 rounded-lg">
                      <h3 className="text-xl font-bold text-construction-navy mb-2">No Jobs Found</h3>
                      <p className="text-gray-600">Please try different search criteria or filters.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default CareersPage;
