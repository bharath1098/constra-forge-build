
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    category: string;
    location: string;
    year: number;
    image: string;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-construction-navy/80 to-transparent opacity-70"></div>
        
        <div className="absolute inset-0 flex items-end p-6">
          <div>
            <span className="inline-block px-3 py-1 mb-2 bg-construction-gold/90 text-white text-sm font-medium rounded">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <div className="flex items-center text-gray-200 text-sm">
              <span>{project.location}</span>
              <span className="mx-2">•</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
        
        <Link
          to={`/projects/${project.id}`}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="bg-white text-construction-navy font-medium px-4 py-2 rounded-full flex items-center transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0">
            View Project <ArrowUpRight className="ml-1 h-4 w-4" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
