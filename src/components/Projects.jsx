import React, { useState } from 'react';
import { Github, ExternalLink, Code, Database, BarChart3, FileSpreadsheet } from 'lucide-react';
import { projects } from '../data/projects.js';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const getIcon = (technologies) => {
    if (technologies.some(tech => tech.includes('SQL'))) return <Database className="w-6 h-6" />;
    if (technologies.some(tech => tech.includes('Python'))) return <Code className="w-6 h-6" />;
    if (technologies.some(tech => tech.includes('Tableau') || tech.includes('Power BI'))) return <BarChart3 className="w-6 h-6" />;
    if (technologies.some(tech => tech.includes('Excel'))) return <FileSpreadsheet className="w-6 h-6" />;
    return <Code className="w-6 h-6" />;
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        filter === 'featured' ? project.featured : 
        project.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase()))
      );

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'sql', label: 'SQL' },
    { key: 'python', label: 'Python' },
    { key: 'visualization', label: 'Visualization' }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of data engineering projects demonstrating expertise in ETL pipelines, 
            data analysis, and business intelligence solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === filterOption.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="card p-6 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 p-2 bg-white/90 rounded-lg">
                  {getIcon(project.technologies)}
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interested in seeing more of my work or discussing a collaboration?
          </p>
          <a
            href="https://github.com/RithvikPanchumarthi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
