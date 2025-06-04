import React, { useRef, useState } from 'react';
import { useIsVisible } from '../utils/hooks';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(sectionRef);
  const [filter, setFilter] = useState<string>('all');
  
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  );
  
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div 
        className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent dark:from-gray-800 dark:to-transparent opacity-50"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)'
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="My Projects" 
          subtitle="Check out some of my recent work"
        />
        
        <div className="flex justify-center mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`m-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setFilter(tag)}
              className={`m-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === tag
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-500 h-full ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;